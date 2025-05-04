import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors"
import { Platform } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#666666',
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: Colors.background,
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          android: {
            backgroundColor: Colors.background,
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            height: 60,
            paddingBottom: 4,
            paddingTop: 4,
          },
        }),
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTitleStyle: {
          color: Colors.text,
          fontSize: 18,
          fontWeight: 'bold',
        },
        headerTintColor: Colors.text,
        tabBarHideOnKeyboard: true,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          headerTitle: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="matches/index"
        options={{
          title: 'Partidas',
          headerTitle: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="gamepad" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          title: 'Chat',
          headerTitle: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Perfil',
          headerTitle: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}