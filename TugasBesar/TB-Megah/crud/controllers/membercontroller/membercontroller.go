package pasiencontroller

import (
	"html/template"
	"net/http"
	"strconv"

	"crud/libraries"

	"crud/models"

	"crud/entities"
)

var validation = libraries.NewValidation()
var memberModel = models.NewMemberModel()

func Index(response http.ResponseWriter, request *http.Request) {

	member, _ := memberModel.FindAll()

	data := map[string]interface{}{
		"member": member,
	}

	temp, err := template.ParseFiles("views/member/index.html")
	if err != nil {
		panic(err)
	}
	temp.Execute(response, data)
}

func Add(response http.ResponseWriter, request *http.Request) {

	if request.Method == http.MethodGet {
		temp, err := template.ParseFiles("views/member/add.html")
		if err != nil {
			panic(err)
		}
		temp.Execute(response, nil)
	} else if request.Method == http.MethodPost {

		request.ParseForm()

		var member entities.Member
		member.NamaLengkap = request.Form.Get("nama_lengkap")
		member.NIK = request.Form.Get("nik")
		member.JenisKelamin = request.Form.Get("jenis_kelamin")
		member.TempatLahir = request.Form.Get("tempat_lahir")
		member.TanggalLahir = request.Form.Get("tanggal_lahir")
		member.Alamat = request.Form.Get("alamat")
		member.NoHp = request.Form.Get("no_hp")

		var data = make(map[string]interface{})

		vErrors := validation.Struct(member)

		if vErrors != nil {
			data["member"] = member
			data["validation"] = vErrors
		} else {
			data["pesan"] = "Data member berhasil disimpan"
			memberModel.Create(member)
		}

		temp, _ := template.ParseFiles("views/member/add.html")
		temp.Execute(response, data)
	}

}

func Edit(response http.ResponseWriter, request *http.Request) {

	if request.Method == http.MethodGet {

		queryString := request.URL.Query()
		id, _ := strconv.ParseInt(queryString.Get("id"), 10, 64)

		var member entities.Member
		memberModel.Find(id, &member)

		data := map[string]interface{}{
			"member": member,
		}

		temp, err := template.ParseFiles("views/member/edit.html")
		if err != nil {
			panic(err)
		}
		temp.Execute(response, data)

	} else if request.Method == http.MethodPost {

		request.ParseForm()

		var member entities.Member
		member.Id, _ = strconv.ParseInt(request.Form.Get("id"), 10, 64)
		member.NamaLengkap = request.Form.Get("nama_lengkap")
		member.NIK = request.Form.Get("nik")
		member.JenisKelamin = request.Form.Get("jenis_kelamin")
		member.TempatLahir = request.Form.Get("tempat_lahir")
		member.TanggalLahir = request.Form.Get("tanggal_lahir")
		member.Alamat = request.Form.Get("alamat")
		member.NoHp = request.Form.Get("no_hp")

		var data = make(map[string]interface{})

		vErrors := validation.Struct(member)

		if vErrors != nil {
			data["member"] = member
			data["validation"] = vErrors
		} else {
			data["pesan"] = "Data member berhasil diperbarui"
			memberModel.Update(member)
		}

		temp, _ := template.ParseFiles("views/member/edit.html")
		temp.Execute(response, data)
	}

}

func Delete(response http.ResponseWriter, request *http.Request) {

	queryString := request.URL.Query()
	id, _ := strconv.ParseInt(queryString.Get("id"), 10, 64)

	memberModel.Delete(id)

	http.Redirect(response, request, "/member", http.StatusSeeOther)
}
