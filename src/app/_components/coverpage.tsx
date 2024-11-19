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
              <h2>Our Vision &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <h2>We are a start-up research company where we dream about and develop the next-gen web security suite.</h2>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Expertise &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <h2>Our people are the most important assets! 
                We bring together seasoned experts, with extensive 
                R&D experience across industries in ICT, defense, 
                financial and crytocurrency.</h2>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Views &rarr;</h2>
            </div>
            <div className="flip-card-back">
              <h2>Our perspective on today’s internet security landscape is that it is disarrayed and monopolized, limiting your choices but to accommodate. We are committed to changing this.</h2>
            </div>
          </div>
        </div>
        <div className="tile">
          <div className="flip-card">
            <div className="flip-card-front">
              <h2>Our Blog &rarr;</h2>
            </div>
            <div className="flip-card-back">
              
              <h2>Who we are defines our fields of expertise, views and research {" "}
              <a
                href={`https://ironweb-research.github.io/we_are/`}
                className="underline hover:text-green-400 duration-200 transition-colors"
              >
              topics.
              </a>
                
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverPage;
