import { StackNavigator, TabNavigator } from 'react-navigation';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import TransactionMemo from './components/TransactionMemo';
import ReportSummary from './components/ReportSummary';

const TabNav = TabNavigator({
  TransactionList: { 
    screen: TransactionList,
    navigationOptions: {
        title: 'title_TransactionList',
        tabBarLabel: 'History'
    }
  },
  TransactionForm: { 
    screen: TransactionForm
  },
  ReportSummary: { 
    screen: ReportSummary,
    navigationOptions: {
        title: 'title_ReportSummary',
        tabBarLabel: 'Report'
    }
  }
},
{
  tabBarPosition: 'bottom'
}
);

const RouterComponent = StackNavigator({
  TabNav: { 
    screen: TabNav,
    navigationOptions: {
      //  title: 'title_TabNav'
    }
  },
  TransactionMemo: {
    screen: TransactionMemo,
    navigationOptions: {
      //  title: 'title_TabNav'
    }
  }
}, 
{
    initialRouteName: 'TabNav'
}
);

export default RouterComponent;

