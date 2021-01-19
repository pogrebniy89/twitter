class Twiter {
    constructor({ listElem }) {
        this.tweets = new Posts({});
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts(){

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost(){

    }

    openModal() {

    }

}

class Posts {
    constructor({param = []} = {}) {
        this.posts = param.posts;
    }

    addPost(tweet) {
        const post = new Post(tweet);
        this.posts.push(post);
    }

    deletePost(id) {

    }

    likePost(id) {

    }
}

class Post {
    constructor(param) {
        this.id = param.id;
        this.userName = param.userName;
        this.nickname = param.nickname;
        this.postData = param.postData;
        this.text = param.text;
        this.ing = param.ing;
        this.liked = false;
        this.likes = param.likes;
    }

    changeLike() {
        this.like = !this.likes;
        if (this.liked) {
            this.liked++;
        } else {
            this.likes--;
        }
    }
}

const twwiter = new Twiter({
    listElem: '.tweet-list'
});

console.log(twwiter);