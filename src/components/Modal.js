import React from "react";
import { useHome } from "../pages/Home/component/Home-hooks";

const Modal = () => {
  const {handleSubmit, error, setCategory,category} = useHome();
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Create a New Category
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        // tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Create a New Category
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Category Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={category || ""}
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
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
