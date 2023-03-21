import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from 'expo-router';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native';

const users: {name: string}[] = [
  {name: 'bob'},
  {name: 'dave'},
  {name: 'jerry'},
];

export default function TabTwo() {
  const renderItem: ListRenderItem<{name: string}> = ({item, index}) => (
    <Link
      href={{
        pathname: '/tabs/[user]',
        params: {
          name: item.name,
        },
      }}
      style={styles.subTitle}
    >
      {item.name}
    </Link>
  );

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Stack.Screen options={{title: 'Tab Two'}} />
      <View>
        <Text style={styles.title}>Tab Two</Text>
        <Text style={[styles.subTitle, {marginBottom: 40}]}>
          Press one for dynamic route
        </Text>
      </View>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 60, fontWeight: '700'},
  subTitle: {fontSize: 18, lineHeight: 26},
});
