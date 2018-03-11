import {MDCRipple} from '@material/ripple';
import {MDCToolbar} from '@material/toolbar';

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const toolbar = MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
