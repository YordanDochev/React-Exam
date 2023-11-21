import OurAgents from "./OurAgents";
import HeaderCatalog from "./HeaderCatalog";
import ListCatalog from "./ListCatalog";
import SearchCatalog from "./SearchCatalog";

export default function Catalog() {
    return (
        <>
                {/* Header Start */}
                <HeaderCatalog/>
                {/* Header End */}

                {/* Search Start */}
                <SearchCatalog/>
                {/* Search End */}
                {/* Property List Start */}
                <ListCatalog/>
                {/* Property List End */}
                {/* Call to Action Start */}
                <OurAgents/>
                {/* Call to Action End */}
        </>
    );
}
