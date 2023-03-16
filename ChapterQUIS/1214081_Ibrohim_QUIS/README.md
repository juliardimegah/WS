# Lokasi File

![1](https://user-images.githubusercontent.com/93715182/225523369-40b7c1e5-3045-49ad-be53-6ffbdee21db2.png)

Folder "Foto Bukti" berisi foto yang membuktikan bahwa aplikasi ini berjalan dengan baik, folder "SourceCode" berisi source code yang digunakan dalam membuat aplikasi ini

![2](https://user-images.githubusercontent.com/93715182/225523633-04d13b27-8f9d-45e0-a849-a7136714af6e.png)

Dalam folder "SourceCode" terdapat folder "public", folder tersebut adalah lokasi file index.html, javascript, dan golang berada

![3](https://user-images.githubusercontent.com/93715182/225523849-50d8b3ea-ae50-4d15-b540-5ddf9083e2cf.png)

Javascript yang terhubung dengan pipedream terdapat pada folder "js" dengan nama "lol.js", sedangkan golang yang terhubung dengan mongodb terdapat pada folde "golang"

# index.html
berikut adalah source code dari file index.html
```go
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="shuffle-for-tailwind.png">
    <script src="js/main.js"></script>
</head>
<body class="antialiased bg-body text-body font-body">
    <div class="">
                
      <section class="relative py-20">
        <img class="hidden lg:block absolute top-0 left-0 mt-16 z-10" src="zeus-assets/icons/dots/blue-dot-left-bars.svg" alt="">
        <img class="hidden lg:block absolute bottom-0 right-0 mb-16" src="zeus-assets/icons/dots/yellow-dot-right-shield.svg" alt="">
        <div class="absolute top-0 left-0 lg:bottom-0 h-128 lg:h-auto w-full lg:w-8/12 bg-gray-50"></div>
        <div class="relative container px-4 mx-auto">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div class="max-w-lg">
                <h2 class="mb-10 text-4xl font-semibold font-heading">Organisasi Mahasiswa</h2>
                <p class="text-xl text-gray-500">Bergabungla dengan kami agar anda dapat mengetahui info terbaru mengenai berita - berita kampus ULBI.</p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <div class="lg:max-w-md p-6 lg:px-10 lg:py-12 bg-white text-center border rounded-xl">
                <form action="#">
                  <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">Sign Up</span>
                  <h3 class="mb-12 text-3xl font-semibold font-heading">Create new account</h3>
                  <div class="relative flex flex-wrap mb-6">
                    <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded" id="email" type="email" placeholder="ibrohim@gmail.com">
                    <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">Your email address</span>
                  </div>
                  <div class="relative flex flex-wrap mb-6">
                    <input class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded" id="password" type="password" placeholder="******">
                    <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">Password</span>
                  </div>
                  <button onclick="Daftar()" class="w-full inline-block py-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">Get Started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
<script src="js/lol.js"></script>
  </body>
</html>
```
berikut adalah tampilan index.html setelah dijalankan menggunakan live server
![4](https://user-images.githubusercontent.com/93715182/225524419-b06b12a2-c907-41cb-9007-56147375a6ab.png)

# lol.js
```go
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
```
Source code di atas berguna untuk mengirimkan data ke pipedream setelah onclick Daftar() diaktifkan dan juga memunculkan console.log
![5](https://user-images.githubusercontent.com/93715182/225524766-96044595-4e7d-4fc5-b884-ffc0d10c8ca8.png)
Gambar di atas adalah contoh setelah mengaktifkan fungsi Daftar
