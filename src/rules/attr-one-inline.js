/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'attr-one-inline',
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

            if (rawSpaces !== attrBreaks + 1) {
                reporter.warn('First attribute should be inline with parent tag',
                    event.line, event.col, self, event.raw);
            }

        });
    }
});