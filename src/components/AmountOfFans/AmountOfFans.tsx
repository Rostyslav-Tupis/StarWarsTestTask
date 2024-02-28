import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {resetAllFans} from "@/redux/favoritesSlice";
import {normalize} from "@/utils/normalize";

export const AmountOfFans = () => {
  const amoutOf = useAppSelector(state => state.favouritesCharacters);
  const dispatch = useAppDispatch();

  return (
    <View style={{marginBottom: normalize(14), gap: normalize(20)}}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Fans</Text>
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => dispatch(resetAllFans())}>
          <Text style={styles.btnText}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.amout}>{amoutOf.female}</Text>
          <Text style={styles.description}>Female Fans</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.amout}>{amoutOf.male}</Text>
          <Text style={styles.description}>Male Fans</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.amout}>{amoutOf.other}</Text>
          <Text style={styles.description}>Other</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: normalize(16),
  },
  wrapper: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    rowGap: 6,
    flex: 1,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  amout: {
    fontSize: normalize(22),
    fontWeight: "600",
  },
  topContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  description: {
    fontSize: normalize(14),
    fontWeight: "500",
  },
  btnText: {
    color: "red",
    textTransform: "uppercase",
    fontSize: normalize(16),
  },
  resetBtn: {
    borderRadius: 8,
    borderColor: "red",
    borderWidth: 1,
    padding: 4,
  },
  title: {
    fontSize: normalize(20),
    fontWeight: "300",
  },
});
