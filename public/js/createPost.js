//shows a form to create new post upon click, when post is submitted it is added to homepage and that users profile
let createButton = document.getElementById('create-button');

let postForm = document.getElementById('new-post-form');

createButton.addEventListener('click', () => {
        postForm.setAttribute('style', 'display: block');
        createButton.setAttribute('style', 'display: none')
});

const newPostHandler = async (event) => {
    event.preventDefault ();
    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If response is ok , reload page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    };
};

document.querySelector('#submit-post').addEventListener('submit', newPostHandler);