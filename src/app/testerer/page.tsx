"use client"
import Container from "@/app/_components/container";
import { SquareBoxIcon, RectangleBoxIcon, HomeWithTextIcon, BlogWithTextIcon, TopicWithTextIcon, SystemModeIcon, DarkModeIcon, LightModeIcon } from "@/app/_components/main_frame/icons_svg";
import { ProfileLogoSVG } from "@/app/_components/main_frame/icons_svg";
import SectionSeparator from "@/app/_components/section-separator";
import styles from "@/app/_components/main_frame/icon_svg.module.css";
// import SvgNavBar from "../_components/svg-nav-bar";
// import Navber from "@/app/_components/navbar"
// import Navber1 from "@/app/_components/navbar1"
// import Navber2 from "@/app/_components/navbar2"

export default function Testerer() {
  return (
    <main>
      {/* <Navber />
      Above is Navbar
      <Navber1 />
      Above is Navbar1
      <Navber2 />
      Above is Navbar2 */}
      <Container>
      <h1 className="title">
        Welcome to <a href="https://tkokhing.github.io/">my technical blog!</a>
      </h1>

      <p className="description">Tester Page</p>
      <ul className="para_one">
        <p>Created for learning how the different programming languages and frameworks work together. To explore new concepts and create a demo to share online.</p>
      </ul>

      <div className={styles.switch}>
        <h1>My Testing SVG Icons default || strokeColour=white, Hover on stroke: yellow </h1>
        <h1>My Icon Result:   </h1>
        <div className = {styles['icon-container']}>
          <BlogWithTextIcon />
          <TopicWithTextIcon />
          <SystemModeIcon />
          <DarkModeIcon />
          <LightModeIcon />
          <LightModeIcon />

        </div>
      </div>
      <SectionSeparator />
      <div>
        // Daymode use this
        
        <h1>Testing HomeWithTextIcon using size-XX":   </h1>

        <HomeWithTextIcon height = {50}/>

        <h1>Testing HomeWithTextIcon using size-XX":   </h1>

        <div className="flex flex-" style={{ height: '10', width: 'auto' }}>
          <SquareBoxIcon />
          <RectangleBoxIcon />
        </div>
      </div>
    </Container>
    </main>
  );
}

{/* <style>{`
  .container {
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .para_one {
    line-height: 1.0;
    font-size: 1.0rem;
  }

`}</style>

<style>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      Fira Sans,
      Droid Sans,
      Helvetica Neue,
      sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style> */}
