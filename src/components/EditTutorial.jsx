import axios from "axios";
import { useEffect, useState } from "react";

const EditTutorial = ({ getTutorials, editData }) => {
  const { id, title: oldTitle, description: oldDedscription } = editData;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(oldTitle);
    setDescription(oldDedscription);
  }, [oldTitle, oldDedscription]);

  const editTutorial = async (newTutorial) => {
    try {
      await axios.put(`${process.env.REACT_APP_URL}${id}/`, newTutorial);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("title", title); //yenı yazdıgımız değer

  // console.log("oldTitle", oldTitle); //editDatadan gelen title degeri
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutorial = { title, description };
    editTutorial(newTutorial);
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
                aria-label="Close"
                data-dismiss="modal"
                onClick={() => {
                  setTitle("");
                  setDescription("");
                }}
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
