import { Link } from '@inertiajs/react'
import { Link as ChakraLink, Icon } from '@chakra-ui/react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia"

const LearnMoreLink = ({href,className}:{href:string,className?:string}) => {
  return (
    <ChakraLink as={Link} href={href} className='w-fit font-medium border-b-[3px] border-black pb-[2px]'>
    Learn more
    </ChakraLink>
  )
}

export default LearnMoreLink
