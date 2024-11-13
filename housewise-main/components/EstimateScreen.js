import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EstimateScreen({ route }) {
  const { cementVolume = 0, sandVolume = 0, gravelVolume = 0 } = route.params || {};

  const CEMENT_COST_PER_CU_M = 350; // Cost per cubic meter of cement
  const SAND_COST_PER_CU_M = 200;   // Cost per cubic meter of sand
  const GRAVEL_COST_PER_CU_M = 150; // Cost per cubic meter of gravel

  const cementCost = cementVolume * CEMENT_COST_PER_CU_M;
  const sandCost = sandVolume * SAND_COST_PER_CU_M;
  const gravelCost = gravelVolume * GRAVEL_COST_PER_CU_M;

  const totalCost = cementCost + sandCost + gravelCost;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Material Cost Estimator</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Cement Cost: ₱{cementCost.toFixed(2)}</Text>
        <Text style={styles.resultText}>Sand Cost: ₱{sandCost.toFixed(2)}</Text>
        <Text style={styles.resultText}>Gravel Cost: ₱{gravelCost.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total Estimated Cost: ₱{totalCost.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCC205',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#353336',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    width: '80%',
  },
  resultText: {
    fontSize: 18,
    color: '#353336',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#353336',
    marginTop: 10,
  },
});
