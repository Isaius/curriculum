import './styles.scss'

interface jobRegistryProps {
  startDate: string
  endDate?: string
  jobPosition: string
  jobDescripton: string
}


function JobRegistry(  { startDate, endDate, jobDescripton, jobPosition } : jobRegistryProps) {

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

export default JobRegistry;
