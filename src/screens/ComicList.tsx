import React, { useState } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    Button,
    Modal,
    Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/ComicListStyle';
import ComicCard from '../components/ComicCard';
import { colors } from '../utils/colors';
import { ComicType } from '../lib/types';
import { modalStyle } from '../styles/ModalStyle';

const comicsData: ComicType[] = require('../../assets/my_comics.json');

const ComicsList = () => {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedComic, setSelectedComic] = useState<ComicType | null>(null);
    const [isModalVisible, setModalVisible] = useState(false);

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

    const showModal = (comic: ComicType) => {
        setSelectedComic(comic);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.darkBlue }}>
            <FlatList
                data={comicsForCurrentPage}
                keyExtractor={(comic) => comic.id}
                renderItem={({ item }) => (
                    <ComicCard comic={item} onPress={() => showModal(item)} />
                )}
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

            <Modal
                visible={isModalVisible}
                animationType='slide'
                style={modalStyle.modalContainer}>
                <View style={modalStyle.modalContainer}>
                    <Text style={modalStyle.title}>
                        Title: {selectedComic?.title}
                    </Text>
                    <Image
                        source={{ uri: selectedComic?.coverImage }}
                        style={modalStyle.coverImage}
                    />

                    <Text style={modalStyle.id}>Id: {selectedComic?.id}</Text>
                    <Text style={modalStyle.publisher}>
                        Publisher: {selectedComic?.publisher}
                    </Text>
                    <Text style={modalStyle.year}>
                        Year: {selectedComic?.startYear} - {selectedComic?.endYear}
                    </Text>
                    <Button
                        title='Cerrar'
                        onPress={hideModal}
                        color={colors.darkGreen}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default ComicsList;
