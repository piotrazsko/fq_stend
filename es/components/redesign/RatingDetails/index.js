"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Rating = _interopRequireDefault(require("@material-ui/lab/Rating"));

var _Star = _interopRequireDefault(require("@material-ui/icons/Star"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _styles = require("@material-ui/core/styles");

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BorderLinearProgress = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      height: 4,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FFBB2F'
    }
  };
})(_LinearProgress.default);

var RatingDetails = function RatingDetails(_ref) {
  var data = _ref.data;
  var count = data.count,
      _data$ratings = data.ratings,
      rating = _data$ratings === void 0 ? [] : _data$ratings;
  var ratingValue = Math.ceil((rating[5] * 5 + rating[4] * 4 + rating[3] * 3 + rating[2] * 2 + rating[1] * 1) * 10 / count) / 10;
  return !!rating && /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.topLine
  }, "".concat(isNaN(ratingValue) ? 5 : ratingValue, " / 5"), /*#__PURE__*/_react.default.createElement(_Rating.default, {
    className: _styleModule.default.rating,
    value: isNaN(ratingValue) ? 5 : ratingValue,
    size: "small"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.feedbacksCount
  }, count, " \u043E\u0442\u0437\u044B\u0432/-\u043E\u0432")), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.lines
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.line
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.mark
  }, "5"), /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.icon,
    htmlColor: "#FFBB2F"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.yellow
  }, /*#__PURE__*/_react.default.createElement(BorderLinearProgress, {
    variant: "determinate",
    value: rating[5] / count * 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.count
  }, rating[5])), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.line
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.mark
  }, "4"), /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.icon,
    htmlColor: "#FFBB2F"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.yellow
  }, /*#__PURE__*/_react.default.createElement(BorderLinearProgress, {
    variant: "determinate",
    value: rating[4] / count * 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.count
  }, rating[4])), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.line
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.mark
  }, "3"), /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.icon,
    htmlColor: "#FFBB2F"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.yellow
  }, /*#__PURE__*/_react.default.createElement(BorderLinearProgress, {
    variant: "determinate",
    value: rating[3] / count * 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.count
  }, rating[3])), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.line
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.mark
  }, "2"), /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.icon,
    htmlColor: "#FFBB2F"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.yellow
  }, /*#__PURE__*/_react.default.createElement(BorderLinearProgress, {
    variant: "determinate",
    value: rating[2] / count * 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.count
  }, rating[2])), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.line
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.mark
  }, "1"), /*#__PURE__*/_react.default.createElement(_Star.default, {
    className: _styleModule.default.icon,
    htmlColor: "#FFBB2F"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.yellow
  }, /*#__PURE__*/_react.default.createElement(BorderLinearProgress, {
    variant: "determinate",
    value: rating[1] / count * 100
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: _styleModule.default.count
  }, rating[1]))));
};

RatingDetails.propTypes = {
  data: _propTypes.default.shape({
    rating: _propTypes.default.array,
    count: _propTypes.default.number
  })
};
var _default = RatingDetails;
exports.default = _default;