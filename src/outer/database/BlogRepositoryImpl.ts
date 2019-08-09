import { AbstractRepository, EntityRepository } from 'typeorm';
import { BlogRepository } from '../../domain/blog/BlogRepository';
import { BlogEntity } from './entities/BlogEntity';
import { Blog } from '../../domain/blog/Blog';

@EntityRepository(BlogEntity)
export class BlogRepositoryImpl extends AbstractRepository<BlogEntity> implements BlogRepository {
  public find(id: number): Promise<Blog | undefined> {
    return this.repository.findOne(id);
  }

  public async create(owner: number, name: string, description: string): Promise<Blog> {
    console.log({ owner });
    const entity = new BlogEntity(name, owner);
    console.log(entity);
    return this.repository.save(entity);
  }
}
