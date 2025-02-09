import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Jobs from "../components/Jobs";
import Education from "../components/Education";
import Connect from "../components/Connect";

function HomePage() {

    return (
        <>
            <Hero/>
            <About showMore={true}/>
            <Projects title="latest work" showLink={true} classList="bg-grey"/>
            <Jobs/>
            <Education />
            <Connect/>
        </>
    )
}

export default HomePage;
