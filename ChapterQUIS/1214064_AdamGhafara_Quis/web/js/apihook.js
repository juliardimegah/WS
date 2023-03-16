function PushReg(){
    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(username,email,password);
}

function PostSignUp(username,email,password){
var myHeaders = new Headers();
myHeaders.append("reghook", "$^[xhF9;V&w#CR'huKj;xGm-;~^S:EE!,Xpt;a*kU%7>vKLSw:&28`VyGFxuWuZ)z%yZH&-f");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": username,
  "email": email,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://eo218ccadktgtds.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));  
}

function GetResponse(result){
  document.getElementById("formsignup").style.display = 'none';
  document.getElementById("formsignup").style.display = 'block';
  document.getElementById("formsignup").innerHTML = result;
}