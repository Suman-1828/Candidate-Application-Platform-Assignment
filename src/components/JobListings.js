// JobListings.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../redux/actions';
import JobCard from './JobCard';

function JobListings() {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(state => state.jobs);

  console.log("Jobs:", jobs); // Add this line for debugging

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {Array.isArray(jobs) && jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobListings;
