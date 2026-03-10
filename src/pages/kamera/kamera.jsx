import Navbar from '../Navbar.jsx'
import Judul from '../Judul.jsx'
import Header from '../Header.jsx'
import Paragraf1 from '../Paragraf1.jsx'
import MainText from '../paragrafUtama.jsx'
import Ending from '../closing.jsx'
import Footer from '../footer.jsx'
import { Helmet } from 'react-helmet'
import gambar1 from '../../assets/kamera/konser.jpg';
import gambar2 from '../../assets/kamera/cover.png';
import gambar3 from '../../assets/kamera/IMG_1257.JPG';
import Image from '../imageProperties.jsx';

export default function Kamera() {
  return (
    <>
        <Helmet>
            <title>Tiba-Tiba Motret</title>
            <meta property="og:title" content="Kesibukan Baru" />
            <meta property="og:description" content="Udah masuk semester akhir bukannya skripsian." />
            <meta property="og:image" content="https://blogpararel.vercel.app/thumbnails/cover.png" />
            <meta property="og:url" content="https://blogpararel.vercel.app/kamera" />
            <meta property="og:type" content="article" />
        </Helmet>
      <Judul temaWeb = "Tahun Baru Hobi Baru?"/>
      < Navbar title = "Tiba-tiba Motret"/>

      <div className="container mt-20 w-full flex flex-col items-center self-center justify-center mx-auto gap-4 p-4">

        < Header 
          tanggal="7 Maret 2026"
          genre="Boys Will be Boys"
          judul="Tiba Tiba Motret"/>

        <article className="content flex flex-col mx-auto w-full md:p-4 rounded-md">
          
          <Paragraf1 
            teks = "Sebenernya udah lama juga pengen sama barang ini dan masuk ke hobi ini. Ini dimulai dari waktu SMP waktu itu ada temen yang pake kamera DSLR (canon 1500d kalo ga salah) dan sering juga dia sharing tentang hobi ini. Singkat cerita dia ngajak buat hunting foto bareng di daerah lawang sewu semarang. (yap dia pake dslr itu dibandingkan user oppo a37 ini). Mulai tuh dia nunjukkin beberapa fitur yang masih belum ada di hape entry level pada tahun itu, misal kaya long expossure. Terus beberapa waktu setelah itu dia flexing lagi tuh soal lensa baru, dan disini sebagai orang awam jelas mikir ngapain pake lensa banyak-banyak orang kebutuhan ya paling gitu-gitu aja."
          />
          <Image 
            gambar={gambar2}
            alt="staff penyelenggara"
            caption="Biar gambarnya ada captionnya aja" 
          />
          <MainText 
            teks={[
              "Singkat cerita beberapa tahun berlalu (anggep aja hampir 8 tahun) waktu melakukan kegiatan produktif mahasiswa (yap, scroll facebook) ada satu postingan orang yang jual salah satu kamera dslr lawas dengan harga yang lumayan miring, ya walaupun ada beberapa cacat di fisik nya. tiba-tiba aja kepikiran kalo bukan saya siapa lagi, kalo bukan sekarang kapan lagi. Jadi dibuka ulang tuh marketplace yang tadi. Pada awal nya orang itu buka harga sekitar 1.4jt (termasuk lensa), namanya juga orang jualan udah pasti sebagai pembeli juga nawar dengan harga yang manusiawi (nyoba penawaran di 700rb), dan kok tiba-tiba di ghosting nih beberapa hari. Lalu pada hari yang cerah saat matahari bersinar masuk satu inbox di facebook, 'mas 1jt cod nanti sore aja cek barang sekalian'. Hasrat tubuh ini tergerak dengan penuh semangat 'oke, gas mas'.",
            ]}
          />
          <Image 
            gambar={gambar1}
            alt="staff penyelenggara"
            caption="Pertama kali event foto pake kamera" 
          />
          <MainText 
            teks={[
              "Dan kemudian setelah terjadi diskusi yang sehat antara penjual dengan pembeli, disepakatilah akad pembelian. Berhasil dah tuh bawa pulang unit DSLR lawas canon 1200d, lensa kit. kondisi fisik 90%, include sd card 64 gb minat bisa-- dan mulai dari sini hobi foto mulai muncul. Waktu pertama kali mungkin kalo orang liat kaya aneh sih di jaman sekarang orang bisa foto/abadiin momen cukup pake hape doang, sedangkan anomali satu ini bawa kamera badag dari 12 tahun lalu (kamera ini keluaran 2014 btw). Lalu setelah bawa kamera ini ke event-event mulai udah paham dikit-dikit tentang kamera dan mulai bangga dengan kamera tua ini, jelas dong udah mau tamatin hobi ini udah proper juga kamera nya buat dipake-- dan kebeli juga lensa baru (ya, ini orang yang tadi ngirain upgrade lensa itu hal yang buang-buang duit). Dan dapet dah tu lensa dengan negosiasi yang telah disepakati bersama, disini agak beda ya sama lensa awal yang bisa zoom in zoom out, lensa yang baru didapet ini zoom nya udah fix tapi better kalo soal warna dan foto low light.",
              "Terus, setelah beberapa waktu mulai nikmatin kamera ini dan pede sama hasil sendiri mulai bikin deh akun yang isinya jepretan random si katuba (kamera tua bangka biar gampang nyebutnya) ini. Promosi dikit boleh kali, kalian bisa ngecek sendiri atau klik akun disamping namanya <a href='https://www.instagram.com/paralell25/' target='_blank' rel='noopener noreferrer' className='text-blue-500 underline font-medium'>  @paralell25 </a> disitu udah ada beberapa jepretan random. Gak lama setelah itu, diundang sama temen yang udah selesai sidang skripsi (selamat yah), dan inisiatif bawa kamera buat dokumentasiin momen. Sedikit banyak kejadian, trus dibilang deh hasil foto-foto ini udah lumayan proper. Jadiyah keliatannya mulai pede buat abadiin momen orang lain pake katuba ini (kalian juga yang lagi baca misal ada undangan sidang/wisuda bisa kali kontak hehe)."
            ]}
          />
          <Image 
            gambar={gambar3}
            alt="dokumentasi kegiatan"
            caption="Contoh hasil dokumentasi (udah ijin buat upload)"
          />
          <Ending 
            penutup="Yah, sebenernya udah puas banget sih sama hasil katuba ini. Tapi namanya manusia yah, mungkin sangat amat manusiawi kalo masih punya wishlist lain di bidang ini. Jadi mungkin mulai tertarik sama sistem kamera mirrorless, denger-denger juga viewfinder nya lebih oke daripada sistem viewfinder yang di DSLR, kalo masih di canon ya mungkin tertarik sama canon R50, atau ga sekalian ke sony A6400 (ngarep dulu boleh kali ya, hehe). oke mungkin segini dulu aja tulisan kali ini, mau minta pendapat kalian di komentar tapi belum dibikin fitur komentanya juga hadeh, bisa reply dari mana aja kalian bisa dapet tulisan ini deh, sekian terima kasih."
          />

        </article>

        <Footer />
        
      </div>
    </>
  )
}