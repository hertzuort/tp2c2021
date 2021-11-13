const { ObjectId } = require('bson')
const conn = require('../server/conn');
const DATABASE = 'tp2c2021';
const POSTS = 'posts';

async function getAllPosts(){
  const connection = await conn.getConnection()
  const posts = await connection
    .db(DATABASE)
    .collection(POSTS)
    .find()
    .toArray();

    return posts
}

async function createPost(newPost){
  const connection = await conn.getConnection()
  const post = await connection
    .db(DATABASE)
    .collection(POSTS)
    .insertOne(newPost)
}

async function getPostById(id){
  const connection = await conn.getConnection()
  const post = await connection
    .db(DATABASE)
    .collection(POSTS)
    .findOne({ _id: new ObjectId(id) })

    return post
}

async function getPostsByUserId(usuarioId){
  const connection = await conn.getConnection()
  const posts = await connection
    .db(DATABASE)
    .collection(POSTS)
    .find({ usuarioId: usuarioId })
    .toArray()

    return posts
}

async function postLike(postId, userId){
  const connection = await conn.getConnection()
  const newValues = {
    $push: {
      'likes': userId
    }
  }
  const result = await connection
  .db(DATABASE)
  .collection(POSTS)
  .updateOne({ _id: new ObjectId(postId) }, newValues);
}

async function getLikesByPostId(postId){
  const posts = await getAllPosts()
  const likes = posts
  .filter((post) => post._id == postId)
  .map((post) => {
      const likes = post.likes;
      return likes
  })       
    return likes
}

module.exports = {getAllPosts,createPost,getPostById,getPostsByUserId,postLike,getLikesByPostId}