const { ObjectId } = require('bson')
const conn = require('./conn');
const DATABASE = 'tp2c2021';
const POSTS = 'posts';

// Retorna todos los posts joineados con su autor de la coleccion de usuarios.
async function getAllPosts(){
  const connection = await conn.getConnection()
  const posts = await connection
    .db(DATABASE)
    .collection(POSTS)
    .aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'usuarioId',
          foreignField: '_id',
          as: 'autor'
        }
      },
      {
        $unwind: '$autor'
      }
    ])
    .toArray();

    return posts;
}

async function createPost(newPost){
  const connection = await conn.getConnection()
  const insertionResult = await connection
    .db(DATABASE)
    .collection(POSTS)
    .insertOne(newPost)
  return insertionResult;
}

async function getPostById(id){
  const connection = await conn.getConnection()
  const post = await connection
    .db(DATABASE)
    .collection(POSTS)
    .findOne({ _id: new ObjectId(id) })
    return post
}

async function getPostsByUserId(userId){
  const connection = await conn.getConnection()
  const posts = await connection
      .db(DATABASE)
      .collection(POSTS)
      .aggregate([
          {
              $lookup: {
                  from: 'users',
                  localField: 'usuarioId',
                  foreignField: '_id',
                  as: 'autor'
              }
          },
          {
              $unwind: '$autor'
          },
          {
              $match: {
                  'users._id': new ObjectId(userId)
              }
          }
      ])
      .toArray();
    return posts;
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

async function getCommnetsByPostId(postId){
  const posts = await getAllPosts()
  const comments = posts
  .filter((post) => post._id == postId)
  .map((post) => {
      const comments = post.respuestas;
      return comments
  })       
    return comments
}

module.exports = {getAllPosts,createPost,getPostById,getPostsByUserId,postLike,getLikesByPostId,getCommnetsByPostId}