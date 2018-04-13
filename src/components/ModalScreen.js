import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView,View, Text, StatusBar, StyleSheet,findNodeHandle,Image } from 'react-native';
import Button from '../modules/Button'
import { BlurView } from 'react-native-blur';
import paragraph from '../equipment/TextParagraph';
class ModalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { viewRef: null };
  }
  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }
    render() {
      return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor={'#EFEFF4'}
					animated={true}
					barStyle='light-content'
				/>
				<Image
					ref={(img) => { this.backgroundImage = img; }}
					source={require("../image/modal_bg.jpg" )}
					onLoadEnd={this.imageLoaded.bind(this)}
					style={[styles.absolute,{width:'100%',height:'100%'}]}
				/>
				{
					this.state.viewRef == null
					? null
					:<BlurView
						style={styles.absolute}
						blurType="dark"
						blurAmount={3}
						viewRef={this.state.viewRef}
					/>
				}
				<ScrollView style={styles.textView} showsVerticalScrollIndicator={false}>
					<Text style={styles.paragraphCertent}>
						{paragraph}
					</Text>
				</ScrollView>
				<View style={{position:'absolute',bottom:90,right:20,backgroundColor:'rgba(23, 142, 238,.88)',width:50,height:50,borderRadius:25, justifyContent: 'center', alignItems: 'center',  }}>
						<Button
							onClick={() => this.props.navigation.goBack()}
							title={"关闭"}
							bgColor='rgba(23, 142, 238,0)'
						/>
					</View>
				</View>
        
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#fff'
    },
    absolute: {
      position: "absolute",
      top: 0, left: 0, bottom: 0, right: 0,
	},
	textView: {
		paddingHorizontal:8,
		marginTop:20,
		
	},
	paragraphCertent: {
		color:'#fff',
	}
  });
export default connect()(ModalScreen)