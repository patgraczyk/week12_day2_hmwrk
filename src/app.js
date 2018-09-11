const SelectView = require('./views/select_view.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const infoDiv = document.querySelector('#instrument-info')
  const instrumentInfo = new InstrumentInfoView(infoDiv);
  instrumentInfo.bindEvents();

  const instrumentsData = new InstrumentFamilies();
  instrumentsData.bindEvents();
});
