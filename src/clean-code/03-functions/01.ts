(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface movie {
        cast: string[];
        description: string
        title: string;
        rating: number;
    }

    function createMovie({ title, description, rating, cast }: movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        console.log({ fullName })
        return true;
    }

    function createActor(fullName: string, birthDate: Date): boolean {

        if (checkFullName(fullName)) return false;

        console.log('Crear actor', birthDate);
        return true;
    }

})();