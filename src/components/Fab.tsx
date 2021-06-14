import React, { FC } from 'react'
import { TouchableNativeFeedback, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

interface FabProps {
    position?: 'br' | 'bl'
    title: string
    onPress: () => void
}

const Fab: FC<FabProps> = ({ onPress, position = 'br', title }) => {
    const ios = () => <TouchableOpacity activeOpacity={0.8} style={[styles.fabLocation, position === 'bl' ? styles.left : styles.right]} onPress={onPress}>
        <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
        </View>
    </TouchableOpacity>

    const android = () => <View style={[styles.fabLocation, position === 'bl' ? styles.left : styles.right]}>

        <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
            onPress={onPress}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    </View>

    return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
    fabLocation: {
        bottom: 25,
        position: 'absolute',
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        alignItems: 'center',
        backgroundColor: '#5856d6',
        borderRadius: 100,
        height: 60,
        justifyContent: 'center',
        width: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    fabText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
})

export default Fab
