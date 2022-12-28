class User {
    username;
    email;
    password;
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
}

let userNameInput = document.querySelector('#userName')
let emailInput = document.querySelector('#inputEmail')
let passwordInput = document.querySelector('#Passwordinput')
let raPasswordInput = document.querySelector('#RePasswordinput')
let create = document.querySelector('.createaccount')
let ischeck;
let user;
let arr = JSON.parse(localStorage.getItem('user_List'))
if (arr==null) {
    arr = [];
}
function validate() {
    let check = true;
    let username = userNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let repassword = raPasswordInput.value;
    const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (username.trim() === '') {
        document.querySelector("#userInputX").innerText = 'Username cannot be blank !!!'
        check = false;
        return;
    } else if (username.length < 6) {
        document.querySelector('#userInputX').innerText = 'Username must have at least 6 characters !!!'
        check = false;
        return;
    } else {
        document.querySelector('#userInputX').innerText = ''
    }
    if (email.trim() === '') {
        document.querySelector("#emailInputX").innerText = 'Email cannot be blank !!!'
        check = false;
        return;
    } else if (!EMAIL_PATTERN.test(email)) {
        document.querySelector("#emailInputX").innerText = 'Email is incorrect !!!'
        check = false;
        return;
    } else {
        document.querySelector("#emailInputX").innerText = ''
    }
    if (password.trim() === '') {
        document.querySelector("#passInputX").innerText = 'Password cannot be blank !!!'
        check = false;
        return;
    } else if (password.length < 8) {
        document.querySelector('#passInputX').innerText = 'Password must have at least 8 characters !!!'
        check = false;
        return;
    } else {
        document.querySelector('#passInputX').innerText = ''
    }
    if (repassword !== password) {
        document.querySelector('#repassInputX').innerText = 'password does not match !!!'
        check = false;
    } else {
        document.querySelector('#repassInputX').innerText = ''
    }
    if (check){
        ischeck = true;
        user = new User("username","email","password")
    }else {
        ischeck = false;
    }
}

function sumBitDate() {
    if (ischeck){
        arr.push(user)
        localStorage.setItem("user_List", JSON.stringify(arr))
    }
}
function logOut() {
    localStorage.removeItem('userList')
    location.href = 'homee.html'
}





// let arr = JSON.parse(localStorage.getItem('listUser'))
//
// function Login() {
//     let check = false
//     let username = document.querySelector('#inputUser').value;
//     let password = document.querySelector('#inputPassword').value;
//     if (username.trim()==''&&password.trim()==''){
//
//     }else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].username==username && arr[1].password==password){
//                 check = true;
//                 break;
//             }
//         }
//         if (check){
//             location.href = '.homee.html'
//         }else {
//             document.querySelector('#Error').innerText = 'Wrong account or password !!'
//         }
//     }
//
// }