import Carousel from "./carousel/Carousel"
import LogoCarousel from "./carousel/LogoCarousel"
import FeaturesSection from "./FeaturesSection"
import ProductHighlights from "./ProducHighlightSection"
import IndustrySection from "./IndustriesSections/IndustrySection"

import { WhyTrustUs } from "./whyTrustUs"

const Home = () => {
    return (
        <>
            <Carousel />
            <LogoCarousel />
            <WhyTrustUs />
            <FeaturesSection />
            <ProductHighlights />
            <IndustrySection />

        </>
    )
}

export default Home