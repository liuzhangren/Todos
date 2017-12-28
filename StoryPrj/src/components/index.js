// Generated by CoffeeScript 2.1.0
var CFX, StoryTodos, actions, mapActionToProps, mapStateToProps;

import {
  ddbs as dd
} from 'ddeyes';

import React, {
  Component
} from 'react';

import Input from '../../../StoryView/src/components/input';

import List from '../../../StoryView/src/components/list';

import Title from '../../../StoryView/src/components/title';

import {
  prefixDom
} from 'cfx.dom';

import {
  store
} from 'ReduxServ';

({actions} = store);

import {
  connect
} from 'cfx.react-redux';

import {
  getState
} from './components';

CFX = prefixDom({Input, List, Title, 'div': 'div'});

StoryTodos = class StoryTodos extends Component {
  constructor(props) {
    // console.log props
    super(props);
    this.state = {
      filter: props.state.filter
    };
    this;
  }

  componentWillReceiveProps(nextProps) {
    var filter;
    ({filter} = nextProps.state);
    this.setState({filter});
    return this;
  }

  render() {
    var c_Input, c_List, c_Title, c_div;
    ({c_Input, c_List, c_Title, c_div} = CFX);
    return c_div({}, c_Title({}), c_Input({
      filter: this.state.filter,
      selector: (function(filter) {
        return this.props.actions.filterSave({
          filter: filter
        });
      }).bind(this),
      blur: (function(v) {
        console.log(v);
        this.props.actions.create({
          todo: v
        });
        return console.log(store.getStore());
      }).bind(this)
    }), c_List({
      data: [
        {
          value: 0,
          label: '完成1'
        },
        {
          value: 1,
          label: '完成2'
        }
      ],
      creatList: function(data) {
        return console.log('hello');
      },
      isClick: false,
      str: ' ',
      hasClick: function(str) {
        console.log('key:');
        return console.log(str);
      }
    }));
  }

};

mapStateToProps = function(state) {
  getState(state.todosApp.todos);
  return getState(state.todosApp.todosFilter);
};

mapActionToProps = {
  filterSave: actions.filterSave,
  create: actions.todosCreate,
  fetch: actions.todosFetch
};

export default connect(mapStateToProps, mapActionToProps, StoryTodos);
