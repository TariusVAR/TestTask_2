import { Prisma } from '@prisma/client';
import { IsEmpty } from 'class-validator';

export class UpdateArticleDto implements Prisma.ArticleUpdateInput {

  title: string;
  content: string;
}