import Moment from 'moment';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

function _randomPrice() {
  return (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000) / 100;
}
const current = new Date();

const _listTransactionData = [
  {
    id: 1,
    name: 'Walmart',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png',
  },
  {
    id: 2,
    name: 'Amazon',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png',
  },
  {
    id: 3,
    name: 'Apple Inc.',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png',
  },
  {
    id: 4,
    name: 'CVS Health',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/CVS_Health_Logo.svg/2880px-CVS_Health_Logo.svg.png',
  },
  {
    id: 5,
    name: 'UnitedHealth Group',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/UnitedHealth_Group_logo.svg/2880px-UnitedHealth_Group_logo.svg.png',
  },
  {
    id: 6,
    name: 'Exxon Mobil',
    price: _randomPrice(),
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Exxon_Mobil_Logo.svg/2880px-Exxon_Mobil_Logo.svg.png',
  },
];

function ListTransactionComponent({children, navigation}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          {children}
          <Text style={styles.titleText}>Transaction</Text>
        </>
      )}
      ItemSeparatorComponent={({highlighted}) => <View style={{height: 20}} />}
      data={_listTransactionData}
      renderItem={({item, index, separators}) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TransactionDetail', {transactionItem: item})
          }>
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.logo,
              }}
              style={styles.logoContainer}
            />
            <View style={styles.companyNameContainer}>
              <Text style={styles.companyNameText}>{item.name}</Text>
              <Text style={styles.companyNameDate}>
                {Moment(current).format('DD MMM YYYY')}
              </Text>
            </View>
            <Text style={styles.companyNameDate}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
}

export default ListTransactionComponent;

const styles = StyleSheet.create({
  titleText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#3A697B',
    marginBottom: 20,
    marginTop: 30,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOpacity: 1,
  },
  logoContainer: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  companyNameContainer: {
    flex: 1,
    marginLeft: 14,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  companyNameText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#3A697B',
  },
  companyNameDate: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    color: '#3A697B',
    paddingTop: 7,
  },
});
