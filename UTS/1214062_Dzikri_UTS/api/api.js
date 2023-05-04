// JavaScript Code
var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil=""
txt=""
txt1=""

fetch("https://kodepos-2d475.firebaseio.com/kota_kab/k69.json?print=pretty", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
  console.log(result);
  hasil=JSON.parse(result);
  hasil.forEach(isitabel);
}

function isitabel(value){
  const kecamatan = ""
  const kelurahan = ""
  const kodepos = ""

  var tr = document.createElement("tr");
  var tdKecamatan = document.createElement("td");
  var tdKelurahan = document.createElement("td");
  var tdKodepos = document.createElement("td");
  tdKecamatan.textContent = kecamatan + value.kecamatan;
  tdKelurahan.textContent = kelurahan + value.kelurahan;
  tdKodepos.textContent = kodepos + value.kodepos;
  tr.appendChild(tdKecamatan);
  tr.appendChild(tdKelurahan);
  tr.appendChild(tdKodepos);
  document.getElementById("table-body").appendChild(tr);
}
