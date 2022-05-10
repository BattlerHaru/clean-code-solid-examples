import { PhotosService, PostService, TodoService } from './b';

(async () => {

    const todoService = new TodoService();
    const postService = new PostService();
    const photosService = new PhotosService();

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();


    console.log({ todos, posts, photos });

})();