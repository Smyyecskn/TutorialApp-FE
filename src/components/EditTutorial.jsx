import axios from "axios";
import { useState } from "react";

const EditTutorial = ({ getTutorials, editData }) => {
  const { id, title: oldTitle, description: oldDedscription } = editData;
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDedscription);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    postTutorial(newTutorial);
    setTitle("");
    setDescription("");
  };

  const postTutorial = async (newTutorial) => {
    try {
      const res = axios.post(process.env.REACT_APP_URL, newTutorial);
      axios.post(URL, newTutorial);
    } catch (error) {
      console.log(error);
    }

    getTutorials();
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Tutorial
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-danger mb-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTutorial;
