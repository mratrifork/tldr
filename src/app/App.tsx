import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from '@/styles/theme';
import { Router } from './Router';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}
