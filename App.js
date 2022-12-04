import { StatusBar } from 'expo-status-bar';
import { Button, Form } from 'react-bootstrap';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [player1Money, setPlayer1Money] = useState(0);

  return (
    <View style={styles.container} >
      <div className='flex' >
        <Form.Label>Player 1</Form.Label>
        <Form.Control type="text" id="player1MoneyInput" value={player1Money} onChange={(event) => setPlayer1Money(parseInt(event.target.value))} />
        <Button onClick={() => setPlayer1Money(player1Money + 1)}>Money Me!</Button>
      </div>
      {`Player 1 has \$${player1Money}`}
      < StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
