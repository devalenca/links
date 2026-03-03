import { colors } from "@/styles/colors";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  const backgroundColor = colors.gray[950];
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
