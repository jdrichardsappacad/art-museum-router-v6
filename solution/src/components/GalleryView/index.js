import { useParams, Navigate, Routes, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';
import ArtDescription from '../ArtDescription';
import './GalleryView.css';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const gallery = galleries.find(gallery => gallery.id === Number(galleryId));

  if (!gallery) return <Navigate to='/' />;

  return (
    <>
      <h2>{gallery.name}</h2>

      <Routes>
        <Route
          path='*'
          element={
            <div className='art-nav'>
              {gallery.objects.map(art => (
                <ArtImageTile art={art} key={art.id} />
              ))}
            </div>
          }
        />
        <Route
          path='art/:artId'
          element={<ArtDescription gallery={gallery} />}
        />
      </Routes>
    </>
  );
}

export default GalleryView;
