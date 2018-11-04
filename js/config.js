
var BASE_ROOT;
var MODE_TEST;

var testMode = false;
var localtype = "in";

if (testMode) {
  BASE_ROOT = "http://localhost:21006";
  MODE_TEST = "";
} else {
  MODE_TEST = "";

    if (localtype == "in") {
      BASE_ROOT = "http://172.16.10.105:21006";

    } else {
      BASE_ROOT = "http://172.30.200.190:21006";
    }
}
