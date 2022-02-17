import React from "react";
import Navigation from "../Nav";

function Header(props) {
    const {
        menuEntries=[],
        setCurrentMenuEntry,
        currentMenuEntry
    } = props;

    return (
        <header>
           <h1>Carter Supple</h1>
            <Nav
                menuEntries={menuEntries}
                setCurrentMenuEntry={setCurrentMenuEntry}
                currentMenuEntry={currentMenuEntry}
            >
            </Nav>
        </header>
    )
}

export default Header;