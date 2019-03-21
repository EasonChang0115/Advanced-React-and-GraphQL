import Head from 'next/head';
import item from '../pages/item';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.png" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Lit Blog</title>
    <meta name="description" content="Something that is fucking amazing in any sense"/>
  </Head>
);

export default Meta;