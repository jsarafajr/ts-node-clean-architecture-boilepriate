import { RequestHandler, Router } from 'express';
import { asyncHandler } from './core';
import { BlogInteractor } from '../../interactors/BlogInteractor';
import { ResourceNotFoundError } from './errors/errorTypes';

const getBlogHandler: RequestHandler = asyncHandler(async (req, res) => {
  const interactor = req.interactor(BlogInteractor);
  const blog = await interactor.getBlogInformation(req.params.id);

  if (!blog) {
    throw new ResourceNotFoundError('Blog not found');
  }

  res.send(blog);
});

const createBlogHandler: RequestHandler = asyncHandler(async (req, res) => {
  const interactor = req.interactor(BlogInteractor);
  const blog = await interactor.registerBlog(req.body.owner, req.body.name, req.body.description);
  res.send(blog);
});

export const setupRoutes = (): Router => {
  return Router()
    .get('/api/blogs/:id', getBlogHandler)
    .post('/api/blogs', createBlogHandler);
};