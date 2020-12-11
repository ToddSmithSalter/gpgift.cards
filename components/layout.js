import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, home }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@700&family=Montserrat:wght@900&display=swap" rel="stylesheet"></link>
                <meta name="description" content="Support local Grande Prairie businesses by purchasing gift cards" />
                <meta name="og:title" content="Support Local - Grande Prairie Gift Cards" />
                <meta name="og:description" content="Support local Grande Prairie businesses by purchasing gift cards" />
                <meta name="og:image" content="/opengraph.png" />
                <meta name="twitter:title" content="Support Local - Grande Prairie Gift Cards" />
                <meta name="twitter:description" content="Support local Grande Prairie businesses by purchasing gift cards" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@ToddSmithSalter" />
                <meta name="twitter:image" content="/twitter.png" />
            </Head>
            <header className="bg-gradient-to-r from-gpred to-gpred-light">
            <div className="max-w-5xl mx-auto px-4 -mb-36 pb-36">
            <div className="pt-8 mb-12 flex flex-col items-center md:items-start md:flex-row md:justify-between">
                <div className="mb-12">
                <a href="/" className="inline-flex flex-col items-center">
                    <div className="w-12 h-8 rounded-lg bg-white flex justify-center items-center mb-2 text-gpred">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className="text-white uppercase tracking-widest mb-2">Grande Prairie</div>
                    <div className="text-white font-cursive text-5xl">Gift Cards</div>
                </a>
                </div>
                <div>
                <Link href={home ? '/add-business' : '/'}>
                    <a className="inline-block text-gpred uppercase font-bold bg-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">{home ?'Add A Business' : 'View All Businesses'}</a>
                </Link>
                </div>
            </div>
            {home ? (
                <>
                    <div className="max-w-4xl pb-12 md:pb-24">
                        <h2 className="text-3xl text-center md:text-left md:text-6xl text-white font-heading md:leading-normal mb-12">Support local business in Grande Prairie, Alberta</h2>
                        <h3 className="text-xl text-white leading-normal">Help our entrepreneurial neighbours by purchasing gift cards from local businesses impacted by current events.</h3>
                    </div>
                </>
            ) : (
                <>
                </>
            )}

            </div>
        </header>

        <main>
                        <section className="max-w-5xl mx-auto px-4 md:px-12 pt-8 bg-white shadow-lg text-gray-700">
                            {children}
                        </section>
                    </main>

        <footer className="text-gray-500 text-center px-4 py-8">
            Built with {' '}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 -mt-1 inline-block">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>{' '}
            by <a href="https://twitter.com/ToddSmithSalter" title="Todd Smith-Salter on Twitter">@<span className="border-gpred border-b-2">ToddSmithSalter</span></a>
        </footer>

    </div>
    )
}
