import React from 'react';
import Realm from 'realm';
import { View, Text } from 'react-native';

class App2 extends React.Component {
    render() {
   const realm = new Realm({
     schema: [{ name: 'Dog', properties: { name: 'string' } }]
   });

  /* realm.write(() => {
     realm.create('Dog', { name: 'Rex' });
   });*/

   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
          path = {Realm.defaultPath};
       </Text>
     </View>
   );
 }
}

const styles = {
    container: {
        flex: 1
    },
    welcome: {

    }
};



export default App2;
