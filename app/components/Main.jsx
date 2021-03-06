var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => (
    <div>
        <Navigation/>
        <div className="row">
            <div className="columns small-centered medium-6 large-4">
                {props.children}
            </div>
        </div>
    </div>
);

module.exports = Main;
