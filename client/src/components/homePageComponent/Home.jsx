import HeaderHomePage from "./headerHomePage"
import SearchHomePage from "./SearchHomePage"
import HotOffersHomePage from "./HotOffersHomePage"
import OurAgentsHomePage from "./OurAgentsHomePage"
import CommnetsHomePage from "./ComentsHomePage"
import CommentsCarousel from "./Comments"

function Home() {
  return (
  <>
        <HeaderHomePage/>

        {/* Search page optional */}
        <SearchHomePage/> 
        
        <HotOffersHomePage/>

        <CommentsCarousel/>
        {/* <OurAgentsHomePage/> */}

  </>
  )
}

export default Home
