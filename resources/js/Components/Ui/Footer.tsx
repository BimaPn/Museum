import { collections, navigations } from "@/constants/lists"
import { ListItem, UnorderedList, Link as ChakraLink, Heading, Icon, Box, Center } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { HiMiniBuildingLibrary } from "react-icons/hi2";

const Footer = () => {
  const socialMedia = ["Instagram","Facebook","Twitter"];
  return (
    <footer className="bg-black pb-6 pt-10 px-6 mt-12 text-white">
    <Box className="boxWidth flex flex-col gap-16">
      <Box className="grid grid-cols-4 mb-12">
        <Box>
            <Heading className="font-bold text-2xl flexCenter gap-1">
                <Icon as={HiMiniBuildingLibrary} className="text-4xl" />
                EuroPark
            </Heading>
        </Box>

        <Box className="font-marcellus">
          <span>Collections</span>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            {collections.map(item => (
            <li key={item.label}>
              <ChakraLink as={Link} href={item.link}>{item.label}</ChakraLink>
            </li>
            ))}
          </ul>
        </Box>
        <Box className="font-marcellus">
          <span>Navigation</span>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            {navigations.map(item => (
            <li key={item.label}>
              <ChakraLink as={Link} href={item.link}>{item.label}</ChakraLink>
            </li>
            ))}
          </ul>
        </Box>
        <Box className="font-marcellus">
          <span>Follow Us</span>
          <ul className="flex flex-col gap-2 mt-3 text-sm">
            {socialMedia.map(item => (
            <li key={item}>
              <ChakraLink as={Link} href={item}>{item}</ChakraLink>
            </li>
            ))}
          </ul>
        </Box>
      </Box>

      <Center className="font-marcellus text-sm text-center">
        Created at 2023 By someone Unknown :0
      </Center>
    </Box>
  </footer>
  )
}

export default Footer
