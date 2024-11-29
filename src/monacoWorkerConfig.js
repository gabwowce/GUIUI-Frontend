/* eslint-disable no-restricted-globals */

/* global self */

self.MonacoEnvironment = {
    getWorkerUrl: function () {
      return 'data:text/javascript;charset=utf-8,' + encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/'
        };
        importScripts('https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs/base/worker/workerMain.js');
      `);
    },
  };