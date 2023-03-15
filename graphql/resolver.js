const Todo = require('../models/todo')

const users = [
    {name: 'Igor', age: 20, email: 'aaa@mail.by'},
    {name: 'Anton', age: 23, email: 'www@mail.by'},
]

module.exports = {
    arr() {
        return {
            count: Math.trunc(Math.random() * 10),
            users: users
        }
    },
    random({min, max, count}) {
        const arr = []
        for (let i = 0; i < count; i++) {
            const random = Math.random() * (max - min) + min
            arr.push(random)
        }
        return arr
    },
    addTestUser({user: {name, email}}) {
        const user = {
            name,
            email,
            age: Math.ceil(Math.random() * 30)
        }
        users.push(user)
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch(e) {
            throw new Error('Fetch todos error')
        }
    },
    async createTodo({todo}) {
        try {
            return await Todo.create({
                title: todo.title,
                done: false
            })
        } catch(e) {
            throw new Error('Title is required')
        }
    },
    async completeTodo({id}) {
        try {
            const todo = await Todo.findByPk(id)
            todo.done = true
            await todo.save()
            return todo
        } catch(e) {
            throw new Error('id is required')
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {
                    id: id
                }
            })
            await todos[0].destroy()
            return true
        } catch(e) {
            throw new Error('id is required')
        }
    }
}