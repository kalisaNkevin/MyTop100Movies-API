import app from './app';
import { PORT, MONGO_URL } from './config';
import { Logger } from './utils';
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL).then(() => {
  Logger.info('*****Successfully Connected to Database ******');
});

app.listen(PORT, () => {
  Logger.debug(`The server is listening on port  => ${PORT}`);
});
