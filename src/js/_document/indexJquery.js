

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
        if(($(window).width() > 1439 && _body.hasClass('is-collapsed')) || $(window).width() > 1439 && !_body.hasClass('is-collapsed')) {
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
        // hideAccordionCallback();
      },
      function(ev) {
        hoverCallback('removeClass');
        // hideAccordionCallback();
      }
    );
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
  };
  initJquery();
});

