/* Plain JS (no JSX/Babel) so it ALWAYS executes. Mounts the Bloqr AI app
   with the SAME React/ReactDOM the screens use (unpkg window globals),
   avoiding the React-instance mismatch an <x-import> mount would cause.
   Polls until React, ReactDOM, the DS bundle, and the screen globals are
   all present, then renders once into #bloqr-app-root. */
(function () {
  function ready() {
    return window.React && window.ReactDOM && window.BloqrDesignSystem_097f61 &&
           window.AppShell && window.DashboardScreen && window.CompilerScreen &&
           document.getElementById('bloqr-app-root');
  }
  function start() {
    if (!ready()) return setTimeout(start, 40);
    var R = window.React, root = document.getElementById('bloqr-app-root');
    if (root.__mounted) return;
    root.__mounted = true;

    function App() {
      var rt = R.useState('dashboard'), route = rt[0], setRoute = rt[1];
      R.useEffect(function () { window.scrollTo(0, 0); }, [route]);
      var screen = route === 'compiler'
        ? R.createElement(window.CompilerScreen, null)
        : R.createElement(window.DashboardScreen, { setRoute: setRoute });
      return R.createElement(window.AppShell, { route: route, setRoute: setRoute }, screen);
    }
    window.ReactDOM.createRoot(root).render(R.createElement(App));
  }
  start();
})();
