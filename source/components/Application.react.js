var React = require('react');
var logs = require('../utilities/logMixin.js')

var Section = require('./Section.react.js')
var Banner = require('./Banner.react.js')


const Application = React.createClass({

  name: "Application",
  mixins: [logs], //dont for get the comma

  //-----default API--------
  //getDefaultProps: function(){},
  //getInitialState: function() {},
  //componentWillMount: function(){},
  //componentDidMount: function(){},
  //componentWillReceiveProps: function(){},
  //shouldComponentUpdate: function(){},
  //componentWillUpdate: function(){},

  render() {
    return (
      <div>
        <Banner />
        <Section> 1</Section>
        <Section> 2</Section>
        <Section> 3</Section>
        <Section> 4</Section>
      </div>
    );
  },
  //componentDidUpdate: function(){},
  //componentWillUnmount: function(){}

});

module.exports = Application;
