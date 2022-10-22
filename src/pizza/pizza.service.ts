import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Pizza, PizzaDocument } from './pizza.schema';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Injectable({})
export class PizzaService {
  constructor(
    @InjectModel(Pizza.name) private PizzaModel: Model<PizzaDocument>,
  ) {}

  async create(dto: CreatePizzaDto): Promise<Pizza> {
    const pizza = await this.PizzaModel.create({ ...dto });
    return pizza;
  }

  async getAll(): Promise<Pizza[]> {
    const pizzas = await this.PizzaModel.find();
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
