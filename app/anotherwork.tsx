import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LocationSelector = () => {
  const [selected, setSelected] = useState("Koramangala, Bangalore");
  const [search, setSearch] = useState("");

  const locations = [
    "Koramangala, Bangalore",
    "BTM Layout, Bangalore",
    "Jayanagar, Bangalore",
    "Indiranagar, Bangalore",
    "HSR Layout, Bangalore",
    "Whitefield, Bangalore",
  ];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 12 }}>
      {/* --- Section 1: Current Location --- */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          padding: 14,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.05)",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#007E33", // darker green
            paddingVertical: 8,
            borderRadius: 18, // more round
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Ionicons
            name="location-outline"
            size={16}
            color="#fff"
            style={{ marginRight: 6 }}
          />
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 13 }}>
            Use Current Location
          </Text>
        </TouchableOpacity>
      </View>

      {/* --- Section 2: Search Bar --- */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          padding: 14,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.05)",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 18, // rounded
            paddingHorizontal: 10,
            backgroundColor: "#fafafa",
          }}
        >
          <Ionicons name="search-outline" size={16} color="#888" />
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 6,
              paddingHorizontal: 8,
              fontSize: 13,
            }}
            placeholder="Search or enter location manually"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>

      {/* --- Section 3: Suggested Locations --- */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 14,
          padding: 14,
          marginBottom: 16,
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.05)",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        {/* Title pinned at top */}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginBottom: 24, // extra spacing before list
            color: "#333",
          }}
        >
          Suggested Locations
        </Text>

        {filteredLocations.map((loc, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 12,
              marginBottom: 8,
              backgroundColor: selected === loc ? "#E8F5E9" : "#fff",
              borderWidth: selected === loc ? 1 : 0,
              borderColor: selected === loc ? "#009845" : "transparent",
            }}
            onPress={() => setSelected(loc)}
          >
            <Ionicons
              name="location-outline"
              size={16}
              color={selected === loc ? "#009845" : "#555"}
              style={{ marginRight: 8 }}
            />
            <Text
              style={{
                fontSize: 12,
                color: selected === loc ? "#009845" : "#333",
                fontWeight: selected === loc ? "600" : "400",
              }}
            >
              {loc}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default LocationSelector;
