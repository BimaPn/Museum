import { Link as ChakraLink } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
const PrimaryLink = ({children,href,className}:{children:React.ReactNode,href:string,className?:string}) => {
  return (
    <ChakraLink as={Link} href={href} className={`w-fit text-black bg-yellow-300 px-5 py-2 font-medium rounded-full ${className}`}>
    {children}
    </ChakraLink>
  )
}

export default PrimaryLink
