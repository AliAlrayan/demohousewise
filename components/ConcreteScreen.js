import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { ScrollView } from 'react-native-gesture-handler';

export default function ConcreteScreen() {
  const navigation = useNavigation();

  const handleEstimatePress = () => {
    Alert.alert('Estimate', 'Estimate functionality will be implemented here.');
    // Alternatively, navigate to an estimation screen if available:
    // navigation.navigate('EstimateScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.concreteiconContainer}>
        <Image source={require('../assets/concreteicon.png')} style={styles.concreteicon} />
        <Text style={styles.concreteiconText}>Concrete</Text>
      </View>

      <ScrollView style={styles.formContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('House Dimension')}>
            <Image source={require('../assets/Dimensionicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Dimension</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Footing')}>
            <Image source={require('../assets/footingicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Footing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Concrete Wall')}>
            <Image source={require('../assets/Wallicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Wall</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Concrete Beam')}>
            <Image source={require('../assets/beamicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Beam</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Column')}>
            <Image source={require('../assets/Columnicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Column</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Concrete Flooring')}>
            <Image source={require('../assets/Flooring.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Flooring</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Concrete Roofing')}>
            <Image source={require('../assets/rooficon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Roofing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.concreteiconContainer2} onPress={() => navigation.navigate('Room')}>
            <Image source={require('../assets/roomicon.png')} style={styles.concreteicon} />
            <Text style={styles.concreteiconText}>Room</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Estimate Button */}
      <TouchableOpacity style={styles.estimateButton}onPress={() => navigation.navigate('Estimate')}>
        <Text style={styles.estimateButtonText}>Estimate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCC205', // Yellow background
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '99.5%',
    height: '70%',
    backgroundColor: '#fefefe',
    padding: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row', // Puts the two icons in a row
    justifyContent: 'space-evenly',// Space between the two icons
    alignItems: 'center',
  },
  concreteiconContainer: {
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 20,
    elevation: 10,
    borderColor: '#fefefe',
    borderWidth: 3,
    borderRadius: 10,
  },
  concreteiconContainer2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    marginTop: 30,
    marginBottom: 20,
    borderColor: '#fefefe',
    borderWidth: 3,
    borderRadius: 10,
  },
  concreteicon: {
    width: 120, // Adjust the width and height as per your icon's aspect ratio
    height: 90,
    resizeMode: 'contain',
  },
  concreteiconText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  estimateButton: {
    backgroundColor: '#353336',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  estimateButtonText: {
    color: '#FCC205',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
