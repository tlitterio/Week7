// Goal: Provide a function to return all posts and their comments from Firebase.
// Example output:
// [
//   { 
//     id: `random-post-id-1`, 
//     imageUrl: `https://unsplash.com/...`, 
//     numberOfLikes: 99, 
//     comments: [
//       { 
//          id: `random-comment-id-1`,
//          body: `Looks yummy!` 
//       }
//     ]
//   },
//   ...
// ]

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/posts
exports.handler = async function(event) {
  // define an empty Array to hold the return value from our lambda
  let returnValue = []
  // establish a connection to firebase in memory
  let db = firebase.firestore()
  // perform a query against firestore for all posts, wait for it to return, store in memory
  let postsQuery = await db.collection('posts').get()
  // retrieve the documents from the query
  let posts = postsQuery.docs
  console.log(posts)
  // for (let i=0; i<posts.length; i++){
  //   let post = posts[i]
  //   let postId = post.postIdconsole.log(postId)
  // }
  // loop through the post documents
    // get the id from the document
    // get the data from the document
    // create an Object to be added to the return value of our lambda
    // get the comments for this post, wait for it to return, store in memory
    // get the documents from the query
    // loop through the comment documents
      // get the id from the comment document
      // get the data from the comment document
      // create an Object to be added to the comments Array of the post
      // add the Object to the post
    // add the Object to the return value

  // return value of our lambda
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}