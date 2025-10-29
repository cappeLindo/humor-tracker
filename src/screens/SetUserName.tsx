import { StyleSheet, Text, TextInput, View } from 'react-native';

import { GeralInput } from '../shared/components/Input';
import { theme } from '../shared/themes/Themes';


export const SetUserNamePage = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Qual é o seu nome?
      </Text>

      <GeralInput label='Nome'>
        <TextInput
          style={styles.input}
          placeholder='Escreva seu nome aqui...'
          placeholderTextColor={theme.colors.textPlaceholder}
        />
      </GeralInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8
  },
  title: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  },
  input: {
    padding: 12,
    color: theme.colors.text,
    fontSize: theme.fonts.sizes.body,
    fontFamily: theme.fonts.family.regular,
  }
});