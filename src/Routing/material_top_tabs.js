import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Tab = createMaterialTopTabNavigator();
import TableReservationHistory from '../screens/orders/tableReservation';
import OrderHistroy from '../screens/orders/orderHistroy';

function MaterialTopTabs() {
    const insets = useSafeAreaInsets()
    return (
        <Tab.Navigator initialRouteName='tableReservation' screenOptions={{
            activeTintColor: 'gray',
            tabBarLabelStyle: {
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 10,

            },
            tabBarStyle: {
                marginTop: insets.top,
                opacity: 0.7,
            },
            tabBarIndicatorStyle: {
                backgroundColor: "red",
                height: 2,
            }
        }}>
            <Tab.Screen name="OrderHistroy" component={OrderHistroy} options={{ title: "orders" }} />
            <Tab.Screen name="tableReservation" component={TableReservationHistory} options={{ title: "table  reservation" }} />

        </Tab.Navigator>
    );
}
export default MaterialTopTabs;
