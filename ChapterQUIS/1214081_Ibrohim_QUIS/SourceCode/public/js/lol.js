function Daftar(){
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(email,password);
  }
  
  function PostSignUp(email,password){
    var myHeaders = new Headers();
myHeaders.append("Login", "asalasallogin");
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

fetch("https://eoz9iiqe1jrod42.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  
  function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
}