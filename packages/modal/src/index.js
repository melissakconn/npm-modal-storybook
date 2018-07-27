import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles'
const { bool, func } = PropTypes;

class ModalEntry extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      respectMouse: true,
    };
  }

  toggleMouse = () => {
    console.log('listen to me');
    this.setState({ respectMouse: !this.state.respectMouse });
  };

  toggleModal = () => {
    if(this.state. respectMouse)
      this.props.toggleModal();

  console.log('did not toggle');
  };


  render(){
    const { isOpen } = this.props;
    console.log('I am here', isOpen);
    if (!isOpen) return null;

    return (
      <Container onClick={this.toggleModal}>
        <Content onMouseEnter={this.toggleMouse}onMouseExit={this.toggleMouse}>{this.props.children}
        {this.props.children.map(child => {
          console.log('this is the child', child)
          if(child.type !== 'button') return child;

          //header
          //body
          //some animation

          return (
            <div onClick={this.toggleModal} onMouseEnter={this.toggleMouse}
            onMouseLeave={this.toggleMouse}>
            {child}
            </div>
          );
        })}
        </Content>
      </Container>
    );
  }
}

export default ModalEntry;
