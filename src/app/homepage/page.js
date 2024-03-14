// pages/index.js
import Link from 'next/link';

import DefaultLayout from '../../layouts/DefaultLayout';
import Post from '../../components/Post';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Post />
      <Link href="/about">Go to About Page</Link>
    </DefaultLayout>
  );
};

export default HomePage;
