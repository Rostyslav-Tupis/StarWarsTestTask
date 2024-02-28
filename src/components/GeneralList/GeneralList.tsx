import {
  SafeAreaView,
  FlatList,
  View,
  Button,
  ActivityIndicator,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import React, {useEffect, useState} from "react";
import axiosApi from "@/api/config/axios";
import {ICharacter} from "@/types/characterType";

import {CharacterGeneral} from "../CharacterGeneral/CharacterGeneral";
import {AmountOfFans} from "../AmountOfFans/AmountOfFans";
import {normalize} from "@/utils/normalize";

export const GeneralList = () => {
  const [allCharacters, setAllCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [doesUrlExist, setDoesUrlExist] = useState("");

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axiosApi.get(`people/?page=${page}`);
      const {data} = response;
      if (data) {
        setAllCharacters(data.results);
        setDoesUrlExist(data.next);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const goBack = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };
  const goNext = () => {
    if (doesUrlExist) {
      setPage(prev => prev + 1);
    }
  };

  const ShowList = ({item}: {item: ICharacter}) => {
    return <CharacterGeneral item={item} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wrapper}>
        <AmountOfFans />
        {isLoading ? (
          <View style={styles.loaderBox}>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
            data={allCharacters}
            renderItem={ShowList}
            showsVerticalScrollIndicator={false}
          />
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: normalize(16),
            marginTop: normalize(5),
          }}>
          <TouchableOpacity style={styles.navBtn} onPress={goBack}>
            <Text style={styles.navBtnText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn} onPress={goNext}>
            <Text style={styles.navBtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: normalize(16),
    flex: 1,
  },
  loaderBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navBtn: {
    padding: 6,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    height: 45,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  navBtnText: {
    fontSize: normalize(16),
    fontWeight: "600",
  },
});
