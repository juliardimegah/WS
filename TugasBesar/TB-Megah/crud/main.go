package main

import (
	"net/http"

	"crud/controllers/membercontroller"
)

func main() {

	http.HandleFunc("/", membercontroller.Index)
	http.HandleFunc("/member", membercontroller.Index)
	http.HandleFunc("/member/index", membercontroller.Index)
	http.HandleFunc("/member/add", membercontroller.Add)
	http.HandleFunc("/member/edit", membercontroller.Edit)
	http.HandleFunc("/member/delete", membercontroller.Delete)

	http.ListenAndServe(":6000", nil)
}
