import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './card-blog.jsx';
import LandingPage from './landing.jsx';
import Pelatihan from './pages/pelatihan/pelatihan.jsx';

import keebsImage from './assets/keebs.jpg';
import magangImage from './assets/magang-2.jpg';
import daredevilImage from './assets/matt.png';
import pelatihanImage from './assets/pelatihan-gambar.jpg';

const blogData = [
  {
    Title: "Keyboard",
    Genre: "Boys will be Boys",
    picture: keebsImage,
    link: "https://farrelekaputra.github.io/keyboard.html"
  },
  {
    Title: "Magang Akademik",
    Genre: "College life",
    picture: magangImage,
    link: "https://farrelekaputra.github.io/magang.html"
  },
  {
    Title: "Review Daredevil:Born Again",
    Genre: "Movie/series Review",
    picture: daredevilImage,
    link: "https://farrelekaputra.github.io/daredevil.html"
  },
  {
    Title: "Tibe Tiba Ngajar",
    Genre: "College life",
    picture: pelatihanImage,
    link: "/pelatihan"
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
      </Routes>
    </Router>
  );
}

export default App;