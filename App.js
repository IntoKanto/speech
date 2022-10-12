import { StatusBar } from 'expo-status-bar';
import { Button, ListViewBase, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Speech from 'expo-speech';
import { useEffect, useState } from 'react';

export default function App() {
  const [text, setText] = useState('')
  const [voices, setVoices] = useState([])

  

 
  
  const speakText = () => {    
   let options = {
      voice: 'com.apple.eloquence.en-GB.Grandpa'
    }
    Speech.speak(text, options)

  }

  return (
    <View style={styles.container}>

      <TextInput style={styles.input}
      value={text}
      onChangeText={text => setText(text)}
      />
      <Button 
      title='Speak'
      onPress={speakText}
      />
     
      <StatusBar style="auto" />
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
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    width: 150
  }
});
