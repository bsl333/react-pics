import React from 'react';

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }

    this.imageRef = React.createRef();
  }

  componentDidMount = () => {
    // add event listender to determine when image loads, then set how many rows it can span based on its height
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  // get height, divide by height of one row to calculate how many rows an image should span.
  // then set the state of spans which will then be applied once images are loaded.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const gridEndRowHeight = 5;
    const spans = Math.ceil(height / gridEndRowHeight);
    this.setState({ spans });

  }

  render() {
    // return (
    //   <div style={{gridRowEnd: `span ${this.state.spans}`}}>
    //     <img ref={this.imageRef} src={this.props.src} alt={this.props.description_alt} />
    //   </div>
    // )
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        ref={this.imageRef}
        src={this.props.src}
        alt={this.props.description_alt}
      />
    )
  }
}
