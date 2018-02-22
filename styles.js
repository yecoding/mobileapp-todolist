const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#F26968'
};



var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  
  liContainer:{
      flex: 1,
      flexDirection: 'row',
      marginVertical: 6,
      marginHorizontal: 12,
      backgroundColor: '#fff',
      borderLeftWidth: 2,
      borderLeftColor: constants.actionColor,
      position: 'relative',
      justifyContent: 'center',
        alignItems: 'center',
    },

  iconContainer: {
      flex: 1,
      marginLeft: 12,
      position: 'relative',
      justifyContent: 'center',
        alignItems: 'center',
    },

  li: {
      flex: 6,
      paddingTop: 6,
      paddingBottom: 6,
      overflow: 'visible',
    },

  liTitle: {
      fontSize: 16,
      paddingBottom: 5,
    },

  liText: {
      color: '#333',
      fontSize: 16,
    },

  liDate: {
      color: '#333',
      fontSize: 12,
    },

  doneArea: {
      position: 'absolute',
      width: 100,
      height: '100%',
      right: 0,
      top: 0,
      justifyContent: 'center',
        alignItems: 'center',
    },

  doneBtn: {
      width: 60,
      height: 35,
      borderRadius: 10,
      backgroundColor: '#DFE0E2',
      justifyContent: 'center',
        alignItems: 'center',
    },

  btnText: {
      fontSize: 16,
      lineHeight: 35,
      color: '#fff'
    },


  navbar: {

    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    position: 'relative'
  },
  navbarTitle: {

    color: constants.actionColor,
    fontSize: 20,
    fontWeight: "300"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },

  searchArea: {
    position: 'absolute',
    width: 50,
    height:'100%',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  searchIcon: {
    width: 24, 
    height: 24
  },

  searchBar: {
    height: 30,
    margin: 15,
    borderWidth: 1,
    borderColor: constants.actionColor,
    borderRadius: 6,
    padding: 6,
  },
  
  btnContainer: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 10,
      bottom: 0,
      padding: 15
    },

  addBtn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: constants.actionColor,
      alignItems: 'center',
      justifyContent: 'center',
    },

  manageBtn: {
      width: '20%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 60,
      marginRight: 60,
    },

  btnIcon: {  
      width: 30,
      height: 30 
    },

  footer: {
    width: '100%',
    height: 80
  }
})

module.exports = styles
module.exports.constants = constants;