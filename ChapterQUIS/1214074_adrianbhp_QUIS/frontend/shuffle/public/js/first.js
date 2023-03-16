function PostSignUp(namalengkap,email,password){
       var myHeaders = new Headers();
       myHeaders.append("Login", "rollygantengsekali");
       myHeaders.append("Content-Type", "application/json");

       var raw = JSON.stringify({
           "namalengkap": namalengkap,
           "email": email,
           "password": password
       });

       var requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };

       fetch("https://eobdc7imwva8gel.m.pipedream.net", requestOptions)
           .then(response => response.text())
           .then(result => console.log(result))
           .catch(error => console.log('error', error));
}
 function PushButton(){
       namalengkap = document.getElementById("namalengkap").value;
       email=document.getElementById("email").value;
       password=document.getElementById("password").value;
       PostSignUp(namalengkap,email,password);
 }
