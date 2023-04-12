var myHeaders = new Headers();
myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

hasil = "";
txt = "";
txt1 = "";

fetch("http://universities.hipolabs.com/search?country=United+Kingdom", requestOptions)
  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result) {
  console.log(result);
  hasil = JSON.parse(result);
  hasil.forEach(isitabel);
}

function isitabel(value, index) {
  const alpha_two_code = ""
  const web_pages = ""
  const name = ""
  const domains = ""
  const country = ""
  txt += `
    <tr>
      <td class="border px-4 py-2">${index + 1}</td>
      <td class="border px-4 py-2">${value.name}</td>
      <td class="border px-4 py-2">${alpha_two_code + value.alpha_two_code}</td>
      <td class="border px-4 py-2">${web_pages + value.web_pages}</td>
      <td class="border px-4 py-2">${domains + value.domains}</td>
      <td class="border px-4 py-2">${country + value.country}</td>
    </tr>
  `;
  document.getElementById("konten").innerHTML = txt;
}