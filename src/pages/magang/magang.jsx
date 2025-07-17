import Navbar from '../Navbar.jsx'
import Judulweb from '../Judul.jsx'
import Header from '../Header.jsx'
import Paragraf1 from '../Paragraf1.jsx'
import Image from '../imageProperties.jsx'
import gambar1 from '../../assets/magang/1.jpg'
import gambar3 from '../../assets/magang/3.jpg'
import MainText from '../paragrafUtama.jsx'
import Ending from '../closing.jsx'
import Footer from '../footer.jsx'
import React, { useEffect } from 'react';

export default function Magang() {
  return (
    <>
      <Judulweb temaWeb="Magang" />
      <Navbar title="Magang Akademik" />

      <div className="container mt-20 w-full flex flex-col items-center self-center justify-center mx-auto gap-4 p-4">
        <Header 
          tanggal="30 Maret 2025"
          genre="College Life"
          judul="Magang Akademik"
        />

        <article className="content flex flex-col mx-auto w-full md:p-4 rounded-md">
          <Paragraf1 
            teks={`Oke, bagi teman-teman dari sekolah kejuruan atau yang sekarang sedang dalam program perkuliahan <i>(baik itu sarjana atau diploma)</i>, pasti nggak asing dengan istilah magang kan? Nah, magang ini biasanya di tiap instansi atau sekolah berbeda cara penyebutannya ada yang nyebut Prakerin <i>(Praktik Kerja Industri)</i>, PKL <i>(Praktik Kerja Lapangan)</i>, atau PI <i>(Praktik Industri)</i> tapi disini kita sepakati buat nyebut pake istilah <a class="font-medium">'Magang'</a> oke? Lanjut. <br>Selain buat nambah skill serta pengalaman real tentang dunia industri, magang ini menjadi kebutuhan akademis, pada beberapa sekolah atau kampus mungkin menjadikan magang sebagai syarat untuk kelulusan. Tapi, kalau kampus kalian punya program MBKM dan memungkinkan konversi atau rekognisi <i>(Misalkan sebagai contoh ada <a class="font-medium">Universitas Negeri Semarang</a>)</i>, magang bisa diganti dengan aktivitas lain. Di beberapa kampus dan sekolah, magang malah jadi syarat kelulusan, jadi harus dijalani biar bisa lulus dengan lancar.<br>Sebagai catatan aku dan teman-temanku magang di salah satu perusahaan berbau IT dan tempat produksi baik itu berupa <i>software</i> dan <i>hardware</i> di kota Solo, Jawa Tengah.`}
          />
          
          <Image 
            gambar={gambar1}
            alt="gambar1"
            caption="Dokumentasi bareng di tempat magang" 
          />
          
          <MainText 
            teks={[
              `Disini aku sebagai mahasiswa yang sedang menempuh semester 6 juga mengalami hal yang sama, aku juga melaksanakan kegiatan magang selama 6 bulan. <i>"Lah lama banget kok sampe 6 bulan?" </i>oke jadi disini aku memutuskan buat magang 6 bulan untuk melakukan rekognisi mata kuliah sejumlah 20sks. Selain itu juga dengan kegiatan magang ini aku dan beberapa teman-teman dapat melakukan rekognisi kegiatan KKN (<i>Kuliah Kerja Nyata</i>). Oiya, sebelumnya dalam kegiatan magang ini dilakukan oleh satu kelompok ya, dengan jumlah personil mahasiswa yang berbeda-beda, sebagai contoh pada kelompokku terdiri dari 4 mahasiswa dari program studi yang sama, yaitu <a class="font-medium">Pendidikan Teknik Informatika dan Komputer</a>.`,
              `Karena program studiku masih berkaitan dengan informatika, kegiatan magangku juga nggak jauh-jauh dari <i>IT</i> dan teknologi. Salah satu jobdesk utamaku di tempat magang adalah <a class="font-medium">mengembangkan website</a>. Disini bekerja bareng temanku yang fokus di bagian sistem <i>(lebih dikenal sebagai <a class="font-medium">back-end developer</a>)</i>, sementara aku bertanggung jawab penuh pada tampilan website <i><a class="font-medium">(front-end developer)</a></i>.Kami sepakat menggunakan <a class="font-medium">Laravel</a> sebagai teknologi utama karena framework ini memudahkan integrasi antara <i>front-end</i> dan <i>back-end</i>. Proses pengembangan website ini memakan waktu sekitar 1,5 bulan. Lumayan lama, ya? Emang! Soalnya, di awal proyek, kami lebih dulu merancang tampilan <i><a class="font-medium">(user interface)</a></i> yang baik sesuai dengan prinsip pengalaman pengguna <i><a class="font-medium">(user experience)</a></i>. Kami mempertimbangkan keterbacaan font, susunan layout yang nyaman, hingga pemilihan warna yang tepat supaya hasilnya maksimal.`
            ]}
          />
          
          <Image 
            gambar={gambar3}
            alt="gambar3"
            caption="Diskusi bahas project magang (teks hanya properti)"
          />
          
          <Ending 
            penutup={`Dan yap, mungkin sekian dulu untuk blog magang ku, semoga bisa ngurangin rasa gabut kalian setelah baca blog ini <i>(walaupun keliatannya jelas engga)</i>.Dan semoga bisa ngasih pandangan buat kalian yang masih bingung terkait kegiatan magang, ntah itu dari sisi pengalaman, atau dari sisi tips dan triknya. Oke cukup, <i>see ya!</i>`}
          />
        </article>

        <Footer />
      </div>
    </>
  );
}