import { FileModule } from './file/file.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from './pizza/pizza.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://danil:danil@cluster0.djdqiit.mongodb.net/pizza-store?retryWrites=true&w=majority',
    ),
    PizzaModule,
    FileModule,
  ],
})
export class AppModule {}
