import Express from 'express';
import UserController from './controllers/UserController';
import PostController from './controllers/PostController';

const app = Express();
app.use(Express.json());
const PORT= 8000;

app.get('/', (request, response) => {
  return response.send({message: 'Hello World!'});
});

app.post('/createUser', UserController.createUser);

app.get('/listUsers', UserController.listAllUsers);

app.delete('/deleteUser/:id', UserController.deleteUser);

app.post('/createPost', PostController.createPost);

app.get('/listPost/:id', PostController.listPost);

app.put('/updatePost/:id', PostController.updatePost);

app.delete('/deletePost/:id', PostController.deletePost);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});