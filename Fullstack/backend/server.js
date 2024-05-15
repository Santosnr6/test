import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

let todos = [
    { id: 1, task: 'Gå ut med hunden', done: false },
    { id: 2, task: 'Handla mat', done: true },
    { id: 3, task: 'Träna', done: false }
];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { task, id, done } = req.body;
    console.log(req.body);
    if (!task || typeof id !== 'number' || typeof done !== 'boolean') {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const createdAt = new Date();
    todos.push({ task, id, done, createdAt });

    res.status(201).json({ message: 'Todo added successfully' });
});

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter(todo => todo.id !== parseInt(id));
    console.log(todos);
    res.json({ message: 'Todo deleted successfully' });
});

app.delete('/api/todos', (req, res) => {
    console.log('delete');
    todos = [];
    res.json({ message: 'All todos deleted successfully' });
});

app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { task, done } = req.body;
    const todo = todos.find(todo => todo.id === parseInt(id));
    console.log(todo);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    if (task !== undefined) {
        todo.task = task;
    }
    if (done !== undefined) {
        todo.done = done;
    }

    res.json({ message: 'Todo updated successfully' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
