import React from 'react'
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import Main from '../screens/Main';
import Header from '../components/Header';
import ExerciseRepoStack from './ExerciseRepoStack';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
        initialRouteName="Main"
        //drawerContent={navigation => <DrawerContent {...navigation} />}
        screenOptions={({ route }) => ({
          drawerStyle: styles.drawer,
          swipeEdgeWidth: 200,
          headerTitle: () => <Header route={route} />,
          headerStyle: styles.header,
          headerLeft: () => <DrawerToggleButton tintColor="#CCCCCC" />,
          drawerActiveTintColor: "#CC9B6D",
          drawerInactiveTintColor: "#CCCCCC"
        })}
      >
        <Drawer.Screen name="Main" component={Main} options={{ title: "Home" }} />
        <Drawer.Screen name="ExerciseRepoStack" component={ExerciseRepoStack} options={{ title: "Exercise Library" }} />
        <Drawer.Screen name="Profile" component={Profile} options={{ title: "Profile" }} />
      </Drawer.Navigator>
    )
}

export default AppStack;

const styles = StyleSheet.create({
    drawer: {
      width: "66%",
      backgroundColor: '#333333'
    },
    header: {
      backgroundColor: '#333333',
      borderBottomColor: '#CC9B6D',
      borderBottomWidth: 3
    }
});