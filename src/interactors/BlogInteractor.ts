import { BlogRepository } from '../domain/blog/BlogRepository';
import { Blog } from '../domain/blog/Blog';

export class BlogInteractor {
  public constructor(private blogRepository: BlogRepository) {
  }

  public getBlogInformation(id: number): Promise<Blog | undefined> {
    return this.blogRepository.find(id);
  }

  public registerBlog(user: number, name: string, description: string): Promise<Blog> {
    return this.blogRepository.create(user, name, description);
  }
}