(() => {

    // función para obtener información de una película por Id
    function getAllMovies(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors(id: string) {
        console.log({ id });
    }

    // función para obtener el bio del actor por el id
    function getUsuario(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists(fullName: string, birthDate: Date): boolean {

        // tarea asíncrona para verificar nombre
        // ..
        // ..
        if (fullName === 'Fernando') return false;

        console.log('Crear actor', birthDate);
        return true;

    }
})();