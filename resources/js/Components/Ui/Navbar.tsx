import { listMenu } from "@/constants/lists"
import { Box, Flex, Heading, Link as ChakraLink, ListItem, UnorderedList, Icon } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { HiMiniBuildingLibrary } from "react-icons/hi2"
import PrimaryLink from "./PrimaryLink"
import { IoTicketOutline } from "react-icons/io5"
import NavSearch from "./NavSearch"

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 top-0 px-8 py-4">
        <Flex alignItems={`center`} justify={`space-between`} className="boxWidth mx-auto text-light">
          <Box className="flexCenter gap-6">
            <Heading className="font-bold text-xl flexCenter gap-1">
                <Icon as={HiMiniBuildingLibrary} className="text-3xl" />
                EuroPark
            </Heading>
            <UnorderedList listStyleType={`none`} className="flexBetween gap-5 font-medium">
                {listMenu.map((menu,index) => (
                    <ListItem>
                        <ChakraLink href={menu.link} as={Link}>
                            {menu.label}
                        </ChakraLink>
                    </ListItem>
                ))}
            </UnorderedList>
          </Box>
          <Box className="w-44">
            <NavSearch />
          </Box>
        </Flex>

    </nav>
  )
}

export default Navbar
