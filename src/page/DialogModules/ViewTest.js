import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Alert,AlertIOS,Image, View, Text,StyleSheet,StatusBar,ActivityIndicator,ScrollView } from 'react-native';

class ViewTest extends Component {
    render(){
        return(
        <View style={{marginTop:10}}>
            <Text style={{color:'red'}}>
                {this.props.theme.id==='default'?this.props.theme.id:"变色了"}·
                {this.props.routh}:
            </Text>
            <Text style={this.props.theme.styles.navFont} >
                知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得。物有本末，事有终始。知所先后，则近道矣。
            </Text>
            {
                this.props.theme.id !== 'default' && <Button
                    onClick={this.props.setDefaultTheme}
                    title={"默认颜色"}
                    bgColor='#16A085'
                />
            }
        </View>
        );
    }
}
const mapStateToProps = state => {
    return{
        theme:state.theme
      };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setDefaultTheme:()=>dispatch({type:'DEFAULT_THEME'})
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ViewTest)
