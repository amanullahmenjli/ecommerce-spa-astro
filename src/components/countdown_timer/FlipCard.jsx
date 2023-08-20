import React from 'react';

class FlipCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFlipping: false,
      currentContent: this.props.content,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      this.setState({ isFlipping: true });

      setTimeout(() => {
        this.setState({currentContent: this.props.content });
      }, 250);
      setTimeout(() => {
        this.setState({ isFlipping: false });
      }, 500);
    }
  }

  render() {
    const { type } = this.props;
    const { isFlipping, currentContent } = this.state;

    const displayContent = currentContent < 10 ? `0${currentContent}` : currentContent;

    return (
      <div>
        <div className={"flip-card"} data-content={type}>
          <div className="top leading-4 sm:leading-4 md:leading-6 text-base sm:text-base md:text-2xl">{displayContent}</div>
          <div className="bottom leading-4 sm:leading-4 md:leading-6 text-base sm:text-base md:text-2xl">{displayContent}</div>
          {isFlipping && (
            <>
              <div className="top-flip leading-4 sm:leading-4 md:leading-6 text-base sm:text-base md:text-2xl">{displayContent}</div>
              <div className="bottom-flip leading-4 sm:leading-4 md:leading-6 text-base sm:text-base md:text-2xl">{displayContent}</div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default FlipCard;
