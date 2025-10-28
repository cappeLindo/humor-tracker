import { Inter_800ExtraBold, Inter_400Regular_Italic, Inter_400Regular, useFonts } from '@expo-google-fonts/inter';
import { AppRoutes } from '@/Routes';


export default function App() {

  const [loaded, err] = useFonts({
    extraBold: Inter_800ExtraBold,
    italic: Inter_400Regular_Italic,
    regular: Inter_400Regular,
  });

  if(!loaded && err) { 
    return null;
  } 
  
  return (
    <AppRoutes /> 
  );
}

