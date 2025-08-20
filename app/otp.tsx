import { useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function OTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const handleChange = (value: string, idx: number) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);
      if (value && idx < 5) {
        inputs[idx + 1].current?.focus();
      }
      if (!value && idx > 0) {
        inputs[idx - 1].current?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, idx: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs[idx - 1].current?.focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (!otpValue) {
      setError("OTP is required.");
      return;
    }
    if (!/^\d{6}$/.test(otpValue)) {
      setError("Enter a valid 6-digit OTP.");
      return;
    }
    setError("");
    // OTP verification logic here
  };

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-br from-indigo-100 via-sky-200 to-emerald-200">
      <View className="bg-white rounded-3xl shadow-xl p-8 w-72 items-center">
        {/* Logo */}
        <View className="mb-6">
          <View className="bg-gradient-to-br from-sky-400 via-sky-300 to-emerald-400 rounded-full p-2 items-center justify-center">
            <View className="bg-white rounded-full p-2">
              <Image
                source={require("../assets/images/react-logo.png")}
                alt="Logo"
                style={{ width: 56, height: 56 }}
              />
            </View>
          </View>
        </View>

        {/* Title */}
        <Text className="text-2xl font-bold text-indigo-700 mb-6">OTP Verification</Text>
        <Text className="text-base text-slate-600 mb-4 text-center">Enter the 6-digit code sent to your number</Text>

        {/* OTP Input */}
        <View className="flex-row justify-center mb-2 w-full">
          {otp.map((digit, idx) => (
            <TextInput
              key={idx}
              ref={inputs[idx]}
              className="border border-gray-300 rounded-lg w-10 h-12 mx-1 text-center text-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 bg-gray-50"
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={value => handleChange(value, idx)}
              onKeyPress={e => handleKeyPress(e, idx)}
              placeholder="-"
              placeholderTextColor="#94a3b8"
              autoFocus={idx === 0}
            />
          ))}
        </View>

        {/* Error */}
        {error ? (
          <Text className="text-red-500 text-sm mb-4 text-center w-full">{error}</Text>
        ) : null}

        {/* Verify Button */}
        <Pressable
          className="bg-emerald-500 rounded-lg px-4 py-3 w-full items-center active:bg-emerald-600"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-semibold">Verify</Text>
        </Pressable>
      </View>
    </View>
  );
}
