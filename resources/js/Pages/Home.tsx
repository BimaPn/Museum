import Hero from "@/Components/Home/Hero/Hero"
import Hightlight from "@/Components/Home/Highlight/Highlight"
import MainLayout from "@/Layouts/MainLayout"
import Collections from "@/Components/Home/Collections"
import Advertisement1 from "@/Components/Home/Advertisement1"
import Advertisement2 from "@/Components/Home/Advertisement2"
import Newsletter from "@/Components/Home/Newsletter"
const Home = () => {
  return (
  <MainLayout className="flex flex-col gap-24">
    <Hero />
    <Hightlight />
    <Collections />
    <Advertisement1 />
    <Advertisement2 />
    <Newsletter />
  </MainLayout>
  )
}

export default Home
