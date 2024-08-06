const { Router } = require('express');

const router = Router();

const { getTodos, createTodo, getTodoById, updateTodo, deleteTodo } = require('../controllers/todo.controller');

router.get('/', getTodos);

//Creacion de las demas rutas
router.post('/', createTodo);
router.get('/:id',getTodoById);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;