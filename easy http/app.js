const http = new easyHTTP;

// //get posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){
//   if(err){
//     console.log(err);
//   } else {
//   console.log(response);
//   }
// });

// //get single posts
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
//   if(err){
//     console.log(err);
//   } else {
//   console.log(response);
//   }
// });

//Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// //update post 
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }

// });

//delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){
  if(err){
    console.log(err);
  } else {
    console.log(response);
  }
});