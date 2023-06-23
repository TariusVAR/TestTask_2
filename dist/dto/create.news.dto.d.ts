import { Prisma } from '@prisma/client';
export declare class CreateArticleDto implements Prisma.ArticleCreateInput {
    title: string;
    content: string;
}
