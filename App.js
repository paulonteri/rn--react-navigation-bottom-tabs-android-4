import 'react-native-gesture-handler';

// In App.js in a new project

// import * as React from 'react';
// import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function HomeScreen0(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>HomeScreen0</Text>
//       <Button
//         title="Go to About"
//         onPress={() => props.navigation.navigate('Home1')}
//       />
//     </View>
//   );
// }
// function HomeScreen1(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>HomeScreen1</Text>
//       <Button
//         title="Go to About"
//         onPress={() => props.navigation.navigate('Home0')}
//       />
//     </View>
//   );
// }
// function HomeScreen3(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>HomeScreen3</Text>
//       <Button
//         title="Go to About"
//         onPress={() => props.navigation.navigate('Home2')}
//       />
//     </View>
//   );
// }
// function HomeScreen2(props) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>HomeScreen2</Text>
//       <Button
//         title="Go to About"
//         onPress={() => props.navigation.navigate('Home3')}
//       />
//     </View>
//   );
// }

// function Check(props) {
//   return <Text>{JSON.stringify(props)}</Text>;
// }

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home1" component={HomeScreen1} />
//         <Stack.Screen name="Home2" component={HomeScreen2} />
//         <Stack.Screen name="Home3" component={HomeScreen3} />
//         <Stack.Screen name="Home0" component={HomeScreen0} />
//         <Stack.Screen name="Home5" component={HomeScreen0} />
//         <Stack.Screen name="Home6" component={HomeScreen0} />
//         <Stack.Screen name="Home7" component={HomeScreen0} />
//         <Stack.Screen name="Home8" component={HomeScreen0} />
//         <Stack.Screen name="Home9" component={HomeScreen0} />
//         <Stack.Screen name="Home10" component={HomeScreen0} />
//         <Stack.Screen name="Home11" component={HomeScreen0} />
//         <Stack.Screen name="Home12" component={HomeScreen0} />
//         <Stack.Screen name="Home13" component={HomeScreen0} />
//         <Stack.Screen name="Home14" component={HomeScreen0} />
//         <Stack.Screen name="Home15" component={HomeScreen0} />
//         <Stack.Screen name="Home16" component={HomeScreen0} />
//         <Stack.Screen name="Home17" component={HomeScreen0} />
//         <Stack.Screen name="Home18" component={HomeScreen0} />
//         <Stack.Screen name="Home19" component={HomeScreen0} />
//         <Stack.Screen name="Home20" component={HomeScreen0} />
//         <Stack.Screen name="Home21" component={HomeScreen0} />
//         <Stack.Screen name="Home22" component={HomeScreen0} />
//         <Stack.Screen name="Home23" component={HomeScreen0} />
//         <Stack.Screen name="Home24" component={HomeScreen0} />
//         <Stack.Screen name="Home25" component={HomeScreen0} />
//         <Stack.Screen name="Home26" component={HomeScreen0} />
//         <Stack.Screen name="Home27" component={HomeScreen0} />
//         <Stack.Screen name="Home28" component={HomeScreen0} />
//         <Stack.Screen name="Home29" component={HomeScreen0} />
//         <Stack.Screen name="Home30" component={HomeScreen0} />
//         <Stack.Screen name="Home31" component={HomeScreen0} />
//         <Stack.Screen name="Home32" component={HomeScreen0} />
//         <Stack.Screen name="Home33" component={HomeScreen0} />
//         <Stack.Screen name="Home34" component={HomeScreen0} />
//         <Stack.Screen name="Home35" component={HomeScreen0} />
//         <Stack.Screen name="Home36" component={HomeScreen0} />
//         <Stack.Screen name="Home37" component={HomeScreen0} />
//         <Stack.Screen name="Home38" component={HomeScreen0} />
//         <Stack.Screen name="Home39" component={HomeScreen0} />
//         <Stack.Screen name="Home40" component={HomeScreen0} />
//         <Stack.Screen name="Home41" component={HomeScreen0} />
//         <Stack.Screen name="Home42" component={HomeScreen0} />
//         <Stack.Screen name="Home43" component={HomeScreen0} />
//         <Stack.Screen name="Home44" component={HomeScreen0} />
//         <Stack.Screen name="Home45" component={HomeScreen0} />
//         <Stack.Screen name="Home46" component={HomeScreen0} />
//         <Stack.Screen name="Home47" component={HomeScreen0} />
//         <Stack.Screen name="Home48" component={HomeScreen0} />
//         <Stack.Screen name="Home49" component={HomeScreen0} />
//       </Stack.Navigator>
//       <Check a="apple" />
//     </NavigationContainer>
//   );
// }

// export default App;
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
