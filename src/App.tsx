import { Grid, GridItem, HStack, Image } from '@chakra-ui/react';
import ToggleTheme from './components/ToggleTheme';
import Logo from './assets/popcorn.png';
import MovieList from './components/MovieList';
import GenreList from './components/GenreList';
import useMovies from './hooks/useMovies';

const App = () => {
  const { data, error, isLoading } = useMovies();
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
        <HStack justifyContent='space-between'>
          <Image src={Logo} boxSize={16} />
          <ToggleTheme />
        </HStack>
      </GridItem>
      <GridItem area='aside'>
        <GenreList movies={data} />
      </GridItem>
      <GridItem area='main'>
        <MovieList data={data} error={error} isLoading={isLoading} />
      </GridItem>
      <GridItem area='footer'></GridItem>
    </Grid>
  );
};

export default App;
