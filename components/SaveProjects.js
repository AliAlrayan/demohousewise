import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the plus icon

const SaveProjects = ({ navigation, route }) => {
  // Initialize the state with an empty array for projects
  const [projects, setProjects] = useState([]);

  // If a new project was passed via navigation, add it to the project list
  React.useEffect(() => {
    if (route.params?.newProject) {
      setProjects(prevProjects => [...prevProjects, route.params.newProject]);
    }
  }, [route.params?.newProject]);

  const renderProject = ({ item }) => (
    <View style={styles.projectContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/HWLogo.png')} style={styles.title} />
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navMenu} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="menu" size={35} color='#FCC205' />
          </TouchableOpacity>
        </View>
      </View>

      {/* Check if there are any projects */}
      {projects.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No saved projects yet.</Text>
        </View>
      ) : (
        <FlatList
          data={projects}
          renderItem={renderProject}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.projectList}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Options')}
      >
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCC205',
  },
  header: {
    backgroundColor: '#FCC205',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensure space between logo and nav
    alignItems: 'center',
    marginTop: 40,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    width: 330,
    height: 155,
    resizeMode: 'contain',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align menu to the left
    marginTop: -30,
    marginLeft:-100,
  },
  navMenu: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#353336',
  },
  projectList: {
    padding: 20,
  },
  projectContainer: {
    width: '45%',
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10, // Added border radius for better appearance
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'gray',
    marginBottom:90,
  },
  fab: {
    position: 'absolute', 
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#353336',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SaveProjects;
