const request = require('supertest');
const app = require('./server');


describe('Todo API', () =>{
    //Prueba de para obtener todas las tareas al inicio vacias
    describe('GET /api/todos', ()=>{
        it('deberia devolver una lista con las tareas', async () => {
            const response = await request(app).get('/api/todos');
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual([]);
        })
    } );

    //Crear nuevo Todo
    describe('POST /api/todos', () =>{
        it('deberia crear una nueva tarea', async () =>{
            const newTodo = {
                title:'Nueva tarea de test',
                description: 'Descripcion del test'
            };
            const response = await request(app).post('/api/todos').send(newTodo);
            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.title).toBe(newTodo.title);
            expect(response.body.description).toBe(newTodo.description);
            expect(response.body.completed).toBe(false);
        });
        it('deberia devolver un error si el req.body no tiene el titulo', async () =>{
            const newTodo = {
                description:'Descripcion 2'
            };
            const response = await request(app).post('/api/todos').send(newTodo);
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual({message: 'Title is required'});
        });

    });

    //Crear nuevo Todo
    describe('GET /api/todos:id', () =>{
        it('deberia devolver la tarea por id', async () => {
            const todoN = { title: 'tAREA 1' };
            const postTask = await request(app).post('/api/todos').send(todoN);

            const response = await request(app).get(`/api/todos/${postTask.body.id}`);
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(postTask.body);
        });
    });
    
    
});