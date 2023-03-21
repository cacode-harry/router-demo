import {Link, Tabs} from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs initialRouteName='Tab One'>
      <Tabs.Screen
        // Name of the dynamic route.
        name='[user]'
        options={{href: null}}
      />
    </Tabs>
  );
}
