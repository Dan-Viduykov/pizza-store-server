import { ObjectId } from 'mongoose';
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Controller('/pizzas')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post()
  create(@Body() dto: CreatePizzaDto) {
    return this.pizzaService.create(dto);
  }

  @Get()
  getAll() {
    return this.pizzaService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.pizzaService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.pizzaService.delete(id);
  }
}
