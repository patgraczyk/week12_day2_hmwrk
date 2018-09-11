const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
}

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (event) => {
    const selectedInstrument = event.detail;
    this.render(selectedInstrument);
  });

}

InstrumentInfoView.prototype.render = function(selectedInstrument){
  const infoHeader = document.createElement('h1');
  const infoParagraph = document.createElement("p");
  infoHeader.textContent = `${selectedInstrument.name}`;
  infoParagraph.textContent = `${selectedInstrument.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);
}



module.exports = InstrumentInfoView;
