import { Grid, GridItem, HStack } from '@chakra-ui/react';
import ToggleTheme from './components/ToggleTheme';

const App = () => {
  return (
    <Grid templateAreas={`"header header" "aside main" "aside footer"`}>
      <GridItem>
        <HStack>
          <ToggleTheme />
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default App;
