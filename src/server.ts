import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	return res.json({
		hello: 'world',
	});
});

app.use(routes);

app.listen(3000, () => console.log('Server is running at port 3000'));
