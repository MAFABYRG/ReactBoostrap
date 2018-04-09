import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Banner extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.props.titulo}</h1>
          <p className="lead">{this.props.subtitulo}</p>
        </Jumbotron>
      </div>   
    );
  }
}

export default Banner;
