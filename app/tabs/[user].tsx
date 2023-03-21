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
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View>
        <Stack.Screen options={{title: 'User screen'}} />
        <TouchableOpacity
          onPress={() => {
            route.back();
          }}
        >
          <Text style={styles.title}>⬅️Go back</Text>
        </TouchableOpacity>
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
