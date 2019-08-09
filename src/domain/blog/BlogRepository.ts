import { Blog } from './Blog';

export interface BlogRepository {
  find(id: number): Promise<Blog | undefined>;
  create(user: number, name: string, description: string): Promise<Blog>;
}