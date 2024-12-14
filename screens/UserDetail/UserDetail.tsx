import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Image,
  Linking,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import image from '../Assets/image.png';
import style from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
const UserDetail: React.FC = ({route}) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    }, []),
  );
const insets = useSafeAreaInsets();
  const {itemData, userImage} = route.params;
  const fulladdress = `${itemData.address.street},${itemData.address.suite},${itemData.address.city},${itemData.address.zipcode}`;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: '#ffff',}}>
      <View style={style.icon}>
        <Icon
          style={style.icon}
          name="arrow-back-ios"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={style.personal}>Personal Info</Text>
        </View>
        <View style={style.center}>
          <Image style={style.image} source={{uri: userImage}} />
          <Text style={style.name}>{itemData?.name}</Text>
        </View>
        <View style={style.parent}>
          <View style={style.shadow}>
            <Text>
              <Text style={style.bold}>Name : </Text>
              {itemData?.name}
            </Text>
            <Text>
              <Text style={style.bold}>Username : </Text>
              {itemData?.username}
            </Text>
            <Text>
              <Text style={style.bold}>Email : </Text>
              {itemData?.email}
            </Text>
            <Text>
              <Text style={style.bold}>Address : </Text> {fulladdress}
            </Text>
            <Text>
              <Text style={style.bold}>Phone : </Text>
              {itemData.phone}
            </Text>
            <Text style={style.bold}>
              Website :
              <Text
                style={style.link}
                onPress={() => Linking.openURL(`https://${itemData.website}`)}>
                {itemData.website}
              </Text>
            </Text>
          </View>
        </View>

        <View style={style.parent}>
          <View style={style.shadow}>
            <Text style={style.bold}>Company Info</Text>
            <Text>
              <Text style={style.bold}>Name : </Text>
              {itemData?.company.name}
            </Text>
            <Text>
              <Text style={style.bold}>CatchPhrase : </Text>{' '}
              {itemData?.company.catchPhrase}
            </Text>
            <Text>
              <Text style={style.bold}>Business : </Text>
              {itemData?.company.bs}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserDetail;
