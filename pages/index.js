import Head from 'next/head'

import { CarouselDemo } from '../components/CarouselDemo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>When screen turns blue (2nd item, after 2s) this will jump</p>
      <CarouselDemo
        items={[
          {
            color: 'pink',
          },
          {
            color: 'blue',
          },
        ]}
      />
    </>
  )
}
