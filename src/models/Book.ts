import { Document, Model, Schema, model, DocumentToObjectOptions } from 'mongoose';

const { ObjectId } = Schema.Types;

export interface IBook {
  /** Name of the book */
  name: string;
  /** Name of the author */
  author: string;
  /** Creator ID */
  creator: string;
}

export interface IBookDocument extends IBook, Document {
  toJSON(options?: DocumentToObjectOptions): IBook;
}

export type IBookModel = Model<IBookDocument>;

const schema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  creator: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
});

const Book: IBookModel = model<IBookDocument, IBookModel>('Book', schema);

export default Book;
