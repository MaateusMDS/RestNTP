import Express from 'express';
import UserController from './controllers/UserController';

const app = Express();
app.use(Express.json());
const PORT= 8000;

app.get('/', (request, response) => {
  return response.send({message: 'Hello World'});
});

app.post('/createUser', UserController.createUser);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});