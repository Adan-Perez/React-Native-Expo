import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 20,
    },

    modalText: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonClose: {
        backgroundColor: colors.darkBlue,
    },
    textStyle: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    buttonOpen: {
        backgroundColor: colors.lightRed,
    },
});
