package maulanaquis

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Kampus"
	phonenumber := "124567890"
	checkin := "masuk"
	biodata := Karyawan{
		Nama:         "Maulana",
		Phone_number: "124567890",
		Jabatan:      "Mahasiwa TI",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "124567890"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
