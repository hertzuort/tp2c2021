const posts = require('../data/postRepository');
const { ObjectId } = require('bson')

async function getAllPosts() {
    const postList = await posts.getAllPosts();
    return postList.map(post => ({
        // Puede que esta transformacion aplique a varios endpoints, si es asi se puede llevar a una funcion para reutilizarla
        _id: post.id,
        mensaje: post.mensaje,
        fecha: post.fecha,
        likes: post.likes ? post.likes.length : 0,
        autor: {
          _id: post.autor._id,
          nombre: post.autor.nombre,
          apellido: post.autor.apellido,
          mail: post.autor.mail
        }
    }));
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