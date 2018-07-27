import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Modal from '../packages/modal'

class TestWrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  submitForm = () => {
    console.log('hear i am');
  };

  render () {
    const { showModal } = this.state;
    return (
      <div>
        <h2> Helllo from here </h2>
        <button type="button" onClick={this.toggleModal}>
        show me!
        </button>

        <div>
          <Modal isOpen={showModal} toggleModal={this.toggleModal}>
            <div>I'm inside the modal</div>
            <div>I'm the body of the modal</div>
            <button type="button" onClick={this.submitForm}> Yass </button>
          </Modal>
        </div>
      </div>
    );
  }
}

storiesOf('Simple Modal', module).add('hidden with display: none', () => <TestWrapper /> );

// storiesOf('Modal', module)
//   .add('isOpen false', () => (
//     <div>
//       Someone is using our modal:
//       <Modal isOpen={false} toggleModal={() => {}} >
//         <div>I'm drawn in the modal through props.children</div>
//       </Modal>
//     </div>
//   ))
//   .add('isOpen true', () => (
//     <div>
//       Someone is using our modal:
//       <Modal isOpen={true} toggleModal={() => {}} >
//         <div>I'm drawn in the modal through props.children</div>
//       </Modal>
//     </div>
  // ));;
