var path = require("path");
var f = require("./f");

module.exports = function(dirname) {
  var source = path.resolve("./".concat(dirname));
  var target = path.resolve("./node_modules/".concat(path.basename(dirname)));

  f.rmdir(target, function() {
    f.copydir(source, target);
    process.stdout.write("Copied ".concat(source, " to ", target, ".\r\n"));
  });
};
