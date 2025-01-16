// Importa as bibliotecas necessárias do React e React Native.
// React é a biblioteca principal para a criação de componentes React.
// 'StyleSheet', 'Text', e 'View' são componentes da biblioteca 'react-native' que ajudam a estruturar e estilizar a interface.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// O componente App é a função principal que retorna a interface de usuário do aplicativo.
export default function App() {

  // A função 'return' define a estrutura da interface, composta por componentes que serão exibidos na tela.
  return (
    // O componente View serve como contêiner para agrupar outros componentes. Nesse caso, ele vai centralizar o texto na tela.
    <View style={styles.container}>

      {/* 
        O componente Text é usado para exibir texto na tela.
        A propriedade 'style' aplica o estilo 'styles.grande' ao texto, o que define o tamanho da fonte como 50.
      */}
      <Text style={styles.grande}>Olá</Text>
    </View>
  );
}

// O 'StyleSheet' é utilizado para definir os estilos de forma organizada e eficiente.
const styles = StyleSheet.create({

  // O estilo 'container' define a aparência do componente View, que envolve o conteúdo da tela.
  container: {
    // 'flex: 1' faz com que a View ocupe toda a tela disponível, garantindo que o conteúdo seja exibido corretamente.
    flex: 1,

    // 'backgroundColor: #fff' define a cor de fundo da tela como branca.
    backgroundColor: '#fff',

    // 'alignItems: 'center'' alinha os itens dentro do componente View no eixo horizontal (centro).
    alignItems: 'center',

    // 'justifyContent: 'center'' alinha os itens dentro do componente View no eixo vertical (centro).
    justifyContent: 'center',
  },

  // O estilo 'grande' é aplicado ao componente Text para ajustar o tamanho da fonte.
  grande: {
    // 'fontSize: 50' define o tamanho da fonte do texto como 50 pixels, deixando-o grande.
    fontSize: 50,
  }
});
