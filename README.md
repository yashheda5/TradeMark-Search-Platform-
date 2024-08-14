# Trademark Search Application

The **Trademark Search Application** is a robust **React** based web app designed to provide comprehensive trademark data retrieval and filtering capabilities. Utilizing React for its dynamic UI, the application integrates Axios for seamless API communication with the **Trademarkia API**, ensuring efficient data fetching and error handling. The user interface is styled with **Tailwind CSS** for a modern and responsive design, and **Postman** is used for testing API endpoints to ensure reliability. The core functionality includes a search feature where users input queries that trigger API requests handled by the **performSearch** function in **api.js**, while the **App.js** component manages state updates, loading indicators, and error messages. The data is displayed in **TrademarkCard** components, which showcase trademark details such as images, names, statuses, and descriptions. Filter options, managed by the **Filter** component, allow users to refine search results by categories like owners, law firms, and attorneys, and the entire system is designed to deliver an intuitive and user-friendly experience.

## Features

* Search Functionality: </br>
Users can perform searches for trademarks by entering specific query terms. The application efficiently handles input by trimming any leading or trailing spaces from the search query to ensure accurate results. It then fetches and displays trademarks that closely match the entered search term, enhancing the search experience by focusing on relevant data.

* Filtering Options: </br>
To further refine search results, users can apply various filters. These include selecting from a list of owners, law firms, and attorneys through checkboxes, allowing for a targeted search based on these entities. Additionally, users can filter results by trademark status, with options such as Registered, Pending, Abandoned, and other statuses, helping users to categorize and view trademarks according to their current processing state.

* Detailed Trademark Information: </br>
 Each trademark entry is presented with comprehensive details. This includes identification of the mark, the current owner, the registration number, registration date, status of the trademark, and a descriptive overview. This thorough information helps users understand each trademark's context and status effectively.
 
* User-Friendly Interface: </br>
The application features a user-friendly interface that makes navigating search results and filters intuitive. The design emphasizes ease of use, ensuring users can effectively interact with the app without encountering difficulties.



## 🎯 Live Demo

Check out the live demo of the app hosted on Vercel:  
[Top Courses Filter & Display App Live Demo](https://top-courses-filter-display-app.vercel.app/)

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
