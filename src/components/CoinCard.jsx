import React from 'react';
import { Link } from 'react-router-dom';
import { VStack, Heading, Text, Image } from '@chakra-ui/react';
const CoinCard = ({ id, name, img, symbol, price, currencySymbol='₹' }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      width={'52'}
      shadow={'lg'}
      padding={'8'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      css={{
        '&:hover': {
          transform: 'scale(1.2)',
        },
      }}
    >
      <Image src={img} w={'10'} h={'10'} objectFit={'contain'} alt={name} />
      <Heading size={'md'} noOfLines={1}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price? `${currencySymbol}${price}` : `NA`}</Text>
    </VStack>
  </Link>
);

export default CoinCard;
