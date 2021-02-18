import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getCharacterById } from '../../services/rickAndMorty-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/rickAndMorty-api');

describe('CharacterDetail component', () => {
  it('displays a character after loading', () => {
    getCharacterById.mockResolvedValue({
      id: 1,
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      imageUrl: 'rick.png'
    });

    render(<MemoryRouter initialEntries={['/character/1']}>
      <Route path="/character/:id" component={CharacterDetail}/>
    </MemoryRouter>);

    screen.getByText('Loading...'); 

    return waitFor(() => {
      screen.getByText('Rick');
      screen.getByText('Alive');
      screen.getByText('Human');
      screen.getByText('Rick');
    });
  });
});
