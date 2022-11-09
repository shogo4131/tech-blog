import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import { Button } from './index';

describe('ボタンコンポーネントテスト', () => {
  afterEach(() => {
    cleanup();
  });

  it('[正常系]: childrenがに指定した文字が表示される', () => {
    render(<Button>Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('[正常系]: ボタンがクリックできる', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByText('Button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('[正常系]: classNameがpropsで渡される', () => {
    render(<Button className="testClassName">Button</Button>);
    const button = screen.getByText('Button');
    expect(button).toHaveClass('testClassName');
    expect(button).toBeEnabled();
  });
});
