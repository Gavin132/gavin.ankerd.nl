import Honk from 'next/font/google'
const honk = Honk({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={honk.className}>
      <Component {...pageProps} />
    </main>
  )
}