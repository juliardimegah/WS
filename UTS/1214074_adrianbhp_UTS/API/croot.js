var myHeaders = new Headers();
		myHeaders.append("Cookie", "connect.sid=s%3AMsnp_KW3uPWTf6gN4GDNl7XAoOShdRL2.VK05aaDbN1FeG%2BScGHtOuxENv5s2ABoZZzLpqN%2FUbZs");

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
			.then(response => response.text())
			.then(result => tampilkan(result))
			.catch(error => console.log('error', error));

		function tampilkan(result){
			console.log(result);
			hasil=JSON.parse(result);
			hasil.forEach(isitabel);
		}

		function isitabel(value) {
			const albumId = "Album ID:"
			const id = "ID:"
			const title = "Title"
			const url = "URL:"
			const thumbnailUrl = "Thumbnail URL:"

			var table = document.getElementById("myTable");
			var row = table.insertRow();
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);

			cell1.innerHTML = value.albumId;
			cell2.innerHTML = value.id;
			cell3.innerHTML = value.title;
			cell4.innerHTML = value.url;
			cell5.innerHTML = value.thumbnailUrl;
		}