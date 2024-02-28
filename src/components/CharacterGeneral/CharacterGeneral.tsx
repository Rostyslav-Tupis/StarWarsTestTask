import {Text, TouchableOpacity, Pressable, StyleSheet} from "react-native";
import React from "react";
import {MAIN_SCREENS} from "@/navigations/MainStack/MainScreensName";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import Heart from "@/assets/heart.svg";
import {ParamListBase, useNavigation} from "@react-navigation/core";
import {ICharacter} from "@/types/characterType";
import {addFavCharacter} from "@/redux/favoritesSlice";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {normalize} from "@/utils/normalize";

export const CharacterGeneral = ({item}: {item: ICharacter}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const allFavourites = useAppSelector(
    state => state.favouritesCharacters.favCharacters,
  );
  const addNewFav = (name: string, gender: string) => {
    dispatch(addFavCharacter({name, gender}));
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MAIN_SCREENS.ADDITIONAL_INFO, {item})}
      style={styles.container}>
      <Text style={styles.nameTitle}>{item.name}</Text>
      <Pressable
        style={styles.likeBtn}
        onPress={() => addNewFav(item.name, item.gender)}>
        <Heart
          width={25}
          height={25}
          fill={
            allFavourites.some(fav => fav.name === item.name) ? "red" : "grey"
          }
        />
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    marginBottom: normalize(9),
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameTitle: {
    fontWeight: "600",
    color: "black",
    fontSize: normalize(18),
  },
  likeBtn: {
    padding: 6,
  },
});
