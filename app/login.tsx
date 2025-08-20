import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!number) {
      setError("Mobile number is required.");
      return;
    }
    if (!/^\d{10}$/.test(number)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    router.push("/otp");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-br from-indigo-100 via-sky-200 to-emerald-200">
      <View className="bg-white rounded-3xl shadow-xl p-8 w-80 items-center">
        <View className="mb-6">
          <View className="bg-gradient-to-br from-sky-400 via-sky-300 to-emerald-400 rounded-full p-2 items-center justify-center">
            <View className="bg-white rounded-full p-2">
              <Image source={require("../assets/images/react-logo.png")} style={{ width: 56, height: 56 }} />
            </View>
          </View>
        </View>
        <Text className="text-2xl font-bold text-indigo-700 mb-6">Login</Text>
        <Text className="text-base text-slate-600 mb-4">Enter your mobile number</Text>
        <TextInput
          className="border border-gray-300 rounded-lg px-4 py-3 mb-2 w-full text-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          keyboardType="number-pad"
          maxLength={10}
          value={number}
          onChangeText={text => {
            if (/^\d*$/.test(text)) {
              setNumber(text);
            }
          }}
          placeholder="Mobile Number"
          placeholderTextColor="#94a3b8"
        />
        {error ? (
          <Text className="text-red-500 text-sm mb-4 text-center w-full">{error}</Text>
        ) : null}
        <Pressable
          className="bg-emerald-500 rounded-lg px-4 py-3 w-full items-center active:bg-emerald-600"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-semibold">Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}
