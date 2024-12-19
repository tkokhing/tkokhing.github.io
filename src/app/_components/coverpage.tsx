// _components/CoverPage.tsx goodie one
const CoverPage: React.FC = () => {
  return (
    <section>
      {/* <div className="logo">
        <video src="/logo.mp4" autoPlay playsInline muted></video>
      </div> */}
      <div className="box_container">
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Vision &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <p>We are a start-up research company where we dream about and develop the next-gen web security suite.</p>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Expertise &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <p>Our people are the most important assets! We bring together seasoned experts, with extensive R&D experience across industries in ICT, defense, financial and cryptocurrency.</p>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Views &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <p>Our perspective on today’s internet security landscape is that it is disarrayed and monopolized, limiting your choices but to accommodate. We are committed to changing this.</p>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Blog &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <p>
                Who we are defines our fields of expertise, views and research{" "}
                <a
                  href="https://tkokhing.github.io/"
                  className="underline hover:text-green-400 duration-200 transition-colors"
                >
                  topics.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;