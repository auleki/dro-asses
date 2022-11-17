import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Cards from './components/layout/Cards';
import Footer from './components/layout/Footer';
import ThemeSwitcher from './components/layout/ThemeSwitcher';
import SearchBar from './components/SearchBar';
import { ThemeContext } from './context/ThemeContext';
import { AppContainer, PageContainer } from './styles/components.styled';
import { FlexRow } from './styles/layout.styled';

function App() {
  const themeContext = useContext(ThemeContext)
  const { activeTheme, isDark } = themeContext

  return (
    <ThemeProvider theme={activeTheme}>
      <PageContainer>
        <AppContainer darkMode={isDark}>
          <div>
            <h1>Search for the books you need</h1>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
          <SearchBar />
          <FlexRow gap="2">
            <Cards />
          </FlexRow>
          <Footer />
        </AppContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
