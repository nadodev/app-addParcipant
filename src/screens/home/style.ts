import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#121015',
        
    },
    wrapper: {
        marginTop: 70,
        padding: 15

    },

    textEvent: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textDate: {
        color: '#6B6B6B',
        fontSize: 16,
        marginBottom: 10
    },
    
    input : {
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 15,
        flex: 1,
        fontSize: 15
    },
    button: {
        backgroundColor: '#31cf67',
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