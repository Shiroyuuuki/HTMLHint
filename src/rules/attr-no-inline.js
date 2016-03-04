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
                .match(/\s+(?=([^"]*"[^"]*")*[^"]*$)/g);

            var spaceCount = rawSpaces && rawSpaces.length || 0;

            var attrBreaks = html
                .split('\n')
                .length - 1;

            if (spaceCount !== 1 && spaceCount !== attrBreaks) {
                reporter.error('No inline attributes allowed', event.line, event.col, self, event.raw);
            }

        });
    }
});