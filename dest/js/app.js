"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900', 'Open+Sans:300,400,600,700,800']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /**
   * @name initBodyClick
   *
   * @description
   */
  var initBodyClick = function initBodyClick() {
    $('body').on('click', function (ev) {
      var className = ".sidebar, .header__collapse, .header__wrapper-left";

      if (!$(ev.target).closest(className).length) {
        if ($(window).width() < 768) {
          $('body').removeClass('is-collapsed');
        }
      }
    });
  };

  /**
   * @name initCollapseSibedar
   *
   * @description
   */
  var initCollapseSibedar = function initCollapseSibedar() {
    var _body = $('body');

    /**
     *
     * @param classListMod
     */
    var hoverCallback = function hoverCallback(classListMod) {
      if ($(window).width() > 767) {
        if ($(window).width() > 1439 && _body.hasClass('is-collapsed')) {
          _body[classListMod]('is-collapsed-hover');
        } else if ($(window).width() < 1440 && !_body.hasClass('is-collapsed')) {
          _body[classListMod]('is-collapsed-hover');
        }
      }
    };

    /**
     *
     */
    var hideAccordionCallback = function hideAccordionCallback() {
      var _accordion = UIkit.accordion('[uk-accordion]');

      for (var idx = 0; idx < _accordion.items.length; idx++) {
        if ($(_accordion.items[idx]).hasClass('uk-open')) {
          _accordion.toggle(idx, true);
        }
      }
    };

    $('[btn-collapse-js]').on('click', function (ev) {
      var _btn = $(ev.currentTarget);

      if (_body.hasClass('is-collapsed')) {
        _body.removeClass('is-collapsed');
      } else {
        _body.addClass('is-collapsed');
      }

      hideAccordionCallback();
    });

    $('[btn-collapseHide-js]').on('click', function (ev) {
      _body.removeClass('is-collapsed');
    });

    $('#sidebar').hover(function (ev) {
      hoverCallback('addClass');
      hideAccordionCallback();
    }, function (ev) {
      hoverCallback('removeClass');
      hideAccordionCallback();
    });
  };

  var initAttachFiles = function initAttachFiles() {
    var bar = document.getElementById('js-progressbar');

    UIkit.upload('.js-upload', {

      url: '',
      multiple: true,

      beforeSend: function beforeSend() {
        console.log('beforeSend', arguments);
      },
      beforeAll: function beforeAll() {
        console.log('beforeAll', arguments);
      },
      load: function load() {
        console.log('load', arguments);
      },
      error: function error() {
        console.log('error', arguments);
      },
      complete: function complete() {
        console.log('complete', arguments);
      },

      loadStart: function loadStart(e) {
        console.log('loadStart', arguments);

        bar.removeAttribute('hidden');
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function progress(e) {
        console.log('progress', arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function loadEnd(e) {
        console.log('loadEnd', arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function completeAll() {
        console.log('completeAll', arguments);

        setTimeout(function () {
          bar.setAttribute('hidden', 'hidden');
        }, 1000);

        alert('Upload Completed');
      }

    });
  };

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================

    // callback
    // ==========================================
    initBodyClick();
    initCollapseSibedar();
    initAttachFiles();
  };
  initJquery();
});