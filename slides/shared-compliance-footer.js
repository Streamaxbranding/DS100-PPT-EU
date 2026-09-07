/* Shared presentation compliance footer — kept deliberately quiet for projection. */
(function () {
  'use strict';

  function mountFooter() {
    if (document.getElementById('streamax-compliance-footer')) return;

    var style = document.createElement('style');
    style.id = 'streamax-compliance-footer-style';
    style.textContent =
      /* Existing deck-end marks are suppressed so every page has exactly one consistent footer. */
      '.brand,#slide-container .__streamax-wm-host{visibility:hidden!important;}' +
      '#streamax-deck-logo{' +
        'position:absolute;z-index:2147483000;left:34px;bottom:24px;width:168px;height:auto;' +
        'display:block;opacity:.56;' +
        'pointer-events:none;user-select:none;' +
      '}' +
      '#streamax-compliance-footer{' +
        'position:absolute;z-index:2147483000;right:34px;bottom:20px;' +
        'width:590px;margin:0;text-align:right;' +
        'font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;' +
        'font-size:9px;line-height:1.32;letter-spacing:.005em;font-weight:500;' +
        'color:rgba(192,204,218,.26);text-shadow:0 1px 8px rgba(0,0,0,.44);' +
        'pointer-events:none;user-select:none;' +
      '}' +
      '.hide-compliance-footer #streamax-compliance-footer{opacity:0!important;visibility:hidden!important;}' +
      '#streamax-compliance-footer .compliance-line{display:block;text-align:right;white-space:nowrap;}' +
      '#streamax-compliance-footer::before{' +
        'content:"";display:block;width:32px;height:1px;margin:0 0 5px auto;' +
        'background:linear-gradient(90deg,transparent,rgba(42,245,152,.34),rgba(0,158,253,.28));' +
      '}' +
      '@media (prefers-reduced-motion:reduce){#streamax-compliance-footer{transition:none!important}}';
    document.head.appendChild(style);

    var logo = document.createElement('img');
    logo.id = 'streamax-deck-logo';
    logo.src = '../assets/Branding__streamax.png';
    logo.alt = 'Streamax';

    var footer = document.createElement('p');
    footer.id = 'streamax-compliance-footer';
    footer.setAttribute('aria-label', 'Product and performance disclaimer');
    [
      'Product features, specifications, AI functions, compliance support and performance may vary',
      'by configuration, market and operating conditions. Data and comparisons are for reference only;',
      'actual results may vary. Please consult Streamax for local availability and requirements.'
    ].forEach(function (line) {
      var span = document.createElement('span');
      span.className = 'compliance-line';
      span.textContent = line;
      footer.appendChild(span);
    });

    var stage = document.getElementById('slide-container') || document.querySelector('.slide') || document.body;
    stage.appendChild(logo);
    stage.appendChild(footer);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountFooter, { once: true });
  else mountFooter();
}());
