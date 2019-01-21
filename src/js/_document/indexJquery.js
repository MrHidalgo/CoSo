

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
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
	const initBodyClick = () => {
    $('body').on('click', function (ev) {
      const className = ".sidebar, .header__collapse, .header__wrapper-left";

      if (!$(ev.target).closest(className).length) {
        if($(window).width() < 768) {
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
	const initCollapseSibedar = () => {
    const _body = $('body');

    /**
     *
     * @param classListMod
     */
    const hoverCallback = (classListMod) => {
      if($(window).width() > 767) {
        if($(window).width() > 1439 && _body.hasClass('is-collapsed')) {
          _body[classListMod]('is-collapsed-hover');
        } else if ($(window).width() < 1440 && !_body.hasClass('is-collapsed')) {
          _body[classListMod]('is-collapsed-hover');
        }
      }
    };

    /**
     *
     */
    const hideAccordionCallback = () => {
      let _accordion = UIkit.accordion('[uk-accordion]');

      for(let idx = 0; idx < _accordion.items.length; idx++) {
        if($( _accordion.items[idx]).hasClass('uk-open')) {
          _accordion.toggle(idx, true);
        }
      }
    };

	  $('[btn-collapse-js]').on('click', (ev) => {
	    const _btn = $(ev.currentTarget);

      if(_body.hasClass('is-collapsed')) {
        _body.removeClass('is-collapsed');
      } else {
        _body.addClass('is-collapsed');
      }

      hideAccordionCallback();
    });

    $('[btn-collapseHide-js]').on('click', (ev) => {
      _body.removeClass('is-collapsed');
    });

    $('#sidebar').hover(
      function(ev) {
        hoverCallback('addClass');
        hideAccordionCallback();
      },
      function(ev) {
        hoverCallback('removeClass');
        hideAccordionCallback();
      }
    );
  };

	const initAttachFiles = () => {
    var bar = document.getElementById('js-progressbar');

    UIkit.upload('.js-upload', {

      url: '',
      multiple: true,

      beforeSend: function () {
        console.log('beforeSend', arguments);
      },
      beforeAll: function () {
        console.log('beforeAll', arguments);
      },
      load: function () {
        console.log('load', arguments);
      },
      error: function () {
        console.log('error', arguments);
      },
      complete: function () {
        console.log('complete', arguments);
      },

      loadStart: function (e) {
        console.log('loadStart', arguments);

        bar.removeAttribute('hidden');
        bar.max = e.total;
        bar.value = e.loaded;
      },

      progress: function (e) {
        console.log('progress', arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      loadEnd: function (e) {
        console.log('loadEnd', arguments);

        bar.max = e.total;
        bar.value = e.loaded;
      },

      completeAll: function () {
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
  const initJquery = () => {
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

