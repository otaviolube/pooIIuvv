import express from 'express';
import MainRouter from './routes/MainRouter';
import UserRouter from './routes/UserRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(UserRouter);
app.use(MainRouter);

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
})