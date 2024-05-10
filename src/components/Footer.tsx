import { HStack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack my={4} justifyContent='center'>
      <Text>
        Made with 💜 by <a href='https://github.com/immoe' target='_blank'></a>
      </Text>
      <Text fontWeight='bold'>ImMoe</Text>
    </HStack>
  );
};

export default Footer;
