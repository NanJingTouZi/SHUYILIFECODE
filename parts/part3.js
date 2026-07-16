// ============================================================
// DATA from Excel
// ============================================================
const MEANING_DATA = {
"112":"Orang Yang Sangat Percaya Diri & Pintar Bicara, komunikasi sangat keras, ada kuasa, status pernikahan yang berbeda/pasti tidak bahagia. Status kesehatan yang kurang dan di atas usia 40 tahun tidak di senangin lagi di ajak bicara oleh orang lain. Sangat keras pendirian.",
"123":"Pintar Bicara, Jikalau buat prestasi sangat terstruktur, omongan bisa sangat bagus tetapi orang lain tidak ngerti, bisa nyinggung orang/ sarkastik, jadi energy harus tinggi",
"213":"Harus Bicara Yang Benar/Jujur, omongan benar, tapi orang lain tidak suka dengarnya, harus ngomong yang bagus, berpikir dengan baik dan omongan jadi baik, bisa jadi jendral dan tidak boleh bilang yang tidak baik",
"134":"Orang yang sangat baik hati (suka menolong), Rajin, Perlu Banyak Belajar Bersabar, Harus Buat Banyak Amal Bakti Baru Bisa Mempunyai Peruntungan, buat usaha apapun sangat stabil. Punya rasa dendam/ pendendam, suka ingat yang tidak baik dan yang baik tidak mau di ingat. Bisa jadi usahawan / ilmuwan",
"314":"Harus selalu berpikiran positif, kalau energy kuat, buat apapun bahagia, kalau energy rendah bisa di bawa sampai kerumah, harus bisa kontrol emosi, saat bahagia bisa sangat bahagia dan sebaliknya",
"145":"Perlu Meningkatkan Keahlian Untuk Berkembang, Suka Berencana, Jikalaupun berencana mesti bisa buat setting goal yang lebih tinggi. Keputusan tidak sesuai dengan perencanaan, planning kebanyakan tidak jadi kalau tidak ada angka penolong, sebelum nikah ada perpect dream, begitu nikah beda lagi.",
"415":"Berpikir adalah masalah, Berbuat adalah jawaban. Bisa berhasil dan bisa tidak berhasil. Jangan berpikir, berbuat aja. Energy harus tinggi, banyak rintangan kalau tidak ada angka 9",
"156":"Perlu Keluar kota untuk mendapatkan hasil yang baik, keluar dari kota kelahiran, kalau ada pressure/ tekanan keluar sebentar.",
"516":"Personal Dirinya Mesti Keluar Dari Kota Kelahiran Untuk Mencari Penghasilan Jikalau Mau Dapat Hasil Yang Besar, yang penting keluar jalan jalan, karena ada arah, yakin buat apa bis dapat apa. Punya hobby yang tidak sehat (minum, judi dll yang habiskan uang)",
"167":"Orang Yang Berbakat Bisnis. Pinter cari tempat makan yang sedap, punya simpanan khusus. Satu org cari uang, semua orang bisa menikmati uangnya, ada hoki, mau usaha apapun tapi usaha sendiri kalau di kasi modal tidak aman membuat sukses.",
"617":"Jangan menikah sebelum 30 taon, kalau bisnis jangan ambil uang orang tua hidup macam rolly coster (cendrung Boros), selalu makan makanan yang enak, suka traktir orang makan, selalu berusaha sendiri baru sukses, jgn berpuas diri, akan terus bekerja terus, harus ada simpanan/uang/ jgn di habiskan, terhadap uang sangat sensitif, lebih jaga diri sendiri duluan.",
"178":"Gak Boleh Pinjam Orang Uang/Kendaraan tapi boleh kasih , Gak Boleh Garansi Orang. Jikalau mau peruntungan bagus mesti buat perjalanan ke luar kota minimal 4 jam melalui udara. Selalu kena masalah hukum, suka di gisipin / di fitnah, masalah kecil yang bisa di jadikan masalah besar, bisa dapat uang global dan tidak boleh jadi pemimpin no. 1",
"718":"Boleh buat bisnis international kalau energy positip, kalau negatip bukan masalah dia bisa kena masalah juga. Suka di gosipin/difitnah, selalu kena masalah hukum. Hal yang tidak boleh dikerjakan : 1. jangan pinjam uang ke orang lain, 2. jangan pinjamkan mobil ke orang lain, 3. tidak boleh menjadi penjamin, 4. jangan janji buatkan kasih orang.",
"189":"Mengerjakan sesuatu hal tidak percaya sama orang lain, kalau energy low ada kondisi ODC, terlalu Pintar, capek sendiri. Untuk usaha yang di lakukan sendiri pasti sukses, harus banyak istirahat. Selalu merasa lebih pintar dari pada orang lain",
"819":"Orang yang sangat sibuk, Perfeksionis. Kalau Kerja sangat di sukai Boss, Kalau tidur kadang kurang lelap suka kebangun karena kepikiran sesuatu. Segala sesuatu buat sampai capek sendiri karena anggap orang lain tidak sanggup. Ada darah tinggi, pendendam, tidak bisa cepat tidur, pikiran terlalu banyak",
"191":"Orang yang Sangat Pintar, Suka Menyendiri, Agak Egois, Kalau energy negatip Bicara agak kasar, segala sesuatu buat sendiri, sangat repot dan tidak suka di bantu orang, suka menyendiri. Kerja buat sendiri, ngomong bisa nyakitin orang lain",
"224":"Orang Yang Terlalu Pintar Bicara untuk membuat perencanaan, Lembut hati, Tetapi Tidak Bisa Simpan Rahasia, Kalau energy low bisa sering masalah gosip, dan masalah hukum, sangat suka ngomong tapi tidak yakin, karena kurang percaya diri, ngomong suka berulang ulang. selamanya jadi orang yang selalu melewatkan kesempatan. saat energy tinggi, bisa merancang komunikasi akan banyak sukses, dan kalu low energi, bahasa yang di keluarkan tidak baik, tidak akan sukses. bisa menjadi sales agen yang sangat baik. tidak bisa menyimpan rahasia.",
"235":"Orang Yang Punya Selling Poin Dalam Berbicara, Emosian bisa buat orang sakit hati. Pintar dan suka banyak ngomong. Kalau di segitiga ada no.3, apa yang diomongkan itu ada point.",
"325":"Apa yang di omongkan sampai orang nya ngerti, keras kepala, dan kalau ngomong ada arah dan tujuan.",
"246":"Orang yang tidak terlalu perhitungan dalam uang dan kerja. Mesti komunikasi apabila mau menghasilkan pendapatan. Energy tinggi keuangan stabil dan semakin meningkat. Energy rendah keuangan semakin menurun. Jika ada 9 uang gampang dapat.",
"426":"Bicara , buat perencanaan maka uang akan datang. Jika ada uang, suka beli barang yang lbh bagus.",
"257":"Orang Yang Punya Daya Tarik Dari Sisi Penampilan, Biasanya Cowok itu Ganteng dan Cewek Cantik, ada jodoh dengan orang lain jika anak ada nomer ini bisa berpengaruh terhadap kesehatan orang tua",
"527":"Kalau Energy Rendah Pikiran mereka sangat complicated, sangat suka tanya2 masalah, kalau tidak dapat jawaban, akan tanya sampai puas. Kalau anak ada nomer ini, bisa pengaruh terhadap kesehatan orang tua nya.",
"268":"Orang Yang Sangat Sensitif apabila bicara tentang Uang (Mengeluarkan Uang Harus Punya Alasan Yang Kuat Dan Masuk Akal), harus banyak buat amal supaya uang lancar. Jangan ngomong uang, omong hubungan, ngomong benefit baru mau dengar. Jangan ngomong soal uang dulu, harus ngomong yang lain dulu baru uang akan keluar",
"628":"Investasi Sering salah sasaran yang mengakibatkan kerugian (Tidak Boleh Bisnis Duet Cepat), kalau tidak ada benefit, tidak mau buat. Dapat duit sudah ada tekanan. Jika energy tinggi akan ada kelimpahan, kekayaan yang sempurna, bahagia. Low energy, dapat uang sudah ada tekanan.",
"279":"Orang Yang Ramah (Mulut manis). Jika Laki Laki Orang Pendukungnya Wanita Lebih muda begitu sebaliknya, laki2 sangat tampan, jika perempuan sangat cantik sangat disukai. Punya kharismatik, sangat suka menolong orang dengan rela hati.",
"729":"Jika Laki Laki Orang Pendukungnya Wanita Lebih Tua dan sebalik nya. Banyak jodoh baik dengan orang.",
"281":"Seorang Penjual Yang Baik khusus retail barang barang kecil. Untuk Wanita tidak boleh pakai gelang atau jam tangan, untuk Laki Laki Tidak Boleh Pakai Cincin (Dalam Segitiga Tengah) bisa mengundang kecelakaan khusus karakter utama 281, orangnya sangat pintar. Jika perempuan biasanya sangat sibuk karena semua di kerjakan sendiri.",
"821":"Seorang Penjual Yang Baik khusus retail barang barang besar. Untuk Wanita Jaga Masalah Organ Produksi, Kalau Laki Lakai Prostat (Dalam Segitiga Tengah) dan penyakit tulang. Jika letak di karakter utama wanita, jgn menyetir. Jika menyetir harus mobil besar.",
"292":"Sering berbicara hal yang sudah selesai tapi dibicarakan lagi. Sering Berhubungan Dengan Masalah Hukum, Sangat Cerdas (tidak bisa jadi Bos Mesti Jadi Orang Kedua), Berbuat Sesuatu mesti ada bukti. Kalau perempuan bisa bertemu dengan playboy, jika laki2 suka ketemu dengan masalah pengadilan.",
"336":"Jikalau Bertindak, bertindak lagi Uang Akan Datang, Tidak Boleh Judi, Harus Kontrol Emosi, Tidak Bisa Dapat Uang Cepat Tapi Harus Melalui Usaha Yang Benar, tidak bisa dapat uang dengan instant / harus usaha yang besar baru bisa dapat uang besar. Harus investasi bisnis yang jelas.",
"347":"Cocok Untuk Bisnis Jaringan, Mesti Kontrol Emosi Kalau Tidak Gampang Melukai Orang Lain, Seorang Pemimpin Yang Baik Bisa Buat Team Yang Besar ,banyak jodoh dengan orang lain, bereaksi aja, rancang saja banyak dapat peluang. Kalau wanita biasanya sangat cantik.",
"437":"Tidak boleh banyak emosi, gampang sukses dan gampang jatuh bisa energy lor, usahawan yang berperancang sudah ada. Tinggal bergabung team builder. Kalau sudah bangun team harus jaga emosi.",
"358":"Uang Datang Sendiri Tetapi Perlu Buat Amal Bakti Yang Banyak, Seorang Public Relation Dan Sangat Bertanggung Jawab, Kerja Banyak Tapi Tak Ada Hasil, kalau kerja harus di kerjakan dengan setulus hati, kerja sangat rajin. Recruit orang yang punya angka ini, tap harus ada angka 9",
"538":"Buat Banyak / Kerja saja mengenai kompensasi tidak terlalu perhitungan. Apabila dalam segitiga tidak ada 2 hasilnya bisa ribut aja, semakin tua, emosi semakin tidak baik. Org ini selalu tau tempat makan enak dan tempat makan murah.",
"369":"Pinter Cari Uang Pintar Juga Habisinnya. Harus Sering Bergaul Dengan Banyak Orang. Kalau energy rendah, uang cepat habis, kalau positif kemanapun pergi selalu bisa dapat uang. Jika energy rendah, keluar rumah sebentar apalagi sedang emosi, lebih baik keluar rumah.",
"639":"Jikalau Energy Tinggi, Bisa Menggunakan Kondisi Untuk Menghasilkan Uang, Jikalau energy negatip menjadi Konsumtif. Kalau sukses apapun oke, mau kemanapun oke karena ada uang. Harus jalan baru ada uang. Ada relasi banyak baru ada banyak peluang. Banyak pindah banyak rezeki. kalau tidak ada angka 4, konsumtif, kalau bisa 4 tahun sekali pindah rumah.",
"371":"Orang Yang Tidak Mau Mengalah, Ego Tinggi, Tidak Boleh Pegang Uang. Kemampuan harus banyak perlu bantuan dari orang lain. Harus banyak berpikir baru bisa sukses ( harus ada angka 9), jangan pegang keuangan, bisa kena masalah keuangan. Tidak bisa jadi bos utama atau ceo ( manager boleh)",
"731":"Pemimpin yang sangat yakin dengan diri sendiri, dengan beri arahan saja kerja pasti sukses. Jika tidak ada 9, buat sampai capek reward yang di dapat sedikit. Harus waspada dengan siau jin karena tidak bisa membedakan sauijin dengan kuijin. Wajib ada angka 5",
"382":"Penjual / Sales Yang Hebat, tidak boleh banyak emosi/ kalau sudah emosi mending pergi, kalau perempuan sangat cantik, kalau laki laki sangat pintar gombalin cewek. Bila bisa jaga emosi, banyak orang yang senangin orang ini.",
"832":"Cepat Naik Emosi dan tidak Stabil, Kalau energy positip bisa handle banyak masalah. Orang yang sangat lihai, dan komunikatif. Laki2 sangat tampan, dan perempuan sangat cantik, suka ngomong2 sehingga buat orang tersinggung jika energy negatif, jika energy positif, ngomong sangat bagus, sangat manis sehingga bisa banyak berjodoh dengan orang lain",
"393":"Selalu Bermasalah, Cari Kegiatan Yang Sebaiknya Membuahkan Hasil (Mis : Guru/Trainer), Kalau energy rendah gampang attract penyakit terutama tumor, dapat uang pun tidak ada guna/ harus banyak buat amal kebajikan. Kalau join usaha dengan orang lain akan kena cancer. kalau laki2 jgn menghianati/aborsi, akan kena kanker",
"448":"(Perlu Jaga Kesehatan). Energy Tinggi, Pintar Berencana, Kalau Rencana itu bagus, Akan Mendapatkan Support. Kalau energy negatif bisa terlalu banyak pikir dan akhirnya stress, laki2 bisa ketemu kasus hukum. Perempuan bisa bertemu playboy",
"459":"Punya Nasib Jadi BOS, Perlu Buat Bisnis Sendiri, Kalau Energy Rendah.. Mudah Terpengaruh Perkataan Orang Lain, kalau masih kerja sama orang, kehidupan tidak begitu baik. Harus beli property. Jika set ke 6, bisa jadi bos dan ada harta kasih anak cucu. harus buka usaha sendiri jangan kerja dengan orang",
"549":"Punya arah (leader of leader), Tau Planning Pasti dapat hasil, Kalau Energy Rendah MIMPI lah. Fokus 1 saja jangan semua, di atas 40 buat usaha sendiri, kalau tidak banyak rintangan ada pengaruh ke anak cucu juga. Bisa tau usaha apa yang cocok pasti cocok.",
"461":"Orang Yang Pintar Mengatur Keuangan Tetapi Tidak Boleh Investasi Sendiri, kalau low energy, rancang apapun gampang ketemu masalah. Biasanya financial consultant",
"641":"Seorang Financial Advisor Yang Handal, kalau perempuan, gampang ketemu dengan laki2 yang porotin uang. Harusnya pakai dengan uang tapi pakai perasaan akhirnya uang tidak ada, perasaan juga tidak ada, tinggal sendiri saja.",
"472":"Orang Yang Suka Memberi Saran dan Perencanaan, Typekal Analitik Tapi Sering Ragu Ragu, (Pinter membuat perencanaan pasti ada pendukung asal mau dibicarakan) jika ada no 9, buat apapun dapat di lihat org, bisa naik top. Buat apapun sangat rajin/ banyak bantuan orang. banyak kuijin, banyak disukai orang dari kecil sampai tua karena orang rela hati bantu karena leluhur banyak buat karma baik. kalau kurang 3 di segitiga, action kurang.",
"742":"Gampang Mendapatkan Apa Yang Diinginkan, energy tinggi akan ketemu jodoh baik/bala bantuan (-) omong saja tidak ada aksi. Jangan banyak omong.",
"483":"Typekal Orang Yang Mengutamakan Profesional dalam Kerja (Jangan Menjadi Orang No. 1 walaupun ini bisnis sendiri), perfectionis. Banyak yang di pikir, semakin di pikir semakin ribet. Ada orang ke 3. jika energy rendah bakal cerai. Orang yang lihai, jika angka ini muncul di set 6 pernikahan bisa cerai. dan kesehatan harus di jaga.",
"843":"Kalau Bisnis Harus Fokus dan Menjadikan bisnis ini menjadi Bisnis Yang Profesional. Udah tinggi selalu ingin lebih tinggi layak profesor. Jika di karakter utama, ada orang ke 3 bisa cerai jika energy rendah. Kalau malas bisa demensia.",
"494":"Orang Yang Hebat Dalam Berstrategy, Terlalu Banyak Berpikir (Perlu 2 Pekerjaan), banyak pemikir, bisa ada masalah di liver harus cepat tidur. Usahawan yang dapat multiple income. Bisa sangat sukses.",
"551":"Perlu Banyak Orang Pendukung & Perlu Orang Pintar Yang Membimbing (Lead Of Lead, Punya Arah Akan Menjadi Pemimpin Yang Hebat dalam segitiga perlu ada 3 dan 9) pemimpin di atas pemimpin. Jika energy rendah, bisa bunuh diri dan harus sering ajak bergaul orang ini. sangat gampang emosi. dan kalau tidak ada angka 9 akan mudah depresi.",
"562":"Cenderung Pelit, Semakin Expense Semakin Banyak Yang Di Dapat. Jikalau Laki Laki Mesti Kasih Ke Istri supaya makin beruang, Jikalau Wanita Bisa Buat Suami Makin Kaya (Sangat hemat)",
"652":"Perempuan bisa buat uang suami banyak kalau laki2 uang semakin banyak. Uang suami harus banyak kasih ke istri. Kalau belum menikah, uang pakai aja. Akan semakin banyak. Yang seharusnya dipakai harus di pakai. Setelah terima uang katakan terima kasih maka akan datang semakin banyak.",
"573":"Orang Yang Mempunyai Pendukung Yang Banyak, ada power, ada jabatan. Harus hati2, anak akan balas budi, harus ada 9, akan dapat pengakuan. Orang yang banyak ilmu. Jangan senang berjanji, kalau tidak ditepati menjadi musuh",
"753":"Jikalau Energy Positip Tidak ada Orang Yang Berani Menggangu begitupula sebaliknya (Kalau Energy kita rendah, orang yang datang selalu menghabiskan duit anda) Kalau Energy Tinggi Itu Orang Yang Datang Orang Yang Millioner Yang Datang Mendukung. Jika energy rendah, orang di sekeliling banyak kasih masalah, anak ga berani mendekati. kalau di set 6, anak datang habisin uang saja. menyusahkan orang tua. harus energy tinggi supaya anak tidak menyusahkan orang tua.",
"584":"Orang Yang Bisa Buat Bisnis Sangat Besar Jikalau Energy Positip, Mesti Kuat Amal Bakti. Kalau di posisi main karakter, bisa pengaruh ke anak, kesehatan karir, pasangan maupun org tua. Energy tinggi, apa yang di omongin bagus bisa dapat yang bagus, pemikiran bagus dapat bagus. bisa legowo",
"854":"Orang Yang Selalu Risau, Dalam Segitiga Perlu Konsultasi Kesehatan, proses kehidupan banyak rintangan.",
"595":"Orang apapun berani buat (Baik Yg Baik atau sebaliknya), Sangat Hebat Dalam Memimpin, Keras Kepala dan Perlu Keluar Kota Untuk Mencari Nafkah, orang yang sangat pemberani, pilihan bagus dapat bagus.",
"663":"Jikalau Bertindak, bertindak lagi Uang Akan Datang, Tidak Boleh Judi, Harus Kontrol Emosi, Perlu Kontrol Financial, seumur hidup jangan suka investasi, beli properti aja dapat uang",
"674":"Orang Yang Type Agak Sombong, Punya Bakat khusus, Punya Standar Khusus , Jago Buat Perencanaan Keuangan, punya kemampuan/ sangat pintar, susah berteman karena pemilih, mau peluang, ada plan aja uang sudah datang. Bila di main karakter, orang yang tidak suka senyum",
"764":"Banyak jodoh dan di senangin orang, tidak suka gossip, harus ada 9, ada rancang aja peluang sudah ada. Harus ada angka 9 & 5. bisa jadi usahawan yang sukses.",
"685":"Orang Yang Dasarnya dilahir Bernasib Mujur, tetapi perlu buat Amal Bakti (Agar Uang Bisa Datang Begitu Saja), harus ada agama agar bisa guiding hidup lebih lancar, energy rendah bisa susah. Jika karakter utama, tidak ada agama bisa susah. Jika di set 6, anak pakai uangmu.",
"865":"Orang Yang Dasarnya dilahir Bernasib Mujur, tetapi perlu buat Amal Bakti (Agar Uang Bisa Datang Begitu Saja). Harus buat yang berguna untuk orang lain, nasib akan kurang baik bila tidak buat amal baik. Tidak boleh cepat nikah karena bisa efek ke anak, kesehatan.",
"696":"Orang Yang Punya Dewa Rezeki Dari bawaan lahir (perlu amal bakti), Perlu Tau Bagaimana mengkoneksikan antara uang masuk dan uang keluar (Simpan Uang) karakter utama set, 1,3, 6 dan 12 (nama tidak ada yang bagus sebagai guiding) maka keberuntungan cari makan susah, kesehatan terganggu.",
"775":"Type Orang Yang Suka dan Memprioritas Kesetiaan Dalam Berhubungan Tetapi Punya Sifat Pendendam, Banyak Pendukung Setia, kalau berbuat baik 1 akan di balas 10, energy tinggi bisa jadi leader, orang yang sangat tau budi, pemimpin yang hebat.",
"786":"Wanita Sebaiknya buat bisnis yang biasa lelaki buat, kalau pria sebaliknya (Pendukungnya Lebih Muda), Hati hati masalah keluarga rentan perselingkuhan. Banyak orang yang membantu. Banyak dewa penolong, harus ada good attitude, tapi kalau kuijin di manfaatin akan jadi siojin",
"876":"Wanita Sebaiknya buat bisnis yang biasa lelaki buat, kalau pria sebaliknya (Pendukungnya Lebih Tua), Hati hati masalah keluarga rentan perselingkuhan, gampang dapat uang, kuijin lawan jenis, jika di set karir & partner, thau hua sangat banyak. Jika di set 876 di set 6, anak sulung harus laki2",
"797":"Pintar Buat Bisnis dan Banyak Bisnis, Cepat Emosian, Susah Fokus, banyak ketemu orang, harus banyak liat masalah orang. Jika energy rendah ketemu masalah dengan orang lain dan dapat bermacam2 masalah",
"887":"Orang Yang Sangat Tanggung Jawab / Disiplin, Lebih cepat emosian, orang yang sangat steady, emosi yang sangat tidak stabil. Jika orang ini belikan makan, cukup katakan terima kasih. Jangan balas belikan makan nanti di kira pandang rendah. Jika low energy, orang di samping pergi semua.",
"898":"Jiwa Pengusaha Sangat Besar, Mudah Stress Karena Semua Dikerjain Sendiri, sangat lelah, kerjaan ga ada habisnya, banyak tanggung jawab dan tekanan, dan banyak urus urusan orang lain. Energy tinggi, orang yang sangat sukses. Jika energi rendah, masalah akan datang terus.",
"911":"Orang yang Sangat Pintar, Suka Menyendiri, Agak Egois, Kalau energy negatip Bicara agak kasar, segala sesuatu buat sendiri, sangat repot dan tidak suka di bantu orang, suka menyendiri. Kerja buat sendiri, ngomong bisa nyakitin orang lain",
"922":"Sering berbicara hal yang sudah selesai tapi dibicarakan lagi. Sering Berhubungan Dengan Masalah Hukum, Sangat Cerdas (tidak bisa jadi Bos Mesti Jadi Orang Kedua), Berbuat Sesuatu mesti ada bukti. Kalau perempuan bisa bertemu dengan playboy, jika laki2 suka ketemu dengan masalah pengadilan., lebih suka banyak cakap, apa yang sudah di tanya suka tanya kembali. Diri sendiri yang buktikan sendiri karena sudah pengalaman.",
"933":"Selalu Bermasalah, Cari Kegiatan Yang Sebaiknya Membuahkan Hasil (Mis : Guru/Trainer), Kalau energy rendah gampang attract penyakit terutama tumor, sangat cepat belajar/ lat aja cepat tau, jika ketemu aliran tahun 3,6,8 harus pergi cek kesehatan. Tidak bisa duduk diam, kalau ada anak bisa sangat repot, kawatir tidak ada habis.",
"944":"Banyak pikir, jika di karakter utama ada multiple income, jangan serakah klo energy rendah banyak tidak ada yang sukses, jangan liat org lain bisnis bagus, yang lain ditutup.",
"955":"Pemberani, buat apapun sangat berani kalau energy positif tinggi",
"966":"Most Elegant Of Wealth, banyak uang. Harus ada nama tek baru bisa ada chai contoh te wei, te su. Jika nama tidak ada penolong maka uang lau chai.",
"977":"Pintar Buat Bisnis dan Banyak Bisnis, Cepat Emosian, Susah Fokus, banyak ketemu orang, harus banyak liat masalah orang. Jika energy rendah ketemu masalah dengan orang lain dan dapat bermacam2 masalah",
"988":"Stress berlebih",
"999":"Terlalu Banyak Peluang, Energy Mesti Tinggi Sekali, Bisa Jadi Raja Atau Tahanan, Bisa Sukses Besar Atau Gagal Total, Rumah Tangga Bisa Sangat harmonis Atau Tinggal Diri Sendiri, tuaho tuaphai. Energy tinggi bisa jadi sukses besar, energy rendah bisa jadi pengemis atau terkena masalah hukum. bila di main karakter, beli barang harus yang high quality, jika di set 6, anak sulung opposit dengan kita, jika di set 9, tidak ada teman sejati, tinggal sendiri saja."
};

const RISK_DATA = {
  'Gabungan Angka Benturan API dan AIR': ['123','213','178','718','235','325','268','628','281','821','347','437','371','731','382','832','573','753','786','876','887'],
  'Potensi Menyebabkan Gagal Bisnis/Karir': ['112','123','213','393','933','167','358','538'],
  'Potensi Menyebabkan Masalah Keharmonisan Keluarga': ['112','123','213','167','191','911','134','314','145','279','729','415','382','832','483','843','786','876','887','999'],
  'Potensi Bermasalah di Kesehatan': ['112','189','819','382','832','393','933','494','944','898','988'],
  'Potensi Terkena Masalah Hukum': ['112','178','718','224','292','922','731','483','843','448','595','955','999'],
  'Potensi Memiliki Kekayaan Yang Besar': ['156','516','336','663','369','639','696','966','999']
};

const RISK_SCOPE = {
  'Gabungan Angka Benturan API dan AIR': [1,2,3,4,5],
  'Potensi Menyebabkan Gagal Bisnis/Karir': [7,8],
  'Potensi Menyebabkan Masalah Keharmonisan Keluarga': [6,10,11],
  'Potensi Bermasalah di Kesehatan': [4,5,12],
  'Potensi Terkena Masalah Hukum': [4,5,7,8,9,12],
  'Potensi Memiliki Kekayaan Yang Besar': [4,5,7,8,12]
};

const ELEMEN_DATA = {
  1: { nama:'LOGAM', positif:['TERLAHIR SEBAGAI SEORANG PEMIMPIN SECARA ALAMI','HEBAT DALAM MANAJEMEN(TERMASUK DIRI SENDIRI)','KREATIF & INOVATIF','PERCAYA DIRI'], negatif:['EGOIS & KURANG EMPATI','KURANG TRANSPARAN','AROGAN & EMOSIONAL'], warna_sesuai:'PUTIH, EMAS, APRIKOT,PERAK', warna_pendukung:'KUNING, KOPI, COKLAT TUA/MUDA', warna_melemahkan:'HIJAU, CYAN', siklus:['MEMULAI SESUATU (BISNIS ATAU HAL BAIK APAPUN)','PENUH TANTANGAN','KEBERUNTUNGAN TINGGI'] },
  2: { nama:'AIR', positif:['TERLAHIR SEBAGAI SEORANG YANG AHLI BICARA / KOMUNIKASI','MENGGUNAKAN BICARA UNTUK MENGHASILKAN APAPUN','MUDAH BERADAPTASI GAYA KOMUNIKASI , RAMAH','PENDENGAR YANG BAIK'], negatif:['MUDAH RAGU RAGU','MUDAH TERPENGARUH KEADAAN','GOSIP'], warna_sesuai:'HITAM, BIRU, ABU ABU', warna_pendukung:'PUTIH, EMAS, APRIKOT,PERAK', warna_melemahkan:'MERAH, MERAH JAMBU, UNGU, ORANGE', siklus:['KERJASAMA & MENJAGA KESEIMBANGAN','EVALUASI DARI TAHUN PERTAMA','KEBERUNTUNGAN SEDANG'] },
  3: { nama:'API', positif:['TERLAHIR SEBAGAI SEORANG SUKA BERTINDAK','PEMIKIR YANG KRITIS & PERCAYA DIRI','CEPAT MENANGKAP PELUANG / MATA TAJAM','PANTANG MENYERAH & MANDIRI'], negatif:['IMPULSIF','KURANG MENIMBANG PERASAAN ORANG LAIN','DOMINAN, KURANG SABAR'], warna_sesuai:'MERAH, MERAH JAMBU, UNGU, ORANGE', warna_pendukung:'HIJAU, CYAN', warna_melemahkan:'PUTIH, EMAS, APRIKOT,PERAK', siklus:['TINDAKAN YANG KONSISTEN','KOMITMEN & PANTANG MENYERAH','KEBERUNTUNGAN RENDAH'] },
  4: { nama:'KAYU', positif:['TERLAHIR SEBAGAI SEORANG YANG SUKA MEMBUAT RENCANA','TELITI & DETAIL (SELALU MENCARI JAWABAN)','TERORGANISIR & DISIPLIN & PINTAR MERANGKUM (KESIMPULAN)','ORIENTASI TUJUAN & DAPAT DIANDALKAN'], negatif:['TERLALU BANYAK PIKIRAN (LAMBAT MENGAMBIL KEPUTUSAN)','KAKU/TIDAK FLEKSIBEL','CEPAT KUATIR & MUDAH KECEWA'], warna_sesuai:'HIJAU, CYAN', warna_pendukung:'HITAM, BIRU, ABU ABU', warna_melemahkan:'KUNING, KOPI, COKLAT TUA/MUDA', siklus:['PERENCANAAN TUJUAN, SUMBER DAYA & RESIKO','STABILITAS (BUTUH AMAL BAKTI)','KEBERUNTUNGAN SEDANG'] },
  5: { nama:'TANAH', positif:['TERLAHIR SEBAGAI SEORANG PEMIMPIN DIATAS PARA PEMIMPIN','PUNYA TUJUAN&ARAH JELAS (AHLI NAVIGASI)','MUDAH MENYATUKAN ORANG','TEGAS,STRATEGIS & BERINTEGRITAS'], negatif:['OTORITER, SOMBONG','SULIT MENERIMA KRITIK & MENDENGAR','KURANG SABAR'], warna_sesuai:'KUNING, KOPI, COKLAT TUA/MUDA', warna_pendukung:'MERAH, MERAH JAMBU, UNGU, ORANGE', warna_melemahkan:'HITAM, BIRU, ABU ABU', siklus:['MENENTUKAN ARAH & KETEGUHAN','TRANSISI','KEBERUNTUNGAN TINGGI'] },
  6: { nama:'LOGAM', positif:['TERLAHIR SEBAGAI SEORANG YANG MEMILIKI INDERA KE-6 MENGENAI UANG','MAGNET UANG','KREATIF DALAM MENCARI PELUANG','PEKA & PANDAI MENGELOLA UANG'], negatif:['TERLALU MATERIALISTIS & BOROS','PEMILIH DALAM BERGAUL','TERLALU BERHITUNG & SERAKAH'], warna_sesuai:'PUTIH, EMAS, APRIKOT,PERAK', warna_pendukung:'KUNING, KOPI, COKLAT TUA/MUDA', warna_melemahkan:'HIJAU, CYAN', siklus:['MEMANEN UANG (BAGI HASIL)','KEBIJAKSANAAN (MENGERTI MEMBERI & MENERIMA)','KEBERUNTUNGAN TERMASUK TINGGI'] },
  7: { nama:'AIR', positif:['TERLAHIR SEBAGAI SEORANG YANG PALING BERUNTUNG (HAPPY GO LUCKY)','BANYAK PENDUKUNG & BERJIWA SOSIAL','BANYAK PELUANG & KONEKSI & KETRAMPILAN OBSERVASI YANG KUAT','MUDAH BERGAUL & OPTIMIS'], negatif:['MUDAH TERPENGARUH OPINI','SUKA CARI PERHATIAN','SOMBONG'], warna_sesuai:'HITAM, BIRU, ABU ABU', warna_pendukung:'PUTIH, EMAS, APRIKOT,PERAK', warna_melemahkan:'MERAH, MERAH JAMBU, UNGU, ORANGE', siklus:['MEMBANGUN RELASI','PENUH KEJUTAN','KEBERUNTUNGAN TINGGI'] },
  8: { nama:'API', positif:['TERLAHIR SEBAGAI SEORANG YG MEMPUNYAI SIFAT TANGGUNG JAWAB','MENGUTAMAKAN ORANG LAIN (PERHATIAN)','MEMPUNYAI ETOS KERJA','JUJUR & BERINTEGRITAS & DERMAWAN'], negatif:['KURANG BERPIKIR KE DIRI SENDIRI','STRESS&KURANG WAKTU SENDIRI','PERFEKSIONIS(SUSAH MENDELEGASI)'], warna_sesuai:'MERAH, MERAH JAMBU, UNGU, ORANGE', warna_pendukung:'HIJAU, CYAN', warna_melemahkan:'PUTIH, EMAS, APRIKOT,PERAK', siklus:['MEMBANGUN KEKUASAAN','MEMBANGUN TANGGUNG JAWAB','KEBERUNTUNGAN RENDAH'] },
  9: { nama:'KAYU', positif:['TERLAHIR SEBAGAI SEORANG YANG VISIONER(IMAJINATIF)','KUAT DALAM PIKIRAN & KEYAKINAN (APA YANG DIPIKIRKAN AKAN MUDAH DIDAPATKAN)','KHARISMATIK & OPTIMIS (MENTAL KUAT)','INTUITIF, MUDAH & CEPAT MENARIK PELUANG'], negatif:['TIDAK KONSISTEN, EKSPEKTASI TERLALU TINGGI','MUDAH STRESS & TERSUGESTI','SULIT MENGONTROL EMOSI & PIKIRAN'], warna_sesuai:'HIJAU, CYAN', warna_pendukung:'HITAM, BIRU, ABU ABU', warna_melemahkan:'KUNING, KOPI, COKLAT TUA/MUDA', siklus:['MENIKMATI HASIL (PENUTUP)','PERSIAPAN SIKLUS BARU YANG LEBIH BAIK','KEBERUNTUNGAN TERMASUK TINGGI'] }
};

const BLESSINGS = {
  4:'Mendapatkan Berkat KEBAHAGIAN ( Lahan / Tanah / Perumahan / Aset )',
  5:'Mendapatkan Berkat KEDUDUKAN ( Posisi, Karir )',
  6:'Mendapatkan Berkat KEBERUNTUNGAN/KEBIJAKSANAAN (Makan / Kekayaan)',
  7:'Mendapatkan Berkat KEPOPULERAN ( Kekuasaan / Orang Pendukung )',
  9:'Mendapatkan Berkat PANJANG UMUR/KESUKSESAN ( Kesejahteraan Hidup - XI YUE HONG )'
};

const DREAMS = [
  {no:1, title:'MENJADI PEMIMPIN (LEADER, DIREKTUR, MANAGER)', segitiga:'1 (Leader), 5 (Arah), 7 (Orang Pendukung), 9 (Hasil)'},
  {no:2, title:'MENJADI PEMBICARA HANDAL (MOTIVATOR, PENCERAMAH)', segitiga:'2 (Komunikasi), 7 (Orang Pendukung), 9 (Hasil)'},
  {no:3, title:'MENJADI BANGSAWAN', segitiga:'3 (Tindakan), 6 (Uang)'},
  {no:4, title:'MENJADI PLANNER (KONSELOR, KONSULTAN)', segitiga:'2 (Komunikasi), 4 (Rencana), 9 (Hasil)'},
  {no:5, title:'MENJADI KETUA PARA PEMIMPIN (CEO, RAJA, KETUA UMUM)', segitiga:'1 (Leader), 4 (Rencana), 5 (Arah), 7 (Orang Pendukung), 8 (Bertanggung Jawab), 9 (Hasil)'},
  {no:6, title:'MENJADI PENGUSAHA, INVESTOR, BANKIR, OLIGARKI', segitiga:'3 (Tindakan), 6 (Uang)'},
  {no:7, title:'MENJADI PENGENDALI SEMUA ORANG', segitiga:'2 (Komunikasi), 7 (Orang Pendukung), 9 (Hasil)'},
  {no:8, title:'MENDAPATKAN HAK ANDA SENDIRI (KUASA)', segitiga:'2 (Komunikasi), 4 (Rencana), 5 (Arah), 8 (Bertanggung Jawab), 9 (Hasil)'},
  {no:9, title:'MENGUASAI DUNIA', segitiga:'1 (Leader), 2 (Komunikasi), 4 (Rencana), 5 (Arah), 7 (Orang Pendukung), 9 (Hasil)'}
];

// ============================================================
// SHIO DATA
// ============================================================
var SHIO_DATA = [];
(function buildShioData(){
  var base = [
    {no:1,start:'1900-01-31',shio:'鼠 Tikus 🐭',elemen:'Logam',yy:'Yang',trait:'Cerdas, adaptif, oportunis'},
    {no:2,start:'1901-02-19',shio:'牛 Kerbau 🐃',elemen:'Logam',yy:'Yin',trait:'Tekun, sabar, dapat diandalkan'},
    {no:3,start:'1902-02-08',shio:'虎 Macan 🐯',elemen:'Air',yy:'Yang',trait:'Berani, kompetitif, tidak terduga'},
    {no:4,start:'1903-01-29',shio:'兔 Kelinci 🐰',elemen:'Air',yy:'Yin',trait:'Lembut, elegan, waspada'},
    {no:5,start:'1904-02-16',shio:'龍 Naga 🐲',elemen:'Kayu',yy:'Yang',trait:'Kuat, beruntung, karismatik'},
    {no:6,start:'1905-02-04',shio:'蛇 Ular🐍',elemen:'Kayu',yy:'Yin',trait:'Bijaksana, misterius, intuitif'},
    {no:7,start:'1906-01-25',shio:'馬 Kuda 🐴',elemen:'Api',yy:'Yang',trait:'Energik, bebas, antusias'},
    {no:8,start:'1907-02-13',shio:'羊 Kambing 🐐',elemen:'Api',yy:'Yin',trait:'Seni, dermawan, pemalu'},
    {no:9,start:'1908-02-02',shio:'猴 Monyet 🐒',elemen:'Tanah',yy:'Yang',trait:'Cerdik, serbabisa, kreatif'},
    {no:10,start:'1909-01-22',shio:'雞 Ayam 🐓',elemen:'Tanah',yy:'Yin',trait:'Pekerja keras, jujur, teliti'},
    {no:11,start:'1910-02-10',shio:'狗 Anjing 🐕',elemen:'Logam',yy:'Yang',trait:'Setia, jujur, keras kepala'},
    {no:12,start:'1911-01-30',shio:'豬 Babi 🐷',elemen:'Logam',yy:'Yin',trait:'Baik hati, murah hati, optimis'}
  ];
  var elemCycle = ['Logam','Air','Kayu','Api','Tanah'];
  for(var s = 1; s <= 151; s++){
    var idx = (s-1) % 12;
    var entry = JSON.parse(JSON.stringify(base[idx]));
    entry.no = s;
    var year = 1900 + s - 1;
    var imlekOffset = Math.floor((year - 1900) * 0.032);
    var imlekDay = 31 + imlekOffset;
    if(imlekDay > 59) imlekDay = imlekDay - 28;
    var startStr = year + '-' + String(imlekDay < 32 ? 1 : 2).padStart(2,'0') + '-' + String(imlekDay < 32 ? imlekDay : imlekDay - 31).padStart(2,'0');
    entry.start = startStr;
    entry.elemen = elemCycle[(s-1) % 5];
    SHIO_DATA.push(entry);
  }
})();

const RELATION_DATA = [
  {shio:'鼠 Tikus 🐭', serangkai:'龍 Naga 🐲, 猴 Monyet 🐒', cabang:'牛 Kerbau 🐃, 豬 Babi 🐷', menyakiti:'馬 Kuda 🐴', harmoni:'牛 Kerbau 🐃'},
  {shio:'牛 Kerbau 🐃', serangkai:'蛇 Ular🐍, 雞 Ayam 🐓', cabang:'豬 Babi 🐷, 鼠 Tikus 🐭', menyakiti:'羊 Kambing 🐐', harmoni:'鼠 Tikus 🐭'},
  {shio:'虎 Macan 🐯', serangkai:'馬 Kuda 🐴, 狗 Anjing 🐕', cabang:'兔 Kelinci 🐰, 龍 Naga 🐲', menyakiti:'猴 Monyet 🐒, 蛇 Ular🐍, 豬 Babi 🐷', harmoni:'豬 Babi 🐷'},
  {shio:'兔 Kelinci 🐰', serangkai:'羊 Kambing 🐐, 豬 Babi 🐷', cabang:'龍 Naga 🐲, 虎 Macan 🐯', menyakiti:'雞 Ayam 🐓', harmoni:'狗 Anjing 🐕'},
  {shio:'龍 Naga 🐲', serangkai:'鼠 Tikus 🐭, 猴 Monyet 🐒', cabang:'虎 Macan 🐯, 兔 Kelinci 🐰', menyakiti:'狗 Anjing 🐕', harmoni:'雞 Ayam 🐓'},
  {shio:'蛇 Ular🐍', serangkai:'牛 Kerbau 🐃, 雞 Ayam 🐓', cabang:'馬 Kuda , 羊 Kambing 🐐', menyakiti:'虎 Macan 🐯', harmoni:'猴 Monyet 🐒'},
  {shio:'馬 Kuda 🐴', serangkai:'虎 Macan 🐯, 狗 Anjing 🐕', cabang:'羊 Kambing 🐐, 蛇 Ular🐍', menyakiti:'鼠 Tikus 🐭', harmoni:'羊 Kambing 🐐'},
  {shio:'羊 Kambing 🐐', serangkai:'兔 Kelinci 🐰, 豬 Babi 🐷', cabang:'蛇 Ular🐍, 馬 Kuda 🐴', menyakiti:'牛 Kerbau 🐃', harmoni:'馬 Kuda 🐴'},
  {shio:'猴 Monyet 🐒', serangkai:'鼠 Tikus 🐭, 龍 Naga 🐲', cabang:'雞 Ayam 🐓, 狗 Anjing 🐕', menyakiti:'虎 Macan 🐯, 豬 Babi 🐷', harmoni:'蛇 Ular🐍'},
  {shio:'雞 Ayam 🐓', serangkai:'牛 Kerbau 🐃, 蛇 Ular🐍', cabang:'狗 Anjing 🐕, 猴 Monyet 🐒', menyakiti:'兔 Kelinci 🐰', harmoni:'龍 Naga 🐲'},
  {shio:'狗 Anjing 🐕', serangkai:'虎 Macan 🐯, 馬 Kuda 🐴', cabang:'猴 Monyet 🐒, 雞 Ayam 🐓', menyakiti:'龍 Naga 🐲', harmoni:'兔 Kelinci 🐰'},
  {shio:'豬 Babi 🐷', serangkai:'羊 Kambing 🐐, 兔 Kelinci 🐰', cabang:'鼠 Tikus 🐭, 牛 Kerbau 🐃', menyakiti:'虎 Macan 🐯', harmoni:'虎 Macan 🐯'}
];

// ============================================================
// CONFIGURATION
// ============================================================
const CONFIG = {
    IS_LOCAL: false,
    GITHUB_RAW_URL: 'https://raw.githubusercontent.com/nanjingtouzi/SHUYILIFECODE/main/data/',
    GITHUB_API_URL: 'https://api.github.com/repos/nanjingtouzi/SHUYILIFECODE/contents/data/',
    GITHUB_TOKEN: '',
    SENDGRID_API_KEY: '',
    MAILTRAP_API_KEY: '',
    GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbydyZej9QAfky9eeCILhCclJzLv41K_rsMoEGk9U7dVettISgBP9TCdMDzsz5JQiX3Hhw/exec',
    ADMIN_PHONE: '6281944142311',
    ADMIN_EMAIL: 'admin@domain.com',
    DEFAULT_QUOTA: 5,
    DEFAULT_DAYS: 30
};
// ============================================================
// DATA STORE
// ============================================================
const DATA = {
    users: {},
    licenses: {},
    codes: {},
    history: {}
};

function generateId() { return 'id_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6); }

function esc(s) { if (!s) return ''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function getTodayStr() { return new Date().toISOString().slice(0,10); }

function getNowISO() { return new Date().toISOString(); }

function daysBetween(d1, d2) {
    const a = new Date(d1); const b = new Date(d2);
    return Math.ceil((b - a) / (1000 * 60 * 60 * 24));
}

function elemByNo(no){
  return ELEMEN_DATA[no] || null;
}

function getMeaning(code){
  if(MEANING_DATA[code]) return MEANING_DATA[code];
  var clean = String(parseInt(code,10));
  return MEANING_DATA[clean] || null;
}

function findShio(dateObj){
  var match = SHIO_DATA[0];
  for(var i = 0; i < SHIO_DATA.length; i++){
    var entry = SHIO_DATA[i];
    var start = new Date(entry.start + 'T00:00:00');
    if(start <= dateObj){ match = entry; } else { break; }
  }
  return match;
}

function findRelation(animalName){
  for(var i = 0; i < RELATION_DATA.length; i++){
    if(RELATION_DATA[i].shio.indexOf(animalName) !== -1) return RELATION_DATA[i];
  }
  return null;
}

// ============================================================
// DATA LOAD & SAVE (Local)
// ============================================================
function loadLocalData() {
    const keys = ['users', 'licenses', 'codes', 'history'];
    keys.forEach(key => {
        const data = localStorage.getItem('local_' + key);
        if (data) {
            DATA[key] = JSON.parse(data);
        } else {
            DATA[key] = {};
            localStorage.setItem('local_' + key, JSON.stringify(DATA[key]));
        }
    });
}

function saveLocalData() {
    const keys = ['users', 'licenses', 'codes', 'history'];
    keys.forEach(key => {
        localStorage.setItem('local_' + key, JSON.stringify(DATA[key]));
    });
}

function getUsers() { return DATA.users; }

function getUser(email) { return DATA.users[email] || null; }

function createUser(email, name, phone) {
    DATA.users[email] = {
        name: name,
        phone: phone,
        verified: false,
        registered_at: getNowISO()
    };
    saveLocalData();
}

function verifyUser(email) {
    if (DATA.users[email]) {
        DATA.users[email].verified = true;
        saveLocalData();
        return true;
    }
    return false;
}

function getLicenses() { return DATA.licenses; }

function getLicense(email) {
    for (const key in DATA.licenses) {
        if (DATA.licenses[key].user_email === email) {
            return DATA.licenses[key];
        }
    }
    return null;
}

function createLicense(email, quota, days) {
    const key = 'LIFE-' + getTodayStr().replace(/-/g,'') + '-' + Math.random().toString(36).substring(2,6).toUpperCase();
    const now = getTodayStr();
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + days);
    const expiryStr = expiry.toISOString().slice(0,10);
    
    DATA.licenses[key] = {
        user_email: email,
        type: 'both',
        quota: quota,
        used_count: 0,
        start_date: now,
        expiry_date: expiryStr,
        is_active: true
    };
    saveLocalData();
    return key;
}

function updateLicenseUsage(email) {
    const license = getLicense(email);
    if (!license) return false;
    if (!license.is_active) return false;
    if (license.used_count >= license.quota) return false;
    if (new Date(license.expiry_date) < new Date()) return false;
    
    license.used_count++;
    saveLocalData();
    return true;
}

function getLicenseStatus(email) {
    const license = getLicense(email);
    if (!license) return { active: false, reason: 'no_license' };
    if (!license.is_active) return { active: false, reason: 'inactive' };
    if (license.used_count >= license.quota) return { active: false, reason: 'quota_exhausted', used: license.used_count, quota: license.quota };
    if (new Date(license.expiry_date) < new Date()) return { active: false, reason: 'expired', expiry: license.expiry_date };
    
    const remaining = license.quota - license.used_count;
    const daysLeft = daysBetween(getTodayStr(), license.expiry_date);
    return { 
        active: true, 
        remaining: remaining, 
        daysLeft: daysLeft, 
        expiry: license.expiry_date,
        used: license.used_count,
        quota: license.quota
    };
}

function getCodes() { return DATA.codes; }

function redeemToken(email, token) {
    const codeData = DATA.codes[token];
    if (!codeData) return { success: false, message: 'Token tidak ditemukan.' };
    if (codeData.used) return { success: false, message: 'Token sudah digunakan.' };
    
    codeData.used = true;
    codeData.used_by = email;
    codeData.used_at = getNowISO();
    saveLocalData();
    
    const license = getLicense(email);
    if (!license) return { success: false, message: 'Lisensi tidak ditemukan.' };
    
    if (codeData.type === 'time') {
        const currentExpiry = new Date(license.expiry_date);
        currentExpiry.setDate(currentExpiry.getDate() + codeData.duration);
        license.expiry_date = currentExpiry.toISOString().slice(0,10);
    } else if (codeData.type === 'quota') {
        license.quota += codeData.amount;
    } else if (codeData.type === 'both') {
        const currentExpiry = new Date(license.expiry_date);
        currentExpiry.setDate(currentExpiry.getDate() + codeData.duration);
        license.expiry_date = currentExpiry.toISOString().slice(0,10);
        license.quota += codeData.amount;
    }
    
    license.is_active = true;
    saveLocalData();
    return { success: true, message: 'Lisensi berhasil diperpanjang!' };
}
// ============================================================
// HISTORY FUNCTIONS
// ============================================================
function getUserHistory(email) {
    const key = 'history_' + email;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function saveUserHistory(email, name, dob) {
    const key = 'history_' + email;
    const history = getUserHistory(email);
    history.push({
        id: generateId(),
        name: name,
        dob: dob,
        calculated_at: getNowISO()
    });
    localStorage.setItem(key, JSON.stringify(history));
}

function deleteUserHistoryItem(email, id) {
    const key = 'history_' + email;
    let history = getUserHistory(email);
    history = history.filter(item => item.id !== id);
    localStorage.setItem(key, JSON.stringify(history));
}

function deleteAllUserHistory(email) {
    const key = 'history_' + email;
    localStorage.removeItem(key);
}

function getAdminHistory() { return DATA.history; }

function saveAdminHistory(email, name, dob) {
    if (!DATA.history[email]) {
        DATA.history[email] = [];
    }
    DATA.history[email].push({
        id: generateId(),
        name: name,
        dob: dob,
        calculated_at: getNowISO()
    });
    saveLocalData();
}

// ============================================================
// SESSION MANAGEMENT
// ============================================================
function getSession() {
    const data = localStorage.getItem('session');
    return data ? JSON.parse(data) : null;
}

function setSession(email, name) {
    localStorage.setItem('session', JSON.stringify({ email: email, name: name, login_at: getNowISO() }));
}

function clearSession() {
    localStorage.removeItem('session');
}

// ============================================================
// OTP FUNCTIONS
// ============================================================
function generateOTP() {
    return String(Math.floor(100000 + Math.random() * 900000));
}

function saveOTP(email, otp) {
    localStorage.setItem('otp_' + email, JSON.stringify({
        code: otp,
        created_at: getNowISO(),
        attempts: 0
    }));
}

function getOTP(email) {
    const data = localStorage.getItem('otp_' + email);
    return data ? JSON.parse(data) : null;
}

function verifyOTP(email, code) {
    const otpData = getOTP(email);
    if (!otpData) return { valid: false, message: 'OTP tidak ditemukan. Minta ulang.' };
    
    const created = new Date(otpData.created_at);
    const now = new Date();
    const diff = (now - created) / 1000 / 60;
    if (diff > 5) {
        localStorage.removeItem('otp_' + email);
        return { valid: false, message: 'OTP sudah kadaluarsa. Minta ulang.' };
    }
    
    if (otpData.attempts >= 3) {
        localStorage.removeItem('otp_' + email);
        return { valid: false, message: 'Terlalu banyak percobaan. Minta ulang.' };
    }
    
    if (otpData.code !== code) {
        otpData.attempts++;
        localStorage.setItem('otp_' + email, JSON.stringify(otpData));
        return { valid: false, message: 'Kode OTP salah.' };
    }
    
    localStorage.removeItem('otp_' + email);
    return { valid: true, message: 'OTP valid.' };
}

function sendOTP(email) {
    const otp = generateOTP();
    saveOTP(email, otp);
    
    // Kirim via Google Apps Script
    if (!CONFIG.IS_LOCAL && CONFIG.GOOGLE_APPS_SCRIPT_URL) {
        console.log('📧 Mengirim OTP ke ' + email + ' via Google Apps Script...');
        console.log('📤 URL:', CONFIG.GOOGLE_APPS_SCRIPT_URL);
        
        // Gunakan mode 'cors' agar bisa melihat response
        fetch(CONFIG.GOOGLE_APPS_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                otp: otp
            })
        })
        .then(response => {
            console.log('📥 Response status:', response.status);
            return response.text();
        })
        .then(data => {
            console.log('📥 Response data:', data);
            try {
                const json = JSON.parse(data);
                if (json.success) {
                    console.log('📧 Email OTP terkirim ke ' + email);
                    console.log('💡 Cek inbox ' + email + ' (termasuk folder Spam)');
                } else {
                    console.log('❌ Gagal kirim email:', json.error);
                    console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
                }
            } catch(e) {
                console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
            }
        })
        .catch(error => {
            console.log('❌ Error:', error);
            console.log('📧 [FALLBACK] OTP untuk ' + email + ': ' + otp);
        });
    } else {
        console.log('📧 [LOCAL] OTP untuk ' + email + ': ' + otp);
        console.log('💡 Gunakan kode ini untuk verifikasi (mode lokal)');
    }
    
    return true;
}
// ============================================================
// WHATSAPP LINK
// ============================================================
function getWALink(email) {
    const phone = CONFIG.ADMIN_PHONE;
    const text = 'Halo Admin, saya mau minta token perpanjang lisensi Angka Kehidupan. Email saya: ' + email;
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
}

// ============================================================
// UI FUNCTIONS
// ============================================================
function updateStatusBar() {
    const session = getSession();
    const bar = document.getElementById('userStatusBar');
    const warning = document.getElementById('licenseWarning');
    
    if (!session) {
        bar.style.display = 'none';
        warning.style.display = 'none';
        document.getElementById('formCard').style.display = 'block';
        return;
    }
    
    const user = getUser(session.email);
    if (!user) {
        bar.style.display = 'none';
        warning.style.display = 'none';
        return;
    }
    
    bar.style.display = 'flex';
    document.getElementById('displayName').textContent = '👤 ' + user.name;
    
    const kuotaEl = document.getElementById('displayKuota');
    const masaEl = document.getElementById('displayMasaAktif');
    const expiredEl = document.getElementById('displayExpired');
    
    let licenses = {};
    try {
        licenses = JSON.parse(localStorage.getItem('local_licenses') || '{}');
    } catch(e) {}
    
    let userLicense = null;
    for (const key in licenses) {
        if (licenses[key].user_email === session.email) {
            userLicense = licenses[key];
            break;
        }
    }
    
    if (userLicense && userLicense.is_active) {
        const remaining = userLicense.quota - (userLicense.used_count || 0);
        const expiry = new Date(userLicense.expiry_date);
        const now = new Date();
        const daysLeft = Math.ceil((expiry - now) / (1000 * 60 * 60 * 24));
        
        if (kuotaEl) {
            kuotaEl.textContent = remaining + '/' + userLicense.quota;
            kuotaEl.className = 'val success';
            kuotaEl.style.color = '#7fb59c';
            kuotaEl.style.fontWeight = 'bold';
            kuotaEl.style.fontSize = '16px';
            kuotaEl.style.display = 'inline-block';
        }
        if (masaEl) {
            masaEl.textContent = daysLeft > 0 ? daysLeft : 0;
            masaEl.className = 'val';
        }
        if (expiredEl) {
            expiredEl.textContent = userLicense.expiry_date;
            expiredEl.className = 'val';
        }
        
        warning.style.display = 'none';
        document.getElementById('formCard').style.display = 'block';
    } else {
        if (kuotaEl) {
            kuotaEl.textContent = '0/0';
            kuotaEl.className = 'val danger';
        }
        if (masaEl) {
            masaEl.textContent = '0';
            masaEl.className = 'val danger';
        }
        if (expiredEl) {
            expiredEl.textContent = '—';
            expiredEl.className = 'val danger';
        }
        
        if (userLicense && !userLicense.is_active) {
            warning.style.display = 'block';
            document.getElementById('licenseWarningDesc').textContent = 'Lisensi Anda tidak aktif. Hubungi admin untuk perpanjang.';
            document.getElementById('waLink').href = getWALink(session.email);
            document.getElementById('formCard').style.display = 'none';
        } else {
            warning.style.display = 'none';
            document.getElementById('formCard').style.display = 'block';
        }
    }
}

// ============================================================
// MODAL FUNCTIONS
// ============================================================
let currentModalStep = 'login';

function showModal(step, email) {
    const modal = document.getElementById('loginModal');
    modal.classList.add('show');
    
    document.getElementById('loginStep1').style.display = 'none';
    document.getElementById('loginStep2').style.display = 'none';
    document.getElementById('registerStep').style.display = 'none';
    document.getElementById('registerOtpStep').style.display = 'none';
    document.getElementById('tokenStep').style.display = 'none';
    
    if (step === 'login') {
        currentModalStep = 'login';
        document.getElementById('modalIcon').textContent = '🔐';
        document.getElementById('modalTitle').textContent = 'Login untuk Menghitung';
        document.getElementById('modalSub').textContent = 'Masukkan email Anda untuk melanjutkan.';
        document.getElementById('loginStep1').style.display = 'block';
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginEmail').focus();
    } else if (step === 'otp') {
        currentModalStep = 'otp';
        document.getElementById('modalIcon').textContent = '📧';
        document.getElementById('modalTitle').textContent = 'Verifikasi Kode OTP';
        document.getElementById('modalSub').textContent = 'Masukkan kode 6 digit yang dikirim ke email Anda.';
        document.getElementById('loginStep2').style.display = 'block';
        document.getElementById('otpEmailDisplay').textContent = email || '—';
        document.querySelectorAll('.otp-input').forEach(inp => inp.value = '');
        document.querySelector('.otp-input').focus();
        startOtpTimer();
    } else if (step === 'register') {
        currentModalStep = 'register';
        document.getElementById('modalIcon').textContent = '📝';
        document.getElementById('modalTitle').textContent = 'Registrasi Akun Baru';
        document.getElementById('modalSub').textContent = 'Lengkapi data di bawah ini untuk mendaftar.';
        document.getElementById('registerStep').style.display = 'block';
        document.getElementById('regEmailDisplay').textContent = email || '—';
        document.getElementById('regName').value = '';
        document.getElementById('regPhone').value = '';
        document.getElementById('regName').focus();
    } else if (step === 'register_otp') {
        currentModalStep = 'register_otp';
        document.getElementById('modalIcon').textContent = '📧';
        document.getElementById('modalTitle').textContent = 'Verifikasi Kode OTP';
        document.getElementById('modalSub').textContent = 'Masukkan kode 6 digit yang dikirim ke email Anda.';
        document.getElementById('registerOtpStep').style.display = 'block';
        document.getElementById('regOtpEmailDisplay').textContent = email || '—';
        document.querySelectorAll('.otp-input-reg').forEach(inp => inp.value = '');
        document.querySelector('.otp-input-reg').focus();
    } else if (step === 'token') {
        currentModalStep = 'token';
        document.getElementById('modalIcon').textContent = '🔑';
        document.getElementById('modalTitle').textContent = 'Masukkan Token Perpanjang';
        document.getElementById('modalSub').textContent = 'Masukkan token yang diberikan oleh admin.';
        document.getElementById('tokenStep').style.display = 'block';
        document.getElementById('tokenInput').value = '';
        document.getElementById('tokenInput').focus();
    }
}

function hideModal() {
    document.getElementById('loginModal').classList.remove('show');
}

let otpTimerInterval = null;
let otpSecondsLeft = 60;

function startOtpTimer() {
    const timerEl = document.getElementById('otpTimer');
    const resendBtn = document.getElementById('resendOtpBtn');
    otpSecondsLeft = 60;
    timerEl.style.display = 'block';
    resendBtn.style.pointerEvents = 'none';
    resendBtn.style.opacity = '0.5';
    
    clearInterval(otpTimerInterval);
    otpTimerInterval = setInterval(function() {
        otpSecondsLeft--;
        if (otpSecondsLeft <= 0) {
            clearInterval(otpTimerInterval);
            timerEl.style.display = 'none';
            resendBtn.style.pointerEvents = 'auto';
            resendBtn.style.opacity = '1';
        } else {
            timerEl.textContent = 'Kirim ulang dalam ' + otpSecondsLeft + ' detik';
        }
    }, 1000);
}

// ============================================================
// OTP INPUT AUTO-FOCUS
// ============================================================
document.querySelectorAll('.otp-input').forEach((input, index) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < 5) {
            document.querySelectorAll('.otp-input')[index + 1].focus();
        }
    });
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
            document.querySelectorAll('.otp-input')[index - 1].focus();
        }
        if (e.key === 'Enter') {
            document.getElementById('verifyOtpBtn').click();
        }
    });
});

document.querySelectorAll('.otp-input-reg').forEach((input, index) => {
    input.addEventListener('input', function() {
        if (this.value.length === 1 && index < 5) {
            document.querySelectorAll('.otp-input-reg')[index + 1].focus();
        }
    });
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
            document.querySelectorAll('.otp-input-reg')[index - 1].focus();
        }
        if (e.key === 'Enter') {
            document.getElementById('verifyRegOtpBtn').click();
        }
    });
});

// ============================================================
// AUTO-TAB INPUT TANGGAL LAHIR
// ============================================================
document.getElementById('dobDay').addEventListener('input', function() {
    if (this.value.length === 2) {
        document.getElementById('dobMonth').focus();
    }
});

document.getElementById('dobMonth').addEventListener('input', function() {
    if (this.value.length === 2) {
        document.getElementById('dobYear').focus();
    }
});

// ============================================================
// BUTTON EVENT HANDLERS
// ============================================================
document.getElementById('loginSendOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) {
        alert('Masukkan email Anda.');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        alert('Format email tidak valid.');
        return;
    }
    
    const user = getUser(email);
    if (user) {
        sendOTP(email);
        showModal('otp', email);
    } else {
        showModal('register', email);
    }
});

document.getElementById('verifyOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('otpEmailDisplay').textContent;
    let otp = '';
    document.querySelectorAll('.otp-input').forEach(inp => otp += inp.value);
    
    if (otp.length !== 6) {
        alert('Masukkan 6 digit kode OTP.');
        return;
    }
    
    const result = verifyOTP(email, otp);
    if (result.valid) {
        const user = getUser(email);
        setSession(email, user.name);
        hideModal();
        updateStatusBar();
        alert('✅ Login berhasil! Selamat datang, ' + user.name + '!');
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('resendOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('otpEmailDisplay').textContent;
    sendOTP(email);
    startOtpTimer();
    alert('📧 Kode OTP baru telah dikirim ke ' + email);
});

document.getElementById('registerSubmitBtn').addEventListener('click', function() {
    const email = document.getElementById('regEmailDisplay').textContent;
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    
    if (!name || name.length < 2) {
        alert('Masukkan nama lengkap Anda.');
        return;
    }
    if (!phone || phone.length < 10 || phone.length > 13) {
        alert('Masukkan nomor HP yang valid (10-13 digit).');
        return;
    }
    
    if (getUser(email)) {
        alert('Email sudah terdaftar. Silakan login.');
        showModal('login');
        return;
    }
    
    createUser(email, name, phone);
    sendOTP(email);
    showModal('register_otp', email);
});

document.getElementById('verifyRegOtpBtn').addEventListener('click', function() {
    const email = document.getElementById('regOtpEmailDisplay').textContent;
    let otp = '';
    document.querySelectorAll('.otp-input-reg').forEach(inp => otp += inp.value);
    
    if (otp.length !== 6) {
        alert('Masukkan 6 digit kode OTP.');
        return;
    }
    
    const result = verifyOTP(email, otp);
    if (result.valid) {
        verifyUser(email);
        createLicense(email, CONFIG.DEFAULT_QUOTA, CONFIG.DEFAULT_DAYS);
        const user = getUser(email);
        setSession(email, user.name);
        hideModal();
        updateStatusBar();
        alert('✅ Registrasi berhasil! Selamat datang, ' + user.name + '!');
        alert('📊 Anda mendapatkan ' + CONFIG.DEFAULT_QUOTA + ' kali kuota dan ' + CONFIG.DEFAULT_DAYS + ' hari masa aktif.');
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('resendRegOtpBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('regOtpEmailDisplay').textContent;
    sendOTP(email);
    alert('📧 Kode OTP baru telah dikirim ke ' + email);
});

document.getElementById('redeemTokenBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        hideModal();
        return;
    }
    
    const token = document.getElementById('tokenInput').value.trim();
    if (!token) {
        alert('Masukkan token perpanjang.');
        return;
    }
    
    const result = redeemToken(session.email, token);
    if (result.success) {
        hideModal();
        updateStatusBar();
        alert('✅ ' + result.message);
    } else {
        alert('❌ ' + result.message);
    }
});

document.getElementById('goToRegister').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    if (!email) {
        alert('Masukkan email Anda terlebih dahulu.');
        return;
    }
    showModal('register', email);
});

document.getElementById('goToLogin').addEventListener('click', function(e) {
    e.preventDefault();
    showModal('login');
});

document.getElementById('closeModalBtn').addEventListener('click', function(e) {
    e.preventDefault();
    hideModal();
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Yakin ingin logout?')) {
        clearSession();
        updateStatusBar();
        document.getElementById('results').style.display = 'none';
        alert('Anda telah logout.');
    }
});

document.getElementById('tokenBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        return;
    }
    showModal('token');
});

// ============================================================
// RIWAYAT - TANPA PENGECEKAN LISENSI
// ============================================================
document.getElementById('historyBtn').addEventListener('click', function() {
    var session = getSession();
    if (!session) {
        alert('Silakan login terlebih dahulu.');
        return;
    }
    loadHistory();
    document.getElementById('historyModal').classList.add('show');
});

// ============================================================
// HISTORY MODAL
// ============================================================
document.getElementById('closeHistoryBtn').addEventListener('click', function() {
    document.getElementById('historyModal').classList.remove('show');
});

document.getElementById('deleteAllHistoryBtn').addEventListener('click', function() {
    const session = getSession();
    if (!session) return;
    if (confirm('Yakin ingin menghapus semua riwayat perhitungan? Tindakan ini tidak dapat dibatalkan.')) {
        deleteAllUserHistory(session.email);
        loadHistory();
        alert('✅ Semua riwayat telah dihapus.');
    }
});

// ============================================================
// MODAL KUOTA HABIS
// ============================================================
function showQuotaModal() {
    const session = getSession();
    if (!session) {
        showModal('login');
        return;
    }
    
    const user = getUser(session.email);
    const status = getLicenseStatus(session.email);
    
    // Ambil langsung dari localStorage untuk memastikan
    let licenses = {};
    try {
        licenses = JSON.parse(localStorage.getItem('local_licenses') || '{}');
    } catch(e) {}
    
    let userLicense = null;
    for (const key in licenses) {
        if (licenses[key].user_email === session.email) {
            userLicense = licenses[key];
            break;
        }
    }
    
    // Isi data modal
    document.getElementById('quotaUserName').textContent = user ? user.name : '—';
    document.getElementById('quotaUserEmail').textContent = session.email;
    document.getElementById('quotaMasaAktif').textContent = status.daysLeft > 0 ? status.daysLeft + ' hari' : 'Habis';
    
    // PERBAIKI: Ambil expiry_date dari userLicense
    const expiryDate = userLicense && userLicense.expiry_date ? userLicense.expiry_date : '—';
    document.getElementById('quotaExpired').textContent = expiryDate;
    
    // Template pesan WhatsApp
    const phone = CONFIG.ADMIN_PHONE;
    const text = 
        'Halo Admin, saya mau minta token perpanjang lisensi Angka Kehidupan.%0A%0A' +
        '📧 Email: ' + session.email + '%0A' +
        '👤 Nama: ' + (user ? user.name : '—') + '%0A' +
        '📊 Sisa Kuota: 0/5%0A' +
        '⏰ Masa Aktif: ' + (status.daysLeft > 0 ? status.daysLeft + ' hari lagi' : 'Habis') + '%0A' +
        '📅 Expired: ' + expiryDate + '%0A%0A' +
        'Mohon bantuannya untuk token perpanjang. Terima kasih.';
    
    document.getElementById('quotaWaLink').href = 'https://wa.me/' + phone + '?text=' + text;
    
    // Tampilkan modal
    document.getElementById('quotaModal').classList.add('show');
}

// Tombol tutup modal kuota habis
document.getElementById('closeQuotaModalBtn').addEventListener('click', function() {
    document.getElementById('quotaModal').classList.remove('show');
});

// Tutup modal jika klik di luar
document.getElementById('quotaModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

function loadHistory() {
    const session = getSession();
    if (!session) return;
    
    const history = getUserHistory(session.email);
    const container = document.getElementById('historyContent');
    
    if (history.length === 0) {
        container.innerHTML = '<div class="history-empty-state">📭 Belum ada riwayat perhitungan.</div>';
        return;
    }
    
    let html = '<table class="history-table"><thead><tr><th>#</th><th>Nama</th><th>Tanggal Lahir</th><th>Waktu</th><th>Aksi</th><th>Lihat</th></tr></thead><tbody>';
    history.forEach((item, index) => {
        const date = new Date(item.calculated_at);
        const dateStr = date.toLocaleDateString('id-ID') + ' ' + date.toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'});
        html += '<tr>';
        html += '<td>' + (index + 1) + '</td>';
        html += '<td>' + esc(item.name) + '</td>';
        html += '<td>' + esc(item.dob) + '</td>';
        html += '<td>' + dateStr + '</td>';
        html += '<td><button class="delete-btn" data-id="' + item.id + '">🗑️</button></td>';
        html += '<td><button class="view-btn" data-name="' + esc(item.name) + '" data-dob="' + esc(item.dob) + '">👁️ Lihat</button></td>';
        html += '</tr>';
    });
    html += '</tbody></table>';
    container.innerHTML = html;
    
    container.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.dataset.id;
            if (confirm('Hapus riwayat ini?')) {
                deleteUserHistoryItem(session.email, id);
                loadHistory();
            }
        });
    });
    
    container.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const name = this.dataset.name;
            const dob = this.dataset.dob;
            const parts = dob.split('/');
            if (parts.length === 3) {
                document.getElementById('fname').value = name;
                document.getElementById('dobDay').value = parts[0];
                document.getElementById('dobMonth').value = parts[1];
                document.getElementById('dobYear').value = parts[2];
            }
            document.getElementById('historyModal').classList.remove('show');
            calculateWithoutQuota();
        });
    });
}

function calculateWithoutQuota() {
    var name = document.getElementById('fname').value.trim();
    var day = document.getElementById('dobDay').value.trim();
    var month = document.getElementById('dobMonth').value.trim();
    var year = document.getElementById('dobYear').value.trim();
    var errBox = document.getElementById('errBox');
    errBox.style.display = 'none';
    errBox.textContent = '';
    
    if (!name) {
        errBox.textContent = 'Mohon isi nama.';
        errBox.style.display = 'block';
        return;
    }
    if (!day || !month || !year) {
        errBox.textContent = 'Mohon isi tanggal lahir lengkap (dd/mm/yyyy).';
        errBox.style.display = 'block';
        return;
    }
    
    var d = parseInt(day);
    var m = parseInt(month);
    var y = parseInt(year);
    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        errBox.textContent = 'Format tanggal tidak valid.';
        errBox.style.display = 'block';
        return;
    }
    if (y < 1900 || y > 2050) {
        errBox.textContent = 'Tahun lahir harus antara 1900-2050.';
        errBox.style.display = 'block';
        return;
    }
    if (m < 1 || m > 12) {
        errBox.textContent = 'Bulan harus antara 1-12.';
        errBox.style.display = 'block';
        return;
    }
    if (d < 1 || d > 31) {
        errBox.textContent = 'Hari harus antara 1-31.';
        errBox.style.display = 'block';
        return;
    }
    
    var session = getSession();
    if (!session) {
        showModal('login');
        return;
    }
    
    var dateStr = y + '-' + String(m).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var todayStr = new Date().toISOString().slice(0,10);
    var profile = computeProfile(dateStr, todayStr);
    displayResult(name, day + '/' + month + '/' + year, profile);
}
// ============================================================
// BUILD CALC DIAGRAM
// ============================================================
function buildCalcDiagram(profile, mainCharName){
  var W = 720, H = 640;
  var cx = W/2;
  var dreamY = 46, parentY = 150, mainY = 300, childY = 410, bottomY = 520;
  var ayahX = 150, ibuX = W-150, temanX = 130, depanX = W-130;

  function line(x1,y1,x2,y2,extra){
    return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="var(--gold)" stroke-opacity="0.45" stroke-width="1.6" '+(extra||'')+'/>';
  }

  var html = '<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;">';
  html += '<defs><radialGradient id="mcGlow" cx="50%" cy="50%" r="60%">';
  html += '<stop offset="0%" stop-color="var(--gold-soft)" stop-opacity="0.35"/>';
  html += '<stop offset="100%" stop-color="var(--gold-soft)" stop-opacity="0"/>';
  html += '</radialGradient></defs>';

  html += line(cx, dreamY+22, cx, mainY-46);
  html += line(ayahX, parentY+26, cx, mainY-40);
  html += line(ibuX, parentY+26, cx, mainY-40);
  html += line(cx, mainY+46, cx, childY-14);
  html += line(ayahX+40, childY, cx-10, childY, '');
  html += line(ibuX-40, childY, cx+10, childY, '');
  html += line(cx, childY+14, cx, bottomY-30);
  html += line(cx-6, bottomY-14, temanX+50, bottomY-14);
  html += line(cx+6, bottomY-14, depanX-50, bottomY-14);

  html += '<g><rect x="'+(cx-30)+'" y="'+(dreamY-22)+'" width="60" height="44" rx="10" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="1.4"/>';
  html += '<text x="'+cx+'" y="'+(dreamY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="26" fill="var(--gold-soft)">'+profile.Q5+'</text></g>';
  html += '<text x="'+cx+'" y="'+(dreamY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">IMPIAN HIDUP</text>';

  html += '<g><rect x="'+(ayahX-58)+'" y="'+(parentY-24)+'" width="116" height="48" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+ayahX+'" y="'+(parentY+8)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="22" fill="var(--paper)">'+profile.M8+' '+profile.O8+' '+profile.N9+'</text></g>';
  html += '<text x="'+ayahX+'" y="'+(parentY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">DNA AYAH</text>';

  html += '<g><rect x="'+(ibuX-58)+'" y="'+(parentY-24)+'" width="116" height="48" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+ibuX+'" y="'+(parentY+8)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="22" fill="var(--paper)">'+profile.S8+' '+profile.U8+' '+profile.T9+'</text></g>';
  html += '<text x="'+ibuX+'" y="'+(parentY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">DNA IBU</text>';

  html += '<circle cx="'+cx+'" cy="'+mainY+'" r="70" fill="url(#mcGlow)"/>';
  html += '<g transform="translate('+cx+','+mainY+') rotate(45)">';
  html += '<rect x="-46" y="-46" width="92" height="92" rx="14" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="2.4"/>';
  html += '</g>';
  html += '<text x="'+cx+'" y="'+(mainY+16)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="52" fill="var(--gold-soft)">'+profile.Q12+'</text>';
  html += '<circle cx="'+(cx+52)+'" cy="'+(mainY-46)+'" r="15" fill="var(--panel)" stroke="var(--jade-soft)" stroke-width="1.3"/>';
  html += '<text x="'+(cx+52)+'" y="'+(mainY-41)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="15" fill="var(--jade-soft)">'+profile.Q11+'</text>';
  html += '<text x="'+cx+'" y="'+(mainY+88)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" letter-spacing="0.1em" fill="var(--gold-soft)">MAIN CHARACTER · '+esc(mainCharName).toUpperCase()+'</text>';

  html += '<circle cx="'+(ayahX+40)+'" cy="'+childY+'" r="20" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+(ayahX+40)+'" y="'+(childY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="19" fill="var(--paper)">'+profile.M15+'</text>';
  html += '<circle cx="'+(ibuX-40)+'" cy="'+childY+'" r="20" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+(ibuX-40)+'" y="'+(childY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="19" fill="var(--paper)">'+profile.U15+'</text>';
  html += '<text x="'+cx+'" y="'+(childY-30)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">ANAK</text>';

  html += '<circle cx="'+cx+'" cy="'+(bottomY-14)+'" r="22" fill="var(--panel-2)" stroke="var(--gold)" stroke-width="1.6"/>';
  html += '<text x="'+cx+'" y="'+(bottomY-7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="20" fill="var(--gold-soft)">'+profile.Q17+'</text>';

  html += '<g><rect x="'+(temanX-56)+'" y="'+(bottomY-24)+'" width="112" height="46" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+temanX+'" y="'+(bottomY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="21" fill="var(--paper)">'+profile.M17+' '+profile.N17+' '+profile.O17+'</text></g>';
  html += '<text x="'+temanX+'" y="'+(bottomY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">TEMAN</text>';

  html += '<g><rect x="'+(depanX-56)+'" y="'+(bottomY-24)+'" width="112" height="46" rx="10" fill="var(--panel-2)" stroke="var(--jade)" stroke-width="1.3"/>';
  html += '<text x="'+depanX+'" y="'+(bottomY+7)+'" text-anchor="middle" font-family="Cormorant Garamond, serif" font-weight="700" font-size="21" fill="var(--paper)">'+profile.S17+' '+profile.T17+' '+profile.U17+'</text></g>';
  html += '<text x="'+depanX+'" y="'+(bottomY+42)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="10.5" letter-spacing="0.08em" fill="var(--jade-soft)">MASA DEPAN</text>';

  html += '<text x="'+cx+'" y="'+(H-34)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="var(--paper)">Main Character: <tspan fill="var(--gold-soft)" font-weight="700">'+profile.Q12+' '+esc(mainCharName).toUpperCase()+'</tspan> (Elemen Utama)</text>';
  html += '<text x="'+cx+'" y="'+(H-12)+'" text-anchor="middle" font-family="Inter, sans-serif" font-size="13" fill="var(--paper-dim)">Basic Character: <tspan fill="var(--paper)" font-weight="600">'+profile.basicCharacter+'</tspan></text>';

  html += '</svg>';
  return html;
}

// ============================================================
// COMPUTE PROFILE
// ============================================================
function reduceDigit(n){
  n = Math.abs(Math.round(n));
  if(n === 0) return 5;
  while(n > 9){
    n = String(n).split('').reduce(function(a,d){ return a + parseInt(d,10); }, 0);
  }
  return n;
}

function computeProfile(dobStr, todayStr){
  var d = new Date(dobStr + 'T00:00:00');
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var yStr = String(year).padStart(4,'0');
  var yFirst2 = parseInt(yStr.substring(0,2), 10);
  var yLast2 = parseInt(yStr.substring(2,4), 10);

  var M8 = reduceDigit(day);
  var O8 = reduceDigit(month);
  var S8 = reduceDigit(yFirst2);
  var U8 = reduceDigit(yLast2);
  var N9 = reduceDigit(M8 + O8);
  var T9 = reduceDigit(S8 + U8);
  var Q12 = reduceDigit(N9 + T9);
  var M15 = reduceDigit(T9 + Q12);
  var U15 = reduceDigit(N9 + Q12);
  var Q17 = reduceDigit(M15 + U15);
  var N17 = reduceDigit(O8 + N9);
  var O17 = reduceDigit(M8 + N9);
  var M17 = reduceDigit(N17 + O17);
  var S17 = reduceDigit(S8 + T9);
  var T17 = reduceDigit(U8 + T9);
  var U17 = reduceDigit(S17 + T17);
  var F19 = reduceDigit(N9 * 2);
  var G19 = reduceDigit(T9 * 2);
  var H19 = reduceDigit(Q12 * 2);

  var rows = [
    {no:1, label:'DNA Ayah', code:'' + M8 + O8 + N9},
    {no:2, label:'DNA Ibu', code:'' + S8 + U8 + T9},
    {no:3, label:'Karakter Utama', code:'' + N9 + T9 + Q12},
    {no:4, label:'Perjalanan Hidup (1)', code:'' + N9 + Q12 + U15},
    {no:5, label:'Perjalanan Hidup (2)', code:'' + T9 + Q12 + M15},
    {no:6, label:'Anak', code:'' + M15 + U15 + Q17},
    {no:7, label:'Karir (1)', code:'' + M8 + N9 + O17},
    {no:8, label:'Karir (2)', code:'' + O8 + N9 + N17},
    {no:9, label:'Teman', code:'' + O17 + N17 + M17},
    {no:10, label:'Pernikahan (1)', code:'' + S8 + T9 + S17},
    {no:11, label:'Pernikahan (2)', code:'' + U8 + T9 + T17},
    {no:12, label:'Masa Depan', code:'' + S17 + T17 + U17},
    {no:13, label:'Alam Bawah Sadar', code:'' + F19 + G19 + H19}
  ];
  for(var ri = 0; ri < rows.length; ri++){
    rows[ri].meaning = getMeaning(rows[ri].code);
  }

  var baseDigits = [M8,O8,S8,U8,N9,T9,Q12];
  var missing = [];
  for(var n = 1; n <= 9; n++){
    if(baseDigits.indexOf(n) === -1) missing.push(n);
  }

  var t = new Date(todayStr + 'T00:00:00');
  var cycleYear = t.getFullYear();
  if(t.getMonth() === 10) cycleYear += 1;
  var cyStr = String(cycleYear);
  var cyF = reduceDigit(parseInt(cyStr.substring(0,2),10));
  var cyL = reduceDigit(parseInt(cyStr.substring(2,4),10));
  var AB9 = reduceDigit(cyF + cyL);
  var Q11 = reduceDigit(N9 + AB9);
  var Q5 = reduceDigit(M8 + U8 + Q12);

  var shio = findShio(d);
  var animalName = shio ? shio.shio.split(' ')[0] : '';
  var relation = findRelation(animalName);

  var elemMap = {1:'LOGAM',2:'AIR',3:'API',4:'KAYU',5:'TANAH',6:'LOGAM',7:'AIR',8:'API',9:'KAYU'};
  var allSixteen = [M8, O8, S8, U8, N9, T9, Q12, M15, U15, M17, N17, O17, Q17, S17, T17, U17];
  var balance = {LOGAM:0, AIR:0, API:0, KAYU:0, TANAH:0};
  for(var ei = 0; ei < allSixteen.length; ei++){
    var e = elemMap[allSixteen[ei]];
    if(e && balance[e] !== undefined) balance[e]++;
  }

  var mainElemKey = elemMap[Q12] || 'API';
  var productionCycle = ['API', 'TANAH', 'LOGAM', 'AIR', 'KAYU'];
  var displayOrder = [];
  var startIdx = productionCycle.indexOf(mainElemKey);
  if(startIdx !== -1){
    for(var ci = 0; ci < productionCycle.length; ci++){
      var idx = (startIdx + ci) % productionCycle.length;
      displayOrder.push(productionCycle[idx]);
    }
  } else {
    displayOrder = productionCycle.slice();
  }

  var categoryMap = {
    0: {label: 'Diri Sendiri', icon: '👤'},
    1: {label: 'Anak / Uang', icon: '💰'},
    2: {label: 'Karir / Pasangan', icon: '💼'},
    3: {label: 'Politik / Kesehatan', icon: '🏛️'},
    4: {label: 'Orang Tua / Pendukung', icon: '👨‍👩‍👦'}
  };

  var IDEAL_BY_POSITION = [4, 3, 3, 3, 3];

  return {
    day: day, month: month, year: year, 
    M8: M8, O8: O8, S8: S8, U8: U8, 
    N9: N9, T9: T9, Q12: Q12,
    M15: M15, U15: U15, Q17: Q17,
    N17: N17, O17: O17, M17: M17,
    S17: S17, T17: T17, U17: U17,
    F19: F19, G19: G19, H19: H19, 
    Q11: Q11, Q5: Q5,
    rows: rows, missing: missing, baseDigits: baseDigits, 
    shio: shio, animalName: animalName, relation: relation,
    balance: balance, mainElemKey: mainElemKey, displayOrder: displayOrder,
    categoryMap: categoryMap, allSixteen: allSixteen,
    basicCharacter: '' + N9 + T9 + Q12,
    IDEAL_BY_POSITION: IDEAL_BY_POSITION
  };
}

// ============================================================
// DISPLAY RESULT
// ============================================================
function displayResult(name, dobDisplay, profile){
  var el = document.getElementById('results');
  var mainChar = elemByNo(profile.Q12);
  var yearElem = elemByNo(profile.Q11);
  var dream = null;
  for(var i = 0; i < DREAMS.length; i++){
    if(DREAMS[i].no === profile.Q5){ dream = DREAMS[i]; break; }
  }

  var mainCharElem = elemByNo(profile.Q12);
  var mainCharName = mainCharElem ? mainCharElem.nama : '—';
  var baseDigitsStr = profile.baseDigits.join(', ');
  var missingStr = profile.missing.length ? profile.missing.join(', ') : 'Tidak ada';
  
  var colLabels = [
    {no:1, label:'DNA AYAH'},{no:2, label:'DNA IBU'},{no:3, label:'KARAKTER UTAMA'},
    {no:4, label:'P.HIDUP (1)'},{no:5, label:'P.HIDUP (2)'},{no:6, label:'ANAK'},
    {no:7, label:'KARIR (1)'},{no:8, label:'KARIR (2)'},{no:9, label:'TEMAN'},
    {no:10, label:'PERNIKAH (1)'},{no:11, label:'PERNIKAH (2)'},{no:12, label:'MASA DEPAN'},
    {no:13, label:'ALAM BAWAH'}
  ];
  
  var summaryHtml = '';
  summaryHtml += '<div class="section-title">Ilustrasi Perhitungan 13 Angka <span class="cn">生命數組圖示</span></div>';
  summaryHtml += '<div class="section-sub">13 set angka kehidupan yang dihitung dari tanggal lahir Anda (seperti format segitiga).</div>';
  summaryHtml += '<div class="panel">';
  summaryHtml += '<div class="summary-13-grid">';
  for(var ci = 0; ci < profile.rows.length; ci++){
    var r = profile.rows[ci];
    var isMain = r.no === 3;
    var label = colLabels[ci] ? colLabels[ci].label : '';
    summaryHtml += '<div class="summary-13-item ' + (isMain ? 'main-char' : '') + '">';
    summaryHtml += '<div class="s-num-label">' + label + '</div>';
    summaryHtml += '<div class="s-num-box">' + esc(r.code) + '</div>';
    summaryHtml += '<div class="s-num-index">#' + r.no + '</div>';
    summaryHtml += '</div>';
  }
  summaryHtml += '</div>';
  summaryHtml += '<div class="summary-info-row">';
  summaryHtml += '📅 <strong>Tanggal:</strong> ' + esc(dobDisplay) + ' → ';
  summaryHtml += '<strong>Angka Dasar:</strong> ' + esc(baseDigitsStr) + ' → ';
  summaryHtml += '<strong>Karakter Utama:</strong> <span class="highlight">' + profile.Q12 + '</span> | ';
  summaryHtml += '<strong>Angka Hilang:</strong> <span class="missing">' + esc(missingStr) + '</span>';
  summaryHtml += '</div>';
  summaryHtml += '</div>';

  var missingHtml = profile.missing.length
    ? profile.missing.map(function(n){ return '<span class="miss-num">' + n + '</span>'; }).join('')
    : '<span class="miss-empty">Tidak ada angka yang hilang — semua angka dasar 1–9 lengkap.</span>';

  var numCards = '';
  for(var ri = 0; ri < profile.rows.length; ri++){
    var r = profile.rows[ri];
    var isMain = r.no === 3;
    var cls = isMain ? 'num-card main-char-card' : 'num-card';
    numCards += '<div class="' + cls + '" data-idx="' + String(r.no).padStart(2,'0') + '">';
    numCards += '<div class="code">' + esc(r.code) + '</div>';
    numCards += '<div class="label">' + esc(r.no) + '. ' + esc(r.label) + '</div>';
    numCards += '<div class="meaning">' + (r.meaning ? esc(r.meaning) : 'Kombinasi ini belum memiliki catatan makna spesifik pada referensi.') + '</div>';
    numCards += '</div>';
  }

  var mainCharHtml = '';
  if(mainChar){
    mainCharHtml = '<div class="main-char-highlight">';
    mainCharHtml += '<div class="big-num">' + profile.Q12 + '</div>';
    mainCharHtml += '<div class="info">';
    mainCharHtml += '<div class="label">Karakter Utama · Elemen ' + esc(mainChar.nama) + '</div>';
    mainCharHtml += '<div class="name">' + esc(mainChar.nama) + '</div>';
    mainCharHtml += '<div class="desc">' + esc(mainChar.positif[0]) + '</div>';
    mainCharHtml += '</div></div>';
  }

  var blessNums = ['4','5','6','7','9'].filter(function(n){ return profile.baseDigits.indexOf(parseInt(n,10)) !== -1; });
  var blessHtml = '';
  if(blessNums.length){
    blessHtml = '<ul class="bless-list">';
    for(var bi = 0; bi < blessNums.length; bi++){
      var bn = blessNums[bi];
      blessHtml += '<li><span class="bless-num">' + bn + '</span><span>' + esc(BLESSINGS[bn]) + '</span></li>';
    }
    blessHtml += '</ul>';
  } else {
    blessHtml = '<p class="section-sub" style="margin:0;">Belum ada angka berkat (4, 5, 6, 7, 9) yang terdeteksi pada susunan angka dasar Anda.</p>';
  }

  var elemNames = {'LOGAM':'Logam','AIR':'Air','API':'Api','KAYU':'Kayu','TANAH':'Tanah'};
  var elemIcons = {'LOGAM':'⚙','AIR':'💧','API':'🔥','KAYU':'🌳','TANAH':'🌍'};
  
  var balanceHtml = '';
  var displayOrder = profile.displayOrder || ['API', 'TANAH', 'LOGAM', 'AIR', 'KAYU'];
  var mainElemKey = profile.mainElemKey || 'API';
  var categoryMap = profile.categoryMap || {};
  var IDEAL_BY_POSITION = profile.IDEAL_BY_POSITION || [4, 3, 3, 3, 3];
  
  for(var di = 0; di < displayOrder.length; di++){
    var key = displayOrder[di];
    var val = profile.balance[key] || 0;
    var ideal = IDEAL_BY_POSITION[di] || 3;
    var diff = val - ideal;
    var isMain = (key === mainElemKey);
    var cat = categoryMap[di] || {label: '—', icon: ''};
    
    var statusClass = 'seimbang';
    var statusLabel = 'Seimbang';
    var diffClass = 'zero';
    var diffDisplay = '0';
    if(diff > 0){
      statusClass = 'kelebihan';
      statusLabel = 'Kelebihan';
      diffClass = 'plus';
      diffDisplay = '+' + diff;
    } else if(diff < 0){
      statusClass = 'kekurangan';
      statusLabel = 'Kekurangan';
      diffClass = 'minus';
      diffDisplay = '' + diff;
    }
    
    var posNum = di + 1;
    
    balanceHtml += '<div class="bal-col ' + (isMain ? 'bal-main' : '') + '">';
    balanceHtml += '<div class="bal-icon">' + elemIcons[key] + '</div>';
    balanceHtml += '<div class="bal-name">' + elemNames[key] + '</div>';
    balanceHtml += '<div class="bal-num">' + val + '</div>';
    balanceHtml += '<div class="bal-status ' + statusClass + '">' + statusLabel + '</div>';
    balanceHtml += '<div class="bal-ideal">Ideal: ' + ideal + '</div>';
    balanceHtml += '<div class="bal-diff ' + diffClass + '">' + diffDisplay + '</div>';
    balanceHtml += '<div class="bal-category">' + cat.icon + ' ' + cat.label + '</div>';
    balanceHtml += '<div class="bal-position">#' + posNum + '</div>';
    balanceHtml += '</div>';
  }

  var riskLabels = Object.keys(RISK_DATA);
  var riskHtml = '';
  for (var rl = 0; rl < riskLabels.length; rl++) {
    var label = riskLabels[rl];
    var list = RISK_DATA[label];
    var scope = RISK_SCOPE[label] || [1,2,3,4,5,6,7,8,9,10,11,12,13];
    
    var hitRows = [];
    for (var ri2 = 0; ri2 < profile.rows.length; ri2++) {
      var r = profile.rows[ri2];
      if (scope.indexOf(r.no) !== -1 && list.indexOf(r.code) !== -1) {
        hitRows.push(r);
      }
    }
    
    var hit = hitRows.length > 0;
    var isWealth = label.toLowerCase().indexOf('kekayaan') !== -1;
    var cls = hit ? (isWealth ? 'risk-card wealth hit' : 'risk-card hit') : 'risk-card ok';
    var status;
    if (hit) {
      var detail = '';
      for (var hr = 0; hr < hitRows.length; hr++) {
        if (hr > 0) detail += ', ';
        detail += esc(hitRows[hr].code) + ' (' + esc(hitRows[hr].label) + ')';
      }
      status = (isWealth ? '✦ ' : '⚠ ') + detail;
    } else {
      status = 'Tidak terindikasi';
    }
    riskHtml += '<div class="' + cls + '"><div class="rtitle">' + esc(label) + '</div><div class="rstatus">' + status + '</div></div>';
  }

  var rel = profile.relation || {};
  var shioName = profile.shio ? profile.shio.shio : '';
  var extraRel = '';
  if (shioName.indexOf('Babi') !== -1 || shioName.indexOf('Macan') !== -1 || 
      shioName.indexOf('Ular') !== -1 || shioName.indexOf('Monyet') !== -1) {
    extraRel = 'BERTENTANGAN/MELUKAI';
  } else if (shioName.indexOf('Kerbau') !== -1 || shioName.indexOf('Naga') !== -1 || 
             shioName.indexOf('Kambing') !== -1 || shioName.indexOf('Anjing') !== -1) {
    extraRel = 'TERJEBAK FISIK & MENTAL';
  } else {
    extraRel = '4 JODOH BESAR';
  }

  var relHtml = '<div class="rel-grid">';
  relHtml += '<div class="rel-item"><b>Tiga Serangkai Duniawi</b>' + esc(rel.serangkai || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Tiga Cabang Duniawi</b>' + esc(rel.cabang || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Bertentangan / Menyakiti</b>' + esc(rel.menyakiti || '—') + '</div>';
  relHtml += '<div class="rel-item"><b>Enam Harmoni (Jodoh)</b>' + esc(rel.harmoni || '—') + '</div>';
  relHtml += '</div>';

  var fullHtml = '';
  fullHtml += '<div class="profile-banner">';
  fullHtml += '<div><p class="name">' + esc(name || 'Tanpa Nama') + '</p>';
  fullHtml += '<p class="meta">Lahir ' + esc(dobDisplay) + '</p></div>';
  fullHtml += '<div class="shio-badge">';
  fullHtml += '<div class="animal">' + esc(profile.shio ? profile.shio.shio : '') + '</div>';
  fullHtml += '<div class="label">Elemen ' + esc(profile.shio ? profile.shio.elemen : '') + ' · ' + esc(profile.shio ? profile.shio.yy : '') + '</div>';
  fullHtml += '<div class="sub">' + esc(profile.shio ? profile.shio.trait : '') + '</div>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">Lembar Kalkulasi <span class="cn">計算表</span></div>';
  fullHtml += '<div class="section-sub">Ilustrasi bagaimana angka-angka Anda saling terhubung — dari DNA orang tua hingga Karakter Utama yang ditonjolkan di tengah.</div>';
  fullHtml += '<div class="panel diagram-panel">' + buildCalcDiagram(profile, mainChar ? mainChar.nama : '') + '</div>';

  fullHtml += summaryHtml;

  fullHtml += '<div class="section-title">Karakter Utama <span class="cn">主性格</span></div>';
  fullHtml += mainCharHtml;
  fullHtml += '<div class="section-sub">Elemen inti Anda: <strong style="color:var(--gold-soft)">' + (mainChar ? esc(mainChar.nama) : '—') + '</strong> — diturunkan dari angka ' + esc(profile.Q12) + ' pada perhitungan tanggal lahir.</div>';
  fullHtml += '<div class="grid-2">';
  fullHtml += '<div class="panel">';
  fullHtml += '<h3>Sifat Positif</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var pi = 0; pi < mainChar.positif.length; pi++){
      fullHtml += '<li>' + esc(mainChar.positif[pi]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '<h3 style="margin-top:20px;">Sifat Perlu Diwaspadai</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var ni = 0; ni < mainChar.negatif.length; ni++){
      fullHtml += '<li>' + esc(mainChar.negatif[ni]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '</div>';
  fullHtml += '<div class="panel">';
  fullHtml += '<h3>Warna Pendukung</h3>';
  fullHtml += '<div class="swatch"><b>Sesuai elemen:</b><br>' + (mainChar ? esc(mainChar.warna_sesuai) : '—') + '</div><br>';
  fullHtml += '<div class="swatch"><b>Memperkuat elemen:</b><br>' + (mainChar ? esc(mainChar.warna_pendukung) : '—') + '</div><br>';
  fullHtml += '<div class="swatch"><b>Melemahkan gangguan:</b><br>' + (mainChar ? esc(mainChar.warna_melemahkan) : '—') + '</div>';
  fullHtml += '<h3 style="margin-top:20px;">Siklus Hidup</h3>';
  fullHtml += '<ul class="trait-list">';
  if(mainChar){
    for(var si2 = 0; si2 < mainChar.siklus.length; si2++){
      fullHtml += '<li>' + esc(mainChar.siklus[si2]) + '</li>';
    }
  } else {
    fullHtml += '<li>—</li>';
  }
  fullHtml += '</ul>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">Keseimbangan 5 Elemen <span class="cn">五行平衡</span></div>';
  fullHtml += '<div class="section-sub">';
  fullHtml += 'Jumlah kemunculan setiap elemen dalam <strong>16 angka</strong>. ';
  fullHtml += 'Urutan dimulai dari <strong>elemen utama (' + (mainChar ? esc(mainChar.nama) : '—') + ')</strong>. ';
  fullHtml += 'Nilai ideal berdasarkan posisi: <strong>4,3,3,3,3</strong>. ';
  fullHtml += 'Kelebihan (+) / Kekurangan (-) ditampilkan.';
  fullHtml += '</div>';
  fullHtml += '<div class="panel"><div class="bal-grid">' + balanceHtml + '</div></div>';

  fullHtml += '<div class="section-title">Ramalan Tahun Berjalan <span class="cn">流年</span></div>';
  fullHtml += '<div class="section-sub">Berdasarkan angka tahun personal Anda saat ini (dihitung otomatis dari tanggal hari ini).</div>';
  fullHtml += '<div class="panel year-banner">';
  fullHtml += '<div class="year-num">' + esc(profile.Q11) + '</div>';
  fullHtml += '<div class="year-info">';
  fullHtml += '<div class="l1">Fokus tahun ini: <strong>' + (yearElem ? esc(yearElem.siklus[0]) : '—') + '</strong></div>';
  fullHtml += '<div class="l2">Perlu dievaluasi: ' + (yearElem ? esc(yearElem.siklus[1]) : '—') + '</div>';
  fullHtml += '<div class="l3">Tingkat keberuntungan: ' + (yearElem ? esc(yearElem.siklus[2]) : '—') + '</div>';
  fullHtml += '</div></div>';

  fullHtml += '<div class="section-title">13 Angka Kehidupan <span class="cn">生命數組</span></div>';
  fullHtml += '<div class="section-sub">Tiga digit pada setiap kartu adalah kombinasi angka dari tanggal lahir Anda; teks di bawahnya adalah makna dari kombinasi tersebut.</div>';
  fullHtml += '<div class="num-grid">' + numCards + '</div>';

  fullHtml += '<div class="section-title">Angka yang Hilang <span class="cn">缺失數</span></div>';
  fullHtml += '<div class="section-sub">Angka 1–9 yang tidak muncul pada tujuh angka dasar kelahiran Anda.</div>';
  fullHtml += '<div class="panel"><div class="missing-box">' + missingHtml + '</div></div>';

  fullHtml += '<div class="section-title">Impian Hidup Bawaan Lahir <span class="cn">天賦使命</span></div>';
  fullHtml += '<div class="panel dream-box">';
  fullHtml += '<div class="big">' + (dream ? esc(dream.title) : '—') + '</div>';
  fullHtml += '<div class="need">Dalam segitiga dibutuhkan angka: <strong>' + (dream ? esc(dream.segitiga) : '—') + '</strong></div>';
  fullHtml += '</div>';

  fullHtml += '<div class="section-title">5 Berkat Kehidupan <span class="cn">五福</span></div>';
  fullHtml += '<div class="section-sub">Berkat yang tersirat bila angka pembawanya hadir di susunan angka dasar Anda.</div>';
  fullHtml += '<div class="panel">' + blessHtml + '</div>';

  fullHtml += '<div class="section-title">Potensi &amp; Peringatan <span class="cn">潛在課題</span></div>';
  fullHtml += '<div class="section-sub">Diperiksa dari kecocokan kombinasi angka Anda terhadap pola-pola referensi sesuai area masing-masing.</div>';
  fullHtml += '<div class="risk-grid">' + riskHtml + '</div>';

  fullHtml += '<div class="section-title">Shio &amp; Relasi <span class="cn">生肖</span></div>';
  fullHtml += '<div class="section-sub">Hubungan shio kelahiran Anda dengan shio-shio lain. Status: <strong>' + extraRel + '</strong></div>';
  fullHtml += '<div class="panel">' + relHtml + '</div>';
  
  el.innerHTML = fullHtml;
  el.style.display = 'block';
  document.getElementById('printBtn').style.display = 'inline-block';
  el.scrollIntoView({behavior:'smooth', block:'start'});
}
// ============================================================
// MAIN CALCULATE BUTTON
// ============================================================
document.getElementById('calcBtn').addEventListener('click', function() {
    var name = document.getElementById('fname').value.trim();
    var day = document.getElementById('dobDay').value.trim();
    var month = document.getElementById('dobMonth').value.trim();
    var year = document.getElementById('dobYear').value.trim();
    var errBox = document.getElementById('errBox');
    errBox.style.display = 'none';
    errBox.textContent = '';
    
    if (!name) {
        errBox.textContent = 'Mohon isi nama.';
        errBox.style.display = 'block';
        return;
    }
    if (!day || !month || !year) {
        errBox.textContent = 'Mohon isi tanggal lahir lengkap (dd/mm/yyyy).';
        errBox.style.display = 'block';
        return;
    }
    
    var d = parseInt(day);
    var m = parseInt(month);
    var y = parseInt(year);
    if (isNaN(d) || isNaN(m) || isNaN(y)) {
        errBox.textContent = 'Format tanggal tidak valid.';
        errBox.style.display = 'block';
        return;
    }
    if (y < 1900 || y > 2050) {
        errBox.textContent = 'Tahun lahir harus antara 1900-2050.';
        errBox.style.display = 'block';
        return;
    }
    if (m < 1 || m > 12) {
        errBox.textContent = 'Bulan harus antara 1-12.';
        errBox.style.display = 'block';
        return;
    }
    if (d < 1 || d > 31) {
        errBox.textContent = 'Hari harus antara 1-31.';
        errBox.style.display = 'block';
        return;
    }
    
    var session = getSession();
    if (!session) {
        showModal('login');
        return;
    }
    
    var status = getLicenseStatus(session.email);
    if (!status.active) {
        showQuotaModal();
        return;
    }
    
    var updated = updateLicenseUsage(session.email);
    if (!updated) {
        alert('Gagal mengurangi kuota. Silakan coba lagi.');
        return;
    }
    
    var dateStr = y + '-' + String(m).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var todayStr = new Date().toISOString().slice(0,10);
    var profile = computeProfile(dateStr, todayStr);
    
    saveUserHistory(session.email, name, day + '/' + month + '/' + year);
    saveAdminHistory(session.email, name, day + '/' + month + '/' + year);
    
    displayResult(name, day + '/' + month + '/' + year, profile);
    updateStatusBar();
});

// ============================================================
// PRINT
// ============================================================
document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

// ============================================================
// INIT
// ============================================================
loadLocalData();
updateStatusBar();

console.log('🚀 Aplikasi siap!');
console.log('📌 Mode: LOCAL (data di localStorage)');
console.log('💡 Untuk testing:');
console.log('   - Registrasi: Masukkan email baru → isi data → OTP (lihat Console)');
console.log('   - Login: Masukkan email terdaftar → OTP (lihat Console)');
console.log('   - Token: Generate di admin.html atau via Console');
console.log('   - Riwayat: Bisa diakses meskipun kuota habis');
console.log('   - Klik "Lihat" di riwayat → hitung ulang tanpa mengurangi kuota');

console.log('✅ Aplikasi siap! Kuota akan muncul dari localStorage.');
