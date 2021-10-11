import $ from 'jquery';
import { goTop } from './modules/go-top';
import { headerScripts } from './modules/header';
import { pageLoader } from './modules/page-loader';

$(function () {
  goTop();
  headerScripts();
  pageLoader();
});
