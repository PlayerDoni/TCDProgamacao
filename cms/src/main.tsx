import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import "react-toastify/dist/ReactToastify.css";

import "./styles/global.css";
import { StrictMode } from "react";

const customTheme = createTheme({
  palette: {
    mode: 'dark', // Modo escuro para maior contraste
    primary: {
      main: '#0b3d0b', // Verde como cor principal agora
      contrastText: '#ffeb3b', // Texto amarelo nos botões principais
    },
    secondary: {
      main: '#2196f3', // Azul agora é a cor secundária
      contrastText: '#ffeb3b', // Texto amarelo nos botões secundários
    },
    background: {
      default: '#2196f3', // Fundo azul escuro
      paper: '#1565c0', // Azul mais claro para superfícies (cartões)
    },
    text: {
      primary: '#ffeb3b', // Texto principal em amarelo
      secondary: '#fff176', // Texto secundário em amarelo mais claro
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`, // Fontes padrão do Material-UI
    fontSize: 14, // Tamanho da fonte base
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#ffeb3b', // Títulos principais em amarelo
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#fff176', // Subtítulos em amarelo mais claro
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
