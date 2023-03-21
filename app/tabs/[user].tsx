import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {
  Link,
  Stack,
  usePathname,
  useRouter,
  useSearchParams,
} from 'expo-router';
import {ListRenderItem} from 'react-native';
import {FlatList} from 'react-native';

const users: {name: string}[] = [
  {name: 'bob'},
  {name: 'dave'},
  {name: 'jerry'},
];

export default function User() {
  const route = useRouter();

  const {name} = useSearchParams();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          route.back();
        }}
      >
        <Text>⬅️Go back</Text>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Stack.Screen options={{title: 'User screen'}} />
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.subTitle, {marginBottom: 40}]}>
          Press one for dynamic route
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 60, fontWeight: '700'},
  subTitle: {fontSize: 18, lineHeight: 26},
});
