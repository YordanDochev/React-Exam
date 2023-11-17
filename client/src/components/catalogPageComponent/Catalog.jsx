import ContactAgentCatalog from "./ContactAgentCatalog";
import HeaderCatalog from "./HeaderCatalog";
import ListImotsCatalog from "./ListImotsCatalog";
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
                <ListImotsCatalog/>
                {/* Property List End */}
                {/* Call to Action Start */}
                <ContactAgentCatalog/>
                {/* Call to Action End */}
        </>
    );
}
