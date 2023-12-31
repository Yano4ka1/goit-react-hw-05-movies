import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};