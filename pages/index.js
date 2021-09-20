import Head from 'next/head'
import Header from '../Components/Header'
import InputCard from '../Components/InputCard'
import Result from '../Components/Result'
import GlobalStyles from '../Components/styles/GlobalStyles'
import HomeStyle from '../Components/styles/HomeStyle'


export default function Home() {
  return (
    <div>
    <GlobalStyles />
    
    <HomeStyle>
      <Head>
        <title>Calculator</title>
        <meta name="description" content="Calculate Everything!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <main className="main">
        <div>
          <Header />
          <Result />
          <InputCard />
        </div>
      </main>
    </HomeStyle>
    </div>
  )
}
