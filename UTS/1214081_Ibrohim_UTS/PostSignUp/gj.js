function PushButton(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email, password);
  }
  
  function PostSignUp(email, password){
    var myHeaders = new Headers();
myHeaders.append("Login", "bisaLogin");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": email,
  "password": password,
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eo4tdlefcl79q8b.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then((result) => GetResponse(result))
  .catch(error => console.log('error', error));
  }
  
  function GetResponse(result) {
    document.getElementById("formsignup").innerHTML = result;
    console.log(result)
  }