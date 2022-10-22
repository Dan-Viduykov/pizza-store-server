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
import { UploadedFiles, UseInterceptors } from '@nestjs/common/decorators';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';

@Controller('/pizzas')
export class PizzaController {
  constructor(private pizzaService: PizzaService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: CreatePizzaDto) {
    const { picture } = files;
    return this.pizzaService.create(dto, picture[0]);
  }

  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.pizzaService.getAll(count, offset);
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
