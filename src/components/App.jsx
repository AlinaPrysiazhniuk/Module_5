import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="subbreads" element={<div>Subbreads</div>} />
            <Route path="gallery" element={<div>Gallery</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
