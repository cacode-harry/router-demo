import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function App() {
  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <View>
        <Stack.Screen options={{title: 'Welcome'}} />
        <Text style={styles.title}>CarbonCode</Text>
        <Text style={styles.subTitle}>Now With Expo Router</Text>
        <Link href='/tabs' asChild>
          <Button title='Show Me!' />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 60, fontWeight: '700'},
  subTitle: {fontSize: 18, marginBottom: 40},
});
