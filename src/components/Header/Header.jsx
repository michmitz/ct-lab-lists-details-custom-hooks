import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return <>
  <h1>Rick and Morty Characters Galore!</h1>;
  <Link to="/">Home Page</Link>
  </>
}