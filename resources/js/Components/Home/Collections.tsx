import { Box, Heading, Image, Text, Link as ChakraLink, Center } from "@chakra-ui/react"
import { Link } from "@inertiajs/react"

const Collections = () => {
  return (
    <section className=" py-12 px-8 mt-24 bg-black">
        <Box className="boxWidth mb-14 mt-6">
        <Heading className="font-bold font-marcellus text-5xl text-white">Our Collections</Heading>
        </Box>

        <div className="boxWidth grid grid-cols-3 gap-6 shadow-top-bottom relative mb-6 z-[500]">
            <div className="absolute inset-0 shadow-top-bottom"></div>
            <div className="flex flex-col gap-6 pt-12">
                {[1,2,3].map((item) => (
                <div key={item} >
                <img
                src={`/images/collections/${item}.jpg`}
                className="max-w-full h-auto"/>
                </div>

                ))}
            </div>
            <div className="flex flex-col gap-6">
                {[4,5,6].map((item) => (
                <div key={item} className="w-full h-fit">
                <img
                src={`/images/collections/${item}.jpg`}
                className="max-w-full h-auto"/>
                </div>
                ))}
            </div>
            <div className="flex flex-col gap-6 pt-6">
                {[7,8,9].map((item) => (
                <div key={item}>
                <img
                 src={`/images/collections/${item}.jpg`}
                className="max-w-full h-auto"/>
                </div>
                ))}
            </div>
        </div>

        <Center className="mb-2">
            <ChakraLink
            as={Link}
            href="/collections"
            className="font-medium text-black bg-white px-4 py-2 rounded-full">
                View Collections
            </ChakraLink>
        </Center>


    </section>
  )
}

export default Collections
