function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    alamatemail=document.getElementById("alamatemail").value;
    katasandi=document.getElementById("katasandi").value;
    PostSignUp(namadepan,namabelakang,alamatemail,katasandi);
}

function PostSignUp(namadepan,namabelakang,alamatemail,katasandi){
    var myHeaders = new Headers();
    myHeaders.append("Login", "rollygantengsekali");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "namadepan": namadepan,
        "namabelakang": namabelakang,
        "alamatemail": alamatemail,
        "katasandi": katasandi
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://eoj0o69oewxht68.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => GetResponse(result))
        .catch(error => console.log('error', error));
    }
    function GetResponse(result) {
        document.getElementById("formsignup").innerHTML = result;

        console.log(result)
      }