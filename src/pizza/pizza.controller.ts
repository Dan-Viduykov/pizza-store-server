import { ObjectId } from 'mongoose';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
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
  getAll(
    @Query('count') count: number,
    @Query('offset') offset: number,
    @Query('filterBy')
    filterBy: 'meat' | 'vegan' | 'gril' | 'spicy' | undefined,
    @Query('sortBy') sortBy: 'rating' | 'price' | 'title',
    @Query('trend') trend: 'asc' | 'desc',
  ) {
    return this.pizzaService.getAll({ count, offset, filterBy, sortBy, trend });
  }

  @Get('/search')
  search(@Query('query') query: string) {
    return this.pizzaService.search(query);
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
