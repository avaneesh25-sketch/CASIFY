(() => {
  'use strict';
  const key = 'casify.analytics-consent.v1';
  const projectId = 'yz7o35ev8e';
  const production = location.hostname === 'casify-two.vercel.app';
  const allowedPage = location.pathname === '/' || location.pathname === '/index.html';
  let accepted = false;
  let loaded = false;
  const readChoice = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(key));
      return saved && Date.now() - saved.time < 180 * 86400000 && ['granted', 'denied'].includes(saved.value) ? saved.value : null;
    } catch { return null; }
  };
  function loadClarity() {
    if (loaded || !production || !allowedPage) return;
    loaded = true;
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.clarity.ms/tag/' + projectId;
    document.head.appendChild(script);
  }
  const panel = document.createElement('section');
  panel.className = 'consent-panel';
  panel.setAttribute('aria-label', 'Analytics privacy preferences');
  panel.innerHTML = '<div><strong>Help us improve Casify?</strong><p>With your permission, Microsoft Clarity records interactions to help us improve this showcase. Advertising consent stays off. <a href="/privacy.html">Privacy details</a></p></div><div class="consent-actions"><button type="button" data-consent="denied">Decline analytics</button><button type="button" data-consent="granted">Allow analytics</button></div>';
  document.body.appendChild(panel);
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'privacy-settings';
  settings.textContent = 'Privacy choices';
  (document.querySelector('footer') || document.body).appendChild(settings);
  settings.addEventListener('click', () => { panel.hidden = false; panel.querySelector('button').focus(); });
  function choose(value) {
    accepted = value === 'granted';
    try { localStorage.setItem(key, JSON.stringify({ value, time: Date.now() })); } catch { /* Use the choice for this visit when storage is unavailable. */ }
    panel.hidden = true;
    if (accepted) { loadClarity(); return; }
    if (window.clarity) window.clarity('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
    for (const name of ['_clck', '_clsk']) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax';
        document.cookie = name + '=; Max-Age=0; Path=/; Domain=' + location.hostname + '; SameSite=Lax';
    }
    if (loaded) {
      // Reload unloads the already-running analytics script. The saved denial prevents it loading again.
      location.reload();
    }
  }
  panel.querySelectorAll('[data-consent]').forEach(button => button.addEventListener('click', () => choose(button.dataset.consent)));
  const saved = readChoice();
  panel.hidden = saved !== null;
  accepted = saved === 'granted';
  if (accepted) loadClarity();
  document.querySelectorAll('dialog, input, textarea').forEach(element => element.setAttribute('data-clarity-mask', 'true'));
  document.addEventListener('click', event => {
    if (!accepted || !loaded || !window.clarity || !(event.target instanceof Element)) return;
    const target = event.target.closest('[data-case], [data-level], #institution-cta');
    if (!target) return;
    const eventName = target.hasAttribute('data-case') ? 'sample_case_opened' : target.hasAttribute('data-level') ? 'level_explored' : 'institutional_interest';
    window.clarity('event', eventName);
  });
})();
