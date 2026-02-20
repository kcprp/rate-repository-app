import registerRootComponent from 'expo/build/launch/registerRootComponent';

// Mute Apollo 3.14 false-positive canonizeResults deprecation (apollographql/apollo-client#13057)
if (typeof global !== 'undefined') {
  global[Symbol.for('apollo.deprecations')] = true;
}

// Load App after the global deprecation flag is set.
const App = require('./App').default;
registerRootComponent(App);
