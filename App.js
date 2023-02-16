import { StatusBar } from 'expo-status-bar';
import {SafeAreaViewiew } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignedInStack from './src/Routing/SignedInStack';
import SignedOutStack from './src/Routing/SignedOutStack';
import AppStack from './src/Routing/Auth';
import Address from './src/screens/account/address/Address';
import AddAddress from './src/screens/account/address/AddAddress';

export default function App() {
  return (
    <>
           <NavigationContainer>
              <StatusBar />
              {/* auth nav */}
              <AppStack />       
              {/* <SignedOutStack/> */}
              {/* <Index /> */}
              {/* <EditProfile /> */}
              {/* <Address /> */}
              {/* <Address /> */}
              {/* <AddAddress /> */}
           </NavigationContainer>
       
         
    </>
  );
}

