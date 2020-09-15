const param = process.argv[2];
function getLaserSetting(param) {
  if (param == "please") return "OFF";
  else return "ON";
}
