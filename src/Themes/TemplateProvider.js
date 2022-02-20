import React, { createContext } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const TemplateContext = createContext(null);

function TemplateProvider({ children }) {
  const Theme = createTheme({
    overrides: {
      MuiDrawer: {
        paperAnchorLeft: {
          minWidth: 460
        }
      },
      MuiBackdrop: {
        root: {
          backgroundColor: 'unset'
        }
      }
    }
  })

  return <TemplateContext.Provider value={{}}>
    <ThemeProvider theme={Theme}>
      {children}
    </ThemeProvider>
  </TemplateContext.Provider>;
}

export default TemplateProvider;
