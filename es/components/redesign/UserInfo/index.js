"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

var _PinDropOutlined = _interopRequireDefault(require("@material-ui/icons/PinDropOutlined"));

var _calendar = require("../../../helpers/calendar");

var _skills = require("../../../helpers/skills");

var _moment = _interopRequireDefault(require("moment"));

var _styles = require("@material-ui/core/styles");

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Rating = _interopRequireDefault(require("../Rating"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = '#fa835f';

var UserInfo = function UserInfo(_ref) {
  var data = _ref.data,
      onClick = _ref.onClick,
      _ref$isMaster = _ref.isMaster,
      isMaster = _ref$isMaster === void 0 ? false : _ref$isMaster,
      classes = _ref.classes;
  var first_name = data.first_name,
      last_name = data.last_name,
      rating = data.rating,
      master_feedbacks_count = data.master_feedbacks_count,
      avatar = data.avatar,
      id = data.id,
      feedback_count = data.feedback_count,
      city = data.city,
      description = data.description,
      closest_booking_time = data.closest_booking_time;
  var isAdmin = false;
  return !!data && /*#__PURE__*/_react.default.createElement("div", {
    onClick: onClick,
    className: [_styleModule.default.item, classes.root].join(' '),
    key: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.titleContainer
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, {
    alt: "",
    src: avatar || ''
  }, "".concat((0, _get.default)(first_name, '[0]', '')).concat((0, _get.default)(last_name, '[0]', ''))), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.additionalInfo, classes.dataContainer].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.title, classes.title].join(' ')
  }, "".concat(first_name || '', " ").concat(last_name || '')), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.rating, classes.rating].join(' ')
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    data: {
      user_rating: rating,
      master_feedbacks_count: feedback_count || master_feedbacks_count
    }
  }), /*#__PURE__*/_react.default.createElement(_PinDropOutlined.default, {
    className: _styleModule.default.pinIcon,
    htmlColor: "#000000 "
  }), /*#__PURE__*/_react.default.createElement("p", null, city || '')), isAdmin && /*#__PURE__*/_react.default.createElement("span", null, "Admin"))), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.descriptionContainer, classes.descriptionContainer].join(' ')
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: description ? _styleModule.default.description : _styleModule.default.NoDescription
  }, (0, _skills.stringLengthFix)(description) || 'Нет описания')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "\u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"), /*#__PURE__*/_react.default.createElement("div", {
    className: [_styleModule.default.bookingTimeContainer, classes.bookingTimeContainer].join(' ')
  }, closest_booking_time.map(function (date, index) {
    var dayNow = String((0, _calendar.NOW_DATE)()) === date.split(' ')[0];
    return /*#__PURE__*/_react.default.createElement("div", {
      className: [_styleModule.default.bookingTime, classes.bookingTime].join(' '),
      key: index
    }, /*#__PURE__*/_react.default.createElement("p", null, dayNow ? 'Сегодня' : date.split('-')[2].split(' ')[0], ' ', !dayNow && _calendar.MONTHS_SHORT[Number(date.split('-')[1]) - 1], ' ', date.split('-')[2].split(' ')[1].slice(0, 5)));
  }))));
};

UserInfo.defaultProps = {
  data: {},
  onClick: function onClick() {},
  classes: {
    root: '',
    rating: '',
    title: '',
    dataContainer: ''
  }
};
UserInfo.propTypes = {
  onClick: _propTypes.default.func,
  isMaster: _propTypes.default.bool,
  classes: _propTypes.default.shape({
    root: _propTypes.default.string,
    title: _propTypes.default.string,
    rating: _propTypes.default.string,
    dataContainer: _propTypes.default.string
  })
};
var _default = UserInfo;
exports.default = _default;
{
  /*!isMaster && (
     <div className={style.items}>
         <div>
             <span className={style.name}>Визиты:</span>
             <span className={style.value}>{`${user_events_count || 0}`}</span>
         </div>
         {last_event_date && (
             <div>
                 <span className={style.name}>Последний:</span>
                 <span className={style.value}>
                     {last_event_date
                         ? ` ${moment(last_event_date).format('DD MMMM YYYY')}`
                         : ' Нет визитов'}
                 </span>
             </div>
         )}
     </div>
  )*/
}