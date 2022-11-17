import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Cards from './components/layout/Cards';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ThemeSwitcher from './components/layout/ThemeSwitcher';
import SearchBar from './components/SearchBar';
import SearchSection from './components/SearchSection';
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
          <Navbar />
          <SearchSection />
          <FlexRow>
            <Cards />
          </FlexRow>
          <Footer />
        </AppContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
