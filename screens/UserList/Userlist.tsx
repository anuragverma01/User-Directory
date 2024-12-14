import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import style from './style';
import offilne from '../Assets/no-internet.png';
import no_result from '../Assets/no-data.png';
import icon from '../Assets/image.png';
import filter from '../Assets/filter.png';
const Userlist: React.FC = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#fff');
    }, []),
  );
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const handlepress = (item: any, image: any) => {
    navigation.navigate('UserDetail', {
      itemData: item,
      userImage: image || icon,
    });
  };

  const [search, setsearch] = useState<any>('');
  const [data, setdata] = useState<any>([]);
  const [thumbnail, setthumbnail] = useState<any[]>([]);
  const [sort, setsort] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<any>(null);

  const filterAndSortData = () => {
    let filtered = data.filter((i: any) =>
      i.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (sort === 'name') {
      filtered = filtered.sort((a: any, b: any) =>
        a.name.localeCompare(b.name),
      );
    } else if (sort === 'email') {
      filtered = filtered.sort((a: any, b: any) =>
        a.email.localeCompare(b.email),
      );
    }

    return filtered;
  };

  const fetchdata = async () => {
    setloading(true);
    seterror(null);
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      const thu = await axios.get('https://randomuser.me/api/?results=10');
      setthumbnail(thu.data.results);
      setdata(data?.data);
    } catch (error) {
      seterror('Network Error');
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: '#ffff',
      }}>
      <View style={style.inputview}>
        <TextInput
          value={search}
          onChangeText={v => setsearch(v)}
          placeholder="Search"
          style={style.input}
        />
        <View style={style.filterview}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              resizeMode="contain"
              style={style.filtericon}
              source={filter}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={style.modalBackground}>
          <View style={style.modalContent}>
            <Text style={style.modalHeader}>Sort User By:</Text>
            <TouchableOpacity
              style={style.modalOption}
              onPress={() => {
                setsort('name');
                setModalVisible(false);
              }}>
              <Text style={style.modalOptionText}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.modalOption}
              onPress={() => {
                setsort('email');
                setModalVisible(false);
              }}>
              <Text style={style.modalOptionText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.modalOption, style.cancelButton]}
              onPress={() => setModalVisible(false)}>
              <Text style={style.modalOptionText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={style.spinnerview}>
        {loading ? (
          <View style={style.spinner}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ? (
          <View style={style.ListEmpty}>
            <Image source={offilne} style={style.no} />
            <Text>{error}</Text>
          </View>
        ) : (
          <View>
            <FlatList
              data={filterAndSortData()}
              keyExtractor={item => item.name}
              ListEmptyComponent={
                <View style={style.ListEmpty}>
                  <Image source={no_result} style={style.no} />
                  <Text>Sorry! No result found :(</Text>
                </View>
              }
              renderItem={({item, index}) => {
                const thumbnailImage = thumbnail[index]?.picture?.large;
                return (
                  <TouchableOpacity
                    onPress={() => handlepress(item, thumbnailImage)}>
                    <View style={style.card}>
                      <View>
                        <Image
                          source={{uri: thumbnailImage || icon}}
                          style={style.image}
                        />
                      </View>
                      <View style={style.textview}>
                        <Text style={style.name}>{item.name}</Text>
                        <Text style={style.email}>{item.email}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Userlist;
