const eHttp = new EasyHTTP();

//  Get Posts
eHttp.get("https://jsonplaceholder.typicode.com/posts", (err, posts) => {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// //  Get Post
// eHttp.get("https://jsonplaceholder.typicode.com/posts/1", (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Create Data
// const data = {
//   title: "custom",
//   body: "custom body",
// };

// //  Create Post
// eHttp.post("https://jsonplaceholder.typicode.com/posts", data, (err, posts) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// //  Update Post
// eHttp.put("https://jsonplaceholder.typicode.com/posts/5", data, (err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Delete Post
// eHttp.delete("https://jsonplaceholder.typicode.com/posts/5", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });
