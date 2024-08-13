import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from './button';
import randomNumGenerator from './lib/dicegenerator';

const dicearr = [
  require('../assets/dice/dice-1.png'),
  require('../assets/dice/dice-2.png'),
  require('../assets/dice/dice-3.png'),
  require('../assets/dice/dice-4.png'),
  require('../assets/dice/dice-5.png'),
  require('../assets/dice/dice-6.png'),
];

export default function DiceContainer() {
  const [statearr, setStatearr] = React.useState([2, 5]);

  return (
    <View>
      <View style={styles.diceContainer}>
        <Image
          source={dicearr[statearr[0]]}
          style={{ width: 80, height: 80, marginHorizontal: 15 }}
        />
        <Image
          source={dicearr[statearr[1]]}
          style={{ width: 80, height: 80, marginHorizontal: 15 }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Roll"
          onPress={() => setStatearr([randomNumGenerator(), randomNumGenerator()])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  diceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
});

