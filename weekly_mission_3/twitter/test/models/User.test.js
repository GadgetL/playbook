const User = require('../../app/models/user')

describe('Unit Test for User class', () => {
    test('Create an User object', () => {
        const user = new User(1, "GadgetL", "Lau", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("GadgetL")
        expect(user.name).toBe("Lau")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })

    test('Add getters', () => {
        const user = new User(1, "GadgetL", "Lau", "Bio")
        expect(user.getUsername()).toBe("GadgetL")
        expect(user.getBio()).toBe("Bio")
        expect(user.getDateCreated()).not.toBeUndefined()
        expect(user.getLastUpdated()).not.toBeUndefined()
    })

    test("Add setters", () => {
        const user = new User(1, "GadgetL", "Lau", "Bio")
        user.setUsername("Gadget")
        expect(user.getUsername()).toBe("Gadget")

        user.setBio("new bio")
        expect(user.getBio()).toBe("new bio")
    })
})