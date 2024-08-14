# Trademark Search Application

The **Trademark Search Application** is a robust **React** based web app designed to provide comprehensive trademark data retrieval and filtering capabilities. Utilizing React for its dynamic UI, the application integrates Axios for seamless API communication with the **Trademarkia API**, ensuring efficient data fetching and error handling. The user interface is styled with **Tailwind CSS** for a modern and responsive design, and **Postman** is used for testing API endpoints to ensure reliability. The core functionality includes a search feature where users input queries that trigger API requests handled by the **performSearch** function in **api.js**, while the **App.js** component manages state updates, loading indicators, and error messages. The data is displayed in **TrademarkCard** components, which showcase trademark details such as images, names, statuses, and descriptions. Filter options, managed by the **Filter** component, allow users to refine search results by categories like owners, law firms, and attorneys, and the entire system is designed to deliver an intuitive and user-friendly experience.

## Features

* Search Execution: </br>
Users initiate the process by entering a search term into the input field. The application then trims any unnecessary spaces from the query to ensure precision. This refined query is sent through the performSearch function, which interacts with the Trademarkia API to fetch relevant trademark data.

* Filtering Mechanism: </br>
Once the data is retrieved, users can further refine their search results using various filters. These filters allow selection by owners, law firms, attorneys, and trademark status (such as Registered, Pending, or Abandoned). Users interact with checkboxes to apply these filters, making it easier to narrow down results according to specific criteria.

* Display of Trademark Details: </br>
The application then presents the filtered trademark data in a card format. Each card displays key details including the mark identification, owner information, registration number, registration date, status, and a brief description. This structured display ensures that users have a clear understanding of each trademark.
 
* User Interaction: </br>
The interface is designed to be straightforward and user-friendly. Users can easily navigate through search results and apply filters without encountering any complex interactions, making the entire process smooth and intuitive.

## Project Structure

├── src
│   ├── Components
│   │   ├── Search.js
│   │   ├── Filter.js
│   │   ├── Cards.js
│   │   ├── Card.js
│   │   ├── Image.js
│   │   ├── Details.js
│   │   ├── Description.js
│   │   ├── Status.js
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   └── index.js



## 🎯 Live Demo

Check out the live demo of the app hosted on Vercel:  
[Trademark Search Application Live Demo](https://trademark-search-application.vercel.app/)

## 📦 Direct Download

Download the latest version of the project as a ZIP file:  
[Download ZIP](https://github.com/yashheda5/Trademark-Search-Application/archive/refs/heads/main.zip)

## 🚀 Getting Started

To set up the project locally, follow these steps:

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```sh
   git clone https://github.com/yashheda5/Trademark-Search-Application.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd trademark-search-app
    ```

3. **Install the required packages:**
    ```sh
    npm install
    ```

4. **Start the development server:**
    ```sh
    npm run start
    ```

5. **Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project**.

6. **To build the app for production, run:**
    ```sh
    npm run build
    ```

## 🤝 Contributing

We welcome contributions to this project! If you have suggestions, improvements, or find any issues, please open an issue or submit a pull request.
