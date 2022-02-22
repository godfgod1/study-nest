import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';



@Module({
  imports: [],
  // 컨트롤러 역할은 url을 가져오고 함수를 실행, 
  // epxress의 라우터 역할
  controllers: [MoviesController,],
  providers: [],
})
export class AppModule {
  
}
