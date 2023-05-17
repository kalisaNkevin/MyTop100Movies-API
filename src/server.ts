import app from './app';
import { PORT, MONGO_URL } from './config';
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL).then(() => {
  console.log('*****Successfully Connected to Database ******');
});

app.listen(PORT, () => {
  console.log(`The server is listening on port  => ${PORT}`);
});
