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
    IS_LOCAL: true,
    GITHUB_RAW_URL: 'https://raw.githubusercontent.com/username/repo/main/data/',
    GITHUB_API_URL: 'https://api.github.com/repos/username/repo/contents/data/',
    GITHUB_TOKEN: '',
    SENDGRID_API_KEY: '',
    ADMIN_PHONE: '6281944142311',  // ← GANTI DENGAN NOMOR ADMIN ANDA
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