import axios from 'axios';

export const performSearch = async (query) => {
  const defaultQuery = {
    "input_query": query,
    "input_query_type": "",
    "sort_by": "default",
    "status": [],
    "exact_match": false,
    "date_query": false,
    "owners": [],
    "attorneys": [],
    "law_firms": [],
    "mark_description_description": [],
    "classes": [],
    "page": 1,
    "rows": 10,
    "sort_order": "desc",
    "states": [],
    "countries": [],
    "attorney_name": [],
  };

  try {
    const response = await axios.post('https://vit-tm-task.api.trademarkia.app/api/v3/us', defaultQuery);
    
    console.log(response.data.body);
    return response.data.body.hits.hits; // Extract the hits array
  } catch (error) {
    throw error;
  }
};
