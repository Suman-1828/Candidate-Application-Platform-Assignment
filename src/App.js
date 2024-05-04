import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobListings from './components/JobListings';
import Filters from './components/Filters';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Filters />
        <JobListings />
      </div>
    </Provider>
  );
}

export default App;
