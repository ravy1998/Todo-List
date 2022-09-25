import React from "react";
import { useHome } from "./component/Home-hooks";

const Home = () => {
  const {error, setCategory, handleSubmit} = useHome();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4 main-column">
          <div className="row ">
            <div className="col-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Category Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <span style={{ color: "red" }}>{error}</span>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary text-center"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
