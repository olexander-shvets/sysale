import React from 'react';
import SelectColor from '../select-color';
import Checkbox from '../checkbox';
import Counter from '../counter';

import './app-content.css';
import compare from './compare.png';

import image3 from './image3.png';

function AppContent3() {
    return (
        <div className="items-wrapper">
            <div className="item">
                <div className="item-header">
                <button className="new-item">New</button>
                    <img src={image3} className="item-image" alt="product logo"/>
                    <img src={compare} className="compare-image" alt="compare items"></img>
                </div>
                <div className="item-content">
                    <h1 className="item-name">Шампунь</h1>
                    <p className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
                <div className="select-color">
                    <SelectColor />
                    <h1 className="item-price">150 грн.</h1>
                </div>
                <Checkbox/>
                <div className="menu-bottom">
                    <Counter/>
                    <button className="cart">Купить</button>
                </div>
            </div>
        </div>
    )
}

export default AppContent3;