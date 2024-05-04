import { useEffect, useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import MovieList from './components/MovieList';
import GenreList from './components/GenreList';
import useMovies from './hooks/useMovies';
import { Movie } from './components/MovieItem';
import Nav from './components/Nav';

const App = () => {
  const { data, error, isLoading } = useMovies();
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setDisplayedMovies(data);
  }, [data]);

  const filterByGenre = (id: number): void => {
    const filteredMovies = data.filter((movie) => movie.genre_ids.includes(id));
    setDisplayedMovies(filteredMovies);
  };

  const filterByName = (input: string): void => {
    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayedMovies(filteredMovies);
  };

  const sortMovies = (by: string): void => {
    if (by === 'Latest') {
      const sortedMovies = [...displayedMovies].sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
      setDisplayedMovies(sortedMovies);
    } else {
      setDisplayedMovies(data);
    }
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "aside footer"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
      padding={5}
    >
      <GridItem area='nav'>
        <Nav onSearchHandler={filterByName} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList onClickHandler={filterByGenre} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <MovieList
          data={displayedMovies}
          error={error}
          isLoading={isLoading}
          onSortHandler={sortMovies}
        />
      </GridItem>
      <GridItem area='footer'></GridItem>
    </Grid>
  );
};

export default App;
