
# NewsUp - Top Headlines App

NewsUp is a React-based web application that displays top headlines across various news categories including business, entertainment, health, science, sports, technology, and general news.

## Features:
- Displays top headlines from different categories.
- Pagination for navigating through pages of news articles.
- Responsive design for mobile and desktop.
- Uses the NewsAPI to fetch real-time news data.
  
## Technologies Used:
- React.js
- Bootstrap 5
- NewsAPI (https://newsapi.org)
- React Router for navigation

## Installation:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/newsup.git
   ```

2. Navigate into the project directory:
   ```
   cd newsup
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your NewsAPI key:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm start
   ```

6. Open the browser and visit:
   ```
   http://localhost:3000
   ```

## File Structure:

```
newsup/
├── src/
│   ├── components/
│   │   ├── NavBar.js           # Navigation bar component
│   │   ├── News.js             # News component to fetch and display news
│   │   ├── NewsItem.js         # Component to display individual news article
│   │   ├── Spinner.js          # Loading spinner component
│   ├── Assets/
│   │   ├── news-logo.png       # NewsUp logo
│   │   ├── spinner.gif         # Spinner image for loading state
│   │   ├── news_img.png        # Default image when no news image is provided
│   ├── Style/
│   │   ├── NavBar.css          # CSS for the NavBar
│   │   ├── News.css            # CSS for the News component
│   │   ├── NewsItem.css        # CSS for individual news items
│   ├── App.js                  # Main App component
│   ├── index.js                # Entry point of the application
├── .env                        # File to store environment variables
├── package.json                # Project metadata and dependencies
└── README.md                   # Project README
```

## Environment Variables:
- `REACT_APP_API_KEY`: Your personal API key from [NewsAPI](https://newsapi.org). You must replace `your_api_key_here` with the actual API key in the `.env` file.

## Usage:

- The homepage (`/`) shows the **General** news by default.
- The other categories can be accessed by clicking on the respective links in the navigation bar: **Business**, **Entertainment**, **Health**, **Science**, **Sports**, **Technology**.
- Pagination is available at the bottom to navigate through news articles.
