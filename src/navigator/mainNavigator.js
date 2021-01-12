import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings191719Navigator from '../features/Settings191719/navigator';
import UserProfile191712Navigator from '../features/UserProfile191712/navigator';
import Settings191711Navigator from '../features/Settings191711/navigator';
import Settings191709Navigator from '../features/Settings191709/navigator';
import SignIn2191707Navigator from '../features/SignIn2191707/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings191719: { screen: Settings191719Navigator },
UserProfile191712: { screen: UserProfile191712Navigator },
Settings191711: { screen: Settings191711Navigator },
Settings191709: { screen: Settings191709Navigator },
SignIn2191707: { screen: SignIn2191707Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
