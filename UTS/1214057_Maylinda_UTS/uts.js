function PostSignUp(email,password){
    var myHeaders = new Headers();
    myHeaders.append("login", "maylinda");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eoufwscpg27u0vl.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function PushButton(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email,password);
}