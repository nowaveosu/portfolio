import { Link } from "react-router-dom";

function Evaluation() {
    return (
      <div>
        3
        <button>
          <Link to="/education">go prev</Link>
        </button>
        <button>
          <Link to="/experience">go next</Link>
        </button>
      </div>
    );
  }
  
  export default Evaluation;