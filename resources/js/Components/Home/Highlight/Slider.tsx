import { highlights } from "@/constants/lists"
import { Swiper, SwiperSlide } from "swiper/react"
import HighlightItem from "./HighlightItem"

const Slider = () => {
  return (
    <Swiper
    slidesPerView={1.2}
    spaceBetween={30}
    centeredSlides={true}
    className="mySwiper">

        {highlights.map((item,index) => (
            <SwiperSlide>
            <HighlightItem
            key={index}
            desktopImg={item.desktopImg}
            mobileImg={item.mobileImg}
            category={item.category}
            title={item.title}
            description={item.descripton}
            link={item.link}
            className="w-full"/>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Slider
