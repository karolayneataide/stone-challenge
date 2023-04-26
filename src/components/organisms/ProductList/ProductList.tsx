import { ProductCard } from '@molecules';
import React from 'react';
import { FlatList } from 'react-native';
import { ProductListProps } from './ProductList.props';

const ProductList = ({ products }: ProductListProps) => (
  <FlatList
    data={products}
    renderItem={({ item }) => <ProductCard {...item} />}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
  />
);

export default ProductList;
