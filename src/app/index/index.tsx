import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.3}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Category
        name={categories[0].name}
        icon={categories[0].icon}
        isSelected
      />
      <Category
        name={categories[1].name}
        icon={categories[1].icon}
        isSelected={false}
      />
      <Category
        name={categories[2].name}
        icon={categories[2].icon}
        isSelected={false}
      />
      <Category
        name={categories[3].name}
        icon={categories[3].icon}
        isSelected={false}
      />
      <Category
        name={categories[4].name}
        icon={categories[4].icon}
        isSelected={false}
      />
      <Category
        name={categories[5].name}
        icon={categories[5].icon}
        isSelected={false}
      />
    </View>
  );
}
