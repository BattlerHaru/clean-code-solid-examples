import { PostService } from './b';


// Main
(async () => {

    const postService = new PostService();

    const posts = await postService.getPosts();

    console.log({ posts })


})();
