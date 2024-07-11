import { Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View>
            <Image source={require('../../assets/images/EDS logo.png')}
                className="w-full h-[300px]"
            />
            <View className='p-8 bg-black mt-[-20px] rounded-t-3xl'>
                <Text className='text-[25px] mt-20 font-bold  text-gray-400  text-center'>
                    A place to buy, sell and trade Fragrances
                </Text>

                <Text className='text-[16px] mt-6 font-bold  text-gray-400  text-center'>
                    (AI Features and Retail Coming Soon)
                </Text>
                
                <TouchableOpacity onPress={()=>console.log("Get Started pressed")} className='p-4 rounded-full mt-20 ml-4 mr-4' style={{backgroundColor: '#1b1a1c'}}>
                    <Text className='text-white font-extrabold text-center text-[20px]' style={{color: '#eb4e3f',}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
