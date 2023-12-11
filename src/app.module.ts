// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantModule } from './routes/restaurant.routes';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Ваши настройки для подключения к базе данных
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'your_database',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RestaurantModule,
  ],
})
export class AppModule {}
