
  window.hs_config = {"autopath":"@@autopath","deleteLine":"hs-builder:delete","deleteLine:build":"hs-builder:build-delete","deleteLine:dist":"hs-builder:dist-delete","previewMode":false,"startPath":"/index.html","vars":{"themeFont":"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap","version":"?v=1.0"},"layoutBuilder":{"extend":{"switcherSupport":true},"header":{"layoutMode":"default","containerMode":"container-fluid"},"sidebarLayout":"default"},"themeAppearance":{"layoutSkin":"default","sidebarSkin":"default","styles":{"colors":{"primary":"#377dff","transparent":"transparent","white":"#fff","dark":"132144","gray":{"100":"#f9fafc","900":"#1e2022"}},"font":"Inter"}},"languageDirection":{"lang":"en"},"skipFilesFromBundle":{"dist":["assets/js/hs.theme-appearance.js","assets/js/hs.theme-appearance-charts.js","assets/js/demo.js"],"build":["assets/css/theme.css","assets/vendor/hs-navbar-vertical-aside/dist/hs-navbar-vertical-aside-mini-cache.js","assets/js/demo.js","assets/css/theme-dark.html","assets/css/docs.css","assets/vendor/icon-set/style.html","assets/js/hs.theme-appearance.js","assets/js/hs.theme-appearance-charts.js","node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.min.html","assets/js/demo.js"]},"minifyCSSFiles":["assets/css/theme.css","assets/css/theme-dark.css"],"copyDependencies":{"dist":{"*assets/js/theme-custom.js":""},"build":{"*assets/js/theme-custom.js":"","node_modules/bootstrap-icons/font/*fonts/**":"assets/css"}},"buildFolder":"","replacePathsToCDN":{},"directoryNames":{"src":"./src","dist":"./dist","build":"./build"},"fileNames":{"dist":{"js":"theme.min.js","css":"theme.min.css"},"build":{"css":"theme.min.css","js":"theme.min.js","vendorCSS":"vendor.min.css","vendorJS":"vendor.min.js"}},"fileTypes":"jpg|png|svg|mp4|webm|ogv|json"}
  window.hs_config.gulpRGBA = (p1) => {
  const options = p1.split(',')
  const hex = options[0].toString()
  const transparent = options[1].toString()

  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    c= hex.substring(1).split('');
    if(c.length== 3){
      c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c= '0x'+c.join('');
    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + transparent + ')';
  }
  throw new Error('Bad Hex');
}
            window.hs_config.gulpDarken = (p1) => {
  const options = p1.split(',')

  let col = options[0].toString()
  let amt = -parseInt(options[1])
  var usePound = false

  if (col[0] == "#") {
    col = col.slice(1)
    usePound = true
  }
  var num = parseInt(col, 16)
  var r = (num >> 16) + amt
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  var b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  var g = (num & 0x0000FF) + amt
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}
            window.hs_config.gulpLighten = (p1) => {
  const options = p1.split(',')

  let col = options[0].toString()
  let amt = parseInt(options[1])
  var usePound = false

  if (col[0] == "#") {
    col = col.slice(1)
    usePound = true
  }
  var num = parseInt(col, 16)
  var r = (num >> 16) + amt
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  var b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  var g = (num & 0x0000FF) + amt
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}
const HSThemeAppearance = {
  currentThemeAttributeName: 'data-hs-current-theme',
  visablilityAttributeName: 'data-hs-theme-appearance',

  init() {
    const defaultTheme = window.hs_config.themeAppearance.layoutSkin
    let theme = localStorage.getItem('hs_theme') || defaultTheme

    if (theme === 'auto') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
    }

    const $appearances = document.querySelectorAll(`[data-hs-appearance="${theme}"]`)

    this._linkElementsAction(theme, $appearances, () => {
      // document.querySelector('[data-hs-appearance-onload-styles]').remove()
    })

    this._setVisablilityStyles(theme)
  },

  setAppearance(theme, saveInStore = true) {
    const scrollTop = window.pageYOffset

    if (saveInStore) {
      localStorage.setItem('hs_theme', theme)
    }

    if (theme === 'auto') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
    }

    const $appearances = document.querySelectorAll(`[data-hs-appearance="${theme}"]`)
    if (!$appearances.length) {
      return console.error(`Theme '${theme}' not found.`)
    }

    const $resetStyles = this._resetStylesOnLoad()

    this._linkElementsAction(theme, $appearances, () => {
      window.scrollTo({top: scrollTop})
      this._removeOldStyleElements()
      this._setVisablilityStyles(theme)
      $resetStyles.remove()
    })

    window.dispatchEvent(new CustomEvent('on-hs-appearance-change', {detail: theme}))
  },

  _resetStylesOnLoad() {
    const $resetStyles = document.createElement('style')
    $resetStyles.innerText = `*{transition: unset !important;}body{opacity: 0 !important;}`
    $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
    document.head.appendChild($resetStyles)
    return $resetStyles
  },

  _setVisablilityStyles(theme) {
    const attrubuteName = 'data-hs-appearance-visability-styles'
    let $style = document.querySelector(`[${attrubuteName}]`)

    if (!$style) {
      $style = document.createElement('style')
      $style.setAttribute(attrubuteName, '')
      document.head.append($style)
    }

    $style.textContent = `[${this.visablilityAttributeName}]:not([${this.visablilityAttributeName}='${theme}']){display:none!important;}`
  },

  _linkElementsAction(theme, appearances, callback = null) {
    this._setOldAppearanceElements()
    const linkElements = []

    appearances.forEach($appearanceNode => {
      const $link = document.createElement('link')
      $link.setAttribute('rel', 'stylesheet')
      $link.setAttribute('href', $appearanceNode.getAttribute('href'))
      $link.setAttribute(this.currentThemeAttributeName, 'stylesheet')
      document.head.insertAdjacentElement('afterEnd', $link)
      linkElements.push($link)
    })

    if (callback) {
      let loaded = 0

      linkElements.forEach($styleNode => {
        $styleNode.addEventListener('load', function () {
          loaded++
          if (loaded === linkElements.length) {
            return callback()
          }
        })
      })
    }
  },

  _setOldAppearanceElements() {
    const $currentAppearanceElements = document.querySelectorAll(`[${this.currentThemeAttributeName}]`)
    if ($currentAppearanceElements.length) {
      $currentAppearanceElements.forEach($appearnce => $appearnce.setAttribute('data-hs-appearnce-old', true))
    }
  },

  _removeOldStyleElements() {
    const $oldAppearanceElements = document.querySelectorAll(`[${'data-hs-appearnce-old'}]`)
    if ($oldAppearanceElements.length) {
      $oldAppearanceElements.forEach($appearnce => $appearnce.remove())
    }
  },

  getAppearance() {
    let theme = this.getOriginalAppearance()

    if (theme === 'auto') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default'
    }

    return theme
  },

  getOriginalAppearance() {
    const defaultTheme = window.hs_config.themeAppearance.layoutSkin
    return localStorage.getItem('hs_theme') || defaultTheme
  }
}

HSThemeAppearance.init()

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
    HSThemeAppearance.setAppearance('auto', false)
  }
})
