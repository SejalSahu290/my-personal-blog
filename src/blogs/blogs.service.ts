/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import  { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
 @InjectRepository(Blog)
  private blogRepository: Repository<Blog>

  async getAllBlog(): Promise<Blog[]> {
    return this.blogRepository.find(); 
  }


  async createBlog(createBlogDto: CreateBlogDto ):  Promise<Blog>{
    const { username, password } = createBlogDto;

    const blog = this.blogRepository.create({
      username,    
      password
      
    });

    await this.blogRepository.save(blog);
    return blog;

   
  }

  async deleteBlog(id: number): Promise<void> {
    const result = await this.blogRepository.delete(id); 

    if (result.affected === 0) {
      throw new NotFoundException(`Blog with ID "${id}" not found.`); 
    }
}

}

