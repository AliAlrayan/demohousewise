import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FootingSteelCalculation = () => {
  const [footingLength, setFootingLength] = useState('');
  const [footingWidth, setFootingWidth] = useState('');
  const [footingThickness, setFootingThickness] = useState('0.25'); // default 20 cm (0.20 meters)
  const [numOfSlabs, setNumOfSlabs] = useState(); // default to 12 slabs
  const [spacing1, setSpacing1] = useState('150'); // default 150mm
  const [spacing2, setSpacing2] = useState('150'); // default 150mm
  const [pricePerBar, setPricePerBar] = useState(''); // Price per 6-meter bar
  const [cementPricePerBag, setCementPricePerBag] = useState(''); // Price per bag of cement
  const [sandPricePerCubicMeter, setSandPricePerCubicMeter] = useState(''); // Price per cubic meter of sand
  const [gravelPricePerCubicMeter, setGravelPricePerCubicMeter] = useState(''); // Price per cubic meter of gravel
  const [steelBars, setSteelBars] = useState(0);
  const [totalBars, setTotalBars] = useState(0);
  const [steelCost, setSteelCost] = useState(0);
  const [volume, setVolume] = useState(0);
  const [cementBags, setCementBags] = useState(0);
  const [sandCubicMeters, setSandCubicMeters] = useState(0);
  const [gravelCubicMeters, setGravelCubicMeters] = useState(0);
  const [cementCost, setCementCost] = useState(0);
  const [sandCost, setSandCost] = useState(0);
  const [gravelCost, setGravelCost] = useState(0);
  const [totalMaterialCost, setTotalMaterialCost] = useState(0);

  const calculateSteelBarsAndMaterials = () => {
    const length = parseFloat(footingLength);
    const width = parseFloat(footingWidth);
    const thickness = parseFloat(footingThickness);
    const slabs = parseInt(numOfSlabs);
    const barSpacing1 = parseFloat(spacing1) / 1000; // convert mm to meters
    const barSpacing2 = parseFloat(spacing2) / 1000; // convert mm to meters
    const price = parseFloat(pricePerBar);
    const cementPrice = parseFloat(cementPricePerBag);
    const sandPrice = parseFloat(sandPricePerCubicMeter);
    const gravelPrice = parseFloat(gravelPricePerCubicMeter);

    // Input validation
    if (isNaN(length) || length <= 0 || 
        isNaN(width) || width <= 0 || 
        isNaN(thickness) || thickness <= 0 || 
        isNaN(slabs) || slabs <= 0 || 
        isNaN(barSpacing1) || barSpacing1 <= 0 || 
        isNaN(barSpacing2) || barSpacing2 <= 0 || 
        isNaN(price) || price < 0 || 
        isNaN(cementPrice) || cementPrice < 0 || 
        isNaN(sandPrice) || sandPrice < 0 || 
        isNaN(gravelPrice) || gravelPrice < 0) {
      alert('Please enter valid positive dimensions and prices.');
      return;
    }

    // Calculate number of bars for length and width using the minimum spacing
    const minSpacing = Math.min(barSpacing1, barSpacing2);
    const barsForLength = Math.ceil(length / minSpacing) + 1; // Adding 1 for the end bar
    const barsForWidth = Math.ceil(width / minSpacing) + 1;

    // Total number of 1-meter pieces needed
    const totalBarsNeeded = barsForLength + barsForWidth;

    // Number of 6-meter steel bars required
    const steelBarsRequired = Math.ceil(totalBarsNeeded / 6); // Since each steel bar is 6 meters long

    // Calculate total cost for steel bars
    const totalSteelCost = steelBarsRequired * price;

    // Calculate volume of the footing slabs
    const volumeOfConcrete = slabs * (thickness * length * width); // volume in cubic meters

    // Calculate materials based on class "A" concrete ratios
    // Calculate materials based on class "A" concrete ratios
    const cementRequired = Math.round(volumeOfConcrete * 9.0); // Round to nearest number 9 bags of cement per cubic meter
    const sandRequired = volumeOfConcrete * 0.50; // 0.5 cubic meters of sand per cubic meter of concrete
    const gravelRequired = volumeOfConcrete * 1.0; // 1 cubic meter of gravel per cubic meter of concrete

    // Calculate costs for cement, sand, and gravel
    const cementTotalCost = cementRequired * cementPrice;
    const sandTotalCost = sandRequired * sandPrice;
    const gravelTotalCost = gravelRequired * gravelPrice;

    // Calculate the total material cost
    const totalCost = totalSteelCost + cementTotalCost + sandTotalCost + gravelTotalCost;

    // Update state to reflect calculated values
    setSteelBars(steelBarsRequired);
    setTotalBars(totalBarsNeeded);
    setSteelCost(totalSteelCost);
    setVolume(volumeOfConcrete);
    setCementBags(cementRequired);
    setSandCubicMeters(sandRequired);
    setGravelCubicMeters(gravelRequired);
    setCementCost(cementTotalCost);
    setSandCost(sandTotalCost);
    setGravelCost(gravelTotalCost);
    setTotalMaterialCost(totalCost);
  };

  const resetFields = () => {
    setFootingLength('');
    setFootingWidth('');
    setFootingThickness('0.20');
    setNumOfSlabs('12');
    setSpacing1('150');
    setSpacing2('150');
    setPricePerBar('');
    setCementPricePerBag('');
    setSandPricePerCubicMeter('');
    setGravelPricePerCubicMeter('');
    setSteelBars(0);
    setTotalBars(0);
    setSteelCost(0);
    setVolume(0);
    setCementBags(0);
    setSandCubicMeters(0);
    setGravelCubicMeters(0);
    setCementCost(0);
    setSandCost(0);
    setGravelCost(0);
    setTotalMaterialCost(0);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Footing Steel & Material Calculation</Text>

        {/* Inputs for Length, Width, and Thickness */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Footing Length (m):</Text>
          <TextInput
            style={styles.input}
            placeholder="Length"
            value={footingLength}
            onChangeText={setFootingLength}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Footing Width (m):</Text>
          <TextInput
            style={styles.input}
            placeholder="Width"
            value={footingWidth}
            onChangeText={setFootingWidth}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Footing Thickness (m):</Text>
          <TextInput
            style={styles.input}
            placeholder="Thickness (0.20m default)"
            value={footingThickness}
            onChangeText={setFootingThickness}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Number of Slabs:</Text>
          <TextInput
            style={styles.input}
            placeholder="Number of Slabs (default 12)"
            value={numOfSlabs}
            onChangeText={setNumOfSlabs}
            keyboardType="numeric"
          />
        </View>

        {/* Inputs for spacing */}
        <View style={styles.label2}>
          <Text style={styles.labelSpacing}>Spacing 1 (mm):</Text>
          <TextInput
            style={styles.input2}
            placeholder="Spacing 1 (150mm)"
            value={spacing1}
            onChangeText={setSpacing1}
            keyboardType="numeric"
          />
          <Text style={styles.labelSpacing}>Spacing 2 (mm):</Text>
          <TextInput
            style={styles.input2}
            placeholder="Spacing 2 (150mm)"
            value={spacing2}
            onChangeText={setSpacing2}
            keyboardType="numeric"
          />
        </View>


        {/* Inputs for prices */}
        <View style={styles.inputRow}>
          <Text style={styles.label}>Steel Bar Price (₱ per 6m):</Text>
          <TextInput
            style={styles.input}
            placeholder="Steel Bar Price"
            value={pricePerBar}
            onChangeText={setPricePerBar}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Cement Price (₱ per bag):</Text>
          <TextInput
            style={styles.input}
            placeholder="Cement Price"
            value={cementPricePerBag}
            onChangeText={setCementPricePerBag}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Sand Price (₱ per m³):</Text>
          <TextInput
            style={styles.input}
            placeholder="Sand Price"
            value={sandPricePerCubicMeter}
            onChangeText={setSandPricePerCubicMeter}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Gravel Price (₱ per m³):</Text>
          <TextInput
            style={styles.input}
            placeholder="Gravel Price"
            value={gravelPricePerCubicMeter}
            onChangeText={setGravelPricePerCubicMeter}
            keyboardType="numeric"
          />
        </View>

        {/* Button to trigger calculation */}
        <View style={styles.inputRow2}>
          <TouchableOpacity style={styles.calculateButton} onPress={calculateSteelBarsAndMaterials}>
            <Text style={styles.buttonText}>Calculate</Text>
          </TouchableOpacity>

          {/* Button to reset all fields */}
          <TouchableOpacity style={styles.resetButton} onPress={resetFields}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {/* Display result dynamically */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Steel Calculation:</Text>
          <View style={styles.resultsRow}>
            <Text>Total Rebars Needed: </Text>
            <Text>{totalBars} pcs.</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text>Total Comm. 6m Bar Length: </Text>
            <Text>{steelBars} pcs.</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text>Total Rebars Cost: </Text>
            <Text>{steelCost.toFixed(2)} ₱</Text>
          </View>

          <Text style={styles.resultText}>Concrete Mix Calculation:</Text>
          <View style={styles.resultsRow}>
            <Text>Volume of Concrete: </Text>
            <Text>{volume.toFixed(2)} m³</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text>Cement: </Text>
            <Text>{cementBags.toFixed(2)} bags </Text>
            <Text>Cost: {cementCost.toFixed(2)} ₱</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text>Sand: </Text>
            <Text>{sandCubicMeters.toFixed(2)} m³</Text>
            <Text>Cost: {sandCost.toFixed(2)} ₱</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text>Gravel: </Text>
            <Text>{gravelCubicMeters.toFixed(2)} m³</Text>
            <Text>Cost: {gravelCost.toFixed(2)} ₱</Text>
          </View>

          <View style={styles.resultsRow}>
            <Text>Total Material Cost: </Text>
            <Text>{totalMaterialCost.toFixed(2)} ₱</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 150,
  },
  label2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  labelSpacing: {
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    width: 100,
    height: 35,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    height: 40,
  },
  input2: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    height: 35,
    width: 200,
  },
  calculateButton: {
    backgroundColor: '#FCC205',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginLeft : 10
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#FCC205',
    borderWidth: 2
  },
  resultsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingVertical: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default FootingSteelCalculation;
