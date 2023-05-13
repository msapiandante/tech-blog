//when a user hits log out button, ends session and replaces page with login page
const logoutProfile = async () => {
    const loginResponse = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });
    if(loginResponse.ok){
        document.location.replace('/login');
    }else{
        alert(loginResponse.statusText);
    };
};

document.querySelector('#logout').addEventListener('click', logoutProfile)