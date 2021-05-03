(self["webpackChunkwizzi_frontend"] = self["webpackChunkwizzi_frontend"] || []).push([["SearchResults"],{

/***/ "./src/components/Search/SearchResults.tsx":
/*!*************************************************!*\
  !*** ./src/components/Search/SearchResults.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aphrodite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nullthrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nullthrows */ "./node_modules/nullthrows/nullthrows.js");
/* harmony import */ var nullthrows__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nullthrows__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _features_preferences_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/preferences/index */ "./src/features/preferences/index.tsx");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ThemeProvider */ "./src/components/ThemeProvider.tsx");
/* harmony import */ var _widgets_ProgressIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/ProgressIndicator */ "./src/components/widgets/ProgressIndicator.tsx");
/* harmony import */ var _SearchPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchPlaceholder */ "./src/components/Search/SearchPlaceholder.tsx");
var _templateObject;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\Search\SearchResults.tsx.ittf
    utc time: Sat, 01 May 2021 04:43:27 GMT
*/










const ENDPOINT = "".concat(nullthrows__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3020"), "/--/graphql");
const SEARCH_SNACKS = (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query($query: String!, $offset: Int!, $limit: Int!) {\n    search(type: SNACKS, query: $query, offset: $offset, limit: $limit) {\n      __typename\n      ... on SnackSearchResult {\n        id\n        snack {\n          slug\n          name\n          description\n        }\n      }\n    }\n  }\n"])));
const PAGE_SIZE = 30;

let SearchResults = /*#__PURE__*/function (_React$Component) {
  _inherits(SearchResults, _React$Component);

  var _super = _createSuper(SearchResults);

  function SearchResults(...args) {
    var _this;

    _classCallCheck(this, SearchResults);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "state", {
      status: {
        type: 'success',
        data: []
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_fetchResultsNotDebounced", async (query, previous = []) => {
      _this.setState({
        status: {
          type: 'loading',
          data: previous
        }
      });

      try {
        // @ts-ignore
        const results = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__.request)(ENDPOINT, SEARCH_SNACKS, {
          query: _this.props.query,
          offset: previous.length,
          limit: PAGE_SIZE
        });

        _this.setState({
          status: {
            type: 'success',
            data: [...previous, ...results.search]
          }
        });
      } catch (error) {
        console.error('Error fetching search results', error);

        _this.setState({
          status: {
            type: 'failure',
            error
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_fetchResults", lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(_this._fetchResultsNotDebounced, 1000));

    _defineProperty(_assertThisInitialized(_this), "_fetchMore", () => {
      const {
        status
      } = _this.state;
      return _this._fetchResultsNotDebounced(_this.props.query, status.type === 'success' ? status.data : []);
    });

    _defineProperty(_assertThisInitialized(_this), "_renderRow", ({
      data: {
        snack
      },
      style,
      key
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      key: key,
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("a", {
      target: "_blank",
      href: "/".concat(snack.slug),
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.item)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("img", {
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.icon),
      src: _this.props.theme === 'dark' ? __webpack_require__(/*! ../../assets/snack-icon-dark.svg */ "./src/assets/snack-icon-dark.svg") : __webpack_require__(/*! ../../assets/snack-icon-color.svg */ "./src/assets/snack-icon-color.svg")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.content)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h4", {
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.title)
    }, snack.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("p", {
      className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.description)
    }, snack.description)))));

    return _this;
  }

  _createClass(SearchResults, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.query) {
        this._fetchResultsNotDebounced(this.props.query);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.query !== prevProps.query) {
        this._fetchResults(this.props.query);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _status$data, _status$data2;

      const {
        status
      } = this.state;

      if (!this.props.query) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SearchPlaceholder__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Results will appear here."
        });
      }

      if (status.type === 'failure') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SearchPlaceholder__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "An error ocurred. Try again after some time."
        });
      }

      if (status.type === 'loading' && !((_status$data = status.data) !== null && _status$data !== void 0 && _status$data.length)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
          className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(styles.loadingContainer)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_widgets_ProgressIndicator__WEBPACK_IMPORTED_MODULE_8__.ProgressIndicator, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SearchPlaceholder__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "Searching\u2026"
        }));
      }

      if (status.type === 'success' && !((_status$data2 = status.data) !== null && _status$data2 !== void 0 && _status$data2.length)) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_SearchPlaceholder__WEBPACK_IMPORTED_MODULE_9__.default, {
          label: "No results found."
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
        className: (0,aphrodite__WEBPACK_IMPORTED_MODULE_0__.css)(status.type === 'loading' ? styles.loadingContainer : styles.container)
      }, status.type === 'loading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_widgets_ProgressIndicator__WEBPACK_IMPORTED_MODULE_8__.ProgressIndicator, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_5__.AutoSizer, null, ({
        height,
        width
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_5__.InfiniteLoader, {
        isRowLoaded: ({
          index
        }) => index < status.data.length,
        loadMoreRows: this._fetchMore,
        rowCount: status.data.length + 1
      }, ({
        onRowsRendered,
        registerChild
      }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_5__.List, {
        ref: registerChild,
        onRowsRendered: onRowsRendered,
        height: height,
        width: width,
        rowCount: status.data.length,
        rowHeight: 72,
        rowRenderer: ({
          index,
          style,
          key
        }) => this._renderRow({
          data: status.data[index],
          style,
          key
        })
      }))));
    }
  }]);

  return SearchResults;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_features_preferences_index__WEBPACK_IMPORTED_MODULE_6__.withThemeName)(SearchResults));
const styles = aphrodite__WEBPACK_IMPORTED_MODULE_0__.StyleSheet.create({
  container: {
    flex: 1
  },
  loadingContainer: {
    display: 'flex',
    flex: 1
  },
  icon: {
    display: 'block',
    height: 36,
    width: 36,
    marginTop: 4
  },
  item: {
    height: 72,
    display: 'flex',
    padding: '16px 24px',
    cursor: 'pointer',
    color: 'inherit',
    textDecoration: 'none',
    borderBottom: "1px solid ".concat((0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.c)('border')),
    ':hover': {
      backgroundColor: (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.c)('hover')
    }
  },
  content: {
    marginLeft: 16
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  description: {
    fontSize: 14,
    margin: 0,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
});

/***/ }),

/***/ "./src/assets/snack-icon-color.svg":
/*!*****************************************!*\
  !*** ./src/assets/snack-icon-color.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/640d63b24b3ef5db5b2bdbb87e62152a.svg");

/***/ })

}]);
//# sourceMappingURL=SearchResults.6f16092d604366dde50d.chunk.js.map