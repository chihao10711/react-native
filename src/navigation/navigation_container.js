import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../features/dash_board/index';
import TransactionDetail from '../features/transaction_detail/index';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const popAction = StackActions.pop(1);

function BackButton({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.dispatch(popAction)}>
      <Image
        source={require('../../assets/icon/ic_back.png')}
        style={styles.backButton}
      />
    </TouchableOpacity>
  );
}

function NavigationContainerApp() {
  return (
    <NavigationContainer initialRouteName="DashBoard">
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetail}
          options={({navigation, route}) => ({
            title: route.params.transactionItem.name,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationContainerApp;

const styles = StyleSheet.create({
  backButton: {width: 18, height: 18, resizeMode: 'contain'},
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#3A697B',
  },
});
