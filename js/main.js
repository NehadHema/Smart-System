// inputs
var loginEmail = document.querySelector('#loginEmail');
var loginPassword = document.querySelector('#loginPassword');
var signupName = document.querySelector('#signupName');
var signupEmail = document.querySelector('#signupEmail');
var signupPassword = document.querySelector('#signupPassword');

//error Messages
var loginError = document.querySelector('#loginError');
var signupError = document.querySelector('#signupError');

//buttons
var loginButton = document.querySelector('#loginButton');
var signUpButton = document.querySelector('#signUpButton');

// span & H1
var loginUser= document.querySelector('#user');

//array
var array = [];
if (localStorage.getItem('users') != null) {
 array = JSON.parse(localStorage.getItem('users'));
}

// loginButton.addEventListener('click', function(){
//     login();
// });

// signUpButton.addEventListener('click', function(){
//     signUp();
// });


//Registration Section Starts

function isExist() {
    for (var i = 0; i < array.length; i++) {
        if (array[i].email.toLowerCase().includes(signupEmail.value.toLowerCase())) {
            return false;
        }
    }
}

function signUp() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        signupError.innerHTML = '<span class="text-danger m-3">All inputs is required</span>';
        return false
    } else {
        var signUp = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        if (array.length == 0) {
            array.push(signUp);
            localStorage.setItem('users', JSON.stringify(array));
            signupError.innerHTML = '<span class="text-success m-3">Success</span>';
            return true
        }
        if (isExist() == false) {
            signupError.innerHTML = '<span class="text-danger m-3">email already exists</span>';
        } else {
            array.push(signUp)
            localStorage.setItem('users', JSON.stringify(array));
            signupError.innerHTML = '<span class="text-success m-3">Success</span>';
        }
    }
}

//Registration Section Ends


// Login Section Starts


function login() {

    if (loginEmail.value == "" || loginPassword.value == "") {
        loginError.innerHTML = '<span class="text-danger m-3">All inputs is required</span>';
        return false;
    }

    var password = loginPassword.value , email = loginEmail.value;

    for (var i = 0; i < array.length; i++) {
        if (array[i].email.toLowerCase().includes(email.toLowerCase()) && array[i].password.toLowerCase().includes(password.toLowerCase())) {
            localStorage.setItem('login', array[i].name);
            location.href ="home.html";
        } else {
            loginError.innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>';
        }
    }
}
// Login Section Ends 


// Home Section Starts
var user = localStorage.getItem('login');
if (user) {
    loginUser.innerHTML = "Welcome " + user;
}

function logout() {
    localStorage.removeItem('login');
}
// Home Section Ends 

// To prevent typing Arabic
$('#loginEmail').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    loginError.innerHTML = '<span class="p-2 text-danger">Please Enter English Characters</span>';
    return false;
});
$('#loginPassword').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    loginError.innerHTML = '<span class="p-2 text-danger">Please Enter English Characters</span>';
    return false;
});
$('#signupName').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    signupError.innerHTML = '<span class="p-2 text-danger">Please Enter English Characters</span>';
    return false;
});$('#signupEmail').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    signupError.innerHTML = '<span class="p-2 text-danger">Please Enter English Characters</span>';
    return false;
});$('#signupPassword').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    signupError.innerHTML = '<span class="p-2 text-danger">Please Enter English Characters</span>';
    return false;
});