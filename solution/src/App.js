import harvardArt from './data/harvardArt';

import { Routes, Route, Outlet } from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtDescription from './components/ArtDescription';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records} />

      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <h2>Harvard Art Museum</h2>
                <p>
                  Look, but Don't Touch. Please select a Gallery in the
                  navigation bar.
                </p>
              </>
            }
            end
          ></Route>

          <Route
            path='/galleries/:galleryId/*'
            element={<GalleryView galleries={harvardArt.records} />}
          />

          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
