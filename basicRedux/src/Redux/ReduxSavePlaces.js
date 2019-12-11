import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addPlace} from './actions';

class ReduxSavePlaces extends Component {
  state = {
    placeName: '',
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.add(this.state.placeName); // kalo ada props berarti ambil dari reducers
  };

  placeNameChangeHandler = value => {
    this.setState({
      placeName: value,
    });
  };

  placesOutput = () => {
    return (
      <View>
        <FlatList
          style={styles.listContainer}
          data={this.props.dataPlaces} // kalo ada props berarti ambil dari reducers
          keyExtractor={(item, index) => index.toString()}
          renderItem={info => <ListItem placeName={info.item.value} />}
        />
        
      </View>
    );
  };

  render() {
    console.log('Data Props Reducer');
    console.log(this.props.dataPlaces); // kalo ada props berarti ambil dari reducers
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Seach Places"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{this.placesOutput()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});

//export default ReduxSaveData
const mapStateToProps = state => {
  return {
    dataPlaces: state.listTempat.places,
    //urutannya akses listTempat di file index.js(reducers) lalu akses file placeReducer di reducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      dispatch(addPlace(name)); //dispatch menghubungkan action ke reducers (di index.js di folder actions)
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSavePlaces);
