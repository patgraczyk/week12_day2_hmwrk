const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function(event){
  PubSub.subscribe("Instruments:all-Instruments", (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);

  });
}

SelectView.prototype.populate = function(allInstruments){
  allInstruments.forEach((instrument, index) =>{
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
};




module.exports = SelectView;
