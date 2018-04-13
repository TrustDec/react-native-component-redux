import React,{ Component } from 'react';
import { Image, View, Text,StyleSheet,StatusBar } from 'react-native';
import Button from '../../modules/Button'
function tag(stringArr, ...values){
    // ...
    console.log(stringArr);
    console.log(values)
  }
class ECMAScript2016 extends Component {
    render(){
        let s = 'Hello world!';
        let a1 = s.startsWith('Hello') // true
        let a2 =s.endsWith('!') // true
        let a3 =s.includes('o') // true
        let a4 = s.repeat(2);
        //alert `123`;
        let a = 5;
        let b = 10;

        tag`Hello ${ a + b } world ${ a * b }`;
        return(
            <View>
                <Text>{"\uD842\uDFB7"}</Text>
                <Text>{a1.toString()}</Text>
                <Text>{a2.toString()}</Text>
                <Text>{a3.toString()}</Text>
                <Text>{a4}</Text>
            </View>
        );
    }
}
export default ECMAScript2016