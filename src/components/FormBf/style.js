import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    TitleBox: {
        height:40 ,
        color: "black",
        fontSize: 50,
        justifyContent:"center",
        alignItems:"center",
        
    },
    TextTitulo:{
        color:"#FF0043",
        fontSize:24,
        fontWeight:"bold",

    },
    formContext:{
        backgroundColor:"white",
        paddingTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:"100%",
        width:"100%"
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
      },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },


})
export default styles