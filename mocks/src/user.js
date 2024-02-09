class User {
    constructor({ name, id, profession, age }) {
        this.name = name;
        this.id = id;
        this.profession = profession;
        this.birthDate = new Date().getFullYear() - age;
    }
    
}

module.exports = User;