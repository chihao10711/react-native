import {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
const _listMenu = [
  {
    icon: require('../../../../assets/icon/ic_transfer.png'),
    title: 'Transfer',
  },
  {
    icon: require('../../../../assets/icon/ic_payment.png'),
    title: 'Payment',
  },
  {
    icon: require('../../../../assets/icon/icon_topup.png'),
    title: 'Top-up',
  },
  {
    icon: require('../../../../assets/icon/ic_more.png'),
    title: 'More',
  },
];
function ListMenuComponent() {
  const [indexSelected, setIndexSelected] = useState(0);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {_listMenu.map((data, index) => (
        <TouchableOpacity key={index} onPress={() => setIndexSelected(index)}>
          <View
            style={styles.menuItemContainer(
              indexSelected === index,
              index === _listMenu.length - 1,
            )}>
            <Image
              source={data.icon}
              style={styles.menuItemImage(indexSelected === index)}
            />
            <Text style={styles.menuItemText(indexSelected === index)}>
              {data.title}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default ListMenuComponent;

const styles = StyleSheet.create({
  menuItemContainer: (isSelected, isLast) => ({
    width: 96,
    height: 86,
    backgroundColor: isSelected ? '#6CB8D6' : '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    marginRight: isLast ? 0 : 14,
    padding: 14,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOpacity: 1,
  }),
  menuItemImage: isSelected => ({
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: isSelected ? '#FFFFFF' : '#C2C2C2',
  }),
  menuItemText: isSelected => ({
    marginTop: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    letterSpacing: 1,
    color: isSelected ? '#FFFFFF' : '#C2C2C2',
  }),
  test: {},
});
