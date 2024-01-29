import React from 'react';

import { View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet }
    from 'react-native';

const MusicApp = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
    <Text style={styles.headerText}>My Music App</Text>
    </View>

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

    {/* Music Controls */}
    <View style={styles.controls}>
    <TouchableOpacity style={styles.controlButton}>
    <Text style={styles.controlButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
    <Text style={styles.controlButtonText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
    <Text style={styles.controlButtonText}>Next</Text>
        </TouchableOpacity>
        </View>
        </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
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
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    controlButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    controlButtonText: {
        color: 'white',
    },
});

export default MusicApp;
