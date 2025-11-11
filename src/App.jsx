import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './card-blog.jsx';
import LandingPage from './landing.jsx';
import Pelatihan from './pages/pelatihan/pelatihan.jsx';
import Keyboard from './pages/keyboard/keyboard.jsx';
import Daredevil from './pages/daredevil/daredevil.jsx';
import Magang from './pages/magang/magang.jsx';
import Lantip from './pages/lantip/lantip.jsx';

import keebsImage from './assets/keebs.jpg';
import magangImage from './assets/magang-2.jpg';
import daredevilImage from './assets/matt.png';
import pelatihanImage from './assets/pelatihan-gambar.jpg';
import lantipImage from './assets/lantip/lantip-2.jpg';

const blogData = [
  {
    Title: "Keyboard",
    Genre: "Boys will be Boys",
    picture: keebsImage,
    link: "/keyboard"
  },
  {
    Title: "Magang Akademik",
    Genre: "College life",
    picture: magangImage,
    link: "/magang"
  },
  {
    Title: "Review Daredevil:Born Again",
    Genre: "Movie/series Review",
    picture: daredevilImage,
    link: "/daredevil"
  },
  {
    Title: "Tibe Tiba Ngajar",
    Genre: "College life",
    picture: pelatihanImage,
    link: "/pelatihan"
  },
  {
    Title: "Tibe Tiba Ngajar (2)",
    Genre: "College life",
    picture: lantipImage,
    link: "/ngajar-lagi"
  }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <div className="container w-11/12 flex flex-col justify-start pt-12 mx-auto gap-8 mb-8">
                <div className="headertext flex flex-col">
                  <h1 className="text-gray-800 text-2xl font-semibold flex">Mini Blog</h1>
                  <p className="caption text-justify">
                    
                  </p>
                </div>
                <Card Blog={blogData} />
              </div>
            </>
          }
        />
        <Route path="/pelatihan" element={<Pelatihan />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="/daredevil" element={<Daredevil />} />
        <Route path="/magang" element={<Magang />} />
        <Route path="/ngajar-lagi" element={<Lantip />} />
      </Routes>
    </Router>
  );
}

export default App;