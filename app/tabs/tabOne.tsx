import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {Link, Stack} from 'expo-router';

export default function TabOne() {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <View>
        <Stack.Screen options={{title: 'Tab One'}} />
        <Text style={styles.title}>Tab One</Text>
        <Text style={styles.subTitle}>Tab one text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 60, fontWeight: '700'},
  subTitle: {fontSize: 18, marginBottom: 40, lineHeight: 26},
});
