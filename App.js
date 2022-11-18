import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={{flex: 1}}>
      {/*source of videos*/}
      <FlatList
        data={[
          require('../src/videos/vid1.mp4'),
          require('../src/videos/vid2.mp4'),
          require('../src/videos/vid3.mp4'),
          require('../src/videos/vid4.mp4'),
        ]}
        onScroll={e => {
          setSelectedIndex(
            e.nativeEvent.contentOffset.y.toFixed(0) /
              Dimensions.get('window').height,
          );
        }}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={(item, index) => {
          return (
            <View
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
              }}>
              {/*pause button for video */}
              <Video
                paused={selectedIndex == index ? false : true}
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                }}
                resizeMode={'cover'}
                source={item}
              />
              <TouchableOpacity
                style={{
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  top: 0,
                }}
                onPress={() => {
                  if (selectedIndex == -1) {
                    setSelectedIndex(index);
                  } else {
                    setSelectedIndex(-1);
                  }
                }}>
                {selectedIndex == -1
                  ? App(
                      <Image
                        source={require('../AwesomeProject/src/images/pause.jpg')}
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColour: '#fff',
                          borderRadius: 25,
                        }}
                      />,
                    )
                  : null}
                <View
                  style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 10,
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '800',
                      marginLeft: 10,
                    }}>
                    @funnyVideos
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: '800',
                      marginLeft: 10,
                    }}>
                    #funnyVideos
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <Image
                      source={require('../AwesomeProject/src/images/user.png')}
                      style={{width: 30, height: 30, marginLeft: 10}}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '800',
                        marginLeft: 10,
                      }}>
                      @Rockstar
                    </Text>
                    <TouchableOpacity
                      style={{
                        height: 25,
                        paddingLeft: 10,
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 20,
                        backgroundColor: 'red',
                      }}>
                      <Text style={{clour: '#fff'}}>Subscribe</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{position: 'absolute', right: 10, bottom: 20}}>
                  <Image
                    source={require('../AwesomeProject/src/images/like.jpg')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    1.1k
                  </Text>
                  <Image
                    source={require('../AwesomeProject/src/images/dislike.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    100
                  </Text>
                  <Image
                    source={require('../AwesomeProject/src/images/comment.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    50
                  </Text>
                  <Image
                    source={require('../AwesomeProject/src/images/dislike.png')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    100
                  </Text>
                  <Image
                    source={require('../AwesomeProject/src/images/share.jpg')}
                    style={{width: 30, height: 30, tintColor: '#fff'}}
                  />{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#fff',
                    }}>
                    1.2K
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;
