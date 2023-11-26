import { Box, Center, Flex, Icon } from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

const NavSearch = () => {
  return (
  <div className="flexBetween border border-white rounded-3xl">
    <Center className="w-10 aspect-square">

    <Icon as={FiSearch} className="text-xl"/>
    </Center>

    <Box className="w-full">
        <input type="text" className="w-full bg-transparent text-white border-0 text-sm px-0 focus:outline-none" placeholder="Search"/>
    </Box>

  </div>
  )
}

export default NavSearch
