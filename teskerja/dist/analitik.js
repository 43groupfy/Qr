const questions = [
        {
          question: "Lima orang mahasiswa telah selesai menempuh ujian akhir semester. Nilai yang diperoleh Mira lebih tinggi daripada Puput, Rini mendapat nilai tertinggi. Nilai Yeni lebih tinggi daripada Mira. Fulan mendapat nilai lebih rendah dibandingkan Mira, tetapi lebih tinggi dibanding Puput. Bagaimanakah urutan kelima mahasiswa ini bila di urutkan mulai dari nilai yang paling rendah?",
          options: ["Fulan, Puput, Mira, Yeni, Rini", "Puput, Fulan, Yeni, Rini, Mira", "Puput, Fulan, Yeni, Mira, Rini", "Puput, Fulan, Mira, Yeni, Rini"],
          correctIndex: 3
        },
        {
          question: "Susan adiknya Jim, Peter kakaknya Susan dan lebih muda dari Jim. Siapa yang paling muda?",
          options: ["Jim", "Susan", "Peter", "tidak dapat disimpulkan"],
          correctIndex: 1
        },
        {
          question: "Tiga tim pendaki gunung harus dibentuk dengan masing-masing tim terdiri dari tiga orang. A harus berada dalam satu tim dengan D, B tidak boleh setim dengan G atau C, C tidak boleh dipisahkan dengan I, E dan H harus berada dalam tim yang sama dengan B, sedangkan F harus dipisahkan dengan A untuk tiap tim yang dapat dibentuk adalah...",
          options: ["(A, D, G) – (B, I, H) – (C, E, F)", "(A, B, G) – (D, E, H) – (C, I, F)", "(A, I, F) – (B, E, N) – (C, D, F)", "(A, D, I) – (B, E, H) – (C, G, F)"],
          correctIndex: 1
        },
        {
          question: "Disebabkan menghisap rokok dan hanya untuk kepuasaan yang sedang-sedang saja, tidak seorang pun yang pernah rusak kesehatannya. Nikotin adalah suatu penyebab gangguan ringan. Sedikit sekali orang yang biasa merokok berhasil untuk merokok secara berlebihan-lebihan. Karena itu :",
          options: ["Omong kosong untuk berpendapat bahwa merokok itu merusak kesehatan", "Merokok adalah merusak kesehatan", "Pernyataan a dan b kedua-duanya salah", "Pernyataan a dan b kedua-duanya benar"],
          correctIndex: 1
        },
        {
          question: "Dalam satu kelas ada sejumlah anak yang menyukai olahraga. Lisa menyukai olahraga bola Volley dan tidak menyukai atletik, Dino menyukai olahraga bola basket dan volley. Perdi menyukai semua olahraga kecuali volley. Susi menyukai olahraga tanpa bola. Sedangkan Gino menyukai olahraga dengan bola. Mereka yang menyukai olahraga volley adalah...",
          options: ["Dino, Gina, dan Lisa", "Susi, Gino, dan Dino", "Pardi, Gino, dan Lisa", "Dino, Susi, dan Lisa"],
          correctIndex: 0
        },
        {
          question: "Kesebelasan Liverpool menang atas kesebelasan Aston Villa dengan skor 3-0. Kesebelasan Arsenal kalah atas kesebelasan Manchester United dengan skor 1-2. Kesebelasan Manchester United menang atas kesebelasan Liverpool dengan skor 2-0. Kesebelasan mana yang menjuarai pertandingan ini?",
          options: ["Liverpool", "Arsenal", "Manchester United", "Aston Villa"],
          correctIndex: 2
        },
        {
          question: "X lebih tua dari N, E lebih muda dari A, T lebih muda dari N;X lebih muda dari E, N lebih tua dari T maka yang termuda adalah ...",
          options: ["N", "E", "X", "T"],
          correctIndex: 3
        },
        {
          question: "Seorang wiraniaga harus memasarkan barang dagangan di lima kota H, I, J, K, dan, L masing-masing sekali. Jadwal kunjungan kelima kota tadi sedemikian rupa sehingga:<br>Kota H harus dikunjungi sesudah Kota-Kota J dan K.<br>Kota L harus dikunjungi sesudah kunjungan ke kota J dan sebelumnya ke kota K.<br> Urutan kota yang harus dikunjungi wiraniaga tersebut adalah .....",
          options: ["K, J, L, I dan H", "I, H, K, J dan L", "J, L, K, H dan I", "L, J, K, H dan I"],
          correctIndex: 2
        },
        {
          question: "Prestasi belajar Budi lebih tinggi dari Agit dan lebih rendah dari Winar. Prestasi belajar Sinta lebih rendah dari Budi, tetapi lebih tinggi dari Agit, sedangkan prestasi belajar Dono lebih tinggi dari Agit dan Sinta. Apabila dipilih dari tiga orang yang memiliki prestasi terbaik yang dipilih adalah...",
          options: ["Budi, Winar, dan Sinta", "Budi, Dono, dan Sinta", "Winar, Sinta, Agit", "Dono, Budi, dan Winar"],
          correctIndex: 3
        },
        {
          question: "Michael dan Joni mendengarkan musik. Yunis dan Michael hobi membaca. Siapa yang sedang membaca sambil mendengarkan musik?",
          options: ["Yunis", "Michael", "Joni", "Yunis dan Michael"],
          correctIndex: 1
        },
        {
          question: "A adalah seorang anak dari pasangan suami isteri B dengan C. E adalah anak dari pasangan D dengan B. Hubungan antara A dengan E disebut:",
          options: ["Saudara sepupu", "Saudara misan", "Saudara ipar", "a, b, c, salah"],
          correctIndex: 0
        },
        {
          question: "Jarak antara kota A dan B adalah dua kali jarak antara kota C dan D. Kota E terletak di tengah-tengah antara kota C dan D. Selanjutnya diketahui bahwa jarak kota C ke kota A sama dengan jarak kota C ke kota sama dengan jarak kota D ke kota B, yaitu setengah jarak kota A ke kota E. Dua kota di bawah ini yang jaraknya paling jauh adalah...",
          options: ["Kota A dan B", "Kota B dan E", "Kota A dan E", "Kota B dan D"],
          correctIndex: 0
        },
        {
          question: "Ketika Ayah pulang dari kios penjahit, sepatunya berlumpur dan topinya banyak kena tepung. Tempat-tempat yang mungkin dilaluinya adalah Kampung Iping; Lapangan Badak; Taman Muda, dan Jalan Sumbing. Dia tidak mempunyai cukup waktu untuk mengunjungi lebih dari satu daerah dari daerah-daerah itu. Di jalan-jalan sama sekali tidak ada lumpur, kecuali di jalan-jalan yang aspalnya dibongkar untuk diperbaiki. Kampung Iping didiami oleh penjahit, demikian pula Jalan Sumbing, dan Taman Muda. Yang ada perusahaan roti adalah Jalan Sumbing, lapangan Badak, dan Kampung Iping. Saya tahu bahwa jalanan di Kampung Iping tidak sedang diperbaiki, tetapi mungkin sekali ada perbaikan jalan di tempat-tempat lain. Jalan manakah Ayah pulang ke rumah ?",
          options: ["Kampung Iping", "Jalan Sumbing", "Lapangan Badak", "Taman Muda"],
          correctIndex: 1
        },
        {
          question: "Daryanti bangun kesiangan. Oleh karena itu , ia menyadari akan terlambat masuk sekolah. Maka, ia lari sekenceng mungkin dan tidak melihat ada lubang, lalu kakinya patah. Ia dibawa ke rumah sakit dan selama dirawat di rumah sakit, ia dijenguk kawan-kawannya yang ingin tahu mengapa Daryanti bangun sedemikian terlambat. Kesimpulan apakah yang tepat dari cerita di atas?",
          options: ["Karena Daryanti tidak makan pagi, ia mengalami patah kaki.", "Kawan-kawan Daryanti menjenguknya di rumah sakit karena ingin tahu mengapa Daryanti terlambat ke sekolah.", "Daryanti tidak melihat lubang karena bangun kesiangan.", "Daryanti mengalami patah kaki karena terlambat tidur pada malam sebelumnya."],
          correctIndex: 3
        },
        {
          question: "Ikan kakap merah bergizi dan indah penampilannya. Ikan tuna rasanya enak tapi membosankan. Udang walaupun kecil-kecil, tetapi mempunyai nilai gizi tinggi daripada ikan kakap merah. Sementara bandeng gizinya lebih baik dari ikan tuna, tetapi biasanya tidak segar. Hidangan yang menarik dan bergizi adalah..",
          options: ["Ikan tuna dan bandeng", "Ikan kakap merah dan udang", "Bandeng dan kakap merah", "Udang dan bandeng"],
          correctIndex: 1
        },
        {
          question: "Pada iklim panas tumbuh pohon-pohon getah dan karet. Semak dan rumput hanya tumbuh di tempat yang dingin. Rumput dan karet membutuhkan banyak kelembapan. Semak-semak dan pohon getah hanya tumbuh di daerah yang cukup kering. Di dekat sungai Amazon sangat panas dan lembap. Tumbuh-tumbuhan manakah yang tumbuh di dekat Sungai Amazon ?",
          options: ["Pohon-pohon getah dan semak", "Pohon karet", "Rumput", "Jawaban a, b, dan c salah"],
          correctIndex: 1
        },
        {
          question: "Yang terbaik tumbuh pada iklim dingin adalah wortel, kentang, dan kubis. Pada iklim sedang banyak sekali padang rumput dan disana tumbuh ketela serta jagung. Pada iklim subtropis terdapat gandum, buah zaitun, dan kebun anggur. Pada iklim tropis tumbuh kelapa sawit dan padi. Bangsa X terutama hidup dari roti dan minyak sebagai pengganti mentega. Mereka minum anggur dan makan buah anggur. Pada iklim manakah mareka hidup ?",
          options: ["Pada iklim dingin", "Pada iklim subtropis", "Pada iklim tropis", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 1
        },
        {
          question: "Hanya orang kaya bisa membeli mobil. Rutifa adalah orang yang membeli mobil. Orang ini tidak kaya. Jadi:",
          options: ["Orang ini adalah Rutifa", "Orang ini bukan Rutifa", "Rutifa tidak kaya", "a, b,c bukan jawaban yang benar"],
          correctIndex: 1
        },
        {
          question: "Film Bundaku Tersayang memecahkan rekor paling banyak ditonton orang. Sementara film Pencuri yang Baik Hati memperoleh 4 buah piala Citra, antara lain sutradara dan peran utama pria terbaik. Film Rinduku terpaut di Awan tidak ditonton sebanyak orang dibanding film terdahulu, tetapi mendapat piala Citra dua lebih banyak dari film Pencuri Yang Baik Hati merupakan film dokumenter terbaik. Manakah film, terbaik berdasarkan piala Citra yang diperolehnya?",
          options: ["Rinduku terpaut di Awan", "Pencuri Yang Baik Hati", "Bundaku Tersayang", "Hatiku-Hatiku"],
          correctIndex: 0
        },
        {
          question: "Sebagian penyanyi berwajah cantik. Isabella artis cantik dan Diana seorang penyanyi.",
          options: ["Isabella penyanyi cantik", "Diana berwajah cantik", "a dan b bukan di antaranya", "a dan b"],
          correctIndex: 2
        },
        {
          question: "Setiap upacara bendera di sekolah dasar, pengaturan baris dilakukan sebagai berikut: kelas yang bertindak sebagai petugas upacara berbaris menghadap barat. Kelas yang tertua akan berbaris mengahadap matahari tebit, sedang sisa kelas yang lain menghadap tiang bendera ke arah Utara. Barisan kelas yang menghadap Utara diatur sedemikian rupa sehingga Barat ke Timur berturut-turut adalah kelas termuda sampai kelas tertua. Jika petugas upacara hari ini adalah kelas III maka urutan yang menghadap Utara dari Timur ke Barat adalah...",
          options: ["III - V - IV - II", "VI - V - IV - II", "V - IV - II - I", "III - IV - V - III"],
          correctIndex: 1
        },
        {
          question: "Helen menyukai David. Siapa yang menyukai David menyukai Tom. Helen menyukai hanya laki-laki tampan. Jadi:",
          options: ["Tom adalah bukan laki-laki tampan", "Tom adalah laki-laki tampan", "Tom dan David menyukai Helen", "Helen tidak menyukai David"],
          correctIndex: 1
        },
        {
          question: "Lazimnya, entrepreneur dipandang sebagai seorang individu yang memiliki dan menjalankan usaha kecil. Namun seseorang yang memiliki dan menjalankan usaha kecil atau usaha besar sekalipun tidak menjadikan orang tersebut sebagai entrepreneur. Jika seseorang adalah entrepreneur sejati, maka ada produk baru yang ia ciptakan dan ada cara baru yang ia ciptakan untuk menjalankan usahanya. Dari pernyataan berikut, manakah kesimpulan terbaik dari paragraf di atas?",
          options: ["Seorang pemilik perusahan besar adalah seorang entrepreneur", "Seorang yang membangun sebuah perusahaan dapat dianggap seorang entrepreneur.", "Entrepreneur tidak memiliki dan menjalankan usaha kecil.", "Entrepreneur adalah investor."],
          correctIndex: 1
        },
        {
          question: "Dari kata-kata yang dicetak miring di bawah ini, manakah yang tidak bermakna abstrak?",
          options: ["Malaiha merasa terbelenggu akibat keputusan yang tidak jelas itu.", "Orang yang tidak berusaha sesungguhnya telah kalah sebelum berjuang.", "Ketajaman analisis intelijen Detasemen 88 Antiteror sungguh mengagumkan.", "Kecantikan Dian Gitaya sangat mempesona forum."],
          correctIndex: 3
        },
        {
          question: "P, Q, R, S, T adalah lima orang diplomat. P hanya dapat berbicara bahasa Inggris dan Jerman. Q hanya berbicara dalam bahasa Perancis, Jepang, dan Cina. R hanya dapat berbicara bahasa Jerman. S hanya berbicara dalam bahsa Inggris, Jepang, dan Cina. T hanya dapat berbicara dalam bahasa Perancis dan Jerman. Satu-satunya pasangan diplomat yang harus menggunakan penterjemah dalam berkomunikasi adalah...",
          options: ["P dan R", "Q dan R", "R dan T", "Q dan S"],
          correctIndex: 2
        },
        {
          question: "Jika seseorang membunuh orang lain berarti pembunuhan. Tiap pembunuhan adalah salah jika ditinjau secara moral. Jika ada pernyataan bahwa tidak dapat dibenarkan membunuh seseorang yang menderita penyakit yang tidak dapat disembuhkan, walaupun dirinya sendiri menyetujui tindakan itu.",
          options: ["Pernyataan tersebut benar", "Pernyataan tersebut salah", "Pernyataan tersebut belum tentu benar", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 0
        },
        {
          question: "Harahap adalah seorang pengemudi truk yang membahayakan. Tahun lalu, ia sedikitnya melakukan pelanggaran lalu lintas. Pernyataan berikut yang sesuai dengan pernyataan di atas, kecuali :",
          options: ["Meski tidak satu pelanggaran lalu lintas yang dilakukan Nasution, namun sulit mengatakan bahwa Nasution adalah pengendara yang aman.", "Jika Pasaribu baru mengalami pelanggaran lalu lintas sebanyak tiga kali, maka berkendara dengan Pasaribu lebih aman dibandingkan dengan Nasution.", "Wiranata Kusumah bukan pengemudi yang berbahaya karena tahun lalu baru mengalami empat kali pelanggaran lalu lintas.", "Jika sudah tujuh kali melakukan pelanggaran lalu lintas. Anda dapat dikategorikan sebagai pengemudi yang berbahaya."],
          correctIndex: 0
        },
        {
          question: "Di sebuah pasar, harga daging lokal mahal dari harga beras, harga beras lebih mahal dari harga sayur-mayur, dan daging impor adalah yang paling mahal. Jika demikian dapat disimpulkan ....",
          options: ["Sayur-mayur lebih mahal dari daging lokal", "Daging lokal lebih mahal dari daging impor", "Daging impor lebih mahal dari daging lokal", "Beras lebih mahal dari daging impor"],
          correctIndex: 2
        },
        {
          question: "Suatu keluarga mempunyai empat anak yang bergelar sarjana, A memperoleh gelar sarjana sesudah C, B memperoleh kesarjanaan sebelum D dan bersamaan dengan A. Urutan yang benar dalam memperoleh kesarjanaan adalah ....",
          options: ["D memperoleh gelar sajana sebelum C.", "A memperoleh gelar sarjana sesudah D.", "C memperoleh gelar sarjana sebelum D", "A memperoleh gelar sarjana bersamaan dengan D."],
          correctIndex: 2
        },
        {
          question: "Di sini ada perempatan jalan yang saling tegak lurus. Salah satu jalan itu menuju ke kota Semarang. Jika saya menghadap utara, maka jalan yang ke kiri dan belakang saya adalah jalan yang menuju ke tempat lain. Jalan yang tepat di hadapan saya menuju ke Laut Jawa. Jalan mananakah yang menuju Semarang?",
          options: ["Ke utara", "Ke Timur", "Ke Barat", "Jawaban a, b, dan c salah"],
          correctIndex: 1
        },
        {
          question: "Si Amin sedang sakit. Bila seseorang kulitnya berbintik merah, ada kemungkinan orang itu menderita cacar air, campak, atau kudis. Bila terbukti bahwa ia batuk dan salesma, maka boleh jadi ia sakit batuk kering, campak, atau gondok. Sudah beberapa hari si Amin selalu bersin dan batuk-batuk, lagi pula timbul bintik-bintik merah di dahi dan tangannya. Sakit apakah si Amin ?",
          options: ["Campak", "Kudis", "Batuk kering", "Gondok"],
          correctIndex: 0
        },
        {
          question: "Produk Bontang lebih mahal daripada produk Medan. Produk Makasar lebih murah daripada produk Bontang. Jadi . . .",
          options: ["Produk Makasar lebih mahal daripada produk Medan.", "Produk Medan lebih murah daripada produk Makasar.", "Produk Medan dan produk Makasar sama mahalnya.", "Produk Medan dan Produk Makasar lebih murah daripada produk Bontang."],
          correctIndex: 3
        },
        {
          question: "Orang-orang eskimo termasuk sebagian kecil dari orang-orang yang makan daging. Sekarang orang telah menemukan bahwa semua orang eskimo mempunyai gigi yang baik. Jadi dapat disimpulkan :",
          options: ["Orang tidak memakan daging giginya buruk", "Orang yang giginya baik pasti hanya memakan daging", "Orang hanya memakan daging belum tentu giginya baik", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 2
        },
        {
          question: "Gus Dur adalah putra kandung K.H. Wahid Hasyim. Kalimat manakah yang tidak berhubungan langsung dengan kalimat di atas?",
          options: ["Gus Dur pernah menjadi Presiden Republik Indonesia.", "Pada diri Gus Dur mengalir darah K.H Wahid Hasyim.", "K.H. Wahid Hasyim adalah ayah Gus Dur.", "Gus Dur adalah keturunan K.H. Wahid Hasyim."],
          correctIndex: 0
        },
        {
          question: "Madu yang berasal dari bunga adalah makanan utama dari lebah. Tikus-tikus menghabiskan madu yang telah dikumpulkan lebah. Di jalan Sudirman ada lebih banyak tikus dari pada di Jalan Diponegoro. Jadi dapat disimpulkan :",
          options: ["Lebah lebih banyak terdapat di Jalan Diponegoro daripada di Jalan Sudirman", "Di taman bunga tidak terdapat tikus", "Di jalan Sudirman tidak ada tanaman bunga", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 3
        },
        {
          question: "Steven, Richard, dan Anton menyukai bola basket. Joni dan Richard memakai arloji. Siapakah yang jatuh arlojinya ketika bermain basket?",
          options: ["Steven", "Richard", "Anton", "Joni"],
          correctIndex: 1
        },
        {
          question: "Ibu Dina ingin memberi polis asuransi jiwa dengan premi termurah. Setelah meneliti puluhan perusahaan asuransi, terpilihlah lima asuransi yang kredibilitasnya cukup meyakinkan. Harga polis Asuransi Bahagia cukup murah tetapi premi yang harus dibayar per bulannya lebih mahal dari Asuransi Asal Selamet, meski tetap lebih murah dibanding Asuransi Seger Waras. Premi yang harus dibayar untuk Asuransi Ayem Tentrem tiap bulannya lebih murah dibanding Asuransi Asal Selamet., tetapi masih kalah murah dengan Asuransi Timbang Apes. Polis Asuransi mana yang memenuhi kriteria Ibu Dina?",
          options: ["Asuransi Timbang Apes", "Asuransi Asal Selamet", "Asuransi Ayem Tentrem", "Asuransi Seger Waras"],
          correctIndex: 0
        },
        {
          question: "Hasil survey menunjukkan bahwa lagu keroncong lebih disukai daripada lagu klasik. Lagu Rock dan dangdut sama-sama disukai namun lagu keroncong lebih disukai daripada lagu rock dan dangdut. Lagu pop lebih disukai daripada keroncong, lagu rock lebih lebih disenangi daripada lagu klasik. Urutan jenis lagu-lagu yang paling digemari sampai yang paling tidak digemari adalah...",
          options: ["Pop, rock/dangdut, keroncong, klasik.", "Keroncong, pop, rock/dangdut, klasik.", "Pop, rock/dangdut, klasik, keroncong.", "Pop, keroncong, rock/dangdut, klasik"],
          correctIndex: 3
        },
        {
          question: "Orang yang mencuri dompet Amir tidak hitam, tidak besar, serta tidak bercukur halus. Selain Amir, orang yang berada di dalam ruangan pada waktu pencurian itu hanyalah: <br>- Boris yang pendek, hitam, dan bercukur halus.<br>- Cafit yang berambut pirang, kecil, dan berjenggot.<br>- Dedi yang hitam, tinggi, dan tidak bercukur halus.<br> Siapakah yang mencuri dompet Amir ?",
          options: ["Boris", "Dedi", "Cafit", "Jawaban a, b, dan c ketiga"],
          correctIndex: 2
        },
];