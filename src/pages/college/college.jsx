import Navbar from '../Navbar.jsx'
import Judul from '../Judul.jsx'
import Header from '../Header.jsx'
import Paragraf1 from '../Paragraf1.jsx'
import Image from '../imageProperties.jsx'
import gambar1 from '../../assets/college/College-1.jpeg'
import gambar2 from '../../assets/daredevil/2.png'
import gambar3 from '../../assets/daredevil/3.png'
import gambar4 from '../../assets/daredevil/4.png'
import gambar5 from '../../assets/daredevil/5.png'
import gambar6 from '../../assets/daredevil/6.png'
import MainText from '../paragrafUtama.jsx'
import Ending from '../closing.jsx'
import Footer from '../footer.jsx'
import React, { useEffect } from 'react';

export default function College() {
  return (
    <>
      <Judul temaWeb = "Stage of College"/>
      < Navbar title = "College"/>

      <div className="container mt-20 w-full flex flex-col items-center self-center justify-center mx-auto gap-4 p-4">

        < Header 
          tanggal={new Date(__LAST_COMMIT_DATE__ + 'T00:00:00')
            .toLocaleDateString('id-ID',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
          }
          genre="College Life"
          judul="Six Arc of College"/>

        <article className="content flex flex-col mx-auto w-full md:p-4 rounded-md">
          
          <Paragraf1 
            teks = {[`Yap, buat kalian yang notice dari judul mungkin udah tau ini kalimat referensi dari 'Six Stage of Grief' kalo dari kalimat itu berarti tahap penerimaan diri. Dari penerimaan diri itu kan yang paling menonjol adalah aspek Acceptance jadi.. buat kalian yang masih denial salah jurusan coba mulai nerima dan coba mendalami aja, inget kalo kalian udah kecebur, berusaha aja buat berenang (Anzar D., 2019). Tapi di tulisan ini berisi tahapan kuliah berdasarkan perspektif ku dari tiap semester ke semester berikutnya, dan bakal ada review sekaligus cons dan pros (plus minus nya). Sedikit FYI, sebelum masuk kuliah background pendidikanku dari sekolah kejuruan (SMK) jadi kurang begitu mempertimbangkan jurusan lain diluar yang berbau komputer (bro tidak Oversupply jurusan IT) wkwkwkwk. Anyway, buat kalian yang lagi baca tulisan ini dan lagi atau mau masuk kuliah semoga bisa relate.`]}
          />
          <Image 
            gambar={gambar1}
            alt="gambar1"
            caption="Penutupan Ospek Jurusan (satu-satu nya ospek yang kebagian offline)" 
          />

          {/* Ospek */}
          <p className="font-bold w-full md:w-3/4 mx-auto flex-wrap md:ps-12 text-justify text-gray-700 text-xl gap-y-2">Arc 1, Ospek</p>
          <MainText 
            teks={[
              `Sebelum benar-benar mulai kuliah, bisa dibilang aku masih enjoy waktu setelah lulus SMK (nganggur). Gak terlalu mikir, apalagi kepikiran tugas-tugas yang bakal datang. Ternyata pas ospek dimulai, welcome to reality! Penugasan mulai berdatangan dan mau nggak mau harus dikerjakan (ini stage denial) Ospek sendiri, kelihatannya makin ke sini makin ada-ada aja. Tapi, di samping tugasnya yang ribet dan rumit, sebenarnya ada euforia tersendiri yang bakal keinget sampe perkuliahan (atau sampe lulus bahkan). Ospekku waktu itu tahun 2022, masih dalam masa pemulihan pandemi COVID-19, jadi yah pelaksanaannya masih hybrid. Walaupun aku tinggal satu kota dengan kampusku sendiri, sayangnya aku malah kebagian plotting online. Jadi, cuma bisa mantengin Zoom seharian (seharian btw). Ga kebayang dah gimana yang dari jam 4 udah harus udah di kampus sampe sore.`
            ]}
          />
          <Image 
            gambar={gambar1}
            alt="gambar1"
            caption="Penutupan Ospek Jurusan (satu-satu nya ospek yang kebagian offline)" 
          />
          <MainText 
            teks={[
              `Oiya, di kampusku sendiri ospek diadakan sebanyak tiga kali, mulai dari tingkat universitas, fakultas, sampai jurusan. Dari ketiganya, penugasan ospek jurusan mungkin jadi yang paling susah dihindari. Gimana nggak? Tiap kuliah aja pasti ketemu orang-orang yang sama (im cooked guys ngl). Anyways, dari sekian banyak rangkaian kegiatan dan penugasan tersebut, bagian yang paling berkesan justru penutupan ospeknya. Terutama di tingkat fakultas, ada agenda malam inagurasi yang sampai sekarang masih rutin diadakan. Kegiatannya kurang lebih seperti mini concert: vibing, sing along, dan tentunya suasana yang beda banget dari rangkaian ospek sebelumnya. It was so peak, man. (Special thanks to kating yang jadi panitia, you guys cooked well.)`
            ]}
          />

          {/* MABA */}
          <p className="font-bold w-full md:w-3/4 mx-auto flex-wrap md:ps-12 text-justify text-gray-700 text-xl gap-y-2">Arc 2, MABA</p>
          <MainText 
            teks={[
              `Jadi anggep aja kita timeskip setelah ospek di pertengahan Agustus 2022, dan langsung mulai kuliah perdana. Waktu awal kuliah, tepatnya di hari pertama aku dapet kelas siang di jam 1 (ya, sangat mendukung anti-morning person) dan momen itu beneran kaya battleground yang mana woilah kalian ga kenal orang di sekitar kalian saat kuliah perdana itu. Kuliah perdana belum banyak ngoding dsb, cuma.. masih didominasi praktikum elektrikal (agak panjang kalo dijelasin kenapa jurusan informatika ada elektro nya, bakal dijelasin di kesempatan lain mungkin(?) kalo ada kesempatan). Nah ini juga jadi sedikit hambatan sih, dimana walaupun berkelompok tapi bahan praktikum nya perlu nnyari sendiri dan ga disediain kampus. Setelah perjalanan panjang nyari bahan praktek, akhirnya ketemu breadboard, lampu, dsb. Setelah satu kalimat yang berisi berita baik, akhirnya kabar buruk muncul, 2 biji lampu yang dipake rangkaian praktikum meledak waktu latihan, what the--. Singkat cerita ya itu salahku sendiri sih, salah baca resistor yang harusnya 10000 aku pasangin 100 (beda 0 dua digit doang ga ngaruh kan ya harusnya?), dan yah mau ga mau harus nyari lampu 2 biji lagi. Thank god, praktikum elektro ini cuma satu semester doang, and here's it ngoding 24/7 (ofc chatgpt would be my mate).`
            ]}
          />
          <Image 
            gambar={gambar4}
            alt="gambar4"
            caption="Tukang Balas Dendam"
          />
          <MainText 
            teks={[
              `Ya ini mungkin harusnya lebih dimasukin ke anti hero sih dibandingkan vilain, seorang mantan militer yang memiliki <i>PTSD (Pasca Traumatic Stress Disorder)</i> yang banting setir jadi Vigilante buat bales dendam masa lalu nya. Nah yang bedanya disini Frank jelas ngga segan-segan buat menghilangkan nyawa korbannya korbannya. Dia sempet sejalan sama Matt, tapi ada konflik <i>moralitas</i> antara mereka. Oiya karakter ini ada series sendiri, yaitu the Punisher yang di rilis pada 2017-2019 sebanyak 2 season.`
            ]}
          />
          {/* dex */}
          <p className="font-semibold w-full md:w-3/4 mx-auto flex-wrap text-justify text-gray-700 text-xl gap-y-2">3. Benjamin Poindexter</p>
          <Image 
            gambar={gambar5}
            alt="gambar5"
            caption="Teori Kemunculan Poindexter"
          />
          <MainText 
            teks={[
              `Salah satu anggota polisi <i>'bersih'</i> tapi punya masalah mental, di Season ke-3 karakter ini sempet dimanfaatin sama Kingpin buat singkirin si Daredevil. Yang mengejutkan di awal season 4 karakter ini datang bawa sedikit kejutan buat para penonton. Karakter yang unik juga sih bisa lempar apa aja buat dijadiin senjata, pernah ada suatu scene waktu dia lempar pake peralatan kantor dan ga ada yang meleset. Dan ada sedikit perbedaan desain karakter antara di komik dengan <i>live action</i>`
            ]}
          />
          {/* Muse */}
          <p className="font-semibold w-full md:w-3/4 mx-auto flex-wrap text-justify text-gray-700 text-xl gap-y-2">4. 'Muse'</p>
          <Image 
            gambar={gambar6}
            alt="gambar6"
            caption={"Kemunculan Musk di <i>Teaser Series</i>"}
          />
          <MainText 
            teks={[
              ` Man.. walaupun masih tersisa 2 episode lagi dan setiap episode susah ditebak jalan cerita nya, tapi kemungkinan ini main vilain dari season ke-4 daredevil sih. Background karakter ini masih belum banyak ke reveal, tapi sejauh ini dia adalah seorang seniman jalanan yang selalu pake topeng. Tapi ada yang aneh dari seniman jalanan satu ini, dia juga seorang serial killer dan dia melukis pake <i>'cairan merah'</i> yang dipaksa keluar dari tubuh korbannya (you know lah ya). Nah semoga di episode mendatang bakal segera di reveal sih soal karakter 'misterius' satu ini.`
            ]}
          />
          <Ending 
            penutup="Yah dan cukup yapping untuk kali ini, gimana? udah mulai penasaran juga?? Kataku sih gass nonton, oiya soal alur nonton series daredevil ini gini jadi kalian mulai dari Daredevil season 1 -> Daredevil season 2 -> the Defender -> Daredevil season 3 -> Daredevil : Born Again, soal tempat nontonnya bisa kalian tonton di Disney hotstar, yang dari netflix udah abis lisensi soalnya. Oiya lupa ku sampein sebelumnya, series ini rating 18+ karena ada beberapa adegan kekerasan yang diperlihatkan dengan jelas."
          />

        </article>

        <Footer />
        
      </div>
    </>
  )
}