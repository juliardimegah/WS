function PostSignUp(firstname,lastname,email,password,confirm_password){
  var myHeaders = new Headers();
  myHeaders.append("Register", "daftar jadi ganteng");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      "namadepan": firstname,
      "namabelakang": lastname,
      "email": email,
      "password": password,
      "confirm_password": confirm_password
  });

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://eofo278xbofxnve.m.pipedream.net", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));}

      function PushButton(){
        firstname=document.getElementById("firstname").value;
        lastname=document.getElementById("lastname").value;
        email=document.getElementById("email").value;
        password=document.getElementById("password").value;
        confirm_password=document.getElementById("confirm_password").value;
        PostSignUp(firstname,lastname,email,password,confirm_password);
      }
      function GetResponse(result){
        document.getElementById("formsignup").innerHTML = result;
    }