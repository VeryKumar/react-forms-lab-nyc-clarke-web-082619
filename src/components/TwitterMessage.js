import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
      remainingChars: 280
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
    let charCount = this.state.input.length;
    this.setState({ remainingChars: this.props.maxChars - charCount });
  };

  render() {
    const { input, remainingChars } = this.state;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={input}
          onChange={this.handleChange}
        />
        <h3>Remaining Characters: {remainingChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
