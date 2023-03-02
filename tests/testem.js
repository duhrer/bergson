/* eslint-env node */
"use strict";
var fluid = require("infusion");
var bergson = fluid.registerNamespace("bergson");

require("../");
require("fluid-testem");

fluid.defaults("bergson.test.testem", {
    gradeNames: ["fluid.testem.instrumentation"],
    sourceDirs: {
        src: "%bergson/src"
    },
    contentDirs: {
        tests:   "%bergson/tests"
    },
    testPages: ["tests/all-tests.html"],
    hookTestem: false,
    hookQUnit: true,
    instrumentedSourceDir: "%bergson/instrumented",
    reportsDir: "%bergson/reports",
    browserArgs: {
        // The `--headless` arg is needed until https://issues.fluid.net/browse/fluid-4145 is resolved.
        //
        // If you want to actually see the Firefox output, you'll need to run Testem manually, i.e.:
        // `node node_modules/testem/testem.js --file tests/testem.js`
        "Firefox": [
            "--no-remote",
            "--headless"
        ]
    },
    testemOptions: {
        "timeout": 300,
        "launch": "Firefox,Chrome,Safari"
        // "skip": "PhantomJS,Headless Chrome,Safari,IE"
    }
});

module.exports = bergson.test.testem().getTestemOptions();
