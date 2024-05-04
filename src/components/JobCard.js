import React, { useState } from 'react';

function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>
        Description: {expanded ? job.description : `${job.description.slice(0, 100)}...`}
        <button onClick={toggleExpanded}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      </p>
      <p>Experience Required: {job.experience}</p>
      <button>Apply</button>
    </div>
  );
}

export default JobCard;
