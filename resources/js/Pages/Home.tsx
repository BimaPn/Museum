import Hero from "@/Components/Home/Hero/Hero"
import Hightlight from "@/Components/Home/Hightlight"
import MainLayout from "@/Layouts/MainLayout"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/pagination'
const Home = () => {
  return (
  <MainLayout>
    <Hero />
    <Hightlight />

    <Swiper
    slidesPerView={2}
    spaceBetween={30}
    centeredSlides={true}
    modules={[Pagination]}
            pagination={{           clickable: true,         }}
    className="boxWidth mySwiper">
        <SwiperSlide className="aspect-[21/9] bg-red-400">
        hai
        </SwiperSlide>
        <SwiperSlide className="aspect-[21/9] bg-red-400">
        hai
        </SwiperSlide>
        <SwiperSlide className="aspect-[21/9] bg-red-400">
        hai
        </SwiperSlide>
    </Swiper>
  </MainLayout>
  )
}

export default Home
