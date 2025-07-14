class UserApi {
    constructor() {
        this.users = [];
    }

    addUser(name, email) {
        const newUser = { id: this.users.length + 1, name, email };
        this.users.push(newUser);
        console.log(`User ${name} added successfully`);
        return newUser;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    getAllUsers() {
        return [...this.users];
    }
    deleteUsers(id) {
        this.initialLenght = this.users.length;
        this.users = this.users.find(user => user.id != id);
        return this.users.length < this.initialLenght;
    }
}
export default UserApi;