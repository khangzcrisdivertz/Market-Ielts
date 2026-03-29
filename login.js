
const sigupform = document.getElementById('signup-form');
sigupform.addEventListener('submit', (event2) => {
    event2.preventDefault();
    const name = document.getElementById('name').value;
    const emailSingup = document.getElementById('email-singup').value;
    const passwordSingup = document.getElementById('password-singup').value;
    console.log(name, emailSingup, passwordSingup);
    localStorage.setItem('name', name);
    localStorage.setItem('emailSingup', emailSingup);
    localStorage.setItem('passwordSingup', passwordSingup);
    
    if(passwordSingup.length < 8) {
        alert('Mật khẩu phải có ít nhất 8 ký tự');
    } else {
    window.location.href = "index.html";

    }
    
})

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event)  => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
   
  if(email == localStorage.getItem('emailSingup') && password == localStorage.getItem('passwordSingup')) {
 window.location.href = "index.html";

} else{
    alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại.');
}
});