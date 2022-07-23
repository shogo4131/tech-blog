---
name: 'ReactComponent'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  module: 'ディレクトリ名を入力'
  name: 'コンポーネント名を入力'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import { FC } from 'react';

import styles from './index.module.css';

type Props = {};

export const {{ inputs.name | pascal }}: FC<Props> = ({}) => {
  return <div>{{ inputs.name | pascal }}</div>;
};
```

# `{{ inputs.name | pascal }}/index.module.css`

```css
.root {
}
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from './index';

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {};
```
