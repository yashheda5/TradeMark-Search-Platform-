import React, { useState, useEffect } from 'react';
import './App.css';
import { Search } from './Components/Search';
import { Cards } from './Components/Cards';
import { Filter } from './Components/Filter';
import { Spinner } from './Components/Spinner';
import data from './Components/data'; // Import default export

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchNotFound, setSearchNotFound] = useState('');
  const [selectedOwners, setSelectedOwners] = useState([]);
  const [selectedLawFirms, setSelectedLawFirms] = useState([]);
  const [selectedAttorneys, setSelectedAttorneys] = useState([]);
  const [activeStatus, setActiveStatus] = useState('All');
  const [query, setQuery] = useState('');
  const [owners, setOwners] = useState([]);
  const [lawFirms, setLawFirms] = useState([]);
  const [attorneys, setAttorneys] = useState([]);

  useEffect(() => {
    setFilteredData(data.hits.hits);

    const uniqueOwners = Array.from(new Set(data.hits.hits.map(item => item.source.current_owner)));
    const uniqueLawFirms = Array.from(new Set(data.hits.hits.map(item => item.source.law_firm || '')));
    const uniqueAttorneys = Array.from(new Set(data.hits.hits.map(item => item.source.attorney_name || '')));

    setOwners(uniqueOwners);
    setLawFirms(uniqueLawFirms.filter(lawFirm => lawFirm)); // Filter out empty strings
    setAttorneys(uniqueAttorneys.filter(attorney => attorney)); // Filter out empty strings
  }, []);

  useEffect(() => {
    const filterData = (data, searchQuery, selectedOwners, selectedLawFirms, selectedAttorneys, status) => {
      return data.filter(item => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const markIdentification = item.source.mark_identification.toLowerCase();
        const currentOwner = item.source.current_owner.toLowerCase();
        const lawFirm = item.source.law_firm?.toLowerCase() || '';
        const attorney = item.source.attorney_name?.toLowerCase() || '';
        const registrationNumber = item.source.registration_number.toLowerCase();
        const descriptions = item.source.mark_description?.description || [];

        return (
          (markIdentification.includes(lowerCaseQuery) ||
            currentOwner.includes(lowerCaseQuery) ||
            lawFirm.includes(lowerCaseQuery) ||
            attorney.includes(lowerCaseQuery) ||
            registrationNumber.includes(lowerCaseQuery) ||
            descriptions.some(desc => desc.toLowerCase().includes(lowerCaseQuery))) &&
          (selectedOwners.length === 0 || selectedOwners.includes(currentOwner)) &&
          (selectedLawFirms.length === 0 || selectedLawFirms.includes(lawFirm)) &&
          (selectedAttorneys.length === 0 || selectedAttorneys.includes(attorney)) &&
          (status === 'All' || item.source.status_type.toLowerCase() === status.toLowerCase())
        );
      });
    };

    const newFilteredData = filterData(data.hits.hits, query, selectedOwners, selectedLawFirms, selectedAttorneys, activeStatus);

    if (newFilteredData.length > 0) {
      setFilteredData(newFilteredData);
    } else {
      setSearchNotFound(`No results found for "${query}". The trademark may be available.`);
      setFilteredData([]);
    }

    setLoading(false);
  }, [query, selectedOwners, selectedLawFirms, selectedAttorneys, activeStatus]);

  const handleSearch = (searchQuery) => {
    setLoading(true);
    setSearchNotFound('');
    setQuery(searchQuery);
  };

  const handleOwnerChange = (owner, isChecked) => {
    const updatedOwners = isChecked
      ? [...selectedOwners, owner]
      : selectedOwners.filter(o => o !== owner);

    setSelectedOwners(updatedOwners);
    handleSearch(query);
  };

  const handleLawFirmChange = (lawFirm, isChecked) => {
    const updatedLawFirms = isChecked
      ? [...selectedLawFirms, lawFirm]
      : selectedLawFirms.filter(lf => lf !== lawFirm);

    setSelectedLawFirms(updatedLawFirms);
    handleSearch(query);
  };

  const handleAttorneyChange = (attorney, isChecked) => {
    const updatedAttorneys = isChecked
      ? [...selectedAttorneys, attorney]
      : selectedAttorneys.filter(at => at !== attorney);

    setSelectedAttorneys(updatedAttorneys);
    handleSearch(query);
  };

  const handleStatusChange = (status) => {
    setActiveStatus(status);
    handleSearch(query);
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
    handleSearch(newQuery);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleQueryChange} />
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
            onOwnerChange={handleOwnerChange} 
            onLawFirmChange={handleLawFirmChange} 
            onAttorneyChange={handleAttorneyChange} 
            onStatusChange={handleStatusChange} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
