import { Box, Heading } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { HiOutlineArrowRight } from "react-icons/hi"
import Slider from "./Slider"

const Highlight = () => {
  return (
  <section>
    <Box className="boxWidth mb-10 px-8">
        <Heading className="text-black text-5xl font-marcellus">HIGHLIGHT</Heading>
    </Box>
    <Slider />
  </section>
  )
}

export default Highlight
