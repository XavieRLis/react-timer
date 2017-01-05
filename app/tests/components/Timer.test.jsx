var React = require('react');
var ReactDOM = require('react-dom');
var expect  = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });
    describe('Initial values', () => {
        it('should has initial status is stopped', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            expect(timer.state.timerStatus).toBe('stopped');
        });
        it('should has initial count is zero', () => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            expect(timer.state.count).toBe(0);
        });
    });
    describe('handleStatusChange', () => {
        it('should start timer when status is started', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');
            expect(timer.state.timerStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001);
        });
        it('should pause timer when status is paused', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 5});
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('paused');
                expect(timer.state.count).toBe(5);
                done();
            }, 1001);
        });
        it('should clear timer when status is stopped', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 5});
            timer.handleStatusChange('started');
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.timerStatus).toBe('stopped');
                expect(timer.state.count).toBe(0);
                done();
            }, 1001);
        });
    });

});