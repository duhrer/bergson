/* eslint-env node */
"use strict";
var fluid = require("infusion");
var bergson = fluid.registerNamespace("bergson");

require("../");
require("fluid-testem");

fluid.defaults("bergson.test.testem.webaudio", {
    gradeNames: ["fluid.testem"],
    sourceDirs: {
        src: "%bergson/src"
    },
    contentDirs: {
        tests:   "%fluid-binder/tests"
    },
    testPages: ["tests/html/audiocontext-clock-tests.html"],
    instrumentedSourceDir: "%bergson/instrumented",
    reportsDir: "%bergson/reports",
    browserArgs: {
        "Chrome": [
            "--autoplay-policy=no-user-gesture-required"
        ]
    },
    testemOptions: {
        "timeout": 300,
        "launch": "Chrome"
    }
});

module.exports = bergson.test.testem.webaudio().getTestemOptions();
