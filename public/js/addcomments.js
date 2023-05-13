//this code fetches a comment by the id to post it onto the post attributed to it
//there are bugs in this functionality, but when a user clicks create comment, a form to do so is displayed

let createCommentButton = document.getElementById('create-button');

let commentForm = document.getElementById('new-comments-form');

createCommentButton.addEventListener('click', () => {
  console.log('you clicked me')
        commentForm.setAttribute('style', 'display: block');
        createCommentButton.setAttribute('style', 'display: none')
});

const newCommentsHandler = async (event) => {
    event.preventDefault();
    console.log("You clicked me");
    const content = document.querySelector('#content').value.trim();
    const id = window.location.toString().split("/")[window.location.toString().split("/").length-1]
  
    if (content) {
      const response = await fetch(`/api/comments/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If response is ok , reload page
        document.location.replace(`/posts/${id}`);
      } else {
        alert(response.statusText);
      }
    };
};

document.querySelector('#submit-comments').addEventListener('submit', newCommentsHandler);