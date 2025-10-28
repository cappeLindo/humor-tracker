import { useState } from "react";
import { ScrollView, Text, View, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


export function ScrollViewTela() {
    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState<string[]>([]);

    const novoItem = () => {
        if (texto.trim() !== "") {
            setLista([...lista, texto]);
            setTexto("")
        }
    }

    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input} placeholder="type something..."
                placeholderTextColor={'rgba(53, 52, 52, 0.7)'}
                value={texto}
                onChangeText={setTexto}
            />

            <TouchableOpacity style={styles.button} onPress={novoItem}>
                <Text style={styles.textButton}>new item</Text>
            </TouchableOpacity>

            
            <ScrollView style={styles.areaScroll} contentContainerStyle={{alignItems: "center"}}>
                {lista.map((item, index) => (
                    <View style={styles.containerScroll}>
                        <Text key={index} style={styles.textScroll}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
            

            {/*
            <FlatList
                data={lista}
                renderItem={({ item, index }) => (
                    <View style={styles.containerScroll}>
                        <Text key={index} style={styles.textScroll}>{item}</Text>
                    </View>
                )} 
            /> 
            */}
        </View>
    );
}

const styles = StyleSheet.create({

    containerInput: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    input: {
        fontSize: 16,
        paddingHorizontal: 20,
        width: "80%",
        height: 55,
        borderColor: 'rgba(53, 52, 52, 0.37)',
        borderWidth: 2,
        borderRadius: 12,
    },
    button: { 
        marginTop: 10,
        width: "80%",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        height: 55,
        backgroundColor: "rgba(27, 58, 233, 0.87)",
        borderRadius: 12
        
    },
    textButton: { 
        color: "white",
        fontSize: 16,
        fontWeight: "medium",
    },
    areaScroll: { 
        width: "80%",
        height: "80%",
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'rgba(53, 52, 52, 0.37)',
        borderRadius: 12,
    },
    containerScroll: { 
        width: "95%",
    },
    textScroll:  {
        marginTop: 10,
        fontSize: 18,
        color: 'rgba(56, 56, 56, 0.75)',
        backgroundColor: 'rgba(53, 52, 52, 0.16)',
        borderRadius: 7,
        padding: 12,
        textAlign: "center",
    }
});