

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
	  $('[btn-collapse-js]').on('click', (ev) => {
	    const _btn = $(ev.currentTarget);

	    $('body').toggleClass('is-collapsed');
    });

    $('[btn-collapseHide-js]').on('click', (ev) => {
      $('body').removeClass('is-collapsed');
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
    initCollapseSibedar()
  };
  initJquery();
});

