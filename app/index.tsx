import React from "react";
import { SafeAreaView, View, StatusBar, Dimensions } from "react-native";
import "@/global.css";
import moment from "moment";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView className="bg-black flex-1">
        <View className="flex-1 m-5 gap-5">
          {/* Top Section */}
          <View className="bg-1 p-4 rounded-3xl flex-grow shadow-lg">
          </View>

          {/* Middle Section */}
          <View className="flex-grow bg-transparent grid grid-flow-col grid-rows-3 gap-5">
            <View className="bg-2 p-4 flex-grow row-span-3 rounded-3xl shadow-lg"></View>
            <View className="bg-3 p-4 flex-grow col-span-2 rounded-3xl shadow-lg"></View>
            <View className="bg-3 p-4 flex-grow col-span-2 row-span-2 rounded-3xl shadow-lg"></View>
          </View>

          {/* Bottom Section */}
          <View className="bg-3 p-4 h-20 rounded-3xl shadow-lg"></View>

          {/* Button Section */}
          <View className="grid justify-center">
            <View className="bg-3 p-4 w-48 h-20 rounded-full shadow-lg"></View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
