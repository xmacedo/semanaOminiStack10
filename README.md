# semanaOminiStack10

Código do boot Camp #semanaOminiStack 10.0 da Rocketseat.

Tecnologias NodeJS, React, React Native para aplicativos mobile e MongoDB para o Banco de Dados.

O vídeo é sobre o aplicativo concluído, onde criamos o “DevRadar”:

- Realiza cadastro de desenvolvedores pelo mundo utilizando com base a API do Google Maps e buscando as informações do Github, do desenvolvedor;
- Faz pesquisa em um raio de 10Km para localizar desenvolvedores com as tecnologias que informar;
- Cadastra e mostra em tempo real utilizando WebSocket;
- Funciona em Web altamente responsivo, Android e iOS;


### Ferramentas
 - VSCode
 - Insominia
 - MongoDB Compass
 - Xcode para simular iOs
 - Android Studio para simular Android

### Configuracoes
 - Fira Code
 - Zsh
 - git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
 - ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
 - sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"

### Plugins
#### Mobile
 - yarn global add expo-cli ==Instala o expo para o mobile

Bibliotecas para expo navigation

 - yarn add react-navigation
 - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
 - yarn add react-navigation-stack
 - yarn add @react-native-community/masked-view
 - expo install react-native-maps
 - expo install react-native-webview
 - yarn add axios

#### Web
 - yarn create react-app web == Cria a aplicacao 
 - yarn add axios
 - yarn add cors

#### BackEnd
 - yarn add axios
 - yarn add mongoose
 - yarn add nodemon -D
 - yarn add express
 - yarn add socket.io


Documentacao para o expo https://docs.expo.io/
