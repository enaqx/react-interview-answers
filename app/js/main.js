/** @jsx React.DOM */

var WebTools = React.createClass({
  render: function() {
    return <div>
      Hello {this.props.name}
    </div>;
  }
});

var FixObject = React.createClass({
  render: function() {
    return <div>
      Hello {this.props.name}
    </div>;
  }
});

React.renderComponent(
  <WebTools name="World" />,
  document.getElementById('question1')
);

React.renderComponent(
  <FixObject name="World" />,
  document.getElementById('question2')
);