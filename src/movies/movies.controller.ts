import { Body, Controller, Delete, Get, Param, Post, Patch, Query } from '@nestjs/common';
import { getEnvironmentData } from 'worker_threads';

@Controller('movies')
export class MoviesController {


  @Get()
  getAll(): string {
    return "This will return all movies"
  }

  @Get("search")
  search(@Query("year") searchingYear:string){
    return `We are searching for a movie with a title ${searchingYear}`
  }

  @Get(":id")
    getOne(@Param("id") movieId:string){
      return `This will return one movie ${movieId}`
    }

  @Post()
  create(@Body() movieData){
    console.log(movieData);
    return movieData
  }

  @Delete(":id")
  remove(@Param('id') movieId:string){
    return `This will delete a movie with the id: ${movieId}`
  }

  @Patch(':id')
  patch(@Param('id') movieId:string, @Body() updateData){
    return {
      updateMovie:movieId,
      ...updateData
    }
  }

  
}
