'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;-webkit-box-sizing:border-box;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline;-webkit-text-decoration:underline dotted currentColor;text-decoration:underline dotted currentColor}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{-webkit-font-feature-settings:inherit;font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#9ca3af;opacity:1}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-ms-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-y-0{bottom:0;top:0}.left-0{left:0}.col-span-2{grid-column:span 2/span 2}.-my-2{margin-bottom:-.5rem;margin-top:-.5rem}.-my-9{margin-bottom:-2.25rem;margin-top:-2.25rem}.mx-auto{margin-left:auto;margin-right:auto}.my-4{margin-bottom:1rem;margin-top:1rem}.-ml-1{margin-left:-.25rem}.-mr-1{margin-right:-.25rem}.mb-10{margin-bottom:2.5rem}.ml-10{margin-left:2.5rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-5{margin-left:1.25rem}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-1\\.5{margin-top:.375rem}.mt-12{margin-top:3rem}.mt-16{margin-top:4rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-9{margin-top:2.25rem}.block{display:block}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.h-10{height:2.5rem}.h-16{height:4rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-9{height:2.25rem}.w-10{width:2.5rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-7{width:1.75rem}.w-8{width:2rem}.w-9{width:2.25rem}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0}.max-w-2xl{max-width:42rem}.max-w-5xl{max-width:64rem}.max-w-6xl{max-width:72rem}.max-w-7xl{max-width:80rem}.max-w-xl{max-width:36rem}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}.flex-shrink-0{-ms-flex-negative:0;flex-shrink:0}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.items-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gap-12{gap:3rem}.gap-5{gap:1.25rem}.gap-x-12{-webkit-column-gap:3rem;-moz-column-gap:3rem;column-gap:3rem}.gap-x-20{-webkit-column-gap:5rem;-moz-column-gap:5rem;column-gap:5rem}.gap-x-8{-webkit-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem}.gap-y-12{row-gap:3rem}.gap-y-16{row-gap:4rem}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.75rem*var(--tw-space-x-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-black{--tw-border-opacity:1;border-color:rgba(0,0,0,var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgba(229,231,235,var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgba(209,213,219,var(--tw-border-opacity))}.border-transparent{border-color:#0000}.bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgba(79,70,229,var(--tw-bg-opacity))}.bg-transparent{background-color:initial}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:-webkit-gradient(linear,left top,right top,from(var(--tw-gradient-stops)));background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-fuchsia-600{--tw-gradient-from:#c026d3 var(--tw-gradient-from-position);--tw-gradient-to:#c026d300 var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-blue-600{--tw-gradient-to:#2563eb var(--tw-gradient-to-position)}.p-2{padding:.5rem}.p-4{padding:1rem}.px-16{padding-left:4rem;padding-right:4rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-1\\.5{padding-bottom:.375rem;padding-top:.375rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-9{padding-bottom:2.25rem;padding-top:2.25rem}.pb-6{padding-bottom:1.5rem}.pl-10{padding-left:2.5rem}.pl-3{padding-left:.75rem}.pr-4{padding-right:1rem}.pt-4{padding-top:1rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-widest{letter-spacing:.1em}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgba(37,99,235,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgba(156,163,175,var(--tw-text-opacity))}.text-gray-50{--tw-text-opacity:1;color:rgba(249,250,251,var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31,41,55,var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}.text-orange-400{--tw-text-opacity:1;color:rgba(251,146,60,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.text-yellow-300{--tw-text-opacity:1;color:rgba(253,224,71,var(--tw-text-opacity))}.placeholder-gray-500::-webkit-input-placeholder{--tw-placeholder-opacity:1;color:rgba(107,114,128,var(--tw-placeholder-opacity))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(107,114,128,var(--tw-placeholder-opacity))}.placeholder-gray-500:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(107,114,128,var(--tw-placeholder-opacity))}.placeholder-gray-500::-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(107,114,128,var(--tw-placeholder-opacity))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgba(107,114,128,var(--tw-placeholder-opacity))}.caret-blue-600{caret-color:#2563eb}.caret-indigo-600{caret-color:#4f46e5}.shadow-md{--tw-shadow:0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-all{-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{-webkit-transition-duration:.2s;transition-duration:.2s}.focus-within\\:text-gray-600:focus-within,.focus-within\\:text-gray-600[focus-within]{--tw-text-opacity:1;color:rgba(75,85,99,var(--tw-text-opacity))}.hover\\:border-orange-600:hover{--tw-border-opacity:1;border-color:rgba(234,88,12,var(--tw-border-opacity))}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.hover\\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.hover\\:bg-indigo-700:hover{--tw-bg-opacity:1;background-color:rgba(67,56,202,var(--tw-bg-opacity))}.hover\\:bg-orange-600:hover{--tw-bg-opacity:1;background-color:rgba(234,88,12,var(--tw-bg-opacity))}.hover\\:text-blue-600:hover{--tw-text-opacity:1;color:rgba(37,99,235,var(--tw-text-opacity))}.hover\\:text-blue-700:hover{--tw-text-opacity:1;color:rgba(29,78,216,var(--tw-text-opacity))}.hover\\:text-orange-600:hover{--tw-text-opacity:1;color:rgba(234,88,12,var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-yellow-400:hover{--tw-text-opacity:1;color:rgba(250,204,21,var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.focus\\:border-blue-600:focus{--tw-border-opacity:1;border-color:rgba(37,99,235,var(--tw-border-opacity))}.focus\\:border-indigo-600:focus{--tw-border-opacity:1;border-color:rgba(79,70,229,var(--tw-border-opacity))}.focus\\:border-orange-600:focus{--tw-border-opacity:1;border-color:rgba(234,88,12,var(--tw-border-opacity))}.focus\\:border-transparent:focus{border-color:#0000}.focus\\:bg-black:focus{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.focus\\:bg-blue-600:focus{--tw-bg-opacity:1;background-color:rgba(37,99,235,var(--tw-bg-opacity))}.focus\\:bg-blue-700:focus{--tw-bg-opacity:1;background-color:rgba(29,78,216,var(--tw-bg-opacity))}.focus\\:bg-gray-100:focus{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.focus\\:bg-indigo-700:focus{--tw-bg-opacity:1;background-color:rgba(67,56,202,var(--tw-bg-opacity))}.focus\\:bg-orange-600:focus{--tw-bg-opacity:1;background-color:rgba(234,88,12,var(--tw-bg-opacity))}.focus\\:text-blue-600:focus{--tw-text-opacity:1;color:rgba(37,99,235,var(--tw-text-opacity))}.focus\\:text-blue-700:focus{--tw-text-opacity:1;color:rgba(29,78,216,var(--tw-text-opacity))}.focus\\:text-orange-600:focus{--tw-text-opacity:1;color:rgba(234,88,12,var(--tw-text-opacity))}.focus\\:text-white:focus{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}.focus\\:text-yellow-400:focus{--tw-text-opacity:1;color:rgba(250,204,21,var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid #0000;outline-offset:2px}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring-1:focus{-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgba(79,70,229,var(--tw-ring-opacity))}@media (min-width:640px){.sm\\:ml-4{margin-left:1rem}.sm\\:mt-0{margin-top:0}.sm\\:mt-12{margin-top:3rem}.sm\\:mt-16{margin-top:4rem}.sm\\:flex{display:-webkit-box;display:-ms-flexbox;display:flex}.sm\\:w-auto{width:auto}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.sm\\:items-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.sm\\:items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sm\\:justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sm\\:justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.sm\\:space-x-12>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(3rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(3rem*var(--tw-space-x-reverse))}.sm\\:space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.sm\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.sm\\:rounded-full{border-radius:9999px}.sm\\:border-2{border-width:2px}.sm\\:border-transparent{border-color:#0000}.sm\\:bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.sm\\:p-2{padding:.5rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-16{padding-bottom:4rem}.sm\\:pt-16,.sm\\:py-16{padding-top:4rem}.sm\\:text-center{text-align:center}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:focus-within\\:border-blue-600:focus-within,.sm\\:focus-within\\:border-blue-600[focus-within]{--tw-border-opacity:1;border-color:rgba(37,99,235,var(--tw-border-opacity))}.sm\\:focus-within\\:ring-1:focus-within,.sm\\:focus-within\\:ring-1[focus-within]{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),0 0 #0000;-webkit-box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.sm\\:focus-within\\:ring-blue-600:focus-within,.sm\\:focus-within\\:ring-blue-600[focus-within]{--tw-ring-opacity:1;--tw-ring-color:rgba(37,99,235,var(--tw-ring-opacity))}}@media (min-width:768px){.md\\:order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.md\\:col-span-1{grid-column:span 1/span 1}.md\\:col-span-3{grid-column:span 3/span 3}.md\\:col-span-4{grid-column:span 4/span 4}.md\\:mt-20{margin-top:5rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:space-x-20>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(5rem*var(--tw-space-x-reverse))}}@media (min-width:1024px){.lg\\:absolute{position:absolute}.lg\\:inset-y-5{bottom:1.25rem;top:1.25rem}.lg\\:left-1\\/2{left:50%}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:ml-auto{margin-left:auto}.lg\\:mt-12{margin-top:3rem}.lg\\:mt-20{margin-top:5rem}.lg\\:flex{display:-webkit-box;display:-ms-flexbox;display:flex}.lg\\:inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.lg\\:hidden{display:none}.lg\\:h-10{height:2.5rem}.lg\\:h-20{height:5rem}.lg\\:-translate-x-1\\/2{--tw-translate-x:-50%;-webkit-transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.lg\\:items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.lg\\:gap-16{gap:4rem}.lg\\:gap-x-12{-webkit-column-gap:3rem;-moz-column-gap:3rem;column-gap:3rem}.lg\\:space-x-10>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(2.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(2.5rem*var(--tw-space-x-reverse))}.lg\\:p-16{padding:4rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-24{padding-bottom:6rem;padding-top:6rem}.lg\\:pb-0{padding-bottom:0}.lg\\:pl-8{padding-left:2rem}.lg\\:pr-8{padding-right:2rem}.lg\\:pt-24{padding-top:6rem}.lg\\:text-5xl{font-size:3rem;line-height:1}}@media (min-width:1280px){.xl\\:gap-x-12{-webkit-column-gap:3rem;-moz-column-gap:3rem;column-gap:3rem}.xl\\:pr-8{padding-right:2rem}}";
styleInject(css_248z,{"insertAt":"top"});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var RequireProps$4 = {
    features: [{
            title: '10',
            href: ''
        }, 12],
    logoSrc: ''
};
var data$4 = {
    features: [
        {
            title: "Features",
            href: "/"
        },
        { title: "Solutions", href: "/" },
        { title: "Resources", href: "/" },
        { title: "Pricing", href: "/" },
    ],
    logoSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
};

function C001$4(_a) {
    var _b = _a.features, features = _b === void 0 ? data$4.features : _b, _c = _a.logoSrc, logoSrc = _c === void 0 ? data$4.logoSrc : _c;
    var _d = React.useState(false), isOpened = _d[0], setOpen = _d[1];
    return (jsxRuntime.jsxs("header", { children: [jsxRuntime.jsx("div", __assign({ className: "bg-gray-100 border-b border-gray-200" }, { children: jsxRuntime.jsx("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8" }, { children: jsxRuntime.jsxs("nav", __assign({ className: "relative flex items-center justify-between h-16 lg:h-20" }, { children: [jsxRuntime.jsx("div", __assign({ className: "hidden lg:flex lg:items-center lg:space-x-10" }, { children: features.map(function (eachFeature, idx) {
                                    return (jsxRuntime.jsxs("a", __assign({ href: eachFeature.href, title: "", className: "text-base font-medium text-black" }, { children: [" ", eachFeature.title, " "] }), idx));
                                }) })), jsxRuntime.jsx("div", __assign({ className: "lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2" }, { children: jsxRuntime.jsx("div", __assign({ className: "flex-shrink-0" }, { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex" }, { children: jsxRuntime.jsx("img", { className: "w-auto h-8 lg:h-10", src: logoSrc, alt: "" }) })) })) })), jsxRuntime.jsx("button", __assign({ type: "button", className: "flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 lg:hidden" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-5 h-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) })) })), jsxRuntime.jsx("button", __assign({ onClick: function () { return setOpen(true); }, type: "button", className: "inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16m-7 6h7" }) })) })), jsxRuntime.jsxs("div", __assign({ className: "hidden lg:flex lg:items-center lg:space-x-10" }, { children: [jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "text-base font-medium text-black" }, { children: " Sign up " })), jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "text-base font-medium text-black" }, { children: " Sign in " })), jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center w-10 h-10 text-white bg-black rounded-full" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }) })) }))] }))] })) })) })), isOpened && jsxRuntime.jsx("nav", __assign({ className: "py-4 bg-white lg:hidden" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "flex items-center justify-between" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-sm font-semibold tracking-widest text-gray-400 uppercase" }, { children: "Menu" })), jsxRuntime.jsx("button", __assign({ onClick: function () { return setOpen(false); }, type: "button", className: "inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100" }, { children: jsxRuntime.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })) }))] })), jsxRuntime.jsxs("div", __assign({ className: "mt-6" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex flex-col space-y-2" }, { children: features.map(function (eachFeature, idx) {
                                        return (jsxRuntime.jsxs("a", __assign({ href: eachFeature.href, title: "", className: "py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" }, { children: [" ", eachFeature.title] }), idx));
                                    }) })), jsxRuntime.jsx("hr", { className: "my-4 border-gray-200" }), jsxRuntime.jsxs("div", __assign({ className: "flex flex-col space-y-2" }, { children: [jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" }, { children: " Sign up " })), jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600" }, { children: " Sign in " }))] }))] }))] })) }))] }));
}
C001$4.propRequire = RequireProps$4;

function C002$4(_a) {
    var _b = _a.features, features = _b === void 0 ? data$4.features : _b, _c = _a.logoSrc, logoSrc = _c === void 0 ? data$4.logoSrc : _c;
    var _d = React.useState(false), isOpened = _d[0], setOpen = _d[1];
    return (jsxRuntime.jsx("header", __assign({ className: "pb-6 bg-white lg:pb-0" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsxs("nav", __assign({ className: "flex items-center justify-between h-16 lg:h-20" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex-shrink-0" }, { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex" }, { children: jsxRuntime.jsx("img", { className: "w-auto h-8 lg:h-10", src: logoSrc, alt: "" }) })) })), jsxRuntime.jsx("button", __assign({ onClick: function () { return setOpen(!isOpened); }, type: "button", className: "inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100" }, { children: !isOpened ? jsxRuntime.jsx("svg", __assign({ className: "block w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 8h16M4 16h16" }) }))
                                : jsxRuntime.jsx("svg", __assign({ className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })) })), jsxRuntime.jsx("div", __assign({ className: "hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10" }, { children: features.map(function (eachFeature, idx) {
                                return (jsxRuntime.jsxs("a", __assign({ href: eachFeature.href, title: "", className: "text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" }, { children: [" ", eachFeature.title, " "] }), idx));
                            }) })), jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700", role: "button" }, { children: " Get started now " }))] })), isOpened && jsxRuntime.jsxs("nav", __assign({ className: "pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flow-root" }, { children: jsxRuntime.jsx("div", __assign({ className: "flex flex-col px-6 -my-2 space-y-1" }, { children: features.map(function (eachFeature, idx) {
                                    return (jsxRuntime.jsxs("a", __assign({ href: eachFeature.href, title: "", className: "inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" }, { children: [" ", eachFeature.title, " "] })));
                                }) })) })), jsxRuntime.jsx("div", __assign({ className: "px-6 mt-6" }, { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700", role: "button" }, { children: " Get started now " })) }))] }))] })) })));
}
C002$4.propRequire = RequireProps$4;

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  C001: C001$4,
  C002: C002$4
});

var RequireProps$3 = {
    company: [{
            title: '20',
            link: ''
        }, 4],
    resource: [{
            title: '20',
            link: '20'
        }, 4],
    extraLinks: [{
            title: '20',
            link: ''
        }, 4],
    help: [{
            title: '20',
            link: ''
        }, 4],
    logoSrc: '',
    description: '150',
};
var data$3 = {
    logoSrc: "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    socialLinks: [
        {
            link: "",
            type: "facebook"
        },
        {
            link: "",
            type: "twitter",
        },
        {
            link: "",
            type: "github"
        },
        {
            link: "",
            type: "instagram"
        },
    ],
    company: [
        { title: "About", link: "#" },
        { title: "Features", link: "#" },
        { title: "Works", link: "#" },
        { title: "Career", link: "#" },
    ],
    resource: [
        { title: "Free eBooks", link: "#" },
        { title: "how to Blog", link: "#" },
        { title: "Develop", link: "#" },
        { title: "Youtube playlist", link: "#" },
    ],
    extraLinks: [
        { title: "Customer Support", link: "#" },
        { title: "Delivery Details", link: "#" },
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
    ],
    help: [
        { title: "Customer Support", link: "#" },
        { title: "Delivery Details", link: "#" },
        { title: "Terms & Conditions", link: "#" },
        { title: "Privacy Policy", link: "#" },
    ]
};

var C001$3 = function (_a) {
    var _b = _a.logoSrc, logoSrc = _b === void 0 ? data$3.logoSrc : _b, _c = _a.description, description = _c === void 0 ? data$3.description : _c; _a.socialLinks; var _e = _a.company, company = _e === void 0 ? data$3.company : _e, _f = _a.help, help = _f === void 0 ? data$3.help : _f, _g = _a.resource, resource = _g === void 0 ? data$3.resource : _g, _h = _a.extraLinks, extraLinks = _h === void 0 ? data$3.extraLinks : _h;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-white sm:pt-16 lg:pt-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "col-span-2 md:col-span-4 xl:pr-8" }, { children: [jsxRuntime.jsx("img", { className: "w-auto h-9", src: logoSrc, alt: "" }), jsxRuntime.jsx("p", __assign({ className: "text-base leading-relaxed text-gray-600 mt-7" }, { children: description })), jsxRuntime.jsxs("a", __assign({ href: "#", title: "", className: "inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 mt-7" }, { children: [jsxRuntime.jsx("svg", __assign({ className: "w-6 h-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) })), "Start Live Chat"] }))] })), jsxRuntime.jsxs("div", __assign({ className: "lg:col-span-2" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-base font-semibold text-gray-900" }, { children: "Company" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-5" }, { children: company && company.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600" }, { children: [" ", each.title] })) }, idx));
                                    }) }))] })), jsxRuntime.jsxs("div", __assign({ className: "lg:col-span-2" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-base font-semibold text-gray-900" }, { children: "Help" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-4" }, { children: help && help.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600" }, { children: [" ", each.title] })) }, idx));
                                    }) }))] })), jsxRuntime.jsxs("div", __assign({ className: "lg:col-span-2" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-base font-semibold text-gray-900" }, { children: "Resources" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-5" }, { children: resource && resource.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600" }, { children: [" ", each.title, " "] })) }, idx));
                                    }) }))] })), jsxRuntime.jsxs("div", __assign({ className: "lg:col-span-2" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-base font-semibold text-gray-900" }, { children: "Extra Links" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-5" }, { children: extraLinks && extraLinks.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600" }, { children: [" ", each.title] })) }, idx));
                                    }) }))] }))] })), jsxRuntime.jsx("hr", { className: "mt-16 mb-10 border-gray-200" }), jsxRuntime.jsxs("div", __assign({ className: "sm:flex sm:items-center sm:justify-between" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-sm text-gray-600" }, { children: "\u00A9 Copyright 2021, All Rights Reserved by Postcraft" })), jsxRuntime.jsxs("ul", __assign({ className: "flex items-center mt-5 space-x-3 md:order-3 sm:mt-0" }, { children: [jsxRuntime.jsx("li", { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { d: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" }) })) })) }), jsxRuntime.jsx("li", { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { d: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" }) })) })) }), jsxRuntime.jsx("li", { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600" }, { children: jsxRuntime.jsxs("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: [jsxRuntime.jsx("path", { d: "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" }), jsxRuntime.jsx("circle", { cx: "16.806", cy: "7.207", r: "1.078" }), jsxRuntime.jsx("path", { d: "M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" })] })) })) }), jsxRuntime.jsx("li", { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" }) })) })) })] }))] }))] })) })));
};
C001$3.propRequire = RequireProps$3;

var C002$3 = function (_a) {
    var _b = _a.logoSrc, logoSrc = _b === void 0 ? data$3.logoSrc : _b, _c = _a.description, description = _c === void 0 ? data$3.description : _c, _d = _a.socialLinks, socialLinks = _d === void 0 ? data$3.socialLinks : _d, _e = _a.company, company = _e === void 0 ? data$3.company : _e, _f = _a.help, help = _f === void 0 ? data$3.help : _f;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-50 sm:pt-16 lg:pt-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8" }, { children: [jsxRuntime.jsx("img", { className: "w-auto h-9", src: logoSrc, alt: "" }), jsxRuntime.jsx("p", __assign({ className: "text-base leading-relaxed text-gray-600 mt-7" }, { children: description })), jsxRuntime.jsx("ul", __assign({ className: "flex items-center space-x-3 mt-9" }, { children: socialLinks && socialLinks.map(function (eachLink, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600" }, { children: eachLink.type === "twitter" ?
                                                    jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { d: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" }) }))
                                                    : eachLink.type === "facebook" ?
                                                        jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { d: "M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" }) }))
                                                        : eachLink.type === "instagram" ?
                                                            jsxRuntime.jsxs("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: [jsxRuntime.jsx("path", { d: "M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" }), jsxRuntime.jsx("circle", { cx: "16.806", cy: "7.207", r: "1.078" }), jsxRuntime.jsx("path", { d: "M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" })] }))
                                                            :
                                                                eachLink.type === "github" ?
                                                                    jsxRuntime.jsx("svg", __assign({ className: "w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" }) })) : null })) }, idx));
                                    }) }))] })), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", __assign({ className: "text-sm font-semibold tracking-widest text-gray-400 uppercase" }, { children: "Company" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-4" }, { children: company && company.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" }, { children: [" ", each.title, " "] })) }, idx));
                                    }) }))] }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", __assign({ className: "text-sm font-semibold tracking-widest text-gray-400 uppercase" }, { children: "Help" })), jsxRuntime.jsx("ul", __assign({ className: "mt-6 space-y-4" }, { children: help && help.map(function (each, idx) {
                                        return (jsxRuntime.jsx("li", { children: jsxRuntime.jsxs("a", __assign({ href: each.link, title: "", className: "flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" }, { children: [" ", each.title, " "] })) }, idx));
                                    }) }))] }), jsxRuntime.jsxs("div", __assign({ className: "col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-sm font-semibold tracking-widest text-gray-400 uppercase" }, { children: "Subscribe to newsletter" })), jsxRuntime.jsxs("form", __assign({ action: "#", method: "POST", className: "mt-6" }, { children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("label", __assign({ htmlFor: "email", className: "sr-only" }, { children: "Email" })), jsxRuntime.jsx("input", { type: "email", name: "email", id: "email", placeholder: "Enter your email", className: "block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" })] }), jsxRuntime.jsx("button", __assign({ type: "submit", className: "inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" }, { children: "Subscribe" }))] }))] }))] })), jsxRuntime.jsx("hr", { className: "mt-16 mb-10 border-gray-200" }), jsxRuntime.jsx("p", __assign({ className: "text-sm text-center text-gray-600" }, { children: "\u00A9 Copyright 2021, All Rights Reserved by Postcraft" }))] })) })));
};
C002$3.propRequire = RequireProps$3;

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  C001: C001$3,
  C002: C002$3
});

var RequireProps$2 = {
    queries: [{
            title: '20',
            description: '150'
        }, 4],
    title: '30',
    description: '150',
    contactLink: ''
};
var data$2 = {
    title: 'Questions & Answers',
    description: "Explore the common questions and answers about Celebration",
    queries: [
        {
            title: 'How to create an account?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'How can I make payment?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'Do you provide discounts?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'How do you provide support?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
    ],
    contactLink: "#"
};

var C001$2 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? data$2.title : _b, _c = _a.description, description = _c === void 0 ? data$2.description : _c, _d = _a.contactLink, contactLink = _d === void 0 ? data$2.contactLink : _d, _e = _a.queries, queries = _e === void 0 ? data$2.queries : _e;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-900 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "max-w-5xl px-4 mx-auto sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "max-w-2xl mx-auto text-center" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("p", __assign({ className: "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300" }, { children: description }))] })), jsxRuntime.jsx("div", __assign({ className: "grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20" }, { children: queries && queries.map(function (each, idx) {
                        return (jsxRuntime.jsxs("div", __assign({ className: "flex items-start" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full" }, { children: jsxRuntime.jsx("span", __assign({ className: "text-lg font-semibold text-white" }, { children: "?" })) })), jsxRuntime.jsxs("div", __assign({ className: "ml-4" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-xl font-semibold text-white" }, { children: each.title })), jsxRuntime.jsx("p", __assign({ className: "mt-4 text-base text-gray-400" }, { children: each.description }))] }))] }), idx));
                    }) })), jsxRuntime.jsx("div", __assign({ className: "flex items-center justify-center mt-12 md:mt-20" }, { children: jsxRuntime.jsx("div", __assign({ className: "px-8 py-4 text-center bg-gray-800 rounded-full" }, { children: jsxRuntime.jsxs("p", __assign({ className: "text-gray-50" }, { children: ["Didn\u2019t find the answer you are looking for? ", jsxRuntime.jsx("a", __assign({ href: contactLink, title: "", className: "text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline" }, { children: "Contact our support" }))] })) })) }))] })) })));
};
C001$2.propRequire = RequireProps$2;

var C002$2 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? data$2.title : _b, _c = _a.queries, queries = _c === void 0 ? data$2.queries : _c;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-white sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "max-w-6xl px-4 mx-auto sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("div", __assign({ className: "flow-root mt-12 sm:mt-16" }, { children: jsxRuntime.jsx("div", __assign({ className: "divide-y divide-gray--200 -my-9" }, { children: queries && queries.map(function (each, idx) {
                            return (jsxRuntime.jsxs("div", __assign({ className: "py-9" }, { children: [jsxRuntime.jsx("p", __assign({ className: "text-xl font-semibold text-black" }, { children: each.title })), jsxRuntime.jsx("p", __assign({ className: "mt-3 text-base text-gray-600" }, { children: each.description }))] }), idx));
                        }) })) }))] })) })));
};
C002$2.propRequire = RequireProps$2;

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  C001: C001$2,
  C002: C002$2
});

var RequireProps$1 = {
    shortTitle: '50',
    title: '75',
    description: '150',
    items: [{
            title: '30',
            description: '150'
        }, 4]
};
var data$1 = {
    shortTitle: '3,583 Customers are using Celebration',
    title: "Celebration helps you build beautiful website",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    items: [
        {
            title: "Made for Developers",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            title: "120+ Coded Blocks",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            title: "Helpful Video Tutorials",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            title: "Secured Payments",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        }
    ]
};

var C001$1 = function (_a) {
    var _b = _a.shortTitle, title = _b === void 0 ? data$1.shortTitle : _b, _c = _a.items, items = _c === void 0 ? data$1.items : _c;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-50 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsx("div", __assign({ className: "text-center" }, { children: jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })) })), jsxRuntime.jsx("div", __assign({ className: "px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16" }, { children: jsxRuntime.jsx("div", __assign({ className: "grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2" }, { children: items && items.map(function (each, idx) {
                            return (jsxRuntime.jsx("div", __assign({ className: "flex items-start" }, { children: jsxRuntime.jsxs("div", __assign({ className: "ml-5" }, { children: [jsxRuntime.jsx("h3", __assign({ className: "text-lg font-semibold text-black" }, { children: each.title })), jsxRuntime.jsx("p", __assign({ className: "mt-4 text-base text-gray-600" }, { children: each.description }))] })) }), idx));
                        }) })) }))] })) })));
};
C001$1.propRequire = RequireProps$1;

var C002$1 = function (_a) {
    var _b = _a.shortTitle, shortTitle = _b === void 0 ? data$1.shortTitle : _b, _c = _a.title, title = _c === void 0 ? data$1.title : _c, _d = _a.description, description = _d === void 0 ? data$1.description : _d, _e = _a.items, items = _e === void 0 ? data$1.items : _e;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-50 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "max-w-xl mx-auto text-center" }, { children: [jsxRuntime.jsx("div", __assign({ className: "inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600" }, { children: jsxRuntime.jsx("p", __assign({ className: "text-xs font-semibold tracking-widest text-white uppercase" }, { children: shortTitle })) })), jsxRuntime.jsx("h2", __assign({ className: "mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("p", __assign({ className: "mt-4 text-base leading-relaxed text-gray-600" }, { children: description }))] })), jsxRuntime.jsx("div", __assign({ className: "grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12" }, { children: items && items.slice(0, 3).map(function (each, idx) {
                        return (jsxRuntime.jsx("div", __assign({ className: "transition-all duration-200 bg-white hover:shadow-xl" }, { children: jsxRuntime.jsxs("div", __assign({ className: "py-10 px-9" }, { children: [jsxRuntime.jsx("h3", __assign({ className: "mt-8 text-lg font-semibold text-black" }, { children: each.title })), jsxRuntime.jsx("p", __assign({ className: "mt-4 text-base text-gray-600" }, { children: each.description }))] })) }), idx));
                    }) }))] })) })));
};
C002$1.propRequire = RequireProps$1;

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  C001: C001$1,
  C002: C002$1
});

var RequireProps = {
    shortTitle: '50',
    title: '75',
    description: '150',
    items: [{
            title: '15',
            subtitle: '15'
        }, 4]
};
var data = {
    title: "Get full access to Celebration",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortTitle: "130+ Hand Crafted Coded Blocks",
    items: [
        {
            title: "130+ Blocks",
            subtitle: "Ready to use"
        },
        {
            title: "14 Pages",
            subtitle: "Make it live"
        },
        {
            title: "Easy Access",
            subtitle: "Anyone can use"
        }
    ]
};

var C001 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? data.title : _b, _c = _a.description, description = _c === void 0 ? data.description : _c, _d = _a.items, items = _d === void 0 ? data.items : _d;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-100 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "max-w-2xl mx-auto text-left sm:text-center" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("p", __assign({ className: "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" }, { children: description }))] })), jsxRuntime.jsx("div", __assign({ className: "mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20" }, { children: items && items.map(function (each, idx) {
                        return (jsxRuntime.jsxs("div", __assign({ className: "flex items-start" }, { children: [jsxRuntime.jsx("svg", __assign({ className: "flex-shrink-0 text-orange-400 w-7 h-7", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule": "evenodd" }) })), jsxRuntime.jsxs("div", __assign({ className: "ml-4" }, { children: [jsxRuntime.jsx("h3", __assign({ className: "text-xl font-semibold text-black" }, { children: each.title })), jsxRuntime.jsx("p", __assign({ className: "mt-1.5 text-base text-gray-600" }, { children: each.subtitle }))] }))] }), idx));
                    }) })), jsxRuntime.jsx("form", __assign({ action: "#", method: "POST", className: "max-w-xl mx-auto mt-12" }, { children: jsxRuntime.jsx("div", __assign({ className: "sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600" }, { children: jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-start sm:flex-row sm:justify-center" }, { children: [jsxRuntime.jsx("div", __assign({ className: "flex-1 w-full min-w-0" }, { children: jsxRuntime.jsxs("div", __assign({ className: "relative text-gray-400 focus-within:text-gray-600" }, { children: [jsxRuntime.jsx("label", { htmlFor: "email", className: "sr-only" }), jsxRuntime.jsx("div", __assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" }, { children: jsxRuntime.jsx("svg", __assign({ className: "w-5 h-5", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" }) })) })), jsxRuntime.jsx("input", { type: "email", name: "email", id: "email", placeholder: "Enter email address", className: "block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600", required: true })] })) })), jsxRuntime.jsxs("button", __assign({ type: "submit", className: "inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700" }, { children: ["Get instant access", jsxRuntime.jsx("svg", __assign({ className: "w-5 h-5 ml-3 -mr-1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", "clip-rule": "evenodd" }) }))] }))] })) })) })), jsxRuntime.jsxs("div", __assign({ className: "flex items-center justify-start mt-8 sm:justify-center sm:px-0" }, { children: [jsxRuntime.jsx("svg", __assign({ className: "flex-shrink-0 w-5 h-5 text-gray-600", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) })), jsxRuntime.jsx("span", __assign({ className: "ml-2 text-sm text-gray-600" }, { children: " Your data is complely secured with us. We don\u2019t share with anyone. " }))] }))] })) })));
};
C001.propRequire = RequireProps;

var C002 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? data.title : _b, _c = _a.description, description = _c === void 0 ? data.description : _c;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-100 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsxs("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "max-w-2xl mx-auto text-center" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("p", __assign({ className: "max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600" }, { children: description }))] })), jsxRuntime.jsx("form", __assign({ action: "#", method: "POST", className: "max-w-xl mx-auto mt-12" }, { children: jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center sm:flex-row sm:justify-center" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "flex-1 w-full min-w-0 px-4 sm:px-0" }, { children: [jsxRuntime.jsx("label", { htmlFor: "email", className: "sr-only" }), jsxRuntime.jsx("input", { type: "email", name: "email", id: "email", placeholder: "Enter email to get started", className: "block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600", required: true })] })), jsxRuntime.jsxs("button", __assign({ type: "submit", className: "inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700" }, { children: ["Get instant access", jsxRuntime.jsx("svg", __assign({ className: "w-5 h-5 ml-3 -mr-1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor" }, { children: jsxRuntime.jsx("path", { "fill-rule": "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", "clip-rule": "evenodd" }) }))] }))] })) })), jsxRuntime.jsxs("div", __assign({ className: "flex items-center justify-center px-8 mt-8 sm:px-0" }, { children: [jsxRuntime.jsx("svg", __assign({ className: "flex-shrink-0 w-5 h-5 text-gray-600", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) })), jsxRuntime.jsx("span", __assign({ className: "ml-2 text-sm text-gray-600" }, { children: " Your data is complely secured with us. We don\u2019t share with anyone. " }))] }))] })) })));
};
C002.propRequire = RequireProps;

var C003 = function (_a) {
    var _b = _a.title, title = _b === void 0 ? data.title : _b, _c = _a.shortTitle, shortTitle = _c === void 0 ? data.shortTitle : _c;
    return (jsxRuntime.jsx("section", __assign({ className: "py-10 bg-gray-100 sm:py-16 lg:py-24" }, { children: jsxRuntime.jsx("div", __assign({ className: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" }, { children: jsxRuntime.jsxs("div", __assign({ className: "text-center" }, { children: [jsxRuntime.jsx("h2", __assign({ className: "text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" }, { children: title })), jsxRuntime.jsx("p", __assign({ className: "mt-4 text-2xl font-medium" }, { children: shortTitle })), jsxRuntime.jsxs("div", __assign({ className: "flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0" }, { children: [jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700", role: "button" }, { children: " Try For Free " })), jsxRuntime.jsxs("a", __assign({ href: "#", title: "", className: "inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:w-auto hover:bg-black hover:text-white focus:bg-black focus:text-white", role: "button" }, { children: [jsxRuntime.jsx("svg", __assign({ className: "w-5 h-5 mr-2 -ml-1", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, { children: jsxRuntime.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) })), "Contact Sales"] }))] })), jsxRuntime.jsxs("p", __assign({ className: "mt-6 text-base text-black" }, { children: ["Already have an account? ", jsxRuntime.jsx("a", __assign({ href: "#", title: "", className: "text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline" }, { children: "Log in" }))] }))] })) })) })));
};
C003.propRequire = RequireProps;

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  C001: C001,
  C002: C002,
  C003: C003
});

exports.CallToAction = index;
exports.Faq = index$2;
exports.Feature = index$1;
exports.Footer = index$3;
exports.Header = index$4;
//# sourceMappingURL=index.js.map
