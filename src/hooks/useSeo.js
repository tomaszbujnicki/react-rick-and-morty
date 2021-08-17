import { useEffect } from 'react';

const defaultDescription = 'The Rick and Morty React App.';
const defaultTitle = 'Rick and Morty';

const useSeo = ({ title, metaDescription = defaultDescription }) => {
  console.log('in: ' + title);
  useEffect(() => {
    console.log('effect: ' + title);
    document.title = title ? title + ' | ' + defaultTitle : defaultTitle;
  }, [title]);

  useEffect(() => {
    console.log('effect: ' + metaDescription);
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', metaDescription);
  }, [metaDescription]);
};

export default useSeo;
