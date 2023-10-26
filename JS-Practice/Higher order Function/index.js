// Higher Order Function

// A Higher Order Function is a function that does atleast one of the following :
// ** 	Takes one or more function as an argument (parameter)
// ** Returns the function as a result

import { posts } from "./post.js";

posts.forEach((post) => {
  console.log(post);
});

console.clear();

// it filter the post by following the condition
const filteredPosts = posts.filter((post) => {
  return post.userId === 2;
});

console.log(filteredPosts);

// it mapped the filtered post with the given value that is multiply the value with 10 and  it returns an array
const mappedPost = filteredPosts.map((post) => {
  return post.id * 10;
});

console.log(mappedPost);

const reducedPost = mappedPost.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPost);
