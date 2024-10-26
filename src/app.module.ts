/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BlogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username:'postgres',
      password:'postgres@',
      database: 'blog-website',
      autoLoadEntities:true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
