import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const FlooringScreen = () => {
  const [area, setArea] = useState('');
  const [thickness, setThickness] = useState(''); // in meters
  
  const calculateMaterials = () => {
    // Convert inputs to numbers
    const areaNum = parseFloat(area);
    const thicknessNum = parseFloat(thickness);

    if (!areaNum || !thicknessNum) {
      Alert.alert('Error', 'Please enter valid dimensions.');
      return;
    }

    // Step 1: Calculate Wet Volume
    const wetVolume = areaNum * thicknessNum;

    // Step 2: Calculate Dry Volume (considering 1.54 as a factor for dry volume)
    const dryVolume = wetVolume * 1.54;

    // Step 3: Calculate Cement, Sand, and Gravel
    const ratioSum = 1 + 3 + 3;
    const cementQuantity = (1 / ratioSum) * dryVolume; // Amount of cement in cubic meters
    const cementBags = Math.ceil(cementQuantity * 40); // Assuming 40 kg per bag

    const sandQuantity = (cementQuantity * 3).toFixed(2); // Sand in cubic meters
    const gravelQuantity = (cementQuantity * 3).toFixed(2); // Gravel in cubic meters

    // Display results
    Alert.alert(
      'Materials Needed',
      `Floor Area: ${areaNum} sq.m\n` +
      `Thickness: ${thicknessNum} m\n\n` +
      `Concrete Volume: ${dryVolume.toFixed(2)} cu.m\n` +
      `Cement: ${cementBags} bags (40 kg each)\n` +
      `Sand: ${sandQuantity} cu.m\n` +
      `Gravel: ${gravelQuantity} cu.m`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flooring Estimation</Text>

      <TextInput
        style={styles.input}
        placeholder="Floor Area (sq.m)"
        keyboardType="numeric"
        value={area}
        onChangeText={setArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Thickness (m)"
        keyboardType="numeric"
        value={thickness}
        onChangeText={setThickness}
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

export default FlooringScreen;
