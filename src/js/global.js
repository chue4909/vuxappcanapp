exports.install = function(Vue, options) {
  Vue.prototype.$log = function() {
    console.log(...arguments)
  }
  Vue.prototype.$title = function(title) {
    title = title ? title + ' ' : 'demo'
    window.document.title = title
    try {
      var windowOption = {
        windowTitle: title
      }
      uexWindow.setWindowOptions({ windowOptions: windowOption })
    } catch (e) {}
  }
  Vue.prototype.$isDefine = function(value) {
    if (
      value === null ||
      value === '' ||
      value === 'undefined' ||
      value === undefined ||
      value === 'null' ||
      value === '(null)' ||
      value === 'NULL' ||
      typeof value === 'undefined'
    ) {
      return false
    } else {
      value = value + ''
      value = value.replace(/\s/g, '')
      if (value === '') {
        return false
      }
      return true
    }
  }
}
