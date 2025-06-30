import { Stack } from "expo-router";
import React from "react";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* Oculta el header en la pantalla de inicio */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Oculta el header en la pantalla de bienvenida */}
      <Stack.Screen name="bienvenida" options={{ headerShown: false }} />
    </Stack>
  );
}
