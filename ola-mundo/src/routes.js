import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import PageNotFound from './routes/PageNotFound';
import Header from './components/Header';
import Footer from 'components/Footer';
import DefaultPage from 'components/DefaultPage';
import Post from 'components/Post';
import ScrollToTop from 'components/ScrollToTop';

function AppRoutes() {
  const menus = [
    {
      name: 'Inicio',
      path: '/',
    },
    {
      name: 'Sobre mim',
      path: '/about',
    },
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header menus={menus} />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
