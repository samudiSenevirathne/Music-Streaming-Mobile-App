import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet, ProgressBarAndroid
} from 'react-native';

const MusicPlayScreen = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            {/* Album Cover */}
            <View style={styles.albumContainer}>
                <Image
                    source={require('./src/image/song_cover_2.jpg')}
                    style={styles.albumCover}
                />
            </View>

            {/* Song Details */}
            <View style={styles.songDetails}>
                <Text style={styles.songTitle}>Song Title</Text>
                <Text style={styles.artistName}>Artist Name</Text>
            </View>

            {/* Progress Bar */}
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={progress}
                style={{ marginVertical: 10 }}
            />

            {/* Play/Pause Button */}
            <TouchableOpacity style={styles.playPauseButton} onPress={togglePlayPause}>
                <Text style={styles.playPauseButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    albumContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    albumCover: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    songDetails: {
        alignItems: 'center',
        marginBottom: 20,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    artistName: {
        fontSize: 18,
        color: 'gray',
    },
    playPauseButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
    },
    playPauseButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MusicPlayScreen;
