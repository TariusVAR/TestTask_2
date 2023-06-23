import { Prisma } from '@prisma/client';
export declare class UpdateArticleDto implements Prisma.ArticleUpdateInput {
    title: string;
    content: string;
}
