import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native'

const styles = StyleSheet.create({
  main : {
    flex : 1,
    backgroundColor : 'steelblue',
    justifyContent : 'center',
    alignItems : 'center'
  },
  card : {
    width : '90%',
    height : '90%',
    backgroundColor : 'lightgray'
  },
  cardHalf : {
    flex : 1,
    backgroundColor : 'blue'
  }
})

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={[ styles.cardHalf ]}/>
      <View style={[ styles.cardHalf, { backgroundColor : 'red' }]}/>
    </View>
  )
}

class app extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.main}>
        <Card />
      </View>
    )
  }
}

AppRegistry.registerComponent('eCards', () => app)
