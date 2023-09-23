import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.darkGray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    publisher: {
        fontSize: 14,
        marginTop: 5,
    },
    year: {
        fontSize: 14,
        marginTop: 5,
    },
});
