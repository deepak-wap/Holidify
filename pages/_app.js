import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />   
    </>
  )
}

export default MyApp