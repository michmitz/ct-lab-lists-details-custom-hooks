import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());

  it('renders single character', () => {
    const { asFragment } = render(<CharacterItem
      name='Michelle'
      imageUrl='url@url.com'
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});