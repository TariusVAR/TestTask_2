import { Prisma } from '@prisma/client';
import { IsEmpty, IsNotEmpty } from 'class-validator';

export class CreateArticleDto implements Prisma.ArticleCreateInput {


  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  
}