'use client'
import DefaultLayout from '@/layouts/DefaultLayout'
import BlogContent from '@/components/Blog/BlogContent';
import { Provider } from 'react-redux';
import store from '@/store';
import { useEffect } from 'react';
import BlogComment from '@/components/Blog/BlogComment';

export default function Page({ params }) {
  // Params will content blogId is passed from Homepage after click to blog section
  // as a slug. Ex: [ slug: 13131331]
  return (
    <Provider store={store}>
      <DefaultLayout>
        <BlogContent blogID={params.slug} />
        <BlogComment />
      </DefaultLayout>
    </Provider>
  )
}
