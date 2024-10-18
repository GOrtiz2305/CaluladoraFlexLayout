import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Calculator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.screen}>
                    <Text></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>x</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>÷</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'lightgray',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    screen: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 100,
    }
});