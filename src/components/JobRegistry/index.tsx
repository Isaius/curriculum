import './styles.scss'

interface Job {
  startDate: string
  endDate?: string
  jobPosition: string
  jobDescripton: string
}

interface JobProps {
  job: Job
}

function JobRegistry({ job: { jobDescripton, jobPosition, startDate, endDate }} : JobProps) {

  return (
    <div className="job-registry">
      <div className="job-duration">
        <span className="start">
          <label className="start-label">From:</label>
          <p className="date">{ startDate }</p>
        </span>

        <span className="end">
          <label className="end-label">Until:</label>
          <p className="date">{ endDate }</p>
        </span>
      </div>

      <div className="job-details">
        <span className="job-position">
          <strong>{ jobPosition }</strong>
        </span>
        <div className="job-description">
          { jobDescripton }
        </div>
      </div>
    </div>
  );
}

export { Job, JobRegistry };