let user = {
  name: "Tristan",
  password: "dog",
}

function signIn(username, password) {

  if (username === user.name && password === user.password) {
    document.getElementById('form').style.display = "none";
    document.getElementById('welcomemessage').innerHTML = "Welcome!" + username;

  }else {
    document.getElementById('status').innerHTML = "Get the fuck out of here";
  }
}

function login() {
    var userInput = document.getElementById('username').value;

    var passInput = document.getElementById('password').value;


signIn(userInput, passInput);

}
