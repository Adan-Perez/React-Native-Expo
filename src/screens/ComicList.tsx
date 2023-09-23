import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/ComicListStyle';
import ComicCard from '../components/ComicCard';
import { colors } from '../utils/colors';
import { ComicType } from '../lib/types';

const comicsData: ComicType[] = require('../../assets/my_comics.json');

const ComicsList = () => {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const comicsForCurrentPage = comicsData.slice(startIndex, endIndex);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.darkBlue }}>
            <FlatList
                data={comicsForCurrentPage}
                keyExtractor={(comic) => comic.id}
                renderItem={({ item }) => <ComicCard comic={item} />}
                numColumns={2}
                contentContainerStyle={styles.gridContainer}
            />
            <View style={styles.pagination}>
                <TouchableOpacity onPress={prevPage} style={styles.paginationButton}>
                    <MaterialCommunityIcons
                        name='chevron-left'
                        size={24}
                        color={colors.darkBlue}
                    />
                </TouchableOpacity>
                <Text style={styles.paginationText}>{currentPage}</Text>
                <TouchableOpacity onPress={nextPage} style={styles.paginationButton}>
                    <MaterialCommunityIcons
                        name='chevron-right'
                        size={24}
                        color={colors.darkBlue}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ComicsList;
