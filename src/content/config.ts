import { z, defineCollection} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        upDate: z.coerce.date(),
        img: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};