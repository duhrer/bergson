(function () {

    "use strict";

    QUnit.module("Realtime clock");

    fluid.defaults("flock.test.clock.realtimeManual.tester", {
        gradeNames: [
            "flock.test.clock.tester.manual",
            "flock.test.clock.tester.realtime",
            "autoInit"
        ]
    });

    fluid.defaults("flock.test.clock.realtimeClockTestSuite", {
        gradeNames: ["flock.test.clock.testSuite", "autoInit"],

        tests: [
            {
                name: "Initialization, default options",
                initOnly: true,
                tester: {
                    type: "flock.test.clock.realtimeManual.tester"
                }
            },
            {
                name: "Initialization, 30 Hz",
                initOnly: true,
                tester: {
                    type: "flock.test.clock.realtimeManual.tester",
                    options: {
                        expected: {
                            rate: 30
                        }
                    }
                }
            },
            {
                name: "tick() time update, 30 Hz",
                async: false,
                tester: {
                    type: "flock.test.clock.realtimeManual.tester",
                    options: {
                        expected: {
                            rate: 30
                        }
                    }
                }
            },
            {
                name: "tick() at 240 Hz",
                async: false,
                tester: {
                    type: "flock.test.clock.realtimeManual.tester",
                    options: {
                        expected: {
                            rate: 240
                        }
                    }
                }
            }
        ]
    });

    var testSuite = flock.test.clock.realtimeClockTestSuite();
    testSuite.run();

}());
