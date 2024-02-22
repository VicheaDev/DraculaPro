'use strict'

const foregroundColor = '#f8f8f2'
const backgroundColor = '#0B0D0F'
const selection = '#414D58'
const comment = '#708CA9'
const red = '#FF9580'
const green = '#8AFF80'
const yellow = '#FFFF80'
const magenta = '#FF80BF'
const cyan = '#80FFEA'
const gray = '#666666'
const brightBlack = '#999999'
const brightWhite = '#ffffff'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: selection,
    cursorColor: magenta,
    colors: [
      selection,
      red,
      green,
      yellow,
      comment,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      comment,
      magenta,
      cyan,
      brightWhite
    ],
    css: `
      ${config.css || ''}
      .hyper_main {
        border-color: #212C2A !important;
      }
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: rgb(68, 71, 90);
      }
    `
  })
}
