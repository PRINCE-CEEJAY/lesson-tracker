import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ui/theme-provider.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider
        defaultTheme='dark'
        storageKey='vite-ui-theme'
      >
        <Navbar />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);
