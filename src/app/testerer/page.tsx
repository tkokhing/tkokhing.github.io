"use client"

import { MoonWithTextIcon, TestMoonIcon, DarkModeIcon, DarkModeWithHoverIcon,  ProfileLogoSVG } from "../_components/icons_svg"
import styles from "../_components/icon_svg.module.css";
export const dynamic = 'force-static';
export default function Testerer() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="https://tkokhing.github.io/">my technical blog!</a>
        </h1>

        <p className="description">Tester Page</p>
        <ul className="para_one">
          <p>Created for learning how the different programming languages and frameworks work together. To explore new concepts and create a demo to share online.</p>
        </ul>

        <div>
          <h1>My TestMoonIcon #0 without input at call, go by default, with strokeWidth={1} strokeLinecap="round" stroke="white"</h1>
          <h1>My TestMoonIcon #0 Result: ALL stars are WHITE of course </h1>

          <TestMoonIcon  />
        </div>

        <div>
          <h1>My TestMoonIcon #1 with white as input at call, with strokeWidth={1} strokeLinecap="round" stroke="white"</h1>
          <h1>My TestMoonIcon #1 Result: ALL stars are WHITE of course </h1>

          <TestMoonIcon strokeColour="white" />
        </div>

        <div>
          <h1>My DarkModeIcon default || strokeColour=white, Hover on stroke: yellow </h1>
          <h1>My DarkModeIcon Result:   </h1>

          <DarkModeIcon />
        </div>


        <div>
          <h1>My DarkModeWithHoverIcon default || strokeColour=white, Hover on stroke: yellow </h1>
          <h1>My DarkModeWithHoverIcon Result:   </h1>

          <DarkModeWithHoverIcon  />
        </div>

        <div className={styles.switch}>
          <h1>My MoonWithTextIcon default || strokeColour=white, Hover on stroke: yellow </h1>
          <h1>My MoonWithTextIcon Result:   </h1>
          <div className = {styles['icon-container']}>
            <MoonWithTextIcon />
            <MoonWithTextIcon />
          </div>
        </div>

        <div>
          <h1>My ProfileLogoSVG fill="#0071C1" </h1>
          <ProfileLogoSVG fill="#0071C1" />
          <h1>My ProfileLogoSVG fill="red":   </h1>
          <ProfileLogoSVG fill="red" />
          <h1>My ProfileLogoSVG fill="orange" </h1>
          <ProfileLogoSVG fill="orange" />

        </div>
      
      </main>

      <style>{`
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
      `}</style>
    </div>
  );
}
