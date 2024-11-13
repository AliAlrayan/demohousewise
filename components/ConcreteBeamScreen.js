import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ConcreteBeamScreen = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  
  const calculateMaterials = () => {
    // Convert inputs to numbers
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);
    const heightNum = parseFloat(height);

    if (!lengthNum || !widthNum || !heightNum) {
      Alert.alert('Error', 'Please enter valid dimensions.');
      return;
    }

    // Step 1: Calculate Volume of Concrete
    const volume = lengthNum * widthNum * heightNum;

    // Step 2: Calculate Cement, Sand, and Aggregates
    const cementQuantity = volume * 9; // Class A mix for cement in bags
    const sandQuantity = volume * 0.5; // Sand in cubic meters
    const aggregateQuantity = volume * 1; // Aggregate in cubic meters

    // Step 3: Calculate Steel Quantity (2% of the concrete volume)
    const steelQuantity = volume * 0.02 * 7850; // Density of steel = 7850 kg/m³

    // Display results
    Alert.alert(
      'Materials Needed',
      `Concrete Volume: ${volume.toFixed(2)} cu.m\n\n` +
      `Cement: ${Math.ceil(cementQuantity)} bags\n` +
      `Sand: ${sandQuantity.toFixed(2)} cu.m\n` +
      `Aggregates: ${aggregateQuantity.toFixed(2)} cu.m\n\n` +
      `Steel: ${steelQuantity.toFixed(2)} kg`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Concrete Beam Estimation</Text>

      <TextInput
        style={styles.input}
        placeholder="Length (m)"
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
      />
      <TextInput
        style={styles.input}
        placeholder="Width (m)"
        keyboardType="numeric"
        value={width}
        onChangeText={setWidth}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (m)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.calculateButton} onPress={calculateMaterials}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FCC205',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#353336',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#353336',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#353336',
    marginBottom: 15,
  },
  calculateButton: {
    backgroundColor: '#353336',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#FCC205',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ConcreteBeamScreen;
