import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  // console.log(process.env.REACT_APP_URL);

  const getTutorials = async () => {
    try {
      // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
      // const res = await axios.get(URL);

      const res = await axios.get(process.env.REACT_APP_URL);
      setTutorials(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  // console.log("tutorials", tutorials);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
