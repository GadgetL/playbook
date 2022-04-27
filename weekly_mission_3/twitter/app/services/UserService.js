const User = require('./../models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user) {
        let info = [user.id, user.username, user.name, user.bio, user.dateCreated, user.lastUpdated]
        return info
    }

    static updateUsername(user, username) {
        user.setUsername(username)
    }

    static getAllUsernames(users) {
        const allUsernames = []
        users.forEach(function(user) {
            allUsernames.push(user.getUsername())
        })

        return allUsernames
    }
}

module.exports = UserService