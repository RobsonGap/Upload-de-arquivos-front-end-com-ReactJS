import React, { Component } from "react";

import GlobalStyle from './components/styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload/index';
import FileList from './components/FileList';


class App extends Component {
  render() {
    return (
    <Container>
      <Content>
      <Upload />
      <FileList />
      </Content>
      <GlobalStyle />
     </Container>
    );
  }
}

export default App;