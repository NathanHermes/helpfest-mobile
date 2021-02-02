import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Anton_400Regular',
        color: '#100E21',
        fontSize: 70
    },

    groupInput: {
        flexDirection: 'row',
        width: '80%',

        alignItems: 'center',
        marginBottom: 20,

        backgroundColor: '#fff',
    },

    inputIcon: {
        paddingHorizontal: 10,
    },  

    input: {
        width: '80%',

        fontFamily: 'RobotoMono-Regular',
        fontSize: 18,

        paddingHorizontal: 10,
        paddingVertical: 15,
        color: '#000'
    },

    inputSenha: {
        width: '70%',

        fontFamily: 'RobotoMono-Regular',
        fontSize: 18,

        paddingHorizontal: 10,
        paddingVertical: 15,
        color: '#000'
    },
    
    groupCheckbox: {
        width: '80%',
        height: 35,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',

        backgroundColor: '#fff',
        borderRadius: 5,

        marginBottom: 15
    },

    text: {
        fontFamily: 'RobotoMono-Regular',
        fontSize: 14,
        color: '#100E21'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',

        width: '80%',
        height: 70,
        backgroundColor: '#F27294',

        marginVertical: 30,
        borderRadius: 5
    },

    textButton: {
        fontFamily: 'Anton_400Regular',
        color: '#100E21',
        fontSize: 40
    },

    textOtherOpition: {
        fontFamily: 'RobotoMono-Regular',
        fontSize: 15,
        color: '#100E21'
    },

    textLinkCadastrar: {
        textAlign: 'center',
        color: '#F27294',
        fontFamily: 'RobotoMono-Bold',
        fontSize: 20
    }
});