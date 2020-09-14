import React, { Component } from "react";

import GlobalStyle from './components/styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload/index';

class App extends Component {
  render() {
    return (
    <Container>
      <Content>
      <Upload />
      </Content>
      <GlobalStyle />
     </Container>
    );
  }
}

export default App;