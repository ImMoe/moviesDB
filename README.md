# Movies DB

Movies DB is a movie discovery web app that helps you find new and interesting movies to watch. With Movies DB, you can search for movies by genre, view trailers, and more.

## Getting Started

To get started with Movies DB, follow these steps:

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Run `npm install` to install the required dependencies.

   ```bash
   npm install
   ```

3. Get an API key from [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api). You'll have to create an account first.

4. Add the API key to `.env` file in the root directory of the project.

   ```
   API_KEY=your_api_key_here
   ```

5. Alternatively, you can directly add the API key to `src/services/api-client.ts` file.

6. Run the development server.

   ```bash
   npm run dev
   ```

7. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to start exploring movies on MovieHub.

## Features

- **Genre Filtering:** Filter movies by genre to discover the ones you're interested in.
- **Trailers:** Watch trailers directly on MovieHub to get a glimpse of the movie.
- **Search:** Search for movies by title to quickly find what you're looking for.

## Contributing

We welcome contributions to Movies DB! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.
