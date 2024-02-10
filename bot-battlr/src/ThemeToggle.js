import { useColorMode, Button } from "@chakra-ui/react";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}

export default ThemeToggle;
