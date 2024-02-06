import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

import "./style.css";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <ModeToggle />
          <Button>Click me</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
