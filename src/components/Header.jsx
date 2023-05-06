import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
const Header = () => {
  return (
    <HStack p={4} shadow={'base'} bgColor={'blackAlpha.900'} gap={4}>
      <Button variant={'unstyled'} color={'white'}>
        <Link to="/home">Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to="/coins">Coins</Link>
      </Button>
      <div style={{ marginLeft: 'auto' }}>
        <ColorModeSwitcher />
      </div>
    </HStack>
  );
};
export default Header;
