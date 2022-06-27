import JobRegistry, { Job } from "../components/JobRegistry";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import './styles.scss';

function Main() {
  const jobs: Job[] = [
    {
      startDate: "1/1/2021",
      jobDescripton: "test",
      jobPosition: "Gardner"
    }
  ]

  return (
    <div className="main">
      <Sidebar />

      <div className="content">
        <div className="name-container">
          <h1>Isaias Carvalho</h1>
        </div>

        <div className="history">
          <Title color="black">Professional Experience</Title>
          <JobRegistry job={jobs[0]}/>
        </div>

        <div className="history">
          <Title color="black">Other Information</Title>
        </div>

      </div>
    </div>
  );
}

export default Main;
