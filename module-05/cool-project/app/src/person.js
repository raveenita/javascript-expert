const { evaluaterRegex } = require("./util/invalid-regex");

// (\w+):\s.* this will match the following this.pattern = pattern
class Person {
    constructor([name, citizenship, maritalStatus, cpf, street, number, neighborhood, city]){
        const firstLetterRegex = evaluaterRegex(/^(\w{1})([a-zA-z]+$)/g);
        const formatFirstLetter = (str) => {
            return str.replace(firstLetterRegex, (fullMatch, group1, group2, index) => {
                return `${group1.toUpperCase()}${group2.toLowerCase()}`;
            });
        }

        this.name = name
        this.citizenship = formatFirstLetter(citizenship)
        this.maritalStatus = formatFirstLetter(maritalStatus)
        this.cpf = cpf.replace(/\D/g, '')
        this.street = street.match(evaluaterRegex(/<(?=\sa\s).*$/)).join()
        this.number = number
        this.neighborhood = neighborhood.match(evaluaterRegex(/(?<=\s).*$/)).join()
        this.city = city.replace(evaluaterRegex(/\.$/), '')
    }
}

module.exports = Person;