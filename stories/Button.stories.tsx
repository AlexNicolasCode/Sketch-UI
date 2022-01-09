import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from "../src"

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Width and Height', () => <Button w='300' h='150' wmd='175' hmd='100'>Width and Height</Button>)
  .add('Background', () => <Button bg='0202020' color='f9f9f9'>Background</Button>)
  .add('Border', () => <Button borderSize='20' borderColor='f9f9f9'>Border</Button>)
  .add('rounded', () => <Button rounded roundedSize='20' borderSize='20' borderColor='f9f9f9'>Border</Button>)