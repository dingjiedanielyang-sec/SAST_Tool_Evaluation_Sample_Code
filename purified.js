import { seal } from './utils.js';


var t = /<script type="application\/json">((.|\s)*?)<\/script>/;

if(host && host.toLowerCase().includes('mydomain.com')){
  // Do something 
}

export const isDevEnv = () => {
  return apiHost() && apiHost().toLowerCase().includes('mydev.com');}
var EMAIL_REGEX = /\A(([a-z0-9.!\#$%&'*+\/=?^_`{|}~-]+)@((?:[-a-z0-9]+\.)+[a-z]{2,}))(\s*,\s*([^:@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,}))*\z/i
var email_regex2 = /\A([-_a-z0-9\+]+)@([-a-z0-9.]+)\Z/
export const ZUDI = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/
export const MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
export const ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
export const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
export const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
export const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
export const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
export const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
export const DOCTYPE_NAME = seal(/^html$/i);
