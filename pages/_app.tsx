import '../styles/build.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NextjsProgressBar from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto">
        <NextjsProgressBar color='#53bd95' />
        <Navbar />
        <main className='pb-32'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
