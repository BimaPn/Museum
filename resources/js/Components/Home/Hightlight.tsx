import { Link as ChakraLink, Box, Flex, Heading, Icon, Text } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { HiOutlineArrowRight } from "react-icons/hi"

const Hightlight = () => {
  return (
  <section className="boxWidth">
    <Heading className="text-3xl font-marcellus">HIGHTLIGHT</Heading>
    <Box className="flex">

    <Box
    bgImg={`/images/hero/hero2.jpg`}
    bgSize={`cover`}
    bgPos={`center`}
    bgRepeat="no-repeat"
    className={`w-[70%] aspect-[21/9] rounded flex items-end px-8 py-5`}
    >
        <Flex justify={`space-between`} alignItems={`end`} className="block w-full text-white gap-4 mb-3">
            <Flex direction={`column`} className="w-[90%] gap-1">
                <Text className="font-bold text-sm">COLLECTION</Text>
                <Text className="font-marcellus font-medium text-3xl">REMEMBERING WHAT ALL ROMAN EMPIRE HAS</Text>
                <Box className="w-full mt-1">
                    <Text className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quod illo? Beatae consequuntur asperiores dicta.</Text>
                </Box>
            </Flex>
            <ChakraLink as={Link}>
                <Icon as={HiOutlineArrowRight} className="text-2xl"/>
            </ChakraLink>
        </Flex>
    </Box>
    </Box>

  </section>
  )
}

export default Hightlight
