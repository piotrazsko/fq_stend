"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Popup = _interopRequireDefault(require("../../Popup"));

var _PhoneInput = _interopRequireDefault(require("../../PhoneInput"));

var _styleModule = _interopRequireDefault(require("./style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var color = '#fa835f"'; // <div className={style.closeButtonContainer}>
//     <IconButton
//         size="small"
//         onClick={() => {
//             onClose();
//         }}
//     >
//         <ClearIcon />
//     </IconButton>
// </div>

var AddClientPopup = function AddClientPopup(_ref) {
  var _onSubmit = _ref.onSubmit,
      _onCancel = _ref.onCancel,
      onClose = _ref.onClose,
      showPopup = _ref.showPopup;

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phone = _React$useState2[0],
      setPhone = _React$useState2[1];

  var _React$useState3 = _react.default.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      name = _React$useState4[0],
      setName = _React$useState4[1];

  var _React$useState5 = _react.default.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      textError = _React$useState6[0],
      setErrorText = _React$useState6[1];

  var _React$useState7 = _react.default.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      textInfo = _React$useState8[0],
      setInfoText = _React$useState8[1];

  return /*#__PURE__*/_react.default.createElement(_Popup.default, {
    onSubmit: function onSubmit() {
      switch (true) {
        case phone.length < 6:
          setErrorText('Введите телефон');
          return;

        case name.length < 1:
          setErrorText('Введите имя клиента');
          return;

        default:
          {
            _onSubmit({
              phone: phone.replace(/[^0-9.]/g, ''),
              name: name
            });

            return;
          }
      }
    },
    onCancel: function onCancel() {
      _onCancel();
    },
    textError: textError,
    textInfo: textInfo,
    showCancel: false,
    showClear: true,
    onClear: function onClear() {
      onClose();
      return true;
    },
    showPopup: showPopup,
    visible: true,
    title: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",
    submitButtonText: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
    childrenContainerClassName: _styleModule.default.dataContainer,
    popupBackgroundsProps: {
      onClick: onClose,
      childrenClassName: _styleModule.default.container
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.topBlock
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_PhoneInput.default, {
    label: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    value: phone,
    onChange: setPhone
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.inputName
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    fullWidth: true,
    label: "\u0418\u043C\u044F",
    required: true,
    value: name,
    onChange: function onChange(ev) {
      setName(ev.target.value);
    },
    InputLabelProps: {
      shrink: true
    }
  }))));
};

AddClientPopup.propTypes = {
  onSubmit: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func.isRequired,
  selectedSkills: _propTypes.default.array,
  skills: _propTypes.default.array,
  showPopup: _propTypes.default.func.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = AddClientPopup;
exports.default = _default;