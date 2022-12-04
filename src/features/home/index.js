import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CardComponent from './component/home_card_component';
import ListMenuComponent from './component/list_menu_component';
import ListTransactionComponent from './component/list_transaction_component';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ListTransactionComponent navigation={navigation}>
        <Text style={styles.headerText}>Welcome Back!</Text>
        <Text style={styles.subHeaderText}>Hello, Niles</Text>
        <CardComponent />
        <ListMenuComponent />
      </ListTransactionComponent>
    </View>
    // <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    // <Text style={styles.headerText}>Welcome Back!</Text>
    // <Text style={styles.subHeaderText}>Hello, Niles</Text>
    // <CardComponent />
    // <ListMenuComponent />
    //   <ListTransactionComponent navigation={navigation} />
    // </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 14,
  },
  headerText: {
    marginTop: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: 1,
    color: '#3A697B',
  },
  subHeaderText: {
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    color: '#8CA1A9',
  },
});
