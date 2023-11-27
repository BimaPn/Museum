import { HighlightItem as Props } from "@/types/global";
import { Box, Flex, Icon, Text, useMediaQuery, Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "@inertiajs/react";
import { HiOutlineArrowRight } from "react-icons/hi"

const HighlightItem = ({desktopImg,mobileImg,category,title,description,link,className}:Props) => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)');

  const checkImageResponsive = () => {
    if(isDesktop) return `url('${desktopImg}')`;
    return mobileImg;
  }
  return (
    <ChakraLink as={Link} href={link} className={`block ${className}`}>
        <Box
        bgImg={checkImageResponsive()}
        bgSize={`cover`}
        bgPos={`center`}
        bgRepeat="no-repeat"
        className={`w-full aspect-[2.35/1] rounded flex items-end px-8 py-5`}
        >
            <Flex justify={`space-between`} alignItems={`end`} className="block w-full text-white gap-4 mb-4">
                <Flex direction={`column`} className="w-[90%] gap-1">
                    <Text className="font-bold text-sm">{category}</Text>
                    <Text className="font-marcellus font-medium text-3xl">{title}</Text>
                    <Box className="w-full mt-1">
                        <Text className="text-sm">{description}</Text>
                    </Box>
                </Flex>
                <Box>
                    <Icon as={HiOutlineArrowRight} className="text-2xl"/>
                </Box>
            </Flex>
        </Box>
    </ChakraLink>

  )
}

export default HighlightItem
