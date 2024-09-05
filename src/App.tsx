import { useState } from "react";
import "./App.css";
import "./assets/css/global.css";
import AboutMeSkills from "./components/aboutmeskills";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import MyWork from "./components/mywork";
import Specialized from "./components/specialized";
import TopBlock from "./components/topblock";
import Header from "./components/header";
import TemporaryDrawer from "./components/sidenav";
import React from "react";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="App">
            <Header drawerfunc={setDrawerOpen} />
            <TopBlock />
            <Specialized />
            <MyWork />
            <AboutMeSkills />
            <ContactMe />
            <Footer />
            <TemporaryDrawer drawerstate={drawerOpen} drawerfunc={setDrawerOpen} />
        </div>
    );
}

export default App;
