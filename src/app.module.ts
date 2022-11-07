import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationModule } from './registration/registration.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { signup } from './registration/entities/registration.entity';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Password@123',
      database: 'ngregistration',
      entities: [
      
      ],
      synchronize: true,
    }),
    RegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
