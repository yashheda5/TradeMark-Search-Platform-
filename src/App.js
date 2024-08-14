import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Cards } from './Components/Cards';
import { Filter } from './Components/Filter';
import { Spinner } from './Components/Spinner';
import { performSearch } from './Components/api';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState('');
  const [selectedOwners, setSelectedOwners] = useState([]);
  const [selectedLawFirms, setSelectedLawFirms] = useState([]);
  const [selectedAttorneys, setSelectedAttorneys] = useState([]);
  const [activeStatus, setActiveStatus] = useState('All');
  const [query, setQuery] = useState('nike');
  const [owners, setOwners] = useState([]);
  const [lawFirms, setLawFirms] = useState([]);
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await performSearch(query);
        console.log('Filtered Results:', results); // Log results to inspect structure

        // Extract unique values for filters
        const uniqueOwners = Array.from(new Set(results.map(item => item._source?.current_owner).filter(owner => owner)));
        const uniqueLawFirms = Array.from(new Set(results.map(item => item._source?.law_firm).filter(lawFirm => lawFirm)));
        const uniqueAttorneys = Array.from(new Set(results.map(item => item._source?.attorney_name).filter(attorney => attorney)));

        setOwners(uniqueOwners);
        setLawFirms(uniqueLawFirms);
        setAttorneys(uniqueAttorneys);

        const newFilteredData = filterData(results);

        if (newFilteredData.length > 0) {
          setFilteredData(newFilteredData);
          setSearchNotFound('');
        } else {
          setSearchNotFound(`No results found for "${query}". The trademark may be available.`);
          setFilteredData([]);
        }
      } catch (error) {
        setSearchNotFound('An error occurred while fetching data.');
        setFilteredData([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [query, selectedOwners, selectedLawFirms, selectedAttorneys, activeStatus]);

  const filterData = (data) => {
    return data.filter(item => {
      const lowerCaseQuery = query.toLowerCase();
      const { mark_identification = '', current_owner = '', law_firm = '', attorney_name = '', registration_number = '', mark_description = {}, status_type = '' } = item._source || {};
      const descriptions = mark_description.mark_description_description || []; // Adjusted to correct property

      return (
        (mark_identification.toLowerCase().includes(lowerCaseQuery) ||
          current_owner.toLowerCase().includes(lowerCaseQuery) ||
          (law_firm || '').toLowerCase().includes(lowerCaseQuery) ||
          (attorney_name || '').toLowerCase().includes(lowerCaseQuery) ||
          registration_number.toLowerCase().includes(lowerCaseQuery) ||
          descriptions.some(desc => desc.toLowerCase().includes(lowerCaseQuery))) &&
        (selectedOwners.length === 0 || selectedOwners.includes(current_owner)) &&
        (selectedLawFirms.length === 0 || selectedLawFirms.includes(law_firm)) &&
        (selectedAttorneys.length === 0 || selectedAttorneys.includes(attorney_name)) &&
        (activeStatus === 'All' || status_type.toLowerCase() === activeStatus.toLowerCase())
      );
    });
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleFilterChange = (owners, lawFirms, attorneys, status) => {
    setSelectedOwners(owners);
    setSelectedLawFirms(lawFirms);
    setSelectedAttorneys(attorneys);
    setActiveStatus(status);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearch} />
      <div className="mt-4 flex w-full">
        <div className="w-3/4 pr-4">
          {loading ? (
            <Spinner />
          ) : (
            searchNotFound ? (
              <div className="p-4 text-red-500 font-semibold">{searchNotFound}</div>
            ) : (
              <Cards data={filteredData} />
            )
          )}
        </div>
        <div className="w-1/4 pl-4">
          <Filter 
            owners={owners} 
            lawFirms={lawFirms}
            attorneys={attorneys}
            onFilterChange={handleFilterChange} 
            onStatusChange={handleStatusChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
