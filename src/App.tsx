import { Container, Stack, Typography } from '@mui/material'

import './App.css'
import { JavaScriptLogo } from './JavaScript'

function App() {
  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JavaScriptLogo />
          <Typography variant="h2" component="h1">
            <h1>JavaScript Quiz</h1>
          </Typography>
        </Stack>
      </Container>
    </main>
  )
}

export default App
