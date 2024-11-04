// _components/CoverPage.tsx
import Head from 'next/head';
// import styles from "./tiles-styles.module.css";
const CoverPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ironweb - Future is Secure</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/tiles.css" />
        <link rel="stylesheet" href="/logo.css" />
      </Head>
      <div className="logo">
        <video src="/logo.mp4" autoPlay playsInline muted></video>
      </div>
      <div className="container">
        <div className="tile">
        <div className="flip-card">
            <div className="flip-card-front">
            <h2>Vision</h2>
            </div>
            <div className="flip-card-back">
            <h2>Our vision is to...</h2>
            </div>
        </div>
        </div>
        <div className="tile">
        <div className="flip-card">
            <div className="flip-card-front">
            <h2>Mission</h2>
            </div>
            <div className="flip-card-back">
            <h2>Our mission is to...</h2>
            </div>
        </div>
        </div>
        <div className="tile">
        <div className="flip-card">
            <div className="flip-card-front">
            <h2>Security</h2>
            </div>
            <div className="flip-card-back">
            <h2>Your security is ...</h2>
            </div>
        </div>
        </div>
        <div className="tile">
        <div className="flip-card-front">
            <h2>Sustainability</h2>
        </div>
        <div className="flip-card-back">
            <h2>Our sustainability efforts...</h2>
        </div>
        </div>
      
      </div>
    </>
  );
};

export default CoverPage;
