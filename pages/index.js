import Head from 'next/head';
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../lib/query';
import Product from '../components/Products';
import { Gallery } from '../styles/Gallery';

export default function Home() {
  // fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  // Check for data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>Luxury Ecommerce Site</title>
        <meta name="description" content="Luxury Ecommerce Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Gallery>
          {products.map((product) => (
            <Product product={product} key={product.attributes.slug} />
          ))}
        </Gallery>
      </main>
    </div>
  );
}
