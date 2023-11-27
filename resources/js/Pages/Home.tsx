import Hero from "@/Components/Home/Hero/Hero"
import Hightlight from "@/Components/Home/Highlight/Highlight"
import MainLayout from "@/Layouts/MainLayout"
import Collections from "@/Components/Home/Collections"
const Home = () => {
  return (
  <MainLayout>
    <Hero />
    <Hightlight />
    <Collections />
  </MainLayout>
  )
}

export default Home
