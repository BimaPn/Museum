import { Box, Center, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"
import LearnMoreLink from "../Ui/LearnMoreLink"
import { advertise1 } from "@/constants/advertisements"

const Advertisement1 = () => {
  return (
    <section className="boxWidth grid grid-cols-2 px-8">
        <Box className="w-[85%] flex flex-col justify-center gap-5">
            <Heading className="font-bold font-marcellus text-4xl leading-snug -mt-12">
            {advertise1.title}
            </Heading>
            <Text className="leading-normal">{advertise1.description}</Text>
            <LearnMoreLink href="/collections" />
        </Box>
        <Box className="h-full flexCenter">
            <Box className="w-[90%] h-fit flexCenter aspect-[4/3]">
                <Image src={advertise1.img} className="object-cover rounded"/>
            </Box>
        </Box>
    </section>
  )
}

export default Advertisement1
