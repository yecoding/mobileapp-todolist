import React from 'react';
import { StyleSheet, Text, View, ScrollView, SectionList, ListView, AlertIOS, TextInput, AppRegistry } from 'react-native';
import * as firebase from 'firebase';
import { createFilter } from 'react-native-search-filter';

//Add Styles
const styles = require('./styles.js');

//Components
const StatusBar = require('./components/statusBar');
const AddButton = require('./components/addButton');
const ListItem = require('./components/listItems');

//Search Keys
const filterTitles = ['title'];
const getAllStars = ['important'];

//Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {

  //Define Function - Add new task
  _addItem() {
    AlertIOS.prompt(
      'Add New Task',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            var d = new Date();

            this.itemsRef.push({ title: text, date: d.getFullYear()+"/"+d.getMonth()+"/"+ d.getDate(), important: false });

          }
        },
      ],
      'plain-text'
    );
  };


  //Define Function - render list items and onPress to delete item
  _renderItem(item){

      const onPressDelete = () => {
        AlertIOS.alert(
          'Delete this Task?',
          null,
          [
            {text: 'Confirm', onPress: (text) => this.itemsRef.child(item._key).remove()},
            {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
          ]
        );
      };

      const onPressImportant = () => {
        this.itemsRef.child(item._key).update({important: !item.important});
      }

      return (<ListItem item={item} onPressDelete={onPressDelete} onPressImportant={onPressImportant}/>);
  };

  //Define Function - Show Important Tasks

    _showImportant(){

      var currentRenderedData = this.state.dataSource['_dataBlob']['s1'];
        
        var currentImportantData = [];

        for (var i = currentRenderedData.length - 1; i >= 0; i--) {
          if(currentRenderedData[i].important){
            currentImportantData.push(currentRenderedData[i]);
        }
      };

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(currentImportantData)
        });
      
    }

  //Define Function - Back to all the list items
    _backHome(){
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.dataSyncFirebase)
        });
    }


  //Fetch data from database
  getRef() {
    return firebaseApp.database().ref();
  }


  //Define Function - update data
  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          date: child.val().date,
          important: child.val().important,
          _key: child.key
        });
      });

      this.dataSyncFirebase = items;

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.dataSyncFirebase)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    this.dataSyncFirebase;
    this.itemsRef = this.getRef().child('items');

  }

  //Search Function
  filterSearch(text){

    var filteredItems = this.dataSyncFirebase.filter(createFilter(text, filterTitles))

    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(filteredItems)
      });
  
  }




  render() {

    return (

      <View style={styles.container}>

        <StatusBar title="- To Do List -"></StatusBar>

        <TextInput
        style={styles.searchBar}
        onChangeText={(text)=>this.filterSearch(text)}
        placeholder="Search your item..."
        />

        <ScrollView>
           <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            enableEmptySections={true}
            style={styles.listview}/>

            <View style={styles.footer}></View>
        </ScrollView>

        <AddButton 
        onPressAdd={this._addItem.bind(this)} 
        onPressImportant={this._showImportant.bind(this)}
        onPressHome={this._backHome.bind(this)}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);