var React = require('react');
var ReactDOM = require('react-dom');
var expect  = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it ('should render paused when started', () => {
            var func = () => {};
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={func}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
        it ('should render start when paused', () => {
            var func = () => {};
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={func}/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});