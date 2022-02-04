import React, { useState } from "react"
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native"
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form(props) {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setmMessageImc] = useState("Preencha peso e altura")
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([])

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*")
        }
    }

    function imcCalculator() {


        let formattedHeight = parseFloat(height.replace(",", "."));
        let formattedWeight = parseFloat(weight.replace(",", "."));
        let totalImc = (formattedWeight / (formattedHeight * formattedHeight)).toFixed(2)
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc:totalImc }])
        setImc(totalImc)
    }



    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setmMessageImc("Seu imc é:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setmMessageImc("Preencha o peso e altura")
        }
    }

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex: 1.75"
                        keyboardType="numeric"
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex: 86.300"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exibitionResultImc}>
                    <ResultImc messageResultIMc={messageImc} resultImc={imc} />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => { validationImc() }}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                style={styles.listImc}
                data={imcList.reverse()}
                renderItem={(item) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = {item.imc}</Text>
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            />
        </View>
    );
}