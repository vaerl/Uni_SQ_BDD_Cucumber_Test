$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/demo.feature");
formatter.feature({
  "name": "Is it Friday yet?",
  "description": "  Everybody wants to know when it\u0027s Friday",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"\u003cday\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.step({
  "name": "I should be told \"\u003canswer\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "day",
        "answer"
      ]
    },
    {
      "cells": [
        "Friday",
        "TGIF"
      ]
    },
    {
      "cells": [
        "Sunday",
        "Nope"
      ]
    },
    {
      "cells": [
        "anything else!",
        "Nope"
      ]
    },
    {
      "cells": [
        "1",
        "Nope"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Friday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.today_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"TGIF\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"Sunday\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.today_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"anything else!\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.today_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Today is or is not Friday",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "today is \"1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.today_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I ask whether it\u0027s Friday yet",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.i_ask_whether_it_s_Friday_yet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be told \"Nope\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_should_be_told(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/sq_test.feature");
formatter.feature({
  "name": "SQ-Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "order drink",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Customer is \u003cage\u003e old",
  "keyword": "Given "
});
formatter.step({
  "name": "he orders a \"\u003cdrink\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "He should be not allowed to order \"\u003cdrink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "age",
        "drink"
      ]
    },
    {
      "cells": [
        "12",
        "beer"
      ]
    },
    {
      "cells": [
        "17",
        "juice"
      ]
    },
    {
      "cells": [
        "55",
        "beer"
      ]
    },
    {
      "cells": [
        "55",
        "juice"
      ]
    }
  ]
});
formatter.scenario({
  "name": "order drink",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Customer is 12 old",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.customer_is_old(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he orders a \"beer\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_orders_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He should be not allowed to order \"beer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.he_should_be_not_allowed_to_order(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "order drink",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Customer is 17 old",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.customer_is_old(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he orders a \"juice\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_orders_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He should be not allowed to order \"juice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.he_should_be_not_allowed_to_order(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "order drink",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Customer is 55 old",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.customer_is_old(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he orders a \"beer\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_orders_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He should be not allowed to order \"beer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.he_should_be_not_allowed_to_order(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "order drink",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Customer is 55 old",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.customer_is_old(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he orders a \"juice\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.he_orders_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He should be not allowed to order \"juice\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.he_should_be_not_allowed_to_order(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[beer]\u003e but was:\u003c[juice]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefs.StepDefinitions.he_should_be_not_allowed_to_order(StepDefinitions.java:47)\r\n\tat ✽.He should be not allowed to order \"juice\"(src/test/resource/sq_test.feature:7)\r\n",
  "status": "failed"
});
});