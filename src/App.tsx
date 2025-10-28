import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { FirstComponent } from '@/shared/components/FirstComponents';
import { MyButton } from '@/shared/components/MyButton';
import { ScrollViewTela } from '@/shared/components/ScrollView';


export default function App() {
  const [soma, setSoma] = useState<number>(0);
  
  return (
    <SafeAreaView>
      {/*
      <FirstComponent text='Primeiro componente'/>
      <FirstComponent text='Segundo componente'/>
      <MyButton title='click me' activeOpacity={0.1} onPress={() => Alert.alert('você foi hackeado!')}/>
      <MyButton
        title='adicione um número' activeOpacity={0.7}
        onPress={() => {setSoma(soma + 1)}}
      />
      <MyButton 
        title='remova um número' activeOpacity={0.7}
        onPress={() => {setSoma(soma - 1)}}
      />
      <Text style={styles.counterNumbers}>
        Counter - {soma}
      </Text>
      */}
      <ScrollViewTela />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  counterNumbers: { 
    textAlign: "center", 
    marginTop: 20,
    fontSize: 18,
    fontWeight: "medium"
  }


});