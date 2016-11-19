import React, { Component, PropTypes } from 'react';
import { View, Text, Navigator, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component {
	static get defaultProps() {
		return {
			title: 'MyScene'
		};
	}

	render() {
		return (
			<View style={styles.container}>				
				<Text>Hi! My Name is {this.props.title}.</Text>
				<TouchableHighlight onPress={ this.props.onForward}>
					<Text>Tap me to load the next scene</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={ this.props.onBack}>
					<Text>Tap me to go back</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

MyScene.propTypes = {
	title: PropTypes.string.isRequired,
	onForward: PropTypes.func.isRequired,
	onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});