import Navbar from '../Navbar.jsx'
import Judul from '../Judul.jsx'
import Header from '../Header.jsx'
import Paragraf1 from '../Paragraf1.jsx'
import Image from '../imageProperties.jsx'
import gambar5 from '../../assets/lantip/X TJKT 2.jpg'
import gambar2 from '../../assets/lantip/lantip-2.jpg'
import gambar4 from '../../assets/lantip/lantip-4.jpg'
import gambar6 from '../../assets/lantip/penilaian.jpg'
import MainText from '../paragrafUtama.jsx'
import Ending from '../closing.jsx'
import Footer from '../footer.jsx'
import { Helmet } from 'react-helmet'

<Helmet>
  <title>Ngajar lagi</title>
  <meta property="og:title" content="Tiba-tiba Ngajar (2)" />
  <meta property="og:description" content="Cerita pengalaman PPL di sekolah mitra, dari observasi sampai ngajar di kelas 11 jurusan Komputer dan Jaringan." />
  <meta property="og:image" content="https://blogpararel.vercel.app/thumbnails/lantip-thumb.jpg" />
  <meta property="og:url" content="https://blogpararel.vercel.app/lantip" />
  <meta property="og:type" content="article" />
</Helmet>

export default function Lantip() {
  return (
    <>
      <Judul temaWeb = "Ngajar lagi"/>
      < Navbar title = "Tiba-tiba Ngajar (2)"/>

      <div className="container mt-20 w-full flex flex-col items-center self-center justify-center mx-auto gap-4 p-4">

        < Header 
          tanggal="11 November 2025"
          genre="College Life"
          judul="Tiba Tiba Ngajar (2)"/>

        <article className="content flex flex-col mx-auto w-full md:p-4 rounded-md">
          
          <Paragraf1 
            teks = "Semarang, 2025. Kegiatan PPL dimulai 'Lah kenapa PPL? di tulisan sebelumnya katanya informatika' ya, betul informatika tapi ada unsur pendidikannya. Tapi berbeda di ngajar yang sebelumnya, ini merupakan kegiatan yang wajib secara administrasi dari jurusan buat ngisi salah satu MK wajib buat syarat kelulusan."
          />
          <Image 
            gambar={gambar4}
            alt="staff penyelenggara"
            caption="Salah satu dokumentasi bareng para murid anjayy" 
          />
          <MainText 
            teks={[
              "Singkat cerita tentang kegiatan ini, karena kegiatan ini bisa dibilang wajib dan resmi dari pihak kampus jadi rentang waktu nya bisa tergolong lama. Mulai dari pendaftaran sampai kegiatan akhir makan waktu sekitar 3.5 bulan. Pada kegiatan pertama dilakukan ujian ngajar terakhir di kampus, dilanjutin sama kegiatan pembekalan yang masih di area kampus. Oke setelah sekitar 2 minggu kegiatan administrasi di kampus, akhirnya langsung diadain penerjunan di sekolah mitra.",
              "Lebih lanjut tentang kegiatan di sekolah, 2 minggu pertama kita cukup ngang-ngong observasi sambil merhatiin murid mondar-mandir, jajan di kantin, ada beberapa juga yang bolos jam pelajaran. Singkat aja mari langsung time skip di week-3 pelaksanaan PPL, agak beda sih dimana yang aktivitas ngajar sebelumnya di SMA sama SMP dan cuma beberapa jam doang, di PPL ini pembelajaran dilaksanakan 11jp (woilah) di salah satu jurusan yang ada di sekolah tersebut yaitu Komputer dan Jaringan."
            ]}
          />
          <Image 
            gambar={gambar5}
            alt="staff penyelenggara"
            caption="Keadaan di kelas" 
          />
          <MainText 
            teks={[
              "Langsung aja bahas gimana experience di week-4 sampai akhir, disini yang satu prodi pendidikan informatika diarahin buat handle semua kelas jurusan komputer dan jurusan (yep kelas 10-12) dam setiap mahasiswa diserahin satu kelas utama buat di handle, dan kebetulan gw dapet di kelas 11. Jujur waktu pertama masuk canggung sih, namanya juga pertama kali dan liat satu kelas orang asing semua. Well jelas lama-lama udah mulai kebiasa sama karakteristik setiap siswa disana kegiatan pengajaran pun mulai beres dan berusaha menyatukan frekuensi bersama para siswa di kelas."
            ]}
          />
          <Image 
            gambar={gambar6}
            alt="dokumentasi kegiatan"
            caption="Belajar sama pak Farrel dapet berapa? 100 geez"
          />
          <Ending 
            penutup="Oke, jadi kalo kelas yang gw isi setiap siswa diwajibkan buat bikin laporan praktik, trus beberapa siswa ditunjuk buat bacain praktek nya didepan kelas. Trus ending kegiatan ini gimana? oke dari preferensi pribadi sisi akademik dulu yah, jelas kegiatan ini bakal ngasih pembekalan kepada setiap mahasiswa gimana caranya biar bisa ngelola kelas dan ngadepin setiap karakter siswa. Tapi diluar konteks akademis, kegiatan ini lumayan asik buat cari relas, apalagi kalo ketemu temen-temen angkatan PPL atau siswa yang punya hobi yang sama dan jadi se-frekuensi. Udah mungkin gitu dulu aja di sesi kali ini, next mungkin bakal bikin sebagai mahasiswa akhir kali"
          />

        </article>

        <Footer />
        
      </div>
    </>
  )
}