import { advertise1 } from '@/constants/advertisements'
import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LearnMoreLink from '../Ui/LearnMoreLink'

const Advertisement2 = () => {
  return (
    <section className="boxWidth grid grid-cols-2 px-8 gap-8">
        <Box className="h-full flex justify-start items-center">
            <Box className="w-[90%] h-fit flexCenter aspect-[4/3]">
                <Image src={advertise1.img} className="object-cover rounded"/>
            </Box>
        </Box>
        <Box className="w-[85%] flex flex-col justify-center gap-5">
            <Heading className="font-bold font-marcellus text-4xl leading-snug -mt-12">
            {advertise1.title}
            </Heading>
            <Text className="leading-normal">{advertise1.description}</Text>
            <LearnMoreLink href="/collections" />
        </Box>
    </section>
  )
}

export default Advertisement2
