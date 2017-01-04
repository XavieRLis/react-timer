var React = require('react');

var Timer = (props) => (
  <div>
    <div>
      <div>
        <p>Timer.jsx rendered</p>
        {props.children}
      </div>
    </div>
  </div>
);

module.exports = Timer;
