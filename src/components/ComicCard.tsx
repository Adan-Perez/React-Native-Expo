import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ComicCardStyle';
import { ComicType } from '../lib/types';

const ComicCard = ({ comic }: { comic: ComicType }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: comic.coverImage }} style={styles.image} />
            <Text style={styles.title}>{comic.title}</Text>
            <Text style={styles.publisher}>Publisher: {comic.publisher}</Text>
            <Text style={styles.year}>
                Year: {comic.startYear} - {comic.endYear}
            </Text>
        </TouchableOpacity>
    );
};

export default ComicCard;
