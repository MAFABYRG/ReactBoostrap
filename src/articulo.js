import React, { Component } from 'react';

class Articulo extends Component {
  render() {
    return (
        <div class="articulo rounded bg-secondary p-3" className={this.props.colordetexto + ' '+this.props.colordefondo}>
            <h2>{this.props.titulo}</h2>
            <h6> <i class="fa fa-calendar"></i>{this.props.autor}</h6>
            <h6><span class="badge badge-warning">PHP</span> <span class="badge badge-info">Web</span> </h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quis placeat dolor ex esse blanditiis modi delectus tempore deserunt? Ducimus at dolor necessitatibus molestias dolores cumque quis quo facere fugiat!</p>
        </div>
    );
  }
}

export default Articulo;
