import React, { PureComponent } from "react";
import "./index.css";

export default class MoveLister extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  divRef = React.createRef();

  handleMouseMove = (e) => {
    //更新x和y的值
    const { left, top } = this.divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    this.setState({
      x,
      y,
    });
  };

  render() {
    return (
      <div
        ref={this.divRef}
        className="panel"
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}
