import { Icon, Box, Heading, Text } from "@chakra-ui/react"
import HeroSlide from "./HeroSlide"
import { IoTicketOutline } from "react-icons/io5"
import PrimaryLink from "@/Components/Ui/PrimaryLink"
const Slide1 = () => {
  return (
  <HeroSlide
  mobileImg="/images/hero/hero.jpg"
  tabletImg="/images/hero/hero.jpg"
  desktopImg="/images/hero/hero.jpg"
  >
    <Box className="boxWidth mx-auto h-full flexCenter flex-col gap-10 text-white px-8">
        <Box className="max-w-[60%] flex flex-col gap-5 text-center">
            <Heading className="font-bold text-[44px] font-marcellus leading-snug">TRAVEL BACK TO GLORY TIME</Heading>
            <Text className="font-marcellus">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia commodi exercitationem doloribus aliquid doloremque</Text>
        </Box>
        <PrimaryLink href="/book" className="flexCenter gap-1 font-medium ">
           <Icon as={IoTicketOutline} className="text-xl" />
           Book tickets
        </PrimaryLink>
    </Box>
  </HeroSlide>
  )
}

export default Slide1
