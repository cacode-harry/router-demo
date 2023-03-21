import {Link, Tabs} from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the dynamic route.
        name='[user]'
        options={{href: null}}
      />
    </Tabs>
  );
}
