import React, { useState } from 'react';
import { Modal, Text, Pressable, View, ImageBackground } from 'react-native';

import { styles } from '../styles/HelloWorldStyle';

const images = [
    require('../../assets/backgrounds/bg-1.webp'),
    require('../../assets/backgrounds/bg-2.webp'),
    require('../../assets/backgrounds/bg-3.webp'),
    require('../../assets/backgrounds/bg-4.webp'),
    require('../../assets/backgrounds/bg-5.webp'),
    require('../../assets/backgrounds/bg-6.webp'),
    require('../../assets/backgrounds/bg-7.webp'),
];

const text = [
    '¡Hola mundo!',
    'Prueba a abrirlo varias veces',
    '¿Te gusta el fondo?',
    '¿Qué tal si lo cambiamos?',
    '¿Qué tal si cambiamos el texto?',
    'No te olvides de cerrar el modal',
    'Recuerda ir a la ventana de Cómics',
];

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
};

const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * text.length);
    return text[randomIndex];
};

const HelloWorld = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(getRandomImage());
    const [modalText, setModalText] = useState(getRandomText());

    const showModal = () => {
        setBackgroundImage(getRandomImage());
        setModalText(getRandomText());
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.centeredView}>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={showModal}>
                <Text style={styles.textStyle}>Presiona el botón</Text>
            </Pressable>

            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}>
                <View style={styles.centeredView}>
                    <ImageBackground
                        source={backgroundImage}
                        style={styles.modalBackground}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{modalText}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={hideModal}>
                                <Text style={styles.textStyle}>Cerrar</Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        </View>
    );
};

export default HelloWorld;
