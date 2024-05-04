import { Box, HStack, Text, Select } from '@chakra-ui/react';

interface Props {
  options: String[];
  defaultOption: string;
  onSortHandler: (by: string) => void;
}

const Sort = ({ options, defaultOption, onSortHandler }: Props) => {
  return (
    <Box>
      <HStack>
        <Text>Sort by</Text>
        <Select
          width={150}
          onChange={(event) => onSortHandler(event.target.value)}
        >
          <option>{defaultOption}</option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </Select>
      </HStack>
    </Box>
  );
};

export default Sort;
