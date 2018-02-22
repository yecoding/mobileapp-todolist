import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = require('../styles.js');
const { View, TouchableHighlight, TouchableOpacity, Text, Image, Button } = ReactNative;

class ListItem extends Component {
  render() {
    return (
      <View style={styles.liContainer}>
      	<TouchableOpacity onPress={this.props.onPressImportant} style={styles.iconContainer}>
      		<Icon name={this.props.item.important ? "star" : "star-o"} size={24} color='#F26968'/>
      	</TouchableOpacity>
        <View style={styles.li}>
          <Text style={styles.liTitle}>{this.props.item.title}</Text>
          <Text style={styles.liDate}>{this.props.item.date}</Text>
        </View>
        <View style={styles.doneArea}>
			<TouchableHighlight onPress={this.props.onPressDelete} style={styles.doneBtn}>
				<Text style={styles.btnText}>Done</Text>
			</TouchableHighlight>
		</View>
      </View>
    );
  }
}

module.exports = ListItem;


