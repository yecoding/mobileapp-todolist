'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';

const styles = require('../styles.js')
const { Text, View, TouchableOpacity, TouchableHighlight, Image} = ReactNative;

class AddButton extends Component {
  render() {
    return (
      <View style={styles.btnContainer}>

        <TouchableOpacity style={styles.manageBtn} onPress={this.props.onPressHome}>
          <Image style={styles.btnIcon} source={require('../images/icons8-bulleted-list-filled-50.png')}/>
        </TouchableOpacity>

        <TouchableHighlight style={styles.addBtn} onPress={this.props.onPressAdd}>
          <Image style={styles.btnIcon} source={require('../images/icons8-plus-math-50.png')}/>
        </TouchableHighlight>

        <TouchableOpacity style={styles.manageBtn} onPress={this.props.onPressImportant}>
          <Image style={styles.btnIcon} source={require('../images/icons8-features-list-filled-50.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}


module.exports = AddButton;






      //   <TouchableHighlight
      //     underlayColor={constants.actionColor}
      //     onPress={this.props.onPress}>
      //     <Text style={styles.actionText}>{this.props.title}</Text>
      //   </TouchableHighlight>
