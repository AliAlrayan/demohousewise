import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/HomeScreen';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import BuildScreen from '../components/BuildScreen';
import OptionsBuild from '../components/OptionsBuild';
import ConcreteScreen from '../components/ConcreteScreen';
import WoodenScreen from '../components/WoodenScreen';
import ProfileScreen from '../components/ProfileScreen';
import Dashboard from '../components/Dashboard';
import CreateProjectScreen from '../components/CreateProjectScreen';
import ProjectHistoryScreen from '../components/ProjectHistoryScreen';
import ConcreteWall from '../components/ConcreteWall';
import HouseDimensionScreen from '../components/HouseDimensionScreen';
import FootingScreen from '../components/FootingScreen';
import ColumnScreen from '../components/ColumnScreen';
import SuggestProject from '../components/SuggestProject';
import SaveProjects from '../components/SaveProjects';
import RoomSize from '../components/Room';
import FeedbackScreen from '../components/FeedBackScreen';
import ConcreteBeamScreen from '../components/ConcreteBeamScreen';
import ConcreteFlooringScreen from '../components/ConcreteFlooringScreen';
import ConcreteRoofingScreen from '../components/ConcreteRoofingScreen';
import EstimateScreen from '../components/EstimateScreen';

const Stack = createStackNavigator();


const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='About'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Sign up" component={SignUpScreen} />
          <Stack.Screen name="Build" component={BuildScreen} />
          <Stack.Screen name="Options" component={OptionsBuild} />
          <Stack.Screen name="ConcreteScreen" component={ConcreteScreen} />
          <Stack.Screen name="WoodenScreen" component={WoodenScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="FeedBack" component={FeedbackScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Create" component={CreateProjectScreen} />
          <Stack.Screen name="History" component={ProjectHistoryScreen} />
          <Stack.Screen name="Concrete Wall" component={ConcreteWall} />
          <Stack.Screen name="House Dimension" component={HouseDimensionScreen} />
          <Stack.Screen name="Footing" component={FootingScreen} />
          <Stack.Screen name="Column" component={ColumnScreen} />
          <Stack.Screen name="Suggest" component={SuggestProject} />
          <Stack.Screen name="SavedProjects" component={SaveProjects} />
          <Stack.Screen name="Room" component={RoomSize} />
          <Stack.Screen name="Concrete Beam" component={ConcreteBeamScreen} />
          <Stack.Screen name="Concrete Flooring" component={ConcreteFlooringScreen} />
          <Stack.Screen name="Concrete Roofing" component={ConcreteRoofingScreen} />
          <Stack.Screen name="Estimate" component={EstimateScreen} />
        </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
