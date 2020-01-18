import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './pages/MapRadar';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Initial: {
      screen: Initial,
      navigationOptions: {
        title: 'DevRadar'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no GitHub'
      }
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7d40E7'
      }
    }
  })
);

export default Routes;
