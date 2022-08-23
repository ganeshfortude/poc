import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async getAllPosts() {
    const items = [
      {
        id: 1,
        title: 'Post one',
        paragraphs: ['p1'],
      },
      {
        id: 2,
        title: 'Post two',
        paragraphs: ['p3'],
      },
    ];
    return {
      items,
      count: 2,
    };
  }
}
