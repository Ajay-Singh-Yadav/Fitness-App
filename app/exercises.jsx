import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodyPart } from './../api/exerciseDB';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ExercisesList from './../components/ExercisesList'
import { ScrollView } from 'react-native-virtualized-view';
import { demoExercises } from './../constants/index';


export default function Exercises() {

    const [exercises, setExercises]  = useState(demoExercises);
    const router  = useRouter(); 
    const item = useLocalSearchParams();
    console.log('got item', item);

    useEffect(()=>{

      // if(item) getExercises(item.name);

    },[item]);

    const getExercises = async (bodypart)=>{
        let data = await fetchExercisesByBodyPart(bodypart);
        // console.log('got data ', data);
        setExercises(data);
    }


  return (
    <ScrollView>
       <StatusBar style="light" />
       <Image source={item.image}
        style={{width:wp(100), height:hp(45)}}
        className="rounded-b-[40px]"
        />

        <TouchableOpacity 
        onPress={()=> router.back()}
          className="bg-red-400 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
           style={{height:hp(5.5),width:hp(5.5), marginTop:hp(7)}}
          >
             <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
          </TouchableOpacity>

          {/* exercises */}
          <View className="mx-4 space-y-3 mt-4">
            <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700">
              {item.name} exercises
            </Text>

            <View className="mb-10">
               <ExercisesList data={exercises} />
            </View>
          </View>
    </ScrollView>
  )
}