import { Component } from "react";

export class Sticker extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <div
        onClick={() => {
          this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
          }));
        }}>
        <img src={this.props.sticker.img} alt={this.props.sticker.label} />
        {this.state.isOpen && <p>{this.props.sticker.label}</p>}
      </div>
    );
  }
}

// export const Sticker = ({ sticker }) => {
//   return (
//     <>
//       <img src={sticker.img} alt={sticker.label} />
//       <p>{sticker.label}</p>
//     </>
//   );
// };
