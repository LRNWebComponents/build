/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bower_components/a11y-behaviors/a11y-behaviors.html","8c132466383536721fc141876ad0a23c"],["bower_components/a11y-gif-player/a11y-gif-player.html","4a75f741c84c12c39a25ca76ffab9715"],["bower_components/ace-builds/src-min-noconflict/ace.js","48a77b2a49a3266c2df7600b4d77f597"],["bower_components/ace-builds/src-min-noconflict/ext-searchbox.js","3c76c77a83033886e1afc1d13922c001"],["bower_components/aframe-player/aframe-aframe.html","239160c7c706df09459110c398be147c"],["bower_components/aframe-player/aframe-player.html","421969aa0c30770b2655bcd4786096f0"],["bower_components/aframe-player/assets/aframe/aframe.min.js","56614caf5b33e90e216de4af1a312992"],["bower_components/app-datepicker/app-datepicker-animations.html","9ec9820a024e2466653df0f36b874b43"],["bower_components/app-datepicker/app-datepicker-icons.html","675060e4e5736fd814d14f5b2a9446cd"],["bower_components/app-datepicker/app-datepicker.html","767d9d45b148747cb0454d5411a79dc8"],["bower_components/app-layout/app-box/app-box.html","63041ea44409bc8bdc5ee63c2d6b88c2"],["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","2ae750a0734ebc69d3bcf16a7a422694"],["bower_components/app-layout/app-drawer/app-drawer.html","7ea4c77e43883c072db99810d6296e41"],["bower_components/app-layout/app-grid/app-grid-style.html","1deb489562b9d16abde475212ebf7f79"],["bower_components/app-layout/app-header-layout/app-header-layout.html","eb046fcea5a6554a22c5c659c91eafd9"],["bower_components/app-layout/app-header/app-header.html","ad3f12457f8c49c2f87551ef60640ae2"],["bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","326cc50ce80778e8f5c9e6af92af6eda"],["bower_components/app-layout/app-layout.html","08719ac84d030b2d88ed35fe0992a77c"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","9abc2206421a8d0add12f3fd90223aca"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","cd1d97a6e86a9daddf46c283009f9bea"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","e31a99d7916dbc2e7575f1efa0a24d4f"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","fab07f7a5730efb1bd6d8110f0e5ba40"],["bower_components/app-layout/app-scroll-effects/effects/material.html","e5faac2fc397448bc45acd5ee14bacd1"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","8a2ea6f902d5e583d583c3500940409b"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","9cf2610a09b0797f60b3a7a64be767ca"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","192b5852243c71207fe11cebc597b553"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","48314bbaa9f07c810b0f527a567e56c3"],["bower_components/app-layout/app-toolbar/app-toolbar.html","8c4376580eda1c3c737fd5bbd0bcc238"],["bower_components/app-layout/helpers/helpers.html","b8a1456d33ecc67f95346d5816707ab5"],["bower_components/app-localize-behavior/app-localize-behavior.html","4e24521edbb11d4cc6193d5e9b3b8a61"],["bower_components/app-route/app-location.html","481fe4fc9fccd580f6e34e4b60fdd4ce"],["bower_components/app-route/app-route-converter-behavior.html","67ec6daf2bbe9f59beecbdd5b863af14"],["bower_components/app-route/app-route.html","b2bb6f22ee3e0e3eba5b551634237289"],["bower_components/citation-element/citation-element.html","70c0a2afeef9e24f25d9b36c980cd07a"],["bower_components/cms-hax/cms-block.html","6de9143e1c5b5f66a64eb70f666eea10"],["bower_components/cms-hax/cms-entity.html","7edfbdc01b9563a2b975e9ac09b4c9bd"],["bower_components/cms-hax/cms-hax.html","caf3384ff95de7921c9e5de895a1ee0e"],["bower_components/cms-hax/cms-token.html","f6e445328e1d71655a623c3f76915475"],["bower_components/cms-hax/cms-views.html","1dfd535c27bf8a7862b011b9ec99024d"],["bower_components/code-editor/code-editor.html","f0429daa853b0743cc9d9182de285d5d"],["bower_components/code-editor/code-pen-button.html","e4afa776425c10597864cb471e771c8c"],["bower_components/csv-render/csv-render.html","8d6a5913163a55783c6100f74f9fbb27"],["bower_components/dropdown-select/dropdown-select.html","43190f6ad1f0eab865848a952d9ac057"],["bower_components/eco-json-schema-form/eco-json-schema-array.html","742cd4fb2d2a87333203c55be546d907"],["bower_components/eco-json-schema-form/eco-json-schema-boolean.html","113588750db964eec8f6617bafc0b1c9"],["bower_components/eco-json-schema-form/eco-json-schema-enum.html","6d3e031f6674e776786236c862aa6852"],["bower_components/eco-json-schema-form/eco-json-schema-file.html","e39311f9dd78a142f946d2bd1b09cffc"],["bower_components/eco-json-schema-form/eco-json-schema-geolocation.html","21167013686152a941600ee7ec547aaa"],["bower_components/eco-json-schema-form/eco-json-schema-input.html","8956e9a50b7b384299137bfba6d0d6b1"],["bower_components/eco-json-schema-form/eco-json-schema-object.html","37fdae110c8432d3cd40f3bcf279d126"],["bower_components/eco-json-schema-form/eco-json-schema-wizard.html","f47388a5039e6b25b7f931a89665430c"],["bower_components/elmsln-loading/elmsln-loading.html","14ad0b5ec744bc88429d1b91fcc0176e"],["bower_components/font-roboto/roboto.html","3dd603efe9524a774943ee9bf2f51532"],["bower_components/geo-location/geo-location.html","2a5d5ec425db101069a1b4320b9cc489"],["bower_components/google-apis/google-maps-api.html","90dcfc30ee5223da101ebee3a30c934a"],["bower_components/google-map/google-map-marker.html","93d0d342e5ff793aa1ff9e89cb99bf19"],["bower_components/google-map/google-map.html","c83db8f1e668518a2207486c26b08530"],["bower_components/grafitto-filter/grafitto-filter.html","4a77e0f64b00a767c4ef524906705702"],["bower_components/grid-plate/grid-plate.html","dab0d8b7d5fb6bf2f25b33ba84ab28a5"],["bower_components/hax-body-behaviors/hax-body-behaviors.html","19996a0d352b7e011e1b1d5a324d62e5"],["bower_components/hax-body/hax-app-browser-item.html","0d44543b1eeb9d1656a420ef662c611f"],["bower_components/hax-body/hax-app-browser.html","21ba6a6124ee72b24c7bf0350f3e2d80"],["bower_components/hax-body/hax-app-picker.html","25fbd5314676e3fc21d2a1809bfcc285"],["bower_components/hax-body/hax-app-search-inputs.html","f95974e359fcaf588c0c1064437ff25f"],["bower_components/hax-body/hax-app-search-result.html","99cc93e1daae7d207db752c08996d287"],["bower_components/hax-body/hax-app-search.html","47e3abd9d9e498636c6b67be38abe478"],["bower_components/hax-body/hax-app.html","fdd10db2d21ae61128df7e61df0d6b7c"],["bower_components/hax-body/hax-autoloader.html","5bc9a5956a13787fb13ad58a2f136be7"],["bower_components/hax-body/hax-blox-browser-item.html","cb5ae3e3bdb0ea18879f116cf2ee55a2"],["bower_components/hax-body/hax-blox-browser.html","b77330d4a9fbccdb182d10b18a96ccdf"],["bower_components/hax-body/hax-blox-picker.html","0127f4c3e789caa62d3325f74dceab39"],["bower_components/hax-body/hax-blox.html","405d0db24dcfa2f9e06314916d5ef8c1"],["bower_components/hax-body/hax-body.html","b8971f2611524f42ef9f8217c9742a51"],["bower_components/hax-body/hax-ce-context.html","fd6c7196488a9ddd0f48629042297312"],["bower_components/hax-body/hax-context-item-menu.html","51cf6a947be5b3b75577d5075ce96103"],["bower_components/hax-body/hax-context-item-textop.html","50bac063957d0222cf0dda3992fcb074"],["bower_components/hax-body/hax-context-item.html","ef04084061ed7e532e05cc791f4b92a2"],["bower_components/hax-body/hax-export-dialog.html","8adc592c2eb549ac0886417df4850eb8"],["bower_components/hax-body/hax-gizmo-browser-item.html","c6e3947b5251cbe2b0a04ee9bda13cf2"],["bower_components/hax-body/hax-gizmo-browser.html","e04341a4489e546e02531971a08bc989"],["bower_components/hax-body/hax-inline-context.html","223a163e1fc5eaf85cd80ad7a075ca8b"],["bower_components/hax-body/hax-input-mixer.html","85313f78bfe064877670dec808aa4e37"],["bower_components/hax-body/hax-manager.html","5cc5f762c194b8b584af31a2d5f9a0ae"],["bower_components/hax-body/hax-panel-item.html","efc7110698c141966a5acbaaf11a94ef"],["bower_components/hax-body/hax-panel.html","592f8482da4a1bbe05ee2f5c9cdc0f3c"],["bower_components/hax-body/hax-plate-context.html","6fa4c1784f40d7dfc9ac1a660e32db92"],["bower_components/hax-body/hax-preferences-dialog.html","524d3c4473c8695e3018785b31e5d657"],["bower_components/hax-body/hax-preview.html","a3fd81f88d74fd8f59dedd41a86eebaa"],["bower_components/hax-body/hax-stax-browser-item.html","b1a3c22d45c64991c6266fe93e9c1f68"],["bower_components/hax-body/hax-stax-browser.html","9c3014e99e11b0a3df2520ab188dba8d"],["bower_components/hax-body/hax-stax-picker.html","f4f061d8934cd9f069a37bb3a61a040a"],["bower_components/hax-body/hax-stax.html","a638855b532f2ae0b975841816cfa4ad"],["bower_components/hax-body/hax-store.html","a4513ebb3fe25ae960942bba56788d3a"],["bower_components/hax-body/hax-text-context.html","7ac10dc8b5ebab5f3590aada2302ee2a"],["bower_components/hax-body/hax-toolbar-item.html","515d43149990e688f6281237f58b9310"],["bower_components/hax-body/hax-toolbar-menu.html","7db77784a96bd2396d82cdc7c3dc85ee"],["bower_components/hax-body/hax-toolbar.html","e878054fa8d1ab0a58e809ce332ac946"],["bower_components/hero-banner/hero-banner.html","68028214d044b8c3fa90d7d73f99b8ea"],["bower_components/image-inspector/image-inspector.html","283c09e157e7c0415f76d87bd347e006"],["bower_components/img-pan-zoom/img-loader.html","2e22fe264c48d6dc3f5f03f81f983e96"],["bower_components/img-pan-zoom/img-pan-zoom.html","12b12cdecb5500bdd63ed78820bc77d5"],["bower_components/img-pan-zoom/openseadragon-import.html","eb922032a85518d3c79c67dc124ca262"],["bower_components/img-pan-zoom/openseadragon/openseadragon.min.js","e8f9119eb47bd5566cd1f2ee9b6c2c88"],["bower_components/intl-messageformat/dist/intl-messageformat.min.js","89877bc37efdd3ae7358355b38891a5a"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","f50ab25a43a04c3bfae92ee0660f7dff"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","98e80b07b9dcc91346c978acafbc7b69"],["bower_components/iron-a11y-keys/iron-a11y-keys.html","c4c9b1b5dc02817c5240b14b1835aebe"],["bower_components/iron-ajax/iron-ajax.html","f5b6f52fbe56456d4126e580a9fc9707"],["bower_components/iron-ajax/iron-request.html","0fac2311b3b500b20c0b0514af34993f"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","ada1376b2f5f1329edafa84be4a6b8aa"],["bower_components/iron-behaviors/iron-button-state.html","8db139b37d7a568e71891e7d4868a3a8"],["bower_components/iron-behaviors/iron-control-state.html","1f5cde65fe782de4916df63da7162e13"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","8c9b69fe5548917ef78dbf5f17a16cfb"],["bower_components/iron-collapse/iron-collapse.html","6da292bd74ec6ca9939eba5556cd7256"],["bower_components/iron-dropdown/iron-dropdown-scroll-manager.html","bb6601e65d916ba54fab95aea1875c51"],["bower_components/iron-dropdown/iron-dropdown.html","6fed4a026d6c19de01b98b8451dfcdba"],["bower_components/iron-fit-behavior/iron-fit-behavior.html","a2f5e609f13019f5d251effc2d764437"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","997141a53d1c805a94e236e0c243db85"],["bower_components/iron-flex-layout/iron-flex-layout.html","07215643ad8fc279710d39fc7932f6a5"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","1c35587fb52660b045acf0f43a2a2cdc"],["bower_components/iron-icon/iron-icon.html","2059e7829c7400fd95091b0fe9fb0825"],["bower_components/iron-icons/av-icons.html","fb28cb74db670b512b92d7b4f55713af"],["bower_components/iron-icons/communication-icons.html","cbf621e5796e31587ee6d6768a18b0c1"],["bower_components/iron-icons/device-icons.html","eb448135349d722ccd9e7f04ee2805eb"],["bower_components/iron-icons/editor-icons.html","b40fe8b375f5352c3804b5008030c8f0"],["bower_components/iron-icons/hardware-icons.html","dd29f695f78241a2b4174bb10e34e5d6"],["bower_components/iron-icons/image-icons.html","18a1a2c7b5ed85b6010fd92b7bbff598"],["bower_components/iron-icons/iron-icons.html","69436d2c0cee445d8cadeeae706b23e8"],["bower_components/iron-icons/maps-icons.html","1b59e4ea983fa6dfdf163090c8d8ef38"],["bower_components/iron-icons/notification-icons.html","5173486b489d995afe7893c1895dccac"],["bower_components/iron-icons/places-icons.html","6eca3ff82accea516592b43ddaf61024"],["bower_components/iron-icons/social-icons.html","ecaa535482a2914ab9ee3f39e86d6d94"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","7e7b48139778945c287693fb3129d870"],["bower_components/iron-image/iron-image.html","434dc0813cf26690185b2ad2feef36be"],["bower_components/iron-input/iron-input.html","654f22076c5424410c48bcb5d5dd2b79"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","d2dbccf1d2f86b566f14b55d5a20be75"],["bower_components/iron-list/iron-list.html","66a09fa2f030d525c84e714c78f089eb"],["bower_components/iron-location/iron-location.html","38b81d8bef765d0529da59eca4408576"],["bower_components/iron-location/iron-query-params.html","6688a5bf860a3f8b3e82a86dc68891df"],["bower_components/iron-media-query/iron-media-query.html","88cfc1b313005fef15dbd38bb221021a"],["bower_components/iron-menu-behavior/iron-menu-behavior.html","44d046e4aab6323ef0e0527a4fdbe634"],["bower_components/iron-menu-behavior/iron-menubar-behavior.html","c14624c89d6b5fdc76a50a1f6ffa72ca"],["bower_components/iron-meta/iron-meta.html","a5bcf6ba61d59f1254dc37c933c3114c"],["bower_components/iron-overlay-behavior/iron-focusables-helper.html","2f7a3f32cb8945a9d64dfaa531b1f17d"],["bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","62cd91e6d4aa5c47d3c268d2f676f0f2"],["bower_components/iron-overlay-behavior/iron-overlay-behavior.html","d52933fbc6b98c71464e8f0ba840d9fc"],["bower_components/iron-overlay-behavior/iron-overlay-manager.html","877a48fc10bf7c8bb6c734b34c0038cc"],["bower_components/iron-overlay-behavior/iron-scroll-manager.html","a457fd227377c05818f5a37a909c01e0"],["bower_components/iron-pages/iron-pages.html","e3fd48e348c130b9d8d6a972d680916b"],["bower_components/iron-range-behavior/iron-range-behavior.html","4cda9464f016068df9a05f6d684641b1"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","af83dd7ae74ad55f3eae7f8c88cbdc13"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","418db58bbcb3000c87e4261b65070103"],["bower_components/iron-scroll-threshold/iron-scroll-threshold.html","ea3a9567626f0dd86dcb5a2700c4a991"],["bower_components/iron-selector/iron-multi-selectable.html","7f484dc636dff9a69dc1b409c135e43f"],["bower_components/iron-selector/iron-selectable.html","70a876d2b8b6d911fc79d5ad081739b4"],["bower_components/iron-selector/iron-selection.html","2e720937ccca46521e76c27199fd83f8"],["bower_components/iron-selector/iron-selector.html","2520e2a3fbc84b166a0d88a1abeb9fd1"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","29f9a1759781e65562d32bac299a697b"],["bower_components/juicy-ace-editor/juicy-ace-editor.html","6b64a9a0f9d1ad1e012043eee2455c40"],["bower_components/license-element/license-element.html","e6e61482e14aaff156de3b90a1634dc0"],["bower_components/lrn-aside/lrn-aside.html","347a5e5d6ba72dd58e06ed2c584ad1d8"],["bower_components/lrn-assignment/lrn-assignment.html","37bb825674f171f41478a766ffde7c69"],["bower_components/lrn-button/lrn-button.html","4bc1bae63841e1c1271897583fa8efc0"],["bower_components/lrn-calendar/i-cal-js.html","e20b5e7f069ac6948bc8d91da3d4a096"],["bower_components/lrn-calendar/ical.js","1a6eb3b91a346ab8a0a22b863b95cf1c"],["bower_components/lrn-calendar/lrn-calendar-date.html","29142c39f13d495ce1857a8e1e098d90"],["bower_components/lrn-calendar/lrn-calendar.html","c493e319a370f26b9df1619872a01077"],["bower_components/lrn-content/lrn-content.html","d6c6e0802fa92def7b3025b3b9137048"],["bower_components/lrn-icon/lrn-icon.html","8fdd842ca7049739349233236f380850"],["bower_components/lrn-icons/lrn-icons.html","d5614ad781faf7fa438bc0c7344f5831"],["bower_components/lrn-markdown-editor/lrn-markdown-editor-editor.html","a6abf817b5338164c231d53dd9bf0b5b"],["bower_components/lrn-markdown-editor/lrn-markdown-editor.html","811d176ea4bb9809bf9aa676f752c3f8"],["bower_components/lrn-math/lrn-math.html","d4ffa5dc87d52b90cf7337e505277bf2"],["bower_components/lrn-page/lrn-page.html","32089905134cec27b884c2314bdf7768"],["bower_components/lrn-table/lrn-table.html","3cefdcd83dd2013be22f8524b3c7cf58"],["bower_components/lrn-vocab/lrn-vocab-dialog.html","963ac953427c3dac1d3942d1fa949c95"],["bower_components/lrn-vocab/lrn-vocab.html","e49f7a96eeaf95bf611f4efd6703abee"],["bower_components/lrnapp-fab-menu/lrnapp-fab-menu.html","a549925423e17e0d27cb6d8eedec0e5c"],["bower_components/lrnapp-fab-menu/lrnapp-fab-speed-dial-action.html","b2ec6018be98a21ea25806cfcaf1bb5e"],["bower_components/lrndesign-abbreviation/lrndesign-abbreviation.html","237045066b64d33e05badb6378af579c"],["bower_components/lrndesign-avatar/lrndesign-avatar.html","4c2a1fc5d70236c3cc08b58c84e46387"],["bower_components/lrndesign-blockquote/lrndesign-blockquote.html","34d1c5a810cf4ed0896508d46a7d4536"],["bower_components/lrndesign-contentblock/lrndesign-contentblock.html","3722800fdee964439dc0971c0fe749c1"],["bower_components/lrndesign-drawer/lrndesign-drawer.html","a70c87f581b4d650dea4550bace929e3"],["bower_components/lrndesign-panelcard/lrndesign-panelcard.html","413ea49411580ccac88467954e915dce"],["bower_components/lrndesign-paperstack/lrndesign-paperstack.html","17bda28c429ec69d13220617b5001128"],["bower_components/lrnsys-button/lrnsys-button.html","a6f10722d612b03cd5f04ad32396a088"],["bower_components/lrnsys-layout/lrnsys-button-inner.html","2a54f9c0c0bddd980432a4f0c84e0670"],["bower_components/lrnsys-layout/lrnsys-collapselist-item.html","382367380e53b3ae4abfab6c6365d839"],["bower_components/lrnsys-layout/lrnsys-collapselist.html","cea6daacaa61edc609ad477f8828e802"],["bower_components/lrnsys-layout/lrnsys-dialog-modal.html","e2c73819a369f627a1a47bb9ebe7264c"],["bower_components/lrnsys-layout/lrnsys-dialog-toolbar-button.html","754984c52a5f561e9a6152159fbcf98c"],["bower_components/lrnsys-layout/lrnsys-dialog-toolbar.html","f4a9bc207c39f64d6d5f3670f70ad4c0"],["bower_components/lrnsys-layout/lrnsys-dialog.html","9e51e8bca39a619e7b4f6b3c0a924f1b"],["bower_components/lrnsys-layout/lrnsys-drawer-modal.html","5f65dd7f4b0ac3410f0f8f5d2d5100f1"],["bower_components/lrnsys-layout/lrnsys-drawer.html","9df4f6f18a4fb9631abc4b2387e0c392"],["bower_components/lrnsys-layout/lrnsys-layout.html","274033f844f12e193b5dc703217e0ac0"],["bower_components/lrnsys-render-html/lrnsys-render-html.html","413cc17d8e8dfd31ef8e0a43bf1f086e"],["bower_components/magazine-cover/magazine-cover.html","42503016dc52cd23a936c97fd46408a7"],["bower_components/marked-element/marked-element.html","460d9308b30280ac0174621b40776b52"],["bower_components/marked-element/marked-import.html","ceb78cb66f5b321ca8ee8602fd60392a"],["bower_components/marked/lib/marked.js","9767705b8a652d58bd06e3048ce1eb79"],["bower_components/materializecss-styles/colors.html","3b32e88f3a78757033bc534c39c7de7b"],["bower_components/materializecss-styles/materializecss-styles.html","ed0ff6a51bfe351e17068c9b900a40a7"],["bower_components/materializecss-styles/shapes.html","b26fba499cc9920bc92bf2fcbf4104f5"],["bower_components/md-extra-icons/md-extra-icons.html","b60bd1d7e5ff088d3472ab3550fe5fa1"],["bower_components/media-behaviors/media-behaviors.html","5de7df5e80be9b0a03c99954bd685e22"],["bower_components/media-image/media-image.html","ede66fd12eb843ad79ab2f5aedee0b87"],["bower_components/meme-maker/meme-maker.html","943d52702577b2ee3fddb1ad4e73c998"],["bower_components/mtz-file-download-behavior/mtz-file-download-behavior.html","3bfcbe6d0012d1337be32398eb9612a1"],["bower_components/mtz-marked-editor/controls/mtz-marked-control-link.html","ea7810c48e7ecc4ebe3b18df2f718b37"],["bower_components/mtz-marked-editor/mtz-marked-control-behavior.html","944f290289215836452583e13c1f3037"],["bower_components/mtz-marked-editor/mtz-marked-control-generic-line.html","426e157e861e4e26d4510f2b49976d9b"],["bower_components/mtz-marked-editor/mtz-marked-control-generic-wrap.html","1613a0116f65c0a14d23c294cd0495b0"],["bower_components/mtz-marked-editor/mtz-marked-control-line-behavior.html","47e6cd7ee62b7ac0520e27e6e9e8bb35"],["bower_components/mtz-marked-editor/mtz-marked-control-wrapper-behavior.html","b854337c68d455ba7d8d716f319dc2a7"],["bower_components/mtz-marked-editor/mtz-marked-editor.html","f7a45101aae70257b82efd621d416e1c"],["bower_components/multiple-choice/multiple-choice.html","90e9115992d7ce6452e950096c826efc"],["bower_components/neon-animation/animations/cascaded-animation.html","f95955bfa4b88526b087daa4ed6ddf07"],["bower_components/neon-animation/animations/fade-in-animation.html","4f6070aac57eb62106e6cfae775cddc4"],["bower_components/neon-animation/animations/fade-out-animation.html","e26194332b6cdc0c8b4713e6a9d05a0d"],["bower_components/neon-animation/animations/hero-animation.html","58a75dbada8620cb372d2ca418348fd4"],["bower_components/neon-animation/animations/opaque-animation.html","052abaced527e3a5887af7a82805401c"],["bower_components/neon-animation/animations/reverse-ripple-animation.html","64f510e3de30e1740241c04659bf5b4e"],["bower_components/neon-animation/animations/ripple-animation.html","3964d75888816f6d40cac4e20ea8fd76"],["bower_components/neon-animation/animations/scale-down-animation.html","843380667a2c0cb343aa5e9c2ab2561e"],["bower_components/neon-animation/animations/scale-up-animation.html","8775e94215bed72e0d02a59fd7bfc15c"],["bower_components/neon-animation/animations/slide-down-animation.html","5072e3c07989df0211e6026eb117d1d2"],["bower_components/neon-animation/animations/slide-from-bottom-animation.html","3c099f7ce85552375d5c328a747c9694"],["bower_components/neon-animation/animations/slide-from-left-animation.html","d33c1e041d95d15f6c2b8adaf02db474"],["bower_components/neon-animation/animations/slide-from-right-animation.html","d16989e94214f0b5c5e578ae39e9a01d"],["bower_components/neon-animation/animations/slide-from-top-animation.html","08dc19c8c08c98bd6df3d43a992574bb"],["bower_components/neon-animation/animations/slide-left-animation.html","5ae90978ccfcebdd031b966b2a43cb0b"],["bower_components/neon-animation/animations/slide-right-animation.html","b3bfce7a2827212b138009ecc071cdaa"],["bower_components/neon-animation/animations/slide-up-animation.html","e4de844bd943e57e5a9ac8a0c5e8a905"],["bower_components/neon-animation/animations/transform-animation.html","91447c69b53e05bc3a3d462d2a2b8d10"],["bower_components/neon-animation/neon-animatable-behavior.html","e649f4efc99f7f1d1f5f7e1368b72397"],["bower_components/neon-animation/neon-animatable.html","33ea78ddc0706969f9a6cef2035aad74"],["bower_components/neon-animation/neon-animated-pages.html","9b90dc79c8dcb959d9b4e8ef5cd40e18"],["bower_components/neon-animation/neon-animation-behavior.html","485adfd8e755dc52fda8d869c79b016f"],["bower_components/neon-animation/neon-animation-runner-behavior.html","5f73499fe286f11c84ead93edf1f4bec"],["bower_components/neon-animation/neon-animation.html","9de844a62a4bafd7a619b05e78b3c8e0"],["bower_components/neon-animation/neon-animations.html","53413d0f6ad0595cd94719079cb3088e"],["bower_components/neon-animation/neon-shared-element-animatable-behavior.html","31aebb3b4b255a3589091600a4670de4"],["bower_components/neon-animation/neon-shared-element-animation-behavior.html","cbcc86069ca32d27c7c570e10ba2339d"],["bower_components/neon-animation/web-animations.html","e00094c62e90e2f8aea82a6eb3fb656c"],["bower_components/oer-schema/oer-schema.html","149ac7b64a92b484a683df53582f55e3"],["bower_components/paper-audio-player/paper-audio-icons.html","0be4c4039704ff90aa3eb50fd7dcf0bb"],["bower_components/paper-audio-player/paper-audio-player.html","deb066fc47fda9f691c09d9513b6326c"],["bower_components/paper-avatar/lib/jdenticon-1.4.0.min.js","7097157f509c915955d6394d05e7e6ad"],["bower_components/paper-avatar/lib/md5.min.js","faad2b1fec326d66816f7c600a45b5bb"],["bower_components/paper-avatar/paper-avatar.html","a45e12e1553f8eb5ebb9272af811456e"],["bower_components/paper-badge/paper-badge.html","ed43a2c6df372951d54e53301f843b3e"],["bower_components/paper-behaviors/paper-button-behavior.html","09686b35929ef386cc50c0a8780bdf6b"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","05273cd44601e1620ae1bf2234682df7"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","7bcabd47cfbbcd774f8c00ad5a589143"],["bower_components/paper-behaviors/paper-ripple-behavior.html","622448da37bbb2e7cc43eaccc9ac67d0"],["bower_components/paper-button/paper-button.html","36302dc90fef5ed126edbabc6037c04b"],["bower_components/paper-card/paper-card.html","ca82e646ce482865dcc88fe623b916f6"],["bower_components/paper-checkbox/paper-checkbox.html","73ae73c056cfbfe4701785abf23574bf"],["bower_components/paper-chip/paper-chip.html","5d458ae9ca71ef11c50bc08e1fb9c5de"],["bower_components/paper-collapse-item/paper-collapse-group.html","4bd5974805ea9c99efc72853ae3e7307"],["bower_components/paper-collapse-item/paper-collapse-item.html","3cd4c467d266d42db7ea96f016909767"],["bower_components/paper-collapse-item/simple-paper-item.html","b06dbf48c77ec431a359387fee9e697a"],["bower_components/paper-dialog-behavior/paper-dialog-behavior.html","3ee314a2b9cc333bb8dbdb6c1aa85cbb"],["bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","730b18f042d35d61676254e7fd58dad5"],["bower_components/paper-dialog-scrollable/paper-dialog-scrollable.html","75098a84e5263115a4130f94ddf99de6"],["bower_components/paper-dialog/paper-dialog.html","33d7f258fb3aa47996fb656bb77b11fd"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-icons.html","af68dfabdb98631c2a8b315f2ae40959"],["bower_components/paper-dropdown-menu/paper-dropdown-menu-shared-styles.html","a7f0d56fb45fc19ff0057a6b812b6bef"],["bower_components/paper-dropdown-menu/paper-dropdown-menu.html","f4292cc81f06bb86765598b815a8bfcb"],["bower_components/paper-fab-speed-dial/paper-fab-speed-dial-overlay.html","c66477d4ffec8846d80d25c93b5c774c"],["bower_components/paper-fab-speed-dial/paper-fab-speed-dial.html","cc8e6a230c4da6d6fb74de8ed75abb81"],["bower_components/paper-fab/paper-fab.html","b2e1a5d09579dda147cef7505ba27613"],["bower_components/paper-icon-button/paper-icon-button.html","bd3dc81d0a13f2fba081872b591e6e50"],["bower_components/paper-icon-picker/paper-icon-picker-icon.html","07676584ef5c91c97dd676178c7f65e2"],["bower_components/paper-icon-picker/paper-icon-picker.html","a0ec7226a13d8dc290a52dee27ef5053"],["bower_components/paper-input-flagged/paper-input-flagged.html","d21c8005efb2139b34b6d43cb81ea318"],["bower_components/paper-input/paper-input-addon-behavior.html","17242bf35c16be74e32fb951121162f8"],["bower_components/paper-input/paper-input-behavior.html","f44d6b4a70f94cf29c3b4422adeed71c"],["bower_components/paper-input/paper-input-char-counter.html","53a514e4fe9c9a1df7a023c0a1838831"],["bower_components/paper-input/paper-input-container.html","afc032cc072dc1785f141c069b483a66"],["bower_components/paper-input/paper-input-error.html","283cceb50548b94be7ac31f8ab4a1943"],["bower_components/paper-input/paper-input.html","b244522000243ce95172562784faaade"],["bower_components/paper-input/paper-textarea.html","b275fdd3aa80858d5f2f97a68d62db32"],["bower_components/paper-item/paper-item-behavior.html","79794a04fa648d683f7eaf3a72085a35"],["bower_components/paper-item/paper-item-body.html","06125425412922fd1c43d6a0828e2e11"],["bower_components/paper-item/paper-item-shared-styles.html","be0d8b62877d55e0493a8a1bf30a3e19"],["bower_components/paper-item/paper-item.html","d925978b7c8d40711ecf32031aef60ce"],["bower_components/paper-listbox/paper-listbox.html","e5dbc8cdfcecce9c88ef3b7d3d0cdd94"],["bower_components/paper-material/paper-material-shared-styles.html","1becfee98ff1b125c2919ecee6cd08b2"],["bower_components/paper-material/paper-material.html","301354d4df2d2671fe67bd23e0a631c1"],["bower_components/paper-menu-button/paper-menu-button-animations.html","49843539fb79727be703ac83c0108b38"],["bower_components/paper-menu-button/paper-menu-button.html","e27af51f6f32189548db0c3aaa485587"],["bower_components/paper-menu/paper-menu-shared-styles.html","dc1b6deaeead29898d96aa71ced5a069"],["bower_components/paper-menu/paper-menu.html","c3d6beee00b28e22912d9819b6ed9587"],["bower_components/paper-progress/paper-progress.html","cca4757e56da95dae904e9039333ca80"],["bower_components/paper-ripple/paper-ripple.html","076fbe7ea2a22ea95202f33ad6bf98b5"],["bower_components/paper-slider/paper-slider.html","914ebb8939a496802d4fad33319c3d7c"],["bower_components/paper-spinner/paper-spinner-behavior.html","f68610757138999f247ff89738704afc"],["bower_components/paper-spinner/paper-spinner-lite.html","7199741f12239a24e45c2af558cd0546"],["bower_components/paper-spinner/paper-spinner-styles.html","f6b2d42a9d2262fafb034ea0f802fc80"],["bower_components/paper-spinner/paper-spinner.html","ecb60a3591445c31f261c0be1b698555"],["bower_components/paper-styles/color.html","7418844f2d23ddde100c0fd67e37d875"],["bower_components/paper-styles/default-theme.html","a6380b5d9e4f60352505d225ef15de6d"],["bower_components/paper-styles/element-styles/paper-material-styles.html","874d632bb429a7ae77ada9feecfa4635"],["bower_components/paper-styles/paper-styles.html","0805b74db74ab9c5c483a58eddda799b"],["bower_components/paper-styles/shadow.html","523888c54b8899405749bec48ca80b42"],["bower_components/paper-styles/typography.html","4b4a46839351e7e5cd3c2874d0c65bdc"],["bower_components/paper-swatch-picker/paper-swatch-picker-icon.html","848228fed57de2f82e91421ed91b3792"],["bower_components/paper-swatch-picker/paper-swatch-picker.html","4a580424dcb7bc860e7ee0ba945fe3d5"],["bower_components/paper-tabs/paper-tab.html","29969eda6e1dffc5f92f7c72fd5252a5"],["bower_components/paper-tabs/paper-tabs-icons.html","318fa8ee522a28195273a49de3f28e48"],["bower_components/paper-tabs/paper-tabs.html","9fd0ff53ea6df6736de8f312b38cd4d5"],["bower_components/paper-toast/paper-toast.html","316a1f87b88532606351daece4f5c1ac"],["bower_components/paper-toggle-button/paper-toggle-button.html","862db0f1ed225a1b626b17889c27beac"],["bower_components/paper-toolbar/paper-toolbar.html","4c9f7a91ee47cfbc9b4b65ac0d4af87e"],["bower_components/paper-tooltip/paper-tooltip.html","b852fe276f6b94b7f183b8bd1dd19f24"],["bower_components/pdf-element/fonts.css","1b63647fe4ca7106d245a99aac7c7b1c"],["bower_components/pdf-element/main.js","083afcf87c1d748821bc06b8d5a8f5b6"],["bower_components/pdf-element/pdf-element.html","7a26a9da19a6d258cd1555fcc6d59596"],["bower_components/pdf-element/pdf_viewer.css","64089bd9d072bb018656de742aafba57"],["bower_components/pdfjs-dist/build/pdf.js","71262ac0e5abb9e8132bc9009ac2ceea"],["bower_components/pdfjs-dist/build/pdf.worker.js","62ffe35aa48945e7f84f655cadf4bdc0"],["bower_components/pdfjs-dist/web/compatibility.js","8441f5a1c7c37d47d270e79d96eba7a0"],["bower_components/person-testimonial/person-testimonial-icon.html","bcd9f2e8c6ef411664b02ea4de3c3548"],["bower_components/person-testimonial/person-testimonial.html","6f9994ef02b1b0a2b1997e33b698bcb6"],["bower_components/place-holder/place-holder.html","3781030f2f3751323ec69c4b6626a178"],["bower_components/polymer/polymer-micro.html","37fe635558df844db78f063229540c43"],["bower_components/polymer/polymer-mini.html","eed3c4260ffaab9e16174a76b26d52c4"],["bower_components/polymer/polymer.html","3cc8278e44691b12a80f57503c39927e"],["bower_components/q-r/q-r-import.html","69cba295d58c1ff8c85ed5413eb28a82"],["bower_components/q-r/q-r.html","17ef9b7c2821e63d318d572eab34cb3b"],["bower_components/qr-code/src/qr-code.js","e9b8d514419dbd6518cce6085b6037e9"],["bower_components/qrjs/qr.js","9aeaaaa761ec884dbe399cda6722073c"],["bower_components/responsive-grid/responsive-grid-clear.html","9b33b78aecef9845f1b5bd22395ebe24"],["bower_components/responsive-grid/responsive-grid-col.html","261348c07f9de224c058f621b3227db2"],["bower_components/responsive-grid/responsive-grid-row.html","b9e58dfb40c723cb3ace28e96d906da5"],["bower_components/responsive-utility/responsive-utility.html","82892a0a241d42c1fb44d682072308bb"],["bower_components/schema-behaviors/schema-behaviors.html","f1320ea1a893e61d3d36b1cdf4e29065"],["bower_components/secure-request/secure-request.html","b296499a4738a288279d01ef7c69306c"],["bower_components/self-check/self-check.html","6b6bc25ac297824a865805f3044c7f6d"],["bower_components/simple-concept-network/simple-concept-network-node.html","e2eaf3731b5adf88e2c34d3167a3bfdd"],["bower_components/simple-concept-network/simple-concept-network.html","64bd793a4307de13d36284b928491b96"],["bower_components/tab-list/tab-list.html","a94077e8ea3bef675bfbc4da0a662eab"],["bower_components/task-list/task-list.html","fc70ea8ea8f0216973a6ef9f34052b5d"],["bower_components/vaadin-split-layout/vaadin-split-layout.html","f9b2df4c98e37d071262c9473b50630d"],["bower_components/vaadin-upload/vaadin-upload-file.html","c405c679b6327fd49232adacbd543e22"],["bower_components/vaadin-upload/vaadin-upload-icons.html","01b03093f5bf54daa6283d119884e5d0"],["bower_components/vaadin-upload/vaadin-upload.html","cbb939e9b63e722450e387808c3b6e96"],["bower_components/video-player/video-player.html","cfa25cb1590af6c7ec05e2f23cfd9d5b"],["bower_components/wave-player/wave-player.html","38938d0b4bcd534be58abfeb6a9f714c"],["bower_components/wave-player/wavesurferimport.html","cb9d4bcd0de5852d332040bf0f57ad09"],["bower_components/wavesurfer.js/dist/wavesurfer.min.js","f6c73bce09051eb0472618b213078944"],["bower_components/web-animations-js/web-animations-next-lite.min.html","4f3e7ff60b813423147da3d64aeb24ae"],["bower_components/web-animations-js/web-animations-next-lite.min.js","8dbcdff8d6ef7cb7e1ff95fa2a2b23a9"],["bower_components/web-animations-js/web-animations-next.min.html","8092e213c435352a84601641485f4e67"],["bower_components/web-animations-js/web-animations-next.min.js","f0b8d257164a32582a5f17f73f977885"],["bower_components/wikipedia-query/wikipedia-query.html","7e4a7dc76a0004ad58a9bbcff7831ed6"],["bower_components/word-count/word-count.html","fe2676ca4db6838cf4557f6add84fcab"],["bower_components/wysiwyg-hax/wysiwyg-hax.html","1d20e9e2d2609e2c6be8a2735d94966e"],["index.html","e8aa1cbcd8c9cfd08c32736376a9b456"],["src/build-app/build-app.html","68046743034468f7f31e419dcf0c2e2a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







