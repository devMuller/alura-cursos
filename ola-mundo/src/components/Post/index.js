import './Post.css';
import styles from './Post.module.css';

import { useParams } from 'react-router-dom';
import posts from 'assets/json/posts.json';

import ReactMarkdown from 'react-markdown';

import PostModelo from 'components/PostModelo';
import PageNotFound from 'routes/PageNotFound';
import DefaultPage from 'components/DefaultPage';
import PostCard from 'components/PostCard';
import ScrollToTop from 'components/ScrollToTop';

export default function Post() {
  const param = useParams();

  const post = posts.find((post) => post.id === Number(param.id));

  if (!post) {
    return <PageNotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(param.id))
    .sort((a, b) => a.id - a.id)
    .slice(0, 4);

  return (
    <DefaultPage>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que voce pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post, idx) => (
            <li key={idx}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostModelo>
    </DefaultPage>
  );
}
