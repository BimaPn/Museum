import { navigations } from "@/constants/lists"
import { Box, Flex, Heading, Link as ChakraLink, ListItem, UnorderedList, Icon } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import { HiMiniBuildingLibrary } from "react-icons/hi2"
import PrimaryLink from "./PrimaryLink"
import { IoTicketOutline } from "react-icons/io5"
import NavSearch from "./NavSearch"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const elementHeight = (window.innerWidth / 21) * 9;
      if (offset > elementHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${isFixed ? "fixed bg-black text-white py-5" : "absolute"}
                     right-0 left-0 top-0 px-8 py-4 z-[999]`}>
        <Flex alignItems={`center`} justify={`space-between`} className="boxWidth mx-auto text-light">
          <Box className="flexCenter gap-6">
            <Heading className="font-bold text-xl flexCenter gap-1">
                <Icon as={HiMiniBuildingLibrary} className="text-3xl" />
                EuroPark
            </Heading>
            <UnorderedList listStyleType={`none`} className="flexBetween gap-5 font-medium">
                {navigations.map((menu,index) => (
                    <ListItem>
                        <ChakraLink href={menu.link} as={Link}>
                            {menu.label}
                        </ChakraLink>
                    </ListItem>
                ))}
            </UnorderedList>
          </Box>
          <Box>
            <div className="w-fit flexCenter gap-1 text-sm border-2 py-[6px] px-2 rounded-xl">
               <Icon as={IoTicketOutline} className="text-lg" />
               Tickets
            </div>
          </Box>
        </Flex>

    </nav>
  )
}

export default Navbar
