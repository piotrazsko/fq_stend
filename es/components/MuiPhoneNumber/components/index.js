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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const styles = () => ({
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
});
class MaterialUiPhoneNumber extends _react.default.Component {
  constructor(props) {
    super(props);
    _defineProperty(this, "flags", {});
    _defineProperty(this, "guessSelectedCountry", (0, _lodash.memoize)((inputNumber, onlyCountries, defaultCountry) => {
      const secondBestGuess = (0, _lodash.find)(onlyCountries, {
        iso2: defaultCountry
      }) || {};
      if ((0, _lodash.trim)(inputNumber) === '') return secondBestGuess;
      const bestGuess = (0, _lodash.reduce)(onlyCountries, (selectedCountry, country) => {
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
      }, this);
      if (!bestGuess.name) return secondBestGuess;
      return bestGuess;
    }));
    _defineProperty(this, "getProbableCandidate", (0, _lodash.memoize)(queryString => {
      if (!queryString || queryString.length === 0) {
        return null;
      }
      const {
        onlyCountries
      } = this.state;

      // don't include the preferred countries in search
      const probableCountries = (0, _lodash.filter)(onlyCountries, country => (0, _lodash.startsWith)(country.name.toLowerCase(), queryString.toLowerCase()), this);
      return probableCountries[0];
    }));
    _defineProperty(this, "getOnlyCountries", (onlyCountriesArray, filteredCountries) => {
      if (onlyCountriesArray.length === 0) return filteredCountries;
      return filteredCountries.filter(country => onlyCountriesArray.some(element => element === country.iso2));
    });
    _defineProperty(this, "excludeCountries", (selectedCountries, excludedCountries) => {
      if (excludedCountries.length === 0) {
        return selectedCountries;
      }
      return (0, _lodash.filter)(selectedCountries, selCountry => !(0, _lodash.includes)(excludedCountries, selCountry.iso2));
    });
    _defineProperty(this, "filterRegions", (regions, filteredCountries) => {
      if (typeof regions === 'string') {
        const region = regions;
        return filteredCountries.filter(country => country.regions.some(element => element === region));
      }
      return filteredCountries.filter(country => {
        const matches = regions.map(region => country.regions.some(element => element === region));
        return matches.some(el => el);
      });
    });
    // Countries array methods
    _defineProperty(this, "deleteAreaCodes", filteredCountries => filteredCountries.filter(country => country.isAreaCode !== true));
    // Hooks for updated props
    _defineProperty(this, "updateDefaultCountry", country => {
      const {
        onlyCountries
      } = this.state;
      const {
        disableCountryCode
      } = this.props;
      const newSelectedCountry = (0, _lodash.find)(onlyCountries, {
        iso2: country
      });
      this.setState({
        defaultCountry: country,
        selectedCountry: newSelectedCountry,
        formattedNumber: disableCountryCode ? '' : "+".concat(newSelectedCountry.dialCode)
      });
    });
    // View methods
    _defineProperty(this, "scrollTo", country => {
      if (!country) {
        return;
      }
      const container = this.dropdownContainerRef;
      if (!container || !document.body) {
        return;
      }
      container.scrollTop = country.offsetTop;
    });
    _defineProperty(this, "formatNumber", (text, patternArg) => {
      const {
        disableCountryCode,
        enableLongNumbers,
        autoFormat
      } = this.props;
      let pattern;
      if (disableCountryCode && patternArg) {
        pattern = patternArg.split(' ');
        pattern.shift();
        pattern = pattern.join(' ');
      } else {
        pattern = patternArg;
      }
      if (!text || text.length === 0) {
        return disableCountryCode ? '' : '+';
      }

      // for all strings with length less than 3, just return it (1, 2 etc.)
      // also return the same text if the selected country has no fixed format
      if (text && text.length < 2 || !pattern || !autoFormat) {
        return disableCountryCode ? text : "+".concat(text);
      }
      const formattedObject = (0, _lodash.reduce)(pattern, (acc, character) => {
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
      let formattedNumber;
      if (enableLongNumbers) {
        formattedNumber = formattedObject.formattedText + formattedObject.remainingText.join('');
      } else {
        formattedNumber = formattedObject.formattedText;
      }

      // Always close brackets
      if (formattedNumber.includes('(') && !formattedNumber.includes(')')) formattedNumber += ')';
      return formattedNumber;
    });
    // Put the cursor to the end of the input (usually after a focus event)
    _defineProperty(this, "cursorToEnd", () => {
      const {
        isModernBrowser
      } = this.props;
      const input = this.inputRef;
      input.focus();
      if (isModernBrowser) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    });
    _defineProperty(this, "getElement", index => this.flags["flag_no_".concat(index)]);
    // return country data from state
    _defineProperty(this, "getCountryData", () => {
      const {
        selectedCountry
      } = this.state;
      if (!selectedCountry) return {};
      return {
        name: selectedCountry.name || '',
        dialCode: selectedCountry.dialCode || '',
        countryCode: selectedCountry.iso2 || ''
      };
    });
    _defineProperty(this, "handleInput", e => {
      let {
        selectedCountry: newSelectedCountry,
        freezeSelection
      } = this.state;
      const {
        selectedCountry,
        formattedNumber: oldFormattedText,
        onlyCountries,
        defaultCountry
      } = this.state;
      const {
        disableCountryCode,
        countryCodeEditable,
        isModernBrowser,
        onChange
      } = this.props;
      let formattedNumber = disableCountryCode ? '' : '+';
      if (!countryCodeEditable) {
        const updatedInput = "+".concat(newSelectedCountry.dialCode);
        if (e.target.value.length < updatedInput.length) {
          return;
        }
      }

      // Does not exceed 15 digit phone number limit
      if (e.target.value.replace(/\D/g, '').length > 15) {
        return;
      }

      // if the input is the same as before, must be some special key like enter etc.
      if (e.target.value === oldFormattedText) {
        return;
      }

      // ie hack
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      if (e.target.value.length > 0) {
        // before entering the number in new format, lets check if the dial code now matches some other country
        const inputNumber = e.target.value.replace(/\D/g, '');

        // we don't need to send the whole number to guess the country... only the first 6 characters are enough
        // the guess country function can then use memoization much more effectively since the set of input it
        // gets has drastically reduced
        if (!freezeSelection || selectedCountry.dialCode.length > inputNumber.length) {
          newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6), onlyCountries, defaultCountry);
          freezeSelection = false;
        }
        // let us remove all non numerals from the input
        formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
      }
      let caretPosition = e.target.selectionStart;
      const diff = formattedNumber.length - oldFormattedText.length;
      this.setState({
        formattedNumber,
        freezeSelection,
        selectedCountry: newSelectedCountry.dialCode ? newSelectedCountry : selectedCountry
      }, () => {
        if (isModernBrowser) {
          if (diff > 0) {
            caretPosition -= diff;
          }
          const lastChar = formattedNumber.charAt(formattedNumber.length - 1);
          if (lastChar === ')') {
            this.inputRef.setSelectionRange(formattedNumber.length - 1, formattedNumber.length - 1);
          } else if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
            this.inputRef.setSelectionRange(caretPosition, caretPosition);
          }
        }
        if (onChange) {
          onChange(formattedNumber, this.getCountryData());
        }
      });
    });
    _defineProperty(this, "handleRefInput", ref => {
      const {
        inputRef,
        InputProps
      } = this.props;
      this.inputRef = ref;
      let refProp;
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
    _defineProperty(this, "handleInputClick", e => {
      const {
        onClick
      } = this.props;
      if (onClick) {
        onClick(e, this.getCountryData());
      }
    });
    _defineProperty(this, "handleFlagItemClick", country => {
      const {
        formattedNumber,
        selectedCountry,
        onlyCountries
      } = this.state;
      const {
        onChange
      } = this.props;
      const currentSelectedCountry = selectedCountry;
      const nextSelectedCountry = (0, _lodash.isString)(country) ? (0, _lodash.find)(onlyCountries, countryItem => countryItem.iso2 === country) : (0, _lodash.find)(onlyCountries, country);
      const unformattedNumber = formattedNumber.replace(' ', '').replace('(', '').replace(')', '').replace('-', '');
      const newNumber = unformattedNumber.length > 1 ? unformattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode) : nextSelectedCountry.dialCode;
      const newFormattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);
      this.setState({
        anchorEl: null,
        selectedCountry: nextSelectedCountry,
        freezeSelection: true,
        formattedNumber: newFormattedNumber
      }, () => {
        this.cursorToEnd();
        if (onChange) {
          onChange(newFormattedNumber, this.getCountryData());
        }
      });
    });
    _defineProperty(this, "handleInputFocus", e => {
      const {
        selectedCountry
      } = this.state;
      const {
        disableCountryCode,
        onFocus
      } = this.props;

      // if the input is blank, insert dial code of the selected country
      if (this.inputRef) {
        if (this.inputRef.value === '+' && selectedCountry && !disableCountryCode) {
          this.setState({
            formattedNumber: "+".concat(selectedCountry.dialCode)
          }, () => setTimeout(this.cursorToEnd, 10));
        }
      }
      this.setState({
        placeholder: ''
      });
      if (onFocus) {
        onFocus(e, this.getCountryData());
      }
      setTimeout(this.cursorToEnd, 10);
    });
    _defineProperty(this, "handleInputBlur", e => {
      const {
        placeholder,
        onBlur
      } = this.props;
      if (!e.target.value) {
        this.setState({
          placeholder
        });
      }
      if (onBlur) {
        onBlur(e, this.getCountryData());
      }
    });
    _defineProperty(this, "getHighlightCountryIndex", direction => {
      const {
        highlightCountryIndex: oldHighlightCountryIndex,
        onlyCountries,
        preferredCountries
      } = this.state;

      // had to write own function because underscore does not have findIndex. lodash has it
      const highlightCountryIndex = oldHighlightCountryIndex + direction;
      if (highlightCountryIndex < 0 || highlightCountryIndex >= onlyCountries.length + preferredCountries.length) {
        return highlightCountryIndex - direction;
      }
      return highlightCountryIndex;
    });
    _defineProperty(this, "searchCountry", () => {
      const {
        queryString,
        onlyCountries,
        preferredCountries
      } = this.state;
      const probableCandidate = this.getProbableCandidate(queryString) || onlyCountries[0];
      const probableCandidateIndex = (0, _lodash.findIndex)(onlyCountries, probableCandidate) + preferredCountries.length;
      this.scrollTo(this.getElement(probableCandidateIndex), true);
      this.setState({
        queryString: '',
        highlightCountryIndex: probableCandidateIndex
      });
    });
    _defineProperty(this, "handleKeydown", e => {
      const {
        anchorEl,
        highlightCountryIndex,
        preferredCountries,
        onlyCountries,
        queryString,
        debouncedQueryStingSearcher
      } = this.state;
      const {
        keys,
        disabled
      } = this.props;
      if (!anchorEl || disabled) return;

      // ie hack
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
      const moveHighlight = direction => {
        this.setState({
          highlightCountryIndex: this.getHighlightCountryIndex(direction)
        }, () => {
          this.scrollTo(this.getElement(highlightCountryIndex + preferredCountries.length), true);
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
          this.handleFlagItemClick(onlyCountries[highlightCountryIndex], e);
          break;
        case keys.ESC:
          this.setState({
            anchorEl: null
          }, this.cursorToEnd);
          break;
        default:
          if (e.which >= keys.A && e.which <= keys.Z || e.which === keys.SPACE) {
            this.setState({
              queryString: queryString + String.fromCharCode(e.which)
            }, debouncedQueryStingSearcher);
          }
      }
    });
    _defineProperty(this, "handleInputKeyDown", e => {
      const {
        keys,
        onEnterKeyPress,
        onKeyDown
      } = this.props;
      if (e.which === keys.ENTER && onEnterKeyPress) {
        onEnterKeyPress(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    });
    _defineProperty(this, "checkIfValid", () => {
      const {
        formattedNumber
      } = this.state;
      const {
        isValid
      } = this.props;
      return isValid(formattedNumber.replace(/\D/g, ''));
    });
    _defineProperty(this, "updateFormattedNumber", number => {
      const {
        onlyCountries,
        defaultCountry
      } = this.state;
      const {
        disableCountryCode
      } = this.props;
      let countryGuess;
      let inputNumber = number;
      let formattedNumber = number;

      // if inputNumber does not start with '+', then use default country's dialing prefix,
      // otherwise use logic for finding country based on country prefix.
      if (!inputNumber.startsWith('+')) {
        countryGuess = (0, _lodash.find)(onlyCountries, {
          iso2: defaultCountry
        });
        const dialCode = countryGuess && !(0, _lodash.startsWith)(inputNumber.replace(/\D/g, ''), countryGuess.dialCode) ? countryGuess.dialCode : '';
        formattedNumber = this.formatNumber((disableCountryCode ? '' : dialCode) + inputNumber.replace(/\D/g, ''), countryGuess ? countryGuess.format : undefined);
      } else {
        inputNumber = inputNumber.replace(/\D/g, '');
        countryGuess = this.guessSelectedCountry(inputNumber.substring(0, 6), onlyCountries, defaultCountry);
        formattedNumber = this.formatNumber(inputNumber, countryGuess.format);
      }
      this.setState({
        selectedCountry: countryGuess,
        formattedNumber
      });
    });
    _defineProperty(this, "getDropdownProps", () => {
      const {
        selectedCountry,
        anchorEl,
        preferredCountries,
        onlyCountries
      } = this.state;
      const {
        classes,
        dropdownClass,
        localization,
        disableDropdown,
        native
      } = this.props;
      const inputFlagClasses = "flag ".concat(selectedCountry.iso2);
      const isSelected = country => Boolean(selectedCountry && selectedCountry.dialCode === country.dialCode);
      const dropdownProps = disableDropdown ? {} : {
        startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
          className: classes.positionStart,
          position: "start"
        }, native ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_NativeSelect.default, {
          id: "country-menu",
          open: Boolean(anchorEl),
          onClose: () => this.setState({
            anchorEl: null
          }),
          className: classes.native,
          classes: {
            root: (0, _clsx.default)(classes.nativeRoot, 'native', inputFlagClasses),
            select: classes.nativeSelect
          },
          onChange: e => this.handleFlagItemClick(e.target.value),
          disableUnderline: true
        }, !!preferredCountries.length && (0, _lodash.map)(preferredCountries, (country, index) => /*#__PURE__*/_react.default.createElement(_Item.default, {
          key: "preferred_".concat(country.iso2, "_").concat(index),
          itemRef: node => {
            this.flags["flag_no_".concat(index)] = node;
          },
          name: country.name,
          iso2: country.iso2,
          dialCode: country.dialCode,
          localization: localization && localization[country.name],
          native: true
        })), (0, _lodash.map)(onlyCountries, (country, index) => /*#__PURE__*/_react.default.createElement(_Item.default, {
          key: "preferred_".concat(country.iso2, "_").concat(index),
          itemRef: node => {
            this.flags["flag_no_".concat(index)] = node;
          },
          name: country.name,
          iso2: country.iso2,
          dialCode: country.dialCode,
          localization: localization && localization[country.name],
          native: true
        })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
          className: classes.flagButton,
          "aria-owns": anchorEl ? 'country-menu' : null,
          "aria-label": "Select country",
          onClick: e => this.setState({
            anchorEl: e.currentTarget
          }),
          "aria-haspopup": true
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: inputFlagClasses
        })), /*#__PURE__*/_react.default.createElement(_Menu.default, {
          className: dropdownClass,
          id: "country-menu",
          anchorEl: anchorEl,
          open: Boolean(anchorEl),
          onClose: () => this.setState({
            anchorEl: null
          })
        }, !!preferredCountries.length && (0, _lodash.map)(preferredCountries, (country, index) => /*#__PURE__*/_react.default.createElement(_Item.default, {
          key: "preferred_".concat(country.iso2, "_").concat(index),
          itemRef: node => {
            this.flags["flag_no_".concat(index)] = node;
          },
          selected: isSelected(country),
          onClick: () => this.handleFlagItemClick(country),
          name: country.name,
          iso2: country.iso2,
          dialCode: country.dialCode,
          localization: localization && localization[country.name]
        })), !!preferredCountries.length && /*#__PURE__*/_react.default.createElement(_Divider.default, null), (0, _lodash.map)(onlyCountries, (country, index) => /*#__PURE__*/_react.default.createElement(_Item.default, {
          key: "preferred_".concat(country.iso2, "_").concat(index),
          itemRef: node => {
            this.flags["flag_no_".concat(index)] = node;
          },
          selected: isSelected(country),
          onClick: () => this.handleFlagItemClick(country),
          name: country.name,
          iso2: country.iso2,
          dialCode: country.dialCode,
          localization: localization && localization[country.name]
        })))))
      };
      return dropdownProps;
    });
    let _filteredCountries = _country_data.default.allCountries;
    if (props.disableAreaCodes) _filteredCountries = this.deleteAreaCodes(_filteredCountries);
    if (props.regions) _filteredCountries = this.filterRegions(props.regions, _filteredCountries);
    const _onlyCountries = this.excludeCountries(this.getOnlyCountries(props.onlyCountries, _filteredCountries), props.excludeCountries);
    const _preferredCountries = (0, _lodash.filter)(_filteredCountries, country => (0, _lodash.some)(props.preferredCountries, preferredCountry => preferredCountry === country.iso2));
    const _inputNumber = props.value || '';
    let _countryGuess;
    if (_inputNumber.length > 1) {
      // Country detect by value field
      _countryGuess = this.guessSelectedCountry(_inputNumber.replace(/\D/g, '').substring(0, 6), _onlyCountries, props.defaultCountry) || 0;
    } else if (props.defaultCountry) {
      // Default country
      _countryGuess = (0, _lodash.find)(_onlyCountries, {
        iso2: props.defaultCountry
      }) || 0;
    } else {
      // Empty params
      _countryGuess = 0;
    }
    const countryGuessIndex = (0, _lodash.findIndex)(this.allCountries, _countryGuess);
    const _dialCode = _inputNumber.length < 2 && _countryGuess && !(0, _lodash.startsWith)(_inputNumber.replace(/\D/g, ''), _countryGuess.dialCode) ? _countryGuess.dialCode : '';
    const _formattedNumber = _inputNumber === '' && _countryGuess === 0 ? '' : this.formatNumber((props.disableCountryCode ? '' : _dialCode) + _inputNumber.replace(/\D/g, ''), _countryGuess.name ? _countryGuess.format : undefined);
    this.state = {
      formattedNumber: _formattedNumber,
      placeholder: props.placeholder,
      onlyCountries: _onlyCountries,
      preferredCountries: _preferredCountries,
      defaultCountry: props.defaultCountry,
      selectedCountry: _countryGuess,
      highlightCountryIndex: countryGuessIndex,
      queryString: '',
      freezeSelection: false,
      debouncedQueryStingSearcher: (0, _lodash.debounce)(this.searchCountry, 100),
      anchorEl: null
    };
  }
  componentDidMount() {
    if (document.addEventListener) {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }
  componentDidUpdate(_ref) {
    let {
      value: prevValue
    } = _ref;
    const {
      defaultCountry: prevDefaultCountry,
      formattedNumber
    } = this.state;
    const {
      defaultCountry,
      value
    } = this.props;
    if (defaultCountry && defaultCountry !== prevDefaultCountry) {
      this.updateDefaultCountry(defaultCountry);
    }
    if (typeof value === 'string' && value !== prevValue && value !== formattedNumber) {
      this.updateFormattedNumber(value);
    }
  }
  componentWillUnmount() {
    if (document.removeEventListener) {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }
  render() {
    const {
      formattedNumber,
      placeholder: statePlaceholder
    } = this.state;
    const {
      // start placeholder props
      native,
      defaultCountry,
      excludeCountries,
      onlyCountries,
      preferredCountries,
      dropdownClass,
      autoFormat,
      disableAreaCodes,
      isValid,
      disableCountryCode,
      disableDropdown,
      enableLongNumbers,
      countryCodeEditable,
      onEnterKeyPress,
      isModernBrowser,
      classes,
      keys,
      localization,
      placeholder,
      regions,
      onChange,
      value,
      // end placeholder props
      inputClass,
      error,
      InputProps,
      ...restProps
    } = this.props;
    const dropdownProps = this.getDropdownProps();
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
      InputProps: {
        ...dropdownProps,
        ...InputProps
      }
    }, restProps)));
  }
}
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
  isValid: inputNumber => (0, _lodash.some)(_country_data.default.allCountries, country => (0, _lodash.startsWith)(inputNumber, country.dialCode) || (0, _lodash.startsWith)(country.dialCode, inputNumber)),
  disableCountryCode: false,
  disableDropdown: false,
  enableLongNumbers: false,
  countryCodeEditable: true,
  regions: '',
  localization: {},
  onEnterKeyPress: () => {},
  onChange: () => {},
  isModernBrowser: () => document.createElement ? Boolean(document.createElement('input').setSelectionRange) : false,
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
var _default = exports.default = (0, _withStyles.default)(styles)(MaterialUiPhoneNumber);