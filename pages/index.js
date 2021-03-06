import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel suscipit
          tempora explicabo illo assumenda libero, deserunt iste. Consectetur,
          ullam? Numquam neque molestiae quisquam iure velit blanditiis atque
          veritatis, eaque laudantium.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          corrupti incidunt quaerat et tempore magni molestias minima quas,
          consectetur amet praesentium alias, sit officia dolor perferendis
          voluptates repellat cum maxime!
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
