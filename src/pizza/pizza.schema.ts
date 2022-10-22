import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PizzaDocument = Pizza & Document;

@Schema()
export class Pizza {
  @Prop()
  name: string;

  @Prop()
  category: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop()
  picture: string;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
