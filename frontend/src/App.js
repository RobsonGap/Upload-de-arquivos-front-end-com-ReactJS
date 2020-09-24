import React, { Component } from "react";
import { uniqueId } from 'lodash';

import GlobalStyle from './components/styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload/index';
import FileList from './components/FileList';

class App extends Component {
  state = {
    uploadedFiles: [],
  };

handleUpload = files => {
  const uploadedFiles = fles.map(file => ({
    file,
    id: uniqueId()
  }))
};

  render() {
    return (
    <Container>
      <Content>
      <Upload onUpload={this.handleUpload} />
      <FileList />
      </Content>
      <GlobalStyle />
     </Container>
    );
  }
}

export default App;