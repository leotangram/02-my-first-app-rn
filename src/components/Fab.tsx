import React, { FC } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface FabProps {
    title: string
}

const Fab: FC<FabProps> = ({ title }) => {
    return (
        <TouchableOpacity
            onPress={() => console.log('Counter')
            }
            style={styles.fabLocationBR}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocationBR: {
        bottom: 25,
        position: 'absolute',
        right: 25
    },
    fab: {
        alignItems: 'center',
        backgroundColor: '#5856d6',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60
    },
    fabText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
})

export default Fab
