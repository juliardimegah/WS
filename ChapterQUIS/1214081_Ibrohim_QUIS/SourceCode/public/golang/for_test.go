package ibrohim

import (
	"fmt"
	"testing"
)

func TestInsertPresensi(t *testing.T) {
	long := 98.345345
	lat := 123.561651
	lokasi := "Kampus"
	phonenumber := "081271720763"
	checkin := "masuk"
	biodata := Karyawan{
		Nama:         "Ibrohim",
		Phone_number: "081271720763",
		Jabatan:      "Mahasiwa TI",
	}
	hasil := InsertPresensi(long, lat, lokasi, phonenumber, checkin, biodata)
	fmt.Println(hasil)

}

func TestGetKaryawanFromPhoneNumber(t *testing.T) {
	phonenumber := "081271720763"
	biodata := GetKaryawanFromPhoneNumber(phonenumber)
	fmt.Println(biodata)
}
