import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../../middleware/handle-error';
import Book from '../../../models/Book';

let all: RequestHandler = async (req, res) => {
  const books = await Book.find().populate({ path: 'creator' });
  res.send({ books });
};

all = handleErrorMiddleware(all);

export default all;
