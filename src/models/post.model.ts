import {Entity, model, property,} from '@loopback/repository';

@model()
export class Post extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  constructor(data?: Partial<Post>) {
    super(data);
  }
}
