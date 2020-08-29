import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HeartIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get('https://asifrpatel.github.io/instagram/feed.json')
      .then((response) => {
        //  console.warn('data : ', response.data.data[0].user.full_name);
        setUser(response.data.data);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);

  //console.warn(user[0].images.low_resolution.url);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {user &&
          user.map((data) => (
            <View style={{marginHorizontal: 10}} key={data.user.id}>
              <View style={styles.postHeader}>
                <View style={{flexDirection: 'row'}}>
                  <Avatar.Image
                    size={50}
                    source={{
                      uri: data.user.profile_picture,
                    }}
                  />
                  <Text style={styles.name}>{data.user.username}</Text>
                </View>
                <DotsIcon
                  name="dots-horizontal"
                  size={30}
                  style={{marginTop: 10}}
                />
              </View>
              <View style={styles.postImage}>
                <Swiper style={styles.wrapper} showsButtons={false}>
                  <View style={styles.slide1}>
                    <Text style={styles.text}>First Image</Text>
                  </View>
                  <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                  </View>
                </Swiper>
                {/* <Image
              source={{
                uri: 'https://picsum.photos/id/201/200/200',
              }}
              height={50}
              width={50}
            /> */}
              </View>

              <View style={styles.postBottom}>
                <View style={{flexDirection: 'row'}}>
                  <HeartIcon name="heart" size={30} color="gray" />
                  <HeartIcon
                    name="message-circle"
                    size={30}
                    style={{marginLeft: 10}}
                    color="gray"
                  />
                  <IoniconsIcon
                    name="md-return-up-forward-outline"
                    size={30}
                    color="gray"
                    style={{marginLeft: 10}}
                  />
                </View>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <IoniconsIcon name="heart" size={20} />
                  <Text>128 likes</Text>
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FFFFFF',
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  postImage: {
    alignItems: 'center',
    marginTop: 10,
    height: 350,
  },
  postBottom: {
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 10,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
