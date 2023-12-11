import express from 'express';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import { Courier } from './entities/courier.entity';
import { Order } from './entities/order.entity';
import { CatalogueItem } from './entities/catalogue.entity';
import { Restaurant } from './entities/restaurant.entity';

const app = express();
const port = 3000;

app.use(bodyParser.json());

createConnection({
  type: 'mysql',
  host: 'ваш_хост',
  port: 3306,
  username: 'ваш_пользователь',
  password: 'ваш_пароль',
  database: 'ваша_бд',
  entities: [Courier, Order, CatalogueItem, Restaurant],
  synchronize: true,
}).then(() => {
  app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
  });
});
