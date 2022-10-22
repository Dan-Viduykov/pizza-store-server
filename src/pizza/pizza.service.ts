import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
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
  //   async getAll() {}
  //   async getOne() {}
  //   async delete() {}
}
