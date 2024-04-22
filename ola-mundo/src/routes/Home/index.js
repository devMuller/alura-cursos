import styles from './Home.module.css';

import PostCard from 'components/PostCard';
import posts from 'assets/json/posts.json';

const Home = () => {
  return (
    <section className={styles.postsContainer}>
      <ul className={styles.posts}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Home;
