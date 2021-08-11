import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import SmallCard from '../Components/SmallCard'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'
import Footer from '../Components/Footer'

export default function Home({exploreData, cardsdata}) {
  return (
    <div className="">
      <Head>
        <title>MyFlyBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header/>
      {/*Banner*/}
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-5">
          <h2 className="text-4xl font-bold pb-5">Explore Nearby</h2>
          {/* Pull data from endpoints - API endpoints */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(item => {
            return (
            <SmallCard key={item.img} img={item.img} distance={item.distance} location ={item.location}/>
            )
          })}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-bold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide overflow-y-hidden p-3 -ml-3">
          {cardsdata?.map(item =>(
            <MediumCard key={item.img} img={item.img} title={item.title}/>
          ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" 
        title="The Greatest Outdoors"
        description = "Wishlists curated by Airbnb"
        buttonText = "Get Inspired"
        />

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
    console.log(exploreData);

    const cardsdata = await fetch('https://links.papareact.com/zp1').then(res => res.json());
    return {
      props:{
        exploreData,
        cardsdata
      },
    };
}
