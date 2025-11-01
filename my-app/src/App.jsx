import "./App.css";
import { GlobalStyle } from "./Components/GlobalStyle";
import stickers from "./sticker.json";
import { StickerList } from "./Components/Sticker/StickerList";

function App() {
  return (
    <>
      <StickerList stickers={stickers} />
      <GlobalStyle />
    </>
  );
}

export default App;
