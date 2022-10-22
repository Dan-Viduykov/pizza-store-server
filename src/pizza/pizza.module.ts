import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaService } from './pizza.service';
import { PizzaController } from './pizza.controller';
import { Pizza, PizzaSchema } from './pizza.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pizza.name, schema: PizzaSchema }]),
  ],
  controllers: [PizzaController],
  providers: [PizzaService],
})
export class PizzaModule {}
