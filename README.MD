PEMBAHAHASAN SOAL :
1. Alur Request
2. Keamanan & Token:
3. Penanganan Konkurensi (Concurrency)


1. Alur Request
- Router : adalah sebuah folder untuk alamat sebauh api yang di butuhkan jadi punya folder-folder dan kegunaanya
untuk folder router khusus folder router untuk mengarahkan api yang dibutuhkan saja

- Middleware  : middleware adalah sebuah penjagaan yang dimana ada hak-hak pada setiap fitur dan jika ada fitur
melarang maka dia akan melarang apapun kecuali sesuai dengan role nya

- Controller : adalah tempat untuk penyimpanan sebuah alur request dan response banyak orang bilang semua logic taruh di controller semuanya

- Service : adalah tempat yang taruh logic-logic sebuah sistem bisnis disana semuanya agar lebih clearn

- Repository : adalah tempat yang dimana simpan logic-logic bisnis yang sama jadi kalaua da logic yang sama tinggal pakai logic yang ada di repository

- model (Tambahahan) : model adalah tempat sebauh struktur sebauh table dan defisikan sebuah table tersebut

2. Keamanan & Token
- untuk tempat keamana token lebih baik simpan di cookies dari pada localstorage karena jauh lebih aman dari pada localstorage, kenapa karena localstorage terlalu terbuka dna tidak coock dengan aturan di MDN atau didokumentasi dan untuk simpan sebuah data yang lumayan penting taruh semuanya di cookies tapi tidak simpan nya ada localsorage seperti fitur dark mode dll

3. Penanganan Konkurensi (Concurrency)
- untuk ini kita ambil dari milisecond dia ngambil waktu yang meraka ambil jika bersamaan kita bisa melihat di milisecond
dan pakai db transaction yang dimana jika barang habis atau masih ada akan di check ke db transaction dan jika uda habis maka akan melempar pesan ui dan tidak akan berkurang saldo atau dll yang di kirim kan karena db transaction proses adalah seperti simpan dulu sementara dan aku check apakah ada barang ada atau tidak



CARA PAKAI NYA ADALAH :
- npm install
- npx knex migrate:latest