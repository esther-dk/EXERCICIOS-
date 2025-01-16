// Importa o componente StatusBar do módulo 'expo-status-bar'.
// Esse componente é usado para personalizar a barra de status (a área na parte superior da tela que exibe informações como hora, bateria, etc.).
import { StatusBar } from 'expo-status-bar';

// Importa o React, que é a biblioteca principal para construir interfaces de usuário.
// React Native é baseado no React, por isso é obrigatório importar essa biblioteca.
import React from 'react';

// Importa os componentes do React Native que serão usados para criar a interface:
// - StyleSheet: para criar estilos de maneira otimizada para o React Native.
// - Text: para renderizar texto na tela (não usado neste exemplo, mas foi importado).
// - View: um contêiner básico que funciona como uma "div" no HTML, usado para organizar os elementos da interface.
// - Image: para exibir imagens na interface.
// - Platform: fornece informações sobre a plataforma em que o aplicativo está rodando (iOS ou Android).
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

// Declaração de uma constante chamada `ico` para determinar qual imagem será exibida com base na plataforma atual.
// O operador ternário (`? :`) é usado para fazer essa verificação:
// - `Platform.OS` retorna uma string que indica o sistema operacional atual: 'ios' ou 'android'.
// - Se o sistema operacional for iOS, carrega o arquivo './assets/platform/platform.ios.png'.
// - Caso contrário, carrega o arquivo './assets/platform/platform.android.png'.
const ico = Platform.OS === 'ios'
  ? require('./assets/platform/platform.ios.png') // Caminho para o arquivo de imagem do iOS.
  : require('./assets/platform/platform.android.png'); // Caminho para o arquivo de imagem do Android.

// Define o componente principal do aplicativo.
// Este componente é uma função que retorna os elementos que compõem a interface do usuário.
export default function App() {
  return (
    // Usa o componente View como o contêiner principal da interface.
    // Ele contém todos os elementos visuais que serão exibidos na tela.
    <View style={styles.container}>
      {/* O componente Image exibe uma imagem na tela.
          A propriedade `source` recebe o valor da variável `ico`,
          que aponta para a imagem apropriada com base no sistema operacional. */}
      <Image source={ico} />

      {/* Adiciona o componente StatusBar à interface.
          Ele é responsável por ajustar e exibir a barra de status do dispositivo.
          A propriedade `style` está definida como "auto", o que faz com que a aparência
          da barra de status seja ajustada automaticamente, dependendo do tema do sistema (claro ou escuro). */}
      <StatusBar style="auto" />
    </View>
  );
}

// Define os estilos do aplicativo usando o StyleSheet.create().
// Isso cria um objeto que organiza as regras de estilo, similar ao CSS, mas otimizado para o React Native.
const styles = StyleSheet.create({
  // Estilo para o contêiner principal da interface.
  container: {
    flex: 1, // Define que o contêiner deve ocupar todo o espaço disponível na tela.
    backgroundColor: '#fff', // Define a cor de fundo do contêiner como branco.
    alignItems: 'center', // Alinha todos os elementos filhos horizontalmente no centro do contêiner.
    justifyContent: 'center', // Alinha todos os elementos filhos verticalmente no centro do contêiner.
  },
});
