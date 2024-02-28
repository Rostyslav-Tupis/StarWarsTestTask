import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, {useEffect, useState} from "react";
import {ICharacter} from "@/types/characterType";
import axiosApi from "@/api/config/axios";
import {TouchableOpacity} from "react-native-gesture-handler";
import {normalize} from "@/utils/normalize";
import LeftArrowIcon from "@/assets/left-arrow.svg";
import {RouteProp} from "@react-navigation/native";
import {IMainScreens} from "@/navigations/MainStack/MainScreensName";
import {StackNavigationProp} from "@react-navigation/stack";

interface IAdditionInfoProps {
  route: RouteProp<IMainScreens, "ADDITIONAL_INFO">;
  navigation: StackNavigationProp<IMainScreens, "ADDITIONAL_INFO">;
}

export const AdditionInfo: React.FC<IAdditionInfoProps> = ({
  route,
  navigation: {goBack},
}) => {
  const infoAboutCharacter = route.params.item as ICharacter;
  const [nameOfHomePlanet, setNameOfHomePlanet] = useState("");
  const [loading, setLoading] = useState(false);
  const getHomePlanet = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get(infoAboutCharacter?.homeworld);
      const {data} = response;
      setNameOfHomePlanet(data.name);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    getHomePlanet();
  }, [infoAboutCharacter]);

  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 16}}>
        <TouchableOpacity style={styles.goBack} onPress={() => goBack()}>
          <LeftArrowIcon width={20} height={20} />
          <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.title}>Gender</Text>
          <Text style={styles.description}>{infoAboutCharacter?.gender}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Birth Year</Text>
          <Text style={styles.description}>
            {infoAboutCharacter?.birth_year}
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Height</Text>
          <Text style={styles.description}>{infoAboutCharacter?.height}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Home planet</Text>
          {loading ? (
            <ActivityIndicator color={"#fa4b57"} />
          ) : (
            <Text style={styles.description}>{nameOfHomePlanet}</Text>
          )}
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Eye Color</Text>
          <Text style={styles.description}>
            {infoAboutCharacter?.eye_color}
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Skin Color</Text>
          <Text style={styles.description}>
            {infoAboutCharacter?.skin_color}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goBack: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: normalize(12),
    marginBottom: normalize(12),
  },
  goBackText: {
    fontWeight: "600",
    fontSize: normalize(16),
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#cfc0ce",
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  title: {
    fontSize: normalize(16),
  },
  description: {
    fontSize: normalize(18),
    fontWeight: "600",
    textTransform: "capitalize",
    color: "black",
  },
});
