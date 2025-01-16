// Importa as bibliotecas necessárias do React e React Native.
// React é a biblioteca principal para a criação de componentes React.
// 'ImageBackground', 'StyleSheet', 'Text', e 'View' são componentes da biblioteca 'react-native' que ajudam a estruturar e estilizar a interface.
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// O componente App é a função principal que retorna a interface de usuário do aplicativo.
export default function App() {

  // A função 'return' define a estrutura da interface, composta por componentes que serão exibidos na tela.
  return (
    // O componente ImageBackground é usado para definir uma imagem de fundo que vai cobrir a tela inteira.
    // 'source' é a propriedade onde você define o caminho da imagem de fundo.
    <ImageBackground 
      source={require('./assets/background/bg.jpg')} 
      style={styles.container}
    >
      {/* 
        O componente Text é usado para exibir texto na tela.
        A propriedade 'style' aplica o estilo 'styles.grande' ao texto, o que define o tamanho da fonte como 50.
      */}
      <Text style={styles.grande}>Olá</Text>
    </ImageBackground>
  );
}

// O 'StyleSheet' é utilizado para definir os estilos de forma organizada e eficiente.
const styles = StyleSheet.create({

  // O estilo 'container' define a aparência do componente ImageBackground, que envolve o conteúdo da tela.
  container: {
    // 'flex: 1' faz com que o ImageBackground ocupe toda a tela disponível, garantindo que o conteúdo seja exibido corretamente.
    flex: 1,

    // 'backgroundColor: '#fff'' define a cor de fundo da tela como branca, que será visível caso a imagem de fundo não cubra toda a tela.
    backgroundColor: '#fff',

    // 'alignItems: 'center'' alinha os itens dentro do componente ImageBackground no eixo horizontal (centro).
    alignItems: 'center',

    // 'justifyContent: 'center'' alinha os itens dentro do componente ImageBackground no eixo vertical (centro).
    justifyContent: 'center',
  },

  // O estilo 'grande' é aplicado ao componente Text para ajustar o tamanho da fonte.
  grande: {
    // 'fontSize: 50' define o tamanho da fonte do texto como 50 pixels, deixando-o grande.
    fontSize: 50,
  }
});
