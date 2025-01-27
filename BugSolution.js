import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: 1, name: 'Item 1', details: { subItem: 'Subitem 1' } },
  { id: 2, name: 'Item 2', details: null },
  { id: 3, name: 'Item 3', details: { subItem: 'Subitem 3' } },
];

const BugSolution = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.details?.subItem || 'No subitem'}</Text> 
    </View>
  );

  return (
    <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
  );
};

export default BugSolution;