import gImg from "../icons/imageHEllo_bs6rf1.png";
import "./index.css";

const Home = () => (
  <>
    <div className="add-projects-container">
      <div className="left">
        <p className="ui-ux">UI/UX DESIGNER</p>
        <h1 className="home-name">Hello, my name is Madelyn Torff</h1>
        <p className="dis">
          Shrot text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div>
          <button type="button" className="project-but">
            Project
          </button>
          <button type="button" className="linkedin-but">
            LinkedIn
          </button>
        </div>
      </div>
      <div>
        <img src={gImg} alt="hello img" />
      </div>
    </div>
  </>
);

export default Home;
