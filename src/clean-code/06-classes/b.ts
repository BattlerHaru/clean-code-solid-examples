(() => {


    // No aplicando el principio de responsabilidad única

    type Gender = "F" | 'M';

    // Ordenado Alfabéticamente
    interface PersonProps {
        bday: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public bday: Date;
        public gender: Gender;
        public name: string;

        constructor({ bday, gender, name }: PersonProps) {
            this.bday = bday;
            this.gender = gender;
            this.name = name;
        }
    }

    // const newPerson1 = new Person('Volver al futuro', "F", new Date("1985-11-05"));
    // console.log({ newPerson1 });

    interface UserProps {
        bday: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;

    }

    class User extends Person {
        public email: string;
        private lastAccess: Date;
        public role: string;

        constructor(
            {
                bday,
                email,
                gender,
                name,
                role
            }: UserProps,) {

            super({ bday, gender, name })

            this.lastAccess = new Date();

            this.email = email;
            this.role = role;

        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        bday: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {
                bday,
                email,
                gender,
                lastOpenFolder,
                name,
                role,
                workingDirectory,
            }: UserSettingsProps
        ) {
            super({ bday, email, gender, name, role });

            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings(
        {
            bday: new Date('1955-11-05'),
            email: 'marty@present.com',
            gender: "M",
            lastOpenFolder: 'Dashboard Main',
            name: 'Marty',
            role: 'Admin',
            workingDirectory: 'Dashboard'
        });

    console.log({ userSettings });





})();