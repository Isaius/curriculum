import { JobRegistry, Sidebar, Title } from "../components";
import './styles.scss';

function Main() {
  const job = {
      startDate: "1/1/2021",
      jobDescripton: "test",
      jobPosition: "Gardner"
    }

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

          <JobRegistry job={job}/>
        </div>

        <div className="history">
          <Title color="black">Other Information</Title>
        </div>

      </div>
    </div>
  );
}

export default Main;
