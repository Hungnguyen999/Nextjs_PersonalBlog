// pages/index.js
import Link from 'next/link';

import DefaultLayout from '../../layouts/DefaultLayout';
import Post from '../../components/Post';
import store from '@/store';
import { Provider } from 'react-redux';

const HomePage = () => {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Post />
      </DefaultLayout>
    </Provider>
  );
};

export default HomePage;
