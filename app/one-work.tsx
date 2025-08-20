import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // vector icons

const { width } = Dimensions.get("window"); // get screen width
const cardWidth = width - 40; // card width with padding

const router = useRouter();

export default function App() {
  // Early Bird Offers
  const offers = [
    { id: 1, title: "Early Bird Discount", desc: "Get 20% off on all courses" },
    { id: 2, title: "Free Demo Classes", desc: "Try before you enroll" },
    { id: 3, title: "Scholarship Test", desc: "Win up to 100% scholarship" },
  ];

  // Coaching centers with multiple images
  const academies = [
    {
      id: 1,
      images: [
        "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
      ],
      title: "Excellence Academy",
      subtitle: "Building Future Engineers",
      course: "JEE Main & Advanced",
      rating: "4.8 (324) · Koramangala · 0.8 km",
      price: "₹45,000 – ₹65,000",
      start: "Starts: Feb 15, 2025",
      seatsLeft: "5 seats left",
      button1: "Book Demo",
      button2: "Call Now",
    },
    {
      id: 2,
      images: [
        "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
      ],
      title: "Vision Academy",
      subtitle: "Shaping Medical Aspirants",
      course: "NEET Crash Course",
      rating: "4.7 (210) · Indiranagar · 2.1 km",
      price: "₹55,000 – ₹70,000",
      start: "Starts: Mar 01, 2025",
      seatsLeft: "3 seats left",
      button1: "Book Demo",
      button2: "Call Now",
    },
    {
      id: 3,
      images: [
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3182770/pexels-photo-3182770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
      ],
      title: "Tech Scholars",
      subtitle: "Coding for the Future",
      course: "Full Stack Development",
      rating: "4.9 (512) · Whitefield · 5.3 km",
      price: "₹40,000 – ₹60,000",
      start: "Starts: Feb 25, 2025",
      seatsLeft: "8 seats left",
      button1: "Book Demo",
      button2: "Call Now",
    },
    {
      id: 4,
      images: [
        "https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=400",
      ],
      title: "Scholars Hub",
      subtitle: "Cracking Competitive Exams",
      course: "UPSC + Optional Coaching",
      rating: "4.6 (189) · Jayanagar · 3.7 km",
      price: "₹50,000 – ₹68,000",
      start: "Starts: Apr 10, 2025",
      seatsLeft: "2 seats left",
      button1: "Book Demo",
      button2: "Call Now",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f9f9f9", padding: 10 }}>
      {/* Special Offers (with Change ⌄ on right) */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "700" }}>Special Offers</Text>

        {/* Change ⌄ Button */}
        <TouchableOpacity
          onPress={() => router.push("/anotherwork")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            style={{
              color: "blue",
              fontSize: 14,
              fontWeight: "600",
              marginRight: 4,
            }}
          >
            Change
          </Text>
          <Ionicons name="chevron-down" size={16} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Offers Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        {offers.map((offer) => (
          <View
            key={offer.id}
            style={{
              backgroundColor: "#000",
              borderRadius: 12,
              padding: 18,
              width: 220,
              marginRight: 12,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>
              {offer.title}
            </Text>
            <Text style={{ color: "#fff", fontSize: 10, marginTop: 5 }}>
              {offer.desc}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Nearby Centers (no button now) */}
      <Text style={{ fontSize: 15, fontWeight: "700", marginBottom: 10 }}>
        Nearby Centers
      </Text>

      {/* Coaching Cards */}
      {academies.map((academy) => (
        <View
          key={academy.id}
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 10,
            marginBottom: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
          }}
        >
          {/* Image Slider */}
          <View>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={{ borderRadius: 12 }}
            >
              {academy.images.map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img }}
                  style={{
                    width: cardWidth,
                    height: 180,
                    borderRadius: 12,
                  }}
                  resizeMode="cover"
                />
              ))}
            </ScrollView>

            {/* Seats Left */}
            <View
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                backgroundColor: "red",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>
                {academy.seatsLeft}
              </Text>
            </View>
          </View>

          {/* Titles */}
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "#222",
              marginTop: 24,
            }}
          >
            {academy.title}
          </Text>
          <Text style={{ fontSize: 11, color: "gray", marginBottom: 4,marginTop:6 }}>
            {academy.subtitle}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "800", color: "green",marginTop:1}}>
            {academy.course}
          </Text>

          {/* Rating */}
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginBottom: 10 }}>
            <Ionicons name="star" size={14} color="gold" />
            <Text style={{ fontSize: 13, color: "#333", fontWeight: "bold", marginLeft: 4 }}>
              {academy.rating}
            </Text>
          </View>

          {/* Price + Start */}
          <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 2 }}>
            {academy.price}
          </Text>
          <Text style={{ fontSize: 11, color: "gray", marginBottom: 8 ,marginTop:1}}>
            {academy.start}
          </Text>

          {/* Buttons */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between",marginTop:10 }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#4CAF50", // lighter green
                padding: 10,
                borderRadius: 8,
                marginRight: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="book-outline" size={16} color="#fff" />
              <Text style={{ color: "#fff", textAlign: "center", marginLeft: 6, fontWeight: "600" }}>
                {academy.button1}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#f0f2f5",
                padding: 10,
                borderRadius: 8,
                marginLeft: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="call-outline" size={16} color="#000" />
              <Text style={{ color: "#000", textAlign: "center", marginLeft: 6, fontWeight: "600" }}>
                {academy.button2}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
