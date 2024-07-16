import { parseMail } from './lib/mailParser';

(function(global){
    'use strict'
    global.parseMail = parseMail
})(window);
