import React,{ Component } from 'react';
import { View,Text } from 'react-native';
import { List, Set } from 'immutable';
import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
const emptyList = List();
const plainArray = [ 1, 2, 3, 4 ];
const listFromPlainArray = List(plainArray);
const plainSet = Set(plainArray)
const listFromPlainSet = List(plainSet)
const arrayIterator = plainArray[Symbol.iterator]()
const listFromCollectionArray = List(arrayIterator)
 // true
 // true
 // true
const listFromPlainObject = [
    listFromPlainArray.equals(listFromCollectionArray),
    listFromPlainSet.equals(listFromCollectionArray),
    listFromPlainSet.equals(listFromPlainArray)];
export default class ImmutableList extends Component {
    render(){
        return(
            <View>
                <Text>{emptyList+""}</Text>
                <Text>{listFromPlainArray+""}</Text>
                <Text>{listFromPlainSet+""}</Text>
                <Text>{listFromCollectionArray+""}</Text>
                <Text>{listFromPlainObject+""}</Text>
            </View>
        );
    }
}