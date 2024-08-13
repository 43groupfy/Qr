const questions = [
       {
          question: "Suatu perlombaan lari diadakan dengan dua kali perhentian. Jarak tempuh antara start sampai perhentian A adalah 2 km, antara perhentian A sampai dengan perhentian B adalah 7,5 km, dan antara perhentian B sampai dengan finish adalah 1,5 km. Berapa kilo meterkah total jarak tempuh pada perlombaan lari tersebut?",
          options: ["10 km", "11 km", "12 km", "13 km"],
          correctIndex: 1
        },
        {
          question: "Seorang pedagang air memindahkan 900 liter air dari 1 bak ke dalam drum. Setelah dihitung-hitung ternyata sisa air tinggal 870 liter. Ternyata ketika memindahkan air menggunakan ember masing-masing berkurang 3 liter. Berapa ember yang digunakan untuk memindahkan air tersebut ?",
          options: ["8 ember", "9 ember", "10 ember", "11 ember"],
          correctIndex: 2
        },
        {
          question: "Jika Burhan telah mengerjakan soal sejak pukul 08.30 hingga pukul 12.00 sebanyak 20 soal maka rata-rata soal yang dikerjakan Burhan setiap setengah jam adalah :",
          options: ["2", "2,5", "3", "3,3"],
          correctIndex: 2
        },
        {
          question: "Diketahui suatu bangunan berbentuk balok, dengan volume 162 m kubik. Sisi panjangnya adalah 6 m sisi pendeknya 3 m. Hitunglah berapa cm sisi tingginya?",
          options: ["600 cm", "700 cm", "800 cm", "900 cm"],
          correctIndex: 3
        },
        {
          question: "Seekor kancil dapat berlari dengan kecepatan 80 km per jam. Berapa menit yang diperlukan kancil untuk menempuh jarak 8 km ?",
          options: ["9 menit", "8 menit", "7 menit", "6 menit"],
          correctIndex: 3
        },
        {
          question: "Jika cuaca berkabut, sebuah mobil berjalan dengan kecepatan 30 km per jam. Jika cuaca baik kecepatan rata-rata mobil tersebut 60 km per jam. Berapa lama ia menempuh jalan yang panjangnya 210 km jika 2/7 (dua per tujuh) dari perjalanan itu bercuaca buruk berkabut?",
          options: ["3,5 jam", "5 jam", "4,5 jam", "4 jam"],
          correctIndex: 2
        },
        {
          question: "Luas area parkir 176 m2, luas rata-rata untuk mobil sedan 4 m2 dan bis 20 m2. Kapasitas maksimum hanya 20 kendaraan, biaya parkir untuk mobil Rp. 1000 satu kali parkir dan untuk bis Rp. 2000 satu kali parkir. Jika dalam satu jam tidak ada kendaraan yang pergi dan datang, maka hasil maksimum tempat parkir itu adalah...",
          options: ["Rp. 300.000", "Rp. 260.000", "Rp. 440.000", "Rp. 340.000"],
          correctIndex: 1
        },
        {
          question: "Sepotong kayu panjangnya 40 meter dipotong menjadi 2 bagian dimana yang satu panjangnya 2/3 dari lainnya. Berapa panjang bagian yang terpendek ?",
          options: ["16 m", "18 m", "22 m", "24 m"],
          correctIndex: 0
        },
        {
          question: "Di permukaan laut, air mendidih pada suhu 100 derajat Celcius jika tekanan udara normal. Jika tekanan udara kurang dari normal, maka air mendidih pada suhu yang lebih rendah dari 100 derajat Celcius. Di daerah-daerah yang letaknya lebih tinggi dari permukaan laut, tekanan udara sering kali lebih rendah daripada tekanan normal. Di daerah ini akan :",
          options: ["Selalu mendidih pada suhu 100 derajat Celcius", "Selalu mendidih pada suhu di atas 100 derajat Celcius", "Sering mendidih pada suhu di bawah 100 derajat Celcius", "Tidak pernah mendidih pada suhu 100 derajat Celcius"],
          correctIndex: 2
        },
        {
          question: "Johan naik mobil berangkat pukul 07.00 dari kota A ke kota B dengan kecepatan rata-rata 60 km/jam. Hasan naik motor berangkat pukul 07.00 dari kota B ke kota A dengan kecepatan rata-rata 40 km/jam. Jika jarak kota A dan B = 350 km, Maka Johan dan Hasan akan bertemu pada pukul",
          options: ["9.5", "10.3", "10.5", "11.35"],
          correctIndex: 1
        },
        {
          question: "Di dalam suatu penelitian didapat kesimpulan bahwa perbandingan hewan yang bersifat PQ dengan populasi hewan yang tidak bersifat PQ adalah 5 : 3 dan bahwa 3/8 dari hewan tersebut yang bersifat PQ adalah jantan. Berapa perbandingan populasi hewan PQ jantan terhadap populasi hewan seluruhnya ?",
          options: ["45324", "45451", "45518", "15/64"],
          correctIndex: 3
        },
        {
          question: "Kecepatan mobil Marsuli 90 km per jam. Jarak Bogor-Jakarta 60 km. Jika Marsuli berangkat dari Bogor pukul 10, pukul berapa Marsuli akan tiba di Jakarta?",
          options: ["11.3", "11", "10.3", "10.4"],
          correctIndex: 3
        },
        {
          question: "Waktu di kota A adalah 3 jam lebih cepat daripada kota B. Sebuah kapal terbang berangkat dari kota A menuju ke kota B pada pukul 5 pagi dan tiba 4 jam kemudian. Pada pukul berapakah kapal terbang tersebut di kota B?",
          options: ["2 pagi", "6 pagi", "4 pagi", "3 pagi"],
          correctIndex: 1
        },
        {
          question: "Sebuah kerta api berangkat dari kota Jogja ke kota Purwokerto dengan kecepatan 50 km/jam selama 4 jam. Sementara itu kereta api lainnya berangkat dari kota Purwokerto menuju kota Jogja selama 5 jam. Berapa km/jam kecepatan kereta api itu berangkat dari kota Purwokerto ?",
          options: ["20", "25", "35", "40"],
          correctIndex: 3
        },
        {
          question: "Rumah Nina berjarak 1.5 km dari sekolahnya. Jika Nina berjalan rata-rata 4,5 Km tiap jamnya, berapa jamkah yang ditempuh Nina untuk berjalan pergi-pulang sekolah selama satu minggu (satu minggu dihitung 6 hari sekolah)?",
          options: ["4 jam", "24 jam", "6 jam", "1/3 jam"],
          correctIndex: 0
        },
        {
          question: "Seekor burung merpati terbang 5 km ke arah Barat dan kemudian ke Utara. Ke arah manakah burung tersebut harus terbang supaya sampai di tempat semula ?",
          options: ["Tenggara", "Selatan", "Barat Daya", "Barat Laut"],
          correctIndex: 0
        },
        {
          question: "Jika roda pertama berputar 2 kali maka roda kedua berputar 5 kali. Berapa kalikah roda kedua akan berputar jika roda pertama berputar 6 kali ?",
          options: ["11", "13", "15", "17"],
          correctIndex: 2
        },
        {
          question: "Sebuah kolam renang mempunyai isi 300 meter kubik air. Luas kolam itu adalah 100 meter persegi. Berapakah dalamnya kolam itu ?",
          options: ["3 meter", "4 meter", "5 meter", "6 meter"],
          correctIndex: 0
        },
        {
          question: "Rusman membeli selembar tripleks yang berbentuk bujur sangkar dengan luas 169 meter persegi. Ia harus memotongnya 2 m pada salah satu sisinya agar secara tepat menutup sisi sebuah tembok. Berapa luas dinding?",
          options: ["113 meter persegi", "121 meter persegi", "143 meter persegi", "145 meter persegi"],
          correctIndex: 2
        },
        {
          question: "Jika roda berputar 9 kali maka roda kedua berputar 24 kali. Jika roda yang pertama berputar 27 kali, berapa kali putaran roda kedua?",
          options: ["92 kali", "82 kali", "74 kali", "84 kali"],
          correctIndex: 1
        },
        {
          question: "Danish berwisata dari Jepang ke Indonesia. Di Indonesia, ia berangkat dengan pesawat terbang dari Cengkareng, Jakarta menuju Jayapura. Pesawat lepas landas dari bandara Jakarta pada pukul 20.00 waktu setempat dan mendarat di bandara Jayapura pada pukul 06.00 waktu setempat. Jika selama penerbangan pesawat singgah bandara Surabaya dan Makasar masing-masing 30 menit, berapa jamkah lama seluruh perjalanan Danish?",
          options: ["9 jam", "10 jam", "7 jam", "12 jam"],
          correctIndex: 2
        },
        {
          question: "Seorang pengamen dapat mengumpulkan uang rata-rata Rp 6.000 setiap jam. Berapakah waktu yang diperlukan si pengamen untuk mendapatkan uang sebanyak Rp 50.000 ?",
          options: ["7 jam", "7 jam 40 menit", "8 jam", "8 jam 20 menit"],
          correctIndex: 3
        },
        {
          question: "Dengan 4 liter bensin sebuah mobil dapat menempuh jarak 32 km. Jika jarak yang akan ditempuh 56 km, berapa liter bensin yang diperlukan?",
          options: ["5 liter", "6 liter", "7 liter", "8 liter"],
          correctIndex: 2
        },
        {
          question: "Jika sebuah mobil dijalankan sejauh 300 km, maka mobil itu akan menghabiskan bensin 15 liter tiap kilometernya. Berapa km per liter kecepatannya harus ditambah supaya mobil tersebut hanya menghabiskan 121 jarak tempuh yang sama ?",
          options: ["1", "3", "5", "7"],
          correctIndex: 2
        },
        {
          question: "Ruslan berjalan kaki dengan kecepatan 5 km per jam, setelah 20 km dia berlari sehingga mencapai 60 km dalam waktu 6 jam. Berapa km per jam kecepatan rata-rata Ruslan itu ?",
          options: ["10", "8", "6", "5"],
          correctIndex: 1
        },
        {
          question: "Satu bidang tanah mempunyai keliling 96 meter, bisa ditanami jagung sebanyak 100 pohon. Berapa panjang tanah yang diperlukan untuk menanam 50 pohon jagung jika lebar tanah tersebut adalah 6 meter ?",
          options: ["7 meter", "8 meter", "9 meter", "10 meter"],
          correctIndex: 1
        },
        {
          question: "Sebuah wadah berbentuk silinder diisi air 1/3 nya, lalu wadah tersebut ditambah air sebanyak 3 liter, sehingga isinya kini menjadi 1/2 nya. Berapa kapasitas wadah tersebut ?",
          options: ["25", "18", "20", "22"],
          correctIndex: 1
        },
        {
          question: "Hildan, Fadil, Budi masing-masing membawa tongkat 3 m, 4 m , 5 m. Jika ujung-ujung tongkat dipertemukan di atas tanah, maka luas tanah maksimal adalah :",
          options: ["5 meter persegi", "6 meter persegi", "7 meter persegi", "8 meter persegi"],
          correctIndex: 1
        },
        {
          question: "Sebuah mobil Honda keluaran terbaru menempuh perjalanan 15 km dengan 1 liter bahan bakar ketika mobil dipacu dengan kecepatan 50 km per jam. Jika mobil berkecepatan 60 km per jam, maka jarak yang ditempuh hanya 80%-nya. Berapakah bahan bakar yang diperlukan untuk menempuh jarak 120 km dengan kecepatan 60 km per jam?",
          options: ["8 liter", "6,4 liter", "9,6 liter", "10 liter"],
          correctIndex: 3
        },
        {
          question: "Andika menempuh 4/5 lingkaran dalam waktu x menit. Berapakah lamanya waktu yang diperlukan Andika untuk menempuh satu lingkaran ?",
          options: ["x/4", "5 x/4", "4 x/5", "5/4 x"],
          correctIndex: 1
        },
        {
          question: "Rusdi berangkat dari kota P pukul 6:15 dan sesampainya di kota M pukul 9:45. Jika Rusdi mengendarai mobilnya dengan kecepatan rata-rata 60 km/jam dan beristirahat selama satu jam untuk makan dan minum, berapa km jarak kota P dan M ?",
          options: ["120 km", "135 km", "150 km", "155 km"],
          correctIndex: 2
        },
        {
          question: "Sapto adalah seorang pedagang yang memiliki 6 warung dan setiap warung membutuhkan 5 liter minyak. satu botol berisi 4 liter minyak goreng. Satu botol minyak dijual dengan harga Rp. 12.000 dan satu liter minyak dijual Rp. 5.000. Berapakah jumlah minimum yang harus dikeluarkan oleh Sapto untuk membeli minyak goreng agar mencukupi kebutuhannya?",
          options: ["Rp. 84.000", "Rp. 94.000", "Rp. 96.000", "Rp. 102.000"],
          correctIndex: 1
        },
        {
          question: "Sebuah kebun bunga berbentuk persegipanjang dengan panjang 16 m dan lebar 12 m. Sekeliling kebun bunga dibangun jalan yang lebarnya 3 m. Berapa meter persegi luas jalan itu ?",
          options: ["93", "168", "204", "186"],
          correctIndex: 2
        },
        {
          question: "Seseorang berjalan kaki dari titik x menuju arah Timur 1 km kemudian 2 km ke Utara, lalu 1 km ke Timur, terus 1 km ke Utara, lalu 1 km ke Timur lagi, dan terakhir 1 km ke Utara hingga sampailah ia di titik y. Berapa kilometer jarak antara titik x dengan titik y ?",
          options: ["10", "5", "7", "6"],
          correctIndex: 1
        },
        {
          question: "Kalau Ani berjalan 8 meter ke muka dan mundur lagi 4 meter ke belakang, berapakah jarak Ani dari tempat semula ?",
          options: ["2 meter", "3 meter", "4 meter", "5 meter"],
          correctIndex: 2
        },
        {
          question: "Sebuah proyek akan diselesaiakan dalam x hari, maka biaya proyek per hari menjadi 2x + (1000/x - 40 hari) juta rupiah. Biaya proyek minimum adalah :",
          options: ["500 juta rupiah", "800 juta rupiah", "880 juta rupiah", "900 juta rupiah"],
          correctIndex: 1
        },
        {
          question: "Sebuah mobil menempuh jarak 120 km ke suatu tempat dengan kecepatan rata-rata 60 km/jam. Dan kembali ke tempat semula dengan kecepatan rata-rata 40 km/jam. Berapa km/jam rata-rata kecepatan seluruhnya mobil tersebut ?",
          options: ["60", "54", "50", "48"],
          correctIndex: 3
        },
        {
          question: "Sebuah pesawat terbang menempuh jarak 3 km dalam waktu 15 detik. Berapa kecepatan pesawat terbang tersebut ?",
          options: ["440 km/jam", "520 km/jam", "600 km/jam", "720 km/jam"],
          correctIndex: 3
        },
        {
          question: "Jika garis tengah sebuah roda A dan C = 10 cm dan roda B dan D = 5 cm. Apabila roda A berputar dengan sempurna, roda D akan berputar sebanyak ?",
          options: ["1 kali", "2 kali", "4 kali", "6 kali"],
          correctIndex: 2
        },
        {
          question: "Seorang pengangkut batu dapat mengangkut 500 kg batu dalam 5 hari. Hari pertama mengangkut 90 kg, hari kedua 75 kg, hari ketiga 120 kg, dan hari keempat 30 kg. Berapa gram-kah yang dia angkut pada hari ke-5 ?",
          options: ["185.000 gram", "180.000 gram", "175.000 gram", "165.000 gram"],
          correctIndex: 0
        },
        {
          question: "Sebuah bengkel pengisian aki membutuhkan waktu 5 jam untuk mengisi 3 buah aki. Berapa lamakah waktu yang dibutuhkan untuk mengisi 12 aki ?",
          options: ["15 jam", "18 jam", "20 jam", "21 jam"],
          correctIndex: 2
        },
        {
          question: "Jika x = berat total p kotak yang masing-masing kotak beratnya q kg dan y = berat total q kotak yang masing-masing kotak beratnya p kg, maka",
          options: ["x > y", "x < y", "x = y", "x dan y tak dapat ditentukan"],
          correctIndex: 2
        },
        {
          question: "Sepotong balok kayu berukuran 90 cm X 30 cm X 12 cm dipotong menjadi kubus dengan terbesar yang dapat di buat. Berapa banyaknya kubus yang dapat dibuat ?",
          options: ["6", "8", "10", "12"],
          correctIndex: 3
        },
        {
          question: "Dalam suatu balap mobil, seorang pembalap mampu menempuh jarak 10 km dalam waktu 6 menit. Berapakah kecepatan rata-rata mobil itu ?",
          options: ["110 km/jam", "100 km/jam", "90 km/jam", "60 km/jam"],
          correctIndex: 1
        },
        {
          question: "Waktu di Jakarta lebih dulu 3 jam daripada di kota Abu Dhabi. Sebuah pesawat tebang berangkat dari Jakarta menuju kota Abu Dhabi 4 jam kemudian. Pada pukul berapakah pesawat terbang tersebut tiba di kota Abu Dhabi ?",
          options: ["2 pagi", "3 pagi", "4 pagi", "6 pagi"],
          correctIndex: 3
        },
        {
          question: "Dalam suatu percobaan beberapa jenis larutan dimasukkan ke dalam tabung reaksi dengan langkah-langkah sebagai berikut:<br>- Larutan A dimasukkan setiap 2 menit sekali sebanyak 5 cc<br>- Larutan B dimasukkan setiap 3 menit sekali sebanyak 2,5 cc<br>- Larutan C dimasukkan setiap 1 menit sekali sebanyak 0,5 cc<br>Pada awal percobaan ketiga larutan tersebut dimasukkan secara bersama-sama. Berapa banyak larutan yang dimasukkan ke dalam tabung reaksi pada saat larutan tersebut dimasukkan secara bersama-sama untuk yang keempat kalinya?",
          options: ["23 cc", "61 cc", "46 cc", "69 cc"],
          correctIndex: 3
        },
        {
          question: "Yanyan berjalan ke arah Utara dengan menempuh jarak 2/5 km dalam tempo 5 menit, berapa kecepatan rata-rata perjalanan Yanyan dalam 1 jam ke depan ?",
          options: ["4,5 km", "4,3 km", "5 km", "4,8 km"],
          correctIndex: 3
        },
        {
          question: "Seekor burung terbang dengan kecepatan rata-rata 25 km/jam. Berapakah panjang lintasan yang ditempuh burung selama 3 jam ?",
          options: ["75 km", "80 km", "82 km", "85 km"],
          correctIndex: 0
        },
        {
          question: "Seorang karyawan mengendarai sepedamotornya sejauh 40 km ke tempat kerjanya tiap pagi dalam waktu 55 menit. Pada suatu pagi dia terlambat 7 menit dari biasanya, berapakah kecepatan yang harus ditempuhnya supaya dia sampai di tempat kerjanya seperti waktu biasanya ?",
          options: ["42 km/jam", "45 km/jam", "54 km/jam", "50 km/jam"],
          correctIndex: 2
        },
        {
          question: "Iswandi berjalan dari kota A ke kota B dengan kecepatan 8 km/jam selama 5 jam dan ia kembali ke kota A dengan naik motor. Berapakah kecepatan rata-rata seluruh perjalanan Iswandi bila ia kembali dari kota B ke kota A selama 3 jam ?",
          options: ["5 km/jam", "8 km/jam", "10 km/jam", "12 km/jam"],
          correctIndex: 2
        },
        {
          question: "Jika x rupiah di bagi merata pada n orang ,maka setiap orang akan memperoleh bagian Rp.50.000,- jika seorang lainnya bergabung pada kelompok di atas dan x rupiah di bagi merata, maka setiap orang sekarang memperoleh Rp.40.000,- berapa rupiah x ?",
          options: ["Rp.2.500.000,-", "Rp.3.000.000,-", "Rp.250.000,-", "Rp.300.000,-", "Rp.350.000,-"],
          correctIndex: 2
        },
        {
          question: "YodelFarm membeli beberapa kambing dengan harga Rp.3.500.000. Yodelfarm kemudian menjual dengan harga Rp.500.000 dan mendapatkan keuntungan Rp.300.000 untuk setiap ekor kambing. Berapakah jumlah kambing yang di beli atau dijual oleh YodelFarm ?",
          options: ["4 Ekor", "5 Ekor", "8 Ekor", "10 Ekor", "15 Ekor"],
          correctIndex: 1
        },
        {
          question: "Pak Rebo bekerja dibidang marketing. ia mendapatkan gaji minimun mingguan Rp.600,000,- dan ditambah komisi 10% dari jumlah penjualan di atas Rp.3.500.000,- yang dicapai selama satu minggu. Jika Pak Rebo mengharapkan memperoleh penghasilan Rp.750.000,- dalam jangka waktu satu minggu, berapakah jumlah minimum penjualan yang harus dicapainya selama seminggu ?",
          options: ["Rp.3.500.000", "Rp.4.500.000", "Rp.5.000.000", "Rp.5.500.000", "Rp.6.000.000"],
          correctIndex: 2
        },
        {
          question: "Pak Muin adalah seorang pedagang kue. ia membeli beberapa kaleng kue dari sebuah toko langgananya dengan harga Rp.600.000. karena, kondisi yang kurang stabil ,pak muin terpaksa menjual lagi seluruh kue tersebut dengan harga Rp.567.500. ia pun akhirnya mengalami kerugian Rp.500 untuk setiap kaleng. Berdasarkan informasi tersebut, beberapa kaleng kue yang dibeli oleh pa muin dari toko langganannya ?",
          options: ["65 Bungkus", "70 Bungkus", "75 Bungkus", "80 Bungkus", "85 Bungkus"],
          correctIndex: 0
        },
        {
          question: "Budiman menerima uang Rp.100.000 minggu lalu. Sepersepuluhnya langsung digunakan untuk membeli buku tullis. Sepertiganya sisanya digunakan untuk membeli buku literatur. Dua perenam sisanya digunakan untuk membeli buku bacaan. Seperempat sisanya digunakan untuk membeli kamus. Berapakah sisa uang Budiman sekarang ?",
          options: ["Rp.30.000", "Rp.25.000", "Rp.24.000", "Rp.20.500", "Rp.15.000"],
          correctIndex: 0
        },
        {
          question: "CV. Maju terus pantang mundur menerima pesanan pembuatan spanduk dan bendera partai.Jumlah kedua pesanan tersebutu adalah 48 buah. Jumlah bendera partai 3x lebih banyak dari jumlah spanduk. Berapakah jumlah bendera partai yang harus di buat oleh CV. Maju terus pantang mundur ?",
          options: ["12 Buah", "24 Buah", "36 Buah", "42 Buah", "46 Buah"],
          correctIndex: 2
        },
        {
          question: "Empat orang pekerja mengangkut batu bata ke dalam truk dalam waktu 8 jam. Berapa orang kuli yang diperlukan untuk menyelesaikan pekerjaan itu dalam waktu 30 menit?",
          options: ["64 Orang", "65 Orang", "60 Orang", "55 Orang", "54 Orang"],
          correctIndex: 0
        },
        {
          question: "Dalam sekali tangkapan, seorang nelayan mampu mendapatkan 150 ekor ikan besar. Sedangkan ikan kecil yang ia tangkap kurang lebih 25% dari jumlah tangkapan seluruhnya. Berdasarkan informasi tersebut, berapa ekorkah hasil seluruh tangkapan nelayan tersebut ?",
          options: ["175 Ekor", "200 Ekor", "250 Ekor", "300 Ekor", "350 Ekor"],
          correctIndex: 1
        },
        {
          question: "Ambar dan teman teman nya bermain lempar tali.Pada permainan pertama Ambar menang 15 buah. Tetapi pada permainan ke 2 Ambar kalah 30 buah. Jika awalnya Ambar memiliki 60 buah tali, maka berapa jumlah tali Ambar sekarang ?",
          options: ["105 Tali", "75 Tali", "60 Tali", "45 Tali", "15 Tali"],
          correctIndex: 3
        },
        {
          question: "Untuk membangun pos ronda diperlukan 6 orang selama tiga hari. Diperlukan berapa orang jika galian ingin diselesaikan 1/2 hari?",
          options: ["72 Orang", "36 Orang", "18 Orang", "9 Orang", "6 Orang"],
          correctIndex: 1
        },
        {
          question: "Sebuah CD Film disewakan dengan harga Rp.5.000,- untuk 2 hari pertama dan untuk dan untuk hari selanjutnya Rp.2000,- /harinya. Jika penyewa CD tersebut membayar Rp.11.000 untuk sebuah CD ,berapa harikah CD tersebut disewanya ?",
          options: ["4 Hari", "5 Hari", "6 Hari", "7 Hari", "8 Hari"],
          correctIndex: 1
        },
        {
          question: "Rahmad biasa bekerja 8 jam setiap harinya. Ia berkerja mulai pukul 07.00 pagi. Hari ini ia bekerja hingga pukul 17.15. Berapa menit lebih lama kah Rahmad Bekerja hari ini ?",
          options: ["75 Menit", "82 Menit", "92 Menit", "120 Menit", "135 Menit"],
          correctIndex: 4
        },
        {
          question: "Raras berjalan menempuh jarak 4/6 km dalam waktu 10 menit. Berapakah kecepatan rata rata perjalanan nya ?",
          options: ["6 Jam", "5 Jam", "4 Jam", "3 Jam", "2 Jam"],
          correctIndex: 2
        },
        {
          question: "X adalah sisi bujur sangkar yang luasnya 169 cm² .Sedangkan y adalah sisi kubus yang volumenya adalah 512 cm³.Berapakah xy pangkat 2 ?",
          options: ["360 Cm", "432 Cm", "564 Cm", "768 Cm", "832 Cm"],
          correctIndex: 4
        },
        {
          question: "15 orang bekerja pada bagian A disebuah perusahaan tekstil.15 orang ini mendapatkan upah Rp5.000 per jam untuk masing-masing orang. 10 orang yang bekerja di bagian B mendapatkan upah sebesar Rp6.000 per jam sedangkan sejumlah orang yang bekerja di bagian C mendapatkan upah Rp7.000 per jam. setiap pekerja dalam semua bagian bekerja selama 8 jam perhari perusahaan tekstil tersebut membayar upah mereka sebesar Rp.1.360.000 perhari. Berdasarkan informasi tersebut,berapa jumlah pekerja yang ditempatkan pada bagian C ?",
          options: ["4 Orang", "5 Orang", "8 Orang", "9 Orang", "10 Orang"],
          correctIndex: 1
        },
        {
          question: "jika Farhan mampu membaca 2 halaman koran setiap X menit. maka dalam 9 menit Farhan mampu membaca berapa halaman ?",
          options: ["18/2x", "18/x", "X/18", "9/2x", "9/x"],
          correctIndex: 1
        },
        {
          question: "berapa buah semangka yang dapat dibeli dengan Rp30.000 apabila dengan Rp6.000 akan mendapat 2 buah semangka ?",
          options: ["10 Buah Semangka", "12 Buah Semangka", "14 Buah Semangka", "15 Buah Semangka", "17 Buah Semangka"],
          correctIndex: 0
        },
        {
          question: "murid murid suatu kelas akan berpiknik dengan bus jumlah siswa wanita 2 kali lebih banyak dari siswa pria. Biaya siswa adalah Rp.7.500 dan jumlah uang yang terkumpul adalah Rp.225.000 .Berapakah jumlah siswa pria yang ikut piknik ?",
          options: ["5 Siswa", "10 Siswa", "15 Siswa", "20 Siswa", "25 Siswa"],
          correctIndex: 1
        },
        {
          question: "8 orang pekerja dapat menyelesaikan suatu pekerjaan dalam waktu 5 hari.Berapa orang buruh yang dibutuhkan untuk menyelesaikan pekerjaan tersebut dalam waktu 1 hari ?",
          options: ["35 Orang", "40 Orang", "42 Orang", "45 Orang", "50 Orang"],
          correctIndex: 1
        },
        {
          question: "4 tahun yang akan datang seorang ibu akan berusia 3 kali usia anaknya. 4 tahun yang lalu ibu tersebut berusia 24 tahun lebih tua dari anaknya. berapa tahunkah usia anak tersebut sekarang ?",
          options: ["8 Tahun", "14 Tahun", "10 Tahun", "12 Tahun", "16 Tahun"],
          correctIndex: 4
        },
        {
          question: "Setiap murid dalam satu kelas senang membaca buku atau menulis cerpen. jumlah murid dalam kelas tersebut ada 30 orang. 27 di antara murid-murid tersebut gemar membaca buku sedangkan murid yang gemar menulis cerpen ada 22 orang. Berdasarkan informasi tersebut Berapa jumlah murid yang suka membaca buku dan menulis cerpen ?",
          options: ["3 Siswa", "8 Siswa", "11 Siswa", "19 Siswa", "21 Siswa"],
          correctIndex: 3
        },
        {
          question: "Arif Rahman menginvestasikan seperlima dari uangnya untuk membeli perkebunan. kemudian Ia juga menginvestasikan an 2/5 dari uangnya untuk membeli properti. Sisanya adalah Rp.30 miliar. Berapakah jumlah uangnya semula ?",
          options: ["Rp. 55 Miliar", "Rp. 55,8 Miliar", "Rp. 62 Miliar", "Rp. 62,5 Miliar", "Rp. 75 Miliar"],
          correctIndex: 4
        },
        {
          question: "Lina berusia 9 tahun lebih tua dari Ridwan. Ridwan berusia 2 tahun lebih muda dari Hendra. Berdasarkan informasi tersebut, Berapa tahun selisih usia Lina dan Hendra ?",
          options: ["3 Tahun", "4 Tahun", "5 Tahun", "6 Tahun", "7 Tahun"],
          correctIndex: 4
        },
        {
          question: "Satu lembar seng lebarnya empat 2/3 kaki.1 kaki 30 cm. Seng ini dipotong-potong menjadi beberapa bagian yang masing-masing 4 inci(1 inci=2 1/2 cm) berapakah potongan bagian yang diperoleh dari lembaran tersebut ?",
          options: ["16 Potong", "12 Potong", "8 Potong", "24 Potong", "14 Potong"],
          correctIndex: 2
        },
        {
          question: "Rumah Amir jaraknya 1 1/2 km dari kantornya, bila ia berjalan rata-rata 4 1/2 Km tiap jamnya. Berapa jam kah yang ditempuh untuk berjalan pergi pulang selama satu minggu.(satu minggu dihitung 6 hari kerja dan ia tidak pernah makan siang di rumah) ?",
          options: ["4 Jam", "6 Jam", "4 1/2 Jam", "24 Jam", "1/3 Jam"],
          correctIndex: 0
        },
        {
          question: "Penjual mengantar 9 mangkok sup ke sebuah toko. dia hanya mampu membawa 2 mangkok sup.berapakah penjual harus pergi untuk mengantar 9 mangkok sup tersebut ?",
          options: ["3 Kali", "4 Kalil", "5 Kali", "6 Kali", "9 Kali"],
          correctIndex: 2
        },
        {
          question: "Seorang pembuat jalan harus memasang tegel yang panjangnya 6 dm dan tebalnya 40 cm, Ia membutuhkan 600 buah tegel. berapakah meter persegikah jalan itu?",
          options: ["240 M Pangkat2", "244 M Pangkat2", "142 M Pangkat2", "144 M Pangkat2", "146 M Pangkat2"],
          correctIndex: 3
        },
        {
          question: "Nilai Peter termasuk urutan ke-16 dari atas dan juga urutan ke-16 dari bawah dalam kelasnya. berapakah banyak siswa dalam kelas tersebut ?",
          options: ["16 Orang", "26 Orang", "30 Orang", "31 Orang", "32 Orang"],
          correctIndex: 3
        },
        {
          question: "Seseorang memiliki rumah yang harganya Rp.9.000.000.Dalam penilaian pajak rumah itu dinilai 2/3 dari harga tersebut di atas pajaknya 12,50 tiap Rp.1000.00 berapakah pajak yang harus dibayar ?",
          options: ["Rp. 750.000,-", "Rp. 95.000,-", "Rp. 75.000,-", "Rp.112.500,-", "Rp.1.125.000,-"],
          correctIndex: 2
        },
        {
          question: "Seseorang ingin memasang iklan sebanyak 3 baris untuk menjual barangnya.Untuk hari pertama ia harus membayar Rp500.00 setiap baris.Untuk 5 hari berikutnya ia harus membayar Rp300.00 setiap baris dan untuk hari-hari berikutnya ia membayar Rp100.00 setiap baris. ia membayar Rp.12.000,00 berapa hari iklan itu terpasang ?",
          options: ["20 Hari", "30 Hari", "16 Hari", "40 Hari", "15 Hari"],
          correctIndex: 2
        },
        {
          question: "Kecepatan mobil Adri 90 km perjam. Jarak Bogor-Jakarta 60km. Jika Adri berangkat dari Bogor pukul 10, pukul berapa Adri akan tiba di Jakarta?",
          options: ["11'30", "11'00", "10'30", "10'40", "12'00"],
          correctIndex: 3
        },
        {
          question: "Jatmiko berjalan dari kota A ke kota B dengan kecepatan 8 km/jam selama 5 jam dan ia kembali ke kota A dengan naik motor. Berapakah kecepatan rata-rata seluruh perjalanan Jatmiko bila ia kembali dari kota B ke kota A selama 3 jam ?",
          options: ["5 Km/jam", "8 Km/jam", "10 Km/jam", "12 Km/jam", "14 Km/jam"],
          correctIndex: 2
        },
        {
          question: "Wiwik berangkat dari kota P pukul 6:15 dan sesampainya di kota M pukul 9:45. Jika Wiwik mengendarai mobilnya dengan kecepatan rata-rata 60 km/jam dan beristirahat selama satu jam untuk makan dan minum, berapa km jarak kota P dan M ?",
          options: ["120 Km", "135 Km", "150 Km", "155 Km", "160 Km"],
          correctIndex: 2
        },
        {
          question: "Benny berjalan kaki dengan kecepatan 5 km per jam, setelah 20 km dia berlari sehingga mencapai 60 km dalam waktu 6 jam. Berapa km per jam kecepatan rata-rata Benny itu ?",
          options: ["10", "8", "6", "5", "7"],
          correctIndex: 1
        },
        {
          question: "Yandi berjalan ke arah Utara dengan menempuh jarak 2/5 km dalam tempo 5 menit, berapa kecepatan rata-rata perjalanan Yandi dalam 1 jam kedepan ?",
          options: ["4,5 Km", "4,3 Km", "5 Km", "4,8 Km", "4,4 Km"],
          correctIndex: 3
        },
        {
          question: "Jika garis tengah sebuah roda A dan C = 10 cm dan roda B dan D = 5 cm. Apabila roda A berputar dengan sempurna, roda D akan berputar sebanyak ?",
          options: ["1 Kali", "2 Kali", "4 Kali", "6 Kali", "5 Kali"],
          correctIndex: 2
        },
        {
          question: "jika Silvi telah mengerjakan soal sejak pukul 08.30 hingga pukul 12.00 sebanyak 20 soal maka rata-rata soal yang dikerjakan Silvi setiap setengah jam adalah ?",
          options: ["2", "2,5", "3", "3,3", "4,7"],
          correctIndex: 2
        },
        {
          question: "Sebuah kebun bunga berbentuk persegipanjang dengan panjang 16 m dan lebar 12 m. Sekeliling kebun bunga dibangun jalan yang lebarnya 3 m. Berapa meter persegi luas jalan itu ?",
          options: ["93", "168", "204", "186", "254"],
          correctIndex: 2
        },
        {
          question: "Drew naik mobil berangkat pukul 07.00 dari kota A ke kota B dengan kecepatan rata-rata 60 km/jam. Hasan naik motor berangkat pukul 07.00 dari kota B ke kota A dengan kecepatan rata-rata 40 km/jam. Jika jarak kota A dan B = 350 km, maka Drew dan Hasan akan bertemu pada pukul....",
          options: ["09'50", "10' 30", "10'50", "11'35", "12'00"],
          correctIndex: 1
        },
        {
          question: "kalau Ani berjalan 8 meter ke muka dan mundur lagi 4 meter ke belakang, berapakah jarak Ani dari tempat semula ?",
          options: ["2 Meter", "3 Meter", "4 Meter", "5 Meter", "6 Meter"],
          correctIndex: 2
        },
];