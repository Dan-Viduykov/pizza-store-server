import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Pizza, PizzaDocument } from './pizza.schema';
import { CreatePizzaDto } from './dto/create-pizza.dto';

interface GetAllProps {
  count?: number;
  offset?: number;
  filterBy?: 'meat' | 'vegan' | 'gril' | 'spicy' | undefined;
  sortBy?: 'rating' | 'price' | 'title';
  trend?: 'asc' | 'desc';
}

@Injectable({})
export class PizzaService {
  constructor(
    @InjectModel(Pizza.name) private PizzaModel: Model<PizzaDocument>,
  ) {}

  async create(dto: CreatePizzaDto): Promise<Pizza> {
    const pizza = await this.PizzaModel.create({ ...dto });
    return pizza;
  }

  async getAll(props: GetAllProps): Promise<{ data: Pizza[]; count: number }> {
    const {
      count = 4,
      offset = 0,
      filterBy,
      sortBy = 'rating',
      trend = 'asc',
    } = props;

    const filterByType = filterBy ? { category: filterBy } : null;
    const pizzas = await this.PizzaModel.find(filterByType);

    pizzas.sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return a.rating - b.rating;
      } else {
        const textA = a.title.toUpperCase();
        const textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      }
    });

    if (trend === 'desc') {
      pizzas.reverse();
    }

    return {
      data: pizzas.slice(offset, offset + count),
      count: pizzas.length,
    };
  }

  async search(query: string): Promise<Pizza[]> {
    const pizzas = await this.PizzaModel.find({
      title: { $regex: new RegExp(query, 'i') },
    });

    return pizzas;
  }

  async getOne(id: ObjectId): Promise<Pizza> {
    const pizza = await this.PizzaModel.findById(id);
    return pizza;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const pizza = await this.PizzaModel.findByIdAndDelete(id);
    return pizza._id;
  }
}
