import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const styles = StyleSheet.create({
    gridContainer: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    paginationButton: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    paginationText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white,
    },
});
