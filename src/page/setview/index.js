import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View,Text } from 'react-native';
import Button from '../../modules/Button'
class SetEvent extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.otherParam : 'SetEventScreen',
            headerRight:<View/>,
        }
    }
    updateHeaderTitle = () => {
        let otherParam = this.props.navigation.getParam('otherParam','SetEventScreen');
        otherParam = otherParam==='TrustTheBoy'?'SetEventScreen': 'TrustTheBoy';
        this.props.navigation.setParams({ otherParam });
    }
    render(){
        return(
            <View>
                <Button
                    onClick={this.updateHeaderTitle}
                    title={"update header title"}
                    bgColor='#9DABC0'
                />
            </View>
        );
    }
}
export default connect()(SetEvent)