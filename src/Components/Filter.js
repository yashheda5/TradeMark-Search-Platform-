import React, { useState } from 'react';

export const Filter = ({ owners, onOwnerChange, onStatusChange }) => {
  const [ownerSearch, setOwnerSearch] = useState('');
  const [activeTab, setActiveTab] = useState('Owners');
  const [activeStatus, setActiveStatus] = useState('All');
  const [checkedOwners, setCheckedOwners] = useState({});

  const handleSearchChange = (e) => {
    setOwnerSearch(e.target.value);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleStatusClick = (status) => {
    setActiveStatus(status);
    onStatusChange(status);
  };

  const handleCheckboxChange = (owner, isChecked) => {
    setCheckedOwners(prevState => ({
      ...prevState,
      [owner]: isChecked
    }));
    onOwnerChange(owner, isChecked);
  };

  const filteredOwners = owners.filter(owner =>
    owner.toLowerCase().includes(ownerSearch.toLowerCase())
  );

  return (
    <div>
      <div className="p-4 mx-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Status</h3>
        <div className="flex flex-wrap gap-2">
          {['All', 'Registered', 'Pending', 'Abandoned', 'Others'].map((status, index) => (
            <button
              key={index}
              onClick={() => handleStatusClick(status)}
              className={`px-4 py-2 border-2 border-solid rounded-[1rem] ${
                activeStatus === status ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white text-black border-gray-300'
              }`}
            >
              {status === 'All' ? (
                status
              ) : (
                <>
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-1 ${
                      status === 'Registered' ? 'bg-green-600' : 
                      status === 'Pending' ? 'bg-yellow-500' : 
                      status === 'Abandoned' ? 'bg-red-600' : 
                      'bg-blue-500'
                    }`}
                  /> 
                  {status}
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mx-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Owners</h3>
        <div className="flex gap-4 mb-4">
          {['Owners', 'Law Firms', 'Attorneys'].map((tab, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                activeTab === tab ? 'text-black font-bold underline' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search Owners"
          value={ownerSearch}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="space-y-2">
          {filteredOwners.map(owner => (
            <label key={owner} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={checkedOwners[owner] || false}
                onChange={(e) => handleCheckboxChange(owner, e.target.checked)}
                className="form-checkbox text-blue-600"
              />
              <span className="text-sm text-gray-700">{owner}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
