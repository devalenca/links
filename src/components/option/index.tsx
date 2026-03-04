import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};

export function Option({ name, icon, variant = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <MaterialIcons
        name={icon}
        size={24}
        color={variant === "primary" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={
          variant === "primary" ? styles.primaryTitle : styles.seconderyTile
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
