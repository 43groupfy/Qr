const questions = [
    {
        question:  "ABADI >< . . . ",
         options:  ["Abad",  "Fana",  "Dunia",  "Kecewa",  "Kehancuran"],
         correctIndex: 1
    },
    {
        question:  "ABOLISI >< . . . ",
         options:  ["Keringan",  "Pemberatan",  "Pengurangan",  "Pemotongan",  "Penghargaan"],
         correctIndex: 4
    },
    {
        question:  "ABSAH >< . . . ",
         options:  ["Terlarang",  "Sahih",  "Cacat",  "Ilegal",  "Benar"],
         correctIndex: 3
    },
    {
        question:  "ABSEN >< . . . ",
         options:  ["Cuti",  "Hadir",  "Ijin",  "Masuk",  "Sakit"],
         correctIndex: 1
    },
    {
        question:  "ABSEN >< . . . ",
         options:  ["Sakit",  "Masuk",  "Ijin",  "Hadir",  "Cuti"],
         correctIndex: 3
    },
    {
        question:  "ABSTRAK >< . . . ",
         options:  ["Niskala",  "Berwujud",  "Tidak Berbentuk",  "Mujarad",  "Terlihat"],
         correctIndex: 1
    },
    {
        question:  "ABSTRAK >< . . . ",
         options:  ["Konkret",  "Absurd",  "Visioner",  "Ideal",  "Maya"],
         correctIndex: 0
    },
    {
        question:  "ABSTRAK >< . . . ",
         options:  ["Absurd",  "Asli",  "Konkret",  "Asing",  "Azali"],
         correctIndex: 2
    },
    {
        question:  "ABSURD >< . . . ",
         options:  ["Omong Kosong",  "Kekecualian",  "Tak Terpakai",  "Masuk Akal",  "Mustahil"],
         correctIndex: 3
    },
    {
        question:  "AFEKSI >< . . . ",
         options:  ["Kasih Sayang",  "Kriminal",  "Kejahatan",  "Perasaan",  "Cinta"],
         correctIndex: 2
    },
    {
        question:  "AFEKSI >< . . . ",
         options:  ["Cinta",  "Perasaan",  "Kejahatan",  "Kriminal",  "Kasih Sayang"],
         correctIndex: 2
    },
    {
        question:  "AHLI >< . . . ",
         options:  ["Amatir",  "Palsu",  "Canggih",  "Partikelir",  "Anasir"],
         correctIndex: 0
    },
    {
        question:  "AKTUAL >< . . . ",
         options:  ["Kadaluwarsa",  "Nyata",  "Lama",  "Baru",  "Reformasi"],
         correctIndex: 0
    },
    {
        question:  "AKTUAL >< . . . ",
         options:  ["Kedaluwarsa",  "Makro",  "Baru",  "Modern",  "Fiktif"],
         correctIndex: 0
    },
    {
        question:  "AKTUAL >< . . . ",
         options:  ["Reformasi",  "Baru",  "Lama",  "Nyata",  "Kadaluwarsa"],
         correctIndex: 4
    },
    {
        question:  "AKTUAL >< . . . ",
         options:  ["Modern",  "Nyata",  "Baru",  "Fiktif",  "Sebenarnya"],
         correctIndex: 3
    },
    {
        question:  "AKTUAL >< . . . ",
         options:  ["Kadaluwarsa",  "Nyata",  "Lama",  "Baru",  "Reformasi"],
         correctIndex: 0
    },
    {
        question:  "ALAM FANA >< . . . ",
         options:  ["Alam baka",  "Alam dunia",  "Hidup",  "Meninggal",  "Alam kubur"],
         correctIndex: 0
    },
    {
        question:  "AMAL >< . . . ",
         options:  ["Mal",  "Kebaikan",  "Manusia",  "Janji",  "Perbuatan"],
         correctIndex: 0
    },
    {
        question:  "AMATIR >< . . . ",
         options:  ["Palsu",  "Partikelir",  "Canggih",  "Anasir",  "Ahli*"],
         correctIndex: 2
    },
    {
        question:  "AMATIR >< . . . ",
         options:  ["Profesor",  "Pengawal",  "Jago",  "Kampiun",  "Kuatir"],
         correctIndex: 0
    },
    {
        question:  "AMATIR >< . . . ",
         options:  ["Kuatir",  "Kampiun",  "Jago",  "Profesor",  "Teknologi"],
         correctIndex: 2
    },
    {
        question:  "AMBIGU >< . . . ",
         options:  ["Tidak Jelas",  "Terang",  "Samar-Samar",  "Kabur",  "Kacau"],
         correctIndex: 1
    },
    {
        question:  "ANALOG >< . . . ",
         options:  ["Jamak",  "Identik",  "Berbeda",  "Idola",  "Asal"],
         correctIndex: 2
    },
    {
        question:  "ANGGARA >< . . . ",
         options:  ["Kasih",  "Gembira",  "Jinak",  "Sengsara",  "Lunak"],
         correctIndex: 2
    },
    {
        question:  "ANGOT >< . . . ",
         options:  ["Payah",  "Sehat",  "Parah",  "Sakit",  "Dingin"],
         correctIndex: 1
    },
    {
        question:  "ANOMALI >< . . . ",
         options:  ["Biasa",  "Sederhana",  "Normal",  "Nyata",  "Kurang"],
         correctIndex: 2
    },
    {
        question:  "ANTIPATI >< . . . ",
         options:  ["Apatis",  "Simpati",  "Acuh",  "Tidak Suka",  "Perduli"],
         correctIndex: 1
    },
    {
        question:  "ANTIPATI >< . . . ",
         options:  ["Melawan",  "Setuju",  "Lekas Mati",  "Simpati",  "Bertahan Hidup"],
         correctIndex: 3
    },
    {
        question:  "ANTITESIS >< . . . ",
         options:  ["Hipotesis",  "Epitasis",  "Kebenaran",  "Tesis",  "Sintesis"],
         correctIndex: 3
    },
    {
        question:  "APATIS >< . . . ",
         options:  ["Ragu",  "Jujur",  "Obyektif",  "Tegas",  "Peduli"],
         correctIndex: 4
    },
    {
        question:  "APRIORI >< . . . ",
         options:  ["Unggulan",  "Tidak Istimewa",  "Proporsi",  "Aposteriori",  "Prioritas"],
         correctIndex: 3
    },
    {
        question:  "ASING >< . . . ",
         options:  ["Aneh",  "Lucu",  "Berbeda",  "Menggelikan",  "Biasa"],
         correctIndex: 4
    },
    {
        question:  "ASLI >< . . . ",
         options:  ["Murni",  "Rendah",  "Berbeda",  "Menggelikan",  "Biasa"],
         correctIndex: 4
    },
    {
        question:  "ASLI >< . . . ",
         options:  ["Tulen",  "Palsu",  "Tidak Bercampur",  "Khalis",  "Murni"],
         correctIndex: 1
    },
    {
        question:  "ASLI >< . . . ",
         options:  ["Kuno",  "Sederhana",  "Duplikat",  "Murni",  "Orisinil"],
         correctIndex: 2
    },
    {
        question:  "AUTENTIK >< . . . ",
         options:  ["Absah",  "Berbeda",  "Bekas",  "Palsu",  "Biasa"],
         correctIndex: 3
    },
    {
        question:  "BACAR >< . . . ",
         options:  ["Terbuka",  "Gagap",  "Berbeda",  "Galir",  "Diam"],
         correctIndex: 1
    },
    {
        question:  "BENGUK >< . . . ",
         options:  ["Apatis",  "Jujur",  "Heroik",  "Sedih",  "Gembira"],
         correctIndex: 4
    },
    {
        question:  "BERBEDA >< . . . ",
         options:  ["Standar",  "Tengah",  "Sesuai",  "Pinggir",  "Normal"],
         correctIndex: 2
    },
    {
        question:  "BERHASIL >< . . . ",
         options:  ["Gembira",  "Gagal",  "Berguna",  "Bahaya",  "Salah"],
         correctIndex: 1
    },
    {
        question:  "BERPIHAK >< . . . ",
         options:  ["Bergabung",  "Terikat",  "Bertentangan",  "Netral",  "Berselisih"],
         correctIndex: 3
    },
    {
        question:  "BERPIHAK >< . . . ",
         options:  ["Bergabung",  "Netral",  "Terikat",  "Berselisih",  "Bertentangan"],
         correctIndex: 1
    },
    {
        question:  "BERSIMBAH >< . . . ",
         options:  ["Kusut",  "Kering",  "Gersang",  "Bebas",  "Bertahan"],
         correctIndex: 1
    },
    {
        question:  "BIASA >< . . . ",
         options:  ["Absah",  "Bekas",  "Berbeda",  "Autentik",  "Palsu"],
         correctIndex: 3
    },
    {
        question:  "BONGSOR >< . . . ",
         options:  ["Tinggi",  "Terbesar",  "Gemuk",  "Kerdil",  "Layu"],
         correctIndex: 3
    },
    {
        question:  "BONGSOR >< . . . ",
         options:  ["Besar",  "Tipis",  "Pendek",  "Kerdil",  "Gemuk"],
         correctIndex: 1
    },
    {
        question:  "BONGSOR >< . . . ",
         options:  ["Menumpuk",  "Tertua",  "Kerdil",  "Macet",  "Susut"],
         correctIndex: 2
    },
    {
        question:  "BOROS >< . . . ",
         options:  ["Hermat",  "Cerdas",  "Beres",  "Irit",  "Ekonomis"],
         correctIndex: 0
    },
    {
        question:  "BUKIT >< . . . ",
         options:  ["Sungai",  "Jurang",  "Lembah",  "Tebing",  "Ngarai"],
         correctIndex: 2
    },
    {
        question:  "BULAT >< . . . ",
         options:  ["Bola",  "Lingkaran",  "Bundar",  "Lonjong",  "Oval"],
         correctIndex: 3
    },
    {
        question:  "CANGGIH >< . . . ",
         options:  ["Moderen",  "Terlambat",  "Diam",  "Kuno",  "Sederhana"],
         correctIndex: 4
    },
    {
        question:  "CAPEK >< . . . ",
         options:  ["Lelah",  "Penat",  "Letih",  "Segar",  "Lemas"],
         correctIndex: 3
    },
    {
        question:  "CEPAT >< . . . ",
         options:  ["Lambat",  "Seput",  "Kusam",  "Luntur",  "Ketinggalan"],
         correctIndex: 0
    },
    {
        question:  "CHAOS >< . . . ",
         options:  ["Normal",  "Hancur",  "Agama",  "Kacau",  "Labil"],
         correctIndex: 0
    },
    {
        question:  "CHAOS >< . . . ",
         options:  ["Labil",  "Hancur",  "Normal",  "Kacau",  "Abnormal"],
         correctIndex: 2
    },
    {
        question:  "CUCU >< . . . ",
         options:  ["Anak",  "Putri",  "Kakek",  "Cicit",  "Ayah"],
         correctIndex: 2
    },
    {
        question:  "CURANG >< . . . ",
         options:  ["Licik",  "Cerdik",  "Cendikia",  "Sportif",  "Masif"],
         correctIndex: 3
    },
    {
        question:  "DAIF >< . . . ",
         options:  ["Kurang",  "Mulia",  "Bernilai",  "Murni",  "Cela"],
         correctIndex: 1
    },
    {
        question:  "DEDUKSI >< . . . ",
         options:  ["Intuisi",  "Transduksi",  "Reduksi",  "Konduksi",  "Induksi"],
         correctIndex: 4
    },
    {
        question:  "DEDUKSI >< . . . ",
         options:  ["Konduksi",  "Reduksi",  "Residu",  "Induksi",  "Redusi"],
         correctIndex: 3
    },
    {
        question:  "DEFISIT >< . . . ",
         options:  ["Anggaran",  "Kekurangan",  "Ganjil",  "Surplus",  "Sedikit"],
         correctIndex: 3
    },
    {
        question:  "DEGIL >< . . . ",
         options:  ["Tengil",  "Kumal",  "Pengikut",  "Penurut",  "Normal"],
         correctIndex: 3
    },
    {
        question:  "DELUSI >< . . . ",
         options:  ["Ilusi",  "Nyata",  "Khayalan",  "Fiksi",  "Fantasi"],
         correctIndex: 1
    },
    {
        question:  "DEPENDEN >< . . . ",
         options:  ["Dalam",  "Mandiri",  "Korelasi",  "Solid",  "Sosial"],
         correctIndex: 1
    },
    {
        question:  "DETERIORASI >< . . . ",
         options:  ["Kemunduran",  "Disorientasi",  "Kemajuan",  "Keterbalikan",  "Keterbelakangan"],
         correctIndex: 2
    },
    {
        question:  "DETERIORASI >< . . . ",
         options:  ["Keterbelakangan",  "Keterbalikan",  "Kemajuan",  "Disorientasi",  "Kemunduran"],
         correctIndex: 2
    },
    {
        question:  "DIALOG >< . . . ",
         options:  ["Analog",  "Prolog",  "Monolog",  "Analog",  "Hipolog"],
         correctIndex: 2
    },
    {
        question:  "DIFERENSIASI >< . . . ",
         options:  ["Subtitusi",  "Ekuivalensi",  "Subtraksi",  "Fiksasi",  "Narsi"],
         correctIndex: 1
    },
    {
        question:  "DIFUSI >< . . . ",
         options:  ["Pengumpulan",  "Penyebaran",  "Peningkatan",  "Penurunan",  "Pembanding"],
         correctIndex: 0
    },
    {
        question:  "DINAMIS >< . . . ",
         options:  ["Hidup",  "Elastis",  "Fleksibel",  "Lentur",  "Statis"],
         correctIndex: 4
    },
    {
        question:  "DISONANSI >< . . . ",
         options:  ["Diam",  "Disharmoni",  "Harmoni",  "Pasif",  "Ramai"],
         correctIndex: 2
    },
    {
        question:  "DUKA >< . . . ",
         options:  ["Sedih",  "Samak",  "Gelebah",  "Senang",  "Kecewa"],
         correctIndex: 3
    },
    {
        question:  "DUNGU >< . . . ",
         options:  ["Terang",  "Brilian",  "Berlian",  "Idiot",  "Indah"],
         correctIndex: 1
    },
    {
        question:  "EKLEKTIK >< . . . ",
         options:  ["Elektronik",  "Didaktik",  "Tidak Pilih-Pilih",  "Memilih",  "Eksentrik"],
         correctIndex: 2
    },
    {
        question:  "EKPLOITASI >< . . . ",
         options:  ["Konservasi",  "Interpretasi",  "Perlindungan",  "Konservatori",  "Kuno"],
         correctIndex: 0
    },
    {
        question:  "EKSISTENSI >< . . . ",
         options:  ["Kefanaan",  "Kehampaan",  "Ketiadaan",  "Kekosongan",  "Kesunyian"],
         correctIndex: 2
    },
    {
        question:  "EKSLUSIF >< . . . ",
         options:  ["Publik",  "Khusus",  "Bukan Utama",  "Murah",  "Umum"],
         correctIndex: 4
    },
    {
        question:  "EKSODUS >< . . . ",
         options:  ["Nomaden",  "Bermukim",  "Pindah",  "Bedol Desa",  "Transmigrasi"],
         correctIndex: 1
    },
    {
        question:  "EKSODUS >< . . . ",
         options:  ["Transmigrasi",  "Bedol Desa",  "Pindah",  "Bermukim",  "Nomaden"],
         correctIndex: 3
    },
    {
        question:  "EKSPRESI >< . . . ",
         options:  ["Kuasai",  "Cepat",  "Lambat",  "Impresi",  "Reaksi"],
         correctIndex: 3
    },
    {
        question:  "EKSRINSIK >< . . . ",
         options:  ["Eksentrik",  "Individual",  "Konsensus",  "Internal",  "Keserasian"],
         correctIndex: 3
    },
    {
        question:  "EKSTERNAL >< . . . ",
         options:  ["Eksentrik",  "Internal",  "Individual",  "Konte",  "Keserasian"],
         correctIndex: 1
    },
    {
        question:  "EKUIVALEN >< . . . ",
         options:  ["Sama",  "Asli",  "Berlawanan",  "Lapisan",  "Sebanding"],
         correctIndex: 2
    },
    {
        question:  "EKUIVALEN >< . . . ",
         options:  ["Sebanding",  "Lapisan",  "Berlawanan",  "Asli",  "Sama Dengan"],
         correctIndex: 2
    },
    {
        question:  "ELASTIS >< . . . ",
         options:  ["Ceroboh",  "Taktis",  "Praktis",  "Kaku",  "Lentur"],
         correctIndex: 3
    },
    {
        question:  "ELEKTIF >< . . . ",
         options:  ["Frontal",  "Radikal",  "Konklusif",  "Tak Pilih-Pilih",  "Spiritual"],
         correctIndex: 3
    },
    {
        question:  "ELUSIF >< . . . ",
         options:  ["Alir",  "Mudah Jenuh",  "Sulit Ditiru",  "Sukar Dimengerti",  "Mudah Dimengerti"],
         correctIndex: 4
    },
    {
        question:  "ELUSIF >< . . . ",
         options:  ["Gampang",  "Sulit",  "Mudah Dipahami",  "Khusus",  "Dimengerti"],
         correctIndex: 2
    },
    {
        question:  "EMIGRASI >< . . . ",
         options:  ["Migras",  "Transmigrasi",  "Pemukiman",  "Larangan Masuk",  "Imigrasi"],
         correctIndex: 4
    },
    {
        question:  "ENGGAN >< . . . ",
         options:  ["Sudi",  "Tidak",  "Setuju",  "Maju",  "Siap"],
         correctIndex: 0
    },
    {
        question:  "EPILOG >< . . . ",
         options:  ["Hipolog",  "Dialog",  "Monolog",  "Analog",  "Prolog"],
         correctIndex: 4
    },
    {
        question:  "EPILOG >< . . . ",
         options:  ["Prolog",  "Introduksi",  "Pembukaan",  "Dialog",  "Monolog"],
         correctIndex: 0
    },
    {
        question:  "ESTIMASI >< . . . ",
         options:  ["Perulangan",  "Dingin",  "Perkiraan",  "Pasti",  "Panas"],
         correctIndex: 3
    },
    {
        question:  "ESTIMASI >< . . . ",
         options:  ["Panas",  "Pasti",  "Perkiraan",  "Dingin",  "Perulangan"],
         correctIndex: 1
    },
    {
        question:  "FANA >< . . . ",
         options:  ["Baka",  "Selagi",  "Sementara",  "Senyampang",  "Temporer"],
         correctIndex: 4
    },
    {
        question:  "FEODAL >< . . . ",
         options:  ["Maskulin",  "Modern",  "Kolot",  "Sukma",  "Substansi"],
         correctIndex: 1
    },
    {
        question:  "FIKSI >< . . . ",
         options:  ["Legenda",  "Nonfiksi",  "Imajinasi",  "Mitos",  "Impian"],
         correctIndex: 1
    },
    {
        question:  "FIKTIF >< . . . ",
         options:  ["Fakta",  "Ilusi",  "Imajinatif",  "Karya",  "Dugaan"],
         correctIndex: 0
    },
    {
        question:  "FINISH >< . . . ",
         options:  ["Lengkap",  "Depan",  "Ujung",  "Awal",  "Proses"],
         correctIndex: 3
    },
    {
        question:  "FLEKSIBEL >< . . . ",
         options:  ["Luwes",  "Tak Pilih-Pilih",  "Selaras",  "Diam",  "Kaku"],
         correctIndex: 4
    },
    {
        question:  "FONEM >< . . . ",
         options:  ["Morfem",  "Huruf",  "Aksara",  "Kata",  "Kalimat"],
         correctIndex: 0
    },
    {
        question:  "FRAGMEN >< . . . ",
         options:  ["Utuh",  "Pigmen",  "Bab",  "Bagian",  "Defrag"],
         correctIndex: 0
    },
    {
        question:  "FRAGMEN >< . . . ",
         options:  ["Defrag",  "Bagian",  "Bab",  "Pigmen",  "Utuh"],
         correctIndex: 4
    },
    {
        question:  "GARA - GARA >< . . . ",
         options:  ["Niagara",  "Akibat",  "Alasan",  "Sebab",  "Karena"],
         correctIndex: 1
    },
    {
        question:  "GASAL >< . . . ",
         options:  ["Ganjil",  "Genap",  "Gangsal",  "Gatal",  "Bangsal"],
         correctIndex: 1
    },
    {
        question:  "GASAL >< . . . ",
         options:  ["Ganjil",  "Angka",  "Genap",  "Gangsal",  "Bilangan"],
         correctIndex: 2
    },
    {
        question:  "GEGAI >< . . . ",
         options:  ["Petir",  "Sahih",  "Lemah",  "Kuat",  "Berhasil"],
         correctIndex: 3
    },
    {
        question:  "GENERIK >< . . . ",
         options:  ["Umum",  "Individu",  "Ampuh",  "Khusus",  "Mahal"],
         correctIndex: 1
    },
    {
        question:  "GENTAR >< . . . ",
         options:  ["Berani",  "Takut",  "Ragu",  "Malu",  "Tantang"],
         correctIndex: 0
    },
    {
        question:  "GRATIFIKASI >< . . . ",
         options:  ["Gaji",  "Hadiah",  "Denda",  "Potongan",  "Bonus"],
         correctIndex: 2
    },
    {
        question:  "GRATIFIKASI >< . . . ",
         options:  ["Revisi",  "Denda",  "Bonus",  "Hadiah",  "Potongan"],
         correctIndex: 1
    },
    {
        question:  "GUGUR >< . . . ",
         options:  ["Patah",  "Tunas",  "Tumbuh",  "Rontok",  "Jatuh"],
         correctIndex: 2
    },
    {
        question:  "GUGUR >< . . . ",
         options:  ["Rontok",  "Tunas",  "Salju",  "Jatuh",  "Tumbuh"],
         correctIndex: 4
    },
    {
        question:  "HETEROGEN >< . . . ",
         options:  ["Beragam",  "Oksigen",  "Bervariasi",  "Homogen",  "Senyawa"],
         correctIndex: 3
    },
    {
        question:  "HETEROGEN >< . . . ",
         options:  ["Bervariasi",  "Beragam",  "Aneka Macam",  "Homogen",  "Halogen"],
         correctIndex: 3
    },
    {
        question:  "HIGIENIS >< . . . ",
         options:  ["Kotor",  "Khalis",  "Bersih",  "Murni",  "Jernih"],
         correctIndex: 0
    },
    {
        question:  "HIPOKRIT >< . . . ",
         options:  ["Jujur",  "Pembohong",  "Sabar",  "Kamuflase",  "Terbuka"],
         correctIndex: 0
    },
    {
        question:  "HIRAU >< . . . ",
         options:  ["Perhatian",  "Lupa",  "Peduli",  "Acuh",  "Lalai"],
         correctIndex: 3
    },
    {
        question:  "HIRAU >< . . . ",
         options:  ["Lupa",  "Ingat",  "Lalai",  "Kolase",  "Acuh"],
         correctIndex: 1
    },
    {
        question:  "HUNI >< . . . ",
         options:  ["Tinggal",  "Rumah",  "Kosong",  "Banyak",  "Ramai"],
         correctIndex: 2
    },
    {
        question:  "HUNI >< . . . ",
         options:  ["Ramai",  "Banyak",  "Kosong",  "Rumah",  "Tinggal"],
         correctIndex: 2
    },
    {
        question:  "IBU >< . . . ",
         options:  ["Anak",  "Putri",  "Nenek",  "Kakek",  "Cucu"],
         correctIndex: 0
    },
    {
        question:  "IMBESIL >< . . . ",
         options:  ["Tumpul",  "Lambat",  "Spesial",  "Pandai",  "Suka"],
         correctIndex: 3
    },
    {
        question:  "IMIGRASI >< . . . ",
         options:  ["Migrasi",  "Transmigrasi",  "Emigrasi",  "Pemukiman",  "Larangan Masuk"],
         correctIndex: 2
    },
    {
        question:  "IMPERFEK >< . . . ",
         options:  ["Gagal",  "Berhasil",  "Sempurna",  "Kuat",  "Menyeluruh"],
         correctIndex: 2
    },
    {
        question:  "INDEPENDEN >< . . . ",
         options:  ["Swadaya",  "Bekerja Sendiri",  "Berdiri Sendiri",  "Dependen",  "Bergantung"],
         correctIndex: 3
    },
    {
        question:  "INDEPENDEN >< . . . ",
         options:  ["Tidak Bergantung Kepada Orang Lain",  "Dependen",  "Berdiri Sendiri",  "Bekerja Mandiri",  "Swadaya"],
         correctIndex: 1
    },
    {
        question:  "INDIVIDUAL >< . . . ",
         options:  ["Personal",  "Sendiri",  "Selektif",  "Kolektif",  "Komunal"],
         correctIndex: 3
    },
    {
        question:  "INDUKSI >< . . . ",
         options:  ["Reduksi",  "Residu",  "Konduksi",  "Redusi",  "Deduksi"],
         correctIndex: 0
    },
    {
        question:  "INFERTIL >< . . . ",
         options:  ["Normal",  "Subur",  "Cacat",  "Sehat",  "Baik"],
         correctIndex: 1
    },
    {
        question:  "INSIDENTAL >< . . . ",
         options:  ["Umum",  "Istimewa",  "Tertentu",  "Khusus",  "Rutin"],
         correctIndex: 4
    },
    {
        question:  "INVALID >< . . . ",
         options:  ["Ganjil",  "Sah",  "Aneh",  "Ilegal",  "Standar"],
         correctIndex: 1
    },
    {
        question:  "INVALID >< . . . ",
         options:  ["Fit",  "Bugar",  "Segar",  "Mandiri",  "Normal"],
         correctIndex: 4
    },
    {
        question:  "JAHAT >< . . . ",
         options:  ["Sulit",  "Baik",  "Virus",  "Tahan",  "Benigna"],
         correctIndex: 1
    },
    {
        question:  "JARANG >< . . . ",
         options:  ["Renggang",  "Sesekali",  "Sering",  "Kadang-Kadang",  "Tidak Pernah"],
         correctIndex: 2
    },
    {
        question:  "JARANG >< . . . ",
         options:  ["Tidak Pernah",  "Kadang-Kadang",  "Sering",  "Sesekali",  "Renggang"],
         correctIndex: 2
    },
    {
        question:  "JAWAB >< . . . ",
         options:  ["Argumen",  "Sulit",  "Arah",  "Bingung",  "Tanya"],
         correctIndex: 4
    },
    {
        question:  "JAWAB >< . . . ",
         options:  ["Elakan",  "Respon",  "Tanya",  "Reaksi",  "Balas"],
         correctIndex: 0
    },
    {
        question:  "JAWAB >< . . . ",
         options:  ["Sulit",  "Tanya",  "Arah",  "Argumen",  "Bingung"],
         correctIndex: 1
    },
    {
        question:  "JINAK >< . . . ",
         options:  ["Buas",  "Nurut",  "Parah",  "Nakal",  "Pasrah"],
         correctIndex: 0
    },
    {
        question:  "KALEIDOSKOP >< . . . ",
         options:  ["Pengumpulan",  "Lensa Okuler",  "Seragam",  "Kebersamaan",  "Bhineka"],
         correctIndex: 2
    },
    {
        question:  "KAPABEL >< . . . ",
         options:  ["Kredibel",  "Bodoh",  "Pandai",  "Rajin",  "Piawai"],
         correctIndex: 1
    },
    {
        question:  "KAPABEL >< . . . ",
         options:  ["Rajin",  "Piawai",  "Mampu",  "Bodoh",  "Pandai"],
         correctIndex: 3
    },
    {
        question:  "KAPABEL >< . . . ",
         options:  ["Piawai",  "Rajin",  "Pandai",  "Bodoh",  "Kredibel"],
         correctIndex: 3
    },
    {
        question:  "KASAR >< . . . ",
         options:  ["Tidak Rata",  "Gradasi",  "Lembut",  "Rata",  "Halus"],
         correctIndex: 2
    },
    {
        question:  "KASAR >< . . . ",
         options:  ["Gradasi",  "Kasap",  "Rata",  "Lembut",  "Halus"],
         correctIndex: 4
    },
    {
        question:  "KASUAL >< . . . ",
         options:  ["Santai",  "Tertib",  "Formal",  "Kantoran",  "Teratur"],
         correctIndex: 2
    },
    {
        question:  "KEBAL >< . . . ",
         options:  ["Mempan",  "Kuat",  "Ampuh",  "Anti",  "Lemah"],
         correctIndex: 0
    },
    {
        question:  "KEBIJAKAN >< . . . ",
         options:  ["Kebajikan",  "Keputusan",  "Kekacauan",  "Kerancauan",  "Kecerobohan"],
         correctIndex: 4
    },
    {
        question:  "KECIL >< . . . ",
         options:  ["Sedang",  "Gajah",  "Besar",  "Jumbo",  "Marak"],
         correctIndex: 2
    },
    {
        question:  "KENDALA >< . . . ",
         options:  ["Pendukung",  "Manifestasi",  "Bimmbingan",  "Hambatan",  "Tambahan"],
         correctIndex: 0
    },
    {
        question:  "KENDALA >< . . . ",
         options:  ["Kekerasan",  "Pendukung",  "Manifestasi",  "Bimbingan",  "Gejala"],
         correctIndex: 1
    },
    {
        question:  "KENDALA >< . . . ",
         options:  ["Manifestasi",  "Pendukung",  "Restriksi",  "Rintangan",  "Gejala"],
         correctIndex: 1
    },
    {
        question:  "KHAS >< . . . ",
         options:  ["Spesial",  "Eksklusif",  "Umum",  "Wakaf",  "Khusus"],
         correctIndex: 2
    },
    {
        question:  "KHAS >< . . . ",
         options:  ["Khusus",  "Wabul Khusus",  "Inklusif",  "Ekslusif",  "Umum"],
         correctIndex: 4
    },
    {
        question:  "KOHESI >< . . . ",
         options:  ["Keras",  "Padat",  "Akuades",  "Adhesi",  "Agresi"],
         correctIndex: 3
    },
    {
        question:  "KOLEKTIF >< . . . ",
         options:  ["Sendiri",  "Selektif",  "Personal",  "Komunal",  "Individual"],
         correctIndex: 2
    },
    {
        question:  "KONDUKTOR >< . . . ",
         options:  ["Pemisah",  "Penerima",  "Penyebar",  "Penghambat",  "Pengukur"],
         correctIndex: 3
    },
    {
        question:  "KONKAF >< . . . ",
         options:  ["Konveks",  "Optik",  "Lensa",  "Cekung",  "Konveksi"],
         correctIndex: 0
    },
    {
        question:  "KONKLUSI >< . . . ",
         options:  ["Uraian",  "Inferensi",  "Simpulan",  "Final",  "Deduksi"],
         correctIndex: 0
    },
    {
        question:  "KONKLUSIF >< . . . ",
         options:  ["Eksklusif",  "Persepsi",  "Proposisi",  "Elusif",  "Kolusi"],
         correctIndex: 2
    },
    {
        question:  "KONKRET >< . . . ",
         options:  ["Palsu",  "Nyata",  "Asing",  "Asli",  "Abstrak"],
         correctIndex: 1
    },
    {
        question:  "KONKRET >< . . . ",
         options:  ["Abstrak",  "Asli",  "Asing",  "Nyata",  "Palsu"],
         correctIndex: 0
    },
    {
        question:  "KONSERVASI >< . . . ",
         options:  ["Interpretasi",  "Perlindungan",  "Konservation",  "Kuno",  "Eksploitasi"],
         correctIndex: 4
    },
    {
        question:  "KONSERVASI >< . . . ",
         options:  ["Ekploitasi",  "Kuno",  "Konservatif",  "Perlindungan",  "Interpretasi"],
         correctIndex: 0
    },
    {
        question:  "KONSERVASI >< . . . ",
         options:  ["Interpretasi",  "Kuno",  "Perlindungan",  "Ekploitasi",  "Konservatori"],
         correctIndex: 3
    },
    {
        question:  "KONSTAN >< . . . ",
         options:  ["Konsisten",  "Situasional",  "Berbeda-Beda",  "Berubah-Ubah",  "Bervariasi"],
         correctIndex: 3
    },
    {
        question:  "KONSTAN >< . . . ",
         options:  ["Bertentangan",  "Berubah-Ubah",  "Stabil",  "Berbeda-Beda",  "Stagnan"],
         correctIndex: 1
    },
    {
        question:  "KONSTAN >< . . . ",
         options:  ["Bervariasi",  "Berubah-Ubah",  "Berbeda-Beda",  "Situasional",  "Konsisten"],
         correctIndex: 1
    },
    {
        question:  "KONSUMEN >< . . . ",
         options:  ["Pembagian",  "Pembeli",  "Penjual",  "Pencari",  "Penghasil"],
         correctIndex: 4
    },
    {
        question:  "KONTINU >< . . . ",
         options:  ["Terus Menerus",  "Terbagi",  "Terputus",  "Terangkat",  "Terbagi-Bagi"],
         correctIndex: 2
    },
    {
        question:  "KONTRA >< . . . ",
         options:  ["Lawan",  "Kontradiksi",  "Setuju",  "Kontraksi",  "Pro-Kontra"],
         correctIndex: 2
    },
    {
        question:  "KONVEKS >< . . . ",
         options:  ["Lensa",  "Optik",  "Kerucut",  "Cekung",  "Cembung"],
         correctIndex: 3
    },
    {
        question:  "KONVEKS >< . . . ",
         options:  ["Cembung",  "Kompleks",  "Sederhana",  "Cekung",  "Planparalel"],
         correctIndex: 3
    },
    {
        question:  "KRETIN >< . . . ",
         options:  ["Gigan",  "Kulit",  "Bahaya",  "Kerdil",  "Majalah"],
         correctIndex: 3
    },
    {
        question:  "KRETIN >< . . . ",
         options:  ["Majalah",  "Kerdil",  "Bahaya",  "Kulit",  "Gigan"],
         correctIndex: 4
    },
    {
        question:  "KRUSIAL >< . . . ",
         options:  ["Makna",  "Sepele",  "Berarti",  "Berharga",  "Penting"],
         correctIndex: 1
    },
    {
        question:  "KRUSIAL >< . . . ",
         options:  ["Asli",  "Berharga",  "Sepele",  "Berarti",  "Penting"],
         correctIndex: 2
    },
    {
        question:  "KRUSIAL >< . . . ",
         options:  ["Penting",  "Berharga",  "Berarti",  "Sepele",  "Makna"],
         correctIndex: 3
    },
    {
        question:  "KUALITAS >< . . . ",
         options:  ["Jumlah",  "Kapasitas",  "Hasil",  "Ciri",  "Kuantitas"],
         correctIndex: 4
    },
    {
        question:  "KUANTITAS >< . . . ",
         options:  ["Sedikit",  "Hasil",  "Kapasitas",  "Kualitas",  "Jumlah"],
         correctIndex: 3
    },
    {
        question:  "KUANTITAS >< . . . ",
         options:  ["Jumlah",  "Kualitas",  "Kapasitas",  "Hasil",  "Sedikit"],
         correctIndex: 1
    },
    {
        question:  "KUNO >< . . . ",
         options:  ["Mutakhir",  "Model baru",  "Asli",  "Sederhana",  "Modern"],
         correctIndex: 4
    },
    {
        question:  "LABIL >< . . . ",
         options:  ["Power",  "Pindah",  "Stabil",  "Ubah",  "Aktif"],
         correctIndex: 2
    },
    {
        question:  "LECO >< . . . ",
         options:  ["Raksasa",  "Mungil",  "Kerdil",  "Cebol",  "Kecil"],
         correctIndex: 2
    },
    {
        question:  "LECO >< . . . ",
         options:  ["Cebol",  "Kate",  "Mungil",  "Kerdil",  "Raksasa"],
         correctIndex: 4
    },
    {
        question:  "LECO >< . . . ",
         options:  ["Raksasa",  "Mungil",  "Kerdil",  "Cebol",  "Kecil"],
         correctIndex: 0
    },
    {
        question:  "LEGISLATIF >< . . . ",
         options:  ["Yudikatif",  "Eksekutif",  "Eksekusi",  "Permusyawaratan",  "Implementatif"],
         correctIndex: 1
    },
    {
        question:  "LESTARI >< . . . ",
         options:  ["Sementara",  "Langgeng",  "Hampa",  "Sunyi",  "Lengang"],
         correctIndex: 0
    },
    {
        question:  "LIBERAL >< . . . ",
         options:  ["Demokrasi",  "Pembatasan",  "Terbuka",  "Tertutup",  "Bebas"],
         correctIndex: 1
    },
    {
        question:  "LONGGAR >< . . . ",
         options:  ["Disiplin",  "Kecil",  "Sempit",  "Pas",  "Tegas"],
         correctIndex: 4
    },
    {
        question:  "LOYAL >< . . . ",
         options:  ["Sombong",  "Bocor Mulut",  "Pindah",  "Tidak Setia",  "Teguh"],
         correctIndex: 3
    },
    {
        question:  "MAJAL >< . . . ",
         options:  ["Cair",  "Wangi",  "Anyir",  "Asam",  "Tajam"],
         correctIndex: 4
    },
    {
        question:  "MAJIR >< . . . ",
         options:  ["Takut",  "Berani",  "Maju",  "Mundur",  "Subur"],
         correctIndex: 4
    },
    {
        question:  "MAKAR >< . . . ",
         options:  ["Boleh",  "Menutupi",  "Mengeluh",  "Jujur",  "Muslihat"],
         correctIndex: 3
    },
    {
        question:  "MANDIRI >< . . . ",
         options:  ["Dependen",  "Kohesi",  "Korelasi",  "Interaksi",  "Intimasi"],
         correctIndex: 0
    },
    {
        question:  "MANDIRI >< . . . ",
         options:  ["Swasembada",  "Mengikuti",  "Bergantung",  "Roboh",  "Berdikari"],
         correctIndex: 2
    },
    {
        question:  "MANDIRI >< . . . ",
         options:  ["Senang",  "Tenggang rasa",  "Memihak",  "Bergantung",  "Antipati"],
         correctIndex: 3
    },
    {
        question:  "MAPAN >< . . . ",
         options:  ["Berkurang",  "Melemah",  "Menyusut",  "Goyah",  "Menurun"],
         correctIndex: 3
    },
    {
        question:  "MATI >< . . . ",
         options:  ["Hidup",  "Hayati",  "Natural",  "Botani",  "Fana"],
         correctIndex: 1
    },
    {
        question:  "MAYA >< . . . ",
         options:  ["Nyata",  "Ilusi",  "Fatamorgana",  "Khayal",  "Gaib"],
         correctIndex: 0
    },
    {
        question:  "MAYA >< . . . ",
         options:  ["Bayangan",  "Tiruan",  "Fana",  "Nyata",  "Jelas"],
         correctIndex: 3
    },
    {
        question:  "MAYA >< . . . ",
         options:  ["Khayal",  "Jelas",  "Modern",  "Ilusi",  "Nyata"],
         correctIndex: 4
    },
    {
        question:  "MAYOR >< . . . ",
         options:  ["Besar",  "Makro",  "Minim",  "Minor",  "Junior"],
         correctIndex: 3
    },
    {
        question:  "MELESAT >< . . . ",
         options:  ["Akurat",  "Pasrah",  "Tidak Teratur",  "Sesukanya",  "Sembarangan"],
         correctIndex: 0
    },
    {
        question:  "MEMBUKA >< . . . ",
         options:  ["Menyingkap",  "Mengatakan",  "Melukiskan",  "Menutup",  "Menceritakan"],
         correctIndex: 3
    },
    {
        question:  "MIKRO >< . . . ",
         options:  ["Mayor",  "Junior",  "Makro",  "Minim",  "Minor"],
         correctIndex: 2
    },
    {
        question:  "MODERN >< . . . ",
         options:  ["Tradisional",  "Konservatif",  "Sekuler",  "Kolot",  "Pluralis"],
         correctIndex: 0
    },
    {
        question:  "MONOLOG >< . . . ",
         options:  ["Ceramah",  "Dialog",  "Lektur",  "Pidato",  "Orasi"],
         correctIndex: 1
    },
    {
        question:  "MONOTON",
         options:  ["Bertukaran",  "Jenuh",  "Berganti-Ganti",  "Diam",  "Terus-Menerus"],
         correctIndex: 2
    },
    {
        question:  "MONOTON >< . . . ",
         options:  ["Terus Menerus",  "Berselang-Seling",  "Berubah-Ubah",  "Berulang-Ulang",  "Bergerak-Gerak"],
         correctIndex: 2
    },
    {
        question:  "MONOTON >< . . . ",
         options:  ["Terus-Menerus",  "Diam",  "Berganti-Ganti",  "Jenuh",  "Tetap"],
         correctIndex: 2
    },
    {
        question:  "MUDA >< . . . ",
         options:  ["Wreda",  "Pintar",  "Mujur",  "Lajang",  "Pilihan"],
         correctIndex: 0
    },
    {
        question:  "MUDA >< . . . ",
         options:  ["Pintar",  "Pilihan",  "Wreda",  "Lajang",  "Mujur"],
         correctIndex: 2
    },
    {
        question:  "MUFAKAT >< . . . ",
         options:  ["Akur",  "Setuju",  "Rapat",  "Tidak setuju",  "Pertemuan"],
         correctIndex: 3
    },
    {
        question:  "MULTI >< . . . ",
         options:  ["Jumlah",  "Tidak Ada",  "Banyak",  "Beberapa",  "Tunggal"],
         correctIndex: 4
    },
    {
        question:  "MULTI >< . . . ",
         options:  ["Tunggal",  "Beberapa",  "Banyak",  "Tidak Ada",  "Jumlah"],
         correctIndex: 0
    },
    {
        question:  "MUSKIL >< . . . ",
         options:  ["Mustahil",  "Mungkin",  "Jahil",  "Hal",  "Andil"],
         correctIndex: 1
    },
    {
        question:  "MUSLIHAT >< . . . ",
         options:  ["Sombong",  "Brutal",  "Jujur",  "Berani",  "Parah"],
         correctIndex: 2
    },
    {
        question:  "NAAS >< . . . ",
         options:  ["Sehat",  "Baik",  "Rugi",  "Celaka",  "Untung"],
         correctIndex: 1
    },
    {
        question:  "NAAS >< . . . ",
         options:  ["Baik",  "Celaka",  "Lokasi",  "Rugi",  "Untung"],
         correctIndex: 4
    },
    {
        question:  "NADIR >< . . . ",
         options:  ["Biasa",  "Ada",  "Pindah",  "Tampak",  "Masuk"],
         correctIndex: 0
    },
    {
        question:  "NAFSI >< . . . ",
         options:  ["Sendiri",  "Kelompok",  "Calyx",  "Egois",  "Angkuh"],
         correctIndex: 1
    },
    {
        question:  "NAHAS >< . . . ",
         options:  ["Naib",  "Celaka",  "Nadir",  "Takdir",  "Mujur"],
         correctIndex: 4
    },
    {
        question:  "NEKAT >< . . . ",
         options:  ["Berani",  "Motif",  "Maksud",  "Coba-coba",  "Takut"],
         correctIndex: 3
    },
    {
        question:  "NETRAL >< . . . ",
         options:  ["Terpaku",  "Berpihak",  "Kolusi",  "Bermusuhan",  "Bergandengan"],
         correctIndex: 1
    },
    {
        question:  "NISBI >< . . . ",
         options:  ["Mutlak",  "Maya",  "Stabil",  "Abstrak",  "Dinamis"],
         correctIndex: 0
    },
    {
        question:  "NOMAD >< . . . ",
         options:  ["Sementara",  "Berpindah",  "Acak",  "Sementara",  "Menetap"],
         correctIndex: 4
    },
    {
        question:  "NOMADIK >< . . . ",
         options:  ["Tak Teratur",  "Anomali",  "Sesuai Warna",  "Mapan",  "Menetap"],
         correctIndex: 4
    },
    {
        question:  "NORMAL >< . . . ",
         options:  ["Benar",  "Baik",  "Jujur",  "Cacat",  "Tepat"],
         correctIndex: 3
    },
    {
        question:  "NYATA >< . . . ",
         options:  ["Maya",  "Ilusi",  "Fatamorgana",  "Khayal",  "Gaib"],
         correctIndex: 0
    },
    {
        question:  "OFENSIF >< . . . ",
         options:  ["Menyerang",  "Pemanas",  "Official",  "Agresif",  "Pertahanan"],
         correctIndex: 4
    },
    {
        question:  "OPAS >< . . . ",
         options:  ["Porter",  "Komandan",  "Pesuruh",  "Pemimpin",  "Prajurit"],
         correctIndex: 3
    },
    {
        question:  "OUT PUT >< . . . ",
         options:  ["Pemasukan",  "Rencana",  "Pengeluaran",  "Rancangan",  "Pelaksanaan"],
         correctIndex: 0
    },
    {
        question:  "PALSU >< . . . ",
         options:  ["Masal",  "Asli",  "Tetirori",  "Bohong",  "Kusut"],
         correctIndex: 1
    },
    {
        question:  "PANGKAL >< . . . ",
         options:  ["Asal Muasal",  "Akhir",  "Permulaan",  "Awal",  "Pokok"],
         correctIndex: 1
    },
    {
        question:  "PANJANG LEBAR >< . . . ",
         options:  ["Bertele-tele",  "Ke sana â€“ ke mari",  "Tepat Sasaran",  "Rumit",  "Ringkas"],
         correctIndex: 4
    },
    {
        question:  "PARTIKELIR >< . . . ",
         options:  ["Dinas",  "Untuk Umum",  "Swasta",  "Milik Bersama",  "Negeri"],
         correctIndex: 1
    },
    {
        question:  "PASCA >< . . . ",
         options:  ["Sesudah",  "Sebelum",  "Kemudian",  "Sedang",  "Sekerang"],
         correctIndex: 1
    },
    {
        question:  "PASCA >< . . . ",
         options:  ["Setelah",  "Terlambat",  "Sebelum",  "Sesudah",  "Sekarang"],
         correctIndex: 2
    },
    {
        question:  "PASCA >< . . . ",
         options:  ["Sesudah",  "Awal",  "Purna",  "Akhir",  "Pra"],
         correctIndex: 4
    },
    {
        question:  "PASCA >< . . . ",
         options:  ["Awal",  "Sebelum",  "Mulai",  "Sesudah",  "Sekarang"],
         correctIndex: 1
    },
    {
        question:  "PASTI >< . . . ",
         options:  ["Pokok",  "Tetap",  "Spekulasi",  "Kebetulan",  "Nasib"],
         correctIndex: 2
    },
    {
        question:  "PEJAL >< . . . ",
         options:  ["Berongga",  "Masif",  "Kimpal",  "Jenuh",  "Padat"],
         correctIndex: 0
    },
    {
        question:  "PEJAL >< . . . ",
         options:  ["Padat",  "Jenuh",  "Kimpal",  "Masif",  "Berongga"],
         correctIndex: 4
    },
    {
        question:  "PEKAT >< . . . ",
         options:  ["Cair",  "Kental",  "Lemah",  "Keras",  "Likat"],
         correctIndex: 0
    },
    {
        question:  "PEMUPUKAN >< . . . ",
         options:  ["Rehabilitasi",  "Reboisasi",  "Penggundulan",  "Defertilisasi",  "Renovasi"],
         correctIndex: 3
    },
    {
        question:  "PENTING >< . . . ",
         options:  ["Keras",  "Utama",  "Tinggi",  "Hidup",  "Remeh"],
         correctIndex: 4
    },
    {
        question:  "PERIL >< . . . ",
         options:  ["Hinaan",  "Ejekan",  "Pujian",  "Kebutuhan",  "Ketidakbutuhan"],
         correctIndex: 2
    },
    {
        question:  "PERIL >< . . . ",
         options:  ["Ketidakbutuhan",  "Kebutuhan",  "Pujian",  "Ejekan",  "Hinaan"],
         correctIndex: 2
    },
    {
        question:  "PERINTIS >< . . . ",
         options:  ["Pengawal",  "Penemu",  "Pewaris",  "Pendahulu",  "Pionir"],
         correctIndex: 2
    },
    {
        question:  "PERINTIS >< . . . ",
         options:  ["Pioner",  "Pembawa",  "Generasi",  "Pewaris",  "Pendahulu"],
         correctIndex: 3
    },
    {
        question:  "PERINTIS >< . . . ",
         options:  ["Penerus",  "Pewaris",  "Pelopor",  "Pencipta",  "Pengikut"],
         correctIndex: 0
    },
    {
        question:  "PERLOP >< . . . ",
         options:  ["Absen",  "Datang",  "Pulang",  "Masuk",  "Kerja"],
         correctIndex: 4
    },
    {
        question:  "PERLOP >< . . . ",
         options:  ["Cuti",  "Masuk",  "Kerja",  "Datang",  "Absen"],
         correctIndex: 2
    },
    {
        question:  "PERSEKUTUAN >< . . . ",
         options:  ["Perseroan",  "Laga",  "Liga",  "Lembaga",  "Perseorangan"],
         correctIndex: 4
    },
    {
        question:  "PERTEMUAN >< . . . ",
         options:  ["Perceraian",  "Doâ€™A Bersama",  "Perpisahan",  "Rapat",  "Musyawarah"],
         correctIndex: 2
    },
    {
        question:  "POSITIF >< . . . ",
         options:  ["Berkurang",  "Pasti",  "Ragu-Ragu",  "Bulat",  "Tegas"],
         correctIndex: 0
    },
    {
        question:  "PRAKTIS >< . . . ",
         options:  ["Terapan",  "Tempat Praktik",  "Berdasarkan Praktik",  "Teoretis",  "Marah"],
         correctIndex: 3
    },
    {
        question:  "PREMAN >< . . . ",
         options:  ["Pengawal",  "Sendiri",  "Dinas",  "Mafia",  "Partikelir"],
         correctIndex: 2
    },
    {
        question:  "PREMATUR >< . . . ",
         options:  ["Dini",  "Kecil",  "Besar",  "Terlambat",  "Tercepat"],
         correctIndex: 3
    },
    {
        question:  "PRESENSI >< . . . ",
         options:  ["Valensi",  "Resensi",  "Kehadiran",  "Mangkir",  "Esensi"],
         correctIndex: 3
    },
    {
        question:  "PROFIT >< . . . ",
         options:  ["Penghambatan",  "Keterampilan",  "Gambaran",  "Kerugian",  "Keuntungan"],
         correctIndex: 3
    },
    {
        question:  "PROMINEN >< . . . ",
         options:  ["Biasa",  "Konsisten",  "Tak Setuju",  "Perintis",  "Konsekuen"],
         correctIndex: 0
    },
    {
        question:  "PROMINEN >< . . . ",
         options:  ["Kelas Elit",  "Utama",  "Terkemuka",  "Tertinggi",  "Biasa"],
         correctIndex: 4
    },
    {
        question:  "PROMINEN >< . . . ",
         options:  ["Utama",  "Tertinggi",  "Terkemuka",  "Kelas Elit",  "Biasa"],
         correctIndex: 4
    },
    {
        question:  "PROPOSISI >< . . . ",
         options:  ["Posisi",  "Persepsi",  "Tingkat",  "Reaksi",  "Konklusi"],
         correctIndex: 4
    },
    {
        question:  "PROTAGONIS >< . . . ",
         options:  ["Seimbang",  "Antagonis",  "Sepiha",  "Anti",  "Jahat"],
         correctIndex: 1
    },
    {
        question:  "PROYEKSI >< . . . ",
         options:  ["Fiksasi",  "Pantulan",  "Introjeksi",  "Penekanan",  "Ramalan"],
         correctIndex: 2
    },
    {
        question:  "RAWAN >< . . . ",
         options:  ["Rentan",  "Aman",  "Nyaman",  "Awam",  "Lazim"],
         correctIndex: 1
    },
    {
        question:  "RAWAN >< . . . ",
         options:  ["Lazim",  "Awam",  "Rahasia",  "Aman",  "Nyaman"],
         correctIndex: 3
    },
    {
        question:  "REAKSI >< . . . ",
         options:  ["Tenaga",  "Daya Tolak",  "Daya Tarik",  "Penggabungan",  "Penarikan"],
         correctIndex: 3
    },
    {
        question:  "REAKSI >< . . . ",
         options:  ["Daya Tolak",  "Penggabungan",  "Penarikan",  "Daya Tarik",  "Skema"],
         correctIndex: 0
    },
    {
        question:  "REMISI >< . . . ",
         options:  ["Pengurangan",  "Keringanan",  "Amnesti",  "Penambahan Hukuman",  "Kehilangan"],
         correctIndex: 3
    },
    {
        question:  "REMISI >< . . . ",
         options:  ["Inkripsi",  "Perubahan",  "Persetujuan",  "Penambahan",  "Pengurangan"],
         correctIndex: 2
    },
    {
        question:  "REMISI >< . . . ",
         options:  ["Penambahan hukuman",  "Pengurangan",  "Keringanan",  "Amnesti",  "Kehilangan"],
         correctIndex: 0
    },
    {
        question:  "RESPEK >< . . . ",
         options:  ["Merendahkan",  "Rasa Hormat",  "Simpati",  "Penghargaan",  "Salut"],
         correctIndex: 0
    },
    {
        question:  "REVOLUSI >< . . . ",
         options:  ["Evolusi",  "Reformasi",  "Ekstrim",  "Peredaran",  "Progresif"],
         correctIndex: 0
    },
    {
        question:  "RIGID >< . . . ",
         options:  ["Fleksibel",  "Negosiasi",  "Keras",  "Kaku",  "Standar"],
         correctIndex: 0
    },
    {
        question:  "RITEL >< . . . ",
         options:  ["Kios",  "Eceran",  "Grosir",  "Cabang",  "Pelayanan"],
         correctIndex: 2
    },
    {
        question:  "RIVALITAS >< . . . ",
         options:  ["Persaingan",  "Persengketaan",  "Persesuaian",  "Keributan",  "Caci maki"],
         correctIndex: 2
    },
    {
        question:  "SAHIH >< . . . ",
         options:  ["Sah",  "Cocok",  "Valid",  "Serasi",  "Tidak Sah"],
         correctIndex: 4
    },
    {
        question:  "SANGKAL >< . . . ",
         options:  ["Bohong",  "Sanggah",  "Berkilah",  "Menolak",  "Mengakui"],
         correctIndex: 4
    },
    {
        question:  "SANGKAL >< . . . ",
         options:  ["Mengakui",  "Menolak",  "Berkilah",  "Sanggah",  "Bohong"],
         correctIndex: 0
    },
    {
        question:  "SEKARANG >< . . . ",
         options:  ["Esok",  "Kemarin",  "Lusa",  "Kapan-Kapan",  "Suatu Masa"],
         correctIndex: 0
    },
    {
        question:  "SEKULER >< . . . ",
         options:  ["Keagamaan",  "Duniawi",  "Tradisional",  "Rohaniah",  "Modern"],
         correctIndex: 0
    },
    {
        question:  "SEKULER >< . . . ",
         options:  ["Keagamaan",  "Anulir",  "Rohaniah",  "Duniawi",  "Ilmiah"],
         correctIndex: 0
    },
    {
        question:  "SEKULER >< . . . ",
         options:  ["Keagamaan",  "Serikat",  "Pemberian",  "Duniawi",  "Kedua"],
         correctIndex: 0
    },
    {
        question:  "SEMACAM >< . . . ",
         options:  ["Cuaca",  "Penuh",  "Beraneka",  "Lima macam",  "Lima gambar"],
         correctIndex: 2
    },
    {
        question:  "SEMPIT >< . . . ",
         options:  ["Sesak",  "Ketat",  "Habitat",  "Longgar",  "Minim"],
         correctIndex: 3
    },
    {
        question:  "SHAHIH >< . . . ",
         options:  ["Sempurna",  "Canggih",  "Cacat",  "Tepat",  "Benar"],
         correctIndex: 2
    },
    {
        question:  "SIAU >< . . . ",
         options:  ["Mendidih",  "Memuai",  "Membeku",  "Mencair",  "Memanas"],
         correctIndex: 0
    },
    {
        question:  "SIAU >< . . . ",
         options:  ["Memuai",  "Membeku",  "Mendidih",  "Memanas",  "Menguap"],
         correctIndex: 2
    },
    {
        question:  "SINKRON >< . . . ",
         options:  ["Serasi",  "Sesuai",  "Selaras",  "Harmonis",  "Sumbang"],
         correctIndex: 0
    },
    {
        question:  "SKEPTIS >< . . . ",
         options:  ["Jujur",  "Yakin",  "Ragu",  "Curiga",  "Malu"],
         correctIndex: 1
    },
    {
        question:  "SKEPTIS >< . . . ",
         options:  ["Optimis",  "Ahli",  "Rancangan",  "Prasangka Buruk",  "Ragu-Ragu"],
         correctIndex: 0
    },
    {
        question:  "SKEPTIS >< . . . ",
         options:  ["Ragu-Ragu",  "Prasangka Buruk",  "Rancangan",  "Ahli",  "Optimis"],
         correctIndex: 4
    },
    {
        question:  "SPORADIS >< . . . ",
         options:  ["Jarang",  "Kerap",  "Laten",  "Seperti",  "Berhenti"],
         correctIndex: 1
    },
    {
        question:  "STABIL >< . . . ",
         options:  ["Buruk",  "Permanen",  "Insidentil",  "Labil",  "Kuat"],
         correctIndex: 3
    },
    {
        question:  "STABIL >< . . . ",
         options:  ["Rontok",  "Hancur",  "Runtuh",  "Rusuh",  "Labil"],
         correctIndex: 0
    },
    {
        question:  "STABIL >< . . . ",
         options:  ["Labil",  "Rusuh",  "Runtuh",  "Hancur",  "Rontok"],
         correctIndex: 0
    },
    {
        question:  "SUFIKS >< . . . ",
         options:  ["Akhiran",  "Penutup",  "Prefiks",  "Konklusi",  "Infiks"],
         correctIndex: 2
    },
    {
        question:  "SUMBANG >< . . . ",
         options:  ["Kokoh",  "Merdu",  "Mirip",  "Laras",  "Imbang"],
         correctIndex: 1
    },
    {
        question:  "SUMBANG >< . . . ",
         options:  ["Suara",  "Cangkokan",  "Sesuai",  "Karaoke",  "Setem"],
         correctIndex: 0
    },
    {
        question:  "TAKZIM >< . . . ",
         options:  ["Lazim",  "Yakin",  "Patuh",  "Hormat",  "Acuh"],
         correctIndex: 4
    },
    {
        question:  "TANGIS >< . . . ",
         options:  ["Bahagia",  "Senyum",  "Tawa",  "Gembira",  "Sedih"],
         correctIndex: 2
    },
    {
        question:  "TEKS >< . . . ",
         options:  ["Naskah",  "Konteks",  "Tekstil",  "Tekstur",  "Lateks"],
         correctIndex: 1
    },
    {
        question:  "TENGGELAM >< . . . ",
         options:  ["Terombang-Ambing",  "Melayang-Layang",  "Tak Tentu",  "Terapung",  "Terkatung-Katung"],
         correctIndex: 3
    },
    {
        question:  "TENTATIF >< . . . ",
         options:  ["Tepat",  "Jelas",  "Pasti",  "Langsung",  "Relatif"],
         correctIndex: 2
    },
    {
        question:  "TERKATUNG >< . . . ",
         options:  ["Melayang",  "Pasti",  "Ombak",  "Terperosok",  "Terbenam"],
         correctIndex: 4
    },
    {
        question:  "TERPUTUS >< . . . ",
         options:  ["Tersobek",  "Terserak",  "Kontinu",  "Termakan",  "Terus"],
         correctIndex: 2
    },
    {
        question:  "TESIS >< . . . ",
         options:  ["Hipotesis",  "Epitesis",  "Sintetis",  "Antitesis",  "Sintaksis"],
         correctIndex: 3
    },
    {
        question:  "TETIRAN >< . . . ",
         options:  ["Petir",  "Asli",  "Amatiran",  "Imitasi",  "Palsu"],
         correctIndex: 1
    },
    {
        question:  "TIDAK BERDAYA >< . . . ",
         options:  ["Invalid",  "Abnormal",  "Anomali",  "Disfungsi",  "Sinergi"],
         correctIndex: 4
    },
    {
        question:  "TIDAK PEDULI >< . . . ",
         options:  ["Tegas",  "Berani",  "Ramah",  "Empati",  "Kritis"],
         correctIndex: 3
    },
    {
        question:  "TIMPANG >< . . . ",
         options:  ["Pincang",  "Seimbang",  "Benar",  "Sama",  "Sempurna"],
         correctIndex: 1
    },
    {
        question:  "TINGGI >< . . . ",
         options:  ["Bawah",  "Kerdil",  "Kecil",  "Rendah",  "Pendek"],
         correctIndex: 3
    },
    {
        question:  "TIRUAN >< . . . ",
         options:  ["Orisinil",  "Asli",  "Tulen",  "Bukan tiruan",  "Murni"],
         correctIndex: 0
    },
    {
        question:  "TOTAL >< . . . ",
         options:  ["Sebagian",  "Jumlah",  "Keseluruhan",  "Sedikit Demi Sedikit",  "Hasil Penjumlahan"],
         correctIndex: 0
    },
    {
        question:  "ULTIMA >< . . . ",
         options:  ["Kesan",  "Akhir",  "Final",  "Awal",  "Biasa"],
         correctIndex: 3
    },
    {
        question:  "UNIK >< . . . ",
         options:  ["Lain Dari Pada Yang Lain",  "Sama",  "Berbeda",  "Tidak Lucu",  "Khusus"],
         correctIndex: 1
    },
    {
        question:  "UNIVERSAL >< . . . ",
         options:  ["Global",  "Mondial",  "Partial",  "Primordial",  "Tradisional"],
         correctIndex: 2
    },
    {
        question:  "UNIVERSAL >< . . . ",
         options:  ["Menyeluruh",  "Khusus",  "Khas",  "Umum",  "Parsial"],
         correctIndex: 1
    },
    {
        question:  "UNIVERSAL >< . . . ",
         options:  ["Parsial",  "Separatis",  "Lateral",  "Mondial",  "Fakultatif"],
         correctIndex: 0
    },
    {
        question:  "USANG >< . . . ",
         options:  ["Rusak",  "Baru",  "Kurang",  "Pelan",  "Keras"],
         correctIndex: 1
    },
    {
        question:  "VIRULEN >< . . . ",
         options:  ["Kejam",  "Bakteri",  "Baik",  "Jahat",  "Virus"],
         correctIndex: 2
    },
    {
        question:  "VIRULEN >< . . . ",
         options:  ["Busuk",  "Jahat",  "Sesuai",  "Virus",  "Baik"],
         correctIndex: 4
    },
    {
        question:  "VOKAL >< . . . ",
         options:  ["Grup",  "Bivokal",  "Penyanyi",  "Suara",  "Konsonan"],
         correctIndex: 4
    },
    {
        question:  "VOKAL >< . . . ",
         options:  ["Patuh",  "Oval",  "Pendiam",  "Konsonan",  "Fokus"],
         correctIndex: 3
    },
    {
        question:  "YAKIN >< . . . ",
         options:  ["Jujur",  "Skeptis",  "Malu",  "Ragu",  "Curiga"],
         correctIndex: 1
    }
];