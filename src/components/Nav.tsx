import { HStack, Image, Input } from '@chakra-ui/react';
import ToggleTheme from '../components/ToggleTheme';
import Logo from '../assets/popcorn.png';

interface Props {
  onSearchHandler: (input: string) => void;
}

const Nav = ({ onSearchHandler }: Props) => {
  return (
    <HStack justifyContent='space-between'>
      <Image src={Logo} boxSize={16} />
      <Input
        placeholder='Search and find movies by name...'
        marginX={5}
        fontSize='md'
        onChange={(event) => onSearchHandler(event.target.value)}
      />
      <ToggleTheme />
    </HStack>
  );
};

export default Nav;
