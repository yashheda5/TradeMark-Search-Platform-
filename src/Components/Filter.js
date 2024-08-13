import React, { useState, useEffect } from 'react';

export const Filter = ({ owners, lawFirms, attorneys, onFilterChange, onStatusChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Owners');
  const [activeStatus, setActiveStatus] = useState('All');
  const [checkedItems, setCheckedItems] = useState({
    Owners: [],
    'Law Firms': [],
    Attorneys: []
  });

  useEffect(() => {
    onFilterChange(
      checkedItems.Owners,
      checkedItems['Law Firms'],
      checkedItems.Attorneys,
      activeStatus
    );
  }, [checkedItems, activeStatus, onFilterChange]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setSearchQuery(''); // Clear search on tab change
  };

  const handleStatusClick = (status) => {
    setActiveStatus(status);
    onStatusChange(status);
  };

  const handleCheckboxChange = (item) => {
    setCheckedItems(prevState => {
      const updatedList = prevState[activeTab].includes(item)
        ? prevState[activeTab].filter(i => i !== item)
        : [...prevState[activeTab], item];
      
      return {
        ...prevState,
        [activeTab]: updatedList
      };
    });
  };

  const filteredItems = (activeTab === 'Owners' ? owners :
                        activeTab === 'Law Firms' ? lawFirms :
                        attorneys).filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
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
              {status === 'All' ? status :
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
              }
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mx-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{activeTab}</h3>
        <div className="flex gap-4 mb-4">
          {['Owners', 'Law Firms', 'Attorneys'].map((tab, index) => (
            <span
              key={index}
              className={`cursor-pointer ${activeTab === tab ? 'text-black font-bold underline' : 'text-gray-600'}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={`Search ${activeTab.toLowerCase()}`}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
        />
        <div className="max-h-60 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <label key={index} className="block mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={checkedItems[activeTab].includes(item)}
                onChange={() => handleCheckboxChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
