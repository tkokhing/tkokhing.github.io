import {TesterIcon, NightMoonIcon, HoverChangeColourIcon, ProfileLogoSVG } from "../_components/icons_svg"
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
          <h1>My TesterIcon #1 all use default || width = 3 on star 3 only, rest all 1 || strokeColour = "yellow" on star 1 hori only, rest all white || fill = "currentColour" on black side moon and star 2</h1>
          <h1>My TesterIcon #1 Result: All is correct except "currentColour" on black side MOON is not effected </h1>
          <TesterIcon />
        </div>

        <div>
          <h1>My TesterIcon #2 strokeColour="blue" width=1 fill="orange".</h1>
          <h1>My TesterIcon #2 Result: STROKECOL: star 1 blue OK || WIDTH:Star 3 is 1 ok || FILL: Star is Orange ok, Moon not change NotOk </h1>
          <TesterIcon strokeColour="blue" width={1} fill="orange" />
        </div>

        <div>
          <h1>My TesterIcon #3 strokeColour=not provded, width=2 fill="green" </h1>
          <h1>My TesterIcon #3 Result: WIDTH:Star 2 is 2 ok || FILL: Star is green ok, Moon not change NotOk </h1>

          <TesterIcon width={2} fill="green" />
        </div>

        <div>
          <h1>My NightMoonIcon #1 go by default, with strokeWidth={1} strokeLinecap="round" stroke="white"</h1>
          <h1>My NightMoonIcon #1 Result: ALL stars are WHITE of course </h1>

          <NightMoonIcon stroke="white" />
        </div>

        <div>
          <h1>My NightMoonIcon #1 input cyan to strokeWidth={1} strokeLinecap="round" stroke="white"</h1>
          <h1>My NightMoonIcon #1 Result: ALL stars are cyan </h1>

          <NightMoonIcon stroke="cyan" />
        </div>

        <div>
          <h1>My HoverChangeColourIcon default || strokeColour=white, as default. Hover on stroke: stroke-cyan-500 </h1>
          <h1>My HoverChangeColourIcon Result:   </h1>

          <HoverChangeColourIcon />
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
