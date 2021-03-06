const posts = require('../data/postRepository');
const { ObjectId } = require('bson')

async function getAllPosts() {
    const postList = await posts.getAllPosts();
    return postList.map(post => parsePosts(post));
}

async function createPost(newPost, userId){
    newPost.usuarioId = new ObjectId(userId);
    newPost.fecha = new Date();
    newPost.likes = [];
    newPost.respuestas = [];
    const insertionResult = await posts.createPost(newPost);
    return posts.getPostById(insertionResult.insertedId);
}

async function getPostById(id){
    return posts.getPostById(id)
}

async function getPostsByUserId(userId){
    const userPosts =  await posts.getPostsByUserId(userId)
    return userPosts.map(post => parsePosts(post));
}

async function postLike(postId, userId){
    return posts.postLike(postId, userId)
}

async function getLikesByPostId(postId){
    return posts.getLikesByPostId(postId)
}

async function getCommentsByPostId(postId){
    return posts.getCommentsByPostId(postId)
}

async function postCommentByPostId(postId, comment, userId){
    respuesta = {
        usuarioId: userId,
        mensaje: comment,
        fecha: new Date()
    }
    return posts.postCommentByPostId(postId, respuesta)
}

async function getTotalLikesByPostId(postId){
    const likes = await getLikesByPostId(postId)
    const totalLikes = likes[0].length
    return totalLikes
}

function parsePosts(post) {
    return {
        _id: post._id,
        mensaje: post.mensaje,
        fecha: post.fecha,
        likes: post.likes ? post.likes.length : 0,
        autor: {
            _id: post.autor._id,
            nombre: post.autor.nombre,
            apellido: post.autor.apellido,
            mail: post.autor.mail
        }
    };
}

module.exports = {getAllPosts,createPost,getPostById,getPostsByUserId,postLike,getLikesByPostId,getCommentsByPostId: getCommentsByPostId,getTotalLikesByPostId, postCommentByPostId}