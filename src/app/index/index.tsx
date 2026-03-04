import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={[
          { id: "1", name: "Example Link", url: "https://example.com" },
          { id: "2", name: "Another Link", url: "https://another.com" },
          { id: "3", name: "Third Link", url: "https://third.com" },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={() => (
          <Link
            name="Example Link"
            url="https://example.com"
            onDetails={() => console.log("Details")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
