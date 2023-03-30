function PostSignUp(fullname,email,password,confirm_password){
  var myHeaders = new Headers();
  myHeaders.append("Register", "daftar jadi ganteng");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      "namadepan": fullname,
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
    
    fetch("https://eoqdq1kfwxflony.m.pipedream.net", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));}

      function PushButton(){
        fullname=document.getElementById("fullname").value;
        email=document.getElementById("email").value;
        password=document.getElementById("password").value;
        confirm_password=document.getElementById("confirm_password").value;
        PostSignUp(fullname,email,password,confirm_password);
      }
      function GetResponse(result){
        document.getElementById("formsignup").innerHTML = result;
    }