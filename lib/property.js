// See http://stackoverflow.com/questions/3601080/how-do-i-pass-content-from-a-template-to-a-layout-in-express 

exports.create = function () {
  var value = null;
  return {
    get: function () {
      return value;
    },
    set: function (new_value) {
      value = new_value;
    }
  };
}

exports.creator = function () {
  return function () {
    return exports.create();
  };
}