
let React = require('react');
let Basket = require('../basket/basket.js');

var Header =
  React.createClass({
    render:function(){
      return (
        <div className='container'>
        <div className="pure-g">
          <header className="appHeader pure-u-1">
            <h1>Mon Village</h1>
            <p>
              Mon village est un catalogue de produits agricoles locaux et de saisons.
            </p>
            <h2>
              Me contacter au 06xxxxxxx
            </h2>

              { this.props.children }
          </header>
          <div className="fixed-container">
            <div className="container">
              <Basket className="pure-g" />
            </div>
          </div>
          </div>
        </div>
      );
    }
  });
module.exports = Header;
