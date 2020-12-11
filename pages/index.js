import Head from 'next/head'
import Layout from '../components/layout';
import getBusinesses from '../lib/airtable';

export default function Home({ businesses }) {
  return (
    <Layout home>
      <Head>
        <title>Grande Prairie Gift Cards - Support Local Business</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
      </Head>

      <ul>
        {businesses.map((business, index) => (
          <li key={index} className="flex pb-12 flex-col md:flex-row md:justify-between">
          <div>
            <h3 className="mb-2 font-heading text-2xl md:text-4xl">{business.fields['Business Name']}</h3>
            <div className="text-gray-400">{business.fields['Type']}</div>
          </div>
          <div className="flex-shrink-0 pt-4 md:pt-0 md:ml-4">
            <a href={business.fields['Purchase Link']} target="_blank" className="inline-flex uppercase font-bold bg-white border px-6 py-3 rounded-full hover:bg-gpred hover:text-white hover:border-gpred transition">
              <div className="h-5 w-5 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </div>
              Buy Gift Cards
            </a>
          </div>
        </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const businesses = await getBusinesses();

  return {
    props: {
      businesses,
    },
    revalidate: 1,
  }
}
