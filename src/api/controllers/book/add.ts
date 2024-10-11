import { RequestHandler } from 'express';

import { IAuthenticateRequest } from '../../../interfaces/request';
import handleErrorMiddleware from '../../../middleware/handle-error';
import Book from '../../../models/Book';

let add: RequestHandler = async (req: IAuthenticateRequest<{}, { name: string; author: string }>, res) => {
  const { name, author } = req.body;
  const user = req.user;

  const book = new Book({ name, author, creator: user.id });
  await book.save();

  res.send({
    message: `Saved`,
    book: book.toJSON(),
  });
};

add = handleErrorMiddleware(add);

export default add;
