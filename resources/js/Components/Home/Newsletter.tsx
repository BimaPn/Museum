import { Box, Heading, Text, Icon } from "@chakra-ui/react"
import { HiMiniArrowLeft } from "react-icons/hi2"

const Newsletter = () => {
  return (
    <section className="bg-[url('/images/collections/newsletter.jpg')] bg-no-repeat bg-cover py-24 px-10">
        <Box className="boxWidth flexCenter gap-16">
            <Box className="w-1/2 flex flex-col gap-4 text-white">
                <Heading className="text-4xl font-bold font-marcellus">Stay <span className="text-primary font-marcellus">Connected</span></Heading>
                <Text>Learn more about our exhibitions, news, programs, and special offers.</Text>
            </Box>
            <Box className="w-[30%]">
                <Box className="w-full text-white flexCenter border-b border-white py-2">
                    <input
                    type="text"
                    placeholder="Sign up for our newsletter"
                    className="w-full bg-transparent border-0 focus:ring-0 focus:border-0 placeholder:text-white"/>
                    <Icon as={HiMiniArrowLeft} className="text-2xl rotate-180"/>
                </Box>
            </Box>
        </Box>
    </section>
  )
}

export default Newsletter
