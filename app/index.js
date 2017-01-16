// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

// New Imports
import ScarletScreen from './screen/ScarletScreen';
import BlueScreen from './screen/BlueScreen';
import MaizeScreen from './screen/MaizeScreen';
import GoldScreen from './screen/GoldScreen';
import BlackScreen from './screen/BlackScreen';
import MyComponent from './screen/wordlist/index';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
};

const Example = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="scarlet"
              component={ScarletScreen}
              title="Scarlet"
            />
            <Scene
              key="gray"
              component={MyComponent}
              title=" Word List"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene
              key="blue"
              component={BlueScreen}
              title="Blue"
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene
              key="black"
              component={BlackScreen}
              title="Black"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default Example;
