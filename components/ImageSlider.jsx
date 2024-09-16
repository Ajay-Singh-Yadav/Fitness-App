import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default function ImageSlider() {
  return (

    <View className="flex justify-center items-center py-5">
        <Image source={require('./../assets/images/slide3.png')} 
         style={{height:hp(30),width:hp(40)}}

        />

    </View>
     


  )
}

