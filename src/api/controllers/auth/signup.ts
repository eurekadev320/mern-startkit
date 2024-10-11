import { RequestHandler } from 'express';

import handleErrorMiddleware from '../../../middleware/handle-error';
import User, { IUser } from '../../../models/User';
import { IBodyRequest } from '../../../interfaces/request';

type ISignupRequest = IBodyRequest<IUser>;

let signup: RequestHandler = async (req: ISignupRequest, res) => {
  const { email, password, role } = req.body;

  const user = new User({ email, password, role });
  await user.save();

  res.send(user.toJSON());
};

signup = handleErrorMiddleware(signup);

export default signup;
