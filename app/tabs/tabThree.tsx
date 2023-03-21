import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function TabThree() {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View>
        <Stack.Screen options={{title: 'tabTwo'}} />
        <Text style={styles.title}>Tab Three</Text>
        <Text style={styles.subTitle}>Tab Three text</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 60, fontWeight: '700'},
  subTitle: {fontSize: 18, marginBottom: 40, lineHeight: 26},
});
