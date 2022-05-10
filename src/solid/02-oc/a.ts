import { PhotosService, PostService, TodoService } from './b';
import { HttpClient } from './c';

(async () => {

    const httpClient = new HttpClient();

    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photosService = new PhotosService(httpClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();


    console.log({ todos, posts, photos });

})();