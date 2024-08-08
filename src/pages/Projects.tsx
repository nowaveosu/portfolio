import { Link } from "react-router-dom";

function Projects() {
    return (
      <div>
        5
        <button>
          <Link to="/experience"> go prev</Link>
        </button>
        <button>
          <Link to="/contact"> go next</Link>
        </button>
      </div>
    );
  }
  
  export default Projects;