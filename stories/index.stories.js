import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from './modal'

storiesOf('Modal', module)
  .add('with some emoji', () => (<Modal onClick={action('clicked')} />));
