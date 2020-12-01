import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen115203Navigator from '../features/CopyOfBlankScreen115203/navigator';
import BlankScreen115198Navigator from '../features/BlankScreen115198/navigator';
import BlankScreen015194Navigator from '../features/BlankScreen015194/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen115203: { screen: CopyOfBlankScreen115203Navigator },
BlankScreen115198: { screen: BlankScreen115198Navigator },
BlankScreen015194: { screen: BlankScreen015194Navigator },

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
