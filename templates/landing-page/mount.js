/* Plain JS (no JSX/Babel) so it ALWAYS executes — the last Babel src script
   is unreliable in the DC helmet. Defines the landing root + waitlist modal
   with React.createElement and renders with the same React the sections use. */
(function () {
  function ready() {
    return window.React && window.ReactDOM && window.BloqrDesignSystem_097f61 &&
           window.KitNav && window.KitHero && window.KitProblem && window.KitHowItWorks &&
           window.KitFeatures && window.KitPricing && window.KitFooter &&
           document.getElementById('bloqr-landing-root');
  }
  function start() {
    if (!ready()) return setTimeout(start, 40);
    var root = document.getElementById('bloqr-landing-root');
    if (root.__mounted) return;
    root.__mounted = true;
    var R = window.React, h = R.createElement;
    var DS = window.BloqrDesignSystem_097f61;
    var Badge = DS.Badge, Button = DS.Button, Input = DS.Input;

    function WaitlistModal(props) {
      var s = R.useState(false), done = s[0], setDone = s[1];
      var body = done
        ? h('div', { style: { textAlign: 'center' } },
            h(Badge, { tone: 'cyan', dot: true }, 'On the list'),
            h('h3', { style: { fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fg-1)', margin: '18px 0 8px' } }, "You're on the list."),
            h('p', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)', margin: '0 0 24px', lineHeight: 1.5 } }, "We'll be in touch. No spam — that would be deeply off-brand."),
            h(Button, { variant: 'outline', onClick: props.onClose, style: { width: '100%', justifyContent: 'center' } }, 'Close'))
        : h(R.Fragment, null,
            h(Badge, { tone: 'orange', dot: true }, 'Now in beta'),
            h('h3', { style: { fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--fg-1)', margin: '18px 0 8px' } }, 'Get early access.'),
            h('p', { style: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--fg-2)', margin: '0 0 20px', lineHeight: 1.5 } }, 'One account, every device. Bring your own vendor or use ours.'),
            h(Input, { label: 'Email', placeholder: 'you@example.com', hint: "We'll only email about launch.", style: { marginBottom: 18 } }),
            h(Button, { variant: 'primary', onClick: function () { setDone(true); }, style: { width: '100%', justifyContent: 'center' } }, 'Join the waitlist ', h('span', { 'aria-hidden': true }, '→')));
      return h('div', { className: 'modal-backdrop', onClick: props.onClose },
        h('div', { onClick: function (e) { e.stopPropagation(); }, style: { width: 'min(440px,100%)', background: 'var(--bg-overlay)', border: '1px solid var(--border-accent)', borderRadius: 16, padding: 32, boxShadow: 'var(--shadow-lg)' } }, body));
    }

    function LandingAppRoot() {
      var a = R.useState('why'), active = a[0], setActive = a[1];
      var m = R.useState(false), modal = m[0], setModal = m[1];
      var open = function () { setModal(true); };
      R.useEffect(function () { var el = document.getElementById(active); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, [active]);
      return h(R.Fragment, null,
        h(window.KitNav, { active: active, setActive: setActive, onLaunch: open }),
        h(window.KitHero, { onLaunch: open }),
        h('div', { className: 'divider-glow' }),
        h(window.KitProblem, null),
        h(window.KitHowItWorks, null),
        h(window.KitFeatures, null),
        h(window.KitPricing, { onLaunch: open }),
        h(window.KitFooter, { onLaunch: open }),
        modal ? h(WaitlistModal, { onClose: function () { setModal(false); } }) : null);
    }

    window.ReactDOM.createRoot(root).render(h(LandingAppRoot));
  }
  start();
})();
