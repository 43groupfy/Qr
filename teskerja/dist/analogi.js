const questions = [
		{
          question: "KAKA TUA : MERPATI = ___",
          options: ["Anjing : Herder", "Gurame : Kakap", "Gajah : Semut", "Singa : Naga", "Elang : Kupu-Kupu"],
          correctIndex: 1
        },
        {
          question: "BELAJAR : PANDAI = ___",
          options: ["Cetak : Kertas", "Berpikir : Arif", "Potret : Kamera", "Litografi : Batu", "Cetak : Tinta"],
          correctIndex: 1
        },
        {
          question: "KAMPUNG : SAWAH = ___",
          options: ["Kampus : Perpus", "Kota : Gedung", "Sawah : Padi", "Bumbu : Dapur", "Reserse : Polisi"],
          correctIndex: 1
        },
        {
          question: "JANJI : BUKTI = ___",
          options: ["Ucapan : Tindakan", "Maling : Penjara", "Materi : Soal", "Harta : Kendaraan", "Tuan : Tuhan"],
          correctIndex: 0
        },
        {
          question: "SUNGAI : JEMBATAN = ___",
          options: ["Markah : Jalan", "Rintangan : Godaan", "Janji : Tepati", "Kayu : Terbakar", "Masalah : Jalan Keluar"],
          correctIndex: 4
        },
        {
          question: "MATAHARI : TERANG = ___",
          options: ["Mendidih : Air", "Membeku : Dingin", "Lampu : Sinar", "Air : Hujan", "Api : Panas"],
          correctIndex: 4
        },
        {
          question: "UMUM : LAZIM = ___",
          options: ["Kurus : Gemuk", "Langsing: Ramping", "Lapar : Haus", "Garam : Asin", "Cinta : Tinta"],
          correctIndex: 1
        },
        {
          question: "SISWA : BELAJAR = ___",
          options: ["Santri : Garam", "Ayah : Ibu", "Ilmuwan: Meneliti", "Guru : Murid", "Karyawan: Bekerja"],
          correctIndex: 2
        },
        {
          question: "AIR : ES = UAP : ___",
          options: ["Air", "Udara", "Basah", "Mendidih", "Awan"],
          correctIndex: 0
        },
        {
          question: "APOTEKER : OBAT = ___",
          options: ["Pesawat : Penyakit", "Koki : Masakan", "Montir : Rusak", "Mentor : Dril", "Psikiater: Ide"],
          correctIndex: 1
        },
        {
          question: "PILOT : PESAWAT = ___",
          options: ["Masinis : Kapal", "Kusir : Kereta", "Nelayan : Kapal", "Motor : Truk", "Supir : Mobil"],
          correctIndex: 4
        },
        {
          question: "GELOMBANG : OMBAK = ___",
          options: ["Gunung : Bukit", "Berenang: Lari", "Danau : Laut", "Nusa : Pulau", "Nadir : Zenit"],
          correctIndex: 0
        },
        {
          question: "DESIBEL : SUARA = ___",
          options: ["Are : Jarak", "Warna : Merah", "Suhu : Temperatur", "Volt : Listrik", "Kalori : Berat"],
          correctIndex: 3
        },
        {
          question: "KOSONG : HAMPA = ___",
          options: ["Ubi : Akar", "Ribut : Serak", "Penuh : Sesak", "Siang : Malam", "Cair : Encer"],
          correctIndex: 4
        },
        {
          question: "SUAP : POLITIK = ___",
          options: ["Menteri : Presiden", "Cabai : Pedas", "Generik : Paten", "Contek : Ujian", "Pemilu : Legislatif"],
          correctIndex: 3
        },
        {
          question: "SARUNG TANGAN : PETINJU = MIKROSKOP : ___",
          options: ["Analis", "Dokter", "Optalmolog", "Bakteriolog", "Apoteker"],
          correctIndex: 3
        },
        {
          question: "MATAHARI : BUMI = BUMI : ___",
          options: ["Gravitasi", "Bulan", "Planet", "Matahari", "Bintang"],
          correctIndex: 1
        },
        {
          question: "SERUT : KAYU = ___",
          options: ["Karyawan : Perusahaan", "Cangkul : Kebun", "Cek : Batal", "Swasta : Industri", "Ladang : Sawah"],
          correctIndex: 1
        },
        {
          question: "AIR : HAUS = ___",
          options: ["Angin : Panas", "Makanan: Lapar", "Rumput : Kambing", "Gelap : Lampu", "Minyak : Api"],
          correctIndex: 1
        },
        {
          question: "PELUKIS : GAMBAR = ___",
          options: ["Koki : Restoran", "Penyanyi: Lagu", "Penyair : Puisi", "Komponis: Lagu", "Kartunis : Pena"],
          correctIndex: 3
        },
        {
          question: "PETUNJUK : AFFIRMASI = ___",
          options: ["Menolak : Melawan", "Didenda : Ditahan", "Setuju : Berkata", "Relasi : Keadaan", "Rejeksi : Konfirmasi"],
          correctIndex: 1
        },
        {
          question: "KAKI : SEPATU = ___",
          options: ["Cat : Kuas", "Meja : Ruangan", "Telinga : Anting", "Cincin : Jari", "Topi : Kepala"],
          correctIndex: 2
        },
        {
          question: "KORAN : MAKALAH : BULETIN = ___",
          options: ["Restoran : Hotel : Losmen", "Cat : Kuas : Lukisan", "Sandal : Sepatu : Kaos", "Air : Roti : Singkong", "Bus : Kereta Api : Delman"],
          correctIndex: 4
        },
        {
          question: "BUSUR : GARIS = ___",
          options: ["Terbenam : Terbit", "Tangkap : Lempar", "Tombak : Busur", "Busur : Panah", "Relatif : Absolut"],
          correctIndex: 3
        },
        {
          question: "TEMBAKAU : ROKOK : ISAP = ___",
          options: ["Gandum: Roti : Makan", "Kulit : Sepatu : Kaki", "Plastik : Sisir : Rambut", "Beras : Nasi : Jemur", "Teh : Susu : Minum"],
          correctIndex: 0
        },
        {
          question: "MULUT : MONYONG = ___",
          options: ["Leher : Jenjang", "Mata : Hitam", "Dahi : Muka", "Hidung : Pesek", "Pipi : Merah"],
          correctIndex: 3
        },
        {
          question: "PENGHORMATAN : JASA = INTENSIF : ___",
          options: ["Piagam", "Pensiun", "Hadiah", "Prestasi", "Lembur"],
          correctIndex: 3
        },
        {
          question: "TUBUH : PAKAIAN = ___",
          options: ["Kurva : Alam", "Lidi : Sapu", "Meja : Kotak", "Buku : Sampul", "Jalan : Garis"],
          correctIndex: 3
        },
        {
          question: "AIR : MENGUAP = ___",
          options: ["Es : Mencair", "Panas : Memuai", "Jatuh : Pecah", "Uap : Hujan", "Laut : Mendung"],
          correctIndex: 0
        },
        {
          question: "GUNDUL : RAMBUT = ___",
          options: ["Bugil : Pakaian", "Keramik : Lantai", "Kepala : Botak", "Mogok : Mobil", "Rambut : Bulu"],
          correctIndex: 0
        },
        {
          question: "SENAPAN : BERBURU = ___",
          options: ["Kapal : Berlabu", "Kereta : Langsir", "Pancing : Ikan", "Perangakap : Menangkap", "Parang : Mengasah"],
          correctIndex: 3
        },
        {
          question: "BATA : TANAH LIAT = ___",
          options: ["Batu : Pasir", "Tembikar : Keramik", "Bunga : Buah", "Beton : Semen", "Kertas :Buku"],
          correctIndex: 3
        },
        {
          question: "KENDARAAN : MOBIL = ___",
          options: ["Gaji : Upah", "Kapal : Perahu", "Binatang: Lawan", "Orang : Pemuda", "Laut : Danau"],
          correctIndex: 3
        },
        {
          question: "GAMBAR : PELUKIS = ___",
          options: ["Lagu : Penyanyi", "Restoran : Koki", "Pena : Kartunis", "Lagu : Komponis", "Puisi : Penyair"],
          correctIndex: 3
        },
        {
          question: "BANGSA : ETHNOLOGI = ___",
          options: ["Demonstrasi : Demografi", "Bumi : Geografi", "Planet : Astronomi", "Penyakit : Patologi", "Alam : Biologi"],
          correctIndex: 3
        },
        {
          question: "SEMINAR : SARJANA = ___",
          options: ["Perpustakaan : Peneliti", "Koneurvator : Seniman", "Ruang Pengadilan : Saksi", "Rumah Sakit : Pasien", "Akademi : Taruna"],
          correctIndex: 0
        },
        {
          question: "RAMBUT : GUNDUL = ___",
          options: ["Lantai : Licin", "Pakaian : Bugil", "Botak : Kepala", "Mobil : Mogok", "Bulu : Cabut"],
          correctIndex: 1
        },
        {
          question: "LABA : PENJUALAN = KEBERANIAN : ___",
          options: ["Toleransi", "Kebenaran", "Pendekar", "Kemenangan", "Pembelaan"],
          correctIndex: 3
        },
        {
          question: "TIANG : KOKOH = ___",
          options: ["Dinding : Fondasi", "Teras : Hiasan", "Lantai : Marmer", "Atap : Terlindung", "Genting : Tanah"],
          correctIndex: 3
        },
        {
          question: "MERAH : MAWAR = ___",
          options: ["Hijau : Jati", "Kuning : Apel", "Putih : Melati", "Hitam : Tebu", "Salmon : Ikan"],
          correctIndex: 2
        },
        {
          question: "TAJAM : TUMPUL = ___",
          options: ["Muka : Mata", "Palu : Pukul", "Pulsa : Ponsel", "Dekat : Jauh", "Sukar : Sulit"],
          correctIndex: 3
        },
        {
          question: "LAPAR : NASI = ___",
          options: ["Membaca : Menggambar", "Bosan : Tidur", "Mengantuk : Melamun", "Mual : Obat", "Haus : Air"],
          correctIndex: 4
        },
        {
          question: "KULIT : SISIK = ___",
          options: ["Atap : Jantung", "Dinding : Cat", "Keramik : Mozaik", "Rumah : Kamar", "Tegel : Lantai"],
          correctIndex: 0
        },
        {
          question: "MARAH : CEMBURU = ___",
          options: ["Pemerintah : Persamaan", "Beras : Gula", "Integrasi : Persatuan", "Tidak Toleransi : Fanatik", "Pahit : Manis"],
          correctIndex: 3
        },
        {
          question: "MATA : TELINGA = ___",
          options: ["Perut : Dada", "Lutut : Siku", "Kaki : Paha", "Lidah : Hidung", "Jari : Tangan"],
          correctIndex: 3
        },
        {
          question: "PEDAS : CABAI = MANIS : ___",
          options: ["Kecap", "Sakarin", "Teh Botol", "Manisan", "Gadis"],
          correctIndex: 1
        },
        {
          question: "RAMALAN : ASTROLOGI = BANGSA : ___",
          options: ["Etnologi", "Psikologi", "Demografi", "Antropologi", "Sosiologi"],
          correctIndex: 0
        },
        {
          question: "SUARA : DESIBEL = ___",
          options: ["Temperatur : Suhu", "Berat : Kalori", "Jarak : Meter", "Merah : Warna", "Listrik : Volt"],
          correctIndex: 4
        },
        {
          question: "LAMPU : GELAP = MAKANAN : ___",
          options: ["Lapar", "Mulas", "Gizi", "Penuh", "Kenyang"],
          correctIndex: 0
        },
        {
          question: "BUNGA : BUKET = ___",
          options: ["Pigmen : Mata", "Balon : Udara", "Pintu : Kunci", "Tubuh : Kulit", "Kertas : Buku"],
          correctIndex: 4
        },
        {
          question: "RUMPUT : LAPANGAN = BINTANG : ___",
          options: ["Antariksa", "Malam", "Angkasa", "Langit", "Nebula"],
          correctIndex: 3
        },
        {
          question: "ULAT : KEPOMPONG : KUPU-KUPU = ___",
          options: ["Kecil : Sedang : Besar", "Sore : Siang : Pagi", "Ngantuk : Tidur : Mimpi", "Bayi : Kanak-Kanak : Remaja", "Anak : Ayah : Kakek"],
          correctIndex: 3
        },
        {
          question: "TUKANG : GERGAJI : PALU = ___",
          options: ["Guru : Kapur : Topi", "Penari : Topi : Selendang", "Montir : Obeng : Tang", "Penulis : Kuas : Cat", "Tukang : Obat : Stetoskop"],
          correctIndex: 2
        },
        {
          question: "BURUNG : TERBANG : UDARA = ___",
          options: ["Makanan : Nasi : Meja", "Rokok : Tembakau : Asap", "Kuas : Cat : Tembok", "Ibu : Memasak : Halaman", "Ikan : Berenang : Air"],
          correctIndex: 4
        },
        {
          question: "MACAN : BELANG = ___",
          options: ["Bangun : Tidur", "Possisi : Tempat", "Virus : Bakteri", "Gajah : Gading", "Racun : Maut"],
          correctIndex: 3
        },
        {
          question: "SUSU : GELAS = ___",
          options: ["Makan : Orang", "Bubur : Piring", "Nasi : Beras", "Bulat : Telor", "Teh : Sendok"],
          correctIndex: 1
        },
        {
          question: "BUNGA : TAMAN = ___",
          options: ["Pohon : Ranting", "Murid : Pr", "Dokter : Pasien", "Sekretaris: Komputer", "Dosen : Universitas"],
          correctIndex: 4
        },
        {
          question: "PADI : PETANI = ___",
          options: ["Penyair : Puisi", "Dokter : Obat", "Dukun : Jamu", "Sawah : Sapi", "Matahari: Panas"],
          correctIndex: 0
        },
        {
          question: "PRESIDEN : NEGARA = ___",
          options: ["Ayah : Keluarga", "Kuping : Anting", "Kepala : Rambut", "Rt : Rw", "Menteri : Instruksi"],
          correctIndex: 0
        },
        {
          question: "TELUK : LAUT = ___",
          options: ["Semenanjung : Daratan", "Kapal : Pelabuhan", "Karang : Tanjung", "Selat : Pulau", "Sepeda : Pedal"],
          correctIndex: 0
        },
        {
          question: "ADAGIO : ALLEGRO = ___",
          options: ["Binatang: Singa", "Lambat : Cepat", "Putih : Merah", "Akal : Orang", "Rakus : Babi"],
          correctIndex: 1
        },
        {
          question: "TAPE : RAGI = ___",
          options: ["Kuman : Penicilin", "Antiseptik : Iodium", "Pasta Gigi : Flour", "Minuman : Soda", "Obat : Aspirin"],
          correctIndex: 1
        },
        {
          question: "KOMPOR : API = ___",
          options: ["Pohon : Buah", "Kipas : Angin", "Jalan : Macet", "Lemari : Es", "Palung : Gua"],
          correctIndex: 1
        },
        {
          question: "BAWANG : SIUNG = ___",
          options: ["Telur : Butir", "Buku : Lembar", "Kain : Meter", "Pakaian : Kodi", "Kertas : Kilogram"],
          correctIndex: 0
        },
        {
          question: "BELAJAR : PANDAI = ___",
          options: ["Potret : Kamera", "Rajin : Bodoh", "Litografi : Batu", "Berpikir : Arif", "Cetak : Kertas"],
          correctIndex: 3
        },
        {
          question: "PIANO : ORGAN = ___",
          options: ["Drum : Gitar", "Kunci : Pedal", "Senar : Pipa", "Nada : Not", "Gitar : Perkusi"],
          correctIndex: 3
        },
        {
          question: "NELAYAN : PERAHU = ___",
          options: ["Petani : Traktor", "Koki : Oven", "Dosen : Kelas", "Penulis : Pena", "Fotografer : Kamera"],
          correctIndex: 0
        },
        {
          question: "PANTAI : RESOR = ___",
          options: ["Bukit : Laut", "Hujan : Basah", "Gunung : Vila", "Laut : Pesiar", "Gunung : Bukit"],
          correctIndex: 2
        },
        {
          question: "HUMOR : KOMEDIAN = ___",
          options: ["Klimaks : Drama", "Memori : Amnesia", "Perceraian : Pernikahan", "Heroisme : Epik", "Sintaksis : Kata"],
          correctIndex: 3
        },
        {
          question: "GEOLOGI : ILMU = ___",
          options: ["Kimia : Senyawa", "Teori : Praktek", "Biologi : Laboratorium", "Beringin : Pohon", "Astronomi : Galaksi"],
          correctIndex: 3
        },
        {
          question: "BUNGA : RIBA = ___",
          options: ["Hemat : Kikir", "Akrab : Sengit", "Mawar : Hutang", "Hasrat : Extravaganza", "Khawatir : Bangkrut"],
          correctIndex: 0
        },
        {
          question: "UMUR : TAHUN = ___",
          options: ["Ilmu : Nilai", "Jam : Detik", "Kecepatan : Jam", "Kertas : Helai", "Air : Minum"],
          correctIndex: 3
        },
        {
          question: "INTENSITAS : FREKUENSI = ___",
          options: ["Hadiah : Pengabdian", "Penghargaan : Penghormatan", "Jauh : Jarak", "Jumlah : Total", "Hak : Kewajiban"],
          correctIndex: 1
        },
        {
          question: "MOBIL : BENSIN = ___",
          options: ["Pesawat Terbang : Propeler", "Motor : Solar", "Manusia : Makanan", "Sapi : Susu", "Penyakit : Virus"],
          correctIndex: 2
        },
        {
          question: "BAIT : PUISI = ___",
          options: ["Drama : Epos", "Sajak : Prosa", "Loteng : Bangunan", "Hiasan Diding : Lukisan", "Bendera : Lagu Kebangsaan"],
          correctIndex: 2
        },
        {
          question: "MENCURI : MENYESAL = ___",
          options: ["Menyakiti : Menangis", "Mencontek : Menghukum", "Menyakiti : Menangis", "Makan : Lapar", "Menanam : Menyiang"],
          correctIndex: 4
        },
        {
          question: "AIR : MINYAK = ___",
          options: ["Rajin : Pandai", "Elang : Ayam", "Anjing : Kucing", "Gula : Kopi", "Pintar : Bodoh"],
          correctIndex: 2
        },
        {
          question: "DANA : PENGGELAPAN = ___",
          options: ["Deposito : Perbankan", "Cek : Akuntansi", "Kuitansi : Saldo", "Karya Tulis : Penjiplakan", "Uang : Brankas"],
          correctIndex: 3
        },
        {
          question: "ABRASI : HEMPASAN = ___",
          options: ["Memasak : Panas", "Rayuan : Pujian", "Reruntuhan : Penghancuran", "Serpihan : Potongan", "Matahari : Hujan"],
          correctIndex: 0
        },
        {
          question: "DOKTOR : DISERTASI = ___",
          options: ["Kyai : Jamaah", "Buruh : Upah", "Sarjana : Skripsi", "Kuliah : Praktikum", "Menteri : Kepmen"],
          correctIndex: 2
        },
        {
          question: "ACEH : SERAMBI MEKAH = ___",
          options: ["Madona : Seksi", "Obama : Presiden", "Michael Schumacer : Pembalap", "Michael Jackson : King Of Pop", "Michael Gorbachev : Pemimpin Soviet"],
          correctIndex: 3
        },
        {
          question: "KARDIOLOGI : JANTUNG = ___",
          options: ["Biologi : Ilmu", "Farmakologi : Obat-Obatan", "Ternologi : Alat", "Akutansi : Perusahaan", "Phatologi : Peta"],
          correctIndex: 1
        },
        {
          question: "DISELESAIKAN : RAGU = ___",
          options: ["Diumumkan : Pencalonan", "Dikonfirmasi : Curiga", "Memulai : Mengakhiri", "Dimasukkan : Tamu", "Disarankan : Ide"],
          correctIndex: 1
        },
        {
          question: "GEMPA : RICHTER = ___",
          options: ["Ombak : Knot", "Jarak : Dinamo", "Obat : Dosis", "Suhu : Fahrenheit", "Banjir : Air"],
          correctIndex: 3
        },
        {
          question: "SEPATU : JALAN = ___",
          options: ["Buku : Baca", "Pensil : Makan", "Sisir : Rambut", "Garpu : Makan", "Sandal : Jepit"],
          correctIndex: 3
        },
        {
          question: "SEKOLAH : SISWA : BELAJAR = ___",
          options: ["Sekolah : Guru : Rapat", "Laboratorium : Ilmuan : Meneliti", "Rumah : Ayah : Ibu", "Dokter : Pasien : Periksa", "Kantin : Makan : Siswa"],
          correctIndex: 1
        },
        {
          question: "MURID : BUKU : PERPUSTAKAAN = ___",
          options: ["Anak : Kelereng : Rumah", "Nasabah : Uang : Bank", "Orang Tua : Anak : Ibu", "Pembeli : Makanan : Gudang", "Dosen : Mahasiswa : Kuliah"],
          correctIndex: 1
        },
        {
          question: "TURBIN : AIR = ___",
          options: ["Tekstil : Pabrik", "Money : Bank", "Telepon : Genggam", "Senter : Batu Baterai", "Sarjana : Wisuda"],
          correctIndex: 3
        },
        {
          question: "GANDUM : TEPUNG : KUE = ___",
          options: ["Padi : Beras : Nasi", "Nasi : Bubur : Bayi", "Air : Beku : Es", "Wortel : Tomat : Sayur", "Jeruk : Mangga : Buah"],
          correctIndex: 0
        },
        {
          question: "FILM : SUTRADARA = ___ : PENYAIR ___",
          options: ["Lagu", "Lukisan", "Puisi", "Skripsi", "Disertasi"],
          correctIndex: 2
        },
        {
          question: "SAPI : HERBIVORA : MELAHIRKAN = AYAM : ___ : ___",
          options: ["Rumput : Omnivora", "Omnivora : Bertelur", "Herbivora : Susu", "Karnivora : Beranak", "Omnivora : Daging Ayam"],
          correctIndex: 1
        },
        {
          question: "SOSIOLOGI : ILMU = MONOPOLI : ___",
          options: ["Kekuasaan", "Permainan", "Perdagangan", "Perekonomian", "Pertanian"],
          correctIndex: 1
        },
        {
          question: "SISWA : GURU : SEKOLAH = PASIEN : ___ : ___",
          options: ["Obat : Apotek", "Obat : Dokter", "Dokter : Rumah Sakit", "Rumah Sakit : Obat", "Apotek : Rumah Sakit"],
          correctIndex: 2
        },
        {
          question: "TIDUR : NGANTUK = ___ : ___",
          options: ["Istirahat : Lelah", "Melati : Bunga", "Kaki : Sepatu", "Minum : Air", "Kampus : Kuliah"],
          correctIndex: 0
        },
        {
          question: "TUNTUNAN : SANTUNAN = ___",
          options: ["Undian : Hadiah", "Permintaan : Pemberian", "Persediaan : Penawaran", "Rusak : Ganti Rugi", "Tabungan : Pembelanjaan"],
          correctIndex: 1
        },
        {
          question: "DIAMETER : LINGKARAN = ___",
          options: ["Diagonal : Segiempat", "Luas : Panjang", "Tinggi : Segitiga", "Sudut : Tegak Lurus", "Radius : Busur"],
          correctIndex: 0
        },
        {
          question: "PEDATI : KUDA = PESAWAT TERBANG : ___",
          options: ["Sayap", "Baling-Baling", "Pramugari", "Pilot", "Landasan"],
          correctIndex: 1
        },
        {
          question: "ANTISEPTIK : KUMAN = SENAPAN : ___",
          options: ["Peluru", "Sirkus", "Menerkam", "Rusa", "Binatang"],
          correctIndex: 3
        },
        {
          question: "SAPU : BERSIH = ___",
          options: ["Lap : Kering", "Babi : Rakus", "Uang : Bank", "Tubuh : Kulit", "Foto : Bingkai"],
          correctIndex: 0
        },
        {
          question: "MELANGGAR : DIHUKUM = ___",
          options: ["Kantuk : Mimpi", "Sakit : Kehujanan", "Bukit : Gunung", "Buku : Perpustakaan", "Doa : Pendeta"],
          correctIndex: 1
        },
        {
          question: "PIRAMID : ___ = ___ : ARCA ___",
          options: ["Mayat – Patung", "Aztec – Stupa", "Mumi – Candi", "Mesir – Museum", "Spinx – Vihara"],
          correctIndex: 2
        },
        {
          question: "SUARA : ___ = ___ : PADAM ___",
          options: ["Merdu – Redup", "Lagu – Gelap", "Bising – Terbakar", "Nada – Terang", "Bisu – Energi"],
          correctIndex: 4
        },
        {
          question: "MARAH : ___ = ___ : LEDAKAN ___",
          options: ["Kerusakan – Peledak", "Amuk – Letupan", "Emosi – Bom", "Tidak Puas – Teror", "Hawa Nafsu – Tekanan"],
          correctIndex: 1
        },
        {
          question: "TANGAN : ___ = ___ : POHON ___",
          options: ["Jari – Rindang", "Tubuh – Dahan", "Cincin – Buah", "Kaki – Tangkai", "Manusia – Pisang"],
          correctIndex: 1
        },
        {
          question: "MENDUNG : ___ = ___ : MALAM ___",
          options: ["Awan – Bulan", "Kelabu – Gelap", "Hujan – Senja", "Cuaca – Waktu", "Matahari – Bintang"],
          correctIndex: 2
        },
        {
          question: "KUDA : ___ = ___ : GARASI ___",
          options: ["Rumput – Tempat", "Pelana – Perkakas", "Istal – Mobil", "Kusir – Rumah", "Tapal – Motor"],
          correctIndex: 2
        },
        {
          question: "___ : BURUNG = RODA : ___",
          options: ["Sangkar – Motor", "Sayap – Mobil", "Paruh – Lingkaran", "Cakar – Stir", "Terbang – Jalan Raya"],
          correctIndex: 1
        },
        {
          question: "___ : CANGKIR = MAKANAN : ___",
          options: ["Minuman – Kue", "Minuman – Piring", "Kaca – Piring", "Pecah – Basi", "Air – Manis"],
          correctIndex: 1
        },
        {
          question: "___ : KETUA = PROVINSI : ___",
          options: ["Bendahara – Daerah Istimewa", "Organisasi – Gubernur", "Sekretaris – Sekretaris Daerah", "Anggota – Rakyat", "Jabatan – Kabupaten"],
          correctIndex: 1
        },
        {
          question: "___ : RUMAH = KAPAS : ___",
          options: ["Ruangan – Pohon", "Kokoh – Empuk", "Atap – Tenun", "Batu Bata – Pakaian", "Cat – Putih"],
          correctIndex: 3
        },
        {
          question: "___ : STERIL = SUAMI : ___",
          options: ["Bersih – Meninggal", "Kuman – Janda", "Rumah Sakit – Rumah Tangga", "Kuman – Meninggal", "Bakteri – Istri"],
          correctIndex: 1
        },
        {
          question: "___ : IKAN = HUTAN : ___",
          options: ["Kulkas – Taman", "Danau – Rimba", "Kolam – Kayu", "Sungai – Pohon", "Laut – Tropis"],
          correctIndex: 3
        },
        {
          question: "NELAYAN : LAUT = ___ : ___",
          options: ["Guru : Papan Tulis", "Petani : Padi", "Karyawan : Pegawai", "Pelukis : Kuas", "Penyanyi : Panggung"],
          correctIndex: 4
        },
        {
          question: "KERING : LEMBAB = ___ : ___",
          options: ["Gelap : Remang-Remang", "Cahaya : Terang", "Panas : Basah", "Matahari : Gunung", "Siang : Malam"],
          correctIndex: 0
        },
        {
          question: "GIGI TARING : KARNIVORA = ___ : ___",
          options: ["Cakar : Binatang Buas", "Tajam : Mata", "Sayap : Terbang", "Ekor : Binatang", "Paruh : Makan"],
          correctIndex: 0
        },
        {
          question: "BERANAK : MAMALIA = ___ : ___",
          options: ["Bertaring : Karnivora", "Bertelur : Unggas", "Berkelompok : Insekta", "Berjemur : Reptilia", "Berkaki Empat: Herbivora"],
          correctIndex: 1
        },
        {
          question: "MEMBERI : DERMAWAN = ___ : ___",
          options: ["Mencuri : Polisi", "Melukis : Kanvas", "Membantu : Orang", "Mencuci : Baju", "Menulis : Sekretaris"],
          correctIndex: 4
        },
        {
          question: "ORANG BODOH : ILMU = ___ : ___",
          options: ["Orang Miskin : Derma", "Orang Mengemis : Lapar", "Orang Menganggur : Kerja", "Orang Bekerja : Gaji", "Orang Kaya : Harta"],
          correctIndex: 2
        },
        {
          question: "KEHAUSAN : AIR = ___ : ___",
          options: ["Kemakmuran : Kerja Keras", "Kebodohan : Miskin", "Kegembiraan : Hiburan", "Kelelahan : Kerja", "Kelaparan : Pangan"],
          correctIndex: 4
        },
        {
          question: "KURUS : GIZI = ___ : ___",
          options: ["Gemuk : Lemak", "Sakit : Dokter", "Pendek : Besar", "Pintar : Belajar", "Bodoh : Ilmu"],
          correctIndex: 4
        },
        {
          question: "SINONIM : PERSAMAAN = ANTONIM : ___",
          options: ["Perbedaan", "Lawan", "Kontras", "Semua Benar"],
          correctIndex: 3
        },
        {
          question: "DINGIN : SELIMUT = HUJAN : ___",
          options: ["Dingin", "Payung", "Air", "Awan"],
          correctIndex: 1
        },
        {
          question: "KEPALA : PUSING = PERUT : ___",
          options: ["Batuk ", "Pilek ", "Mules ", "Gemuk"],
          correctIndex: 2
        },
        {
          question: "SEMIR : SEPATU = SIKAT : ___",
          options: ["Kuku", "Rambut ", "Televisi ", "Gigi"],
          correctIndex: 3
        },
        {
          question: "SAYA : KAMI = DIA : ___",
          options: ["Kamu ", "Mereka ", "Anda ", "Kita"],
          correctIndex: 1
        },
        {
          question: "BUGIL : PAKAIAN = GUNDUL : ___",
          options: ["Botak ", "Kepala ", "Cukur", "Rambut"],
          correctIndex: 3
        },
        {
          question: "KAYU : POHON = EMAS : ___",
          options: ["Tambang ", "Perhiasan ", "Mahal", "Logam"],
          correctIndex: 0
        },
        {
          question: "AYAH : ANAK = POHON : ___",
          options: ["Daun ", "Tunas ", "Ranting ", "Akar"],
          correctIndex: 1
        },
        {
          question: "BUSUR : PANAH = SENAPAN : ___",
          options: ["Peluru ", "Senjata ", "Berbahaya ", "Tembakan"],
          correctIndex: 0
        },
        {
          question: "KUMIS : KUCING = BELALAI : ___",
          options: ["Ular ", "Harimau ", "Gajah", "Hidung"],
          correctIndex: 2
        },
        {
          question: "BULAN : TAHUN = HARI : ___",
          options: ["Maret ", "Juni ", "Libur ", "Minggu"],
          correctIndex: 3
        },
        {
          question: "KEBAYA : WANITA = BULU : ___",
          options: ["Rambut ", "Burung ", "Mode ", "Cantik"],
          correctIndex: 1
        },
        {
          question: "KOTA : WALIKOTA = TENTARA : ___",
          options: ["Marine ", "Prajurit ", "Jendral ", "Sukarelawan"],
          correctIndex: 2
        },
        {
          question: "TAMBANG : BATUBARA = SUNGAI : ___",
          options: ["Tenang ", "Buih ", "Karang ", "Air"],
          correctIndex: 3
        },
        {
          question: "INTAN : PERMATA = SANGKUR : ___",
          options: ["Tambah ", "Senjata ", "Emas", "Tajam"],
          correctIndex: 1
        },
        {
          question: "MARET : APRIL = JULI : ___",
          options: ["Bulan ", "Juli ", "Agustus ", "Panas"],
          correctIndex: 2
        },
        {
          question: "MINUM : DAHAGA = MAKAN : ___",
          options: ["Enak ", "Lapar ", "Sayuran ", "Lambat"],
          correctIndex: 1
        },
        {
          question: "HIDUNG : MENCIUM = MATA : ___",
          options: ["Biru ", "Kuping ", "Melihat ", "Harum"],
          correctIndex: 2
        },
        {
          question: "LARI : LELAH = MANDI : ___",
          options: ["Sumur ", "Air ", "Basah ", "Segar"],
          correctIndex: 3
        },
        {
          question: "MENANGIS : SEDIH = TERTAWA : ___",
          options: ["Ramai ", "Suka Cita ", "Puteri ", "Berkelakar"],
          correctIndex: 1
        },
        {
          question: "KUCING : MEONG = ANJING : ___",
          options: ["Guk", "Gukguk", "Aum", "Aum-Aum"],
          correctIndex: 1
        },
        {
          question: "BUKU : MEMBACA = PENSIL : ___",
          options: ["Menulis", "Menggambar", "Menghapus", "Memotong"],
          correctIndex: 0
        },
        {
          question: "PADI : BERAS = JAGUNG : ___",
          options: ["Pipilan", "Biji", "Tongkol", "Jagung Manis"],
          correctIndex: 0
        },
        {
          question: "KERTAS : ORIGAMI = TANAH LIAT : ___",
          options: ["Patung", "Keramik", "Mosaik", "Lukisan"],
          correctIndex: 1
        },
        {
          question: "MATAHARI : BUMI = BULAN : ___",
          options: ["Mars", "Bintang", "Satelit", "Planet"],
          correctIndex: 2
        },
        {
          question: "HUTAN : KAYU = TAMBANG : ___",
          options: ["Batu", "Logam", "Mineral", "Emas"],
          correctIndex: 2
        },
        {
          question: "JANTUNG : DARAH = PARU-PARU : ___",
          options: ["Udara", "Oksigen", "Karbon Dioksida", "Napas"],
          correctIndex: 0
        },
        {
          question: "KUCING : GARONG = TIKUS : ___",
          options: ["Peliharaan", "Hama", "Pencuri", "Pemakan Keju"],
          correctIndex: 1
        },
        {
          question: "BUNGA : MADU = BUAH : ___",
          options: ["Selai", "Manis", "Nektar", "Sirup"],
          correctIndex: 0
        },
        {
          question: "API : ASAP = AIR : ___",
          options: ["Uap", "Embun", "Hujan", "Es"],
          correctIndex: 0
        },
        {
          question: "BUKU : PENULIS = LAGU : ___",
          options: ["Penyanyi", "Pencipta", "Musik", "Lirik"],
          correctIndex: 1
        },
        {
          question: "POHON : DAUN = BUNGA : ___",
          options: ["Kelopak", "Mahkota", "Putik", "Benang Sari"],
          correctIndex: 0
        },
        {
          question: "MATA : MELIHAT = TELINGA : ___",
          options: ["Mendengar", "Menyimak", "Mendengarkan", "Memperhatikan"],
          correctIndex: 0
        },
        {
          question: "DEMOKRASI : RAKYAT = MONARKI : ___",
          options: ["Raja", "Kerajaan", "Tahta", "Dinasti"],
          correctIndex: 0
        },
        {
          question: "VIRUS : PANDEMI = GEMPA : ___",
          options: ["Tsunami", "Bencana", "Patahan", "Getaran"],
          correctIndex: 1
        },
        {
          question: "PEMERINTAH : PERPU = ___",
          options: ["Buruh : Demokrasi", "Makan : Kenyang", "Mpr : Uu", "Hakim : Jaksa", "Menteri : Kepres"],
          correctIndex: 2
        },
        {
          question: "OTONOMI : MANDIRI = ___",
          options: ["Hardisk : Vga Card", "Sabun : Mandi", "Cerdas : Banyak Akal", "Bensin : Mesin", "Rakyat : Masyarakat"],
          correctIndex: 2
        },
        {
          question: "GURU : MURID = ___ : ___",
          options: ["Mengaji ; Uztad", "Bapak : Ibu", "Orang Tua : Anak", "Arsitek : Taman", "Dokter : Pasien"],
          correctIndex: 4
        },
        {
          question: "HEWAN : ___ = MAKANAN : SATE ___",
          options: ["Lapar", "Air", "Waktu Makan", "Kenyang", "Kambing"],
          correctIndex: 4
        },
        {
          question: "HARI : MINGGU : BULAN = ___ : ___",
          options: ["Guru : Kelas : Murid", "Rokok : Asap : Mengepul", "Detik : Menit : Jam", "Birokrat : Birokrasi : Karir", "Senin : Selasa : Rabu"],
          correctIndex: 2
        },
        {
          question: "KAYU : ___ = BERAS : NASI GORENG ___",
          options: ["Kursi Tamu", "Pasak", "Gelondongan", "Papan", "Tripleks"],
          correctIndex: 0
        },
        {
          question: "BUTA : WARNA = TULI : ___",
          options: ["Telinga", "Nada", "Kata", "Mendengar", "Pendengar"],
          correctIndex: 1
        },
        {
          question: "KHAYALAN : DONGENG = PERISTIWA : ___",
          options: ["Rekaan", "Dugaan", "Palsu", "Fakta", "Estimasi"],
          correctIndex: 3
        },
        {
          question: "ROKOK : ASBAK = AIR : ___",
          options: ["Pancur", "Selokan", "Ember", "Selang", "Keran"],
          correctIndex: 2
        },
        {
          question: "1 MINGGU : 7 HARI = 1 HARI : ___",
          options: ["3.600 Menit", "60 Deti", "68.400 Detik", "1.440 Menit", "365 Hari"],
          correctIndex: 3
        },
        {
          question: "GUNDUL : RAMBUT = ___",
          options: ["Kepala : Botak", "Rambut : Cukur", "Bugil : Pakaian", "Basah : Pakaian", "Gundul : Kepala"],
          correctIndex: 2
        },
        {
          question: "KITA : SAYA = ___ : ___",
          options: ["Beliau : Kami", "Kami : Kamu", "Kalian : Beliau", "Mereka : Dia", "Dia : Kalian"],
          correctIndex: 3
        },
        {
          question: "JATUH : SAKIT = MENGANTUK : ___",
          options: ["Berjalan", "Tidur", "Kalori", "Teriakan", "Tersenyum"],
          correctIndex: 1
        },
        {
          question: "TINGGI : DALAM = AWAN : ___",
          options: ["Matahari", "Batu-Batuan", "Pohon", "Minyak Tanah", "Tiang Listrik"],
          correctIndex: 3
        },
        {
          question: "DRAMA : BABAK = TINJU : ___",
          options: ["Episode", "Ronde", "Lakon", "Sandirawara", "Adegan"],
          correctIndex: 1
        },
        {
          question: "ES : DINGIN = ___",
          options: ["Udara : Panas", "Matahari : Panas", "Utara : Selatan", "Langit : Bumi", "Darat : Laut"],
          correctIndex: 1
        },
        {
          question: "MIKROSKOP : BAKTERIOLOGI = SARUNG TANGAN : ___",
          options: ["Peneliti", "Apoteker", "Dokter", "Petinju", "Analisis"],
          correctIndex: 3
        },
        {
          question: "PRODUKSI : USAHA = PRESTASI : ___",
          options: ["Harga", "Penawaran", "Hasil", "Penjualan", "Prestasi"],
          correctIndex: 2
        },
        {
          question: "JANTUNG : ___ = OTAK : MEMIKIR ___",
          options: ["Pompa", "Syarat", "Kepala", "Sentra", "Kecerdasan"],
          correctIndex: 0
        },
        {
          question: "ITALIA : EURO = ___ : ___",
          options: ["Brunai Darussalam : Sultan", "Turki : Ankara", "Jerman : Dutch", "Inggris : Irlandia", "Argentina : Person"],
          correctIndex: 4
        },
        {
          question: "GEMBIRA : SEANG = ___ : ___",
          options: ["Taktik : Peran", "Kepemimpinan : Metode", "Pemikiran : Ide", "Panggung : Penonton", "Manajemen : Keuangan"],
          correctIndex: 2
        },
        {
          question: "BALET : PENARI = OPERA : ___",
          options: ["Penyanyi", "Seni", "Pesenam", "Koreografi", "Artis"],
          correctIndex: 0
        },
        {
          question: "RENCANA : PELAKSANAAN = ___",
          options: ["Kaki : Berjalan", "Tahap : Tingkat", "Kereta : Listrik", "Planning : Implementasi", "Jalan : Mobil"],
          correctIndex: 3
        },
        {
          question: "CAIR : ENCER = ___",
          options: ["Kosong : Hampa", "Siang : Malam", "Penuh : Sesak", "Rinut : Sorak", "Ubi : Akar"],
          correctIndex: 0
        },
        {
          question: "API : BAKAR : PANAS = ___ : ___ : ___",
          options: ["Api : Lembab : Dingin", "Es : Beku : Dingin", "Udara : Segar : Hangat", "Kayu : Keras : Panjang", "Besi : Panas : Memuai"],
          correctIndex: 1
        },
        {
          question: "MATA : TELINGA = LIDAH : ___",
          options: ["Tangan", "Paha", "Siku", "Hidung", "Dada"],
          correctIndex: 3
        },
        {
          question: "SUARA : GAMBAR : FILM = ___ : ___ : ___",
          options: ["Kertas : Tulisan : Buku", "Sepakbola : Lapangan :Wasit", "Tulis : Catat : Ketik", "Kertas : Komputer : Printer", "Bola : Sepatu : Raket"],
          correctIndex: 0
        },
        {
          question: "KAHAYAN : SUNGAI : KALIMANTAN TENGAH = ___ : ___ : ___",
          options: ["Kerinci : Danai : Jambi", "Senggi : Pantai : Bali", "Merapi : Gunung : Palembang", "Agung : Gunung, Jawa Timur", "Batur : Danau : Lombok"],
          correctIndex: 0
        },
        {
          question: "JENDELA : TIRAI = ___ : ___",
          options: ["Hati : Sedih", "Hidung : Kuping", "Mata : Kelompak Mata", "Sampul : Buku", "Tangan : Jam"],
          correctIndex: 2
        },
        {
          question: "CIUM : HIDUNG = ___ : ___",
          options: ["Panas : Keringat", "Lihat : Mata", "Dahaga : Haus", "Kaki : Sepatu", "Raba : Rambut"],
          correctIndex: 1
        },
        {
          question: "DINIHARI : SENJA = ___ : ___",
          options: ["Sepatu : Tas", "Menit : Detik", "Barat : Selatan", "Siang : Malam", "Kakek : Anak"],
          correctIndex: 3
        },
        {
          question: "PENA : TINTA : KERTAS = ___ : ___ : ___",
          options: ["Kuras : Palet : Kanvas", "Kuas : Cat : Dinding", "Mobil : Bensin : Jalan", "Kapur : Penghapus : Papan Tulis", "Cat : Kaleng : Rumah"],
          correctIndex: 1
        },
        {
          question: "HUKUM : HAKIM = ___ : ___",
          options: ["Ulama : Masjid", "Sering : Kadang Kala", "Keamanan : Polisi", "Air : Irigasi", "Siswa : Murid"],
          correctIndex: 2
        },
        {
          question: "BEROBAT : SEMBUH = TEMBAK : ___",
          options: ["Bunuh", "Mati", "Hutang", "Api", "Bahaya"],
          correctIndex: 1
        },
        {
          question: "RAMALAN : ASTROLOGI = PENYAKIT : ___",
          options: ["Psikologi", "Kardiologi", "Teologi", "Patologi", "Bakteriologi"],
          correctIndex: 3
        },
        {
          question: "KAYU : POHON = EMAS : ___",
          options: ["Mahal", "Logam", "Perhiasan", "Cincin", "Perak"],
          correctIndex: 2
        },
        {
          question: "PUSKESMAS : SEHAT = ___ : ___",
          options: ["Masjid : Ibadah", "Karyawan : Gaji", "Sekolah : Pandai", "Sakit : Dokter", "Yoga : Sembuh"],
          correctIndex: 2
        },
        {
          question: "KAMERA : ___ = MANUSIA : MATA ___",
          options: ["Lensa", "Lidah", "Nyamuk", "Otak", "Mulut"],
          correctIndex: 0
        },
        {
          question: "SUSU : HEWAN = ___ : ___",
          options: ["Cat : Tembok", "Bola : Piring", "Kaca : Jendela", "Buah : Pohon", "Gelas : Teko"],
          correctIndex: 3
        },
        {
          question: "KAMBING : RUMPUT = ___ : ___",
          options: ["Ayam : Jagung", "Rumah : Orang", "Kelapa : Nyiur", "Ular : Singa", "Neraka :Setan"],
          correctIndex: 0
        },
        {
          question: "KAPAL : BURITAN = BURUNG : ___",
          options: ["Bulu", "Tulang", "Ekor", "Dahan", "Sayap"],
          correctIndex: 2
        },
        {
          question: "PISTOL : ___ = PULPEN : TULIS ___",
          options: ["Tembak", "Pukul", "Tajam", "Tutup", "Sayat"],
          correctIndex: 0
        },
        {
          question: "MERAH PUTIH : INDONESIA = ___ : ___",
          options: ["Merah Hitam : Jepang", "Posisi : Positif", "Putih Merah : Portugis", "Hitam Merah Kuning : Jerman", "Biru : Thailand"],
          correctIndex: 3
        },
        {
          question: "BERAS : NASI : MAKAN = ___",
          options: ["Tembakau : Cerutu : Isap", "Penulis : Buku : Baca", "Koran : Majalah : Buletin", "Kulit : Sepatu : Kaki", "Bensin : Mesin : Mobil"],
          correctIndex: 0
        },
        {
          question: "AIR : UAP = ___",
          options: ["Membeku : Menguap", "Es : Air", "Mendidih : Mencair", "Uap : Beku", "Kabut : Asap"],
          correctIndex: 1
        },
        {
          question: "KURSI : ROTAN = PINTU : ___",
          options: ["Kayu", "Atap", "Dinding", "Pohon", "Bangku"],
          correctIndex: 0
        },
        {
          question: "MAKANAN : LAPAR = . ___ : ___",
          options: ["Air : Haus", "Minyak : Api", "Gelap : Lampu", "Rumput : Kambing", "Angin : Panas"],
          correctIndex: 0
        },
        {
          question: "DIAMETER : LINGKARAN = DIAGONAL : ___",
          options: ["Segiempat", "Segitiga", "Kerucut", "Bola", "Panjang"],
          correctIndex: 0
        },
        {
          question: "TARIK : JAUH = ___ : ___",
          options: ["Asah : Tajam", "Cuci : Kotor", "Lempar : Terbang", "Siram : Basah", "Tolak : Jauh"],
          correctIndex: 1
        },
        {
          question: "SAKIT : DOKTER = ___",
          options: ["Patah : Tumbuh", "Album : Foto", "Lantai : Licin", "Rusak : Montir", "Maju : Mundur"],
          correctIndex: 3
        },
        {
          question: "MOBIL : BENSIN = PELARI : ___",
          options: ["Makanan", "Sepatu", "Kaos", "Lintasan"],
          correctIndex: 0
        },
        {
          question: "DINGIN : SELIMUT = HUJAN : ___",
          options: ["Air", "Payung", "Dingin", "Basah"],
          correctIndex: 1
        },
        {
          question: "SEMIR : SEPATU = SIKAT : ___",
          options: ["Kuku", "Rambut", "Televisi", "Gigi"],
          correctIndex: 3
        },
        {
          question: "KEPALA : PUSING = PERUT : ___",
          options: ["Batuk", "Pilek", "Mules", "Gemuk"],
          correctIndex: 2
        },
        {
          question: "BUGIL : PAKAIAN = GUNDUL : ___",
          options: ["Botak", "Kepala", "Cukur", "Rambut"],
          correctIndex: 3
        },
        {
          question: "KAYU : POHON = EMAS : ___",
          options: ["Tambang", "Perhiasan", "Mahal", "Logam"],
          correctIndex: 0
        },
        {
          question: "SAYA : KAMI = DIA : ___",
          options: ["Kamu", "Mereka", "Anda", "Kita"],
          correctIndex: 1
        },
        {
          question: "KUMIS : KUCING = BELALAI : ___",
          options: ["Ular", "Harimau", "Gajah", "Hidung"],
          correctIndex: 2
        },
        {
          question: "REGULER : SENIN = KARYAWAN : ___",
          options: ["Selasa", "Rabu", "Minggu", "Jumat"],
          correctIndex: 2
        },
        {
          question: "BUSUR : PANAH = SENAPAN : ___",
          options: ["Peluru", "Senjata", "Berbahaya", "Tembakan"],
          correctIndex: 0
        },
        {
          question: "AYAH : ANAK = POHON : ___",
          options: ["Daun", "Tunas", "Ranting", "Akar"],
          correctIndex: 1
        },
        {
          question: "ES : DINGIN = GULA : ___",
          options: ["Bubuk", "Kristal", "Tebu", "Manis"],
          correctIndex: 3
        },
        {
          question: "PINTAR : BELAJAR = BODOH : ___",
          options: ["Cerdas", "Rajin", "Dosen", "Malas"],
          correctIndex: 3
        },
        {
          question: "TERBANG : BURUNG = JALAN : ___",
          options: ["Jauh", "Singa", "Lebah", "Kupu-Kupu"],
          correctIndex: 1
        },
        {
          question: "MOBIL : RODA = RUMAH : ___",
          options: ["Pondasi", "Tanah", "Jendela", "Atap"],
          correctIndex: 0
        },
        {
          question: "BULAN : BUMI = YUPITER : ___",
          options: ["Venus", "Orbit", "Matahari", "Bulan"],
          correctIndex: 2
        },
        {
          question: "FEBRUARI : APRIL = MEI : ___",
          options: ["Juli", "Agustus", "September", "Oktober"],
          correctIndex: 0
        },
        {
          question: "EKSPOR : PERGI = IMPOR : ___",
          options: ["Luar", "Dagang", "Masuk", "Asing"],
          correctIndex: 2
        },
        {
          question: "MOBIL : BENSIN = PERAHU : ___",
          options: ["Laut", "Angin", "Ombak", "Kayu"],
          correctIndex: 1
        },
        {
          question: "MIKROSKOP : MIKROBA = TELESKOP : ___",
          options: ["Bakteri", "Bioskop", "Teropong", "Bintang"],
          correctIndex: 3
        },
        {
          question: "BAJU : KANCING = PINTU : ___",
          options: ["Kayu", "Besi", "Kayu", "Kunci"],
          correctIndex: 3
        },
        {
          question: "JAM : MENIT = MENIT : ___",
          options: ["Waktu", "Jam", "Detik", "Hari"],
          correctIndex: 2
        },
        {
          question: "OBAT : APOTIK = PAKAIAN : ___",
          options: ["Butik", "Binatu", "Baju", "Celana"],
          correctIndex: 0
        },
        {
          question: "SENDOK : MAKAN = SILET : ___",
          options: ["Tajam", "Potong", "Bahaya", "Hitam"],
          correctIndex: 1
        },
        {
          question: "DATA : DISKET = UANG : ___",
          options: ["Kaya", "Bank", "Duit", "Logam"],
          correctIndex: 1
        },
        {
          question: "SIANG : MATAHARI = MALAM : ___",
          options: ["Bintang", "Gelap", "Bulan", "Awan"],
          correctIndex: 2
        },
        {
          question: "HAUS : MINUMAN = TERANG : ___",
          options: ["Gelap", "Putih", "Benderang", "Lampu"],
          correctIndex: 3
        },
        {
          question: "MAHKOTA : RAJA = HELM : ___",
          options: ["Plastik", "Peragawan", "Ratu", "Pilot"],
          correctIndex: 3
        },
        {
          question: "ROKOK : ASBAK = AIR : ___",
          options: ["Selokan", "Ember", "Selang", "Keran"],
          correctIndex: 0
        },
        {
          question: "AIR : HAUS = NASI : ___",
          options: ["Goreng", "Lapar", "Beras", "Rames"],
          correctIndex: 1
        },
        {
          question: "KOMPUTER : LISTRIK = MOBIL : ___",
          options: ["Roda", "Mesin", "Bensin", "Onderdil"],
          correctIndex: 2
        },
        {
          question: "SEPATU : KAKI = TOPI : ___",
          options: ["Tangan", "Kaki", "Bulat", "Kepala"],
          correctIndex: 3
        },
        {
          question: "TELEPON : PULSA = PERTUNJUKAN : ___",
          options: ["Uang", "Bioskop", "Harga", "Karcis"],
          correctIndex: 3
        },
        {
          question: "ANTING : TELINGA = GELANG : ___",
          options: ["Leher", "Emas", "Tangan", "Jari"],
          correctIndex: 2
        },
        {
          question: "BEO : SUARA = SAPI : ___",
          options: ["Bulu", "Daging", "Suara", "Warna"],
          correctIndex: 1
        },
        {
          question: "LEBAH : MADU = CENDRAWASIH : ___",
          options: ["Bulu", "Burung", "Daging", "Suara"],
          correctIndex: 0
        },
        {
          question: "BERSIH : KOTOR = TINGGI : ___",
          options: ["Rendah", "Jangkung", "Jauh", "Dekat"],
          correctIndex: 0
        },
        {
          question: "NASI : BERAS = TAPE : ___",
          options: ["Nanas", "Ubi", "Pisang", "Gandum"],
          correctIndex: 1
        },
        {
          question: "TAMBANG : EMAS = LAUT : ___",
          options: ["Badai", "Kapal", "Nelayan", "Karang"],
          correctIndex: 3
        },
        {
          question: "ANJING : BINATANG = APEL : ___",
          options: ["Vitamin", "Merah", "Buah", "Segar"],
          correctIndex: 2
        },
        {
          question: "PERUSAHAAN : KARYAWAN = SEKOLAH : ___",
          options: ["Pengawas", "Pelajar", "Ujian", "Kelas"],
          correctIndex: 1
        },
        {
          question: "TELEVISI : GAMBAR = RADIO : ___",
          options: ["Listrik B.Penyiar", "Suara", "Merdu"],
          correctIndex: 2
        },
        {
          question: "TELEPON : KOMUNIKASI = SEPEDA : ___",
          options: ["Roda", "Lomba", "Cepat", "Transportasi"],
          correctIndex: 3
        },
        {
          question: "KERTAS : PENA = DINDING : ___",
          options: ["Kuas", "Dempul", "Amplas", "Cat"],
          correctIndex: 0
        },
        {
          question: "FILM : OSCAR = BULUTANGKIS = ___",
          options: ["Olahraga", "Cina", "Piala", "Sudirman"],
          correctIndex: 3
        },
        {
          question: "LAPAR : MAKAN = GATAL : ___",
          options: ["Bentol", "Semut", "Garuk", "Luka"],
          correctIndex: 2
        },
        {
          question: "DATANG : PERGI = AKHIR : ___",
          options: ["Awal", "Kemudian", "Setelah", "Zaman"],
          correctIndex: 0
        },
        {
          question: "SUTRA : ULAT = MADU : ___",
          options: ["Manis", "Lebah", "Hutan", "Bunga"],
          correctIndex: 1
        },
        {
          question: "DARAT : MOBIL = UDARA : ___",
          options: ["Angin", "Terbang", "Perahu", "Pesawat Terbang"],
          correctIndex: 3
        },
        {
          question: "PISANG : BUAH = SAPI : ___",
          options: ["Banteng", "Gemuk", "Binatang", "Kulit"],
          correctIndex: 2
        },
        {
          question: "LEBAH : MADU = CENDRAWASIH : ___",
          options: ["Bulu ", "Burung ", "Daging ", "Suara"],
          correctIndex: 0
        },
        {
          question: "MOBIL : BENSIN = PELARI : ___",
          options: ["Makanan ", "Sepatu ", "Kaos ", "Lintasan"],
          correctIndex: 0
        },
        {
          question: "DATANG : PERGI = AKHIR : ___",
          options: ["Awal ", "Kemudian ", "Setelah ", "Zaman"],
          correctIndex: 0
        },
        {
          question: "SEMIR : SEPATU = SIKAT : ___",
          options: ["Kuku ", "Rambut ", "Televisi ", "Gigi"],
          correctIndex: 3
        },
        {
          question: "EKSPOR : PERGI = IMPOR : ___",
          options: ["Luar ", "Dagang ", "Masuk ", "Asing"],
          correctIndex: 2
        },
        {
          question: "PISANG : BUAH = SAPI : ___",
          options: ["Banteng ", "Gemuk ", "Binatang ", "Kulit"],
          correctIndex: 2
        },
        {
          question: "KAYU : POHON = EMAS : ___",
          options: ["Tambang ", "Perhiasan ", "Mahal ", "Logam"],
          correctIndex: 0
        },
        {
          question: "MAHKOTA : RAJA = HELM : ___",
          options: ["Plastik ", "Peragawan ", "Ratu ", "Pilot"],
          correctIndex: 3
        },
        {
          question: "PINTAR : BELAJAR = BODOH : ___",
          options: ["Cerdas ", "Rajin ", "Dosen ", "Malas"],
          correctIndex: 3
        },
        {
          question: "REGULER : SENIN = KARYAWAN : ___",
          options: ["Selasa ", "Rabu ", "Minggu ", "Jumat"],
          correctIndex: 2
        },
        {
          question: "HIJAU : ___ = ___ : LAUT ___",
          options: ["Daun —Asin", "Hutan — Kapal", "Rumput — Pantai", "Lumut— Ikan", "Klorofil — Ombak"],
          correctIndex: 0
        },
        {
          question: "AIR : ___ = ___ : HAMPA ___",
          options: ["Es — Kosong", "Dingin — Pengap", "Tetesan — Vakum", "Sungai — Ruang", "Kering — Udara"],
          correctIndex: 4
        },
        {
          question: "PRODUKSI : ___ = PERJALANAN : ___",
          options: ["Produk — Tujuan", "Pekerja — Kecepatan", "Upah — Pulang", "Pabrik — Arah", "Mesin — Kendaraan"],
          correctIndex: 0
        },
        {
          question: "GERAKAN : ___ = KOTORAN : ___",
          options: ["Bergetar— Berbau", "Dinamis — Limbah", "Perpindahan — Pupuk", "Diam — Sapu", "Putaran — Tercemar"],
          correctIndex: 2
        },
        {
          question: "MARAH : ___ = ___ : MENANGIS ___",
          options: ["Mencaci — Sedih", "Kecewa — Sakit", "Teriak — Senang", "Cemberut — Murka", "Mengeluh — Takut"],
          correctIndex: 0
        },
        {
          question: "___ : IJAZAH = KELAHIRAN : ___",
          options: ["Ujian — Bidan", "Kelulusan — Akta", "Siswa — Bayi", "Tamat — Nama", "Kuliah — Dokter"],
          correctIndex: 1
        },
        {
          question: "HURUF : KATA : CERITA = ___ : ___ : ___",
          options: ["Luar Angkasa : Astronomi : Fosil", "Padi : Karung : Lumbung", "Jarang : Sering : Galaksi", "Bintang : Galaksi : Alam Semesta", "Saya : Kita : Mereka"],
          correctIndex: 3
        },
        {
          question: "API : BAKAR : PANAS = ___ : ___ : ___",
          options: ["Kayu : Keras : Panjang", "Es : Beku : Dingin", "Besi : Panas : Memuai", "Udara : Segar : Hangat", "Air : Lembab : Dingin"],
          correctIndex: 4
        },
        {
          question: "IKAN : INSANG : LAUT = ___ : ___ : ___",
          options: ["Teh : Susu : Minuman", "Anak-Anak : Tua : Vitamin", "Manusia : Paru-Paru : Darat", "Mobil : Bensin : Parkir", "Kanak-Kanak : Ibu : Ayah"],
          correctIndex: 2
        },
        {
          question: "TUKANG : GERGAJI : PALU = ___ : ___ : ___",
          options: ["Guru : Kapur : Topi", "Penari : Topi : Selendang", "Montir : Obeng : Tang", "Penulis : Kuas : Cat", "Tukang : Obat : Stetoskop"],
          correctIndex: 2
        },
        {
          question: "SEMINAR : SARJANA = ___",
          options: ["Akademi : Taruna", "Rumah Sakit : Pasien", "Ruang Pengadilan : Saksi", "Kenservator : Seniman", "Perpustakaan : Peneliti"],
          correctIndex: 4
        },
        {
          question: "FIKTIF : FAKTA = ___",
          options: ["Dagelan : Sandiwara", "Dongeng : Peristiwa", "Dugaan : Rekaan", "Data : Estimasi", "Rencana : Projeksi"],
          correctIndex: 1
        },
        {
          question: "MATA : TELINGA = ___",
          options: ["Jari : Tangan", "Lidah : Hidung", "Kaki : Paha", "Lutut : Siku", "Perut : Dada"],
          correctIndex: 1
        },
        {
          question: "UANG : PUNDI-PUNDI = ___",
          options: ["Hubungan : Jambangan", "Gelas : Nampan", "Air : Tempayan", "Buku : Percetakan", "Rokok : Asbak"],
          correctIndex: 2
        },
        {
          question: "POHON : BUAH = ___",
          options: ["Domba : Daging", "Sapi : Susu", "Telur : Ayam", "Jentik : Nyamuk", "Setam : Sapit"],
          correctIndex: 1
        },
        {
          question: "SENAPAN : BERBURU = ___",
          options: ["Kapal : Berlabuh", "Kereta : Langsir", "Pancing : Ikan", "Perangkap : Menangkap", "Parang : Mengasah"],
          correctIndex: 3
        },
        {
          question: "BATA : TANAH LIAT = ___",
          options: ["Batu : Pasir", "Tembikar : Keramik", "Bunga : Buah", "Beton : Semen", "Kertas : Buku"],
          correctIndex: 3
        },
        {
          question: "PANAS : API = ___",
          options: ["Hujan : Awan", "Abu : Arang", "Terang : Matahari", "Hangat : Listrik", "Dingin : Beku"],
          correctIndex: 2
        },
        {
          question: "KULIT : SISIK = ___",
          options: ["Tegel : Lantai", "Rumah : Kamar", "Keramik : Mozaik", "Dinding : Cat", "Atap : Genteng"],
          correctIndex: 4
        },
        {
          question: "METEOROLOGI : CUACA = ___",
          options: ["Astronomi : Fisika", "Gerontology : Keturunan", "Pedagogik : Sekolah", "Patologi : Penyakit", "Antropologi : Fosil"],
          correctIndex: 3
        },
        {
          question: "LAPAR : NASI = ___",
          options: ["Haus : Air", "Mual : Obat", "Mengantuk : Melamun", "Bosan : Tidur", "Membaca : Gambar"],
          correctIndex: 0
        },
        {
          question: "KEPALA : HELM = ___",
          options: ["Sabut : Kelapa", "Rumah : Atap", "Jari : Cincin", "Album : Foto", "Kaki : Kaus"],
          correctIndex: 1
        },
        {
          question: "TUNTUTAN : SANTUNAN = ___",
          options: ["Undian : Hadiah", "Permintaan : Pemberian", "Persediaan : Penawaran", "Rusak : Ganti Rugi", "Tabungan : Pembelanjaan"],
          correctIndex: 1
        },
        {
          question: "RAMBUT : GUNDUL = ___",
          options: ["Bulu : Cabut", "Mobil : Mogok", "Botak : Kepala", "Pakaian : Bugil", "Lantai : Licin"],
          correctIndex: 3
        },
        {
          question: "DIAMETER : LINGKARAN = ___",
          options: ["Diagonal : Segi Empat", "Luas : Panjang", "Tinggi : Segi Tiga", "Sudut : Tegak Lurus", "Radius : Busur"],
          correctIndex: 0
        },
        {
          question: "ES : AIR = AIR : ___",
          options: ["Mendidih", "Membeku", "Uap", "Cair", "Kabut"],
          correctIndex: 2
        },
        {
          question: "SARUNG TANGAN : PETINJU = ___",
          options: ["Apoteker", "Bakterilog", "Optamolog", "Dokter", "Analis"],
          correctIndex: 1
        },
        {
          question: "PEDAS : CABAI = MANIS : ___",
          options: ["Gadis", "Manisan", "The Botol", "Sakarin", "Kecap"],
          correctIndex: 3
        },
        {
          question: "PEDATI : KUDA = PESAWAT TERBANG : ___",
          options: ["Sayap", "Baling-Baling", "Pramugari", "Pilot", "Landasan"],
          correctIndex: 1
        },
        {
          question: "ANTISEPTIK : KUMAN = ___",
          options: ["Peluru", "Sirkus", "Menerkam", "Rusa", "Binatang"],
          correctIndex: 3
        },
        {
          question: "BERAS : NASI GORENG = KAYU : ___",
          options: ["Pasak", "Kursi Tamu", "Gelondongan", "Papan", "Tripleks"],
          correctIndex: 1
        },
        {
          question: "RAMALAN : ASTROLOGI = BANGSA : ___",
          options: ["Sosiologi", "Antropologi", "Demografi", "Psikologi", "Ethnologi"],
          correctIndex: 4
        },
        {
          question: "RAS : NEGRO = BENTUK : ___",
          options: ["Tinggi", "Hitam", "Oval", "Keriting", "Kekar"],
          correctIndex: 1
        },
        {
          question: "RUMPUT : LAPANGAN = ___",
          options: ["Nebula", "Langit", "Angkasa", "Malam", "Antariksa"],
          correctIndex: 1
        },
        {
          question: "LAMPU : GELAP = MAKANAN : ___",
          options: ["Kenyang", "Penuh", "Gizi", "Mulas", "Lapar"],
          correctIndex: 4
        },
        {
          question: "ES : AIR = AIR : ___",
          options: ["Mendidih", "Membeku", "Uap", "Cair", "Kabut"],
          correctIndex: 2
        },
        {
          question: "RAMALAN : ASTROLOGI ___ BANGSA : ___",
          options: ["Sosiologi", "Antropologi", "Demografi", "Psikologi", "Ethnologi"],
          correctIndex: 4
        },
        {
          question: "ANTISEPTIK : KUMAN = ___",
          options: ["Peluru", "Sirkus", "Menerkam", "Rusa", "Binatang"],
          correctIndex: 3
        },
        {
          question: "SENAPAN : BERBURU = ___",
          options: ["Kapal : Berlabuh", "Kereta : Langsir", "Pancing : Ikan", "Perangkap : Menangkap", "Parang : Mengasah"],
          correctIndex: 3
        },
        {
          question: "TUNTUTAN : SANTUNAN = ___",
          options: ["Undian : Hadiah", "Permintaan : Pemberian", "Persediaan : Penawaran", "Rusak : Ganti Rugi", "Tabungan : Pembelanjaan"],
          correctIndex: 1
        },
        {
          question: "RAS : NEGRO = BENTUK : ___",
          options: ["Tinggi", "Hitam", "Oval", "Keriting", "Kekar"],
          correctIndex: 1
        },
        {
          question: "DIAMETER : LINGKARAN = ___",
          options: ["Diagonal : Segi Empat", "Luas : Panjang", "Tinggi : Segi Tiga", "Sudut : Tegak Lurus", "Radius : Busur"],
          correctIndex: 0
        },
        {
          question: "LAPAR : NASI = ___",
          options: ["Haus : Air", "Mual : Obat", "Mengantuk : Melamun", "Bosan : Tidur", "Membaca : Gambar"],
          correctIndex: 0
        },
        {
          question: "KULIT : SISIK = ___",
          options: ["Tegel : Lantai", "Rumah : Kamar", "Keramik : Mozaik", "Dinding : Cat", "Atap : Genteng"],
          correctIndex: 4
        },
        {
          question: "PEDATI : KUDA = PESAWAT TERBANG : ___",
          options: ["Sayap", "Baling-Baling", "Pramugari", "Pilot", "Landasan"],
          correctIndex: 1
        },
        {
          question: "METEOROLOGI : CUACA = ___",
          options: ["Astronomi : Fisika", "Gerontology : Keturunan", "Pedagogik : Sekolah", "Patologi : Penyakit", "Antropologi : Fosil"],
          correctIndex: 3
        },
        {
          question: "BERAS : NASI GORENG = KAYU ___",
          options: ["Pasak", "Kursi Tamu", "Gelondongan", "Papan", "Tripleks"],
          correctIndex: 1
        },
        {
          question: "PEDAS : CABAI = MANIS : ___",
          options: ["Gadis", "Manisan", "The Botol", "Sakarin", "Kecap"],
          correctIndex: 3
        },
        {
          question: "MATA : TELINGA = ___",
          options: ["Jari : Tangan", "Lidah : Hidung", "Kaki : Paha", "Lutut : Siku", "Perut : Dada"],
          correctIndex: 1
        },
        {
          question: "SARUNG TANGAN : PETINJU = ___",
          options: ["Apoteker", "Bakterilog", "Optamolog", "Dokter", "Analis"],
          correctIndex: 1
        },
        {
          question: "KAPAL : NAHKODA = PESAWAT : ___",
          options: ["Terbang", "Pilot", "Pramugari", "Navigator", "Udara"],
          correctIndex: 1
        },
        {
          question: "PENYELAM LAUT DALAM : TABUNG OKSIGEN = ___",
          options: ["Petani : Kerbau", "Perampok : Topeng Muka", "Penerjun Payung : Parasut", "Polisi : Mobil Patrol", "Burung : Sayap"],
          correctIndex: 2
        },
        {
          question: "GIGI : KUNYAH = JARI : ___",
          options: ["Lentik", "Pegang", "Kuku", "Tangan", "Manis"],
          correctIndex: 1
        },
        {
          question: "MELATI : BUNGA = BAWANG : ___",
          options: ["Umbi", "Merah", "Putih", "Bumbu", "Harum"],
          correctIndex: 0
        },
        {
          question: "MOBIL : GARASI = PESAWAT : ___",
          options: ["Bandara", "Landasan", "Stasiun", "Pelabuhan", "Hanggar"],
          correctIndex: 4
        },
        {
          question: "OPTIMISME : SEMANGAT = PESIMISME : ___",
          options: ["Kegagalan", "Kekecewaan", "Kebimbangan", "Keberanian", "Keputusasaan"],
          correctIndex: 4
        },
        {
          question: "WARTEG : NASI RAMES = ANGKRINGAN : ___",
          options: ["Nasi Liwet", "Nasi Gudeg", "Nasi Uduk", "Nasi Goreng", "Nasi Kucing"],
          correctIndex: 4
        },
        {
          question: "KOSONG : HAMPA = CAIR : ___",
          options: ["Kental", "Air", "Encer", "Basah", "Embun"],
          correctIndex: 2
        },
        {
          question: "MERAKIT : MEMBANGUN = PURNABAKTI : ___",
          options: ["Menikmati", "Mangkir", "Umur", "Pensiun", "Prakarya"],
          correctIndex: 3
        },
        {
          question: "ORANG BODOH : ILMU = ___",
          options: ["Orang Miskin : Derma", "Orang Mengemis : Lapar", "Orang Menganggur : Kerja", "Orang Bekerja : Gaji", "Orang Kaya : Harta"],
          correctIndex: 2
        },
        {
          question: "PETANI : CANGKUL = ___",
          options: ["Raja : Mahkota", "Nelayan : Jaring", "Dalang : Cerita", "Penjahit : Baju", "Wartawan : Berita"],
          correctIndex: 1
        },
        {
          question: "NELAYAN : LAUT = ___",
          options: ["Guru : Papan Tulis", "Petani : Padi", "Karyawan : Pegawai", "Pelukis : Kuas", "Penyanyi : Panggung"],
          correctIndex: 4
        },
        {
          question: "GIGI TARING : KARNIVORA = ___",
          options: ["Cakar : Binatang Buas ", "Tajam : Mata", "Sayap : Terbang", "Ekor : Binatang", "Paruh : Makan"],
          correctIndex: 2
        },
        {
          question: "SAMUDRA : LAUT = ___",
          options: ["Benua : Pulau", "Internasional : Batas Negara", "Kapal : Nelayan", "Negara : Pantai", "Luas : Dalam"],
          correctIndex: 0
        },
        {
          question: "PULAU : AIR = ___",
          options: ["Titik Tengah : Diagonal", "Segitiga : Garis Keliling", "Titik Tengah : Garis Tengah", "Titik Tengah : Garis Keliling", "Segi Empat : Lingkaran"],
          correctIndex: 3
        },
        {
          question: "HUTAN : POHON = ___",
          options: ["Armada : Kapal", "Pohon : Papan", "Mawar : Duri", "Kamera : Film", "Siang : Hari"],
          correctIndex: 0
        },
        {
          question: "PELUKIS : KUAS = ___",
          options: ["Burung : Sangkar", "Penyair : Pena", "Bensin : Mobil", "Lapar : Makan", "Lampu : Gelap"],
          correctIndex: 1
        },
        {
          question: "MATA : TELINGA = LIDAH : ___",
          options: ["Tangan", "Siku", "Hidung", "Dada", "Paha"],
          correctIndex: 2
        },
        {
          question: "BERANAK : MAMALIA = ___",
          options: ["Bertaring : Karnivora", "Bertelur : Unggas", "Berkelompok : Insekta", "Berjemur : Reptilia", "Berkaki Empat : Herbivora"],
          correctIndex: 1
        },
        {
          question: "GURU : SEKOLAH = ___",
          options: ["Penebang Pohon : Pabrik", "Musisi : Piano", "Pengacara : Panggung", "Penyanyi : Suara", "Petani : Ladang"],
          correctIndex: 4
        },
        {
          question: "TAMBANG : EMAS = LAUT : ___",
          options: ["Badai", "Kapal", "Nelayan", "Karang"],
          correctIndex: 3
        },
        {
          question: "DARAT : MOBIL = UDARA : ___",
          options: ["Angin", "Terbang", "Perahu", "Pesawat Terbang"],
          correctIndex: 3
        },
        {
          question: "LEBAH : MADU = CENDRAWASIH : ___",
          options: ["Bulu", "Burung", "Daging", "Suara"],
          correctIndex: 0
        },
        {
          question: "PINTAR : BELAJAR = BODOH : ___",
          options: ["Cerdas", "Rajin", "Dosen", "Malas"],
          correctIndex: 3
        },
        {
          question: "PISANG : BUAH = SAPI : ___",
          options: ["Banteng", "Gemuk", "Binatang", "Kulit"],
          correctIndex: 2
        },
        {
          question: "TERBANG : BURUNG = JALAN : ___",
          options: ["Jauh", "Singa", "Lebah", "Kupu:Kupu"],
          correctIndex: 1
        },
        {
          question: "REGULER : SENIN = KARYAWAN : ___",
          options: ["Selasa", "Rabu", "Minggu", "Jumat"],
          correctIndex: 2
        },
        {
          question: "MIKROSKOP : MIKROBA = TELESKOP : ___",
          options: ["Bakteri", "Bioskop", "Teropong", "Bintang"],
          correctIndex: 3
        },
        {
          question: "TELEVISI : GAMBAR = RADIO : ___",
          options: ["Listrik", "Penyiar", "Suara", "Merdu"],
          correctIndex: 2
        },
        {
          question: "NASI : BERAS = TAPE : ___",
          options: ["Nanas", "Singkong", "Pisang", "Gandum"],
          correctIndex: 1
        },
        {
          question: "TELEPON : KOMUNIKASI = SEPEDA : ___",
          options: ["Roda", "Lomba", "Cepat", "Transportasi"],
          correctIndex: 3
        },
        {
          question: "MAHKOTA : RAJA = HELM : ___",
          options: ["Plastik", "Peragawan", "Ratu", "Pembalap"],
          correctIndex: 3
        },
        {
          question: "BEO : SUARA = SAPI : ___",
          options: ["Bulu", "Daging", "Suara", "Warna"],
          correctIndex: 1
        },
        {
          question: "MOBIL : BENSIN = PELARI : ___",
          options: ["Makanan", "Sepatu", "Kaos", "Lintasan"],
          correctIndex: 0
        },
        {
          question: "SENDOK : MAKAN = SILET : ___",
          options: ["Tajam", "Potong", "Bahaya", "Hitam"],
          correctIndex: 1
        },
        {
          question: "HAUS : MINUMAN = TERANG : ___",
          options: ["Gelap", "Putih", "Benderang", "Lampu"],
          correctIndex: 3
        },
        {
          question: "PERUSAHAAN : KARYAWAN = SEKOLAH : ___",
          options: ["Pengawas", "Pelajar", "Ujian", "Kelas"],
          correctIndex: 1
        },
        {
          question: "KERTAS : PENA = DINDING : ___",
          options: ["Kuas", "Dempul", "Amplas", "Cat"],
          correctIndex: 0
        },
        {
          question: "OBAT : APOTIK = PAKAIAN : ___",
          options: ["Butik", "Binatu", "Baju", "Celana"],
          correctIndex: 0
        },
        {
          question: "KUMIS : KUCING = BELALAI : ___",
          options: ["Ular", "Harimau", "Gajah", "Hidung"],
          correctIndex: 2
        },
        {
          question: "DATA : DISKET = UANG : ___",
          options: ["Kaya", "Bank", "Duit", "Logam"],
          correctIndex: 1
        },
        {
          question: "MOBIL : BENSIN = PERAHU : ___",
          options: ["Laut", "Angin", "Ombak", "Kayu"],
          correctIndex: 1
        },
        {
          question: "SEMIR : SEPATU = SIKAT : ___",
          options: ["Kuku", "Rambut", "Televisi", "Gigi"],
          correctIndex: 3
        },
        {
          question: "SEPATU : KAKI = TOPI : ___",
          options: ["Tangan", "Kaki", "Bulat", "Kepala"],
          correctIndex: 3
        },
        {
          question: "LAPAR : MAKAN = GATAL : ___",
          options: ["Bentol", "Semut", "Garuk", "Luka"],
          correctIndex: 2
        },
        {
          question: "BAJU : KANCING = PINTU : ___",
          options: ["Kayu", "Besi", "Kayu", "Kunci"],
          correctIndex: 3
        },
        {
          question: "AIR : HAUS = NASI : ___",
          options: ["Goreng", "Lapar", "Beras", "Rames"],
          correctIndex: 1
        },
        {
          question: "SAYA : KAMI = DIA : ___",
          options: ["Kamu", "Mereka", "Anda", "Kita"],
          correctIndex: 1
        },
        {
          question: "TELEPON : PULSA = PERTUNJUKAN : ___",
          options: ["Uang", "Bioskop", "Harga", "Karcis"],
          correctIndex: 3
        },
        {
          question: "KEPALA : PUSING = PERUT : ___",
          options: ["Batuk", "Pilek", "Mules", "Gemuk"],
          correctIndex: 2
        },
        {
          question: "MOBIL : RODA = RUMAH : ___",
          options: ["Pondasi", "Tanah", "Jendela", "Atap"],
          correctIndex: 0
        },
        {
          question: "KAYU : POHON = EMAS : ___",
          options: ["Tambang", "Perhiasan", "Mahal", "Logam"],
          correctIndex: 0
        },
        {
          question: "BUGIL : PAKAIAN = GUNDUL : ___",
          options: ["Botak", "Kepala", "Cukur", "Rambut"],
          correctIndex: 3
        },
        {
          question: "FEBRUARI : APRIL = MEI : ___",
          options: ["Juli", "Agustus", "September", "Oktober"],
          correctIndex: 0
        },
        {
          question: "BUSUR : PANAH = SENAPAN : ___",
          options: ["Peluru", "Senjata", "Berbahaya", "Tembakan"],
          correctIndex: 0
        },
        {
          question: "ROKOK : ASBAK = AIR : ___",
          options: ["Selokan", "Ember", "Selang", "Keran"],
          correctIndex: 0
        },
        {
          question: "ANTING : TELINGA = GELANG : ___",
          options: ["Leher", "Emas", "Tangan", "Jari"],
          correctIndex: 2
        },
        {
          question: "DATANG : PERGI = AKHIR : ___",
          options: ["Awal", "Kemudian", "Setelah", "Zaman"],
          correctIndex: 0
        },
        {
          question: "KOMPUTER : LISTRIK = MOBIL : ___",
          options: ["Roda", "Mesin", "Bensin", "Onderdil"],
          correctIndex: 2
        },
        {
          question: "JAM : MENIT = MENIT : ___",
          options: ["Waktu", "Jam", "Detik", "Hari"],
          correctIndex: 2
        },
        {
          question: "FILM : OSCAR = BULUTANGKIS = ___",
          options: ["Olahraga", "Cina", "Piala", "Sudirman"],
          correctIndex: 3
        },
        {
          question: "SIANG : MATAHARI = MALAM : ___",
          options: ["Bintang", "Gelap", "Bulan", "Awan"],
          correctIndex: 2
        },
        {
          question: "ES : DINGIN = GULA : ___",
          options: ["Bubuk", "Kristal", "Tebu", "Manis"],
          correctIndex: 3
        },
        {
          question: "SUTRA : ULAT = MADU : ___",
          options: ["Manis", "Lebah", "Hutan", "Bunga"],
          correctIndex: 1
        },
        {
          question: "EKSPOR : PERGI = IMPOR : ___",
          options: ["Luar", "Dagang", "Masuk", "Asing"],
          correctIndex: 2
        },
        {
          question: "AYAH : ANAK = POHON : ___",
          options: ["Daun", "Tunas", "Ranting", "Akar"],
          correctIndex: 1
        },
        {
          question: "ANJING : BINATANG = APEL : ___",
          options: ["Vitamin", "Merah", "Buah", "Segar"],
          correctIndex: 2
        },
        {
          question: "BULAN : BUMI = YUPITER : ___",
          options: ["Venus", "Orbit", "Matahari", "Bulan"],
          correctIndex: 2
        },
        {
          question: "BERSIH : KOTOR = TINGGI : ___",
          options: ["Rendah", "Jangkung", "Jauh", "Dekat"],
          correctIndex: 0
        },
        {
          question: "DINGIN : SELIMUT = HUJAN : ___",
          options: ["Air", "Payung", "Dingin", "Basah"],
          correctIndex: 1
        },
        {
          question: "JANUARI : MARET = JUNI : ___",
          options: ["Februari", "Januari", "April", "Agustus", "September"],
          correctIndex: 3
        },
        {
          question: "ROMAN MUKA : MURAM = EKSPRESI : ___",
          options: ["Mimik", "Rona", "Sedih", "Cantik", "Susah"],
          correctIndex: 2
        },
        {
          question: "MOBIL : BENSIN = PERAHU : ___",
          options: ["Angin", "Laut", "Orang", "Ombak", "Nelayan"],
          correctIndex: 0
        },
        {
          question: "PERTANYAAN : JAWABAN = STIMULUS : ___",
          options: ["Rangsangan", "Respon", "Tantangan", "Responden", "Kesimpulan"],
          correctIndex: 3
        },
        {
          question: "TRANSMIGRASI : TRANSMIGRAN = EVAKUASI : ___",
          options: ["Emigran", "Imigrasi", "Sandera", "Pengungsi", "Penduduk"],
          correctIndex: 3
        },
        {
          question: "WORTEL : SAYURAN = NYIUR : ___",
          options: ["Santan", "Tempurung", "Palma", "Flora", "Kelapa"],
          correctIndex: 2
        },
        {
          question: "MIKROSKOP : MIKROBA = TELESKOP : ___",
          options: ["Bioskop", "Bintang", "Kapal Selam", "Bakteri", "Cuaca"],
          correctIndex: 1
        },
        {
          question: "SEKOLAH : PANDAI = PUSKESMAS : ___",
          options: ["Sakit", "Obat", "Sehat", "Penyembuhan", "Pasien"],
          correctIndex: 2
        },
        {
          question: "DARAT : MOBIL = UDARA : ___",
          options: ["Angin", "Pesawat Terbang", "Udara", "Terbang", "Pilot"],
          correctIndex: 1
        },
        {
          question: "DINGIN : SELIMUT = HUJAN : ___",
          options: ["Basah", "Payung", "Air", "Dingin", "Gelap"],
          correctIndex: 1
        },
        {
          question: "PULSA : TELEPON = ___ : PERTUNJUKAN",
          options: ["Uang", "Harga", "Voucher", "Surat", "Karcis"],
          correctIndex: 4
        },
        {
          question: "LAPAR : MAKAN = GATAL : ___",
          options: ["Garuk", "Luka", "Bentol", "Borok", "Merah"],
          correctIndex: 0
        },
        {
          question: "KERTAS : PENA = DINDING : ___",
          options: ["Kuas", "Amplas", "Roll", "Dempul", "Cat"],
          correctIndex: 0
        },
        {
          question: "STATESKOP : DOKTER = OSILOSKOP : ___",
          options: ["Apoteker", "Montir", "Arkeolog", "Nuerolog", "Bakteriolog"],
          correctIndex: 1
        },
        {
          question: "GEROBAK : SAPI = LOKOMOTIF : ___",
          options: ["Masinis", "Diesel", "Rel", "Stasiun", "Sinyal"],
          correctIndex: 1
        },
        {
          question: "MINUMAN : HAUS = ___",
          options: ["Lampu : Gelap", "Mati : Hidup", "Gula : Teh", "Gerobak : Sapi", "Kereta Api : Penumpang"],
          correctIndex: 0
        },
        {
          question: "DONGENG : PERISTIWA = ___",
          options: ["Lampu : Gelap", "Mati : Hidup", "Gula : Teh", "Gerobak : Sapi", "Fiktif : Fakta"],
          correctIndex: 4
        },
        {
          question: "BINTANG : LANGIT = ___",
          options: ["Makan : Minum", "Lenong : Sandiwara", "Dugaan : Rekaan", "Halaman : Buku", "Bola : Toko"],
          correctIndex: 2
        },
        {
          question: "CINCIN : JARI = ___",
          options: ["Pegawai : Kantor", "Domba : Pengembala", "Rumput : Lapangan", "Kapal : Nelayan", "Anting : Bibir"],
          correctIndex: 2
        },
        {
          question: "MERDEKA : KOLONIAL = ___",
          options: ["Dasi : Leher", "Gelang : Jari", "Kalung : Laher", "Kalung : Telinga", "Bebas : Kekang"],
          correctIndex: 4
        },
        {
          question: "KAKI : SEPATU = ___",
          options: ["Istirahat : Kerja", "Kuliah : Wisuda", "Kaya : Melarat", "Kenyang : Lapar", "Cat : Kuas"],
          correctIndex: 0
        },
        {
          question: "PAKAIAN : BUGIL = ___",
          options: ["Kepala : Topi", "Cincin : Jari", "Telinga : Anting", "Meja : Ruangan", "Lantai : Licin"],
          correctIndex: 0
        },
        {
          question: "SIANG : TERANG = ___",
          options: ["Rambut : Gundul", "Botak : Kepala", "Lantai : Licin", "Motor : Mogok", "Batu : Keras"],
          correctIndex: 4
        },
        {
          question: "PENGARANGAN : KARYA = ___",
          options: ["Tidur : Pulas", "Air : Panas", "Air : Dingin", "Lari : Cepat", "Sekolah : Siswa"],
          correctIndex: 2
        },
        {
          question: "EKSPOR : APBN = ___",
          options: ["Pelukis : Kanvas", "Orang Tua : Anak", "Negara : Undang Undang", "Perusahaan : Karyawan", "Menggambar : Ekspresi"],
          correctIndex: 0
        },
        {
          question: "SATE : SUNDUK = ___",
          options: ["Menabung : Kaya", "Hutang : Investasi", "Makan : Kenyang", "Menulis : Rajin", "Buku : Cetak"],
          correctIndex: 4
        },
        {
          question: "PEDAGANG : LABA = ___",
          options: ["Ayam : Bakar", "Mobil : Kenteng", "Bank : Merger", "Badan : Pijit", "Dokter : Pasien"],
          correctIndex: 2
        },
        {
          question: "LAPAR : NASI = ___",
          options: ["Mahasiswa : Pekerjaan", "Karyawan : Gaji", "Kontraktor : Proyek", "Sopir : Penumpang", "Keras : Lunak"],
          correctIndex: 3
        },
        {
          question: "MASINIS : KERETA API = ___",
          options: ["Mual : Obat", "Malam : Selimut", "Siang : Malam", "Haus : Air", "Kaya : Mobil"],
          correctIndex: 2
        },
        {
          question: "RUMAH : ATAP = ___",
          options: ["Nelayan : Kapal", "Sopir : Motor", "Pilot : Pesawat", "Kusir : Becak", "Baju : Tubuh"],
          correctIndex: 1
        },
        {
          question: "PEMBALAP : SIRKUIT = ___",
          options: ["Joki : Kuda", "Petinju : Ring", "Sapi : Sawah", "Harimau : Hutan", "Tv : Rak"],
          correctIndex: 1
        },
        {
          question: "SINGA : RUSA = ANTISEPTIK : ___",
          options: ["Kuman", "Sakit", "Obat", "Penyakit", "Hama"],
          correctIndex: 0
        },
        {
          question: "SIANG : MALAM = ___",
          options: ["Keras : Batu", "Pijat : Usap", "Jauh : Dekat", "Putih : Keruh", "Tinggi : Pendek"],
          correctIndex: 2
        },
        {
          question: "PADI : BERAS : NASI = ___",
          options: ["Kacang: Hijau : Bubur", "Kedelai : Tempe : Goreng", "Gandum : Tepung : Kue", "Tunas : Kelapa : Santan", "Bawang : Seledri : Sayur"],
          correctIndex: 2
        },
        {
          question: "SUARA : GAMBAR : FILM = ___",
          options: ["Sepakbola : Lapangan : Wasit", "Tulis : Catat : Ketik", "Kertas : Komputer : Printer", "Bola : Sepatu : Raket", "Kertas : Tulisan : Buku"],
          correctIndex: 4
        },
        {
          question: "API : BAKAR : PANAS = ___",
          options: ["Air : Lembab : Dingin", "Udara : Segar : Hangat", "Es : Beku : Dingin", "Kayu : Keras : Panjang", "Besi : Panas : Memuai"],
          correctIndex: 2
        },
        {
          question: "KUDA : KAMBING : KUCING = ___",
          options: ["Laptop: Notebook : Handphone", "Monitor : Kalkulator : Motor", "Cuci : Setrika : Bersih", "Presiden : Taksi : Komisaris", "Mesin Tik : Komputer : Atm"],
          correctIndex: 0
        },
        {
          question: "PENA : TINTA : KERTAS = ___",
          options: ["Kuras : Palet : Kanvas", "Mobil : Bensin : Jalan", "Kapur : Penghapus : Papan Tulis", "Kuas : Cat : Dinding", "Cat : Kaleng : Rumah"],
          correctIndex: 3
        },
        {
          question: "PENGACARA : HAKIM : HUKUM = ___",
          options: ["Guru : Murid : Sekolah", "Petenis : Perenang : Petinju", "Nakhoda : Pilot : Supir", "Guru : Dosen : Pendidikan", "Pelukis : Penyanyi : Aktor"],
          correctIndex: 3
        },
        {
          question: "BUKU : NOVEL : DETEKTIF = ___",
          options: ["Musik : Jazz : Genre", "Film : Aksi : Agen Rahasia", "Buku : Fiksi: Ilmiah", "Musik : Pop : Dangdut", "Film : Indonesia : Horor"],
          correctIndex: 1
        },
        {
          question: "AUSTRALIA : SELANDIA BARU = ___",
          options: ["Malaysia : Penang", "Papua : Papua Nugini", "Jerman : Turki", "Mesir : Iran", "Indonesia : Malaysia"],
          correctIndex: 4
        },
        {
          question: "BUTA : WARNA = TULI : ___",
          options: ["Telinga", "Kata", "Nada", "Pendengar", "Mendengar"],
          correctIndex: 2
        },
        {
          question: "POHON : BERLINDUNG = ___",
          options: ["Rambut: Hitam", "Telinga : Anting", "Buku : Pena", "Kaki : Melangkah", "Kepala : Kaki"],
          correctIndex: 3
        },
        {
          question: "BULAN : TAHUN = ___",
          options: ["Jam : Menit", "Buah : Daun", "Luluh: Utuh", "Detik : Menit", "Waktu : Lama"],
          correctIndex: 3
        },
        {
          question: "DONGENG : PERISTIWA = BERITA : ___",
          options: ["Fakta", "Rekaan", "Dugaan", "Palsu", "Estimasi"],
          correctIndex: 0
        },
        {
          question: "ROKOK : ASBAK = AIR : ___",
          options: ["Ember", "Pancur", "Selokan", "Selang", "Keran"],
          correctIndex: 0
        },
        {
          question: "KITA : SAYA = ___",
          options: ["Kami : Kamu", "Kalian : Beliau", "Dia : Kalian", "Beliau : Kami", "Mereka : Dia"],
          correctIndex: 4
        },
        {
          question: "KUDA : DAKU : DUKA = ___",
          options: ["Kaki : Kiki : Kaku", "Kepala : Papa : Kelapa", "Nadi : Dina : Dani", "Buka : Baki : Kaka", "Dada : Didi : Dudu"],
          correctIndex: 2
        },
        {
          question: "MATA : TELINGA = LIDAH : ___",
          options: ["Tangan", "Hidung", "Paha", "Siku", "Dada"],
          correctIndex: 1
        },
        {
          question: "MATA : WAJAH = ___",
          options: ["Ranjang : Kamar", "Kayu : Hutan", "Lampu : Jalan", "Radio : Tape", "Pensil : Buku"],
          correctIndex: 0
        },
        {
          question: "PASIEN : RUMAH SAKIT = MASINIS : ___",
          options: ["Stasiun", "Rel", "Klinik", "Kereta Api", "Kapal"],
          correctIndex: 3
        },
        {
          question: "BINTANG : LANGIT = RUMPUT : ___",
          options: ["Golf", "Lapangan", "Sapi", "Kandang", "Sangkar"],
          correctIndex: 1
        },
        {
          question: "DOKTER : PENYAKIT = MONTIR : ___",
          options: ["Makanan", "Pabrik", "Mesin", "Teori", "Mobil"],
          correctIndex: 2
        },
        {
          question: "BAHASA : ETIMOLOGI = MASYARAKAT : ___",
          options: ["Demografi", "Geografi", "Ips", "Ekonomi", "Sosiologi"],
          correctIndex: 4
        },
        {
          question: "LIDAH : MENGECAP = HIDUNG : ___",
          options: ["Membau", "Mencium", "Mencari", "Merasa", "Mengindera"],
          correctIndex: 0
        },
        {
          question: "LAKI-LAKI : JANTAN = ___ : ___",
          options: ["Pria : Keren", "Wanita : Pendek", "Tinggi : Semampai", "Langsing : Kurus", "Perempuan : Betina"],
          correctIndex: 4
        },
        {
          question: "GELAP : CAHAYA = ___ : ___",
          options: ["Warisan : Lampu", "Hitam : Putih", "Malam : Neon", "Miskin : Harta", "Gaji : Utang"],
          correctIndex: 3
        },
        {
          question: "JAHIT : CELANA = ___ : ___",
          options: ["Masak : Sayuran", "Tanak : Nasi", "Petik : Buah", "Beli : Roti", "Aduk : Adonan"],
          correctIndex: 1
        },
        {
          question: "KAKI : SEPATU = ___",
          options: ["Cat : Kuas", "Meja : Ruangan", "Telinga : Anting", "Cincin : Jari", "Topi : Kepala"],
          correctIndex: 2
        },
        {
          question: "KAKAK TUA : MERPATI = ___",
          options: ["Anjing : Herder", "Gurame : Kakap", "Gajah : Semut", "Singa : Naga", "Elang : Kupu-Kupu"],
          correctIndex: 1
        },
        {
          question: "BELAJAR : PANDAI = ___",
          options: ["Cetak : Kertas", "Berpikir : Arif", "Potret : Kamera", "Litografi : Batu", "Cetak : Tinta"],
          correctIndex: 1
        },
        {
          question: "SUNGAI : JEMBATAN = ___",
          options: ["Marka : Jalan", "Rintangan : Godaan", "Janji : Tepati", "Kayu : Terbakar", "Masalah : Jalan Keluar"],
          correctIndex: 4
        },
        {
          question: "MATAHARI : TERANG = ___",
          options: ["Mendidih: Air", "Membeku : Dingin", "Lampu : Sinar", "Air : Hujan", "Api : Panas"],
          correctIndex: 4
        },
        {
          question: "UMUM : LAZIM = ___",
          options: ["Kurus : Gemuk", "Langsing : Ramping", "Lapar : Haus", "Garam : Asin", "Cinta : Tinta"],
          correctIndex: 1
        },
        {
          question: "DESIBEL : SUARA = ___",
          options: ["Are : Jarak", "Warna : Merah", "Suhu : Temperatur", "Volt : Listrik", "Kalori : Bera"],
          correctIndex: 3
        },
        {
          question: "KOSONG : HAMPA = ___",
          options: ["Ubi : Akar", "Ribut : Serak", "Penuh : Sesak", "Siang : Malam", "Cair : Encer"],
          correctIndex: 4
        },
        {
          question: "SARUNG TANGAN : PETINJU = MIKROSKOP : ___",
          options: ["Analis", "Dokter", "Optalmolog", "Bakteriolog", "Apoteker"],
          correctIndex: 3
        },
        {
          question: "MATAHARI : BUMI = BUMI : ___",
          options: ["Gravitasi", "Bulan", "Planet", "Matahari", "Bintang"],
          correctIndex: 1
        },
        {
          question: "KORAN : MAKALAH : BULETIN = ___",
          options: ["Restoran : Hotel : Losmen", "Cat : Kuas : Lukisan", "Sandal : Sepatu : Kaos", "Air : Roti : Singkong", "Bus : Kereta Api : Delman"],
          correctIndex: 4
        },
        {
          question: "BUSUR : GARIS = ___",
          options: ["Terbenam: Terbit", "Tangkap : Lempar", "Tombak : Busur", "Busur : Panah", "Relatif : Absolut"],
          correctIndex: 3
        },
        {
          question: "TEMBAKAU : ROKOK : ISAP = ___",
          options: ["Gandum : Roti : Makan", "Kulit : Sepatu : Kaki", "Plastik : Sisir : Rambut", "Beras : Nasi : Jemur", "Teh : Susu : Minun"],
          correctIndex: 0
        },
        {
          question: "GUNDUL : RAMBUT = ___",
          options: ["Bugil : Pakaian", "Keramik : Lantai", "Kepala : Botak", "Mogok : Mobil", "Rambut : Bulu"],
          correctIndex: 0
        },
        {
          question: "BANGSA : ETNOLOGI = ___",
          options: ["Demonstrasi : Demografi", "Bumi : Geografi", "Planet : Astronomi", "Penyakit : Patologi", "Alam : Biologi"],
          correctIndex: 3
        },
        {
          question: "SEMINAR : SARJANA = ___",
          options: ["Perpustakaan : Peneliti", "Kurator : Seniman", "Ruang Pengadilan : Saksi", "Rumah Sakit : Pasien", "Akademi : Taruna"],
          correctIndex: 0
        },
        {
          question: "BUNGA : BUKET = ___",
          options: ["Pigmen : Mata", "Balon : Udara", "Pintu : Kunci", "Tubult : Kulit", "Kertas : Buku"],
          correctIndex: 4
        },
        {
          question: "ULAT : KEPOMPONG : KUPU-KUPU = ___",
          options: ["Kecil : Sedang : Besar", "Sore : Siang : Pagi", "Ngantuk : Tidur : Mimpi", "Bayi : Anak-Anak : Remaja", "Anak : Ayah : Kakek"],
          correctIndex: 3
        },
        {
          question: "TUKANG : GERGAJI : PALU = ___",
          options: ["Guru : Kapur : Topi", "Penari : Topi : Selendang", "Montir : Obeng : Tang", "Penulis : Kuas : Cat", "Tukang : Obat : Stetoskop"],
          correctIndex: 2
        },
        {
          question: "TANJUNGPERAK : SURABAYA = ___",
          options: ["O’hara : Los Angeles", "Boombaru : Palembang", "Sunda Kelapa : Bandung", "Arun : Aceh", "Papua : Tembagapura"],
          correctIndex: 1
        },
        {
          question: "BAROMETER : TORICELLI = ___",
          options: ["Electron : Newton", "Radar : Marconi", "Penissilin : Flemming", "Lampu Pijar : Rontgen", "Piala : Nobel"],
          correctIndex: 2
        },
        {
          question: "SANGKURIANG : SUNDA = ___",
          options: ["Oedipus : Yunani", "Ranggawarsita : Jawa", "Himalaya : Nepal", "Gangga : India", "Tensing : Tibet"],
          correctIndex: 0
        },
        {
          question: "DIRGAHAYU : ULANG TAHUN = SELAMAT BERBAHAGIA : ___",
          options: ["Mobil Baru", "Putera Baru", "Pernikahan", "Kesembuhan", "Promosi"],
          correctIndex: 2
        },
        {
          question: "BUMI : MATAHARI = BULAN : ___",
          options: ["Bintang", "Planet", "Tatasurya", "Bumi", "Orbit"],
          correctIndex: 3
        },
        {
          question: "RAMALAN : ASTROLOGI = BANGSA : ___",
          options: ["Sosiologi", "Demografi", "Psikologi", "Antropologi", "Etnologi"],
          correctIndex: 4
        },
        {
          question: "PEREDARAN DARAH : WILIAM HARVEY = KAPAL API : ___",
          options: ["Luois Pastour", "Alexander Fleming", "Francis Galton", "Robert Fulton", "Gregor Mendel"],
          correctIndex: 3
        },
        {
          question: "BANK : UANG = ___ : ___",
          options: ["Baju : Tekstil", "Pakaian : Laundry", "Masak : Dapur", "Lumbung : Padi", "Kayu : Hutan"],
          correctIndex: 3
        },
        {
          question: "MASJID LANGGAR = ___ : ___",
          options: ["Kaos : Celana", "Kapal : Sekoci", "Siswa : Sekolah", "Telepon : Telegram", "Pelan : Keras"],
          correctIndex: 1
        },
        {
          question: "SUNGAI : LAUT = ___ : ___",
          options: ["Hutan : Pohon", "Kereta Api : Stasiun", "Sayur: Desa", "Pegunungan: The", "Puncak: Sun Rise"],
          correctIndex: 1
        },
        {
          question: "PAYUNG : HUJAN = ___ : ___",
          options: ["Sepatu : Sekolah", "Tas : Buku", "Balsem : Hangat", "Air Mata : Sapu Tangan", "Jaket: Hawa Dingin"],
          correctIndex: 3
        },
        {
          question: "RAMBUT : KERITING = ___ : ___",
          options: ["Ikal : Lurus", "Hidung : Mancung", "Mulut : Cerewet", "Laptop : Pribadi", "Cita-Cita : Masa Depan"],
          correctIndex: 1
        },
        {
          question: "LEMAS : ANEMIA = ___ : ___",
          options: ["Patuh : Takut", "Tubuh : Ideal", "Bangga : Prestasi", "Olahraga : Sehat", "Senam : Basket"],
          correctIndex: 2
        },
        {
          question: "DISERTASI : DOKTOR = ___ : ___",
          options: ["Buruh : Upah", "Padat : Kering", "Kuat : Kokoh", "Skripsi : Sarjana", "Presiden : Negara"],
          correctIndex: 3
        },
        {
          question: "MASIF : UTUH = ___ : ___",
          options: ["Pokok : Primer", "Tiruan : Asli", "Bercerai : Menyatu", "Sekunder : Tersier", "Lemah : Roboh"],
          correctIndex: 0
        },
        {
          question: "MATA : WAJAH = ___ : ___",
          options: ["Meja : Kursi", "Lisan : Tulisan", "Abstrak : Nyata", "Cerek : Aluminium", "Bantal : Ranjang"],
          correctIndex: 4
        },
        {
          question: "PRO : SETUJU = ___ : ___",
          options: ["Asbak : Rokok", "Variasi : Individu", "Kontra : Acuh", "Purnabakti : Pensiun", "Lari : Lepas"],
          correctIndex: 3
        },
];