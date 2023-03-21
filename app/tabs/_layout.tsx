import {Link, Tabs} from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs initialRouteName='tabOne'>
      <Tabs.Screen name='tabOne' />
      <Tabs.Screen
        // Name of the dynamic route.

        name='[user]'
        options={{href: null}}
      />
    </Tabs>
  );
}
