import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from "../src"

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Width and Height', () => <Button w='300' h='150' wmd='175' hmd='100'>Width and Height</Button>)
  .add('Background', () => <Button bg='020202' color='f9f9f9'>Background</Button>)
  .add('Border', () => <Button borderSize='20' borderColor='f9f9f9'>Border</Button>)
  .add('Rounded', () => <Button rounded roundedSize='20' borderSize='20' borderColor='f9f9f9'>Rounded</Button>)
  .add('Outline', () => <Button outline>Outline</Button>)
  .add('Outline with color', () => <Button outline outlineColor='f9f9f9'>Outline with color</Button>)
  .add('Outline with size', () => <Button outline outlineSize='10'>Outline with size</Button>)
  .add('Outline with color and size', () => <Button outline outlineColor='f9f9f9' outlineSize='10'>Outline with color and size</Button>)