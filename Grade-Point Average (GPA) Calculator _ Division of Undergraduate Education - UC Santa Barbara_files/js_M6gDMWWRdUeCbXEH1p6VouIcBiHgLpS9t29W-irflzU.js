/**
 * lsit custom js 
 */
(function($) {
/* shadowbox tabindex fix */
  $(function() {
    $(window).load(function () {
     if ($('#sb-nav').length) {
       var sblinkSelect = $("#sb-nav > *");
       $(sblinkSelect).each(function() {
         $(this).attr("onkeypress", $(this).attr("onclick")).attr("tabindex", 0);
       });
     } 
    });     
  });
/* news photo link alt text */
  $(function() {
    if ($('div.field-name-field-news-photo').length) {
      var photoSelect = $('div.field-name-field-news-photo div.sb-image a');
      $(photoSelect).each(function() {
        if ($(this).attr("title").length) {
          $(this).attr( "alt", $(this).attr("title") );
        } else { $(this).attr("alt", $(this).attr("rel") + " image link" ); }
       });
    }
  });
/* people - content fields hide */
  $(function() {
    if ($('#people div.info h2.field-label').length) {
      var headerSelect = $("#people div.info h2.field-label").filter(":header");
      $(headerSelect).attr("tabindex", "0");
      $(headerSelect).addClass("people-header-link")
        .hover(function (e) { $(this).toggleClass("people-header-link-hover"); })
        .on({
             keypress: function(e) {
               $(this).nextUntil('h2.field-label:header', 'div.field-items').slideToggle();
             },
             click: function(e) {
               $(this).nextUntil('h2.field-label:header', 'div.field-items').slideToggle();
             }
            });
    }
    if ($('#people div.info').length) {
      var contentSelect = $("div.info").children("section").children("div.field-items");
      $(contentSelect).addClass("people-content-hide");
    }
  });
})(jQuery);
;
/**
 * uged custom js 
*/
(function($) {
  $(function() {
      var sbSlct = '.region-sidebar-first';
      var pgAnch = 'article.node-page h2 a';
      var exMenu = '#primary-menu-bar ul.menu';
      $(sbSlct).attr('id', 'sidebar-first');
      $(pgAnch).parent()
       .after('<div id="nav-top"><a href="#page-title">Back to top</a></div>');
      $(exMenu).after('<div id="nav-mobile"><span>Expand Menu</span></div>');
      $(exMenu).addClass('collapsed');
      $('#nav-mobile')
       .on({ 
            keypress: function(e) {
               $(exMenu)
                 .toggleClass('expanded')
                 .toggleClass('collapsed');
            },
            click: function(e) {
               $(exMenu)
                 .toggleClass('expanded')
                 .toggleClass('collapsed');
             }
       });

  });
})(jQuery);

/* cosl faq - content wrappers */
/*
  $(function() {
      var headerSelect = '#faq h3';
      var articleSelect =  '#faq article.faq-article';
      var sectionSelect = '#faq section.faq-section';
    if ($('#faq').length) {
      $(headerSelect).each(function(){
        $(this).add( $(this).nextUntil(headerSelect) ).not('h2')
        .wrapAll('<article class="faq-article"></article>');
      });
      $(articleSelect).each(function(){
        $(this).children().not('h3')
        .wrapAll('<section class="faq-section"></section>');
      });
      $(articleSelect).children('h3').wrap('<section class="faq-header"></section>');

      $(headerSelect).attr("tabindex", "0");
      $(headerSelect).addClass('header-link');

      $(articleSelect).children().addClass('collapsed'); 
      $(articleSelect)
        .on({ 
             keypress: function(e) {
               $(this)
                 .children()
                 .toggleClass('expanded')
                 .toggleClass('collapsed')
                 .nextUntil(articleSelect).slideToggle();               
             },         
             click: function(e) {
               $(this)
                 .children()
                 .toggleClass('expanded')
                 .toggleClass('collapsed')
                 .nextUntil(articleSelect);
             }
            });
    }
  });
*/;
