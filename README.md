# Backend-Test

# Soal 1: Basic Routing

Deskripsi:
Buat sebuah aplikasi Express.js yang memiliki endpoint untuk mengambil semua buku dari sebuah perpustakaan.

Spesifikasi:

Endpoint: GET /books
Response: Daftar buku dalam format JSON dengan struktur berikut:

```json
[
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name"
  },
  {
    "id": 2,
    "title": "Another Book Title",
    "author": "Another Author Name"
  }
]
```

# Soal 2: Middleware

Deskripsi:
Tambahkan middleware untuk log setiap request yang masuk ke server dengan format: METHOD URL STATUS_CODE.

Spesifikasi:

Gunakan middleware di semua route.
Contoh output: GET /books 200

# Soal 3: CRUD Operations with Database

Deskripsi:
Implementasikan CRUD (Create, Read, Update, Delete) operations untuk buku menggunakan database MongoDB.

Spesifikasi:

Create Book:
Endpoint: POST /books
Request Body:

```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```
Response: Buku yang baru dibuat dengan ID.
Read All Books:
Endpoint: GET /books
Response: Daftar semua buku.
Read Book by ID:
Endpoint: GET /books/:id
Response: Buku dengan ID yang sesuai.
Update Book:
Endpoint: PUT /books/:id
Request Body:

```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```
Response: Buku yang sudah diperbarui.
Delete Book:
Endpoint: DELETE /books/:id
Response: Pesan konfirmasi penghapusan.

# Soal 4: Error Handling
Deskripsi:
Tambahkan error handling di aplikasi untuk menangani kasus-kasus berikut:

Buku tidak ditemukan (404 Not Found).
Error umum lainnya (500 Internal Server Error).
Spesifikasi:

Buat middleware untuk menangani error.
Kembalikan pesan error dalam format JSON:
```json
{
  "error": "Error message"
}
```
# Soal 5: Authentication
Deskripsi:
Tambahkan autentikasi sederhana menggunakan JWT (JSON Web Token) untuk melindungi endpoint pembuatan, pembaruan, dan penghapusan buku.

Spesifikasi:

Login Endpoint:
Endpoint: POST /login
Request Body:

```json
{
  "username": "user",
  "password": "pass"
}
```
Response: JWT token.
Protected Endpoints: POST /books, PUT /books/:id, DELETE /books/:id.
Gunakan middleware untuk memeriksa token JWT sebelum mengizinkan akses ke endpoint yang dilindungi.

# Soal 6: File Handling
Deskripsi: Buatlah sebuah File CSV pasangan key value kemudian parse file tersebut menggunakan javascript. Setelah itu buat endpoint Upload untuk mengunggah file tersebut dan Retrieve File yang sudah di upload.
