"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _NativeSelect = _interopRequireDefault(require("@material-ui/core/NativeSelect"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _NoSsr = _interopRequireDefault(require("@material-ui/core/NoSsr"));

var _lodash = require("lodash");

var _country_data = _interopRequireDefault(require("../country_data"));

var _Item = _interopRequireDefault(require("./Item"));

require("../styles.scss");

require("../flags.png");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles() {
  return {
    flagButton: {
      minWidth: 30,
      padding: 0,
      height: 30
    },
    native: {
      width: 30,
      height: 30,
      padding: 8
    },
    nativeRoot: {
      padding: 0,
      '& + svg': {
        display: 'none'
      }
    },
    nativeSelect: {
      padding: 0,
      lineHeight: 0,
      height: 11
    },
    positionStart: {
      position: 'relative'
    }
  };
};

var MaterialUiPhoneNumber = /*#__PURE__*/function (_React$Component) {
  _inherits(MaterialUiPhoneNumber, _React$Component);

  var _super = _createSuper(MaterialUiPhoneNumber);

  function MaterialUiPhoneNumber(props) {
    var _this;

    _classCallCheck(this, MaterialUiPhoneNumber);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "flags", {});

    _defineProperty(_assertThisInitialized(_this), "guessSelectedCountry", (0, _lodash.memoize)(function (inputNumber, onlyCountries, defaultCountry) {
      var secondBestGuess = (0, _lodash.find)(onlyCountries, {
        iso2: defaultCountry
      }) || {};
      if ((0, _lodash.trim)(inputNumber) === '') return secondBestGuess;
      var bestGuess = (0, _lodash.reduce)(onlyCountries, function (selectedCountry, country) {
        if ((0, _lodash.startsWith)(inputNumber, country.dialCode)) {
          if (country.dialCode.length > selectedCountry.dialCode.length) {
            return country;
          }

          if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
            return country;
          }
        }

        return selectedCountry;
      }, {
        dialCode: '',
        priority: 10001
      }, _assertThisInitialized(_this));
      if (!bestGuess.name) return secondBestGuess;
      return bestGuess;
    }));

    _defineProperty(_assertThisInitialized(_this), "getProbableCandidate", (0, _lodash.memoize)(function (queryString) {
      if (!queryString || queryString.length === 0) {
        return null;
      }

      var onlyCountries = _this.state.onlyCountries; // don't include the preferred countries in search

      var probableCountries = (0, _lodash.filter)(onlyCountries, function (country) {
        return (0, _lodash.startsWith)(country.name.toLowerCase(), queryString.toLowerCase());
      }, _assertThisInitialized(_this));
      return probableCountries[0];
    }));

    _defineProperty(_assertThisInitialized(_this), "getOnlyCountries", function (onlyCountriesArray, filteredCountries) {
      if (onlyCountriesArray.length === 0) return filteredCountries;
      return filteredCountries.filter(function (country) {
        return onlyCountriesArray.some(function (element) {
          return element === country.iso2;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "excludeCountries", function (selectedCountries, excludedCountries) {
      if (excludedCountries.length === 0) {
        return selectedCountries;
      }

      return (0, _lodash.filter)(selectedCountries, function (selCountry) {
        return !(0, _lodash.includes)(excludedCountries, selCountry.iso2);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterRegions", function (regions, filteredCountries) {
      if (typeof regions === 'string') {
        var region = regions;
        return filteredCountries.filter(function (country) {
          return country.regions.some(function (element) {
            return element === region;
          });
        });
      }

      return filteredCountries.filter(function (country) {
        var matches = regions.map(function (region) {
          return country.regions.some(function (element) {
            return element === region;
          });
        });
        return matches.some(function (el) {
          return el;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAreaCodes", function (filteredCountries) {
      return filteredCountries.filter(function (country) {
        return country.isAreaCode !== true;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateDefaultCountry", function (country) {
      var onlyCountries = _this.state.onlyCountries;
      var disableCountryCode = _this.props.disableCountryCode;
      var newSelectedCountry = (0, _lodash.find)(onlyCountries, {
        iso2: country
      });

      _this.setState({
        defaultCountry: country,
        selectedCountry: newSelectedCountry,
        formattedNumber: disableCountryCode ? '' : "+".concat(newSelectedCountry.dialCode)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "scrollTo", function (country) {
      if (!country) {
        return;
      }

      var container = _this.dropdownContainerRef;

      if (!container || !document.body) {
        return;
      }

      container.scrollTop = country.offsetTop;
    });

    _defineProperty(_assertThisInitialized(_this), "formatNumber", function (text, patternArg) {
      var _this$props = _this.props,
          disableCountryCode = _this$props.disableCountryCode,
          enableLongNumbers = _this$props.enableLongNumbers,
          autoFormat = _this$props.autoFormat;
      var pattern;

      if (disableCountryCode && patternArg) {
        pattern = patternArg.split(' ');
        pattern.shift();
        pattern = pattern.join(' ');
      } else {
        pattern = patternArg;
      }

      if (!text || text.length === 0) {
        return disableCountryCode ? '' : '+';
      } // for all strings with length less than 3, just return it (1, 2 etc.)
      // also return the same text if the selected country has no fixed format


      if (text && text.length < 2 || !pattern || !autoFormat) {
        return disableCountryCode ? text : "+".concat(text);
      }

      var formattedObject = (0, _lodash.reduce)(pattern, function (acc, character) {
        if (acc.remainingText.length === 0) {
          return acc;
        }

        if (character !== '.') {
          return {
            formattedText: acc.formattedText + character,
            remainingText: acc.remainingText
          };
        }

        return {
          formattedText: acc.formattedText + (0, _lodash.head)(acc.remainingText),
          remainingText: (0, _lodash.tail)(acc.remainingText)
        };
      }, {
        formattedText: '',
        remainingText: text.split('')
      });
      var formattedNumber;

      if (enableLongNumbers) {
        formattedNumber = formattedObject.formattedText + formattedObject.remainingText.join('');
      } else {
        formattedNumber = formattedObject.formattedText;
      } // Always close brackets


      if (formattedNumber.includes('(') && !formattedNumber.includes(')')) formattedNumber += ')';
      return formattedNumber;
    });

    _defineProperty(_assertThisInitialized(_this), "cursorToEnd", function () {
      var isModernBrowser = _this.props.isModernBrowser;
      var input = _this.inputRef;
      input.focus();

      if (isModernBrowser) {
        var len = input.value.length;
        input.setSelectionRange(len, len);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getElement", function (index) {
      return _this.flags["flag_no_".concat(index)];
    });

    _defineProperty(_assertThisInitialized(_this), "getCountryData", function () {
      var selectedCountry = _this.state.selectedCountry;
      if (!selectedCountry) return {};
      return {
        name: selectedCountry.name || '',
        dialCode: selectedCountry.dialCode || '',
        countryCode: selectedCountry.iso2 || ''
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      var _this$state = _this.state,
          newSelectedCountry = _this$state.selectedCountry,
          freezeSelection = _this$state.freezeSelection;
      var _this$state2 = _this.state,
          selectedCountry = _this$state2.selectedCountry,
          oldFormattedText = _this$state2.formattedNumber,
          onlyCountries = _this$state2.onlyCountries,
          defaultCountry = _this$state2.defaultCountry;
      var _this$props2 = _this.props,
          disableCountryCode = _this$props2.disableCountryCode,
          countryCodeEditable = _this$props2.countryCodeEditable,
          isModernBrowser = _this$props2.isModernBrowser,
          onChange = _this$props2.onChange;
      var formattedNumber = disableCountryCode ? '' : '+';

      if (!countryCodeEditable) {
        var updatedInput = "+".concat(newSelectedCountry.dialCode);

        if (e.target.value.length < updatedInput.length) {
          return;
        }
      } // Does not exceed 15 digit phone number limit


      if (e.target.value.replace(/\D/g, '').length > 15) {
        return;
      } // if the input is the same as before, must be some special key like enter etc.


      if (e.target.value === oldFormattedText) {
        return;
      } // ie hack


      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      if (e.target.value.length > 0) {
        // before entering the number in new format, lets check if the dial code now matches some other country
        var inputNumber = e.target.value.replace(/\D/g, ''); // we don't need to send the whole number to guess the country... only the first 6 characters are enough
        // the guess country function can then use memoization much more effectively since the set of input it
        // gets has drastically reduced

        if (!freezeSelection || selectedCountry.dialCode.length > inputNumber.length) {
          newSelectedCountry = _this.guessSelectedCountry(inputNumber.substring(0, 6), onlyCountries, defaultCountry);
          freezeSelection = false;
        } // let us remove all non numerals from the input


        formattedNumber = _this.formatNumber(inputNumber, newSelectedCountry.format);
      }

      var caretPosition = e.target.selectionStart;
      var diff = formattedNumber.length - oldFormattedText.length;

      _this.setState({
        formattedNumber: formattedNumber,
        freezeSelection: freezeSelection,
        selectedCountry: newSelectedCountry.dialCode ? newSelectedCountry : selectedCountry
      }, function () {
        if (isModernBrowser) {
          if (diff > 0) {
            caretPosition -= diff;
          }

          var lastChar = formattedNumber.charAt(formattedNumber.length - 1);

          if (lastChar === ')') {
            _this.inputRef.setSelectionRange(formattedNumber.length - 1, formattedNumber.length - 1);
          } else if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
            _this.inputRef.setSelectionRange(caretPosition, caretPosition);
          }
        }

        if (onChange) {
          onChange(formattedNumber, _this.getCountryData());
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRefInput", function (ref) {
      var _this$props3 = _this.props,
          inputRef = _this$props3.inputRef,
          InputProps = _this$props3.InputProps;
      _this.inputRef = ref;
      var refProp;

      if (inputRef) {
        refProp = inputRef;
      } else if (InputProps && InputProps.ref) {
        refProp = InputProps.ref;
      }

      if (refProp) {
        if (typeof refProp === 'function') {
          refProp(ref);
        } else {
          refProp.current = ref;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputClick", function (e) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e, _this.getCountryData());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFlagItemClick", function (country) {
      var _this$state3 = _this.state,
          formattedNumber = _this$state3.formattedNumber,
          selectedCountry = _this$state3.selectedCountry,
          onlyCountries = _this$state3.onlyCountries;
      var onChange = _this.props.onChange;
      var currentSelectedCountry = selectedCountry;
      var nextSelectedCountry = (0, _lodash.isString)(country) ? (0, _lodash.find)(onlyCountries, function (countryItem) {
        return countryItem.iso2 === country;
      }) : (0, _lodash.find)(onlyCountries, country);
      var unformattedNumber = formattedNumber.replace(' ', '').replace('(', '').replace(')', '').replace('-', '');
      var newNumber = unformattedNumber.length > 1 ? unformattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode) : nextSelectedCountry.dialCode;

      var newFormattedNumber = _this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

      _this.setState({
        anchorEl: null,
        selectedCountry: nextSelectedCountry,
        freezeSelection: true,
        formattedNumber: newFormattedNumber
      }, function () {
        _this.cursorToEnd();

        if (onChange) {
          onChange(newFormattedNumber, _this.getCountryData());
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (e) {
      var selectedCountry = _this.state.selectedCountry;
      var _this$props4 = _this.props,
          disableCountryCode = _this$props4.disableCountryCode,
          onFocus = _this$props4.onFocus; // if the input is blank, insert dial code of the selected country

      if (_this.inputRef) {
        if (_this.inputRef.value === '+' && selectedCountry && !disableCountryCode) {
          _this.setState({
            formattedNumber: "+".concat(selectedCountry.dialCode)
          }, function () {
            return setTimeout(_this.cursorToEnd, 10);
          });
        }
      }

      _this.setState({
        placeholder: ''
      });

      if (onFocus) {
        onFocus(e, _this.getCountryData());
      }

      setTimeout(_this.cursorToEnd, 10);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (e) {
      var _this$props5 = _this.props,
          placeholder = _this$props5.placeholder,
          onBlur = _this$props5.onBlur;

      if (!e.target.value) {
        _this.setState({
          placeholder: placeholder
        });
      }

      if (onBlur) {
        onBlur(e, _this.getCountryData());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHighlightCountryIndex", function (direction) {
      var _this$state4 = _this.state,
          oldHighlightCountryIndex = _this$state4.highlightCountryIndex,
          onlyCountries = _this$state4.onlyCountries,
          preferredCountries = _this$state4.preferredCountries; // had to write own function because underscore does not have findIndex. lodash has it

      var highlightCountryIndex = oldHighlightCountryIndex + direction;

      if (highlightCountryIndex < 0 || highlightCountryIndex >= onlyCountries.length + preferredCountries.length) {
        return highlightCountryIndex - direction;
      }

      return highlightCountryIndex;
    });

    _defineProperty(_assertThisInitialized(_this), "searchCountry", function () {
      var _this$state5 = _this.state,
          queryString = _this$state5.queryString,
          onlyCountries = _this$state5.onlyCountries,
          preferredCountries = _this$state5.preferredCountries;
      var probableCandidate = _this.getProbableCandidate(queryString) || onlyCountries[0];
      var probableCandidateIndex = (0, _lodash.findIndex)(onlyCountries, probableCandidate) + preferredCountries.length;

      _this.scrollTo(_this.getElement(probableCandidateIndex), true);

      _this.setState({
        queryString: '',
        highlightCountryIndex: probableCandidateIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      var _this$state6 = _this.state,
          anchorEl = _this$state6.anchorEl,
          highlightCountryIndex = _this$state6.highlightCountryIndex,
          preferredCountries = _this$state6.preferredCountries,
          onlyCountries = _this$state6.onlyCountries,
          queryString = _this$state6.queryString,
          debouncedQueryStingSearcher = _this$state6.debouncedQueryStingSearcher;
      var _this$props6 = _this.props,
          keys = _this$props6.keys,
          disabled = _this$props6.disabled;
      if (!anchorEl || disabled) return; // ie hack

      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      var moveHighlight = function moveHighlight(direction) {
        _this.setState({
          highlightCountryIndex: _this.getHighlightCountryIndex(direction)
        }, function () {
          _this.scrollTo(_this.getElement(highlightCountryIndex + preferredCountries.length), true);
        });
      };

      switch (e.which) {
        case keys.DOWN:
          moveHighlight(1);
          break;

        case keys.UP:
          moveHighlight(-1);
          break;

        case keys.ENTER:
          _this.handleFlagItemClick(onlyCountries[highlightCountryIndex], e);

          break;

        case keys.ESC:
          _this.setState({
            anchorEl: null
          }, _this.cursorToEnd);

          break;

        default:
          if (e.which >= keys.A && e.which <= keys.Z || e.which === keys.SPACE) {
            _this.setState({
              queryString: queryString + String.fromCharCode(e.which)
            }, debouncedQueryStingSearcher);
          }

      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputKeyDown", function (e) {
      var _this$props7 = _this.props,
          keys = _this$props7.keys,
          onEnterKeyPress = _this$props7.onEnterKeyPress,
          onKeyDown = _this$props7.onKeyDown;

      if (e.which === keys.ENTER && onEnterKeyPress) {
        onEnterKeyPress(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkIfValid", function () {
      var formattedNumber = _this.state.formattedNumber;
      var isValid = _this.props.isValid;
      return isValid(formattedNumber.replace(/\D/g, ''));
    });

    _defineProperty(_assertThisInitialized(_this), "updateFormattedNumber", function (number) {
      var _this$state7 = _this.state,
          onlyCountries = _this$state7.onlyCountries,
          defaultCountry = _this$state7.defaultCountry;
      var disableCountryCode = _this.props.disableCountryCode;
      var countryGuess;
      var inputNumber = number;
      var formattedNumber = number; // if inputNumber does not start with '+', then use default country's dialing prefix,
      // otherwise use logic for finding country based on country prefix.

      if (!inputNumber.startsWith('+')) {
        countryGuess = (0, _lodash.find)(onlyCountries, {
          iso2: defaultCountry
        });
        var dialCode = countryGuess && !(0, _lodash.startsWith)(inputNumber.replace(/\D/g, ''), countryGuess.dialCode) ? countryGuess.dialCode : '';
        formattedNumber = _this.formatNumber((disableCountryCode ? '' : dialCode) + inputNumber.replace(/\D/g, ''), countryGuess ? countryGuess.format : undefined);
      } else {
        inputNumber = inputNumber.replace(/\D/g, '');
        countryGuess = _this.guessSelectedCountry(inputNumber.substring(0, 6), onlyCountries, defaultCountry);
        formattedNumber = _this.formatNumber(inputNumber, countryGuess.format);
      }

      _this.setState({
        selectedCountry: countryGuess,
        formattedNumber: formattedNumber
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getDropdownProps", function () {
      var _this$state8 = _this.state,
          selectedCountry = _this$state8.selectedCountry,
          anchorEl = _this$state8.anchorEl,
          preferredCountries = _this$state8.preferredCountries,
          onlyCountries = _this$state8.onlyCountries;
      var _this$props8 = _this.props,
          classes = _this$props8.classes,
          dropdownClass = _this$props8.dropdownClass,
          localization = _this$props8.localization,
          disableDropdown = _this$props8.disableDropdown,
          native = _this$props8.native;
      var inputFlagClasses = "flag ".concat(selectedCountry.iso2);

      var isSelected = function isSelected(country) {
        return Boolean(selectedCountry && selectedCountry.dialCode === country.dialCode);
      };

      var dropdownProps = disableDropdown ? {} : {
        startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
          className: classes.positionStart,
          position: "start"
        }, native ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_NativeSelect.default, {
          id: "country-menu",
          open: Boolean(anchorEl),
          onClose: function onClose() {
            return _this.setState({
              anchorEl: null
            });
          },
          className: classes.native,
          classes: {
            root: (0, _clsx.default)(classes.nativeRoot, 'native', inputFlagClasses),
            select: classes.nativeSelect
          },
          onChange: function onChange(e) {
            return _this.handleFlagItemClick(e.target.value);
          },
          disableUnderline: true
        }, !!preferredCountries.length && (0, _lodash.map)(preferredCountries, function (country, index) {
          return /*#__PURE__*/_react.default.createElement(_Item.default, {
            key: "preferred_".concat(country.iso2, "_").concat(index),
            itemRef: function itemRef(node) {
              _this.flags["flag_no_".concat(index)] = node;
            },
            name: country.name,
            iso2: country.iso2,
            dialCode: country.dialCode,
            localization: localization && localization[country.name],
            native: true
          });
        }), (0, _lodash.map)(onlyCountries, function (country, index) {
          return /*#__PURE__*/_react.default.createElement(_Item.default, {
            key: "preferred_".concat(country.iso2, "_").concat(index),
            itemRef: function itemRef(node) {
              _this.flags["flag_no_".concat(index)] = node;
            },
            name: country.name,
            iso2: country.iso2,
            dialCode: country.dialCode,
            localization: localization && localization[country.name],
            native: true
          });
        }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
          className: classes.flagButton,
          "aria-owns": anchorEl ? 'country-menu' : null,
          "aria-label": "Select country",
          onClick: function onClick(e) {
            return _this.setState({
              anchorEl: e.currentTarget
            });
          },
          "aria-haspopup": true
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: inputFlagClasses
        })), /*#__PURE__*/_react.default.createElement(_Menu.default, {
          className: dropdownClass,
          id: "country-menu",
          anchorEl: anchorEl,
          open: Boolean(anchorEl),
          onClose: function onClose() {
            return _this.setState({
              anchorEl: null
            });
          }
        }, !!preferredCountries.length && (0, _lodash.map)(preferredCountries, function (country, index) {
          return /*#__PURE__*/_react.default.createElement(_Item.default, {
            key: "preferred_".concat(country.iso2, "_").concat(index),
            itemRef: function itemRef(node) {
              _this.flags["flag_no_".concat(index)] = node;
            },
            selected: isSelected(country),
            onClick: function onClick() {
              return _this.handleFlagItemClick(country);
            },
            name: country.name,
            iso2: country.iso2,
            dialCode: country.dialCode,
            localization: localization && localization[country.name]
          });
        }), !!preferredCountries.length && /*#__PURE__*/_react.default.createElement(_Divider.default, null), (0, _lodash.map)(onlyCountries, function (country, index) {
          return /*#__PURE__*/_react.default.createElement(_Item.default, {
            key: "preferred_".concat(country.iso2, "_").concat(index),
            itemRef: function itemRef(node) {
              _this.flags["flag_no_".concat(index)] = node;
            },
            selected: isSelected(country),
            onClick: function onClick() {
              return _this.handleFlagItemClick(country);
            },
            name: country.name,
            iso2: country.iso2,
            dialCode: country.dialCode,
            localization: localization && localization[country.name]
          });
        }))))
      };
      return dropdownProps;
    });

    var _filteredCountries = _country_data.default.allCountries;
    if (props.disableAreaCodes) _filteredCountries = _this.deleteAreaCodes(_filteredCountries);
    if (props.regions) _filteredCountries = _this.filterRegions(props.regions, _filteredCountries);

    var _onlyCountries = _this.excludeCountries(_this.getOnlyCountries(props.onlyCountries, _filteredCountries), props.excludeCountries);

    var _preferredCountries = (0, _lodash.filter)(_filteredCountries, function (country) {
      return (0, _lodash.some)(props.preferredCountries, function (preferredCountry) {
        return preferredCountry === country.iso2;
      });
    });

    var _inputNumber = props.value || '';

    var _countryGuess;

    if (_inputNumber.length > 1) {
      // Country detect by value field
      _countryGuess = _this.guessSelectedCountry(_inputNumber.replace(/\D/g, '').substring(0, 6), _onlyCountries, props.defaultCountry) || 0;
    } else if (props.defaultCountry) {
      // Default country
      _countryGuess = (0, _lodash.find)(_onlyCountries, {
        iso2: props.defaultCountry
      }) || 0;
    } else {
      // Empty params
      _countryGuess = 0;
    }

    var countryGuessIndex = (0, _lodash.findIndex)(_this.allCountries, _countryGuess);

    var _dialCode = _inputNumber.length < 2 && _countryGuess && !(0, _lodash.startsWith)(_inputNumber.replace(/\D/g, ''), _countryGuess.dialCode) ? _countryGuess.dialCode : '';

    var _formattedNumber = _inputNumber === '' && _countryGuess === 0 ? '' : _this.formatNumber((props.disableCountryCode ? '' : _dialCode) + _inputNumber.replace(/\D/g, ''), _countryGuess.name ? _countryGuess.format : undefined);

    _this.state = {
      formattedNumber: _formattedNumber,
      placeholder: props.placeholder,
      onlyCountries: _onlyCountries,
      preferredCountries: _preferredCountries,
      defaultCountry: props.defaultCountry,
      selectedCountry: _countryGuess,
      highlightCountryIndex: countryGuessIndex,
      queryString: '',
      freezeSelection: false,
      debouncedQueryStingSearcher: (0, _lodash.debounce)(_this.searchCountry, 100),
      anchorEl: null
    };
    return _this;
  }

  _createClass(MaterialUiPhoneNumber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (document.addEventListener) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevValue = _ref.value;
      var _this$state9 = this.state,
          prevDefaultCountry = _this$state9.defaultCountry,
          formattedNumber = _this$state9.formattedNumber;
      var _this$props9 = this.props,
          defaultCountry = _this$props9.defaultCountry,
          value = _this$props9.value;

      if (defaultCountry && defaultCountry !== prevDefaultCountry) {
        this.updateDefaultCountry(defaultCountry);
      }

      if (typeof value === 'string' && value !== prevValue && value !== formattedNumber) {
        this.updateFormattedNumber(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (document.removeEventListener) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state10 = this.state,
          formattedNumber = _this$state10.formattedNumber,
          statePlaceholder = _this$state10.placeholder;

      var _this$props10 = this.props,
          native = _this$props10.native,
          defaultCountry = _this$props10.defaultCountry,
          excludeCountries = _this$props10.excludeCountries,
          onlyCountries = _this$props10.onlyCountries,
          preferredCountries = _this$props10.preferredCountries,
          dropdownClass = _this$props10.dropdownClass,
          autoFormat = _this$props10.autoFormat,
          disableAreaCodes = _this$props10.disableAreaCodes,
          isValid = _this$props10.isValid,
          disableCountryCode = _this$props10.disableCountryCode,
          disableDropdown = _this$props10.disableDropdown,
          enableLongNumbers = _this$props10.enableLongNumbers,
          countryCodeEditable = _this$props10.countryCodeEditable,
          onEnterKeyPress = _this$props10.onEnterKeyPress,
          isModernBrowser = _this$props10.isModernBrowser,
          classes = _this$props10.classes,
          keys = _this$props10.keys,
          localization = _this$props10.localization,
          placeholder = _this$props10.placeholder,
          regions = _this$props10.regions,
          onChange = _this$props10.onChange,
          value = _this$props10.value,
          inputClass = _this$props10.inputClass,
          error = _this$props10.error,
          InputProps = _this$props10.InputProps,
          restProps = _objectWithoutProperties(_this$props10, ["native", "defaultCountry", "excludeCountries", "onlyCountries", "preferredCountries", "dropdownClass", "autoFormat", "disableAreaCodes", "isValid", "disableCountryCode", "disableDropdown", "enableLongNumbers", "countryCodeEditable", "onEnterKeyPress", "isModernBrowser", "classes", "keys", "localization", "placeholder", "regions", "onChange", "value", "inputClass", "error", "InputProps"]);

      var dropdownProps = this.getDropdownProps();
      return /*#__PURE__*/_react.default.createElement(_NoSsr.default, {
        defer: true
      }, /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({
        placeholder: statePlaceholder,
        value: formattedNumber,
        className: inputClass,
        inputRef: this.handleRefInput,
        error: error || !this.checkIfValid(),
        onChange: this.handleInput,
        onClick: this.handleInputClick,
        onFocus: this.handleInputFocus,
        onBlur: this.handleInputBlur,
        onKeyDown: this.handleInputKeyDown,
        type: "tel",
        InputProps: _objectSpread(_objectSpread({}, dropdownProps), InputProps)
      }, restProps)));
    }
  }]);

  return MaterialUiPhoneNumber;
}(_react.default.Component);

MaterialUiPhoneNumber.propTypes = {
  classes: _propTypes.default.object,
  excludeCountries: _propTypes.default.arrayOf(_propTypes.default.string),
  onlyCountries: _propTypes.default.arrayOf(_propTypes.default.string),
  preferredCountries: _propTypes.default.arrayOf(_propTypes.default.string),
  defaultCountry: _propTypes.default.string,
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  variant: _propTypes.default.string,
  native: _propTypes.default.bool,
  inputClass: _propTypes.default.string,
  dropdownClass: _propTypes.default.string,
  InputProps: _propTypes.default.object,
  inputProps: _propTypes.default.object,
  inputRef: _propTypes.default.func,
  autoFormat: _propTypes.default.bool,
  disableAreaCodes: _propTypes.default.bool,
  disableCountryCode: _propTypes.default.bool,
  disableDropdown: _propTypes.default.bool,
  enableLongNumbers: _propTypes.default.bool,
  countryCodeEditable: _propTypes.default.bool,
  regions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  localization: _propTypes.default.object,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onKeyDown: _propTypes.default.func,
  isValid: _propTypes.default.func,
  isModernBrowser: _propTypes.default.func,
  onEnterKeyPress: _propTypes.default.func,
  keys: _propTypes.default.object
};
MaterialUiPhoneNumber.defaultProps = {
  excludeCountries: [],
  onlyCountries: [],
  preferredCountries: [],
  defaultCountry: '',
  placeholder: '+1 (702) 123-4567',
  disabled: false,
  error: false,
  variant: 'standard',
  native: false,
  inputClass: '',
  dropdownClass: '',
  autoFormat: true,
  disableAreaCodes: false,
  isValid: function isValid(inputNumber) {
    return (0, _lodash.some)(_country_data.default.allCountries, function (country) {
      return (0, _lodash.startsWith)(inputNumber, country.dialCode) || (0, _lodash.startsWith)(country.dialCode, inputNumber);
    });
  },
  disableCountryCode: false,
  disableDropdown: false,
  enableLongNumbers: false,
  countryCodeEditable: true,
  regions: '',
  localization: {},
  onEnterKeyPress: function onEnterKeyPress() {},
  onChange: function onChange() {},
  isModernBrowser: function isModernBrowser() {
    return document.createElement ? Boolean(document.createElement('input').setSelectionRange) : false;
  },
  keys: {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
  }
};
MaterialUiPhoneNumber.displayName = 'MuiPhoneNumber';

var _default = (0, _withStyles.default)(styles)(MaterialUiPhoneNumber);

exports.default = _default;