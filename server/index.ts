import app from './app';
import {dbConnetion} from './database';

dbConnetion();
app.listen(3000);
console.log('Server is running on port 3000');