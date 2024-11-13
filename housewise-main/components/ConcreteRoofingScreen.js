import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RoofingScreen = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const calculateMaterials = () => {
    // Convert inputs to numbers
    const lengthNum = parseFloat(length);
    const widthNum = parseFloat(width);

    if (!lengthNum || !widthNum) {
      Alert.alert('Error', 'Please enter valid dimensions.');
      return;
    }

    // Step 1: Calculate Area (Length * Width with overhang)
    const area = lengthNum * widthNum;

    // Step 2: Apply Pitch Factor to Area
    const pitchFactor = 1.03;
    const result = pitchFactor * area;

    // Step 3: Calculate Gable Roof
    const gableRoof = result / 0.6 + 1;

    // Display results
    Alert.alert(
      'Roofing Materials Needed',
      `Roof Area: ${area.toFixed(2)} sq.m\n\n` +
      `Adjusted Area with Pitch: ${result.toFixed(2)} sq.m\n` +
      `Gable Roof Materials: ${gableRoof.toFixed(2)} units`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roofing Estimation</Text>

      <TextInput
        style={styles.input}
        placeholder="Length (m, with overhang)"
        keyboardType="numeric"
        value={length}
        onChangeText={setLength}
      />
      <TextInput
        style={styles.input}
        placeholder="Width (m, with overhang)"
        keyboardType="numeric"
        value={width}
        onChangeText={setWidth}
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

export default RoofingScreen;
