import 'react-native-gesture-handler';

// In App.js in a new project

// import * as React from 'react';
import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// export default App;
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen0(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen0</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('Home1')}
      />
    </View>
  );
}
function HomeScreen1(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen1</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('Home0')}
      />
    </View>
  );
}
function HomeScreen3(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen3</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('Home2')}
      />
    </View>
  );
}
function HomeScreen2(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen2</Text>
      <Button
        title="Go to About"
        onPress={() => props.navigation.navigate('Home3')}
      />
    </View>
  );
}

// function Check(props) {
//   return <Text>{JSON.stringify(props)}</Text>;
// }

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home1" component={HomeScreen1} />
      <Stack.Screen name="Home2" component={HomeScreen2} />
      <Stack.Screen name="Home3" component={HomeScreen3} />
      <Stack.Screen name="Home0" component={HomeScreen0} />
      <Stack.Screen name="Home5" component={HomeScreen0} />
      <Stack.Screen name="Home6" component={HomeScreen0} />
      <Stack.Screen name="Home7" component={HomeScreen0} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Stacks" component={Stacks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
