import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/actions';

function Filters() {
  const dispatch = useDispatch();
  const [filters, setFiltersState] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: false,
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleFilterChange = (filterName, value) => {
    setFiltersState({ ...filters, [filterName]: value });
  };

  const applyFilters = () => {
    dispatch(setFilters(filters));
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-item">
        <label>Min Experience:</label>
        <input
          type="number"
          value={filters.minExperience}
          onChange={e => handleFilterChange('minExperience', e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Company Name:</label>
        <input
          type="text"
          value={filters.companyName}
          onChange={e => handleFilterChange('companyName', e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Location:</label>
        <input
          type="text"
          value={filters.location}
          onChange={e => handleFilterChange('location', e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Remote:</label>
        <input
          type="checkbox"
          checked={filters.remote}
          onChange={e => handleFilterChange('remote', e.target.checked)}
        />
      </div>
      <div className="filter-item">
        <label>Tech Stack:</label>
        <input
          type="text"
          value={filters.techStack}
          onChange={e => handleFilterChange('techStack', e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Role:</label>
        <input
          type="text"
          value={filters.role}
          onChange={e => handleFilterChange('role', e.target.value)}
        />
      </div>
      <div className="filter-item">
        <label>Min Base Pay:</label>
        <input
          type="number"
          value={filters.minBasePay}
          onChange={e => handleFilterChange('minBasePay', e.target.value)}
        />
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default Filters;
