import { StyleSheet } from "react-native";
// import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },

  navbarContent: {
    // paddingTop: Constants.statusBarHeight,
    height: 160,
    padding: 20
  },

  title: {
    fontFamily: "Anton_400Regular",
    color: "#100E21",
    textAlign: 'center',
    fontSize: 60,
  },

  navbarText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 13,
    textAlign: 'right',
    color: "#100E21",
  },

  navbarTextBold: {
    fontFamily: "RobotoMono-Bold",
    fontSize: 14,
    color: "#100E21",
  },

  cards: {
    flex: 1,
    paddingHorizontal: 24,
  },

  festa: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  img: {
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  textGroup: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 16,
    fontFamily: "RobotoMono-Regular",
    color: "#100E21",
  },

  textNome: {
    fontSize: 16,
    fontFamily: "RobotoMono-Bold",
    color: "#100E21",
  },
});
