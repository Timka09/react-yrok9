import { Component } from "react";
import { Box } from "../Box/Box";
import { Sticker } from "./Sticker";

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  render() {
    return (
      <Box as={"ul"} display="flex" p={2} gridGap={4}>
        {this.props.stickers.map((sticker, index) => (
          <li key={index}>
            <Sticker sticker={sticker} />
          </li>
        ))}
      </Box>
    );
  }
}

// export const StickerList = ({ stickers }) => {
//   return (
//     <Box as={"ul"} display="flex" p={2} gridGap={4}>
//       {stickers.map((sticker, index) => (
//         <li key={index}>
//           <Sticker sticker={sticker} />
//         </li>
//       ))}
//     </Box>
//   );
// };
