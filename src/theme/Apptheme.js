import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
    },
    calculateHorizontal: {
        flex: 1,//
        paddingHorizontal: 20,
        justifyContent: "flex-end",
    },
    result: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 10,
    },
    resultTiny: {
        color: "rgba(255, 255, 255, 0.50)",
        fontSize: 30,
        textAlign: "right",
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    boton: {
        backgroundColor: "#2d2d2d",
        borderRadius: 100,
        justifyContent: "center",
        height: 80,
        width: 80,
        marginHorizontal: 10,
    },
    Btncolor: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        fontWeight: "bold",  
        color: "black",
    }
})