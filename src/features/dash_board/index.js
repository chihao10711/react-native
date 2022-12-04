import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../home/index';

const Tab = createBottomTabNavigator();

function DashBoardItem({route}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.name}</Text>
    </View>
  );
}
function TabBarIcon(assetsIcon) {
  return ({color, size}) => (
    <Image source={assetsIcon} style={styles.tabBarIcon(size, color)} />
  );
}
function HomeHeaderLeftIcon() {
  return () => (
    <TouchableOpacity>
      <Image
        source={require('../../../assets/icon/ic_home_menu.png')}
        style={styles.homeHeaderLeftIcon}
      />
    </TouchableOpacity>
  );
}

function DashBoard() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={styles.screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: HomeHeaderLeftIcon(),
          tabBarIcon: TabBarIcon(require('../../../assets/icon/icon_home.png')),
        }}
      />
      <Tab.Screen
        name="Volatility"
        component={DashBoardItem}
        options={{
          tabBarLabel: 'Volatility',
          tabBarIcon: TabBarIcon(
            require('../../../assets/icon/ic_volatility.png'),
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={DashBoardItem}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: TabBarIcon(require('../../../assets/icon/ic_wallet.png')),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DashBoardItem}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: TabBarIcon(
            require('../../../assets/icon/ic_profile.png'),
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default DashBoard;

const styles = StyleSheet.create({
  screenOptions: {
    tabBarActiveTintColor: '#6CB8D6',
    tabBarShowLabel: false,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: '#FAFAFA',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center',
      letterSpacing: 1,
      color: '#3A697B',
    },
  },
  tabBarIcon: (size, color) => ({
    width: size,
    height: size,
    tintColor: color,
    resizeMode: 'contain',
  }),
  homeHeaderLeftIcon: {
    marginLeft: 14,
    width: 22,
    height: 17,
    tintColor: '#3A697B',
    resizeMode: 'contain',
  },
});
