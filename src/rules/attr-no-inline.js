/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-no-inline',
    description: 'An href attribute must be either absolute or relative.',
    init: function(parser, reporter){
        var self = this;

        parser.addListener('tagstart', function(event){
            var html = event.html;

            var rawSpaces = html
                .replace(/\s{2,}/g, ' ')
                .replace(' />', '/>')
                .replace('< ', '<')
                .trim()
                .split(' ')
                .length - 1;

            var attrBreaks = html
                .split('\n')
                .length - 1;

            if (rawSpaces !== attrBreaks) {
                reporter.warn('No inline attributes allowed', event.line, event.col, self, event.raw);
            }

        });
    }
});