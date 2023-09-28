import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const modalStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 16,
    },
    coverImage: {
        width: 200,
        height: 300,
        marginBottom: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    id: {
        fontSize: 16,
        marginBottom: 8,
    },
    publisher: {
        fontSize: 16,
        marginBottom: 8,
    },
    year: {
        fontSize: 16,
        marginBottom: 16,
    },
});
