import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

const root = document.getElementById('root')!;

const tree = (
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered; dev serves an empty shell.
if (root.hasChildNodes()) {
  hydrateRoot(root, tree);
} else {
  createRoot(root).render(tree);
}
