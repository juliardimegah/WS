var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    }; 

hasil="";
txt="";
txt1="";

fetch("https://ciprand.p3p.repl.co/api?len=20&count=10", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

function tampilkan(result){
    console.log(result);
    hasil=JSON.parse(result);
    txt=hasil.forEach(isitabel);
}

function isitabel(value){
  const str = "String: "
  const cnt = "Count : "
  const pag = "* * * * * * * * * * * *"
    txt= txt.replace("#TEXT#",str+value.Strings + "");
    txt= txt.replace("#TEXT#",cnt+value.Count + "");
    txt= txt.replace("#TEXT#",pag);
  document.getElementById("konten").innerHTML=txt;
}
trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `