(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const usersEmail = users.map(user => user.email);

    const canJump = false;
    const canRun = true;
    const HasItems = false;
    const isLoading = true;

    const startTime = new Date().getTime();
    //....
    // 3 Doritos después
    //...
    const endTime = new Date().getTime() - startTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl(url: string) {
        url ? 'exist' : 'not exist';
        throw new Error('Function not implemented.');
    }

    function getSquareArea(side: number) {
        const resp = side * side;
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
})();