import { HStack, Image, Input } from '@chakra-ui/react';
import ToggleTheme from '../components/ToggleTheme';
import Logo from '../assets/popcorn.png';

const Nav = () => {
  return (
    <HStack justifyContent='space-between'>
      <Image src={Logo} boxSize={16} />
      <Input
        placeholder='Search and find movies by name...'
        marginX={5}
        fontSize='md'
      />
      <ToggleTheme />
    </HStack>
  );
};

export default Nav;
