const questions = [
        {
          question: "Sepatu merah lebih bagus dari sepatu hitam. Sepatu yang lebih bagus harganya lebih mahal dan banyak dibeli orang.",
          options: ["Ada sepatu hitam yang lebih mahal dan lebih banyak dibeli orang.", "Sepatu merah yang tidak lebih bagus dari sepatu hitam harganya murah.", "Sepatu yang lebih banyak dibeli orang belum tentu lebih bagus.", "Sepatu merah lebih banyak dibeli orang walaupun harganya lebih mahal."],
          correctIndex: 3
        },
        {
          question: "Semua atlet pandai melompat dan atlet yang pandai melompat gemar berenang. Atlet yang gemar berenang tidak pandai memasak.",
          options: ["Atlet yang tidak pandai memasak, gemar berenang dan tidak pandai melompat.", "Atlet yang tidak pandai memasak, pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, tidak pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, pandai melompat."],
          correctIndex: 3
        },
        {
          question: "Teman yang baik adalah yang dapat menerima keadaan kita. Sebagian teman dari desa C tidak dapat menerima keadaan kita.",
          options: ["Semua teman di desa C adalah teman yang tidak baik", "Semua teman di desa C adalah teman yang baik", "Sebagian teman di desa C adalah teman yang baik", "Sebagian teman yang baik berasal bukan dari desa C"],
          correctIndex: 2
        },
        {
          question: "Semua gunung berbatu dan menjulang. Anda berada di tempat yang tidak berbatu dan tidak menjulang.",
          options: ["Anda berada di gunung berbatu.", "Anda berada di gunung yang tidak menjulang.", "Anda bukan berada di gunung.", "Anda berada di gunung yang tidak berbatu dan tidak menjulang."],
          correctIndex: 2
        },
        {
          question: "Semua bunga di taman Keputren berwarna merah. Semua putri suka bunga. Leny Ana membawa bunga biru.",
          options: ["Taman Keputren ada bunga birunya.", "Bunga yang dibawa Leny Ana bukan dari Keputren.", "Leny Ana tidak suka bunga.", "Putri tidak suka bunga merah."],
          correctIndex: 1
        },
        {
          question: "Semua penerima beasiswa mempunyai prestasi istimewa. Beberapa siswa menerima beasiswa.",
          options: ["Semua siswa berprestasi istimewa menerima beasiswa", "Tidak ada siswa yang tidak berprestasi istimewa tidak menerima beasiswa", "Beberapa siswa mempunyai prestasi istimewa", "Ada siswa penerima beasiswa yang tidak mempunyai prestasi istimewa"],
          correctIndex: 2
        },
        {
          question: "Semua radio memakai baterai. Sebagian radio tidak memakai antena panjang.",
          options: ["Ada radio yang tidak memakai baterai, memakai antena.", "Ada radio yang tidak memakai antena panjang, tidak memakai baterai.", "Ada radio yang memakai antena panjang, tidak memakai baterai.", "Ada radio yang tidak memakai antena panjang, memakai baterai."],
          correctIndex: 3
        },
        {
          question: "Bahan katun lebih baik daripada bahan nilon. Bahan yang lebih baik, lebih tahan lama dan lebih mahal. Kesimpulan yang tepat adalah ....",
          options: ["Bahan nilon lebih tahan lama dan lebih mahal daripada bahan katun", "Bahan nilon tidak lebih tahan lama, tetapi lebih mahal daripada bahan katun", "Bahan nilon tidak lebih tahan lama dan tidak lebih mahal daripada bahan katun", "Bahan nilon sama tahan lama dan sama mahalnya dengan bahan katun"],
          correctIndex: 2
        },
        {
          question: "Semua tenda beratap dan tinggi. Andi berada di tempat yang tidak beratap dan tidak tinggi. Kesimpulan yang tepat adalah .....",
          options: ["Andi berada di tenda beratap.", "Andi berada di tenda tinggi.", "Andi berada di bukan tenda.", "Andi berada di tenda bukan beratap dan bukan tinggi."],
          correctIndex: 2
        },
        {
          question: "Korban yang memiliki tabungan kurang dari tiga juta rupiah mendapat bantuan dan hadiah. Yusuf menerima bantuan, tetapi tidak menerima hadiah. Kesimpulan yang tepat adalah .....",
          options: ["Yusuf adalah korban yang tabungannya lebih dari tiga juta rupiah.", "Yusuf adalah korban yang berhak menerima hadiah.", "Yusuf adalah bukan korban yang berhak menerima hadiah.", "Yusuf adalah korban yang tabungannya tiga juta rupiah."],
          correctIndex: 0
        },
        {
          question: "Semua pohon di kebun Pak Deni berdaun hijau. Semua anak Pak Deni suka menanam pohon. Tara membawa tangkai pohon berdaun kuning.",
          options: ["Tara bukan anak Pak Deni.", "Tara tidak suka pohon hijau.", "Anak Pak Deni suka pohon kuning.", "Tangkai pohon yang dibawa Tara bukan dari kebun Pak Deni."],
          correctIndex: 3
        },
        {
          question: "Di rumah sakit semua dokter berbaju putih dan membawa stetoskop. Anton ada di rumah sakit, ia tidak berbaju putih dan tidak membawa stetoskop.",
          options: ["Anton seorang dokter yang tidak berbaju putih", "Anton bukan seorang dokter yang berbaju putih", "Anton seorang dokter yang tidak membawa stetoskop", "Anton bukan seorang dokter"],
          correctIndex: 3
        },
        {
          question: "Semua murid pandai berhitung dan sopan. Dani tidak sopan, tetapi pandai berhitung.",
          options: ["Dani adalah seorang murid yang tidak sopan.", "Dani adalah seorang murid yang pandai berhitung.", "Dani adalah bukan seorang murid meskipun pandai berhitung.", "Dani adalah seorang murid yang pandai berhitung dan tidak sopan."],
          correctIndex: 2
        },
        {
          question: "Bila naik kereta api, harus membayar kontan atau memakai tiket abonemen. Badu naik kereta api padahal tidak membayar kontan. Kesimpulan yang tepat adalah .....",
          options: ["Badu tidak membayar untuk naik kereta api.", "Badu membayar kontan untuk naik kereta api.", "Badu membayar dengan tiket abonemen.", "Badu tidak mempunyai uang kontan."],
          correctIndex: 2
        },
        {
          question: "Semua negara berkembang masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi. Indonesia adalah negara berkembang.",
          options: ["Indonesia tidak bermasalah dengan tingkat pengangguran yang tinggi tapi bermasalah dengan kemiskinan.", "Indonesia bermasalah dengan tingkat kemiskinan yang tinggi tetapi tidak dengan tingkat pengangguran.", "Bisa jadi Indonesia masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi.", "Indonesia masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi."],
          correctIndex: 3
        },
        {
          question: "Semua candi bergapura dan menjulang. Anda berada di tempat yang tidak bergapura dan menjulang.",
          options: ["Anda berada di candi bergapura.", "Anda berada di candi menjulang.", "Anda berada di bukan candi.", "Anda berada di candi tidak bergapura. "],
          correctIndex: 2
        },
        {
          question: "Semua yang bulat adalah biji. Sebagian biji rasanya pahit.",
          options: ["Sebagian yang bulat rasanya tidak pahit.", "Semua biji adalah bulat.", "Semua yang rasanya tidak pahit adalah biji.", "Semua yang bulat rasanya tidak pahit. "],
          correctIndex: 0
        },
        {
          question: "Semua radio memakai baterai. Sebagian radio tidak memakai antenna Panjang.",
          options: ["Ada radio yang tidak memakai baterai, memakai antenna.", "Ada radio yang tidak memakai antenna Panjang, tidak memakai baterai.", "Ada radio yang memakai antena Panjang, tidak memakai baterai.", "Ada radio yang tidak memakai antena Panjang, memakai baterai. "],
          correctIndex: 3
        },
        {
          question: "Semua atlet pandai melompat, dan atlet yang pandai melompat gemar berenang. Atlet yang gemar berenang tidak pandai memasak.",
          options: ["Atlet yang tidak pandai memasak, gemar berenang dan tidak pandai melompat.", "Atlet yang tidak pandai memasak, pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, tidak pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, pandai melompat. "],
          correctIndex: 3
        },
        {
          question: "Semua bunga di taman Keputren berwarna merah. Semua putri suka bunga. Leny Ana membawa bunga biru.",
          options: ["Taman Keputren ada bunga birunya.", "Bunga yang dibawa Leny Ana bukan dari Keputren.", "Leny Ana tidak suka bunga.", "Putri tidak suka bunga merah. "],
          correctIndex: 1
        },
        {
          question: "Semua pohon di kebun Pak Deni berdaun hijau. Semua anak Pak Deni suka menanam pohon. Tara membawa tangkai pohon berdaun kuning.",
          options: ["Tara bukan anak Pak Deni.", "Tara tidak suka pohon hijau.", "Anak Pak Deni suka pohon kuning.", "Tangkai pohon yang dibawa Tara bukan dari kebun Pak Deni. "],
          correctIndex: 3
        },
        {
          question: "Semua murid pandai berhitung dan sopan. Dani tidak sopan, tetapi pandai berhitung.",
          options: ["Dani adalah seorang murid yang tidak sopan.", "Dani adalah seorang murid yang pandai berhitung.", "Dani adalah bukan seorang murid meskipun pandai berhitung.", "Dani adalah seorang murid yang pandai berhitung dan tidak sopan. "],
          correctIndex: 2
        },
        {
          question: "Jika Riana memakai baju hitam, maka ia memakai celana coklat. Jika Riana memakai celana coklat, maka Sari memakai celana hitam. Sari memakai celana pink.",
          options: ["Riana tidak memakai baju hitam.", "Sari memakai baju coklat.", "Riana memakai celana hitam.", "Sari tidak memakai baju coklat."],
          correctIndex: 0
        },
        {
          question: "Setiap pembelian 4 celana gratis 1 kaos. Setiap pembelian 12 kaus gratis 1 celana. Tofa membeli 10 celana dan 25 kaos.",
          options: ["Tofa mendapat 10 celana dan 26 kaos.", "Tofa mendapat 12 celana dan 27 kaos.", "Tofa mendapat 12 celana dan 25 kaos.", "Tofa mendapat 11 celana dan 27 kaos. "],
          correctIndex: 1
        },
        {
          question: "Semua buah yang berwarna kuning mengandung vitamin C. Jeruk adalah buah yang berwarna kuning.",
          options: ["Semua buah jeruk tidak mengandung vitamin C.", "Semua buah mengandung vitamin C dan berwarna kuning.", "Jeruk adalah buah yang mengandung vitamin C.", "Beberapa buah jeruk mengandung vitamin C dan berwarna kuning."],
          correctIndex: 2
        },
        {
          question: "Apel merah lebih manis dari apel hijau. Apel lebih manis harganya lebih mahal dan lebih banyak dibeli orang.",
          options: ["Ada apel hijau yang lebih mahal dan lebih banyak dibeli orang", "Apel merah lebih banyak dibeli orang walaupun harganya lebih mahal.", "Apel merah yang tidak lebih manis dan apel hijau harganya murah.", "Apel merah lebih banyak dibeli orang tentu lebih manis."],
          correctIndex: 1
        },
        {
          question: "Semua yang bulat adalah biji. Sebagian biji rasanya pahit.",
          options: ["Sebagian yang bulat rasanya tidak pahit.", "Semua biji adalah bulat.", "Semua yang rasanya tidak pahit adalah biji.", "Semua yang bulat rasanya tidak pahit."],
          correctIndex: 0
        },
        {
          question: "Semua atlet pandai melompat, dan atlet yang pandai melompat gemar berenang. Atlet yang gemar berenang tidak pandai memasak.",
          options: ["Atlet yang tidak pandai memasak, gemar berenang dan tidak pandai melompat.", "Atlet yang tidak pandai memasak, pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, tidak pandai melompat dan tidak pandai berenang.", "Atlet yang tidak pandai memasak, pandai melompat."],
          correctIndex: 3
        },
        {
          question: "Roni adalah orang desa. Roni bekerja sebagai buruh di sebuah pabrik. Banyak buruh-buruh yang malas. Tino adalah teman Roni. Jadi...",
          options: ["Tino adalah orang kota.", "Tino itu malas.", "Tino mungkin satu desa dengan Roni.", "Teman-teman Roni semuanya malas."],
          correctIndex: 2
        },
        {
          question: "Semua bunga di taman Keputren berwarna merah. Semua putri suka bunga. Leny Ana membawa bunga biru.",
          options: ["Taman Keputren ada bunga birunya.", "Bunga yang dibawa Leny Ana bukan dari Keputren.", "Leny Ana tidak suka bunga.", "Putri tidak suka bunga merah."],
          correctIndex: 1
        },
        {
          question: "Kita membutuhkan energi setiap kali berolahraga. Catur adalah olahraga berpikir.",
          options: ["Catur membutuhkan energi.", "Catur tidak membutuhkan energi.", "Energi yang diperlukan.", "Olahraga berpikir tidak membutuhkan energi."],
          correctIndex: 0
        },
        {
          question: "Semua pohon di kebun Pak Deni berdaun hijau. Semua anak Pak Deni suka menanam pohon. Tara membawa tangkai pohon berdaun kuning.",
          options: ["Tara bukan anak Pak Deni.", "Tara tidak suka pohon hijau.", "Anak Pak Deni suka pohon kuning.", "Tangkai pohon yang dibawa Tara bukan dari kebun Pak Deni."],
          correctIndex: 3
        },
        {
          question: "Barang pecah-belah adalah barang yang mudah pecah bila jatuh. Barang-barang yang tidak mudah pecah bila jatuh tidak lagi digolongkan dalam kategori pecah-belah. Gelas buatan PT. Mirror tidak dapat pecah kalau jatuh. Jadi...",
          options: ["Gelas produksi PT. Mirror mudah pecah.", "Gelas produksi PT. Mirror tidak termasuk barang pecah-belah.", "Gelas produksi PT. Mirror tidak mungkin pecah.", "Gelas produksi PT. Mirror tidak dapat pecah."],
          correctIndex: 1
        },
        {
          question: "Semua murid pandai berhitung dan sopan. Dani tidak sopan, tetapi pandai berhitung.",
          options: ["Dani adalah seorang murid yang tidak sopan.", "Dani adalah seorang murid yang pandai berhitung.", "Dani adalah bukan seorang murid meskipun pandai berhitung.", "Dani adalah seorang murid yang pandai berhitung dan tidak sopan."],
          correctIndex: 2
        },
        {
          question: "Semua radio memakai baterai. Sebagian radio tidak memakai antena Panjang.",
          options: ["Ada radio yang tidak memakai antena Panjang, memakai baterai.", "Ada radio yang tidak memakai antena Panjang, tidak memakai baterai.", "Ada radio yang memakai antena Panjang, tidak memakai baterai.", "Ada radio yang tidak memakai baterai, tidak memakai antena panjang."],
          correctIndex: 0
        },
        {
          question: "Semua penumpang bus kota memiliki kartu langganan kendaraan umum. Tidak ada karyawan di pabrik sepatu yang memiliki kartu langganan kendaraan umum. Kesimpulan yang tepat atas pertanyaan diatas adalah...",
          options: ["Tidak ada karyawan di pabrik sepatu yang tidak menjadi penumpang bis kota.", "Tidak ada karyawan yang tidak memiliki kartu langganan kendaraan umum.", "Tidak ada karyawan di pabrik sepatu yang menjadi penumpang bis kota.", "Karyawan yang memiliki kartu langganan kendaraan umum tidak bekerja di pabrik sepatu."],
          correctIndex: 2
        },
        {
          question: "Semua candi bergapura dan menjulang. Anda berada di tempat yang tidak bergapura dan menjulang.",
          options: ["Anda berada di candi menjulang.", "Anda berada di candi bergapura.", "Anda berada di candi tidak bergapura.", "Anda berada di bukan candi."],
          correctIndex: 3
        },
        {
          question: "Jika Riana memakai baju hitam, maka ia memakai celana coklat. Jika Riana memakai celana coklat, maka Sari memakai celana hitam. Sari memakai celana pink.",
          options: ["Riana tidak memakai baju hitam.", "Sari memakai baju coklat.", "Riana memakai celana hitam.", "Sari tidak memakai baju coklat."],
          correctIndex: 0
        },
        {
          question: "Semua jepit yang berwarna merah muda diletakkan di atas meja rias. Beberapa jepit yang berwarna emas diletakan diatas meja rias.",
          options: ["Beberapa jepit berwarna merah muda dan semua jepit berwarna emas diletakkan di meja rias.", "Semua jepit berwarna merah muda dimasukan dalam laci.", "Beberapa jepit berwarna emas di masukan dalam laci.", "Ada jepit berwarna merah muda yang dimasukan dalam laci."],
          correctIndex: 2
        },
        {
          question: "Semua anggota keluarga Raffi bermata biru. Mata Rehan berwarna coklat.",
          options: ["Rehan belum tentu anggota keluarga Raffi.", "Rehan adalah anggota keluarga Raffi.", "Rehan anggota keluarga Raffi yang bermata coklat.", "Rehan bukan anggota keluarga Raffi."],
          correctIndex: 3
        },
        {
          question: "Semua buah yang berwarna kuning mengandung vitamin C. Jeruk adalah buah yang berwarna kuning.",
          options: ["Semua buah jeruk tidak mengandung vitamin C.", "Semua buah mengandung vitamin C dan berwarna kuning.", "Jeruk adalah buah yang mengandung vitamin C.", "Beberapa buah jeruk mengandung vitamin C dan berwarna kuning."],
          correctIndex: 2
        },
        {
          question: "Semua karyawan akan berlibur jika mereka mendapatkan cuti seminggu. Hari ini mereka mendapatkan cuti seminggu.",
          options: ["Tidak ada karyawan yang tidak berlibur.", "Semua karyawan tidak akan berlibur.", "Beberapa karyawan tidak akan berlibur.", "Beberapa karyawan yang mendapatkan cuti seminggu bersedih."],
          correctIndex: 0
        },
        {
          question: "Beberapa mahasiswa mengikuti rapat. Semua anggota-anggota BEM mengikuti rapat.",
          options: ["Semua mahasiswa adalah anggota-anggota BEM.", "Semua anggota-anggota BEM adalah mahasiswa.", "Ada beberapa mahasiswa bukan anggota-anggota BEM dan tidak mengikuti rapat.", "Beberapa mahasiswa sedang mengikuti kuliahnya."],
          correctIndex: 2
        },
        {
          question: "Semua siswa ingin masuk fakultas ekonomi. Heri tidak ingin diterima di fakultas ekonomi.",
          options: ["Semua siswa yang mengikuti tes penerimaan diterima di fakultas ekonomi.", "Heri tidak mengikuti seleksi penerimaan di fakultas ekonomi.", "Beberapa siswa tidak lulus dalam ujian penerimaan mahasiswa baru.", "Heri diterima di fakultas ekonomi setelah mengikuti tes."],
          correctIndex: 1
        },
        {
          question: "Fani selalu latihan piano setiap hari sabtu sore. Hari sabtu sore Fani ada les tambahan Fisika di sekolahnya.",
          options: ["Fani tidak latihan piano, tetapi ikut les tambahan Fisika di sekolahnya.", "Fani latihan piano di hari lain dan tetap les tambahan Fisika di sekolahnya.", "Fani mengganti les tambahan Fisika di hari lain.", "Fani tetap latihan piano walaupun ada les tambahan Fisika di sekolahnya."],
          correctIndex: 3
        },
        {
          question: "Semua kaftan terbuat dari sutra. Sebagian kain sutra bermotif bunga-bunga. Semua kain sutra berasal dari ulat sutra.",
          options: ["Semua bahan kaftan terbuat dari ulat sutra.", "Semua kaftan bermotif bunga-bunga terbuat dari kain sutra.", "Kain sutra yang polos bukan berasal dari ulat sutra.", "Beberapa kaftan berasal dari ulat sutra."],
          correctIndex: 0
        },
        {
          question: "Semua hewan herbivora memakan daun-daunan. Harimau memakan daging.",
          options: ["Harimau adalah hewan herbivora.", "Harimau bukan hewan herbivora.", "Harimau makan daun-daunan.", "Semua hewan herbivora memakan daging."],
          correctIndex: 1
        },
        {
          question: "Tanaman yang bijinya berkeping dua memiliki akar tunggang. Semua tumbuhan palem memiliki akar serabut. Tanaman Z adalah tanaman yang bijinya berkeping dua.",
          options: ["Tanaman Z adalah tumbuhan palem yang memiliki akar tunggang.", "Tumbuhan palem yang memiliki akar tunggang hanyalah tanaman Z.", "Tanaman Z memiliki akar serabut.", "Tanaman Z bukan tumbuhan palem."],
          correctIndex: 3
        },
        {
          question: "Semua mamalia tidak bertelur dan semua yang bertelur adalah hewan. Jadi...",
          options: ["Mamalia bisa saja bertelur.", "Ikan paus adalah mamalia.", "Ada hewan yang tidak bertelur.", "Hewan yang bertelur adalah mamalia."],
          correctIndex: 2
        },
        {
          question: "Susilo adalah siswa yang paling pandai di kelasnya. Edi kalah pandai dibanding Leonardo. Tetapi Leonardo sama pandainya dengan Viki. Viki lebih pandai dari Natsir. Maka….",
          options: ["Leonardo tidak lebih pandai dari Edi", "Edi tidak kalah pandai dari Susilo", "Viki lebih pandai dari Susilo", "Viki lebih pandai dari Edi", "Natsir lebih pandai dari Leonardo"],
          correctIndex: 3
        },
        {
          question: "Semua karyawan harus hadir dalam rapat rutin. Sementara office boy adalah karyawan. Maka....",
          options: ["Semua yang hadir dalam rapat rutin adalah office boy", "Sementara peserta rapat rutin bukan karyawan", "Sementara peserta rapat rutin adalah office boy", "Semua office boy hadir dalam rapat rutin", "Semua yang hadir bukan office boy"],
          correctIndex: 2
        },
        {
          question: "Semua penyanyi adalah artis. Sementara penyanyi adalah bintang film. Maka ….",
          options: ["Sementara bintang film adalah artis", "Sementara artis adalah bukan penyanyi", "Semua bintang film adalah artis", "sementara penyanyi bukan bintang film", "Sementara penyanyi bukan artis"],
          correctIndex: 0
        },
        {
          question: "Jika penyataan: 'Semua dokter adalah laki laki' adalah salah, maka...",
          options: ["Sementara dokter adalah laki-laki", "Sementara laki-laki adalah bukan dokter", "Sementara dokter adalah bukan laki-laki", "Tidak ada dokter yang bukan laki-laki", "Tidak ada kesimpulan yang benar"],
          correctIndex: 2
        },
        {
          question: "Merpati terbang ke utara. Merpati adalah burung",
          options: ["Beberapa burung terbang ke utara", "Semua burung adalah merpati", "Tidak setiap merpati yang terbang ke utara adalah burung", "Burung bukan merpati", "Tidak semua burung merpati terbang ke utara"],
          correctIndex: 0
        },
        {
          question: "Semua kertas gambar sangat berguna. Sebagian kertas yang sangat berguna harganya murah. Maka ...",
          options: ["Semua kertas gambar harganya murah", "Semua kertas yang harganya murah adalah kertas gambar", "Sebagian kertas harganya murah", "Kertas yang murah sangat berguna", "Semua kertas yang sangat berguna adalah kertas gambar"],
          correctIndex: 2
        },
        {
          question: "Pengurus koperasi seharusnya berjiwa sosial. Sebagian ketua RT pernah menjadi pengurus koperasi",
          options: ["Ketua RT itu selalu berjiwa sosial", "Semua orang yang pernah menjadi ketua RT adalah pengurus koperasi", "Sebagian pengurus koperasi ingin menjadi ketua RT", "Semua pengurus koperasi berjiwa sosial", "Sebagian ketua RT seharusnya berjiwa sosial"],
          correctIndex: 4
        },
        {
          question: "Beberapa dosen bergabung dalam tim karawitan. Tim karawitan tidak ada yang menjadi pemain tenis.",
          options: ["Ada beberapa dosen yang menjadi pemain tenis", "Beberapa dosen bukan pemain tenis", "Tidak ada dosen yang menjadi pemain tenis", "Beberapa pemain tenis bukanlah merupakan tim karawitan", "Tim karawitan hanya cocok menjadi dosen"],
          correctIndex: 1
        },
        {
          question: "Semua burung tidak bersirip. Semua kuda makan rumput.",
          options: ["Burung tidak makan rumput", "Kuda tidak bersirip", "Burung dan kuda tidak bersirip dan tidak makan rumput", "Burung sama dengan kuda", "Tidak bisa ditarik kesimpulan"],
          correctIndex: 4
        },
        {
          question: "Semua guide pandai berbahasa asing. Fido bukanlah seorang guide",
          options: ["Fido tidak pandai berbahasa asing", "Fido adalah sarjana sastra", "Fido bukan sarjana", "Fido pandai berbahasa asing", "Tidak ada kesimpulan yang benar"],
          correctIndex: 4
        },
        {
          question: "Beberapa mobil berwarna hitam. Semua mobil mempunyai roda.",
          options: ["Mobil yang mempunyai roda berwarna hitam", "Roda mobil berwarna hitam", "Ada mobil berwarna hitam yang mempunyai roda", "Semua mobil berwarna hitam dan mempunyai roda", "Beberapa mobil berwarna hitam dan mempunyai roda"],
          correctIndex: 4
        },
        {
          question: "Semua sepeda motor dilengkapi speedometer. Sebagian sepeda motor benvama hitam.",
          options: ["Sebagian sepeda motor tidak berwarna hitam dan tidak dilengkapi speedometer", "Sebagian sepeda motor berwarna hitam dan tidak dilengkapi speedometer", "Semua sepeda motor berwarna hitam dan dilengkapi speedometer", "Semua sepeda motor yang berwarna hitam dilengkapi speedometer", "Semua sepeda motor tidak berwarna hitam dan tidak dilengkapi speedometer"],
          correctIndex: 3
        },
        {
          question: "Semua hewan adalah makhluk hidup. Semua makhluk hidup akan mati. Kijang adalah hewan bertanduk. Tidak semua hewan bertanduk memakan rumput.",
          options: ["Kijang dapat memakan rumput", "Kijang tidak dapat memakan rumput", "Sennia hewan tidak akan mati", "Semua hewan akan mati", "Tidak semua hewan bertanduk akan mati"],
          correctIndex: 3
        },
        {
          question: "Semua bayi minum ASI. Sebagian bayi diberi makanan tambahan. Semua bayi minum ASI dan diberi makanan tambahan.",
          options: ["Bayi yang minum ASI biasanya diberi makanan tambahan", "Sebagian bayi minum ASI dan diberi makanan tambahan", "Bayi yang diberi makanan tambahan harus minum ASI", "Semua bayi minum ASI, dan tidak dapat diberi makanan tambahan"],
          correctIndex: 2
        },
        {
          question: "Semua murid SD 01 pandai. Sebagian besar murid SD 01 berasal dari orang kaya.",
          options: ["Semua murid yang pandai adalah murid SD 01", "Sebagian besar murid SD 01 kaya dan pandai", "Sebagian besar murid yang kaya dan pandai adalah murid SD 01", "Sebagian besar murid SD 01 kaya dan kurang pandai", "Semua Siswa SD 01 pandai dan kaya"],
          correctIndex: 1
        },
        {
          question: "Semua wisatawan asing mempunyai paspor. Sebagian wisatawan asing membawa kamera.",
          options: ["Semua wisatawan asing mempunyai paspor dan membawa kamera", "Sebagian wisatawan asing yang membawa kamera mempunyai paspor", "Sebagian wisatawan asing yang membawa kamera tidak mempunyai paspor", "Sebagian wisatawan asing yang tidak membawa kamera mempunyai paspor", "Semua yang membawa kamera adalah wisatawan asing"],
          correctIndex: 1
        },
        {
          question: "Semua anggota paguyuban harus hadir dalam pertemuan rutin. Sementara purnakarya adalah anggota paguyuban.",
          options: ["Semua yang hadir dalam pertemuan rutin adalah purnakarya", "Sementara yang hadir dalam pertemuan rutin bukan anggota paguyuban", "Sementara yang hadir dalam pertemuan rutin adalah purnakarya", "Semua purnakarya hadir dalam pertemuan rutin", "Semua yang hadir bukan purnakarya"],
          correctIndex: 2
        },
        {
          question: "Semua penyanyi dangdut pandai bergoyang. Nurlaila adalah penyanyi, tetapi tidak bisa bergoyang.",
          options: ["Nurlaila bukan penyanyi", "Nurlaila penyanyi Pop", "Nurlaila penyanyi Keroncong", "Nurlaila bukan penyanyi dangdut", "Tidak dapat disimpulkan"],
          correctIndex: 3
        },
        {
          question: "Mahasiswa semester awal tidak diizinkan mengikuti semester pendek. Sementara Santi semester enam.",
          options: ["Santi boleh mengikuti semester pendek", "Santi harus mengikuti semester pendek", "Santi tidak mengikuti semester pendek", "Santi tidak diizinkan mengikuti semester pendek", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 0
        },
        {
          question: "Jika Ratna pergi ke Candi Prambanan maka ia juga pergi ke Keraton Yogyakarta. Jika Ratna pergi ke Keraton Yogyakarta maka Kiki pergi ke Candi Borobudur. Kiki pergi ke Malioboro",
          options: ["Ratna dan Kiki pergi ke Malioboro", "Ratna pergi ke Keraton Yogyakarta dan Candi Borobudur", "Kiki dan Ratna pergi ke Candi Prambanan", "Ratna pergi ke Candi Prambanan dan Keraton Yogyakarta", "Ratna tidak pergi ke Candi Prambanan"],
          correctIndex: 4
        },
        {
          question: "Jika Martha pandai melukis maka Dias pandai berhitung. Martha tidak pandai melukis tetapi pandai berhitung.",
          options: ["Martha dan Dias pandai berhitung", "Dias pandai berhitung", "Martha tidak pandai melukis jika Dias pandai berhitung", "Dias dan Martha pandai melukis", "Dias tidak pandai berhitung"],
          correctIndex: 4
        },
        {
          question: "Jika Ninda menjadi juara lomba maka juara kedua adalah seorang laki-laki. Jika Johan menjadi juara kedua maka yang menjadi juara ketiga adalah Tio. Tio menjadi urutan keempat.",
          options: ["Juara kedua juara lomba adalah seorang perempuan", "Ninda mungkin menjadi juara lomba", "Johan masih bisa menjadi juara kedua lomba", "Ninda tidak mungkin menjadi juara lomba", "Tidak bisa ditarik kesimpulan"],
          correctIndex: 1
        },
        {
          question: "Beberapa dokter gigi ada yang menjadi dosen. Semua dokter gigi memiliki klinik untuk praktik.",
          options: ["Semua dokter gigi adalah dosen", "Semua dokter gigi adalah dosen dan memiliki klinik untuk praktik", "Beberapa dokter gigi adalah dosen dan tidak memiliki klinik untuk praktik", "Ada dokter gigi yang menjadi dosen dan memiliki klinik untuk praktik", "Tidak ada dokter gigi yang memiliki klinik untuk praktik yang menjadi dosen"],
          correctIndex: 3
        },
        {
          question: "Semua dokter kandungan adalah perempuan. Sebagian dokter kandungan memiliki klinik bersalin.",
          options: ["Ada dokter kandungan selain perempuan", "Beberapa dokter kandungan yang tidak memiliki klinik bersalin adalah bukan perempuan", "Sementara dokter kandungan tidak memiliki klinik bersalin", "Semua dokter kandungan memiliki klinik bersalin", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 2
        },
        {
          question: "Setiap pengunjung tidak diperbolehkan mengambil gambar dalam museum. Ada pengunjung membawa ponsel berkamera",
          options: ["Beberapa pengunjung juga membawa kamera", "Beberapa pengunjung tidak mengikuti peraturan museum", "Beberapa pengunjung mengambil gambar di dalam museum", "Pengunjung yang tidak membawa kamera tidak masuk ke museum", "Pengunjung yang membawa kamera tidak diperbolehkan masuk"],
          correctIndex: 1
        },
        {
          question: "Semua piring saji berbentuk oval. Sebagian piring saji berisi ayam goreng.",
          options: ["Beberapa piring saji berbentuk oval dan semuanya berisi ayam goreng", "Semua piring saji yang berbentuk oval berisi ayam goreng", "Piring saji yang berisi ayam goreng bentuknya tidak oval", "Piring saji berisi tumis jamur bentuknya tidak oval", "Ada piring saji yang berisi tumis jamur dan berbentuk oval"],
          correctIndex: 4
        },
        {
          question: "Semua pegawai bank memakai seragam. Sebagian pegawai bank memakai jilbab.",
          options: ["Sebagian pegawai bank memakai seragam dan tidak memakai jilbab.", "Sebagian pegawai bank tidak memakai seragam dan tidak memakai jilbab", "Semua pegawai bank memakai seragam dan memakai jilbab", "Sebagian pegawai bank tidak memakai seragam tetapi memakai jilbab", "Ada pegawai bank yang memakai seragam dan tidak memakai jilbab"],
          correctIndex: 4
        },
        {
          question: "Jika pernyataan “semua karyawan PT Jaya Makmur mendapat tunjangan hari raya” salah maka …",
          options: ["Semua yang mendapat tunjangan hari raya tidak selalu karyawan PT Jaya Makmur", "Sementara karyawan PT Jaya Makmur tidak selalu mendapat tunjangan hari raya", "Tidak ada karyawan PT Jaya Makmur yang mendapat tunjangan hari raya", "Sementara karyawan PT Jaya Makmur ada yang mendapat tunjangan hari raya", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 1
        },
        {
          question: "Jika pernyataan “semua anak Pak Karjo pandai” salah maka …",
          options: ["Sementara anak Pak Karjo tidak selalu pandai", "Semua yang pandai tidak selalu anak Pak Karjo", "Sementara anak Pak Karjo ada yang pandai", "Tidak ada anak Pak Karjo yang tidak pandai", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 0
        },
        {
          question: "Semua penumpang kendaraan roda empat harus menggunakan sabuk pengaman saat perjalanan. Pak Yono adalah sopir.",
          options: ["Pak Yono tidak perlu menggunakan sabuk pengaman saat perjalanan", "Beberapa penumpang kendaraan roda empat yang menggunakan sabuk pengaman saat perjalanan adalah teman Pak Yono", "Pak Yono harus menggunakan sabuk pengaman", "Pak Yono mungkin tidak menggunakan sabuk pengaman saat perjalanan", "Semua penumpang kendaraan roda empat adalah sopir"],
          correctIndex: 2
        },
        {
          question: "Semua anggota keluarga Bu Mira berprofesi sebagai guru. Jaka adalah seorang pedagang",
          options: ["Jaka belum tentu anggota keluarga Bu Mira", "Jaka bukan anggota keluarga Bu Mira", "Anggota keluarga Bu Mira adalah Jaka", "Jaka adalah anggota keluarga Bu Mira", "Jaka anggota keluarga Bu Mira yang adalah seorang pedagang"],
          correctIndex: 1
        },
        {
          question: "Semua wartawan yang ikut meliput hajatan presiden harus membawa undangan perwakilan. Zaenal adalah wartawan yang tidak membawa undangan perwakilan.",
          options: ["Beberapa wartawan tidak ikut meliput hajatan presiden", "Zaenal ikut meliput hajatan presiden", "Zaenal tidak ikut meliput hajatan presiden", "Zaenal bukan wartawan", "Sementara wartawan yang ikut meliput hajatan presiden tidak membawa undangan perwakilan"],
          correctIndex: 2
        },
        {
          question: "Semua peserta seminar yang berada di gedung pertemuan tersebut adalah guru bahasa. Sebagian peserta seminar adalah guru bahasa Jawa.",
          options: ["Peserta seminar tidak selalu guru bahasa", "Sementara guru olahraga adalah guru bahasa", "Sebagian guru bahasa selain guru bahasa Jawa adalah peserta seminar", "Tidak ada guru bahasa dalam gedung pertemuan tersebut", "Ada peserta seminar yang berada di gedung pertemuan tersebut yang bukan guru bahasa"],
          correctIndex: 2
        },
        {
          question: "Banyak seniman di Bali yang menjadi penari. Pak Wayan seorang seniman di Bali",
          options: ["Selain menjadi penari, Pak Wayan juga seorang pemahat", "Pak Wayan tidak menjadi penari", "Pak Wayan hanya menjadi penari saja", "Pak Wayan mungkin menjadi penari", "Pak Wayan pasti menjadi penari"],
          correctIndex: 3
        },
        {
          question: "Semua saudara Bu Titin suka memasak. Pak Handoko tidak suka memasak",
          options: ["Pak Handoko adalah saudara Bu Titin yang tidak suka memasak", "Pak Handoko bukan saudara Bu Titin", "Pak Handoko mungkin saudara Bu Titin", "Pak Handoko akan berlatih memasak", "Pak Handoko adalah suami Bu Titin"],
          correctIndex: 1
        },
        {
          question: "Semua ikan di dalam kolam akan dikirim ke Kebumen. Sebagian ikan adalah ikan gurami",
          options: ["Sementara ikan nila belum dikirim", "Ada ikan dalam kolam tersebut yang tidak dikirim", "Semua ikan lele tidak dikirim", "Tidak ada ikan yang dikirim ke Kebumen", "Sebagian ikan yang akan dikirim ke Kebumen adalah selain ikan gurami"],
          correctIndex: 4
        },
        {
          question: "Beberapa guru olah raga bergabung dalam paguyuban guru olahraga. Setiap guru olahraga tidak ada yang menjadi anggota paguyuban lain. Pak Narto adalah anggota paguyuban lain.",
          options: ["Pak Narto adalah anggota paguyuban guru olah raga", "Semua anggota paguyuban guru olah raga adalah anggota paguyuban lain", "Pak Narto bukan anggota paguyuban guru olah raga", "Beberapa guru olah raga bukan anggota paguyuban lain", "Beberapa anggota paguyuban lain adalah anggota paguyuban guru olahraga"],
          correctIndex: 2
        },
        {
          question: "Beberapa sopir ada yang menjadi tukang ojek. Semua sopir memiliki SIM.",
          options: ["Tidak ada sopir yang memiliki SIM yang menjadi tujang ojek.", "Semua sopir adalah tukang ojek dan memiliki SIM", "Sementara sopir menjadi tukang ojek dan memiliki SIM", "Beberapa sopir adalah tukang ojek dan tidak memiliki SIM", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 2
        },
        {
          question: "Beberapa dokter gigi ada yang menjadi dosen. Semua dokter gigi memiliki klinik untuk praktik.",
          options: ["Semua dokter gigi adalah dosen", "Semua dokter gigi adalah dosen dan memiiki klinik untuk praktik", "Beberapa dokter gigi adalah dosen dan tidak memiliki klinik untuk praktik", "Ada dokter gigi yang menjadi dosen dan memiliki klinik untuk praktik", "Tidak ada dokter gigi yang memiliki klinik untuk praktik yang menjadi dosen"],
          correctIndex: 3
        },
        {
          question: "Setiap pengunjung tidak diperbolehkan mengambil gambar dalam museum. Ada pengunjung membawa ponsel berkamera",
          options: ["Beberapa pengunjung juga membawa kamera", "Beberapa pengunjung tidak mengikuti peraturan museum", "Beberapa pengunjung mengambil gambar didalam museum", "Pengunjung yang tidak membawa kamera tidak masuk ke museum", "Pengunjung yang membawa kamera tidak diperbolehkan masuk"],
          correctIndex: 1
        },
        {
          question: "Jika pernyataan “semua anak Pak Karjo pandai” salah maka …",
          options: ["Sementara anak Pak Karjo tidak selalu pandai", "Semua yang pandai tidak selalu anak Pak Karjo", "Sementara anak Pak Karjo ada yang pandai", "Tidak ada anak Pak Karjo yang tidak pandai", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 0
        },
        {
          question: "Semua peserta seminar yang berada di gedung pertemuan tersebut adalah guru bahasa. Sebagian peserta seminar adalah guru bahasa Jawa.",
          options: ["Peserta seminar tidak selalu guru bahasa", "Sementara guru olah raga adalah guru bahasa", "Sebagian guru bahasa selain guru bahasa Jawa adalah peserta seminar", "Tidak ada guru bahasa dalam gedung pertemuan tersebut", "Ada peserta seminar yang berada digedung pertemuan tersebut yang bukan guru bahasa"],
          correctIndex: 2
        },
        {
          question: "Semua penumpang kendaraan roda empat harus menggunakan sabuk pengaman saat perjalanan. Pak Yono adalah sopir.",
          options: ["Pak Yono tidak perlu menggunakan sabuk pengaman saat perjalanan", "Beberapa penumpang kendaraan roda empat yang menggunakan sabuk pengaman saat perjalanan adalah teman Pak Yono", "Pak Yono harus menggunakan sabuk pengaman", "Oak Yono mungkin tidak menggunakan sabuk pengaman saat perjalanan", "Semua penumpang kendaraan roda empat adalah sopir"],
          correctIndex: 2
        },
        {
          question: "Semua saudara Bu Titin suka memasak. Pak Handoko tidak suka memasak",
          options: ["Pak Handoko adalah saudara Bu Titin yang tidak suka memasak", "Pak Handoko bukan saudara Bu Titin", "Pak Handoko mungkin saudara Bu Titin", "Pak Handoko akan berlatih memasak", "Pak Handoko adalah suami Bu Titin"],
          correctIndex: 1
        },
        {
          question: "Semua wartawan yang ikut meliput hajatan presiden harus membawa undangan perwakilan. Zaenal adalah wartawan yang tidak membawa undangan perwakilan.",
          options: ["Beberapa wartawan tidak ikut meliput hajatan presiden", "Zaenal ikut meliput hajatan presiden", "Zaenal tidak ikut meliput hajatan presiden", "Zaenal bukan wartawan", "Sementara wartawan yang ikut meliput hajatan presiden tidak membawa undangan perwakilan"],
          correctIndex: 2
        },
        {
          question: "Jika pernyataan “semua karyawan PT Jaya Makmur mendapat tunjangan hari raya” salah maka…",
          options: ["Semua yang mendapat tunjangan hari raya tidak selalu karyawan PT Jaya Makmur", "Sementara karyawan PT Jaya Makmur tidak selalu mendapat tunjangan hari raya", "Tidak ada karyawan PT Jaya Makmur yang mendapat tunjangan hari raya", "Sementara karyawan PT Jaya Makmur ada yang mendapat tunjangan hari raya", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 1
        },
        {
          question: "Jika Ninda menjadi juara lomba maka juara kedua adalah seorang laki-laki. Jika Johan menjadi juara kedua maka yang menjadi juara ketiga adalah Tio. Tio menjadi urutan keempat.",
          options: ["Juara kedua juara lomba adalah seorang perempuan", "Ninda mungkin menjadi juara lomba", "Johan masih bisa menjadi juara kedua lomba", "Ninda tidak mungkin menjadi juara lomba", "Tidak bisa ditarik kesimpulan"],
          correctIndex: 1
        },
        {
          question: "Banyak seniman di Bali yang menjadi penari. Pak Wayan seorang seniman di Bali",
          options: ["Selain menjadi penari, Pak Wayan juga seorang pemahat", "Pak Wayan tidak menjadi penari", "Pak Wayan hanya menjadi penari saja", "Pak Wayan mungkin menjadi penari", "Pak Wayan pasti menjadi penari"],
          correctIndex: 3
        },
        {
          question: "Semua dokter kandungan adalah perempuan. Sebagian dokter kandungan memiliki klinik bersalin.",
          options: ["Ada dokter kandungan selain perempuan", "Beberapa dokter kandungan yang tidak memiliki klinik bersalin adalah bukan perempuan", "Sementara dokter kandungan tidak memiliki klinik bersalin", "Semua dokter kandungan memiliki klinik bersalin", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 2
        },
        {
          question: "Semua ikan di dalam kolam akan di kirim ke Kebumen. Sebagian ikan adalah ikan gurami",
          options: ["Sementara ikan nila belum dikirim", "Ada ikan dalam kolam tersebut yang tidak dikirim", "Semua ikan lele tidak dikirim", "Tidak ada ikan yang dikirim ke Kebumen", "Sebagian ikan yang akan dikirim ke Kebumen adalah selain ikan gurami"],
          correctIndex: 4
        },
        {
          question: "Beberapa sopir ada yang menjadi tukang ojek. Semua sopir memiliki SIM.",
          options: ["Tidak ada sopir yang memiliki SIM yang menjadi tujang ojek.", "Semua sopir adalah tukang ojek dan memiliki SIM", "Sementara sopir menjadi tukang ojek dan memiliki SIM", "Beberapa sopir adalah tukang ojek dan tidak memiliki SIM", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 2
        },
        {
          question: "Jika Ratna pergi ke Candi Prambanan maika ia juga pergi ke Keraton Yogyakarta. Jika Ratna pergi ke Keraton Yogyakarta maka Kiki pergi ke Candi Borobudur. Kiki pergi ke Malioboro",
          options: ["Ratna dan Kiki pergi ke Malioboro", "Ratna pergi ke Kereton Yogyakarta dan Candi Borobudur", "Kiki dan Ratna pergi ke Candi Prambanan", "Ratna pergi ke Candi Prambanan dan Keraton Yogyakarta", "Ratna tidak pergi ke Candi Prambanan"],
          correctIndex: 4
        },
        {
          question: "Semua piring saji berbentuk oval. Sebagian piring saji berisi ayam goreng.",
          options: ["Beberapa piring saji berbentuk oval dan semuanya berisi ayam goreng", "Semua piring saji yang berbentuk oval berisi ayam goreng", "Piring saji yang berisi ayam goreng bentuknya tidak oval", "Piring saji berisi tumis jamur bentuknya tidak oval", "Ada piring saji yang berisi tumis jamur dan berbentuk oval"],
          correctIndex: 4
        },
        {
          question: "Mahasiswa semester awal tidak dizinkan mengikuti semester pendek. Sementara Santi semester enam.",
          options: ["Santi boleh mengikuti semester pendek", "Santi harus mengikuti semester pendek", "Santi tidak mengikuti semester pendek", "Santi tidak diizinkan mengikuti semester pendek", "Tidak ada kesimpulan yang tepat"],
          correctIndex: 0
        },
        {
          question: "Jika Martha pandai melukis maka Dias pandai berhitung. Martha tidak pandai melukis tetapi pandai berhitung.",
          options: ["Martha dan Dias pandai berhitung", "Dias pandai berhitung", "Martha tidak pandai melukis jika Dias pandai berhitung", "Dias dan Martha pandai melukis", "Dias tidak pandai berhitung"],
          correctIndex: 4
        },
        {
          question: "Beberapa guru olah raga bergabung dalam paguyuban guru olahraga. Setiap guru olahraga tidak ada yang menjadi anggota paguyuban lain. Pak Narto adalah anggota paguyuban lain.",
          options: ["Pak Narto adalah anggota paguyuban guru olah raga", "Semua anggota paguyuban guru olah raga adalah anggota paguyuban lain", "Pak Narto bukan anggota paguyuban guru olah raga", "Beberapa guru olah raga bukan anggota paguyuban lain", "Beberapa anggota paguyuban lain adalah anggota paguyuban guru olahraga"],
          correctIndex: 2
        },
        {
          question: "Semua anggota keluarga Bu Mira berprofesi sebagai guru. Jaka adalah seorang pedagang",
          options: ["Jaka belum tentu anggota keluarga Bu Mira", "Jaka bukan anggota keluarga Bu Mira", "Anggota keluarga Bu Mira adalah Jaka", "Jaka adalah anggota keluarga Bu Mira", "Jaka anggota keluarga Bu Mira yang adalah seorang pedagang"],
          correctIndex: 1
        },
        {
          question: "Semua pegawai bank memakai seragam. Sebagian pegawai bank memakai jilbab.",
          options: ["Sebagian pegawai bank memakai seragam dan tidak memakai jilbab.", "Sebagian pegawai bank tidak memakai seragam dan tidak memakai jilbab", "Semua pegawai bank memakai seragam dan memakai jilbab", "Sebagian pegaawai bank tidak memakai seragam tetapi memakai jilbab", "Ada pegawai bank yang memakai seragam dan tidak memakai jilbab"],
          correctIndex: 4
        },
        {
          question: "Semua gunung berbatu dan menjulang. Anda berada di tempat yang tidak berbatu dan tidak menjulang. ",
          options: ["Anda berada di gunung berbatu.", "Anda berada di gunung yang tidak menjulang.", "Anda bukan berada di gunung.", "Anda berada di gunung yang tidak berbatu.", "Anda berada di gunung yang tidak berbatu dan tidak menjulang."],
          correctIndex: 2
        },
        {
          question: "Sepatu merah lebih bagus dari sepatu hitam. Sepatu yang lebih bagus harganya lebih mahal dan banyak dibeli orang. ",
          options: ["Ada sepatu hitam yang lebih mahal dan lebih banyak dibeli orang.", "Sepatu merah yang tidak lebih bagus dari sepatu hitam harganya murah.", "Sepatu yang lebih banyak dibeli orang belum tentu lebih bagus.", "Sepatu merah lebih banyak dibeli orang walaupun harganya lebih mahal.", "Ada sepatu merah yang harganya lebih mahal tidak banyak dibeli orang."],
          correctIndex: 3
        },
        {
          question: "Semua negara berkembang masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi. Indonesia adalah negara berkembang. ",
          options: ["Indonesia tidak bermasalah dengan tingkat pengangguran yang tinggi tapi bermasalah dengan kemiskinan.", "Indonesia bermasalah dengan tingkat kemiskinan yang tinggi tetapi tidak dengan tingkat pengangguran.", "Indonesia tidak bermasalah dengan tingkat pengangguran yang tinggi dan juga tidak dengan kemiskinan.", "Bisa jadi Indonesia masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi.", "Indonesia masih bermasalah dengan tingkat pengangguran dan kemiskinan yang tinggi."],
          correctIndex: 4
        },
        {
          question: "Teman yang baik adalah yang dapat menerima keadaan kita.Sebagian teman dari desa C tidak dapat menerima keadaan kita. ",
          options: ["Semua teman di desa C adalah teman yang tidak baik", "Semua teman di desa C adalah teman yang baik", "Sebagian teman di desa C adalah teman yang baik", "Sebagian teman yang baik berasal bukan dari desa C", "Semua teman yang tidak baik berasal dari desa C"],
          correctIndex: 2
        },
        {
          question: "Di rumah sakit semua dokter berbaju putih dan membawa stetoskop. Anton ada di rumah sakit, ia tidak berbaju putih dan tidak membawa stetoskop. ",
          options: ["Anton seorang dokter yang tidak berbaju putih", "Anton bukan seorang dokter yang berbaju putih", "Anton seorang dokter yang tidak membawa stetoskop", "Anton bukan seorang dokter", "Anton seorang dokter yang tidak membawa stetoskop dan tidak berbaju putih"],
          correctIndex: 3
        },
        {
          question: "Semua penerima beasiswa mempunyai prestasi istimewa. Beberapa siswa menerima beasiswa. ",
          options: ["Semua siswa berprestasi istimewa menerima beasiswa", "Tidak ada siswa yang tidak berprestasi istimewa tidak menerima beasiswa", "Beberapa siswa mempunyai prestasi istimewa", "Ada siswa penerima beasiswa yang tidak mempunyai prestasi istimewa", "Tidak ada siswa berprestasi istimewa yang menerima beasiswa"],
          correctIndex: 2
        },
        {
          question: "Semua tenda beratap dan tinggi. Andi berada di tempat yang tidak beratap dan tidak tinggi. Kesimpulan yang tepat adalah ..... ",
          options: ["Andi berada di tenda beratap.", "Andi berada di tenda tinggi.", "Andi berada di bukan tenda.", "Andi berada di tenda bukan beratap.", "Andi berada di tenda bukan beratap dan bukan tinggi."],
          correctIndex: 2
        },
        {
          question: "Bila naik kereta api, harus membayar kontan atau memakai tiket abonemen. Badu naik kereta api padahal tidak membayar kontan. Kesimpulan yang tepat adalah ..... ",
          options: ["Badu tidak membayar untuk naik kereta api.", "Badu membayar kontan untuk naik kereta api.", "Badu membayar dengan tiket abonemen.", "Badu tidak mempunyai tiket abonemen.", "Badu tidak mempunyai uang kontan."],
          correctIndex: 2
        },
        {
          question: "Korban yang memiliki tabungan kurang dari tiga juta rupiah mendapat bantuan dan hadiah. Yusuf menerima bantuan, tetapi tidak menerima hadiah. Kesimpulan yang tepat adalah ..... ",
          options: ["Yusuf adalah korban yang tabungannya lebih dari tiga juta rupiah.", "Yusuf adalah korban yang tabungannya kurang dari tiga juta rupiah.", "Yusuf adalah korban yang berhak menerima hadiah.", "Yusuf adalah bukan korban yang berhak menerima hadiah.", "Yusuf adalah korban yang tabungannya tiga juta rupiah."],
          correctIndex: 0
        },
        {
          question: "Bahan katun lebih baik daripada bahan nilon. Bahan yang lebih baik, lebih tahan lama dan lebih mahal. Kesimpulan yang tepat adalah ..... ",
          options: ["Bahan nilon lebih tahan lama dan lebih mahal daripada bahan katun", "Bahan nilon tidak lebih tahan lama, tetapi lebih mahal daripada bahan katun", "Bahan nilon tidak lebih tahan lama dan tidak lebih mahal daripada bahan katun", "Bahan nilon lebih tahan lama, tetapi tidak lebih mahal daripada bahan katun", "Bahan nilon sama tahan lama dan sama mahalnya dengan bahan katun"],
          correctIndex: 2
        },
        {
          question: "Semua yang berbunga adalah tanaman. Sebagian tanaman warnanya indah. Kesimpulan yang tepat adalah ..... ",
          options: ["Semua yang berbunga warnanya tidak indah.", "Semua yang warnanya tidak indah adalah tanaman.", "Semua tanaman adalah berbunga.", "Sebagian yang berbunga warnanya tidak indah.", "Semua yang warnanya tidak indah, tidak berbunga."],
          correctIndex: 3
        },
        {
          question: "Semua penipu pandai bicara dan ramah. Tuan M tidak ramah, tetapi pandai bicara. Kesimpulan yang tepat adalah ..... ",
          options: ["Tuan M seorang penipu yang pandai bicara.", "Tuan M seorang penipu yang tidak ramah.", "Tuan M seorang penipu yang pandai bicara dan tidak ramah.", "Tuan M bukan seorang penipu, meskipun pandai bicara.", "Tuan M bukan seorang penipu yang ramah."],
          correctIndex: 3
        },
        {
          question: "Jika Koko tidak menghentikan kebiasaan merokok, maka penyakit jantungnya akan bertambah parah.Jika sakit jantungnya bertambah parah, maka Koko tidak bisa ikut bertanding membela kesebelasan kebanggaan kota A.Koko bertanding membela kesebelasan kota A.Kesimpulan yang benar adalah ..... ",
          options: ["Sakit jantung Koko tidak parah.", "Koko sudah kebal terhadap nikotin.", "Koko telah mengurangi dosis merokoknya.", "Koko tidak merokok lagi.", "Koko dipaksa bermain oleh pelatihnya."],
          correctIndex: 3
        },
        {
          question: "Kenny, pemain bulutangkis Klub Jaya, dapat melakukan service forehand dengan baik.Setiap pemain yang bisa melakukan service forehand dengan baik dapat melakukan dropshot akurat.Kesimpulan yang benar adalah ..... ",
          options: ["Beberapa pemain bulutangkis Klub Jaya dapat melakukan dropshot dengan baik.", "Semua pemain bulutangkis Klub Jaya dapat melakukan service forehand dengan baik dan dropshot yang akurat.", "Beberapa pemain bulutangkis Klub Jaya dapat melakukan service forehand dengan baik dan dropshot yang akurat.", "Beberapa pemain bulutangkis Klub Jaya tidak dapat melakukan service forehand dengan baik tetapi dapat melakukan dropshot yang akurat.", "Semua pemain bulutangkis dapat melakukan service forehand dengan baik dan dropshot yang akurat."],
          correctIndex: 2
        },
        {
          question: "Semua pohon bercabang dan berakar. Tanaman A berakar, tetapi tidak bercabang. Kesimpulan yang tepat adalah ..... ",
          options: ["Tanaman A adalah pohon yang berakar.", "Tanaman A adalah pohon yang tidak bercabang.", "Tanaman A adalah pohon yang berakar dan tidak bercabang.", "Tanaman A adalah pohon bercabang.", "Tanaman A adalah bukan pohon bercabang."],
          correctIndex: 4
        },
        {
          question: "Semua santri pandai berbahasa Arab. Santri yang pandai berbahasa Arab pandai pula berpidato. Sebagian santri yang pandai berpidato tidak suka Matematika. ",
          options: ["Sebagian santri tidak suka Matematika dan tidak pandai berbahasa Arab", "Sebagian santri suka Matematika dan pandai berbahasa Arab", "Sebagian santri suka Matematika tetapi tidak pandai berbahasa Arab", "Sebagian santri suka Matematika dan tidak pandai berbahasa Arab", "Sebagian santri suka Matematika tetapi tidak suka berbahasa Arab"],
          correctIndex: 1
        },
        {
          question: "Semua pekerja harus mengenakan topi pengaman. Sementara pekerja mengenakan sarung tangan. ",
          options: ["Sementara pekerja tidak mengenakan topi pengaman.", "Semua pekerja tidak mengenakan sarung tangan.", "Sementara pekerja mengenakan topi pengaman dan sarung tangan.", "Sementara pekerja tidak mengenakan topi pengaman dan mengenakan sarung tangan.", "Sementara pekerja tidak mengenakan topi pengaman dan tidak mengenakan sarung tangan."],
          correctIndex: 2
        },
        {
          question: "Semua anggota asosiasi profesi harus hadir dalam rapat. Sementara dokter adalah anggota asosiasi. ",
          options: ["Semua yang hadir dalam rapat adalah dokter", "Semua anggota rapat bukan anggota asosiasi profesi", "Sementara peserta rapat adalah dokter", "Semua dokter hadir dalam rapat", "Semua yang hadir bukan dokter"],
          correctIndex: 2
        },
        {
          question: "Semua seniman kreatif. Sementara ilmuan tidak kreatif. ",
          options: ["Sementara ilmuan bukan seniman", "Tidak ada seniman yang ilmuan", "Sementara individu yang kreatif bukan seniman", "Sementara ilmuan kreatif", "Sementara ilmuan tidak kreatif"],
          correctIndex: 3
        },
        {
          question: "Tidak semua hipotesis penelitian terbukti benar. Sementara penelitian disertasi tidak menguji hipotesis. ",
          options: ["Sementara dokter tidak menulis disertasi", "Sementara hipotesis disertasi tidak terbukti", "Semua hipotesis disertasi terbukti benar", "Semua hipotesis penelitian terbukti benar", "Semua dokter, hipotesis disertasinya benar"],
          correctIndex: 1
        },
        {
          question: "Pengendara sepeda motor yang melewati jalan protokol harus mengenakan helm. Sementara murid yang bersepeda motor tidak mempunyai helm. ",
          options: ["Semua murid tidak boleh melewati jalan protokol", "Semua murid bersepeda motor boleh melewati jalan protokol", "Semua murid bersepeda motor tidak boleh melewati jalan protokol", "Semua murid bersepeda motor harus mengenakan helm", "Sementara murid bersepeda motor boleh melewati jalan protokol"],
          correctIndex: 4
        },
        {
          question: "Sementara sarjana adalah dosen. Semua dosen harus meneliti. ",
          options: ["Sementara sarjana bukan dosen", "Sementara peneliti bukan dosen", "Sementara dosen tidak meneliti", "Sementara peneliti adalah dosen", "Semua sarjana harus meneliti"],
          correctIndex: 0
        },
        {
          question: "Sementara penyanyi ada pada kedudukan utama. Semua yang ada pada kedudukan utama mendatangkan uang. ",
          options: ["Sementara penyanyi tidak pada kedudukan utama", "Sementara yang mendatangkan uang adalah penyanyi", "Sementara yang pada kedudukan utama adalah penyanyi", "Sementara penyanyi tidak mendatangkan uang", "Semua penyanyi ada pada kedudukan utama"],
          correctIndex: 0
        },
        {
          question: "Semua jenis ikan bernafas dengan insang. Ikan paus bernafas dengan paru-paru. ",
          options: ["Sementara jenis ikan bernafas dengan paru-paru", "Semua ikan paus bernafas dengan insang", "Sementara ikan paus bernafas dengan insang", "Semua ikan paus termasuk ikan", "Semua ikan paus bukan termasuk ikan"],
          correctIndex: 4
        },
        {
          question: "Semua manusia tidak bertanduk. Semua kucing tidak memamah biak. ",
          options: ["Semua manusia tidak memamah biak", "Kucing tidak bertanduk", "Manusia dan kucing tidak memamah biak dan tidak bertanduk", "Manusia sama dengan kucing", "Tidak dapat ditarik kesimpulan"],
          correctIndex: 4
        },
        {
          question: "Semua penyelam adalah perenang. Sementara penyelam adalah pelaut. ",
          options: ["Sementara pelaut adalah perenang", "Sementara perenang bukan penyelam", "Semua pelaut adalah perenang", "Sementara penyelam bukan pelaut", "Sementara penyelam bukan perenang"],
          correctIndex: 3
        },
        {
          question: "Lingkaran dari kalimat “Sekarang hujan atau tidak hujan” adalah ... ",
          options: ["Besok hujan atau tidak hujan", "Besok hujan deras", "Sekarang cerah", "Besok dan sekarang tidak hujan", "Sekarang hujan dan tidak hujan"],
          correctIndex: 4
        },
        {
          question: "Jika kamu lulus, maka kamu dapat hadiah. Dengan demikian ... ",
          options: ["Jika kamu tidak lulus, maka kamu tidak dapat hadiah", "Kamu tidak lulus, jika kamu tidak dapat hadiah", "Kamu lulus dan dapat hadiah", "Lulus atau tidak, tetap dapat hadiah", "Kamu tidak lulus dan dapat hadiah"],
          correctIndex: 1
        },
        {
          question: "Jika rawa itu dalam maka rawa itu banyak buayanya. Pernyataan ini sama artinya dengan .... ",
          options: ["Jika rawa itu tidak dalam maka rawa itu tidak banyak buayanya. ", "Jika rawa itu banyak buayanya maka rawa itu dalam. ", "Jika rawa itu tidak banyak buayanya maka rawa itu tidak dalam. ", "Jika rawa itu dalam maka buayanya tidak banyak. ", "Jika buayanya tidak banyak maka rawa itu dalam."],
          correctIndex: 2
        },
        {
          question: "Jika Paul Walker meninggal dunia maka pemeran utama film The Fast the Furious akan diganti. Pernyataan ini sama artinya dengan ... ",
          options: ["Paul Walker tidak meninggal dunia dan pemeran utama film The Fast the Furious akan diganti. ", "Jika Paul Walker meninggal dunia maka pemeran utama film The Fast the Furious tidak akan diganti. ", "Jika Paul Walker tidak meninggal dunia maka pemeran utama film The Fast the Furious diganti. ", "Paul Walker tidak meninggal dunia atau pemeran utama The Fast the Furious akan diganti. ", "Pemeran utama The Fast the Furious akan diganti meskipun Paul Walker tidak meninggal dunia."],
          correctIndex: 3
        },
        {
          question: "Jika manusia mengetahui ajalnya maka ia akan senantiasa berbuat baik. Pernyataan ini sama artinya dengan ... ",
          options: ["Jika manusia tidak mengetahui ajalnya maka ia akan senantiasa berbuat baik. ", "Jika manusia jarang berbuat baik maka ia tidak mengetahui ajalnya.", "Jika manusia tidak mengetahui ajalnya maka ia tidak senantiasa berbuat baik. ", "Manusia jarang berbuat baik karena ia mengetahui ajalnya.", "Manusia mengetahui ajalnya atau ia berbuat baik. "],
          correctIndex: 1
        },
        {
          question: "Jika rutin berolahraga maka semangat bekerja akan meningkat. Pernyataan ini sama artinya dengan ... ",
          options: ["Jika semangat kerja tidak meningkat maka tidak rutin berolahraga. ", "Jika semangat kerja meningkat maka tidak rutin berolahraga. ", "Jika tidak rutin berolahraga maka semangat bekerja tidakakan meningkat. ", "Meskipun rutin berolahraga, semangat bekerja tidak meningkat. ", "Rutin berolahraga atau semangat bekerja tidak akan meningkat. "],
          correctIndex: 1
        },
        {
          question: "Jika kita saling menghargai maka akan tercipta kedamaian. Pernyataan ini sesuai dengan ... ",
          options: ["Jika kita saling menghargai maka tidak akan tercipta kedamaian. ", "Kita tidak saling menghargai sehingga tidak akan tercipta kedamaian. ", "Jika kedamaian tidak tercipta maka kita tidak saling menghargai. ", "Kita saling menghargai meskipun kedamaian tidak akan tercipta.", "Kita saling menghargai atau kedamaian akan tercipta. "],
          correctIndex: 2
        },
        {
          question: "Semua pemain gamelan profesional adalah seniman. Sejumlah mahasiswa adalah pemain gamelan profesional. ",
          options: ["Sejumlah mahasiswa bukan pemain gamelan profesional. ", "Sejumlah mahasiswa adalah seniman", "Sejumlah mahasiswa bukan seniman. ", "Tidak ada mahasiswa yang menjadi seniman. ", "Tidak ada mahasiswa yang menjadi pemain gamelan profesional. "],
          correctIndex: 1
        },
        {
          question: "Semua narapidana pasti pernah melakukan kejahatan. Sejumlah orang yang melakukan kejahatan menyesali perbuatannya dan bertaubat. ",
          options: ["Sejumlah narapidana bukan orang yang melakukan kejahatan. ", "Sejumlah orang yang yang melakukan kejahatan adalah narapidana. ", "Sejumlah narapidana menyesali perbuatannya dan bertaubat. ", "Semua orang yang menyesali perbuatannya dan bertaubat adalah narapidana. ", "Semua orang yang menyesali perbuatannya dan bertaubatbukan narapidana. "],
          correctIndex: 2
        },
        {
          question: "Semua toko di blok O menjual buah atau sembako. Sebagian toko di blok O yang menjual sembako mempekerjakan karyawan laki-laki. ",
          options: ["Semua karyawan yang bekerja di toko buah adalah laki-laki. ", "Tidak ada karyawan laki-laki yang bekerja di toko buah dan sembako. ", "Semua karyawan yang bekerja di toko sembako adalah perempuan ", "Sebagian karyawan toko di blok O adalah laki-laki. ", "Sebagian toko di blok O tidak mempekerjakan karyawan perempuan. "],
          correctIndex: 3
        },
        {
          question: "Semua lapangan adalah tanah yang luas dan terbuka. Sebagian lapangan dijadikan ladang. ",
          options: ["Semua tanah yang luas dan terbuka dijadikan ladang.", "Semua tanah yang dijadikan ladang adalah lapangan. ", "Semua lapangan adalah ladang.", "Sebagian ladang adalah tanah luas dan terbuka", "Sebagian tanah yang luas dan terbuka adalah ladang. "],
          correctIndex: 4
        },
        {
          question: "Semua ibu yang melahirkan pasti menyusui. Sebagian ibu yang menyusui tidak mengonsumsi makanan bergizi. ",
          options: ["Sebagian ibu yang melahirkan tidak dapat mengonsumsi makanan bergizi. ", "Semua ibu yang menyusui pasti mengalami proses melahirkan. ", "Sebagian ibu yang melahirkan tidak mengonsumsi makanan bergizi. ", "Semua ibu yang mengonsumsi makanan bergizi memiliki ASI yang baik.", "Semua ibu yang melahirkan tidak mengonsumsi makanan bergizi. "],
          correctIndex: 2
        },
        {
          question: "Jika ingin menjadi pegawai teladan maka Anda harus bersikap disiplin. Jika ingin bersikap disiplin maka Anda harus datang ke kantor tepat waktu dan tidak bolos. ",
          options: ["Sebagian orang yang ingin bersikap disiplin maka ia harus datang ke kantor tepat waktu dan tidak bolos. ", "Jika datang ke kantor tepat waktu dan tidak bolos maka Anda menjadi pegawai teladan. ", "Semua orang yang datang ke kantor tepat waktu dan tidak bolos akan menjadi pegawai teladan. ", "Semua orang yang ingin menjadi pegawai teladan harus datang ke kantor tepat waktu dan tidak bolos. ", "Semua orang tidak datang ke kantor tepat waktu dan bolos, tetapi menjadi pegawai teladan"],
          correctIndex: 3
        },
        {
          question: "Jika bepergian ke Madura maka Anda harus datang ke sumber api abadi di Pamekasan. Jika datang ke sumber api abadi di Pamekasan maka Anda harus melalui Jembatan Suramadu. ",
          options: ["Bila Anda pergi ke Pamekasan melalui Jembatan Suramadu maka Anda dapat melihat sumber api abadi. ", "Semua orang yang bepergian ke Madura harus melalui Jembatan Suramadu. ", "Jika Anda melalui Jembatan Suramadu maka itu tandanya Anda ke arah Madura.", "Sebagian orang yang bepergian ke Madura harus melalui Jembatan Suramadu. ", "Sebagian orang yang melalui Jembatan Suramadu berarti bepergian ke Madura. "],
          correctIndex: 1
        },
        {
          question: "Jika Anda ingin menjadi seorang cendekiawan maka lanjutkanlah pendidikan hingga ke perguruan tinggi. Jika Anda melanjutkan pendidikan hingga ke perguruan tinggi maka merantaulah ke kota pelajar, Yogyakarta. ",
          options: ["Semua orang yang melanjutkan pendidikan hingga ke perguruan tinggi harus merantau ke kota pelajar, Yogya ka rta. ", "Yogyakarta adalah sebenar-benarnya kota pelajar yang membuatmu menjadi seorang cendekiawan. ", "Sebagian orang yang merantau ke kota pelajar, Yogyakarta, belum tentu menjadi seorang cendekiawan. ", "Tidak semua orang ingin menjadi cendekiawan, tetapi mereka melanjutkan pendidikan hingga ke perguruan tinggi di Yogyakarta. ", "Semua orang yang ingin menjadi seorang cendekiawan merantau ke kota pelajar, Yogyakarta. "],
          correctIndex: 4
        },
        {
          question: "Jika Anda ingin dihargai oleh orang lain maka hargailah diri sendiri. Jika Anda menghargai diri sendiri maka Anda harus yakin dan menjadi diri sendiri. ",
          options: ["Sebagian orang yang ya kin dan menjadi diri sendiri akan dihargai oleh orang lain. ", "Semua orang yang ingin dihargai oleh orang lain harus yakin dan menjadi dirinya sendiri. ", "Semua orang yang menghargai diri sendiri terkadang tidak yakin dan tidak menjadi dirinya sendiri. ", "Sebagian orang yang menghargai diri sendiri sudah sepantasnya dihargai oleh orang lain. ", "Sebagian orang yang yakin dan menjadi diri sendiri berarti menghargai dirinya sendiri. "],
          correctIndex: 1
        },
        {
          question: "Jika Anda ingin berlibur ke luar negeri maka menabunglah secara rutin. Agar Anda dapat menabung secara rutin maka berhematlah dalam belanja. ",
          options: ["Menabung hanya dilakukan jika Anda ingin berlibur ke luar negeri. ", "Menabung secara rutin memang banyak manfaatnya, di antaranya dapat berhemat dan berlibur ke luar negeri.", "Berlibur ke luar negeri membutuhkan uang yang banyak, jadi menabung dan berhematlah. ", "Agar dapat berlibur ke luar negeri maka berhematlah dalam belanja.", "Berhematlah dalam belanja, sehingga Anda dapat berlibur ke luar negeri. "],
          correctIndex: 3
        },
        {
          question: "Didi memperoleh penghargaan di kantornya karena menjadi karyawan berprestasi. Setiap karyawan yang berprestasi membawa hal-hal positif pada kantornya. ",
          options: ["Didi adalah karyawan berprestasi. ", "Didi hanya seorang karyawan yang berprestasi. ", "Didi membawa hal-hal positif di kantornya. ", "Didi hanya memperoleh penghargaan karena membawa hal-hal positif di kantornya. ", "Didi memang karyawan yang positif. "],
          correctIndex: 2
        },
        {
          question: "Tika termasuk salah satu pimpinan di kantornya. Setiap pimpinan kantor bertanggung jawab atas kinerja para karyawan. ",
          options: ["Tika harus lebih baik dari para karyawannya. ", "Tika sudah pasti mampu meningkatkan kinerja para karyawan. ", "Tika hanya seorang pimpinan di kantor", "Tika bertanggung jawab atas kinerja para karyawannya. ", "Tika sebaiknya mendekatkan diri kepada para karyawan. "],
          correctIndex: 3
        },
        {
          question: "Setiap PNS mengabdi hanya kepada bangsanya. Jantung suatu bangsa adalah rakyatnya. ",
          options: ["Setiap PNS memiliki jantung.", "Setiap PNS sudah sewajarnya mengabdi kepada bangsa.", "Sebagian PNS yang mengabdi kepada rakyat. ", "Setiap PNS mengabdi kepada rakyat. ", "Sebagian PNS yang mengabdi kepada bangsanya. "],
          correctIndex: 3
        },
        {
          question: "Rindu memperoleh tiket tamasya ke Hongkong. Di samping bertamasya ke Hongkong, setiap pemenang kuis berhak mendapat diskon belanja sebesar 15% di pusat perbelanjaan di Hongkong yang telah ditentukan. ",
          options: ["Rindu mendapat durian runtuh. ", "Rindu mendapat diskon belanja sebesar 15% di pusat perbelanjaan di Hongkong yang telah ditentukan. ", "Rindu dapat menggunakan diskon belanja untuk berbelanja di pusat perbelanjaan di Hongkong yang telah ditentukan. ", "Rindu termasuk salah satu pemenang kuis. ", "Rindu bertamasya ke Hongkong dan mendapat diskon belanja. "],
          correctIndex: 1
        },
        {
          question: "Jaka mengikuti kontes binaraga. Setiap peserta kontes binaraga harus mengikuti seleksi kebugaran. ",
          options: ["Jaka adalah peserta kontes binaraga. ", "Jaka memang laki-laki ideal.", "Jaka harus berlatih untuk kontes binaraga. ", "Jaka tak perlu mengikuti seleksi kebugaran. ", "Jaka harus mengikuti seleksi kebugaran. "],
          correctIndex: 4
        },
        {
          question: "Calon PNS dapat memperoleh informasi akurat melalui website resmi pemerintah dan BKD setempat atau langsung menanyakannya ke Panselnas yang bertugas di tiap BKD. Di Kabupaten Tebo, jarmgan internet sangat sulit dan sering terganggu. ",
          options: ["Calon PNS melihat website resmi pemerintah setempat. ", "Calon PNS melihat website resmi BKD setempat.", "Calon PNS menanyakan informasi akurat ke Panselnas yang bertugas di tiap BKD. ", "Calon PNS tinggal di Kabupaten Tebo. ", "Calon PNS mahir menggunakan internet. "],
          correctIndex: 2
        },
        {
          question: "Beno menjuarai olimpiade sains tingkat internasional. Setiap juara olimpiade tingkat internasional tahun ini telah mengharumkan bangsa Indonesia. ",
          options: ["Beno telah mengharumkan bangsa Indonesia.", "Beno telah menjadi juara. ", "Beno hanya menjuarai olimpiade sains tingkat internasional.", "Beno berkewarganegaraan Indonesia. ", "Beno pantas menjadi juara dan mengharumkan nama bangsa."],
          correctIndex: 0
        },
        {
          question: "Dengan sepeda motor, Rudi dapat menempuh perjalanan dari rumah ke kantor dalam waktu 15 menit. Dari rumah ke kantor, Rudi berjalan kaki. ",
          options: ["Perjalanan Rudi kurang dari 15 menit. ", "Perjalanan Rudi selama 15 menit. ", "Perjalanan Rudi lebih dari 15 menit. ", "Perjalanan Rudi tidak lebih dan tidak kurang dari 15 menit. ", "Perjalanan Rudi 15 menit lebih lambat. "],
          correctIndex: 2
        },
        {
          question: "Seseorang dapat dikatakan sebagai seorang penyanyi profesional jika ia mengusai banyak teknik bernyanyi. Danang menguasai beberapa teknik bernyanyi. ",
          options: ["Danang bukanlah penyanyi profesional.", "Danang adalah seorang pelatih bernyanyi.", "Danang masih perlu berlatih agar menjadi penyanyi profesional. ", "Danang dapat dikatakan sebagai seorang penyanyi profesional. ", "Danang selalu menunjukkan teknik bernyanyinya. "],
          correctIndex: 3
        },
        {
          question: "Lesti sangat pandai menari Jaipong. Setiap penari Jaipong menari dengan gerakan yang lincah. ",
          options: ["Lesti adalah seorang penari. ", "Lesti menari dengan gerakan yang lincah.", "Lesti menyukai tarian Jaipong. ", "Lesti hanya suka menari Jaipong. ", "Lesti terbiasa dengan gerakan yang lincah."],
          correctIndex: 1
        },
        {
          question: "Semua kepala sekolah adalah sarjana. Sementara kepala sekolah adalah guru. ",
          options: ["Guru bisa menjadi kepala sekolah. ", "Sementara guru adalah sarjana. ", "Sementara sarjana bisa menjadi kepala sekolah. ", "Semua guru adalah sarjana. ", "Semua kepala sekolah awalnya adalah mahasiswa."],
          correctIndex: 3
        },
        {
          question: "Semua Marinir berbadan tegap. Bayu adalah seorang Marinir. ",
          options: ["Bayu berbadan tegap.", "Bayu adalah marinir yang kekar. ", "Bayu pantas menjadi seorang marinir. ", "Bayu hanya memiliki badan yang tegap. ", "Bayu bukanlah seorang prajurit. "],
          correctIndex: 0
        },
        {
          question: "Tidak seorang pun boleh mengendarai motortanpa memiliki surat izin mengemudi (SIM} C. Sebagian mahasiswa bekerja sebagai operator Gojek. ",
          options: ["Sebagian mahasiswa adalah operator Gojek yang tidak memiliki Sim C. ", "Sebagian mahasiswa memiliki SIM C. ", "Sebagian mahasiswa yang tidak memiliki SIM C adalah operator Gojek. ", "Tidak ada mahasiswa yang memiliki SIM C sebagai operator Gojek. ", "Sebagian mahasiswa yang berprofesi sebagai operator Gojek tidak memiliki SIM C. "],
          correctIndex: 1
        },
        {
          question: "Tidak seorang pun pengunjung pameran furnitur diizinkan memotret barang-barang yang dipamerkan. Sebagian karyawan kantor A mengunjungi pameran furnitur. ",
          options: ["Semua karyawan pengunjung pameran furnitur tidak diizinkan memotret barang-barang yang dipamerkan. ", "Sebagian karyawan kantor A adalah pengunjung pameran furnitur. ", "Sebagian yang diizinkan memotret barang-barang yang dipamerkan adalah karyawan kantor A. ", "Sebagian karyawan kantor A tidak diizinkan memotret barang-barang yang dipamerkan. ", "Sebagian pengunjung pameran furnitur yang bukan karyawan kantor A diizinkan memotret barang-barang yang dipamerkan. "],
          correctIndex: 0
        },
        {
          question: "Tidak ada dua lukisan hasil karya seni Hendika yang memiliki objek yang sama. Lukisan A dan B adalah hasil karya seni Hendika. ",
          options: ["Sebagian lukisan hasil karya Hendika. ", "Semua pelukis menghasilkan karya seperti lukisan Adan B karya Hendika. ", "Lukisan A dan B tidak memiliki objek yang sama. ", "Lukisan yang objeknya sama berasal dari satu seniman yang sama. ", "Lukisan karya Hendika tidak memiliki objek yang sama. "],
          correctIndex: 2
        },
        {
          question: "Tidak satu pun rumah di kompleks perumahan Timoho Asri yang memiliki taman dan halaman. Rumah Rani memiliki taman dan halaman yang luas. ",
          options: ["Timoho Asri merupakan kompleks perumahan Rani. ", "Rumah Rani tidak terletak di kompleks perumahan Timoho Asri. ", "Rumah Rani dan kompleks perumahan Timoho Asri berdekatan. ", "Rumah Rani merupakan rumah terluas di kompleks perumahan Timoho Asri. ", "Rumah yang memiliki taman dan halaman yang luas adalah rumah milik Rani. "],
          correctIndex: 1
        },
        {
          question: "Tidak semua mahasiswi menyukai bunga. Semua perempuan suka makan cokelat. ",
          options: ["Semua mahasiswi dan perempuan suka makan cokelat. ", "Sebagian mahasiswi dan perempuan menyukai bunga. ", "Semua mahasiswi menyukai bunga. ", "Sebagian perempuan menyukai bunga, sedangkan semua mahasiswi suka makan cokelat. ", "Semua mahasiswi dan perempuan menyukai bunga dan makan cokelat. "],
          correctIndex: 1
        },
        {
          question: "Tidak seorang pun yang mampu menyelesaikan rintangan dalam program televisi Ninja Warier, kecuali seorang yang terlatih seperti prajurit. Bari adalah seorang prajurit. ",
          options: ["Bari telah terlatih menyelesaikan rintangan.", "Bari mampu menyelesaikan rintangan dalam program televisi Ninja Warior. ", "Bari mengikuti program televisi Ninja Waror. ", "Bari bukanlah orang yang menyelesaikan rintangan karena terlatih. ", "Bari berbakat dalam program televisi Ninja Warier."],
          correctIndex: 1
        },
        {
          question: "Hanya doa dan restu orangtua yang menjadikan seorang anak sukses. Sejumlah anak durhaka kepada ibunya. ",
          options: ["Semua anak durhaka tidak sukses. ", "Sejumlah anak tidak sukses. ", "Sejumlah orangtua tidak memberi doa dan restu mereka. ", "Sejumlah anak menjadi orang sukses. ", "Semua orangtua tetap memberi doa dan restu mereka."],
          correctIndex: 0
        },
        {
          question: "Tidak seorang pun siswa yang pandai berbahasa Arab, kecuali siswa jurusan bahasa. Lia adalah siswa jurusan bahasa. ",
          options: ["Tidak seorang pun siswa yang pandai berbahasa Arab, kecuali siswa jurusan bahasa. Lia adalah sisa jurusan bahasa. ", "Lia hanya seorang siswa di sekolahnya. ", "Lia pandai berbahasa Arab. ", "Lia belajar bahasa Arab. ", "Lia menyukai jurusan bahasa. "],
          correctIndex: 2
        },
        {
          question: "Hari ini pertandingan antara Persib melawan Arema akan digelar. Kerusuhan antarpenonton bisa terjadi di mana saja termasuk saat ada pertandingan sepak bola. ",
          options: ["Pertandingan antara Persib melawan Arema digelar hari ini. ", "Setiap pertandingan antara Persib melawan Arema digelar selalu ada kerusuhan antarpenonton. ", "Tidak selamanya kerusuhan yang terjadi antarpenonton disebabkan adanya pertandingan sepak bola. ", "Setiap ada pertandingan sepak bola ada kerusuhan antarpenonton.", "Kerusuhan antarpenonton yang terjadi sebagai akibat digelarnya pertandingan antara Persib melawan Arema. "],
          correctIndex: 2
        },
        {
          question: "Sebagian kendaraan bermotormenggunakan solar. ",
          options: ["Semua sepeda motor menggunakan pertalite. ", "Semua mobil menggunakan bensin. ", "Semua kendaraan menggunakan pertamax. ", "Semua Truk menggunakan premium. ", "Sebagian mobil menggunakan bensin "],
          correctIndex: 4
        },
        {
          question: "Semua siswa berprestasi mendapat beasiswa dari pemerintah daerah. Ali mendapat beasiswa dari pemerintah daerah. ",
          options: ["Ali termasuk salah satu siswa berprestasi. ", "Ali pantas mendapat beasiswa karena pintar. ", "Ali tidak perlu berprestasi hanya untuk mendapat beasiswa dari pemerintah. ", "Ali pernah mendapat prestasi. ", "Ali adalah seorang siswa. "],
          correctIndex: 0
        },
        {
          question: "Satu keluarga yang tinggal di seberang rumah Ruri menyukai jus alpukat. Nanda tidak menyukai jus alpukat. ",
          options: ["Nanda adalah anggota keluarga yang tinggal di seberang rumah Ruri. ", "Nanda adalah keluarga seberang Ruri. ", "Keluarga seberang rumah Ruri memiliki anak perempuan bernama Nanda", "Nanda bukan salah satu anggota keluarga yang tinggal di seberang rumah Ruri. ", "Anggota keluarga yang tinggal di seberang rumah Ruri ada yang tidak suka jus avokat. "],
          correctIndex: 3
        },
        {
          question: "Semua orang berdiri ketika tamu terhormat memasuki ruangan. Pak Jokowi memasuki ruang rapat DPRD Kab. Batanghari. ",
          options: ["Tidak semua orang berdiri ketika Pak Jokowi memasuki ruangan rapat.", "Tidak ada seorang pun yang tidak berdiri ketika Pak Jokowi memasuki ruang rapat DPRD Kab. Batanghari. ", "Tidak ada seorang pun yang mengetahui bahwa Pak Jokowi adalah tamu terhormat. ", "Semua orang tahu bahwa Pak Jokowi adalah tamu terhormat.", "Semua orang tidak berdiri karena telah disediakan kursi. "],
          correctIndex: 1
        },
        {
          question: "Semua ikan hidup di air. Beberapa ikan hidup di air asin. ",
          options: ["Semua ikan hidup di air asin dan tawar. ", "Beberapa ikan yang hidup di air asin tidak dapat hidup di sungai. ", "Ada ikan yang tidak hidup di air asin. ", "Tidak ada ikan yang hidup di air sungai. ", "Semua ikan hidup di air tawar saja. "],
          correctIndex: 2
        },
        {
          question: "Semua penduduk pesisir pantai bermata pencaharian sebagai nelayan. Pak Waluyo tinggal di pesisir pantai dan membuka warung makan. ",
          options: ["Pak Waluyo tinggal di pesisir pantai karenanya ia bermata pencaharian sebagai nelayan. ", "Meskipun Pak Waluyo membuka warung makan, tetapi ia tetap bekerja sebagai nelayan. ", "Ada penduduk yang tidak bermata pencaharian sebagai nelayan. ", "Sebagian penduduk bermata pencaharian sebagai nelayan. ", "Pak Waluyo membuka warung makan sekalipun tinggal di pesisir pantai. "],
          correctIndex: 1
        },
        {
          question: "Semua pendonor darah harus sehat. Sebagian pendonor darah memiliki golongan darah O. ",
          options: ["Sebagian orang yang bergolongan darah O dan menjadi pendonor darah sehat.", "Semua pendonor darah harus bergolongan darah O dan berbadan sehat. ", "Semua pendonor darah O adalah pendonor yang sehat. ", "Sebagian orang yang memiliki golongan darah O menjadi pendonor darah yang sehat. ", "Semua pendonor darah O harus berbadan sehat. "],
          correctIndex: 3
        },
        {
          question: "Siswa kelas 3 baru naik kelas 4 jika sudah lulus ujian perkalian dan pembagian. Ida dan Fikri adalah sisa kelas 4. ",
          options: ["Ida dan Fikri pasti mampu mengerjakan ujian perkalian dan pembagian. ", "Fikri tidak lulus ujian perkalian, tetapi lulus ujian pembagian. ", "Ida tidak lulus ujian pembagian, tetapi lulus ujian perkalian. ", "Ida dan Fikri belum tentu mampu mengerjakan ujian perkalian dan pembagian. ", "Ida lebih pandai dalam perkalian dibanding Fikri yang pandai dalam pembagian. "],
          correctIndex: 0
        },
        {
          question: "Salah satu syarat diterima sebagai PNS adalah lulus tes CPNS. Yaswinda adalah salah satu PNS yang baru dilantik. ",
          options: ["Yaswinda memenuhi syarat sebagai PNS. ", "Yaswinda mengerjakan tes CPNS. ", "Yaswinda lulus tes CPNS. ", "Yaswinda dilantik karena lulus syarat PNS. ", "Yaswinda pernah menjadi peserta tes CPNS"],
          correctIndex: 2
        },
        {
          question: "Berenang adalah aktivitas yang pasti dilakukan oleh Nofa di Minggu pagi. Hari Minggu ini, Nofa harus menyelesaikan revisi skripsinya. ",
          options: ["Hari Minggu ini Nofa tidak berenang. ", "Hari Minggu ini Nofa ragu untuk berenang. ", "Minggu pagi ini Nofa pergi berenang meskipun harus menyelesaikan revisi skripsi.", "Nofa membagi waktunya. ", "Nofa memilih menyelesaikan revisi skripsinya dibanding berenang. "],
          correctIndex: 2
        },
        {
          question: "Novi selalu libur di hari Senin. la menggantikan jadwal rekan kerjanya di hari Minggu. Laras adalah rekan kerja Novi yang minta digantikan jadwal kerjanya pada hari Senin minggu ini. ",
          options: ["Novi lembur di hari Senin. ", "Novi tidak libur sama sekali minggu depan. ", "Novi libur di hari Senin minggu depan. ", "Laras tidak libur sama sekali. ", "Novi dan Laras tidak libur sama sekali."],
          correctIndex: 0
        },
        {
          question: "Semua warga Desa Pelaut adalah pedagang. Pak Imam adalah warga Desa Pelaut. ",
          options: ["Pak Imam pasti seorang pelaut. ", "Pak Imam adalah seorang pedagang", "Pak Imam terpaksa menjadi pedagang karena tinggal di Desa Pelaut. ", "Pak Imam belum tentu seorang pedagang. ", "Pak Imam pindah ke desa tetangga agar tidak menjadi pedagang. "],
          correctIndex: 1
        },
        {
          question: "Uranus bukan bintang, tetapi termasuk benda langit. Matahari adalah bintang. ",
          options: ["Uranus dan bintang adalah benda langit. ", "Matahari adalah benda langit. ", "Uranus dan Matahari berbeda. ", "Bintang disebut Matahari.", "Matahari adalah bintang tetapi bukan benda langit. "],
          correctIndex: 1
        },
        {
          question: "Penyelam adalah perenang. Sementara penyelam adalah pelaut. ",
          options: ["Pelaut adalah perenang.", "Tidak semua perenang adalah pelaut. ", "Penyelam bukan pelaut.", "Perenang bukan penyelam. ", "Beberapa penyelam adalah pelaut."],
          correctIndex: 0
        },
        {
          question: "Semua ponsel ada fasilitas sms. Sebagian ponsel ada fasilitas internet. ",
          options: ["Semua ponsel ada fasilitas sms dan internet", "Sebagian ponsel ada fasilitas sms dan internet", "Sebagian ponsel ada fasilitas internet tapi tidak ada fasilitas sms", "Semua yang ada fasilitas internet pasti ada fasilitas sms", "Semua yang ada fasilitas internet pasti merupakan ponsel"],
          correctIndex: 1
        },
        {
          question: "Rusa bertanduk indah. Kambing adalah binatang bertanduk. Kerbau mempunyai ekor dan tanduk. ",
          options: ["Rusa sama dengan kambing", "Rusa, kambing, dan kerbau adalah binatang bertanduk", "Rusa tidak berekor", "Kambing bertanduk tidak berekor", "Kerbau bertanduk indah"],
          correctIndex: 1
        },
        {
          question: "Jika pernyataan 'Semua dokter adalah laki-laki' salah, maka .... ",
          options: ["Sementara dokter adalah laki-laki", "Sementara laki-laki adalah bukan dokter", "Sementara dokter adalah bukan laki-laki", "Tidak ada dokter yang bukan laki-laki", "Tidak ada kesimpulan"],
          correctIndex: 2
        },
        {
          question: "Semua kepala sekolah adalah sarjana. Sementara kepala sekolah adalah guru. Jadi, .... ",
          options: ["Sementara guru adalah sarjana", "Sementara sarjana adalah kepala sekolah", "Sementara guru adalah kepala sekolah", "Semua guru adalah sarjana", "Kepala sekolah adalah guru"],
          correctIndex: 0
        },
        {
          question: "Semua sepeda memiliki lampu. Sebagian lampu berwarna merah. ",
          options: ["Semua sepeda memiliki lampu merah. ", "Tidak semua lampu sepeda berwarna merah.", "Lampu merah bagian perlengkapan semua sepeda. ", "Sebagian sepeda memiliki lampu berwarna merah. ", "Tidak ada sepeda yang berlampu selain merah. "],
          correctIndex: 3
        },
        {
          question: "Dalam suatu perjamuan makan, jika disajikan nasi goreng maka ayam goreng juga disajikan. Jika ayam goreng disajikan maka buah-buahan juga disajikan. ",
          options: ["Jika nasi goreng tidak disajikan maka buah-buahan tidak disajikan. ", "Jika ayam goreng disajikan maka buah-buahan tidak disajikan. ", "Jika buah-buahan tidak disajikan maka nasi goreng tidak disajikan. ", "Jika buah-buahan disajikan maka ayam goreng juga disajikan. ", "Jika buah-buahan disajikan maka nasi goreng juga disajikan. "],
          correctIndex: 2
        },
        {
          question: "Semua mahasiswa yang belajar pasti lulus ujian. Sebagian mahasiswa yang lulus ujian ternyata tidak belajar. ",
          options: ["Semua mahasiswa belajar. ", "Semua mahasiswa belajar dan lulus ujian. ", "Sebagian mahasiswa belajar dan lulus ujian. ", "Semua mahasiswa yang tidak belajar tidak lulus ujian. ", "Sebagian mahasiswa yang tidak lulus ujian ternyata belajar. "],
          correctIndex: 2
        },
        {
          question: "Semua ban terbuat dari karet. Semua karet bersifat elastis. Sebagian karet berwarna hitam. ",
          options: ["Semua ban elastis dan berwarna hitam. ", "Semua ban berwarna hitam. ", "Semua ban elastis berwarna hitam. ", "Sebagian ban berwarna hitam terbuat dari karet. ", "Semua ban elastis dan terbuat dari karet. "],
          correctIndex: 4
        },
        {
          question: "lnvers dari pernyataan: 'Jika harga minyak naik maka harga nasi padang naik' adalah ... ",
          options: ["Jika harga minyak tidak naik maka harga nasi padang naik. ", "Jika harga nasi padang naik maka harga minyak naik", "Jika harga minyak tidak naik maka harga nasi padang tidak naik. ", "Jika harga nasi padang tidak naik maka harga minyak tidak naik. ", "Jika harga nasi padang tidak naik maka harga minyak tidak naik. "],
          correctIndex: 2
        },
        {
          question: "Beberapa benda yang memuai adalah logam. Semua logam adalah benda padat. ",
          options: ["Hanya logam yang memuai merupakan benda padat. ", "Benda yang bukan logam tidak memuai. ", "Beberapa benda padat dapat memuai. ", "Benda padat dapat memuai. ", "Benda yang memuai adalah logam. "],
          correctIndex: 2
        },
        {
          question: "Semua karyawan harus hadir dalam rapat rutin. Sebagian office boy karyawan. ",
          options: ["Semua yang hadir dalam rapat rutin adalah office boy. ", "Sebagian peserta rapat rutin bukan karyawan ", "Sebagian peserta rapat rutin adalah office boy ", "Semua office boy hadir dalam rapat rutin", "Semua yang hadir bukan office boy."],
          correctIndex: 2
        },
        {
          question: "Semua anak pandai bernyanyi. Sebagian anak pandai memainkan gitar. Sebagian anak yang bermain gitar juga pandai meniup suling. ",
          options: ["Anak yang pandai bermain gitar tentu pandai bernyanyi. ", "Anak yang pandai bermain gitar tentu pandai meniup suling. ", "Anak yang pandai meniup suling tentu pandai bernyanyi. ", "Anak yang pandai bernyanyi belum tentu dapat bermain suling.", "Sebagian anak pandai bernyanyi, bermain gitar, dan meniup suling."],
          correctIndex: 4
        },
        {
          question: "Kebanyakan burung dapat terbang. Burung unta adalah juga seekor burung. Jadi ....",
          options: ["Burung unta dapat terbang", "Burung unta memang tidak dapat terbang", "Burung unta belum tentu dapat terbang", "Jawaban a,b, dan c ketiga-tiganya salah"],
          correctIndex: 0
        },
        {
          question: "Semua Mahasiswa ISTN lulus tepat pada waktunya. Sebagian Mahasiswa ISTN adalah Mahasiswa Program Perkuliahan Karyawan (P2K). Jadi ....",
          options: ["Semua Mahasiswa Program Perkuliahan Karyawan (P2K) ISTN lulus tepat pada waktunya.", "Sebagian Mahasiswa ISTN lulus tidak tepat pada waktunya", "Mahasiswa ISTN yang lulus tepat pada waktunya pasti Mahasiswa Program Perkuliahan Karyawan (P2K).", "Sebagian Mahasiswa ISTN adalah Mahasiswa Program Perkuliahan Karyawan (P2K)."],
          correctIndex: 0
        },
        {
          question: "Semua donor harus berbadan sehat. Sebagian donor darah memiliki golongan darah O. Jadi ...",
          options: ["Sebagian orang yang bergolongan darah O dan menjadi donor darah berbadan sehat.", "Semua donor harus memiliki golongan darah O dan berbadan sehat.", "Semua donor darah yang memiliki golongan darah O harus berbadan sehat.", "Yang berbadan sehat adalah yang memiliki golongan darah O dan menjadi donor darah."],
          correctIndex: 2
        },
        {
          question: "Di Jakarta telah banyak dibangun gedung bertingkat. Hotel-hotel dan pasar-pasar yang baru dibangun di negara kita banyak yang bertingkat. Pak Sarlito baru datang ke Jakarta dan tinggal di sebuah hotel. Pak Sarlito sudah merencanakan untuk melihat dari dekat gedung-gedung yang bertingkat. jadi...",
          options: ["Pak Sarlito menginap di hotel yang bertingkat", "Tidak ada hotel yang bertingkat di Jakarta", "Di Jakarta banyak hotel-hotel yang bertingkat", "Mungkin Pak Sarlito menginap di hotel yang tidak bertingkat"],
          correctIndex: 3
        },
        {
          question: "Hanya jika berbakat dan bekerja keras, seorang atlet dapat sukses sebagai atlet profesional. Berikut adalah kesimpulan yang secara logis dapat ditarik dari pernyataan di atas:",
          options: ["Jika seorang atlet berbakat dan bekerja keras, maka ia akan sukses sebagai atlet profesional.", "Jika seorang atlet tidak sukses sebagai atlet profesional, maka ia tidak berbakat.", "Jika seorang atlet tidak sukses sebagai atlet profesional, maka ia bukan pekerja keras.", "Jika seorang atlet tidak berbakat atau tidak bekerja keras, maka ia tidak akan sukses sebagai atlet profesional."],
          correctIndex: 3
        },
        {
          question: "Murid yang pandai dalam matematika lebih mudah belajar bahasa. Orang yang tinggal di negara asing lebih lancar berbicara dalam bahasa yang dipakai di negara tersebut. Tati lancar berbicara dalam bahasa Inggris. Jadi ....",
          options: ["Mungkin Tati bisu.", "Mungkin Tati tidak pernah tinggal diluar negeri.", "Mungkin Tati pernah tinggal di luar negeri.", "Tidak mungkin Tati pandai dalam matematik."],
          correctIndex: 2
        },
        {
          question: "Sarjana yang lulus dengan predikat cum laude harus memiliki indeks prestasi di atas 3,5. Beberapa mahasiswa yang menjadi sarjana lulus dengan indeks prestasi di bawah 3,5. Kesimpulan pernyataan di atas adalah :",
          options: ["Semua mahasiswa tidak lulus dengan predikat cum laude.", "Semua mahasiswa yang menjadi sarjana lulus dengan predikat cum laude.", "Semua mahasiswa yang menjadi sarjana memiliki indeks prestasi di atas 3,5", "Beberapa mahasiswa yang menjadi sarjana lulus dengan predikat cum laude."],
          correctIndex: 3
        },
        {
          question: "Pengurus koperasi seharusnya berjiwa sosial. Sebagian ketua rukun tetangga pernah menjadi pengurus koperasi. Jadi ....",
          options: ["Ketua rukun tetangga itu selalu berjiwa sosial.", "Semua orang yang pernah menjadi ketua rukun tetangga itu pengurus koperasi.", "Sebagian ketua rukun tetangga seluruhnya berjiwa sosial. ", "Semua pengurus koperasi berjiwa sosial."],
          correctIndex: 2
        },
        {
          question: "Di suatu kelas yang terdiri atas 40 siswa, memiliki minat terhadap mata pelajaran berikut: tak ada siswa yang menyenangi matematika juga menyenangi pelajaran lain. Hanya 4 orang siswa yang menyenangi fisika tetapi tidak mata pelajaran lain. 15 orang menyenangi IPS dan 5 orang diantaranya juga menyenangi IPA. Jika jumlah siswa yang menyenangi biologi 7 orang maka dapat disimpulkan...",
          options: ["Jumlah siswa yang menyenangi matematika paling banyak", "Jumlah siswa yang menyenangi IPS paling banyak", "Jumlah siswa yang menyenangi IPA paling banyak", "Jumlah siswa yang menyenangi matematika sama dengan IPS"],
          correctIndex: 1
        },
        {
          question: "Jika A = B maka A tidak sama dengan C. Bila P = A, maka....",
          options: ["Bila P = C maka P= B", "Bila P = C maka P tidak sama dengan A", "Bila P = C maka tidak P tidak sama dengan B", "Bila P = C maka P = A = B"],
          correctIndex: 2
        },
        {
          question: "Bila kendaraan lewat jalan tol harus membayar; Sebagian kendaraan tak punya uang. Jadi ....",
          options: ["Semua kendaraan tidak lewat jalan tol.", "Semua kendaraan lewat jalan tol.", "Sebagian kendaraan tak punya uang.", "Sebagian kendaraan tidak lewat jalan tol."],
          correctIndex: 3
        },
        {
          question: "Semua suku bangsa x berkulit cokelat, berambut keriting, dan berbadan kurus. Semua suku bangsa y berkulit hitam dan berambut keriting. Sedikit sekali orang suku z yang berambut keriting. Si Abai dilahirkan di daerah z, berambut keriting dan berkulit kuning. Jadi...",
          options: ["Abai pasti bukan suku bangsa x.", "Abai pasti bukan suku bangsa y.", "Abai pasti bukan suku bangsa z", "Abai keturunan suku bangsa x dan y."],
          correctIndex: 3
        },
        {
          question: "Bila S lewat P harus tambah H. Sebagian S tak punya H. Jadi ....",
          options: ["Semua S tidak lewat P", "Sebagian S tidak lewat P", "Sebagian S tak punya H", "Semua S tidak lewat P dan tak lewat H"],
          correctIndex: 1
        },
        {
          question: "Apabila sebagian orang yakin adanya kehidupan setelah kematian, sebagiannya lagi tidak yakin adanya kehidupan setelah kematian, dan sebagian lainnya sangat yakin bahwa tidak akan ada kehidupan setelah kematian, maka....",
          options: ["Sebagian orang yakin akan ada kematian.", "Tidak semua orang yakin akan ada kematian.", "Semua orang meyakini adanya kematian.", "Mengenai kehidupan setelah kematian, tidak semua orang meyakini."],
          correctIndex: 3
        },
        {
          question: "Beberapa benda yang memuai adalah logam. Semua logam adalah benda padat. Jadi ....",
          options: ["Hanya logam yang memuai merupakan benda padat.", "Benda yang bukan logam tidak memuai.", "Beberapa benda padat dapat memuai.", "Benda padat dapat memuai."],
          correctIndex: 2
        },
        {
          question: "Tidak ada dua gaun rancangan desainer X yang memiliki model yang sama. Gaun A dan B adalah rancangan desainer X. Jadi ....",
          options: ["Sebagian gaun rancangan desainer X.", "Semua desainer merancang gaun dengan mode seperti gaun A dan B.", "Gaun A dan B tidak memiliki mode yang sama.", "Gaun yang modenya tidak sama berasal dari desainer X saja."],
          correctIndex: 2
        },
        {
          question: "Semua murid yang mengikuti ujian tidak menggunakan kalkulator. Sebagian murid yang ujian mengenakan jam tangan. Jadi ....",
          options: ["Semua murid yang ujian mengenakan jam tangan.", "Sementara murid yang ujian tidak mengenakan jam tangan.", "Semua murid yang ujian tidak menggunakan kalkulator dan tidak mengenakan jam tangan.", "Sebagian murid yang ujian mengenakan jam tangan dan tidak menggunakan kalkulator."],
          correctIndex: 3
        },
        {
          question: "Semua U bukan B. Sebagian U adalah C. Jadi ....",
          options: ["Sebagian U adalah C bukan B", "Semua U bukan B dan C", "Sebagian U bukan C adalah B", "Semua U adalah C"],
          correctIndex: 0
        },
        {
          question: "Akhmad adalah pekerja. Akhmad menjadi buruh di sebuah pabrik. Banyak di antara buruh-buruhnya yang malas bekerja. Badrun adalah teman Akhmad. Jadi .... .",
          options: ["Akhmad itu malas.", "Badrun itu malas.", "Badrun mungkin teman sekerja Akhmad.", "Teman-teman Badrun semuanya rajin."],
          correctIndex: 2
        },
        {
          question: "Dalam sebuah kelas, sebagian besar murid pandai berenang, sebagian besar juga pandai mendayung. Jadi ....",
          options: ["Sebagian besar murid tidak pandai berenang dan tidak pandai mendayung", "Sebagian besar murid pandai berenang saja", "Sebagian tertentu dari murid-murid itu pandai berenang dan pandai mendayung", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 2
        },
        {
          question: "Semua mahasiswa yang berdasi. Sebagian mahasiswa berjas. Jadi ....",
          options: ["Sebagian mahasiswa bersepatu", "Sebagian mahasiswa berjas dan bersepatu", "Sebagian mahasiswa berdasi dan berjas", "Sebagian mahasiswa bersepatu tapi tak berjas"],
          correctIndex: 2
        },
        {
          question: "Semua dosen adalah pegawai negeri. Sebagian dosen adalah seniman. Yang tidak cocok dengan pernyataan tersebut adalah....",
          options: ["Sebagian seniman adalah pegawai negeri", "Sebagian pegawai negeri adalah dosen", "Sebagian seniman adalah dosen", "Semua seniman adalah pegawai negeri"],
          correctIndex: 3
        },
        {
          question: "Christina bersekolah di SMA Negeri VII. Tema-teman sekelasnya berjumlah 29 orang. Junus adalah tetangga Christina. Junus tahu benar bahwa ada teman Christina yang tidak lulus ujian penghabisan. Jadi ....",
          options: ["Mungkin semua teman sekelas Christina tidak lulus.", "Mungkin semua teman sekelas Christina tidak lulus.", "Tidak mungkin ada teman Christina yang lulus.", "Tidak mungkin semua teman Christina dikenal oleh Junus."],
          correctIndex: 0
        },
        {
          question: "Semua Y adalah P. Sebagian Y adalah R. Jadi ....",
          options: ["Semua Y yang bukan P adalah R", "Semua Y yang bukan R adalah P", "Semua R yang bukan Y adalah P", "Sebagian Y yang bukan R adalah P"],
          correctIndex: 1
        },
        {
          question: "Semua kertas gambar sangat berguna. Sebagian kertas yang sangat berguna harganya murah. Jadi ....",
          options: ["Semua kertas gambar harganya murah.", "Semua kertas yang harganya murah adalah kertas gambar", "Sebagian kertas harganya murah.", "Kertas yang murah sangat berguna"],
          correctIndex: 2
        },
        {
          question: "Setiap kota yang memiliki pusat hiburan mempunyai ciri rawan kejahatan. Pusat hiburan menyebabkan adanya keramaian yang menarik para penjahat. Sebgian penjahat adalah residivis. Manakah pernyataan di bawah ini yang tidak dapat disimpulkan dari pernyataan di atas?",
          options: ["Semua penjahat adalah residivis.", "Semua pusat hiburan menarik penjahat.", "Setiap kota mempunyai ciri rawan kejahatan.", "Penjahat tertarik adanya keramaian."],
          correctIndex: 0
        },
        {
          question: "Sebagian P adalah B. B bukan T. Sebagian P bukan M adalah T. Semua B, M, dan T adalah P. Jadi ....",
          options: ["Semua T adalah T bukan M", "Semua P adalah B bukan T", "Semua P bukan B bukan M", "Sebagian P bukan T, bukan M, bukan B"],
          correctIndex: 3
        },
        {
          question: "Semua ban terbuat dari karet. Semua karet bersifat elastis. Sebagian karet berwarna hitam.",
          options: ["Semua ban elastis dan terbuat dari karet.", "Semua ban berwarna hitam.", "Semua ban elastis berwarna hitam.", "Sebagian ban berwarna hitam terbuat dari karet."],
          correctIndex: 0
        },
        {
          question: "Semua rumah sakit memiliki bagian gawat darurat. Sebagian rumah sakit adalah rumah sakit bersalin. Jadi ....",
          options: ["Ada rumah sakit bersalin yang tidak memiliki bagian gawat darurat.", "Rumah sakit bersalin pasti memiliki bagian gawat darurat.", "sebagian rumah sakit tidak memiliki bagian gawat darurat.", "Semua rumah sakit yang tidak memiliki bagian gawat darurat adalah rumah sakit bersalin"],
          correctIndex: 1
        },
        {
          question: "Semua ikan hidup di air. Beberapa ikan hidup di air tawar. Jadi ....",
          options: ["Semua ikan dapat hidup di air tawar dan air laut.", "Beberapa ikan yang hidup di air tawar tidak dapat hidup di air laut.", "Sebagian ikan tidak hidup di air tawar.", "Tidak ada ikan yang hidup di air laut."],
          correctIndex: 2
        },
        {
          question: "Pembalap harus lulus uji ketahanan fisik. Sebagian besar pembalap sedang menderita sakit flu.",
          options: ["Pembalap yang lulus uji ketahanan fisik adalah pembalap yang sakit flu.", "Hanya sebagian saja pembalap yang lulus uji ketahanan fisik.", "Ada pembalap yang lulus uji ketahahan fisik, tetapi sakit flu", "Tidak ada pembalap yang sakit flu yang dapat lulus uji ketahanan fisik."],
          correctIndex: 3
        },
        {
          question: "Dalam persidangan, seorang tersangka dapat divonis bebas, penjara, denda, ataupun lainnya, maka....",
          options: ["Untuk kasus pembunuhan haruslah dihukum penjara.", "Seorang tersangka tidak mungkin dapat lolos dari hukuman pengadilan.", "Pengadilan adalah satu-satunya tempat pemutus perkara.", "Suatu vonis yang dijatuhkan di pengadilan harus sesuai dengan perkaranya."],
          correctIndex: 3
        },
        {
          question: "Kita membutuhkan energi setiap kali berolahraga. Catur adalah olahraga berpikir.... ..",
          options: ["Catur membutuhkan energi.", "Catur tidak membutuhkan energi.", "Energi yang diperlukan untuk catur hanya sedikit.", "Olahraga berpikir tidak membutuhkan energi."],
          correctIndex: 0
        },
        {
          question: "Orang dapat mempunyai wajah berbentuk hampir persegi, oval, atau bulat. Demikian juga orang dapat memiliki badan yang tegap, kurus kering, atau gemuk. Rambut orang dapat keriting, lurus, atau berombak. Seorang ahli kriminologi menyelidiki para penjahat disebuah penjara dan ternyata semua penjahat tersebut berwajah persegi. Sebagian besar dari mereka berambut keriting dan sebagian kecil bertubuh kurus. Jadi...",
          options: ["Semua penjahat berambut keriting", "Penjahat dapat berambut berombak, bertubuh tegap, dan berwajah bulat", "Semua penjahat berwajah hampir persegi", "Sedikit sekali penjahat yang bertubuh tegap"],
          correctIndex: 1
        },
        {
          question: "Semua anggota tim olimpiade dan Indonesia memiliki sepatu merk 'Ribut'. Sebagian anggota tim berhasil meraih medali emas. Jadi ....",
          options: ["Berkat merk 'Ribut', atlet Indonesia meraih medali emas.", "Peraih medali emas dari Indonesia memakai sepatu merk 'Ribut'.", "Semua orang yang memakai sepatu merk 'Ribut' meraih medali emas.", "Anggota tim Olimpiade yang memakai sepatu merk 'Ribut' meraih medali emas."],
          correctIndex: 2
        },
        {
          question: "Hampir semua murid kelas III.B rajin dalam belajar. Tidak semua murid yang rajin tergolong pandai. Tidak semua murid yang bodoh tergolong malas. Murid yang pandai dan rajin biasanya tidak pernah tinggal kelas. Suparman adalah murid yang duduk di kelas III.B. Suparman tidak pernah tinggal kelas sejak SD hingga di SMA sekarang ini. Jadi...",
          options: ["Suparman adalah murid yang rajin", "Suparman adalah murid yang pandai", "Suparman adalah murid yang rajin dan pandai", "Mungkin Suparman bukan murid yang rajin"],
          correctIndex: 3
        },
        {
          question: "Setiap kali ada pertandingan PSSI di layar TVRI, para tetangga kami pasti ikut menonton di rumah kami. Malam ini mereka ada di rumah masing-masing. Jadi ....",
          options: ["Televisi di rumah kami sedang rusak.", "Pertandingan PSSI tahun ini tidak diliput oleh TVRI.", "PSSI sedang tidak bertanding.", "Acara di TVRI malam ini bukan pertandingan PSSI."],
          correctIndex: 3
        },
        {
          question: "Semua lukisan yang bernilai seni yang tinggi berpedoman pada hukum-hukum perspektif. Kebanyakan lukisan Tiongkok dan Jepang tidak memperhatikan hukum ini. Jadi tidak dapat disimpulkan :",
          options: ["Lukisan Jepang dan Tiongkok tidak ada yang bernilai seni yang tinggi", "Lukisan Tiongkok dan Jepang belum tentu tidak bernilai seni yang tinggi", "Kebanyakan lukisan Tiongkok dan Jepang mempunyai nilai seni yang tinggi", "Jawaban a, b, dan c ketiga-tiganya salah"],
          correctIndex: 1
        },
        {
          question: "Guno membenci Connie dan Yanti. Lieke adalah kakak Guno. Yanti telah bersuami, Connie adalah adik dari suaminya Yanti. Connie menyayangi semua anak Yanti. Husen adalah anak Yanti. Jadi...",
          options: ["Tidak mungkin Guno menyayangi Husein", "Tidak mungkin Connie membenci Husein", "Yanti tidak menyayangi Husein", "Mungkin Guno menyayangi yanti"],
          correctIndex: 1
        },
        {
          question: "Mencuri itu perbuatan yang jahat. Setiap pencuri wajib dipenjara. Suparta pernah mencuri sepeda enam tahun yang lalu. Jadi:",
          options: ["Suparta adalah penjahat", "Suparta wajib dimasukkan penjara", "Suparta belum tentu seorang penjahat", "Penjara itu mengubah orang jahat jadi baik"],
          correctIndex: 2
        },
        {
          question: "Semua taksi dilengkapi dengan radio panggil. Sebagian taksi berwarna merah. Jadi ....",
          options: ["Sebagian taksi tidak berwarna merah dan tidak dilengkapi radio panggil.", "Sebagian taksi berwarna merah dan tidak dilengkapi radio panggil.", "Semua taksi berwarna merah dan dilengkapi dengan radio panggil.", "Sebagian taksi tidak berwarna merah dan dilengkapi radio panggil."],
          correctIndex: 3
        },
        {
          question: "Bila semua X adalah A. Sebagian X adalah B. Jadi ....",
          options: ["Semua X yang bukan A adalah B", "Semua X yang bukan B adalah A", "Semua B yang bukan X adalah A", "Semua A yang bukan X adalah B"],
          correctIndex: 1
        },
        {
          question: "Apabila sebagian manusia tidak berjiwa besar, maka....",
          options: ["Pamanku berjiwa besar.", "Perenang memiliki jiwa sportif.", "Tidak semua manusia berjiwa lemah.", "Seorang berjiwa besar sudah tentu bukanlah seorang pecundang."],
          correctIndex: 2
        },
        {
          question: "Bila semua pelajar bercelana panjang; Sebagian pelajar memakai lengan panjang. Jadi ....",
          options: ["Sebagian pelajar bercelana pendek.", "Sebagian pelajar memakai celana pendek dan berlengan panjang.", "Sebagian pelajar memakai bercelana panjang dan berlengan panjang.", "Sebagian pelajar bercelana pendek tapi tidak memakai celana panjang."],
          correctIndex: 2
        },
        {
          question: "Air adalah kebutuhan pokok setiap manusia. Masyarakat di padang pasir hanya sedikit memiliki persediaan air. Jadi .... ..",
          options: ["Masyarakat di padang pasir tidak membutuhkan air", "Air bukanlah kebutuhan pokok masyarakat di padang pasir", "Meskipun tanpa air, masyarakat di padang pasir dapat hidup", "Masyarakat di padang pasir harus berhemat menggunakan air"],
          correctIndex: 3
        },
        {
          question: "Semua penyanyi dangdut panddai bergoyang. Penyanyi yang bernama Nurlela tidak dapat menggoyangkan badannya di panggung. Jadi ....",
          options: ["Nurlela bukan penyanyi di panggung.", "Nurlela adalah penyanyi sentosa.", "Nurlela adalah penyanyi amatir.", "Nurlela tidak pandai bergoyang."],
          correctIndex: 3
        },
        {
          question: "Semua X bukan P. Sebagian X adalah Q. Jadi ....",
          options: ["Sebagian X adalah Q bukan P.", "Semua X bukan P dan Q.", "Sebagian X bukan Q adalah P", "Semua X adalah Q."],
          correctIndex: 0
        },
        {
          question: "Barang-barang pecah belah itu pecah kalau jatuh. Barang-barang yang tidak dapat pecah kalau jatuh tidak lagi digolongkan dalam barang-barang pecah belah. Cangkir merk Strong buatan Inggris tidak dapat pecah kalau jatuh. Jadi ....",
          options: ["Cangkir buatan Inggris termasuk barang pecah belah.", "Cangkir buatan Inggris tidak dapat pecah.", "Cangkir merk Strong buatan Inggris tidak termasuk barang pecah belah.", "Cangkir Strong buatan Inggris tidak mungkin pecah."],
          correctIndex: 2
        },
        {
          question: "Semua orang yang bermental interpreneur hidup dengan makmur. Sebagian orang yang bermental interpreneur melakukan usaha wiraswasta. Jadi ....",
          options: ["Semua wiraswasta bermental interpreneur", "Semua wiraswasta hidup makmur.", "Semua wiraswasta yang hidupnya makmur bermental interpreneur", "Semua yang bermental interpreneur dan hidupnya makmur adalah wiraswastawan."],
          correctIndex: 2
        },
];