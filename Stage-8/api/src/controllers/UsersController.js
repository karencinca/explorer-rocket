const { hash } = require("bcryptjs")
const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError("Este e-mail já está em uso.")
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return response.status(201).json()
    }

    async update(request, response) {
        const { name, email } = request.body
        const { id } = request.params

        const database = await sqliteConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

        if(!user) {
            throw AppError("Usuário não encontrado.")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.")
        }

        user.name = name
        user.email = email

        await database.run(`
            UPDATE users SET
            name = ?,
            email = ?,
            updated_at = ?
            WHERE id = ?`,
            [user.name, user.email, new Date(), user.id]
        )

        return response.status(200).json()
    }
}

module.exports = UsersController


/* 
Métodos (no máximo 5 para um controller):
-> index - GET para listar vários registros
-> show - GET para exibir um registro específico
-> create - POST para criar um registro
-> update - PUT para atualizar um registro
-> delete - DELETE para remover um registro
*/