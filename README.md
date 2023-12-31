<h1 align="center">CineVerse App</h1>

The CineVerse App is a movie database site that fetches information from the TMDB database. It provides detailed information about movies and TV shows, including cast, description, and videos.

## Features
- Browse a vast collection of movies and TV shows
- View detailed information about each movie or TV show, including cast, description, and videos
- Search for specific movies or TV shows
- Responsive design for optimal viewing on different devices
<!-- - Sort and filter movies or TV shows based on various criteria -->

## Technologies Used
   - React
   - JavaScript (nodejs)
   - TMDB API
   - SCSS
   - Bootstrap

## Installation
### Prerequisites

Before you begin, ensure that you have the following software installed on your system:

- Node.js (version >= 14.x)
- npm (Node Package Manager) 

To run the CineVerse App locally, follow these steps:

### Client

1. Clone the repository locally: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the client development server: `npm run dev`
4. Open your browser and visit http://localhost:5173

For the website to work normally, you would need to login on to TMDB to generate the API token, required to fetch the data.

### API
1. Obtain a TMDB API key and token:
    - Sign up for an account on the TMDB website and fill out the required form.
    - Generate an API key and token in the account settings.
    - Copy the API key and token.
![tmdb api](./SiteDemo/tmdb%20api.jpg)

2. Configure the TMDB API key and token:
   - Create a `.env` file in the root directory of the project.
   - Add the following lines to the `.env` file:

  ```
  VITE_APP_TMDB_API_KEY=<your-api-key>
  VITE_APP_TMDB_TOKEN=<your-token>
  VITE_APP_BASE_URL=<url mentioned along with API key>
  ```
![example .env file](./SiteDemo/env.png)

3. After updating the env file, restart the server and visit http://localhost:5173


## Screenshots/Demo
Watch site demo [here](https://clipchamp.com/watch/HQkgMLMnGOT)

- **Header for the website**

![navbar](./SiteDemo/Header.png)

- **Trending Section: You can see all the content trending sort by week/day**

![trending](./SiteDemo/Trending.png)

- **By clicking on movie item, you will land on specific movie page displaying all details**

![Movie Detail](./SiteDemo/detail.png)

- **Cast and Related video for the movie**
  
![video](./SiteDemo/video.png)

- **Recommandations section**
  
![recommandations](./SiteDemo/recommandations.png)

- **You can also search for any movie, tv show you want to watch**
  
![Search](./SiteDemo/Search.png)

- **Search Results**
  
![search result](./SiteDemo/Search%20Result.png)

- **TopRated Section in homepage**
  
![toprated](./SiteDemo/TopRated.png)

- **Explore Movies/ Explore Tv Shows**
  
![explore movie](./SiteDemo/exploremovie.png)
![explore tv](./SiteDemo/exploretv.png)

- **Footer Section**
  
![Footer](./SiteDemo/footer.png)


## Credits
Resources that i used while working on this project:
- ChatGPT by OpenAI
- TMDB Documentation


## License
This is a personal project, not for commercial use. The design is original, and any resemblance is unintentional and I apologize for the same.
