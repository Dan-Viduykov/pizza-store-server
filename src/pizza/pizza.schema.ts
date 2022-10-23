import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PizzaDocument = Pizza & Document;

@Schema()
export class Pizza {
  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  rating: number;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
