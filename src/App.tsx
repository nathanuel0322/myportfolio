import { useState } from "react";
import "./App.css";
import "./assets/css/global.css";
import ContactMe from "./components/contactme";
import Footer from "./components/Footer";
import TopBlock from "./components/topblock";
import Header from "./components/Header";
import TemporaryDrawer from "./components/TemporaryDrawer";
import Experience from "./components/Experience";
import AboutMeSkills from "./components/aboutmeskills";
import MyWork from "./components/mywork";
import Specialized from "./components/specialized";
import MyHomelab from "./components/MyHomelab";

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="App">
            <Header drawerfunc={setDrawerOpen} />
            <TopBlock />
            <Specialized />
            <Experience />
            <MyWork />
            <MyHomelab />
            <AboutMeSkills />
            <ContactMe />
            <Footer />
            <TemporaryDrawer drawerstate={drawerOpen} drawerfunc={setDrawerOpen} />
        </div>
    );
}

export default App;
