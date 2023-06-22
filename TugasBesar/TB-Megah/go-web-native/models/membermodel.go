package models

import (
	"database/sql"
	"fmt"
	"time"

	"crud/config"
	"crud/entities"
)

type MemberModel struct {
	conn *sql.DB
}

func NewMemberModel() *MemberModel {
	conn, err := config.DBConnection()
	if err != nil {
		panic(err)
	}

	return &MemberModel{
		conn: conn,
	}
}

func (p *MemberModel) FindAll() ([]entities.Member, error) {

	rows, err := p.conn.Query("select * from member")
	if err != nil {
		return []entities.Member{}, err
	}
	defer rows.Close()

	var dataMember []entities.Member
	for rows.Next() {
		var member entities.Member
		rows.Scan(&member.Id,
			&member.NamaLengkap,
			&member.NIK,
			&member.JenisKelamin,
			&member.TempatLahir,
			&member.TanggalLahir,
			&member.Alamat,
			&member.NoHp)

		if member.JenisKelamin == "1" {
			member.JenisKelamin = "Laki-laki"
		} else {
			member.JenisKelamin = "Perempuan"
		}
		// 2006-01-02 => yyyy-mm-dd
		tgl_lahir, _ := time.Parse("2006-01-02", member.TanggalLahir)
		// 02-01-2006 => dd-mm-yyyy
		member.TanggalLahir = tgl_lahir.Format("02-01-2006")

		dataMember = append(dataMember, member)
	}

	return dataMember, nil

}

func (p *MemberModel) Create(member entities.Member) bool {

	result, err := p.conn.Exec("insert into member (nama_lengkap, nik, jenis_kelamin, tempat_lahir, tanggal_lahir, alamat, no_hp) values(?,?,?,?,?,?,?)",
		member.NamaLengkap, member.NIK, member.JenisKelamin, member.TempatLahir, member.TanggalLahir, member.Alamat, member.NoHp)

	if err != nil {
		fmt.Println(err)
		return false
	}

	lastInsertId, _ := result.LastInsertId()

	return lastInsertId > 0
}

func (p *MemberModel) Find(id int64, member *entities.Member) error {

	return p.conn.QueryRow("select * from member where id = ?", id).Scan(
		&member.Id,
		&member.NamaLengkap,
		&member.NIK,
		&member.JenisKelamin,
		&member.TempatLahir,
		&member.TanggalLahir,
		&member.Alamat,
		&member.NoHp)
}

func (p *MemberModel) Update(member entities.Member) error {

	_, err := p.conn.Exec(
		"update member set nama_lengkap = ?, nik = ?, jenis_kelamin = ?, tempat_lahir = ?, tanggal_lahir = ?, alamat = ?, no_hp = ? where id = ?",
		member.NamaLengkap, member.NIK, member.JenisKelamin, member.TempatLahir, member.TanggalLahir, member.Alamat, member.NoHp, member.Id)

	if err != nil {
		return err
	}

	return nil
}

func (p *MemberModel) Delete(id int64) {
	p.conn.Exec("delete from member where id = ?", id)
}
