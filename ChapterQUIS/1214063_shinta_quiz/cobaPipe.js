function PushButton(){
  namadepan=document.getElementById("nama1").value;
  namabelakang=document.getElementById("nama2").value;
  emaill=document.getElementById("email").value;
  pass=document.getElementById("password").value;
  PostSignUp(nama1,nama2,email,password);
}

function PostSignUp(nama1,nama2,email,password){
  var myHeaders = new Headers();
  myHeaders.append("Login", "bismillah");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
  "nama1": nama1,
  "nama2": nama2,
  "email": email,
  "password": password,
  });

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

  fetch("https://eop82h6od7hos3n.m.pipedream.net", requestOptions)
  .then(response => response.text())
  .then(result => GetResponse(result))
  .catch(error => console.log('error', error));
}

function GetResponse(result){
  document.getElementById("formsignup").innerHTML = result;
}