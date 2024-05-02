import { Switch, useColorMode } from '@chakra-ui/react';

function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      onChange={() => toggleColorMode()}
      isChecked={colorMode === 'dark'}
    />
  );
}

export default ToggleTheme;
