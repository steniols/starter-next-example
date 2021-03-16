import React from 'react';

import Head from 'next/head';

import ImageExample from '../assets/image.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Starter Next</title>
      </Head>

      <main>
        <ImageExample />
        <h1>
          Página inicial...
        </h1>
      </main>
    </div>
  );
}
