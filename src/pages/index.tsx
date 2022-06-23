import JobRegistry from "../components/JobRegistry";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

import './styles.scss';

function Main() {
  return (
    <div className="main">
      <Sidebar />

      <div className="content">
        <div className="name-container">
          <h1>Isaias Carvalho</h1>
        </div>

        <div className="history">
          <Title color="black">
            <h2>Professional Experience</h2>
          </Title>

          <JobRegistry startDate="1/1/2021" jobDescripton="Test" jobPosition="Gardner"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
