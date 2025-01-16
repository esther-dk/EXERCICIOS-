// Importa o componente StatusBar do módulo 'expo-status-bar'.
// Esse componente é usado para gerenciar a barra de status do dispositivo, que é a área superior que exibe informações como hora, bateria, etc.
import { StatusBar } from 'expo-status-bar';

// Importa o React, que é necessário para criar componentes funcionais e interfaces no React Native.
import React from 'react';

// Importa os componentes StyleSheet, Text, View e Image do React Native.
// - StyleSheet: usado para definir estilos de maneira otimizada no React Native.
// - Text: componente para exibir textos (não está usado neste código, mas poderia ser adicionado futuramente).
// - View: um contêiner básico que funciona como uma "div" no HTML, usado para organizar os elementos na tela.
// - Image: usado para exibir imagens na interface.
import { StyleSheet, Text, View, Image } from 'react-native';

// Define o componente principal do aplicativo.
// O componente é escrito como uma função, que retorna a interface(a parte visual) do usuário para ser exibida.
export default function App() {
  return (
    // O componente View é usado como o contêiner principal da interface.
    // Ele agrupa todos os elementos visuais que serão exibidos na tela.
    <View style={styles.container}>
      {/* O componente Image é usado para exibir uma imagem no aplicativo.
          A propriedade `source` recebe o caminho para o arquivo de imagem local, 
          que neste caso está na pasta './assets/college' com o nome 'college.png'. */}
    <Image source={require('./assets/college/college.png')} />

      {/* O componente StatusBar é usado para gerenciar a aparência da barra de status.
          A propriedade `style` está definida como "auto", o que significa que a barra de status 
          será ajustada automaticamente com base no tema do sistema (claro ou escuro). */}
      <StatusBar style="auto" />
    </View>
  );
}

// Cria um conjunto de estilos para o aplicativo usando StyleSheet.create().
// Isso organiza os estilos de forma otimizada para o React Native.
const styles = StyleSheet.create({
  // Define o estilo para o contêiner principal.
  container: {
    flex: 1, // Define que o contêiner deve ocupar todo o espaço disponível na tela (comportamento de layout flexível).
    backgroundColor: '#fff', // Define a cor de fundo do contêiner como branco.
    //alignItems(alinhar itens)
    alignItems: 'center', // Alinha os elementos filhos horizontalmente no centro do contêiner.
    //justifyContent(justificar conteúdo)
    justifyContent: 'center', // Alinha os elementos filhos verticalmente no centro do contêiner.
  },
});
