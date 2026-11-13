import CardsContainer from "../components/CardsContainer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home({ datas, API_KEY }) {
    return (
        <div>
            <Navbar />
            <Hero datas={datas} apiKey={API_KEY} />
            <CardsContainer datas={datas} />
        </div>
    )
}

export default Home