import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native';

import { TNavigationScreenProps } from '../Routes';
import { Header } from '@/shared/components/Header';


export const HomePage = () => {
  const navigation = useNavigation<TNavigationScreenProps>();


  return <>
    <Header 
      name='Vitor'
    />
    <Text style={{fontFamily: 'extraBold'}}>Home</Text>

    <Button
      title='Go to Details'
      onPress={() => navigation.navigate('detail', { rate: 3 })}
    />

    <Button
      title='Go to Set User Name'
      onPress={() => navigation.navigate('setUserName')}
    />
  </>;
}