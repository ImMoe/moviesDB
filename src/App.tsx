import { useEffect, useState } from 'react';
import { Button, Grid, GridItem, Show } from '@chakra-ui/react';
import MovieList from './components/MovieList';
import GenreList from './components/GenreList';
import { Movie } from './components/MovieItem';
import Nav from './components/Nav';
import Modal from './components/Modal';
import useMovies from './hooks/useMovies';
import apiService from './services/api-service';

const App = () => {
  const { data, error, isLoading } = useMovies();
  const [displayedMovies, setDisplayedMovies] = useState<Movie[] | undefined>(
    data
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState<{
    name: string;
    key: string;
  }>({ name: '', key: '' });

  useEffect(() => {
    setDisplayedMovies(data);
  }, [data]);

  function filterMovies<B extends String, V extends string | number>(
    by: B,
    value: V
  ) {
    let filteredMovies;
    switch (by.toLowerCase()) {
      case 'genre':
        filteredMovies = data?.filter((movie) =>
          movie.genre_ids.includes(+value)
        );
        return setDisplayedMovies(filteredMovies);
      case 'name':
        filteredMovies = data?.filter((movie) =>
          movie.title.toLowerCase().includes(String(value).toLowerCase())
        );
        return setDisplayedMovies(filteredMovies);
    }
  }

  const sortMovies = (by: string): void => {
    if (by === 'Latest') {
      const sortedMovies = displayedMovies
        ? [...displayedMovies].sort(
            (a, b) =>
              new Date(b.release_date).getTime() -
              new Date(a.release_date).getTime()
          )
        : [];
      setDisplayedMovies(sortedMovies);
    } else {
      setDisplayedMovies(data);
    }
  };

  const fetchVideoTrailer = (movieID: number) => {
    apiService
      .get<{ results: { name: string; key: string }[] }>(
        `/movie/${movieID}/videos`
      )
      .then((res) => {
        const selectedTrailer = res.data.results.filter(
          (trailer) => trailer.name.toLowerCase() === 'official trailer'
        )[0];
        setModalOpen(true);
        setSelectedTrailer(selectedTrailer);
      })
      .catch((error) => console.log(error));
  };

  const onModalClose = () => {
    setModalOpen(false);
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
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          movieName={selectedTrailer?.name}
          movieKey={selectedTrailer?.key}
          onModalClose={onModalClose}
        />
      )}
      <GridItem area='nav'>
        <Nav onSearchHandler={filterMovies} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList onClickHandler={filterMovies} />
          <Button variant='link' onClick={() => setDisplayedMovies(data)}>
            Reset filter
          </Button>
        </GridItem>
      </Show>
      <GridItem area='main'>
        <MovieList
          data={displayedMovies ? displayedMovies : []}
          error={error ? error?.message : ''}
          isLoading={isLoading}
          onSortHandler={sortMovies}
          onShowTrailer={fetchVideoTrailer}
        />
      </GridItem>
      <GridItem area='footer'></GridItem>
    </Grid>
  );
};

export default App;
