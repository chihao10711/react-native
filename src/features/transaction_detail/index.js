import {ScrollView, StyleSheet, Text, View} from 'react-native';

function TransactionDetail() {
  return <View style={styles.container}></View>;
}

export default TransactionDetail;

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
