describe('Person', () => {
    it('should generate a person instance from properties list', () => {
        const content = [
            'John Doe',
            'american',
            'married',
            'CPF 235.743.420-12',
            'residente e domiciliada a Rua dos bobos',
            'zero',
            'bairro Alphaville',
            'São Paulo.'
        ];

        const result = new Person(content);

        const expected = { 
            name: 'John Doe',
            citizenship: 'American',
            maritalStatus: 'Married',
            cpf: '23574342012',
            street: 'Rua dos bobos',
            number: 'zero',
            neighborhood: 'Alphaville',
            city: 'São Paulo'
        }

        expected(result).toEqual(expected);
    });
});