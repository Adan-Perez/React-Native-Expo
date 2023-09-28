import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ComicCardStyle';
import { ComicType } from '../lib/types';

interface ComicCardProps {
    comic: ComicType;
    onPress: () => void;
}

const ComicCard = ({ comic, onPress }: ComicCardProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={{ uri: comic.coverImage }} style={styles.image} />
            <Text style={styles.title}>{comic.title}</Text>
        </TouchableOpacity>
    );
};

export default ComicCard;
