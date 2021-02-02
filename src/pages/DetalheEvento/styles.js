import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0F5",
    alignItems: "center",
  },

  imgBack: {
    width: "100%",
    height: "40%"
  },

  card: {
    flex: 1,
    width: "80%",
    top: "25%",
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 8,
  },

  cardHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 10,
  },

  cardTitleArrow: {
    marginLeft: 25,
  },

  cardTitle: {
    width: "77%",
    fontFamily: "Anton_400Regular",
    color: "#100E21",
    textAlign: "center",
    fontSize: 35,
  },

  cardDetails: {
    paddingHorizontal: 30,
    marginBottom: 15,
  },

  cardDetailsInfo: {
    flexDirection: "row",
    paddingVertical: 5,

    alignItems: "center",
  },

  cardDetailsInfoTextBold: {
    fontFamily: "RobotoMono-Bold",
    fontSize: 18,
    color: "#100E21"
  },

  cardDetailsInfoText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 15,
    color: "#100E21"
  },

  cardDetailsInfoTextHorario: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 15,
    marginHorizontal: 10,
    color: "#100E21"
  },

  cardDetailsInfoTextLocal: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 15,
    marginLeft: 20,
    color: "#100E21"
  },

  cardTextArea: {
    marginTop: 35,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#E1E2E1",
  },

  cardTextAreaTitle: {
    width: "100%",
    fontFamily: "Anton_400Regular",
    fontSize: 25,
    textAlign: "left",
    color: "#100E21",

    position: "absolute",
    bottom: "80%",

    paddingHorizontal: 15,
  },

  cardTextAreainfo: {
    width: "100%",
    marginBottom: 20,
    paddingTop: 20
    },

  cardTextAreainfoText: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 15,
    textAlign: "right",
    paddingRight: 25,
    color: "#100E21"
  },
  
  cardFooter: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  
  cardFooterOrgInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  cardFooterText: {
    fontFamily: 'RobotoMono-Bold',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: "#100E21"
  },

  cardFooterTextMail: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 15,
    color: '#FFA4C4',
    paddingHorizontal: 10,
    paddingVertical: 5,
    textDecorationLine: 'underline'
  },

  cardFooterTextTelefone: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 15,
    color: '#4C83BF',
    paddingHorizontal: 10,
    paddingVertical: 5
  },

  cardFooterTextWhatsapp: {
    fontFamily: 'RobotoMono-Regular',
    fontSize: 15,
    color: '#34af23',
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});
