import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://danil:danil@cluster0.djdqiit.mongodb.net/pizza-store?retryWrites=true&w=majority',
    ),
    PizzaModule,
  ],
})
export class AppModule {}
