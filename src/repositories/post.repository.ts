import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Post} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Post, dataSource);
  }
}
