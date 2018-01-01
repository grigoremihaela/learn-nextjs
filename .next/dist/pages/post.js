'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Cezar/Workspace/pi-react/pages/post.js?entry';


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.show.name), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.show.summary.replace(/<[/]?p>/g, '')), _react2.default.createElement('img', { src: props.show.image.medium, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.url.query.title), _react2.default.createElement('div', {
    className: 'jsx-3474507082' + ' ' + 'markdown',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\n  This is our blog post.\n  Yes. We can have a [link](/link).\n  And we can have a title as well.\n\n  ### This is a title\n\n  And here\'s the content.\n       ', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '3474507082',
    css: '.markdown{font-family:\'Arial\';}.markdown a{text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUc4QixBQUlDLEFBS1QsQUFJSCxTQUNDLEdBSlosT0FLMkIsQ0FkM0IsQ0FJYSxXQUNiLFlBVUEiLCJmaWxlIjoicGFnZXMvcG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvQ2V6YXIvV29ya3NwYWNlL3BpLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgUG9zdCA9ICAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICAgPGgxPntwcm9wcy5zaG93Lm5hbWV9PC9oMT5cbiAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG4gICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxuICAgICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCI+XG4gICAgICAgPE1hcmtkb3duIHNvdXJjZT17YFxuICBUaGlzIGlzIG91ciBibG9nIHBvc3QuXG4gIFllcy4gV2UgY2FuIGhhdmUgYSBbbGlua10oL2xpbmspLlxuICBBbmQgd2UgY2FuIGhhdmUgYSB0aXRsZSBhcyB3ZWxsLlxuXG4gICMjIyBUaGlzIGlzIGEgdGl0bGVcblxuICBBbmQgaGVyZSdzIHRoZSBjb250ZW50LlxuICAgICAgIGB9Lz5cbiAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAubWFya2Rvd24ge1xuICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XG4gICAgICAgfVxuICBcbiAgICAgICAubWFya2Rvd24gYSB7XG4gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICB9XG4gIFxuICAgICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICB9XG4gIFxuICAgICAgIC5tYXJrZG93biBoMyB7XG4gICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICB9XG4gICAgYH08L3N0eWxlPjwvZGl2PlxuICA8L0xheW91dD5cbilcblxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YClcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuXG4gIHJldHVybiB7IHNob3cgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4vKlxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgUG9zdCA9ICAocHJvcHMpID0+IChcbiAgICA8TGF5b3V0PlxuICAgICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XG4gICAgICAgPHA+e3Byb3BzLnNob3cuc3VtbWFyeS5yZXBsYWNlKC88Wy9dP3A+L2csICcnKX08L3A+XG4gICAgICAgPGltZyBzcmM9e3Byb3BzLnNob3cuaW1hZ2UubWVkaXVtfS8+XG4gICAgPC9MYXlvdXQ+XG4pXG5cblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApXG4gIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYEZldGNoZWQgc2hvdzogJHtzaG93Lm5hbWV9YClcblxuICByZXR1cm4geyBzaG93IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuKi9cbi8qXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5cbmNvbnN0IENvbnRlbnQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuICAgIDxwPlRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgPENvbnRlbnQgdXJsPXtwcm9wcy51cmx9IC8+XG4gICAgPC9MYXlvdXQ+XG4pXG4qL1xuLypcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPExheW91dD5cbiAgICAgICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuICAgICAgIDxwPlRoaXMgaXMgdGhlIGJsb2cgcG9zdCBjb250ZW50LjwvcD5cbiAgICA8L0xheW91dD5cbilcbiovXG4iXX0= */\n/*@ sourceURL=pages/post.js?entry */'
  })));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, show;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/shows/' + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            show = _context.sent;

            console.log('Fetched show: ' + show.name);

            return _context.abrupt('return', { show: show });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
/*
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
*/
/*
import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

export default (props) => (
    <Layout>
       <Content url={props.url} />
    </Layout>
)
*/
/*
import Layout from '../components/MyLayout.js'

export default (props) => (
    <Layout>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </Layout>
)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiTWFya2Rvd24iLCJmZXRjaCIsIlBvc3QiLCJwcm9wcyIsInNob3ciLCJuYW1lIiwic3VtbWFyeSIsInJlcGxhY2UiLCJpbWFnZSIsIm1lZGl1bSIsInVybCIsInF1ZXJ5IiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFRLFNBQVIsQUFBUSxLQUFBLEFBQUMsT0FBRDt5QkFDWixBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLGtCQUNHLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxLQURkLEFBQ0csQUFBZ0IsQUFDaEIsdUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FBSSxBQUFNLEtBQU4sQUFBVyxRQUFYLEFBQW1CLFFBQW5CLEFBQTJCLFlBRmxDLEFBRUcsQUFBSSxBQUF1QyxBQUMzQyw2Q0FBSyxLQUFLLE1BQUEsQUFBTSxLQUFOLEFBQVcsTUFBckIsQUFBMkI7Z0JBQTNCO2tCQUhILEFBR0csQUFDQTtBQURBO3NCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxJQUFOLEFBQVUsTUFKbEIsQUFJRyxBQUFxQixBQUNyQix3QkFBQSxjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMseUNBQVMsUUFBVjtnQkFBQTtrQkFERixBQUNFO0FBQUE7O2FBREY7U0FOUyxBQUNaLEFBS0c7QUFBQTtBQU5MOztBQXVDQSxLQUFBLEFBQUssOEJBQUw7c0ZBQXVCLGlCQUFBLEFBQWdCLFNBQWhCO2lCQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQ2I7QUFEYSxpQkFDTixRQURNLEFBQ0UsTUFERixBQUNiOzRCQURhO21CQUVILG1FQUZHLEFBRUgsQUFBc0M7O2VBQWxEO0FBRmUsMkJBQUE7NEJBQUE7bUJBR0YsSUFIRSxBQUdGLEFBQUk7O2VBQWpCO0FBSGUsNEJBS3JCOztvQkFBQSxBQUFRLHVCQUFxQixLQUxSLEFBS3JCLEFBQWtDOzs2Q0FFM0IsRUFBRSxNQVBZLEFBT2Q7O2VBUGM7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUF2Qjs7dUJBQUE7NEJBQUE7QUFBQTtBQVVBOztrQkFBQSxBQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsImZpbGUiOiJwb3N0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9DZXphci9Xb3Jrc3BhY2UvcGktcmVhY3QifQ==