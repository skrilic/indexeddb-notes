
import { HomeIcon, TocIcon, BookmarkListIcon, SearchIcon, SettingsIcon } from "./AppIcons";

const FooterBar = (props) => {
    const {
        visible, 
        home_disabled, 
        toc_disabled,
        homeIsOpened,
        tocIsOpened,
        bookmarkListIsOpened,
        searchIsOpened
    } = props;

    return (
        <div className="
            flex 
            w-full
            overflow-hidden
            z-50
            bg-neutral-500
            justify-around 
            align-middle 
            bottom-0
            left-0
            fixed
            "

            style={visible ? { "visibility": "visible" } : { "visibility": "collapse" }}
        >
            <HomeIcon disabled={home_disabled || false} isOpened={homeIsOpened || false} />
            <TocIcon disabled={toc_disabled || false} isOpened={tocIsOpened || false} />
            <BookmarkListIcon disabled={false} isOpened={bookmarkListIsOpened || false} />
            <SearchIcon disabled={false} isOpened={searchIsOpened || false} />
            <SettingsIcon disabled={false} />
        </div>
    )
}

export default FooterBar;