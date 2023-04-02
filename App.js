import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/Routing/Auth';
import { Provider } from 'react-redux'
import { Store } from './src/Redux/Store';
import { StripeProvider } from '@stripe/stripe-react-native';

import SignedInStack from './src/Routing/SignedInStack';
import HomeScreen from './src/screens/reservation/home';
import ConfirmReservation from './src/screens/reservation/confirmReservation';
import TableReservation from './src/screens/reservation/tableReservation';
import PlaceOrderSucces from './src/screens/homeScreens/placeOrderSucces';
import TableType from './src/screens/reservation/tableType';
import FoodOrderingMain from './src/screens/reservation/foodOrdering/main';
const STRIPE_KEY = 'pk_test_51MiL4gSGW1KhbpPQkyXb60yVyVNsLDlpXHf4VmaKM5vMST6UvnzXMh3FXAUBwygB9ubenm0AEL1DXrN5ff9rds7800ChJX91Ft'

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Provider store={Store} >
          <PaperProvider>
            <StripeProvider publishableKey={STRIPE_KEY} merchantIdentifier="acct_1MiL4gSGW1KhbpPQ" >
              <AppStack />
            </StripeProvider>
          </PaperProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
}
