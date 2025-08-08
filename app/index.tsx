import { Text, View,TextInput,TouchableOpacity ,Alert} from "react-native";
import React,{useState} from "react";

export default function Index() {
const [email,setEmail]=useState('');
const [password,setpassword]=useState('');

const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    Alert.alert('Success', `Logged in as ${email}`);
  }

  return (
    <View className="flex-1 items-center justify-center bg-black px-4"> 
      <Text className="text-4xl text-white font-bold mb-6" >LOGIN</Text>
      
        <TextInput
        className="w-full border border-white rounded-md p-3 mb-4 text-white"
        placeholder="Email,Username or mobile no."
        keyboardType="email-address"
        placeholderTextColor="white"
        value={email} 
        onChangeText={setEmail}       
      />
        <TextInput
        className="w-full border border-white rounded-md p-3 mb-4 text-white"
        placeholder="password"
        secureTextEntry
        placeholderTextColor="white"
        value={password} 
        onChangeText={setpassword}
      />

      <TouchableOpacity className="w-full bg-blue-500 rounded-md p-3" onPress={handleLogin} >
        <Text className="text-white text-center font-semibold">Log In</Text>
        
      </TouchableOpacity>

      <Text className="text-white underline " >Forgotten password?</Text>
    </View>
  );
}
