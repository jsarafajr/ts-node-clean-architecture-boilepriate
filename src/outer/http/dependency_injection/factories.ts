import { getCustomRepository } from 'typeorm';
import { BlogInteractor } from '../../../interactors/BlogInteractor';
import { BlogRepositoryImpl } from '../../database/BlogRepositoryImpl';

export const blogInteractorFactory = (): BlogInteractor => {
  const blogRepository = getCustomRepository(BlogRepositoryImpl);
  return new BlogInteractor(blogRepository);
};
