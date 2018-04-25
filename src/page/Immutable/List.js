import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { List, Set } from 'immutable';
// import 'core-js/es6/symbol';
import 'core-js/fn/symbol/iterator';
const emptyList = List();
const plainArray = [1, 2, 3, 4];
const listFromPlainArray = List(plainArray);
const plainSet = Set(plainArray);
const listFromPlainSet = List(plainSet);
// const arrayIterator = plainArray[Symbol.iterator]()
// const listFromCollectionArray = List(arrayIterator)
const listFromPlainObject = [
    //listFromPlainArray.equals(listFromCollectionArray),
    //listFromPlainSet.equals(listFromCollectionArray),
    listFromPlainSet.equals(listFromPlainArray)
];
class ImmutableList extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        StatusBar.setBarStyle('default');
        StatusBar.setBackgroundColor(navigationOptions.headerStyle.backgroundColor, true);
        return {
            title: params ? params.otherParam : 'ImmutableList',
            headerRight: <View />
        };
    };
    render() {
        return (
            <View>
                <Text>{emptyList + ''}</Text>
                <Text>{listFromPlainArray + ''}</Text>
                <Text>{listFromPlainSet + ''}</Text>
                {/*<Text>{listFromCollectionArray+""}</Text>*/}
                <Text>{listFromPlainObject + ''}</Text>
            </View>
        );
    }
}
export default connect()(ImmutableList);
