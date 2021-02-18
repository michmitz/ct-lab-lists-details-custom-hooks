import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/rickAndMorty-api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/rickAndMorty-api.jsx')

describe('CharacterList component', () => {
  it('displays a list of characters', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Rick', imageUrl: 'rick.png' }
    ])
    
    render(<MemoryRouter>
      <CharacterList />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('character-list');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});