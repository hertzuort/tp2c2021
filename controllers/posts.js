const posts = require('../data/posts');

async function getAllPosts(){
    return posts.getAllPosts()
}

async function createPost(newPost){
    return posts.createPost(newPost)
}

async function getPostById(id){
    return posts.getPostById(id)
}

async function getPostsByUserId(userId){
    return posts.getPostsByUserId(userId)
}

async function postLike(postId, userId){
    return posts.postLike(postId, userId)
}

async function getLikesByPostId(postId){
    return posts.getLikesByPostId(postId)
}

async function getCommnetsByPostId(postId){
    return posts.getCommnetsByPostId(postId)
}

async function getTotalLikesByPostId(postId){
    const likes = await getLikesByPostId(postId)
    const totalLikes = likes[0].length
    return totalLikes
}

module.exports = {getAllPosts,createPost,getPostById,getPostsByUserId,postLike,getLikesByPostId,getCommnetsByPostId,getTotalLikesByPostId}