import "./Home.css";

import cardio from "../assets/cardio.png";
import neuro from "../assets/neuro.png";
import ortho from "../assets/ortho.png";
import pediatrics from "../assets/pediatrics.png";

function Home() {
  return (
    <>
      {/* Top Banner */}
      <div className="home-banner">
        <h1>VitaCare Hospital</h1>
        <p>Where every speciality cares for you</p>
      </div>

      {/* Middle 25% Section */}
      <div className="home-middle">
        <h2>Our Medical Excellence</h2>
        <p>Trusted specialists. Advanced care. Compassionate service.</p>
      </div>

      {/* Bottom Cards Section */}
      <div className="specialists">
        <div className="card">
          <img src={cardio} alt="Cardiology" />
          <h3>Cardiology</h3>
          <p>Heart & vascular care</p>
        </div>

        <div className="card">
          <img src={neuro} alt="Neurology" />
          <h3>Neurology</h3>
          <p>Brain & nervous system</p>
        </div>

        <div className="card">
          <img src={ortho} alt="Orthopedics" />
          <h3>Orthopedics</h3>
          <p>Bones & joint care</p>
        </div>

        <div className="card">
          <img src={pediatrics} alt="Pediatrics" />
          <h3>Pediatrics</h3>
          <p>Child health specialists</p>
        </div>
      </div>
    </>
  );
}

export default Home;

