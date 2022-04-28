(() => {


    // Aplicando el principio de responsabilidad única
    // Priorizar la "composición" frente a la "herencia".
    // Esto quiere decir que, a menos estrictamente el uso de "extends", hay que evitarlos, pues añaden una capa extra de complejidad.

    type Gender = "F" | 'M';

    // Ordenado Alfabéticamente
    interface PersonProps {
        bday: Date;
        gender: Gender;
        name: string;
    }

    // Aplican el principio de responsabilidad única, pues solo se esta trabajando sobre "Person"
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

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor(
            {
                email,
                role
            }: UserProps,) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor(
            {
                lastOpenFolder,
                workingDirectory,
            }: SettingsProps
        ) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    // Composición, esto lo hace mucho mas fácil de leer.
    interface UserSettingsProps {
        bday: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor(
            { bday,
                email,
                gender,
                lastOpenFolder,
                name,
                role,
                workingDirectory
            }
                : UserSettingsProps
        ) {
            this.person = new Person({ bday, gender, name });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
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