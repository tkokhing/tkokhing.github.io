// _components/CoverPage.tsx
const CoverPage: React.FC = () => {
  return (
    <section>
    <div className="logo">
      <video src="/logo.mp4" autoPlay playsInline muted></video>
      </div>
      <div className="box_container">
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
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Sustainability</h2>
            </div>
            <div className="flip-card-back">
              <h2>Our sustainability efforts...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
