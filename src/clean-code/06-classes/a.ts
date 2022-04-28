(() => {


    // No aplicando el principio de responsabilidad única

    type Gender = "F" | 'M';

    class Person {

        public name: string;
        public gender: Gender;
        public bday: Date;

        constructor(name: string, gender: Gender, bday: Date) {
            this.name = name;
            this.gender = gender;
            this.bday = bday;
        }
    }


    const newPerson1 = new Person('Volver al futuro', "F", new Date("1985-11-05"));
    console.log({ newPerson1 });



    class User extends Person {
        private lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            bday: Date
        ) {
            super(name, gender, bday)
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            bday: Date
        ) {
            super(email, role, name, gender, bday)
        }
    }

    const userSettings = new UserSettings(
        'Dashboard',
        'Dashboard Main',
        'marty@present.com',
        'Admin',
        'Marty',
        "M",
        new Date('1955-11-05')
    )




})();