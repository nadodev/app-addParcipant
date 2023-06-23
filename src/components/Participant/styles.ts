import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    name: {
        color: '#FFF',
        flex: 1,
        marginLeft: 16,
    },

    button: {
        backgroundColor: '#E23C44',
        height: 56,
        width: 56,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textButton: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    }
})
