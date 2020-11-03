/*
 * @Author: your name
 * @Date: 2020-08-31 21:49:23
 * @LastEditTime: 2020-08-31 22:18:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\26命名空间\src\components.ts
 */
define("components", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Context = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var el = document.createElement('div');
            el.innerHTML = 'This is Header';
            document.body.appendChild(el);
        }
        return Header;
    }());
    exports.Header = Header;
    var Context = /** @class */ (function () {
        function Context() {
            var el = document.createElement('div');
            el.innerHTML = 'This is Context';
            document.body.appendChild(el);
        }
        return Context;
    }());
    exports.Context = Context;
    var Footer = /** @class */ (function () {
        function Footer() {
            var el = document.createElement('div');
            el.innerHTML = 'This is Footer';
            document.body.appendChild(el);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("page", ["require", "exports", "components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new components_1.Header();
            new components_1.Context();
            new components_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
