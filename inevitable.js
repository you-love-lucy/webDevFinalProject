function getNames() {
    var firstName = document.getElementById("firstName").value;
    var username = document.getElementById("username").value;
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('username', username);
}

function displayName() {
    document.getElementById("user").innerHTML = localStorage.getItem('username');
}

function clear() {
    // add some code here to clear any saved progress and return to intro.html
}