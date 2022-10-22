import { PizzaService } from './pizza.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Controller('/pizzas')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post()
  create(@Body() dto: CreatePizzaDto) {
    return this.pizzaService.create(dto);
  }

  // @Get()
  // getAll() {
  //   return 'work';
  // }
  //   getOne() {}
  //   delete() {}
}
