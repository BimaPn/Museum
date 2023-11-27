import { Center, Icon, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { FiSearch } from "react-icons/fi"

const NavSearch = () => {
  return (
  <ChakraLink as={Link} href="/search">
    <Center className="gap-2">
        <Icon as={FiSearch} className="text-[22px]"/>
        <Text className="text-white font-medium">Search</Text>
    </Center>

  </ChakraLink>
  )
}

export default NavSearch
