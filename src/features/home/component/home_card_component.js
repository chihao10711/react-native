import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function CardComponent() {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#84E5D5', '#5C99D6']}
      style={styles.linearGradient}>
      <View style={styles.cvvContainer}>
        <Image
          source={{
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/2880px-Visa_2021.svg.png',
          }}
          style={styles.visaLogo}
        />
        <Text style={[styles.cvvText]}>***</Text>
      </View>
      <Text style={styles.cardNumberText}>**** **** **** 0987</Text>
      <View style={styles.balanceContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.balanceTitle}>My Balance</Text>
          <Text style={styles.balanceValue}>$2,500.00</Text>
        </View>
        <Text style={styles.expiredText}>10/25</Text>
      </View>
    </LinearGradient>
  );
}

export default CardComponent;

const styles = StyleSheet.create({
  linearGradient: {
    marginVertical: 30,
    height: 239,
    borderRadius: 8,
  },

  cvvContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 14,
  },
  visaLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  cvvText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  cardNumberText: {
    paddingBottom: 42,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  balanceContainer: {
    padding: 14,
    height: 80,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6CB8D6',
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  balanceTitle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    color: '#D1E4FD',
  },
  balanceValue: {
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 1,
    color: 'white',
  },
  expiredText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
    color: 'white',
  },
});
