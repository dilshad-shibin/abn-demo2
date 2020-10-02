/*!

 * Copyright (c) 2015 Arnolds Kozlovskis (@arniekoz)

 *

 * jQuery Curtail plugin

 * Version 1.1.1 (April 2015)

 *

 * Licensed under the Unlicense

 */



/* global jQuery */

(function ($) {

    'use strict';



    $.fn.curtail = function (options) {

        var settings = $.extend({

            limit: 250,

            ellipsis: '  ____',

            toggle: false

        }, options);



        $(this).each(function () {

            var $this = $(this),

                p = $this.find('> p'),

                a = $this.find('> a');



            if (p.text().length > settings.limit) {

                init(p, a);

            } else {

                a.hide();

            }

        });



        function init(p, a) {

            var oldParagraphs = nowParagraphs(p),

                newParagraphs = nextParagraphs(p),

                flag = true;



            setParagraphs(p, newParagraphs);



            a.on('click', function (e) {

                if (settings.toggle) {

                    if (flag) {

                        setParagraphs(p, oldParagraphs);

                    } else {

                        setParagraphs(p, newParagraphs);

                    }



                    flag = !flag;

                } else {

                    setParagraphs(p, oldParagraphs);

                    a.hide();

                }



                e.preventDefault();

            });

        }



        function nowParagraphs(paragraphs) {

            var strArr = [];



            for (var i = 0; i < paragraphs.length; i++) {

                strArr.push(paragraphs[i].innerHTML);

            }



            return strArr;

        }



        function nextParagraphs(paragraphs) {

            var strArr = [],

                chars = 0,

                truncate = 0;



            paragraphs.each(function () {

                var str = $(this).html(),

                    len = str.length;



                chars += len;



                if (chars <= settings.limit) {

                    strArr.push(str);

                } else {

                    truncate = settings.limit - (chars - len);



                    if (truncate > 0) {

                        strArr.push(str.slice(0, truncate) + settings.ellipsis);

                    } else {

                        strArr.push('');

                    }

                }

            });



            return strArr;

        }



        function setParagraphs(para1, para2) {

            for (var i = 0; i < para1.length; i++) {

                para1[i].innerHTML = para2[i];

            }

        }

    };

}(jQuery));