import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhubsModule } from './phubs/phubs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456789',
      database: 'phubs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PhubsModule,
  ],
})
export class AppModule {}
