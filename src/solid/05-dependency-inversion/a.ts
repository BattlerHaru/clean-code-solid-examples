import { PostService } from './b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './c';


// Main
(async () => {

    const provider = new WebApiPostService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();
