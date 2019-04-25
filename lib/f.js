var fs = require("fs");
var stat = fs.stat;

var copydir = function(src, dst) {
  fs.readdir(src, function(err, paths) {
    if (err) {
      throw err;
    }

    paths.forEach(function(path) {
      var _src = src + "/" + path;
      var _dst = dst + "/" + path;
      var readable;
      var writable;
      stat(_src, function(err, st) {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src);
          writable = fs.createWriteStream(_dst);
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copydir);
        }
      });
    });
  });
};

var rmdir = function(callback, root) {
  return function(src) {
    fs.readdir(src, function(err, paths) {
      if (err) {
        callback();
        return;
      }

      paths.forEach(function(path, i) {
        var _src = src + "/" + path;

        stat(_src, function(err, st) {
          if (err) {
            callback();
            return;
          }

          if (st.isFile()) {
            fs.unlink(_src, function() {
              if (i === paths.length - 1) {
                fs.rmdir(src, function() {
                  if (root) {
                    callback();
                  }
                });
              }
            });
          } else if (st.isDirectory()) {
            exists(_src, null, rmdir(callback));
          }
        });
      });
    });
  };
};

var exists = function(src, dst, callback) {
  fs.exists(dst, function(exists) {
    if (exists) {
      callback(src, dst);
    } else if (dst) {
      fs.mkdir(dst, function() {
        callback(src, dst);
      });
    } else {
      callback(src);
    }
  });
};

module.exports = {
  copydir: function(from, to) {
    exists(from, to, copydir);
  },
  rmdir: function(dir, callback) {
    exists(dir, null, rmdir(callback, true));
  }
};
