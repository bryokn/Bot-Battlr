import React from 'react';
import { Flex, Input } from '@chakra-ui/react';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <Flex alignItems="center" mt="4">
      <Input
        type="text"
        placeholder="Search bots..."
        onChange={handleChange}
      />
    </Flex>
  );
}

export default SearchBar;
