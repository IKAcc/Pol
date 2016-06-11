/*
	Pol
	Created by @JavidIzadfar and @setarekarimi at IKAcc
	Last edit on June 11, 2016
*/

(function( $ ) {

    $.fn.pol = function(options) {

      var settings = $.extend({ // These are the defaults.
          url:      $(location).attr('href'), // by default, use current URL
          target:   '_blank', // by default, link opens in new blank tab
          author:   '', // by default, no author
          hashtags: '', // by default, no author
      }, options );

      var authorActive = '';
      var hashtagsActive = '';

      if (settings.author) authorActive = '%40' + settings.author.replace(/, |,/g, "%20%40"); // turn author to an active user(s)
      if (settings.hashtags) hashtagsActive = '%23' + settings.hashtags.replace(/, |,/g, "%20%23"); // turn author to an active tags(s)

      var media = [
        // { // Twitter (Official)
        //   name:           'twitter',
        //   baseURL:        'https://twitter.com/intent/tweet?',
        //   textBinding:    '&text=',
        //   hashtagBinding: '&hashtags=',
        //   viaBinding:     '&via=',
        //   urlBinding:     '&url=',
        //   requireActive:  false
        // },
        { // Twitter (Unofficial)
          name:           'Twitter',
          baseURL:        'https://twitter.com/intent/tweet?',
          textBinding:    '&text=',
          hashtagBinding: '%0A',
          viaBinding:     '%0A',
          urlBinding:     '&url=',
          requireActive:  true
        },
        { // Telegram
          name:           'Telegram',
          baseURL:        'https://telegram.me/share/url?',
          textBinding:    '&text=',
          hashtagBinding: '%0A',
          viaBinding:     '%0A',
          urlBinding:     '&url=',
          requireActive:  true
        }
      ]

      $('[data-pol-media]').each(function(){ // get every Pol

        var attrs = {
          text:   $(this).text(), // Pol's content
          html:   $(this).html(), // Pol's content + HTML
          target: settings.target, // Pol's targeting behavior
        };

        $.each(this.attributes, function() { // get all other attributes
          if(this.specified) {
            attrs[this.name] = this.value; // and save on attrs object
          }
        });

        for (var i = 0; i < media.length; i++) { // check media array to
          if (attrs['data-pol-media'].toLowerCase() == media[i].name.toLowerCase()) { // grab the pol-media object

            if (!settings.hashtags) media[i].hashtagBinding = ''; // remove the hashtags's binding if hashtag(s) is not specified
            if (!settings.author)   media[i].viaBinding     = ''; // remove the author's binding if author(s) is not specified

            if (media[i].requireActive) { // if media required active links
              settings.hashtags = hashtagsActive;  // active hashtags(s)
              settings.author   = authorActive;    // active author(s)
            }

            attrs.title = 'Share on ' + media[i].name; // Pol's title for link

            attrs.href = media[i].baseURL + media[i].textBinding + attrs.text + media[i].hashtagBinding + settings.hashtags + media[i].viaBinding + settings.author + media[i].urlBinding + settings.url; // the universal Pol URL

          }
        }

        $(this).replaceWith(function () { // replace span with <a> tag
          return $("<a />", attrs); // with its attributes
        });

      });

    };

}( jQuery ));
