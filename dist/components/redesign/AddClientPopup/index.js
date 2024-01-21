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
const color = '#fa835f"';
// <div className={style.closeButtonContainer}>
//     <IconButton
//         size="small"
//         onClick={() => {
//             onClose();
//         }}
//     >
//         <ClearIcon />
//     </IconButton>
// </div>

const AddClientPopup = _ref => {
  let {
    onSubmit,
    onCancel,
    onClose,
    showPopup
  } = _ref;
  const [phone, setPhone] = _react.default.useState('');
  const [name, setName] = _react.default.useState('');
  const [textError, setErrorText] = _react.default.useState('');
  const [textInfo, setInfoText] = _react.default.useState('');
  return /*#__PURE__*/_react.default.createElement(_Popup.default, {
    onSubmit: () => {
      switch (true) {
        case phone.length < 6:
          setErrorText('Введите телефон');
          return;
        case name.length < 1:
          setErrorText('Введите имя клиента');
          return;
        default:
          {
            onSubmit({
              phone: phone.replace(/[^0-9.]/g, ''),
              name
            });
            return;
          }
      }
    },
    onCancel: () => {
      onCancel();
    },
    textError: textError,
    textInfo: textInfo,
    showCancel: false,
    showClear: true,
    onClear: () => {
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
    onChange: ev => {
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
var _default = exports.default = AddClientPopup;