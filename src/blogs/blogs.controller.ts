/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {  BlogsService } from './blogs.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogService: BlogsService) {}


  @Get() 
  async getAllBlog(): Promise<Blog[]> {
    return this.blogService.getAllBlog(); 
  }

  @Post()
  async createBlog(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogService.createBlog(createBlogDto ); 
  }

  @Delete(':id') 
  async deleteBlog(@Param('id') id: number): Promise<void> {
    return this.blogService.deleteBlog(id); 
  }
 
}


