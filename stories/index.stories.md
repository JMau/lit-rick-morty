```js script
import { html } from '@open-wc/demoing-storybook';
import '../lit-rick-morty.js';

export default {
  title: 'LitRickMorty',
  component: 'lit-rick-morty',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# LitRickMorty

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add lit-rick-morty
```

```js
import 'lit-rick-morty/lit-rick-morty.js';
```

```js preview-story
export const Simple = () => html`
  <lit-rick-morty></lit-rick-morty>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <lit-rick-morty title="Hello World"></lit-rick-morty>
`;
```
