import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import colors from "../assets/colors/colors";
import LinearGradient from "react-native-linear-gradient";

const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizzes and more",
    image: require("../assets/images/Onboard1.png"),
  },
  {
    title: "Stay on top of your education",
    text: "Reduce your stress, increase your productivity",
    image: require("../assets/images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/Onboard3.png"),
  },
];

const Onboard = ({ handleFinish }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} alt="Image" style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={["#a5c8ff", "#232868"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.doneButtonWrapper}
      >
        <Text style={styles.doneButtonText}>Done</Text>
      </LinearGradient>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    handleFinish();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    fontWeight: "bold",
    marginHorizontal: 24,
  },
  text: {
    fontSize: 14,
    color: colors.gary,
    textAlign: "center",
    fontFamily: "OpenSans-SemiBold",
    marginTop: 20,
    marginHorizontal: 60,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  rightText: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "bold",
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  leftText: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "bold",
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: "OpenSans-SemiBold",
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  },
});

export default Onboard;
