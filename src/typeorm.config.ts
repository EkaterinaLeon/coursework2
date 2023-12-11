// typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'ваш_хост',
  port: 3306,
  username: 'ваш_пользователь',
  password: 'ваш_пароль',
  database: 'ваша_бд',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
