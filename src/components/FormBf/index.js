import React, { useState } from "react"
import { View, Text, SafeAreaView, TextInput, Switch, Pressable, Keyboard } from "react-native"
import styles from "./style";

export default function FormBf() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.TitleBox}>
                <Text style={styles.TextTitulo}>Body Fat</Text>
            </View>
            <View style={styles.formContext}>

                <Text style={styles.formLabel}>Sexo</Text>
                <Switch
                    style={styles}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                ></Switch>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                ></TextInput>
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                ></TextInput>

                <Text style={styles.formLabel}>Cintura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Cintura"
                ></TextInput>
                
                <Text style={styles.formLabel}>Pescoço</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Pescoço"
                ></TextInput>
            </View>





        </Pressable>
    );
}