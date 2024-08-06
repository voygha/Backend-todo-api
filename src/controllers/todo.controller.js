todoCtrl = {};

let todos ={}; //Variable para guardar las tareas
let id = 1; // El id que ira cambiando con la tarea

todoCtrl.getTodos = (req,res) => {
    res.json(Object.values(todos));
}

todoCtrl.createTodo = (req, res) =>{
    const {title, description} = req.body;
    if(!title){
        return res.status(400).json({message: 'Title is required'});
    }
    const newTodo = {
        id: id++,
        title,
        description: description || '',
        completed: false,
    }
    todos[newTodo.id] = newTodo;
    res.status(201).json(newTodo);
} 

todoCtrl.getTodoById = (req,res) =>{
    const {id} = req.params;
    const todo = todos[id];
    //Si no existe la tarea por el id
    if(!todo){
        return res.status(404).json({message: 'Task not Found'});
    }
    res.json(todo);
}

todoCtrl.updateTodo= (req,res) =>{
    const {id} = req.params;
    const { title,description, completed } = req.body;
    const todo = todos[id];
    //Si no existe la tarea
    if(!todo){
        return res. status(404).json({message: 'Task not found'});
    }
    // Se cambia el titulo en caso de que haya datos en el req.body
    if( title !== undefined){
        todo.title = title;
    }
    if( description !== undefined){
        todo.description = description;
    }
    if(completed !== undefined){
        todo.completed = completed;
    }
    res.status(202).json(todo);
}

todoCtrl.deleteTodo = (req,res) =>{
    const {id} = req.params;
    const todo = todos[id];
    if(!todo){
        return res.status(404).json({message: 'Task not Found'})
    }
    const deletedTodo = todo;
    delete todos[id];
    res.status(200).json({message:'Task deleted', deletedTodo:deletedTodo});
}

module.exports = todoCtrl;