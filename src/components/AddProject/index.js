import { Component } from "react";
import { v4 as uuidV4 } from "uuid";

import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./index.css";

const projectsLists = [
  {
    uniqueNo: 1,
    projectName: "Sofware Developer",
    projectLink:
      "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    projectDes:
      "I create this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
  {
    uniqueNo: 2,
    projectName: "Sofware Developer",
    projectLink:
      "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    projectDes:
      "I create this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
  {
    uniqueNo: 3,
    projectName: "Sofware Developer",
    projectLink:
      "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    projectDes:
      "I create this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
  },
];

class AddProject extends Component {
  state = {
    projectList: [...projectsLists],
    projectName: "",
    projectLink: "",
    projectDes: "",
  };

  onChangeTitle = (event) => {
    this.setState({ projectName: event.target.value });
  };
  onChangeLink = (event) => {
    this.setState({ projectLink: event.target.value });
  };
  onChangeDes = (event) => {
    this.setState({ projectDes: event.target.value });
  };

  onSubmitFrom = (event) => {
    event.preventDefault();
    const { projectDes, projectName, projectLink, projectList } = this.state;
    const newList = {
      uniqueNo: uuidV4(),
      projectDes,
      projectName,
      projectLink,
    };
    this.setState({ projectList: [...projectList, newList] });
    this.setState({ projectDes: "", projectName: "", projectLink: "" });
  };
  render() {
    const { projectDes, projectName, projectLink, projectList } = this.state;
    console.log(projectList);
    return (
      <div className="add-bg-container">
        <div className="form-project-container">
          <h1 className="add-heading">Add Project</h1>
          <div className="border"></div>
          <form className="form-container" onSubmit={this.onSubmitFrom}>
            <label htmlFor="project-title">Project Name</label>
            <input
              type="text"
              id="project-title"
              onChange={this.onChangeTitle}
              value={projectName}
              className="input-element"
              required
            />
            <label htmlFor="project-link">Project Link</label>
            <input
              type="text"
              id="project-link"
              onChange={this.onChangeLink}
              value={projectLink}
              className="input-element"
              required
            />
            <label htmlFor="des-elemet">Description</label>
            <textarea
              id="des-elemet"
              rows={6}
              cols={40}
              onChange={this.onChangeDes}
              value={projectDes}
              className="input-element-tex"
              required
            ></textarea>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
        <h1 className="projects-li-heading">Projects</h1>
        <div className="border"></div>
        <ul className="ul-container">
          {projectList.map((each) => (
            <div key={each.uuidV4}>
              <li key={each.uniqueNo} className="li-container">
                <div className="li-div-container">
                  <h1 className="li-heading">{each.projectName}</h1>
                  <p className="li-des">{each.projectDes}</p>
                  <button className="view-projects-container" type="button">
                    View Projects
                  </button>
                </div>
                <img
                  src={each.projectLink}
                  alt={each.projectName}
                  className="image-element"
                />
              </li>
            </div>
          ))}
        </ul>
        <div>
          <FaInstagram className="icon" />
          <FaLinkedin className="icon" />
          <FaEnvelope className="icon" />
        </div>
        <div className="svgs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1436"
            height="112"
            viewBox="0 0 1436 112"
            fill="none"
            className="svgs"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
              fill="#FDC435"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default AddProject;
