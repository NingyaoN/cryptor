// all the components for our header are imported here and displayed

import React, { Component } from 'react';

import Cryptor from './components/cryptor';
import Content from './components/content';
import Members from './components/members';
import Join from './components/join';
import Activities from './components/activities';
import Notifications from './components/notifications';

class App extends Component {
  constructor() {
    super();
    this.state = {
      action: '',
      renderContent: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newAction) {
    this.setState({ action: newAction });
  }

  render() {
    let renderContent;

    switch (this.state.action) {
      case 'members':
        renderContent = <Members />;
        break;
      case 'activities':
        renderContent = <Activities />;
        break;
      case 'notifications':
        renderContent = <Notifications />;
        break;
      case 'join':
        renderContent = <Join />;
        break;
      default:
        renderContent = <Content />;
    }
    return (
      <div className="body">
        <Cryptor handleClick={this.handleClick} />
        {renderContent}
      </div>
    );
  }
}

export default App;
