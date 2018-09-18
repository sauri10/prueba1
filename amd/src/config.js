define([], function () {
    window.requirejs.config({
        paths: {
           "adapt_font_size": M.cfg.wwwroot + '/var/www/html/moodle-3.2.1/theme$
        },
        shim: {
           'adapt_font_size': {exports: 'adapt_font_size'},
        }
    });
});// JavaScript Document