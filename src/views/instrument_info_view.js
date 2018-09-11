const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
}

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (event) => {
    const listOfInstruments = document.createElement("ul")
    this.container.appendChild(listOfInstruments);
    const selectedInstrument = event.detail;
    this.render(selectedInstrument);
  });

}

InstrumentInfoView.prototype.render = function(selectedInstrument){
  const infoHeader = document.createElement('h1');
  const infoParagraph = document.createElement("p");
  const listOfInstruments = document.createElement("li")
  infoHeader.textContent = `${selectedInstrument.name}`;
  infoParagraph.textContent = `${selectedInstrument.description}`;
  listOfInstruments.textContent = `${selectedInstrument.instruments}`
  this.container.innerHTML = '';
  this.container.appendChild(infoHeader);
  this.container.appendChild(infoParagraph);
  this.listOfInstruments.appendChild(listOfInstruments);
}



module.exports = InstrumentInfoView;
