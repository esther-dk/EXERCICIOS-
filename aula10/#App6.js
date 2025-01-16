// Importa as bibliotecas necessárias do React e React Native.
// 'react' é a biblioteca principal para criar componentes React.
// 'react-native' importa os componentes necessários para a criação da interface, como 'StyleSheet', 'Text' e 'View'.
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Importa o componente SVG(Gráficos Vetoriais Escaláveis) personalizado 'ImdLogo' que é um arquivo SVG localizado na pasta 'assets/svg'.
// 'ImdLogo' é usado como um componente React, permitindo que você o insira diretamente na interface com propriedades, como 'width' e 'height'.
import ImdLogo from './assets/svg/imd-logo.svg';

// Função principal do componente App, onde a interface do usuário é definida.
export default function App() {

  // 'return' define o que será exibido na tela. O componente 'View' funciona como um contêiner para agrupar os outros componentes.
  return (
    // O componente 'View' é usado como um contêiner para o conteúdo da tela. 
    // Ele tem um estilo atribuído para centralizar o conteúdo e garantir que ocupe toda a tela disponível.
    <View style={styles.container}>

      {/* 
        O componente 'ImdLogo' exibe a imagem SVG importada. 
        Ele tem as propriedades 'width' e 'height' definidas para 300, ajustando o tamanho da imagem.
        O SVG será exibido com esse tamanho específico na tela.
      */}
      <ImdLogo width={300} height={300} />
    </View>
  );
}

// 'StyleSheet' é usado para definir estilos de maneira eficiente e organizada.
// O 'StyleSheet.create' é um método que cria um objeto de estilos, que é mais eficiente do que usar objetos de estilo diretamente.
const styles = StyleSheet.create({

  // O estilo 'container' define o layout do componente 'View'.
  container: {
    // 'flex: 1' faz com que o componente 'View' ocupe todo o espaço disponível na tela.
    flex: 1,

    // 'backgroundColor: '#fff'' define a cor de fundo da tela como branca.
    backgroundColor: '#fff',

    // 'alignItems: 'center'' alinha os itens dentro do 'View' no eixo horizontal (centro).
    alignItems: 'center',

    // 'justifyContent: 'center'' alinha os itens dentro do 'View' no eixo vertical (centro).
    justifyContent: 'center',
  },

  // O estilo 'grande' está presente, mas não é utilizado nesse exemplo. Ele poderia ser aplicado a algum texto ou outro componente que precise de fonte grande.
  grande: {
    fontSize: 50,
  }
});


//obs
//A principal vantagem do SVG é que ele pode ser escalado para qualquer tamanho sem perder qualidade, o que o torna ideal para designs que precisam ser exibidos em diferentes resoluções e tamanhos, como ícones e logotipos.