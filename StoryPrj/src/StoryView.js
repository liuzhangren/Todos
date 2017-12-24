// Generated by CoffeeScript 2.1.0
var CFX, Input, Item;

import {
  prefixDom
} from 'cfx.dom';

import React, {
  Component
} from 'react';

import {
  store
} from '../../ReduxServ/source/store/index.coffee';

import {
  List,
  Icon,
  NavBar,
  Popover,
  InputItem
} from 'antd-mobile';

({Item} = Popover);

CFX = prefixDom({'div': 'div', Item, Icon, NavBar, Popover, InputItem});

Input = class Input extends React.Component {
  render() {
    var c_Icon, c_InputItem, c_Item, c_NavBar, c_Popover, c_div, onSelect, selectStyl, selector;
    ({c_div, c_Item, c_Icon, c_NavBar, c_Popover, c_InputItem} = CFX);
    selector = this.props.selector != null ? this.props.selector : (selector) => {
      console.log('Pls use props selector.');
      return console.log(selector);
    };
    onSelect = (opt) => {
      return selector(opt.props.value);
    };
    selectStyl = function(filter, itemValue) {
      if (filter === itemValue) {
        return {
          color: 'red'
        };
      }
    };
    return c_NavBar({
      mode: 'light',
      rightContent: c_Popover({
        overlayClassName: 'fortest',
        overlayStyle: {
          color: 'currentColor'
        },
        // visible:
        overlay: [
          c_Item({
            key: '1',
            value: 'active',
            style: selectStyl(this.props.filter,
          'active')
          },
          'Active'),
          c_Item({
            key: '2',
            value: 'completed',
            style: selectStyl(this.props.filter,
          'completed')
          },
          'Completed'),
          c_Item({
            key: '3',
            value: 'all',
            style: selectStyl(this.props.filter,
          'all')
          },
          'All')
        ],
        // onVisibleChange: ->
        onSelect: onSelect
      }, c_div({
        style: {
          height: '100%',
          padding: '0 15px',
          marginRight: '-15px',
          display: 'flex',
          alignItems: 'center'
        }
      }, c_Icon({
        type: 'ellipsis'
      })))
    }, c_InputItem({
      placeholder: 'What needs to be done'
    }));
  }

};

export default Input;