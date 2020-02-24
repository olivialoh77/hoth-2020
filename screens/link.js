import React, { Component } from 'react';

global.catChosen =['1'];

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'


export default function LinksScreen () {
        function clickFunc(num) {
                catChosen = num;
                console.log(num);
        }


    return (

        <View style={styles.containerbg}>
        <View style={{ flexDirection: 'row', height: 700 }}>
          <Image
                style={styles.imgbg}
                source={require('../assets/images/printbg.png')}
            />
        </View>

        <View style={styles.container}>
           <TouchableOpacity onPress={() => clickFunc(1)}>

        <View style={{ flexDirection: 'row', height: 160 }}>

          <Image
                style={styles.img}
                source={require('../assets/images/1cat.png')}
          />

        </View>
            </TouchableOpacity>


        <View style={{ flexDirection: 'row', height: 0 }}>

          <Image
                  style={styles.imgr}
                  source={require('../assets/images/3creepface.png')}
              />
        </View>

        </View>

        <View style={styles.container2}>

        <TouchableOpacity onPress={() => clickFunc(2)}>

        <View style={{flexDirection: 'row', height: 160}}>

            <Image
                style={styles.img}
                source={require('../assets/images/transparent.png')}
            />

            <Image
                  style={styles.imgr}
                  source={require('../assets/images/4catface.png')}
              />

        </View>
        </TouchableOpacity>
        </View>


        <View style={styles.container3}>
        <TouchableOpacity onPress={() => clickFunc(3)}>
        <View style={{flexDirection: 'row', height: 160}}>
          <Image
                style={styles.img}
                source={require('../assets/images/6catwoman.png')}
            />

          <Image
                  style={styles.imgr}
                  source={require('../assets/images/transparent.png')}
              />
        </View>
        </TouchableOpacity>
        </View>


      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
        top: 0,
        bottom: 25,
        left: 0,
        right: 0,
    justifyContent: 'flex-end',
  },
  container2: {
        position: 'absolute',
          top:0,
          bottom:200,
          left:0,
          right:0,
        justifyContent: 'flex-end',
  },

  container3: {
        position: 'absolute',
          top:0,
          bottom:375,
          left:0,
          right:0,
        justifyContent: 'flex-end',
  },
  containerbg: {
          position: 'absolute',
          top:0,
          bottom:0,
          left:0,
          right:0,
          justifyContent: 'flex-end',
  },
    img: {
      width: '48%',
      height: '96%',
      resizeMode: 'cover',
      top: 3,
      left: 6,
    },
    imgr: {
      width: '48%',
      height: '96%',
      resizeMode: 'cover',
      top: 3,
      left: 10,
    },

    imgbg: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      top: 0,
      left: 0,
    }

});