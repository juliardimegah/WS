# Buat Tampilan Frontend menggunakan Componen pada Tailwinds

![image](https://user-images.githubusercontent.com/98022263/228729543-9e7b97a1-1ea5-4ff4-b77e-4aaf53d76b71.png)

# Berikut Codingan Front End HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Page title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
    <link rel="stylesheet" href="./src/css/tailwind/tailwind.min.css">
    <link rel="icon" type="image/png" sizes="32x32" href="../src/assets/maulanafoto.png">
    <script src="./src/js/charts-demo.js"></script>
</head>
<body class="antialiased bg-body text-body font-body">
    <div class="">         
      <div>
        <!-- mengatur navbar kiri -->
        <div class="mx-auto lg:ml-2">

      <section>
        <div class="pt-5 pb-6 px-8 bg-gray-700">
          <div class="flex flex-wrap items-center justify-between -mx-2">
            <div class="w-full lg:w-auto px-2 mb-6 lg:mb-0">
              <h4 class="text-2xl font-bold text-white tracking-wide leading-7 mb-1">UTS</h4>
              <p class="text-xs text-gray-300">Pemrograman</p>
            </div>
            <div class="w-full lg:w-auto px-2">
              <div class="sm:flex items-center">
                <div class="w-full sm:w-auto mb-6 sm:mb-0 sm:mr-4">
                  <div class="flex flex-wrap items-center -mb-2">
                    
                    
                  </div>
                </div>
                <div class="w-full sm:w-auto">
                  <a class="inline-flex items-center justify-center py-2 pl-2 pr-3 bg-gray-500 hover:bg-gray-400 hover:bg-opacity-40 transition duration-150 rounded-full" href="#">
                    <img class="h-8 w-8 mr-3 rounded-full object-cover" src="../src/assets/maulanafoto.png" alt="">
                    <h4 class="text-white font-extrabold tracking-wide mr-5">Maulana Imanulhaq</h4>
                    <svg width="10" height="6" viewbox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="#3D485B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="konten">
    
          
        </tbody>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100" id="kontenz">
    
          
        </tbody>
      </table>
     
      
      </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="./src/js/main.js"></script>
    <script src="./ambilAPI.js"></script>
</body>
</html>

```

Berikut Codingan JS

```
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

fetch("https://ibnux.github.io/data-indonesia/provinsi.json", requestOptions)

// fetch("https://dev.farizdotid.com/api/daerahindonesia/provinsi/32", requestOptions)

  .then(response => response.text())
  .then(result => tampilkan(result))
  .catch(error => console.log('error', error));

function tampilkan(result){
  console.log(result);
  hasil=JSON.parse(result);
  txt=hasil.forEach(isitabel);
//   document.getElementById("nama").innerHTML(result);
}

function isitabel(value){
    const id = "ID : "
    const nama = "Nama Provinsi : "
    const pembatas = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    

    txt= txt+trnyatabel.replace("#TEXT#","ID Provinsi: "+value.id);
    txt= txt+trnyatabel.replace("#TEXT#",nama+value.nama+"");
    txt= txt+trnyatabel.replace("#TEXT#",pembatas);
      
    document.getElementById("konten").innerHTML=txt;
    }
    trnyatabel=`
    <div class="font-medium text-gray-700" id="name">#TEXT#</div>
  `
  ```
  
# Api Publik Pengujian Postman
  
![3  API Publik pengujian Postman](https://user-images.githubusercontent.com/98022263/228729958-834d4c81-c1ca-4aed-ab40-e33780072ddb.png)
  
# Request catcher dari postman dan pipedream
  
![4  request catcher dari postman dan pipedream](https://user-images.githubusercontent.com/98022263/228729989-c698663b-b19d-4f99-87ed-442fbb5d03bd.png)
  
# Endpoint postman dari Pipedream
  
![5  Endpoint postman dari Pipedream](https://user-images.githubusercontent.com/98022263/228730012-35eb56a5-4104-48df-bec6-9d8a018eb215.png)
   
# Pipedream
  
![5 1  Pipedream](https://user-images.githubusercontent.com/98022263/228730040-137a44f7-25b2-4c63-b87a-c45eb5ed278a.png)
 
# Hasil endpoint postman dari pipedream
  
![5 2  Hasil endpoint postman dari pipedream](https://user-images.githubusercontent.com/98022263/228730065-1cbfae9a-c62f-40cf-9543-fe45ec20900a.png)
  
# Tampilan Signup

![6  Tampilan Signup](https://user-images.githubusercontent.com/98022263/228730097-861d6992-2472-48f3-b2e0-a2ddc0d849c4.png)

# Codingan JS

```
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
```

# Codingan Fungsi PostSignup

```
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
```

# Fungsi Push Button

![7  Fungsi PushButton](https://user-images.githubusercontent.com/98022263/228730399-65044191-b650-4861-aff7-e3f2de20b6b4.png)

```
function PushButton(){
    namadepan=document.getElementById("namadepan").value;
    namabelakang=document.getElementById("namabelakang").value;
    alamatemail=document.getElementById("alamatemail").value;
    katasandi=document.getElementById("katasandi").value;
    PostSignUp(namadepan,namabelakang,alamatemail,katasandi);
}
```

# Menggunakan Attribut OnClick

![7 1  Menggunakan Attribut Onclick](https://user-images.githubusercontent.com/98022263/228730458-b5d4069b-02c7-48fd-b864-45bc48b1f2e7.png)

# Di Jalankan dengan menggunakan live server

![8  Di Jalankan dengan menggunakan live server](https://user-images.githubusercontent.com/98022263/228730542-43015ea9-3939-496a-95c6-d0262285860c.png)

# Ketika Sukses Daftar

![8 1  Ketika Sukses Daftar](https://user-images.githubusercontent.com/98022263/228730582-b61105b6-4118-4c9f-bf5f-7e13a39168d4.png)

# Dapat Dilihat Sukses Pada Console

![8 2  Dapat Dilihat Sukses Pada Console](https://user-images.githubusercontent.com/98022263/228730625-5ecca75d-3349-4dac-a729-52009bbf5141.png)

# Pipedream

![PipeDream](https://user-images.githubusercontent.com/98022263/228730633-629a891b-f710-4d1d-ac8e-1059ac854245.png)

# Respon pada pipedream ketika sukses daftar

![Respon pada pipedream ketika sukses daftar](https://user-images.githubusercontent.com/98022263/228730660-edd6c35e-e4c0-4cf4-85ac-e2fe86687da0.png)

# Respon Pada Pipe Dream

![Respon pada pipedream](https://user-images.githubusercontent.com/98022263/228730752-4a52ec98-d86f-4cf5-b975-510f441d34ea.png)

![Screenshot Pipedream](https://user-images.githubusercontent.com/98022263/228730779-1816db03-1402-4f31-8299-a2003db340e0.png)


# Screenshot Live Server

![Screenshot Live Server](https://user-images.githubusercontent.com/98022263/228730771-0a056f3e-43bc-43e9-8049-405cb056e15b.png)




