import { Center, Icon, Text, Link as ChakraLink, Box } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { FiSearch } from "react-icons/fi"

const NavSearch = () => {
  return (
  <ChakraLink as={Link} href="/search" className="">
    <Center className="gap-[10px]">
        <Icon as={FiSearch} className="text-xl"/>
        <Text className="text-white text-sm font-medium">Search</Text>
    </Center>
  </ChakraLink>
  )
}

export default NavSearch
