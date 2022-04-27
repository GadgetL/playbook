const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "GadgetL", "Lau")
        expect(user.username).toBe("GadgetL")
        expect(user.name).toBe("Lau")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "GadgetL", "Lau")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("GadgetL")
        expect(userInfoList[2]).toBe("Lau")
        expect(userInfoList[3]).toBe("Sin Bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "GadgetL", "Lau")
        UserService.updateUsername(user, "lau")
        expect(user.username).toBe("lau")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "GadgetL1", "Lau")
        const user2 = UserService.create(2, "GadgetL2", "Lau")
        const user3 = UserService.create(3, "GadgetL3", "Lau")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("GadgetL1")
        expect(usernames).toContain("GadgetL2")
        expect(usernames).toContain("GadgetL3")
    })
})