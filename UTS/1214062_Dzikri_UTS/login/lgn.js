function PostSignUp(namadepan,namabelakang,email,password){
    var myHeaders = new Headers();
    myHeaders.append("Login", "PunyaDz");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "NamaDepan": namadepan,
        "NamaBelakang": namabelakang,
        "Email": email,
        "Password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eohjkfgf2fe265a.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => GetResponse(result))
        .catch(error => console.log('error', error));
}

function GetResponse(result){
    document.getElementById("formsignup").innerHTML = result;
    console.log(result);
}

function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    PostSignUp(namadepan,namabelakang,email,password);
}