import { HeroSlideProps } from "@/types/global";
import { Box, useMediaQuery } from "@chakra-ui/react"

const HeroSlide = ({children,mobileImg,tabletImg,desktopImg,className}:HeroSlideProps) => {
  const [isDesktop] = useMediaQuery('(min-width: 1280px)');
  const [isTablet] = useMediaQuery('(min-width: 768px)');

  const checkImageResponsive = () => {
    if(isDesktop) return `url('${desktopImg}')`;
    else if(isTablet) return `url('${tabletImg}')`;
    return mobileImg;
  }
  return (
  <Box
  bgImg={checkImageResponsive()}
  bgSize={`cover`}
  bgPos={`center`}
  bgRepeat="no-repeat"
  className={`w-full sm:aspect-video lg:aspect-[21/9] ${className}`}
  >
    {children}
  </Box>
  )
}

export default HeroSlide
