/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".main-content-block {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  z-index: 0;\n}\n.main-content-block::before {\n  content: \"\";\n  background: #023d28;\n  left: 0;\n  top: 0;\n  width: 40%;\n  height: 176vh;\n  position: absolute;\n  z-index: 1;\n  background: rgb(2, 61, 40);\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 41, 26, 0.58) 35%, rgba(255, 255, 255, 0) 100%);\n}\n.main-content-block::after {\n  content: \"\";\n  right: 0;\n  top: 0;\n  width: 40%;\n  height: 176vh;\n  position: absolute;\n  z-index: 0;\n  background: rgb(2, 61, 40);\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 41, 26, 0.58) 35%, rgba(255, 255, 255, 0) 100%);\n}\n.main-content-block .widget-container-block {\n  z-index: 1;\n  position: relative;\n  min-height: 176vh;\n  background: rgba(2, 61, 40, 0.4588235294);\n}\n\n.smart-city_box {\n  background: rgba(0, 0, 0, 0);\n  /* backdrop-filter: blur(34px); */\n  box-shadow: none;\n  border-radius: 10px;\n  z-index: 1;\n}\n.smart-city_box .uxp-widget-title-bar {\n  background: transparent;\n  color: #1f9b7f;\n  border-bottom: 1px solid #dedede;\n  margin-bottom: 1em;\n  padding: 0;\n  outline: none;\n  min-height: 38px;\n  width: 95%;\n  position: relative;\n}\n.smart-city_box .uxp-widget-title-bar::before {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(222, 222, 222, 0.631372549);\n  width: 6%;\n  height: 3px;\n  bottom: -4px;\n  left: 0;\n  border-radius: 0px 0px 30px 30px;\n}\n.smart-city_box .uxp-widget-title-bar::after {\n  content: \"\";\n  position: absolute;\n  background-color: rgba(222, 222, 222, 0.631372549);\n  width: 6px;\n  height: 6px;\n  bottom: -3px;\n  right: -6px;\n  border-radius: 50%;\n}\n.smart-city_box .uxp-widget-title-bar .txt {\n  color: #0fd6a9;\n  font-weight: 600;\n  font-size: 1.1em;\n}\n.smart-city_box .sub_title_bar {\n  /* border-bottom: 1px solid #c2e6da; */\n  margin-bottom: 0.8em;\n  padding: 0;\n  min-height: 15px;\n  width: 80%;\n  font-size: 0.95em;\n  color: #fff;\n  font-weight: 500;\n  outline: none;\n}\n.smart-city_box .smart-city-content {\n  display: inline-block;\n  width: 95%;\n  margin-top: 1em;\n}\n.smart-city_box.order_trend-box .smart-city-content .technician_chart .recharts-text {\n  fill: #ededed;\n}\n.smart-city_box.order_summary-box .smart-city-content {\n  height: 250px;\n  overflow: auto;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container {\n  background-color: transparent;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list {\n  background-color: transparent;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table {\n  background-color: transparent;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr {\n  background-color: transparent;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr th {\n  background-color: transparent;\n  color: #1dcb8d;\n  text-align: left;\n  padding: 5px 3px;\n  font-size: 10px;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card {\n  background-color: transparent;\n  color: #ffffff;\n  min-height: 30px;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card .content {\n  padding: 0;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card .content .sub-title {\n  font-size: 10px;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card::after {\n  content: \"\";\n  width: 18px;\n  height: 18px;\n  position: absolute;\n  top: 8px;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  left: 0%;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card.attention::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyFJREFUWIW1lzlMVFEUhr9zRwERcUk0JKIOBLDA4BYRKxkTFwa1MDFqQ6KJhZUVog0maiJY2bk0Vu6JhQtiXEAT49JoNBQqgRFRcIkLgjLgm2PxhmWc0blvhL95887c//z/u+fe8+4TLKEFFdlEtBLVVcBCwA9Mi/79FQgBT1G9Q3rGNXlx+btNXkkqnB8sIuLUIGwFMi39/gA9i2i9tN18lZIBzd08iYk9B4HdwARL4T8xCHoUHaiVUHO/tQHNX12ImkvAghSF/8z4kIhsktc3upIa0HkVizGRG8DMsREfRidIpbQ3PvurgeiT3x8H8RET6lsmoYbuoYAZFveXZ6Dm4jiKA+QizlXN3TxpKDCyuCT9EO72ssOGlbAh4P6+0gRX7toyl5LWsxfYD9ESaH6wCHVasF3tKxbC6frY2LZqePTc1kQv6iuUUEO3W4KIU2MtDrC8JD5WZj95QBY4tQBGCyqyo03GHqqehieEUKXzN04xRLQS+w7noj8cH/uZsM/8C5MJ9wdNtLd7w89EBhLEkkHMKoOXlT/WBoiUGCDPM68/wXQnKktSSL4Bsj3zxmwGmGqSj7E14HkRAm4r7vHMetMdH+uIe9HZ4JsB2j3TOrrgxEW3H6jC8fPQ+T4FfW0TzVt7EtiZAhtmzXCvHz6nREf0hEH1TkrkwrmwZwdUb4eCuakZUHNbtLg8ix/p3cBka2JmBjSdgpnT3fsPnyGw3etO6CMznGOkpbkX9JwXJv7ZI+LgliIv11MK4Iy0NPe621C0Hhi0pobewqcvI/cfv7gxewzgOHUw6kimeWuOgFRbp5jvh11b3F1w7AK8DNnLq9RJqHFfrAF/eQaS1gRSZp8pJTzAZwLSej0cY8A1EcxBnMfAnHESf8fgxFLpvDpcr5hW7J5WZT3QOQ7ibxDfutHicQYApL3xGT6zBLg3huIPUF+ptDXEHRoTvoyk9fpHfGYNwgGg7z+EB1A9jM8ERn8LxGgly6D+YA44tQhV2DerPpDTOL/qpeNW278GJjUwbKS4PIu+tEoMAVQW4R5kRn+etyM8QWkiM9zgNrjk+A3NlgyisFCRCAAAAABJRU5ErkJggg==\");\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card.pending::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAnXAAAJ1wGxbhe3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAn1JREFUWIXFl01rE1EUhp9zm5hkY+3ClVoQo1U3ahVUmjYUdSVY1N/hQhQX6tZP/ADxf0S7LaU0iR+IKK5UGoVaXbWkVqGTMWaOi06Sacw0mWaavru598x9Xu6dOfMObLIkSLEqQj46iJoRlD0gfe5MEeEL4uRIld+JoKEa0Hyin4pzBTgP7GpRPgdkwDyQtDXXkQGdoJdo7AbCJSDejlmPSghPsO3bcoalwAZ0KpbEMA4cCAhu1AyOnpPRP5+aTZqm8Gw8jZE3IcAB9mLMS52OjzSb/G8HNB8boCKvQPtCgHtRi6DHJW3PeEdX7YBO0EuF8fDh4K45rq/Z6muALbGbwL7w4TXtx45f9w7UjkAnEzuIODNAYgMNAJToMQOSsr6BdwcizrUuwAHiVJzL1QsDbodbaTLd0gWX6e7AdPQYrTtcmOonFz1SN2DMUBfhK3JMCiACgJL0LYxuh94hkJ5gAK3A0gsoz/tVJOsG0G2+XfnwJCTW+WYuf4a3h/wc9oFPK15d1/aXtdnNLSvcHZCfvhUfTndwBPk1CmSxbkAo+Jotz8PCs2Dw9lSA6hGIk9sIwppSJwvuk6eKkI3N0q1eIMwybO8WQQ2Am+EyXYEDKJlqbqy/BX/NfWC5C3gLzKPqRc2AnLJ+IDzdcLzIY29YbcgD9i2gaXYLSR8xpbvegVUG5AS/MHIWWAifLYvAmKT47WsAQIZLX0EuVhtFSPAiylhjHoTWsfw5cLBDevBYDiCjdoGYfRLkHmCtA2yhcoce+6gfHNr9NZtK7MQ4V1lJTf1rFguzKBkc81BGre+t1g70cwqg2eggaoaBZC2+qxSBAuLkJF1+H3TNTdU/bjvCYAjMUEYAAAAASUVORK5CYII=\");\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card.resloved::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA9JJREFUWIW9l9tPXFUUh7+1ZzpDoXQgQJsarcIMSW1AiKl9aBsvL2oTY2qbaosCh5DUh6Ze+qTxtfXSxIem6SUkyMAEyhsm9T8wtZa0pCJgUoeiMUGkw8AURoSZs7cP4jBc5saIv6ez9lprfyv7nLPOOkKOavi1odQZc9YjqlIQz9LyjGgzhpN7/kr/TC77SdbQuKsFzEmQZwGVItQ2MKCQ66JMRzbFpC3g+PBxV6G70DIi54CKbIpNUhi4oBQX/ZX+v3IuwBq1ajX0Ad4cwatkgsY43wj42ofW8657lE3BpsMavs0fDiA+kfitd4LWkXW9qxeaHzS/boz0pSouD2kjHAlU+W+kLODtn1v2OpT5DvCwKTJzCjng9/p/XFOANWYVaM0Q/8mxpy0i6NHbay5VX1qApGPWNmc2Hw4gvoiaPZ2wAKwxq0QbghjK8tl6x5YdnNl5muH5EfrCX7NgFlKFTm9xOXztT7SHFYBtTGu+cEFoLW9ht2s3hz2vcnbXh+nCS2OLdiMs3QIxnMgHDvDS9hfZs3VPwp6MTaZPWGLKUpsNkcdrV+4s4/zj5yhQBQBE7Agf//YJUR1Nl2YrRblyLbrq8oEDWBVWAg7QFQpkggM44oZapRVV+cBfKH6e2q01Cfv7udvcid7NKtdhxKeSPqk5q8RRwltlbybsWXuO7qmerPM1xpP10R8qPsix0qM4ZDmlpcKiSBUl7MBUgEf2o6wLAHAaTCRT0Cuel2koOwnAY65dXJm8xv6i/dQX1iVi7kYHuD3XnxMcw4xTaR7oDOdwqPhg4npf0T7e3/keXvfyoxPVUbpCgdzggFGMqkXX4g+AnS7wyh9XmbGXh5u6wmfY5tiWsLunrq/wZym70LgGVc+TPdMGBtJF/h6b4LPxLwjHp9f4Bv8c5ObszVzhINLf5m2L/NMJoTdT/ERsgvPjn/Iw/jCxNq/n6Qh15g4HROteWGpASvEVwlSmpFA8xOfjFxiZH2E8Ns7lyauE4+EN4E3ILe5OSJoHmkats8CXG9htI/qgy+u/CEkt2KOLL4MJ/g/w+x5dfO1fY8VI1vhL49NiO26xaSMZs8Y4DiRPyCs6QOCpwE9GaAT0JsA1SMPq8XxNCwpU+W9g9GtAxg6ZvcycNhzr8nZ8s9qT8sekMdhaIxLvA/HlSb8v2hztrO4cXs+ZsgkHfO1DBdPuvWLMu0CG8WZdhYGPlKIuFRyy/Dm1xqwSrWnGcALhOcCRItRGpF+07nWLu7PN25bxNmZVQLJOjZ7yzKtYvdJUaYwHQCERRI/G7fi97urunL7HfwO7DlznGoWJOQAAAABJRU5ErkJggg==\");\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card.Green .content .sub-title {\n  background-color: #00b36c;\n  padding: 5px 5px;\n  border-radius: 1px;\n  width: 44px;\n  text-align: center;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list .data-table tr td .item-card.Red .content .sub-title {\n  background-color: #cb0000;\n  padding: 5px 5px;\n  border-radius: 1px;\n  width: 44px;\n  text-align: center;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list-footer {\n  background-color: transparent;\n}\n.smart-city_box.order_summary-box .smart-city-content .data-list-container .data-list-footer .go-up-btn-container {\n  background-color: rgba(5, 81, 54, 0.34);\n}\n.smart-city_box.cctv-box .body {\n  height: 250px;\n  width: 100%;\n  display: inline-block;\n  background-image: url(https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg);\n  background-size: 100% 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.smart-city_box.waste-bin-box .smart-city-content {\n  margin-top: 0;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content {\n  display: flex;\n  width: 100%;\n  padding: 1em 8% 2em 8%;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status {\n  display: inline-block;\n  width: 33%;\n  text-align: center;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status h3 {\n  font-size: 1.8em;\n  padding: 0;\n  margin: 0;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status p {\n  font-size: 0.8em;\n  padding: 1em 0 0 0;\n  margin: 0;\n  color: #fff;\n  position: relative;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status p::after {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  top: 8px;\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  right: 8%;\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Attention h3 {\n  color: rgb(211, 1, 1);\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Attention p::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAyFJREFUWIW1lzlMVFEUhr9zRwERcUk0JKIOBLDA4BYRKxkTFwa1MDFqQ6KJhZUVog0maiJY2bk0Vu6JhQtiXEAT49JoNBQqgRFRcIkLgjLgm2PxhmWc0blvhL95887c//z/u+fe8+4TLKEFFdlEtBLVVcBCwA9Mi/79FQgBT1G9Q3rGNXlx+btNXkkqnB8sIuLUIGwFMi39/gA9i2i9tN18lZIBzd08iYk9B4HdwARL4T8xCHoUHaiVUHO/tQHNX12ImkvAghSF/8z4kIhsktc3upIa0HkVizGRG8DMsREfRidIpbQ3PvurgeiT3x8H8RET6lsmoYbuoYAZFveXZ6Dm4jiKA+QizlXN3TxpKDCyuCT9EO72ssOGlbAh4P6+0gRX7toyl5LWsxfYD9ESaH6wCHVasF3tKxbC6frY2LZqePTc1kQv6iuUUEO3W4KIU2MtDrC8JD5WZj95QBY4tQBGCyqyo03GHqqehieEUKXzN04xRLQS+w7noj8cH/uZsM/8C5MJ9wdNtLd7w89EBhLEkkHMKoOXlT/WBoiUGCDPM68/wXQnKktSSL4Bsj3zxmwGmGqSj7E14HkRAm4r7vHMetMdH+uIe9HZ4JsB2j3TOrrgxEW3H6jC8fPQ+T4FfW0TzVt7EtiZAhtmzXCvHz6nREf0hEH1TkrkwrmwZwdUb4eCuakZUHNbtLg8ix/p3cBka2JmBjSdgpnT3fsPnyGw3etO6CMznGOkpbkX9JwXJv7ZI+LgliIv11MK4Iy0NPe621C0Hhi0pobewqcvI/cfv7gxewzgOHUw6kimeWuOgFRbp5jvh11b3F1w7AK8DNnLq9RJqHFfrAF/eQaS1gRSZp8pJTzAZwLSej0cY8A1EcxBnMfAnHESf8fgxFLpvDpcr5hW7J5WZT3QOQ7ibxDfutHicQYApL3xGT6zBLg3huIPUF+ptDXEHRoTvoyk9fpHfGYNwgGg7z+EB1A9jM8ERn8LxGgly6D+YA44tQhV2DerPpDTOL/qpeNW278GJjUwbKS4PIu+tEoMAVQW4R5kRn+etyM8QWkiM9zgNrjk+A3NlgyisFCRCAAAAABJRU5ErkJggg==\");\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Pending h3 {\n  color: rgb(218, 218, 1);\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Pending p::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAnXAAAJ1wGxbhe3AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAn1JREFUWIXFl01rE1EUhp9zm5hkY+3ClVoQo1U3ahVUmjYUdSVY1N/hQhQX6tZP/ADxf0S7LaU0iR+IKK5UGoVaXbWkVqGTMWaOi06Sacw0mWaavru598x9Xu6dOfMObLIkSLEqQj46iJoRlD0gfe5MEeEL4uRIld+JoKEa0Hyin4pzBTgP7GpRPgdkwDyQtDXXkQGdoJdo7AbCJSDejlmPSghPsO3bcoalwAZ0KpbEMA4cCAhu1AyOnpPRP5+aTZqm8Gw8jZE3IcAB9mLMS52OjzSb/G8HNB8boCKvQPtCgHtRi6DHJW3PeEdX7YBO0EuF8fDh4K45rq/Z6muALbGbwL7w4TXtx45f9w7UjkAnEzuIODNAYgMNAJToMQOSsr6BdwcizrUuwAHiVJzL1QsDbodbaTLd0gWX6e7AdPQYrTtcmOonFz1SN2DMUBfhK3JMCiACgJL0LYxuh94hkJ5gAK3A0gsoz/tVJOsG0G2+XfnwJCTW+WYuf4a3h/wc9oFPK15d1/aXtdnNLSvcHZCfvhUfTndwBPk1CmSxbkAo+Jotz8PCs2Dw9lSA6hGIk9sIwppSJwvuk6eKkI3N0q1eIMwybO8WQQ2Am+EyXYEDKJlqbqy/BX/NfWC5C3gLzKPqRc2AnLJ+IDzdcLzIY29YbcgD9i2gaXYLSR8xpbvegVUG5AS/MHIWWAifLYvAmKT47WsAQIZLX0EuVhtFSPAiylhjHoTWsfw5cLBDevBYDiCjdoGYfRLkHmCtA2yhcoce+6gfHNr9NZtK7MQ4V1lJTf1rFguzKBkc81BGre+t1g70cwqg2eggaoaBZC2+qxSBAuLkJF1+H3TNTdU/bjvCYAjMUEYAAAAASUVORK5CYII=\");\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Resloved h3 {\n  color: rgb(19, 232, 61);\n}\n.smart-city_box.waste-bin-box .smart-city-content .status-content .status.Resloved p::after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAADsAAAA7AF5KHG9AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA9JJREFUWIW9l9tPXFUUh7+1ZzpDoXQgQJsarcIMSW1AiKl9aBsvL2oTY2qbaosCh5DUh6Ze+qTxtfXSxIem6SUkyMAEyhsm9T8wtZa0pCJgUoeiMUGkw8AURoSZs7cP4jBc5saIv6ez9lprfyv7nLPOOkKOavi1odQZc9YjqlIQz9LyjGgzhpN7/kr/TC77SdbQuKsFzEmQZwGVItQ2MKCQ66JMRzbFpC3g+PBxV6G70DIi54CKbIpNUhi4oBQX/ZX+v3IuwBq1ajX0Ad4cwatkgsY43wj42ofW8657lE3BpsMavs0fDiA+kfitd4LWkXW9qxeaHzS/boz0pSouD2kjHAlU+W+kLODtn1v2OpT5DvCwKTJzCjng9/p/XFOANWYVaM0Q/8mxpy0i6NHbay5VX1qApGPWNmc2Hw4gvoiaPZ2wAKwxq0QbghjK8tl6x5YdnNl5muH5EfrCX7NgFlKFTm9xOXztT7SHFYBtTGu+cEFoLW9ht2s3hz2vcnbXh+nCS2OLdiMs3QIxnMgHDvDS9hfZs3VPwp6MTaZPWGLKUpsNkcdrV+4s4/zj5yhQBQBE7Agf//YJUR1Nl2YrRblyLbrq8oEDWBVWAg7QFQpkggM44oZapRVV+cBfKH6e2q01Cfv7udvcid7NKtdhxKeSPqk5q8RRwltlbybsWXuO7qmerPM1xpP10R8qPsix0qM4ZDmlpcKiSBUl7MBUgEf2o6wLAHAaTCRT0Cuel2koOwnAY65dXJm8xv6i/dQX1iVi7kYHuD3XnxMcw4xTaR7oDOdwqPhg4npf0T7e3/keXvfyoxPVUbpCgdzggFGMqkXX4g+AnS7wyh9XmbGXh5u6wmfY5tiWsLunrq/wZym70LgGVc+TPdMGBtJF/h6b4LPxLwjHp9f4Bv8c5ObszVzhINLf5m2L/NMJoTdT/ERsgvPjn/Iw/jCxNq/n6Qh15g4HROteWGpASvEVwlSmpFA8xOfjFxiZH2E8Ns7lyauE4+EN4E3ILe5OSJoHmkats8CXG9htI/qgy+u/CEkt2KOLL4MJ/g/w+x5dfO1fY8VI1vhL49NiO26xaSMZs8Y4DiRPyCs6QOCpwE9GaAT0JsA1SMPq8XxNCwpU+W9g9GtAxg6ZvcycNhzr8nZ8s9qT8sekMdhaIxLvA/HlSb8v2hztrO4cXs+ZsgkHfO1DBdPuvWLMu0CG8WZdhYGPlKIuFRyy/Dm1xqwSrWnGcALhOcCRItRGpF+07nWLu7PN25bxNmZVQLJOjZ7yzKtYvdJUaYwHQCERRI/G7fi97urunL7HfwO7DlznGoWJOQAAAABJRU5ErkJggg==\");\n}\n.smart-city_box.waste-bin-box .smart-city-content .technician_chart .chart-sec {\n  width: 100%;\n  display: flex;\n  margin-top: 0.85em;\n}\n.smart-city_box.waste-bin-box .smart-city-content .technician_chart .chart-sec .chart-issue {\n  display: inline-block;\n  width: 75%;\n  text-align: center;\n}\n.smart-city_box.waste-bin-box .smart-city-content .technician_chart .chart-sec .chart-pending {\n  display: inline-block;\n  width: 25%;\n  text-align: center;\n}\n.smart-city_box.waste-bin-box .smart-city-content .technician_chart .chart-sec h3 {\n  font-size: 1.7em;\n  padding: 0;\n  margin: 0;\n  color: #fff;\n}\n.smart-city_box.waste-bin-box .smart-city-content .technician_chart .chart-sec p {\n  font-size: 0.85em;\n  padding: 0;\n  margin: 0.3em 0 0 0;\n  color: #fff;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content {\n  margin-top: 0;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content {\n  display: flex;\n  width: 100%;\n  padding: 0.5em 2% 3em 2%;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status {\n  display: inline-block;\n  width: 33%;\n  text-align: center;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status .vahicle-icon {\n  display: inline-block;\n  width: 52px;\n  height: 52px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 75% auto;\n  margin-bottom: 0.5em;\n  background-color: rgba(255, 255, 255, 0.6117647059);\n  border-radius: 10px;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status .vahicle-icon.co2-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/co2-cloud.png);\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status .vahicle-icon.fuel-consumption-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/petrol-pump.png);\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status .vahicle-icon.s-consumption-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/money.png);\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status p {\n  font-size: 0.9em;\n  padding: 0em 0 0 0;\n  margin: 0;\n  color: #fff;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status h2 {\n  font-size: 1.8em;\n  padding: 0;\n  margin: 0.4em 0 0.2em 0;\n  color: #fff;\n}\n.smart-city_box.waste-collection-vehicle .smart-city-content .status-content .status span {\n  font-size: 0.75em;\n  color: #fff;\n}\n.smart-city_box.segregation_metrics-box .recharts-legend-wrapper {\n  width: 180px !important;\n  right: -145px !important;\n  top: 20px;\n  left: auto !important;\n}\n.smart-city_box.segregation_metrics-box .recharts-legend-wrapper ul {\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.smart-city_box.segregation_metrics-box .recharts-legend-wrapper ul li {\n  padding: 0.7em 0;\n  list-style: none;\n}\n.smart-city_box.segregation_metrics-box .recharts-legend-wrapper ul li .data_values {\n  margin-left: 10px;\n}\n.smart-city_box.segregation_metrics-box .recharts-legend-wrapper ul li em {\n  width: 10px;\n  height: 7px;\n  display: inline-block;\n  margin-right: 5px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n.smart-city_box.vehicle_summary-box .smart-city-content .technician_chart text {\n  color: #fff;\n  fill: #fff !important;\n}\n.smart-city_box.energy_consumption-box .technician_chart {\n  margin-top: 0em;\n}\n.smart-city_box.energy_consumption-box .technician_chart .recharts-wrapper {\n  fill: transparent;\n  font-size: 0.88em;\n}\n.smart-city_box.energy_consumption-box .technician_chart .recharts-layer text, .smart-city_box.energy_consumption-box .technician_chart .recharts-cartesian-axis-line text {\n  fill: #fff !important;\n}\n.smart-city_box.energy_consumption-box .technician_chart .recharts-cartesian-axis-ticks, .smart-city_box.energy_consumption-box .technician_chart .recharts-legend-item-text {\n  fill: #fff !important;\n  color: #fff;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content {\n  display: flex;\n  width: 100%;\n  padding: 0.5em 0% 0em 0%;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status {\n  display: inline-block;\n  width: 33%;\n  text-align: center;\n  background-color: rgba(0, 97, 67, 0.61);\n  border-radius: 10px;\n  margin-right: 3%;\n  padding-bottom: 1em;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status .vehicle-icon {\n  display: inline-block;\n  width: 75px;\n  height: 75px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 75% auto;\n  margin-bottom: 0.5em;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status .vehicle-icon.co2-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/co2-cloud.png);\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status .vehicle-icon.fuel-consumption-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/petrol-pump.png);\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status .vehicle-icon.s-consumption-icon {\n  background-image: url(https://static.iviva.com/images/Udhayimages/money.png);\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status p {\n  font-size: 0.85em;\n  padding: 0em 0 0 0;\n  margin: 0;\n  color: #fff;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status h2 {\n  font-size: 2.2em;\n  padding: 0;\n  margin: 0.4em 0 0.2em 0;\n  color: #fff;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status span {\n  font-size: 0.85em;\n  padding-bottom: 1em;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status span.red {\n  color: #ff0000;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status span.green {\n  color: #00e51a;\n}\n.smart-city_box.water_summary-box .smart-city-content .status-content .status:last-child {\n  margin-right: 0;\n}\n.smart-city_box.water_consumption-box .smart-city-content .status-content {\n  display: flex;\n  width: 100%;\n  padding: 0.5em 0% 0em 0%;\n  color: #ffffff;\n}\n.smart-city_box.water_consumption-box .smart-city-content .status-content .recharts-surface {\n  fill: #ffffff;\n  color: #ffffff;\n}\n.smart-city_box.water_consumption-box .smart-city-content .status-content .recharts-surface .recharts-layer {\n  fill: #ffffff;\n  color: #ffffff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content {\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .status {\n  display: inline-block;\n  width: 30%;\n  text-align: center;\n  background-color: rgba(0, 97, 67, 0.61);\n  border-radius: 2px;\n  padding: 2em;\n  margin: 1em 0em 0em 1em;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .status p {\n  font-size: 1em;\n  padding: 0em 0 0 0;\n  margin: 0;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .status h2 {\n  font-size: 2.2em;\n  padding: 0;\n  margin: 0.4em 0 0.2em 0;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .status span {\n  font-size: 0.85em;\n  padding-bottom: 1em;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-quality-status-box {\n  display: inherit;\n  width: 60%;\n  background-color: rgba(0, 97, 67, 0.61);\n  border-radius: 2px;\n  padding: 2em;\n  margin: 0em 1em 1em 1em;\n  text-align: center;\n  text-transform: uppercase;\n  align-items: center;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-quality-status-box p {\n  font-size: 1em;\n  padding: 0em 0 0 0;\n  margin: 0;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-quality-status-box h5 {\n  font-size: 2.3em;\n  padding: 0;\n  margin: 0.4em 0 0.2em 0;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars {\n  display: flex;\n  width: 60%;\n  margin-left: 20%;\n  margin-top: 2em;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar {\n  width: 50%;\n  height: 130px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar svg {\n  transform: rotate(-90deg);\n  width: 100%;\n  height: 100%;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar circle {\n  fill: transparent;\n  stroke-width: 8;\n  stroke: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar .progress-bar {\n  fill: transparent;\n  stroke-width: 10px;\n  stroke: rgb(0, 97, 67);\n  stroke-dasharray: 64;\n  stroke-dashoffset: 0;\n  transition: stroke-dashoffset 0.5s ease;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar .percentage {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 18px;\n  font-weight: bold;\n  color: #fff;\n}\n.smart-city_box.iaq-box .smart-city-content .status-content .air-quality-status-overall .air-progress-bars .semi-circle-progress-bar .value {\n  font-size: 13px;\n  font-weight: normal;\n  color: #fff;\n  position: absolute;\n  top: 58%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content {\n  display: inline-block;\n  width: 46%;\n  text-align: center;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status {\n  display: inline-block;\n  width: 28%;\n  text-align: center;\n  background-color: rgba(0, 97, 67, 0.61);\n  border-radius: 2px;\n  padding: 0.8em;\n  margin: 0.8em 0.8em 0em 0em;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status p {\n  font-size: 0.88em;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status span {\n  font-size: 0.75em;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status:nth-child(4n), .smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status:nth-child(7n) {\n  margin-right: 0em;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .status h2 {\n  font-size: 1.3em;\n  padding: 0;\n  margin: 0.2em 0 0.1em 0;\n  color: #fff;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content.loaction2-status-content {\n  margin-left: 0em;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .loaction-status-content .uxp-form-group .uxp-search-box-container .uxp-input-container .uxp-form-input {\n  width: 100%;\n  min-width: 100%;\n}\n.smart-city_box.compare-iaq .smart-city-content .status-content .versus {\n  display: inline-block;\n  width: 8%;\n  color: #fff;\n  font-size: 1.2em;\n  text-align: center;\n  vertical-align: top;\n  padding-top: 10em;\n}\n.smart-city_box .top_tabs {\n  float: right;\n  width: auto;\n}\n.smart-city_box .top_tabs .uxp-toggle-filter, .smart-city_box .top_tabs .toggle-filter {\n  background: transparent;\n  float: right;\n  margin: 0;\n  display: inline-flex;\n}\n.smart-city_box .top_tabs .uxp-toggle-filter .uxp-toggle-option, .smart-city_box .top_tabs .uxp-toggle-filter button, .smart-city_box .top_tabs .toggle-filter .uxp-toggle-option, .smart-city_box .top_tabs .toggle-filter button {\n  background: rgb(3, 7, 9);\n  color: #fff;\n  font-size: 1em;\n  text-transform: uppercase;\n  border-radius: 2px;\n  margin: auto 0px;\n  outline: none;\n  border: none;\n  padding: 8px 20px;\n  cursor: pointer;\n}\n.smart-city_box .top_tabs .uxp-toggle-filter .uxp-toggle-option.selected, .smart-city_box .top_tabs .uxp-toggle-filter .uxp-toggle-option.active, .smart-city_box .top_tabs .uxp-toggle-filter button.selected, .smart-city_box .top_tabs .uxp-toggle-filter button.active, .smart-city_box .top_tabs .toggle-filter .uxp-toggle-option.selected, .smart-city_box .top_tabs .toggle-filter .uxp-toggle-option.active, .smart-city_box .top_tabs .toggle-filter button.selected, .smart-city_box .top_tabs .toggle-filter button.active {\n  background: #18d6b8;\n  box-shadow: 0px 0px 12px 1px #02eec9;\n}\n.smart-city_box.cctv-overview-box .uxp-widget-title-bar {\n  width: 100%;\n}\n.smart-city_box.cctv-overview-box .uxp-toggle-filter {\n  background: transparent;\n}\n.smart-city_box.cctv-overview-box .uxp-toggle-filter .uxp-toggle-option {\n  background: rgb(3, 7, 9);\n  color: #fff;\n  font-size: 1em;\n  text-transform: uppercase;\n  border-radius: 2px;\n  margin: auto 0px;\n}\n.smart-city_box.cctv-overview-box .uxp-toggle-filter .uxp-toggle-option.selected {\n  background: #18d6b8;\n  box-shadow: 0px 0px 12px 1px #02eec9;\n}\n.smart-city_box.cctv-overview-box .smart-city-content {\n  width: 100%;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list {\n  display: inline-block;\n  width: 18%;\n  margin-right: 2%;\n  margin-bottom: 2em;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list:nth-child(5n) {\n  margin-right: 0;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list select {\n  background: transparent;\n  outline: none;\n  border: none;\n  color: #fff;\n  font-size: 1em;\n  margin: 10px 0px;\n  width: 100%;\n  text-transform: uppercase;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list select option {\n  padding: 8px 12px;\n  cursor: pointer;\n  background-color: rgba(0, 97, 67, 0.61);\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list select option:checked, .smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list select option:hover {\n  background-color: rgba(0, 97, 67, 0.61);\n  color: #fff;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .cctv-pict {\n  display: inline-block;\n  width: 100%;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .cctv-pict img {\n  height: 175px;\n  width: 100%;\n  border: 1px solid #012417;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .loction {\n  color: #fff;\n  font-size: 0.8em;\n  margin-top: 0.7em;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .loction-number {\n  color: #fff;\n  font-size: 0.8em;\n  margin-top: 0.7em;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .loction-status {\n  color: #fff;\n  padding: 4px 0;\n  width: 60px;\n  text-align: center;\n  margin-top: 0.7em;\n  font-size: 0.85em;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .loction-status.Red {\n  background: #cb0000;\n}\n.smart-city_box.cctv-overview-box .smart-city-content .status-content .cctv-list .loction-status.Green {\n  background: #00b36c;\n}\n.smart-city_box .chart-top {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1em;\n}\n.smart-city_box .chart-top .uxp-toggle-filter {\n  background: transparent;\n  display: inline-flex;\n  padding: 0;\n  width: 158px;\n}\n.smart-city_box .chart-top .uxp-toggle-filter .uxp-toggle-option {\n  color: #00c397;\n  box-shadow: none;\n  font-weight: bold;\n  font-size: 1em;\n  padding: 8px 6px;\n  border-radius: 0;\n}\n.smart-city_box .chart-top .uxp-toggle-filter .uxp-toggle-option.selected {\n  box-shadow: none;\n  background: transparent;\n  color: #ffffff;\n}\n.smart-city_box .chart-top .showcase-input {\n  display: flex;\n  width: 100% !important;\n}\n.smart-city_box .chart-top .showcase-input .uxp-search-box-container {\n  display: inline-block;\n  margin-right: 1.2em;\n  width: 22%;\n  min-width: 22%;\n}\n.smart-city_box .chart-top .showcase-input .uxp-search-box-container .uxp-input-container {\n  width: 70%;\n  min-width: 70%;\n}\n.smart-city_box .chart-top .showcase-input .uxp-search-box-container .uxp-input-container .uxp-form-input {\n  width: 100%;\n  font-size: 9px;\n  min-width: 140%;\n}\n.smart-city_box .chart-top .showcase-input .uxp-form-select {\n  display: inline-block;\n  margin-right: 1.5em;\n  width: 23%;\n  min-width: 23%;\n}\n.smart-city_box .chart-top .showcase-input .uxp-form-select .uxp-select-placeholder {\n  padding: 14px 9px;\n  font-size: 9px;\n}\n.smart-city_box .chart-top .showcase-input .uxp-date-time-picker-container {\n  display: inline-block;\n  margin-right: 1.5em;\n  width: 23%;\n  min-width: 23%;\n}\n.smart-city_box .chart-top .showcase-input .uxp-date-time-picker-container .placeholder .label {\n  padding: 10px 10px;\n}\n.smart-city_box .chart-top .showcase-input .uxp-date-time-picker-container .placeholder .value {\n  padding: 10px 0px;\n  min-width: 80px;\n  width: 80%;\n  font-size: 9px;\n}\n.smart-city_box .technician_chart {\n  margin-top: 0em;\n}\n.smart-city_box .technician_chart .recharts-wrapper {\n  fill: transparent;\n}\n.smart-city_box .technician_chart .recharts-layer text, .smart-city_box .technician_chart .recharts-cartesian-axis-line text {\n  fill: #fff !important;\n}\n.smart-city_box .technician_chart .recharts-cartesian-axis-ticks, .smart-city_box .technician_chart .recharts-legend-item-text {\n  fill: #fff !important;\n  color: #fff;\n}\n.smart-city_box .technician_chart .sub_title_bar {\n  width: 90%;\n  font-size: 1em;\n}\n\n.afterhours_inner_widget {\n  display: inline-block;\n  width: 100%;\n  margin-top: 0px;\n}\n.afterhours_inner_widget .afterhours_tree {\n  display: inline-flex;\n  width: 98%;\n  height: 100%;\n  position: relative;\n}\n.afterhours_inner_widget .afterhours_tree ul {\n  margin: 3px 0 0 0;\n  padding: 0;\n  display: inline-block;\n  width: 95%;\n  margin-left: 5%;\n  column-count: 3;\n}\n.afterhours_inner_widget .afterhours_tree ul li {\n  display: inline-block;\n  padding-left: 10px;\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1px 0;\n}\n.afterhours_inner_widget .afterhours_tree ul li:last-child::before {\n  display: none;\n}\n.afterhours_inner_widget .afterhours_tree ul li p {\n  font-size: 7px;\n  margin: 3px 0;\n  position: relative;\n  display: inline-block;\n  width: 95%;\n  color: #fff;\n}\n.afterhours_inner_widget .afterhours_tree ul li p::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  left: -20px;\n  width: 15px;\n  height: 7px;\n  text-align: center;\n  pointer-events: none;\n  border-radius: 2px;\n}\n.afterhours_inner_widget .afterhours_tree ul li p span {\n  width: 25%;\n  font-size: 6px;\n  float: right;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+1) p::before {\n  background-color: #82d963;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+2) p::before {\n  background-color: #f5ec00;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+3) p::before {\n  background-color: #d879e1;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+4) p::before {\n  background-color: #5ee3f4;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+5) p::before {\n  background-color: #7cbef6;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+6) p::before {\n  background-color: #9d7cf6;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+7) p::before {\n  background-color: #f79598;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+8) p::before {\n  background-color: #f6a67c;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+9) p::before {\n  background-color: #1057b4;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+10) p::before {\n  background-color: #0bccb2;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+11) p::before {\n  background-color: #650bcc;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+12) p::before {\n  background-color: #3bcc0b;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+13) p::before {\n  background-color: #0bccb2;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+14) p::before {\n  background-color: #0b42cc;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+15) p::before {\n  background-color: #cc0b58;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+16) p::before {\n  background-color: #e0a3e7;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+17) p::before {\n  background-color: #67d7e9;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+18) p::before {\n  background-color: #bfcc0b;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+19) p::before {\n  background-color: #0b78cc;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+20) p::before {\n  background-color: #cc0b78;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+21) p::before {\n  background-color: #f21456;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+22) p::before {\n  background-color: #650bcc;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+23) p::before {\n  background-color: #0b78cc;\n}\n.afterhours_inner_widget .afterhours_tree ul li:nth-child(n+24) p::before {\n  background-color: #06f51a;\n}\n.afterhours_inner_widget .color_value {\n  display: inline-block;\n  width: 100%;\n}\n.afterhours_inner_widget .color_value ul {\n  display: flex;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.afterhours_inner_widget .color_value ul li {\n  display: inline-block;\n  height: 3.4vh;\n  width: 10vw;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+1) {\n  background-color: #82d963;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+2) {\n  background-color: #f5ec00;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+3) {\n  background-color: #d879e1;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+4) {\n  background-color: #5ee3f4;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+5) {\n  background-color: #7cbef6;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+6) {\n  background-color: #9d7cf6;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+7) {\n  background-color: #f79598;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+8) {\n  background-color: #f6a67c;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+9) {\n  background-color: #1057b4;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+10) {\n  background-color: #0bccb2;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+11) {\n  background-color: #650bcc;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+12) {\n  background-color: #3bcc0b;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+13) {\n  background-color: #0bccb2;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+14) {\n  background-color: #0b42cc;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+15) {\n  background-color: #cc0b58;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+16) {\n  background-color: #e0a3e7;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+17) {\n  background-color: #67d7e9;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+18) {\n  background-color: #bfcc0b;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+19) {\n  background-color: #0b78cc;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+20) {\n  background-color: #cc0b78;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+21) {\n  background-color: #f21456;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+22) {\n  background-color: #650bcc;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+23) {\n  background-color: #0b78cc;\n}\n.afterhours_inner_widget .color_value ul li:nth-child(n+24) {\n  background-color: #06f51a;\n}\n\n.afterhours-arrow {\n  display: inline-block;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 17px;\n  height: 17px;\n  background-size: contain;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='23.445' height='23.445' viewBox='0 0 23.445 23.445'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23424242;opacity:0.333;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M23.445,11.722A11.722,11.722,0,1,1,11.722,0,11.72,11.72,0,0,1,23.445,11.722ZM9.643,6.239v5.483H6.291a.568.568,0,0,0-.4.969l5.431,5.4a.562.562,0,0,0,.8,0l5.431-5.4a.567.567,0,0,0-.4-.969H13.8V6.239a.569.569,0,0,0-.567-.567H10.21A.569.569,0,0,0,9.643,6.239Z' transform='translate(23.445) rotate(90)'/%3E%3C/svg%3E\");\n  left: 50%;\n  margin-left: -10px;\n  cursor: pointer;\n  z-index: 11;\n  position: relative;\n}\n.afterhours-arrow#topArrowAfterhours {\n  transform: rotate(90deg);\n  top: -10px;\n  margin-bottom: -11px;\n}\n.afterhours-arrow#downArrowAfterhours {\n  transform: rotate(270deg);\n}\n\n.progress-bar-container {\n  width: 100%;\n  background: linear-gradient(to right, #005936 1%, #005842 71%, #01af94 100%);\n}\n.progress-bar-container .progress-bar {\n  height: 17px;\n  background: linear-gradient(to right, #005842 1%, #005842 41%, #01af94 100%);\n}\n\n.top-nav-tabs {\n  position: absolute;\n  top: 1em;\n  left: 50%;\n  z-index: 2;\n  transform: translateX(-50%);\n  width: 100%;\n}\n.top-nav-tabs ul {\n  padding: 0;\n  margin: 0;\n  display: inline-flex;\n  width: 100%;\n}\n.top-nav-tabs ul li {\n  list-style: none;\n  width: 17%;\n  display: inline-block;\n  text-align: center;\n}\n.top-nav-tabs ul li a {\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n}\n.top-nav-tabs ul li a span {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n}\n.top-nav-tabs ul li a label {\n  color: #fff;\n  font-size: 0.8em;\n  width: 100%;\n  display: inline-block;\n  padding: 5px 0 0 0;\n  margin: 0;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.top-nav-tabs ul li.waste span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/trash-sock.png);\n}\n.top-nav-tabs ul li.energy span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/energy.png);\n}\n.top-nav-tabs ul li.streetlight span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/street-light.png);\n}\n.top-nav-tabs ul li.cctv span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/security-camera.png);\n}\n.top-nav-tabs ul li.water span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/waterdrop.png);\n}\n.top-nav-tabs ul li.pollution span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/factory.png);\n}\n.top-nav-tabs ul li.fire span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/fire.png);\n}\n.top-nav-tabs ul li.active label {\n  color: #0fd6a9;\n}\n.top-nav-tabs ul li.active.waste span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/trash-sock-active.png);\n}\n.top-nav-tabs ul li.active.energy span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/energy-active.png);\n}\n.top-nav-tabs ul li.active.streetlight span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/street-light-active.png);\n}\n.top-nav-tabs ul li.active.cctv span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/security-camera-active.png);\n}\n.top-nav-tabs ul li.active.water span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/drop-active.png);\n}\n.top-nav-tabs ul li.active.pollution span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/factory-active.png);\n}\n.top-nav-tabs ul li.active.fire span {\n  background-image: url(https://static.iviva.com/images/Udhayimages/fire-active.png);\n}\n\n.weather-list {\n  display: inline-block;\n  position: absolute;\n  top: 2.5em;\n  right: 2em;\n}\n.weather-list ul {\n  margin: 0;\n  padding: 0;\n  display: inline-flex;\n  background: rgba(0, 0, 0, 0.47);\n  width: auto;\n  border-radius: 5px;\n}\n.weather-list ul li {\n  list-style: none;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin: 8px 10px;\n}\n.weather-list ul li a {\n  cursor: pointer;\n}\n.weather-list ul li a img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.slider {\n  width: 2px;\n  height: 20vh;\n  position: absolute;\n  top: 1em;\n  right: 0em;\n  border-radius: 20px;\n  background: linear-gradient(100deg, rgba(0, 0, 0, 0.1) 0%, rgb(255, 255, 255) 35%, rgba(255, 255, 255, 0) 100%);\n  transform: rotate(180deg);\n  box-shadow: 0px 0px 1px #353535;\n}\n.slider::before {\n  background-image: url(https://static.iviva.com/images/Udhayimages/moon.png);\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  display: block;\n  background-size: 100% auto;\n  position: absolute;\n  bottom: -1.8em;\n  left: -4px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  transform: rotate(180deg);\n}\n.slider::after {\n  background-image: url(https://static.iviva.com/images/Udhayimages/sun.png);\n  content: \"\";\n  width: 20px;\n  height: 20px;\n  display: block;\n  background-size: 100% auto;\n  position: absolute;\n  top: -2.5em;\n  left: -8px;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.slider span {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  background-color: #fff;\n  border-radius: 50%;\n  cursor: pointer;\n  position: absolute;\n  left: -9px;\n  bottom: 0.7em;\n  box-shadow: 0px 0px 3px #353535;\n  transition: bottom 0.4s ease;\n}\n\n.slider.active span {\n  bottom: 16vh; /* Change the bottom property for the active class */\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/CCTV-overview.tsx":
/*!******************************************!*\
  !*** ./src/components/CCTV-overview.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const CCTVOverviewWidget = () => {
    const cctvData = [
        {
            id: 1,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg',
            selectOptions: ['Al Haram District, Cam 100', 'Al Haram District, Cam 101', 'Al Haram District, Cam 102'],
            selectedOption: 'Al Haram District, Cam 102', // The initially selected option
        },
        {
            id: 2,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg',
            selectOptions: ['Al Masjid An Nabawi, Cam 34', 'Al Masjid An Nabawi, Cam 35', 'Al Masjid An Nabawi, Cam 36'],
            selectedOption: 'Al Masjid An Nabawi, Cam 34', // The initially selected option
        },
        {
            id: 3,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg',
            selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
            selectedOption: 'Al Haram District, Cam 20', // The initially selected option
        },
        {
            id: 4,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg',
            selectOptions: ['Al Haram District, Cam 15', 'Al Haram District, Cam 16', 'Al Haram District, Cam 17'],
            selectedOption: 'Al Haram District, Cam 15', // The initially selected option 
        },
        {
            id: 5,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg',
            selectOptions: ['Al Haram District, Cam 46', 'Al Haram District, Cam 47', 'Al Haram District, Cam 48'],
            selectedOption: 'Al Haram District, Cam 46', // The initially selected option
        },
        {
            id: 6,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg',
            selectOptions: ['Al Masjid An Nabawi, Cam 26', 'Al Masjid An Nabawi, Cam 27', 'Al Masjid An Nabawi, Cam 27'],
            selectedOption: 'Al Masjid An Nabawi, Cam 26', // The initially selected option
        },
        {
            id: 7,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg',
            selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
            selectedOption: 'Al Haram District, Cam 20', // The initially selected option
        },
        {
            id: 8,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg',
            selectOptions: ['Al Haram District, Cam 57', 'Al Haram District, Cam 58', 'Al Haram District, Cam 59'],
            selectedOption: 'Al Haram District, Cam 57', // The initially selected option
        },
        {
            id: 9,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg',
            selectOptions: ['Al Masjid An Nabawi, Cam 5', 'Al Masjid An Nabawi, Cam 6', 'Al Masjid An Nabawi, Cam 7'],
            selectedOption: 'Al Masjid An Nabawi, Cam 5', // The initially selected option
        },
        {
            id: 10,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg',
            selectOptions: ['Al Haram District, Cam 74', 'Al Haram District, Cam 75', 'Al Haram District, Cam 76'],
            selectedOption: 'Al Haram District, Cam 74', // The initially selected option
        }
    ];
    const [data, setData] = (0, react_1.useState)(cctvData);
    const handleSelectChange = (itemId, newValue) => {
        // Update the selected option for the item with the given ID
        setData((prevData) => prevData.map((item) => item.id === itemId ? Object.assign(Object.assign({}, item), { selectedOption: newValue }) : item));
    };
    // const statusElements = cctvData.map((item, index) => ( 
    //   <div className='cctv-list' key={index}>
    //     <p>{item.airtype}</p>
    //     <div className='cctv-pict'>
    //         <img src={item.cctv_pict} alt='CCTV Picture' />
    //      </div>
    //   </div>
    // ));
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        setToggleFilterValue(value);
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box cctv-overview-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "CCTV", icon: 'https://static.iviva.com/images/Udhayimages/security-camera.png' },
            react_1.default.createElement(components_1.ToggleFilter, { options: [
                    { label: "OVERVIEW", value: "day" },
                    { label: "VIRTUAL PATROL", value: "week" }
                ], value: toggleFilterValue, onChange: handleFilterChange })),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' }, data.map((item) => (react_1.default.createElement("div", { className: 'cctv-list', key: item.id },
                react_1.default.createElement("select", { value: item.selectedOption, onChange: (e) => handleSelectChange(item.id, e.target.value) }, item.selectOptions.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option)))),
                react_1.default.createElement("div", { className: 'cctv-pict' },
                    react_1.default.createElement("img", { src: item.cctv_pict, alt: 'CCTV Picture' })))))))));
};
exports["default"] = CCTVOverviewWidget;


/***/ }),

/***/ "./src/components/IAQ-summary.tsx":
/*!****************************************!*\
  !*** ./src/components/IAQ-summary.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const IAQ_Summary = () => {
    const water_consumption_data1 = [
        {
            name: '1 Jan',
            consumption: 1950,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 2100,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 1800,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3908,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 1680,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 3800,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 2350,
            amt: 2100,
        },
    ];
    const water_consumption_data2 = [
        {
            name: '1 Jan',
            consumption: 4000,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 1398,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 1680,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3908,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 3800,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 1680,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 4900,
            amt: 2100,
        },
    ];
    const water_consumption_data3 = [
        {
            name: '1 Jan',
            consumption: 2354,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 3654,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 1257,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3580,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 3610,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 3254,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 2168,
            amt: 2100,
        },
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: water_consumption_data1,
        week: water_consumption_data2,
        day: water_consumption_data3,
    };
    const water_consumption_data = filterToDataMap[toggleFilterValue] || water_consumption_data1;
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box water_consumption-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "IAQ Summary", icon: 'https://static.iviva.com/images/Udhayimages/water-summary.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'chart-top' },
                react_1.default.createElement("div", { className: "sub_title_bar" }, "Mg/m3"),
                react_1.default.createElement(components_1.ToggleFilter, { options: [
                        { label: "7D", value: "day" },
                        { label: "1M", value: "week" },
                        { label: "1Y", value: "month" },
                    ], value: toggleFilterValue, onChange: handleFilterChange })),
            react_1.default.createElement("div", { className: 'status-content' },
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 280 },
                    react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 350, data: water_consumption_data, margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "0 0" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", tick: { fill: '#ffffff' } }),
                        react_1.default.createElement(recharts_1.YAxis, { tick: { fill: '#ffffff' } }),
                        react_1.default.createElement(recharts_1.Tooltip, null),
                        react_1.default.createElement(recharts_1.Legend, null),
                        react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "consumption", stroke: "#ffffff", activeDot: { r: 8 } })))))));
};
exports["default"] = IAQ_Summary;


/***/ }),

/***/ "./src/components/IAQ.tsx":
/*!********************************!*\
  !*** ./src/components/IAQ.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// interface IWidgetProps { 
//     percentage:number;
// } 
const IAQ_Widget = () => {
    const statusData = [
        {
            airtype: 'O2',
            value: 83.68,
            reading: 'Mg/m3'
        },
        {
            airtype: 'NO2',
            value: 0.36,
            reading: 'Mg/m3'
        },
        {
            airtype: 'SO2',
            value: 9.59,
            reading: 'Mg/m3'
        },
        {
            airtype: 'CO',
            value: 142.90,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM10',
            value: 29.75,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM2.5',
            value: 21.47,
            reading: 'Mg/m3'
        },
    ];
    const statusElements = statusData.map((item, index) => (react_1.default.createElement("div", { className: 'status', key: index },
        react_1.default.createElement("p", null, item.airtype),
        react_1.default.createElement("h2", null, item.value),
        react_1.default.createElement("span", null, item.reading))));
    const SemiCircleProgressBar = ({ percentage }) => {
        const [offset, setOffset] = (0, react_1.useState)(0);
        (0, react_1.useEffect)(() => {
            const progress = percentage;
            const offsetValue = (progress / 100) * 180; // 180 for a semi-circle
            setOffset(offsetValue);
        }, [percentage]);
        return (react_1.default.createElement("div", { className: "semi-circle-progress-bar" },
            react_1.default.createElement("svg", { width: "100", height: "100", viewBox: "0 0 100 100" },
                react_1.default.createElement("path", { className: "background", d: "M50 10 A40 40 0 0 1 50 90", fill: "none", stroke: "#ccc", strokeWidth: "8" }),
                react_1.default.createElement("path", { className: "progress-bar", d: "M50 10 A40 40 0 0 1 50 90", fill: "none", stroke: "#007bff", strokeWidth: "8", strokeDasharray: "180", strokeDashoffset: offset })),
            react_1.default.createElement("div", { className: "percentage" },
                percentage,
                "%"),
            react_1.default.createElement("div", { className: "value" }, "Humidity")));
    };
    const SemiCircleProgressBar1 = ({ percentage }) => {
        const [offset, setOffset] = (0, react_1.useState)(0);
        (0, react_1.useEffect)(() => {
            const progress = percentage;
            const offsetValue = (progress / 100) * 180; // 180 for a semi-circle
            setOffset(offsetValue);
        }, [percentage]);
        return (react_1.default.createElement("div", { className: "semi-circle-progress-bar" },
            react_1.default.createElement("svg", { width: "100", height: "100", viewBox: "0 0 100 100" },
                react_1.default.createElement("path", { className: "background", d: "M50 10 A40 40 0 0 1 50 90", fill: "none", stroke: "#ccc", strokeWidth: "8" }),
                react_1.default.createElement("path", { className: "progress-bar", d: "M50 10 A40 40 0 0 1 50 90", fill: "none", stroke: "#007bff", strokeWidth: "8", strokeDasharray: "180", strokeDashoffset: offset })),
            react_1.default.createElement("div", { className: "percentage" },
                percentage,
                "\u00B0C"),
            react_1.default.createElement("div", { className: "value" }, "Temperature")));
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box iaq-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "IAQ", icon: 'https://static.iviva.com/images/Udhayimages/wind-sign.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' },
                react_1.default.createElement("div", { className: 'air-quality-status-overall' },
                    react_1.default.createElement("div", { className: 'air-quality-status-box' },
                        react_1.default.createElement("p", null, "Air Quality Will be"),
                        react_1.default.createElement("h5", null, "Good")),
                    react_1.default.createElement("div", { className: 'air-progress-bars' },
                        react_1.default.createElement(SemiCircleProgressBar1, { percentage: 50 }),
                        react_1.default.createElement(SemiCircleProgressBar, { percentage: 50 }))),
                statusElements))));
};
exports["default"] = IAQ_Widget;


/***/ }),

/***/ "./src/components/WeatherIcons.tsx":
/*!*****************************************!*\
  !*** ./src/components/WeatherIcons.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const WeatherIcons = () => {
    var weather_list = [
        {
            id: 1,
            pict: "https://static.iviva.com/images/Udhayimages/snowflake.png"
        },
        {
            id: 2,
            pict: "https://static.iviva.com/images/Udhayimages/rainy.png"
        },
        {
            id: 3,
            pict: "https://static.iviva.com/images/Udhayimages/thunder.png"
        },
        {
            id: 4,
            pict: "https://static.iviva.com/images/Udhayimages/cloudy-day.png"
        },
        {
            id: 5,
            pict: "https://static.iviva.com/images/Udhayimages/cloud.png"
        },
        {
            id: 6,
            pict: "https://static.iviva.com/images/Udhayimages/sun.png"
        }
    ];
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box" },
        react_1.default.createElement("div", { className: 'weather-list' },
            react_1.default.createElement("ul", null, weather_list.map((item) => (react_1.default.createElement("li", { key: item.id },
                react_1.default.createElement("a", { href: '#' },
                    react_1.default.createElement("img", { src: item.pict })))))))));
};
exports["default"] = WeatherIcons;


/***/ }),

/***/ "./src/components/alert-work-order-summary.tsx":
/*!*****************************************************!*\
  !*** ./src/components/alert-work-order-summary.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const AlertWorkOrderSummary = () => {
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [inputValue, setInputValue] = react_1.default.useState("Work Order");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "8",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "9",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "10",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "11",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "12",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "13",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "14",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "15",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "16",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        }
    ];
    const alertworkordertData = [
        {
            id: '1',
            name: 'Attention',
            value: 24
        },
        {
            id: '2',
            name: 'Pending',
            value: 5
        },
        {
            id: '3',
            name: 'Resloved',
            value: 56
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Alert Work Order Summary", icon: 'https://static.iviva.com/images/Udhayimages/warning.png' }),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '800px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Alert Type", value: "op-1" },
                            { label: "Alert Type 1", value: "op-2" },
                            { label: "Alert Type 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 17, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] })),
        react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
            react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                react_1.default.createElement("div", { className: 'status-content' }, alertworkordertData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                    react_1.default.createElement("h3", null, item.value),
                    react_1.default.createElement("p", null, item.name)))))))));
};
exports["default"] = AlertWorkOrderSummary;


/***/ }),

/***/ "./src/components/alert_trends.tsx":
/*!*****************************************!*\
  !*** ./src/components/alert_trends.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const AlertTrends = () => {
    let [inputValue, setInputValue] = react_1.default.useState("Location");
    let [selected, setSelected] = react_1.default.useState("All Alert");
    let [date, setDate] = react_1.default.useState(new Date());
    let [date1, setDate1] = react_1.default.useState(new Date());
    const data = [
        {
            name: 'Traffic',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: 'Crowed',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: 'ANPR',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: 'Object Detetcted',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        }
    ];
    const style = {
        top: '50%',
        right: '-30px',
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };
    const totalValue = data.reduce((total, entry) => total + entry.uv, 0);
    const minAngle = 5;
    data.forEach(entry => {
        entry.uv = Math.max(entry.uv, (minAngle / 360) * totalValue);
    });
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box vehicle_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Alert Trends", icon: 'https://static.iviva.com/images/Udhayimages/alert-trends.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " All Alert" }),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date, onChange: (date) => setDate(date) }),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date1, onChange: (date1) => setDate1(date1) }))),
            react_1.default.createElement("div", { className: "technician_chart" },
                react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start', width: "100%", height: '250px' } },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                        react_1.default.createElement(recharts_1.RadialBarChart, { cx: "50%", cy: "50%", innerRadius: "10%", outerRadius: "100%", barSize: 10, data: data },
                            react_1.default.createElement(recharts_1.RadialBar, { label: { position: 'insideStart', fill: '#fff' }, background: true, dataKey: "uv" }),
                            react_1.default.createElement(recharts_1.Legend, { iconSize: 10, layout: "vertical", verticalAlign: "middle", wrapperStyle: style }))))))));
};
exports["default"] = AlertTrends;


/***/ }),

/***/ "./src/components/cctv-capture.tsx":
/*!*****************************************!*\
  !*** ./src/components/cctv-capture.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const CCTVWidget = () => {
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box cctv-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "CCTV" }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "body" }))));
};
exports["default"] = CCTVWidget;


/***/ }),

/***/ "./src/components/compare_IAQ.tsx":
/*!****************************************!*\
  !*** ./src/components/compare_IAQ.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// interface IWidgetProps { 
//     percentage:number;
// } 
const Comapre_IAQ = () => {
    const statusData1 = [
        {
            airtype: 'O2',
            value: 65.54,
            reading: 'Mg/m3'
        },
        {
            airtype: 'NO2',
            value: 0.12,
            reading: 'Mg/m3'
        },
        {
            airtype: 'SO2',
            value: 8.74,
            reading: 'Mg/m3'
        },
        {
            airtype: 'CO',
            value: 94.12,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM10',
            value: 15.33,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM2.5',
            value: 19.67,
            reading: 'Mg/m3'
        }
    ];
    const statusData2 = [
        {
            airtype: 'O2',
            value: 83.68,
            reading: 'Mg/m3'
        },
        {
            airtype: 'NO2',
            value: 0.36,
            reading: 'Mg/m3'
        },
        {
            airtype: 'SO2',
            value: 9.59,
            reading: 'Mg/m3'
        },
        {
            airtype: 'CO',
            value: 142.90,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM10',
            value: 29.75,
            reading: 'Mg/m3'
        },
        {
            airtype: 'PM2.5',
            value: 21.47,
            reading: 'Mg/m3'
        }
    ];
    const statusElementsLocation1 = statusData1.map((item, index) => (react_1.default.createElement("div", { className: 'status', key: index },
        react_1.default.createElement("p", null, item.airtype),
        react_1.default.createElement("h2", null, item.value),
        react_1.default.createElement("span", null, item.reading))));
    const statusElementsLocation2 = statusData2.map((item, index) => (react_1.default.createElement("div", { className: 'status', key: index },
        react_1.default.createElement("p", null, item.airtype),
        react_1.default.createElement("h2", null, item.value),
        react_1.default.createElement("span", null, item.reading))));
    const water_consumption_data1 = [
        {
            name: '1 Jan',
            consumption: 1950,
            value: 1674,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 2100,
            value: 1582,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 3011,
            value: 2015,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 2104,
            value: 2365,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 1680,
            value: 1245,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 3800,
            value: 3250,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 2350,
            value: 1254,
            amt: 2100,
        },
    ];
    const water_consumption_data2 = [
        {
            name: '1 Jan',
            consumption: 2148,
            value: 1582,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 1398,
            value: 3201,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 1680,
            value: 2014,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 2564,
            value: 1582,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 4800,
            value: 2031,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 1680,
            value: 1562,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 2021,
            value: 2105,
            amt: 2100,
        },
    ];
    const water_consumption_data3 = [
        {
            name: '1 Jan',
            consumption: 1354,
            value: 1235,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 3625,
            value: 1352,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 2045,
            value: 2015,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 1358,
            value: 1278,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 1563,
            value: 1468,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 1025,
            value: 1653,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 1325,
            value: 1205,
            amt: 2100,
        },
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: water_consumption_data1,
        week: water_consumption_data2,
        day: water_consumption_data3,
    };
    const water_consumption_data = filterToDataMap[toggleFilterValue] || water_consumption_data1;
    let [inputValue, setInputValue] = react_1.default.useState("Location");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box iaq-box compare-iaq" },
        react_1.default.createElement(components_1.TitleBar, { title: "Compare IAQ", icon: 'https://static.iviva.com/images/Udhayimages/balance.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' },
                react_1.default.createElement("div", { className: 'loaction-status-content loaction1-status-content' },
                    react_1.default.createElement(components_1.FormField, null,
                        react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, placeholder: 'Location' })),
                    statusElementsLocation1),
                react_1.default.createElement("div", { className: 'versus' }, "VS"),
                react_1.default.createElement("div", { className: 'loaction-status-content loaction2-status-content' },
                    react_1.default.createElement(components_1.FormField, null,
                        react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, placeholder: 'Location' })),
                    statusElementsLocation2)),
            react_1.default.createElement("div", { className: "smart-city-content" },
                react_1.default.createElement("div", { className: 'chart-top' },
                    react_1.default.createElement("div", { className: "sub_title_bar" }, "Mg/m3"),
                    react_1.default.createElement(components_1.ToggleFilter, { options: [
                            { label: "7D", value: "day" },
                            { label: "1M", value: "week" },
                            { label: "1Y", value: "month" },
                        ], value: toggleFilterValue, onChange: handleFilterChange })),
                react_1.default.createElement("div", { className: 'status-content' },
                    react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 250 },
                        react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 350, data: water_consumption_data, margin: {
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            } },
                            react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "0 0" }),
                            react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", tick: { fill: '#ffffff' } }),
                            react_1.default.createElement(recharts_1.YAxis, { tick: { fill: '#ffffff' } }),
                            react_1.default.createElement(recharts_1.Tooltip, null),
                            react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "consumption", stroke: "#2756ff", activeDot: { r: 8 } }),
                            react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "value", stroke: "#ff0", activeDot: { r: 8 } }))))))));
};
exports["default"] = Comapre_IAQ;


/***/ }),

/***/ "./src/components/counts.tsx":
/*!***********************************!*\
  !*** ./src/components/counts.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const recharts_2 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const CountsWidget = () => {
    let [inputValue, setInputValue] = react_1.default.useState("Location");
    let [selected, setSelected] = react_1.default.useState("Vehicle");
    let [date, setDate] = react_1.default.useState(new Date());
    let [date1, setDate1] = react_1.default.useState(new Date());
    var countsData = [
        {
            vehicle: 'Car',
            value: 120,
            fullValue: 150,
        },
        {
            vehicle: 'Taxi',
            value: 98,
            fullValue: 150,
        },
        {
            vehicle: 'Bus',
            value: 86,
            fullValue: 150,
        },
        {
            vehicle: 'Truck',
            value: 99,
            fullValue: 150,
        },
        {
            vehicle: 'Motorcycle',
            value: 85,
            fullValue: 150,
        },
        {
            vehicle: 'Van',
            value: 65,
            fullValue: 150,
        },
    ];
    const MyResponsiveRadar = ({}) => (react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
        react_1.default.createElement(recharts_2.RadarChart, { cx: "50%", cy: "50%", outerRadius: "80%", data: countsData },
            react_1.default.createElement(recharts_2.PolarGrid, null),
            react_1.default.createElement(recharts_2.PolarAngleAxis, { dataKey: "vehicle" }),
            react_1.default.createElement(recharts_2.PolarRadiusAxis, null),
            react_1.default.createElement(recharts_2.Radar, { name: "Value", dataKey: "value", stroke: "#005936", fill: "#00a68a", fillOpacity: 0.6 },
                react_1.default.createElement(recharts_2.LabelList, { dataKey: "value", position: "top" })),
            react_1.default.createElement(recharts_1.Tooltip, null))));
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box vehicle_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Counts", icon: 'https://static.iviva.com/images/Car_widget/count.svg' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Vehicle", value: "op-1" },
                            { label: "Vehicle 1", value: "op-2" },
                            { label: "Vehicle 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " Vehicle" }),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date, onChange: (date) => setDate(date) }),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date1, onChange: (date1) => setDate1(date1) }))),
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 270 } },
                react_1.default.createElement(MyResponsiveRadar, null)))));
};
exports["default"] = CountsWidget;


/***/ }),

/***/ "./src/components/emergency-work-oder-summary.tsx":
/*!********************************************************!*\
  !*** ./src/components/emergency-work-oder-summary.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const EmergencyWorkOrderSummary = () => {
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [inputValue, setInputValue] = react_1.default.useState("Work Order");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "8",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "9",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "10",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "11",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "12",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "13",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "14",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "15",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "16",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        }
    ];
    const alertworkordertData = [
        {
            id: '1',
            name: 'Attention',
            value: 8
        },
        {
            id: '2',
            name: 'Pending',
            value: 5
        },
        {
            id: '3',
            name: 'Resloved',
            value: 21
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    const [toggleFilterValueday, setToggleFilterValueday] = react_1.default.useState("1");
    const handleFilterChangeday = (value) => {
        setToggleFilterValueday(value);
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Emergency Work Order", icon: 'https://static.iviva.com/images/Udhayimages/emergency.png' },
            react_1.default.createElement("div", { className: 'top_tabs', style: { width: '100%' } },
                react_1.default.createElement(components_1.ToggleFilter, { options: [
                        { label: "2023", value: "1" },
                        { label: "1D", value: "2" }
                    ], value: toggleFilterValueday, onChange: handleFilterChangeday }))),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '800px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Alert Type", value: "op-1" },
                            { label: "Alert Type 1", value: "op-2" },
                            { label: "Alert Type 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 17, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] })),
        react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
            react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                react_1.default.createElement("div", { className: 'status-content' }, alertworkordertData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                    react_1.default.createElement("h3", null, item.value),
                    react_1.default.createElement("p", null, item.name)))))))));
};
exports["default"] = EmergencyWorkOrderSummary;


/***/ }),

/***/ "./src/components/energy_consumption.tsx":
/*!***********************************************!*\
  !*** ./src/components/energy_consumption.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// import './styles.scss';  
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const EnergyConsumption = (props) => {
    const energyConsumptionData1 = [
        {
            name: '1 Jan',
            power: 180000,
            solar: 250000,
            amt: 2400,
        },
        {
            name: '2 Jan',
            power: 300000,
            solar: 150000,
            amt: 2210,
        },
        {
            name: '3 Jan',
            power: 180000,
            solar: 420000,
            amt: 2290,
        },
        {
            name: '4 Jan',
            power: 320000,
            solar: 340000,
            amt: 2000,
        },
        {
            name: '5 Jan',
            power: 190000,
            solar: 670000,
            amt: 2181,
        },
        {
            name: '6 Jan',
            power: 350000,
            solar: 270000,
            amt: 2500,
        },
        {
            name: '7 Jan',
            power: 100000,
            solar: 100000,
            amt: 2100,
        },
    ];
    const energyConsumptionData2 = [
        {
            name: '1 Jan',
            power: 180000,
            solar: 250000,
            amt: 25000,
        },
        {
            name: '2 Jan',
            power: 250000,
            solar: 310000,
            amt: 13610,
        },
        {
            name: '3 Jan',
            power: 140000,
            solar: 220000,
            amt: 2290,
        },
        {
            name: '4 Jan',
            power: 320000,
            solar: 340000,
            amt: 2000,
        },
        {
            name: '5 Jan',
            power: 360000,
            solar: 780000,
            amt: 2181,
        },
        {
            name: '6 Jan',
            power: 520000,
            solar: 270000,
            amt: 2500,
        },
        {
            name: '7 Jan',
            power: 100000,
            solar: 200000,
            amt: 2100,
        },
    ];
    const energyConsumptionData3 = [
        {
            name: '1 Jan',
            power: 350000,
            solar: 100000,
            amt: 25000,
        },
        {
            name: '2 Jan',
            power: 180000,
            solar: 240000,
            amt: 13610,
        },
        {
            name: '3 Jan',
            power: 140000,
            solar: 220000,
            amt: 2290,
        },
        {
            name: '4 Jan',
            power: 320000,
            solar: 340000,
            amt: 2000,
        },
        {
            name: '5 Jan',
            power: 400000,
            solar: 160000,
            amt: 2181,
        },
        {
            name: '6 Jan',
            power: 340000,
            solar: 200000,
            amt: 2500,
        },
        {
            name: '7 Jan',
            power: 150000,
            solar: 340000,
            amt: 2100,
        },
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: energyConsumptionData1,
        week: energyConsumptionData2,
        day: energyConsumptionData3,
    };
    const selectedData = filterToDataMap[toggleFilterValue] || energyConsumptionData1;
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box energy_consumption-box" },
        react_1.default.createElement(components_1.TitleBar, { icon: 'https://static.iviva.com/images/Udhayimages/energy.png', title: "Energy Consumption" }, " "),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 270 } },
                react_1.default.createElement("div", { className: 'chart-top' },
                    react_1.default.createElement("div", { className: "sub_title_bar" }, "Total kW"),
                    react_1.default.createElement(components_1.ToggleFilter, { options: [
                            { label: "7D", value: "day" },
                            { label: "1M", value: "week" },
                            { label: "1Y", value: "month" },
                        ], value: toggleFilterValue, onChange: handleFilterChange })),
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                    react_1.default.createElement(recharts_1.AreaChart, { width: 400, height: 300, data: selectedData, margin: {
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 30,
                        } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                        react_1.default.createElement(recharts_1.YAxis, null),
                        react_1.default.createElement(recharts_1.Tooltip, null),
                        react_1.default.createElement(recharts_1.Legend, null),
                        react_1.default.createElement(recharts_1.Area, { type: "monotone", dataKey: "power", stackId: "1", stroke: "#001912", fill: "url(#gradient1)" }),
                        react_1.default.createElement(recharts_1.Area, { type: "monotone", dataKey: "solar", stackId: "1", stroke: "#79dccc", fill: "url(#gradient2)" }),
                        react_1.default.createElement("defs", null,
                            react_1.default.createElement("linearGradient", { id: "gradient1", x1: "0", y1: "0", x2: "0", y2: "1" },
                                react_1.default.createElement("stop", { offset: "5%", stopColor: "#00516a", stopOpacity: 0.8 }),
                                react_1.default.createElement("stop", { offset: "95%", stopColor: "#001912", stopOpacity: 0.2 })),
                            react_1.default.createElement("linearGradient", { id: "gradient2", x1: "0", y1: "0", x2: "0", y2: "1" },
                                react_1.default.createElement("stop", { offset: "5%", stopColor: "#008b74", stopOpacity: 0.8 }),
                                react_1.default.createElement("stop", { offset: "95%", stopColor: "#79dccc", stopOpacity: 0.2 })))))))));
};
exports["default"] = EnergyConsumption;


/***/ }),

/***/ "./src/components/lightStatusChart.tsx":
/*!*********************************************!*\
  !*** ./src/components/lightStatusChart.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const data1 = [
    { name: '1 Jan', value: 18000 },
    { name: '2 Jan', value: 50000 },
    { name: '3 Jan', value: 12035 },
    { name: '4 Jan', value: 30040 },
    { name: '5 Jan', value: 65000 },
    { name: '6 Jan', value: 35035 },
    { name: '7 Jan', value: 13500 },
];
const data2 = [
    { name: '1 Jan', value: 32000 },
    { name: '2 Jan', value: 12000 },
    { name: '3 Jan', value: 32035 },
    { name: '4 Jan', value: 30040 },
    { name: '5 Jan', value: 32000 },
    { name: '6 Jan', value: 10035 },
    { name: '7 Jan', value: 37500 },
];
const data3 = [
    { name: '1 Jan', value: 20000 },
    { name: '2 Jan', value: 41000 },
    { name: '3 Jan', value: 35035 },
    { name: '4 Jan', value: 1040 },
    { name: '5 Jan', value: 25000 },
    { name: '6 Jan', value: 30035 },
    { name: '7 Jan', value: 500 },
];
const CustomBar = ({ x, y, width, height, payload, }) => {
    const max = Math.max(...data1
        .concat(data2)
        .concat(data3)
        .map((item) => item.value));
    const percentage = (payload.value / max) * 100;
    return (react_1.default.createElement("g", null,
        react_1.default.createElement("defs", null,
            react_1.default.createElement("linearGradient", { id: `gradient-${percentage}`, x1: "0", y1: "0", x2: "0", y2: "1" },
                react_1.default.createElement("stop", { offset: "0%", stopColor: "#01af94" }),
                react_1.default.createElement("stop", { offset: `${percentage}%`, stopColor: "#005842" }),
                react_1.default.createElement("stop", { offset: "100%", stopColor: "#005936" }))),
        react_1.default.createElement("rect", { x: x, y: y, width: width, height: height, fill: `url(#gradient-${percentage})` })));
};
const StreetLightStatusChart = () => {
    const [toggleFilterValue, setToggleFilterValue] = (0, react_1.useState)('day');
    const handleFilterChange = (value) => {
        console.log('Selected Filter Value:', value);
        setToggleFilterValue(value);
    };
    const getDataByFilter = () => {
        switch (toggleFilterValue) {
            case 'week':
                return data2;
            case 'month':
                return data1;
            case 'day':
            default:
                return data3;
        }
    };
    return (react_1.default.createElement("div", { className: "smart-city-content" },
        react_1.default.createElement("div", { className: "technician_chart", style: { height: 250 } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement("div", { className: "sub_title_bar" }, "Total Revenue (Riyal)"),
                react_1.default.createElement(components_1.ToggleFilter, { options: [
                        { label: '7D', value: 'day' },
                        { label: '1M', value: 'week' },
                        { label: '1Y', value: 'month' },
                    ], value: toggleFilterValue, onChange: handleFilterChange })),
            react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                react_1.default.createElement(recharts_1.BarChart, { width: 700, height: 400, data: getDataByFilter(), margin: { top: 10, right: 10, left: 10, bottom: 5 } },
                    react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "0 0" }),
                    react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                    react_1.default.createElement(recharts_1.YAxis, null),
                    react_1.default.createElement(recharts_1.Tooltip, null),
                    react_1.default.createElement(recharts_1.Bar, { dataKey: "value", barSize: 20, shape: react_1.default.createElement(CustomBar, { x: 0, y: 0, width: 0, height: 0, payload: {
                                value: 0
                            } }) }))))));
};
exports["default"] = StreetLightStatusChart;


/***/ }),

/***/ "./src/components/maintenance-work-order-summary.tsx":
/*!***********************************************************!*\
  !*** ./src/components/maintenance-work-order-summary.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Maintenance_Work_Order_Summary = () => {
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [inputValue, setInputValue] = react_1.default.useState("Work Order");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        }
    ];
    const streetLightData = [
        {
            id: '1',
            name: 'Attention',
            value: 12
        },
        {
            id: '2',
            name: 'Pending',
            value: 2
        },
        {
            id: '3',
            name: 'Resloved',
            value: 12
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Maintenance Work Order Summary", icon: 'https://static.iviva.com/images/Udhayimages/warning.png' }),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '350px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Alert Type", value: "op-1" },
                            { label: "Alert Type 1", value: "op-2" },
                            { label: "Alert Type 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 10, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] })),
        react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
            react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                react_1.default.createElement("div", { className: 'status-content' }, streetLightData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                    react_1.default.createElement("h3", null, item.value),
                    react_1.default.createElement("p", null, item.name)))))))));
};
exports["default"] = Maintenance_Work_Order_Summary;


/***/ }),

/***/ "./src/components/maintenance-work-order-trend.tsx":
/*!*********************************************************!*\
  !*** ./src/components/maintenance-work-order-trend.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Maintenance_WorkOrder_Trend = () => {
    // const summarydata1 = [
    //     {
    //         name: 'Room 1', Aug_duration_meeting: 8, Total_hours_booked: 16, Total_hours_accupied: 17, amt: 25,
    //     },
    //     {
    //         name: 'Room 2', Aug_duration_meeting: 19, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 3', Aug_duration_meeting: 7, Total_hours_booked: 11, Total_hours_accupied: 19, amt: 25,
    //     },
    //     {
    //         name: 'Room 4', Aug_duration_meeting: 10, Total_hours_booked: 5, Total_hours_accupied: 10, amt: 25,
    //     },
    //     {
    //         name: 'Room 5', Aug_duration_meeting: 18, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
    //     },
    //     {
    //         name: 'Room 6', Aug_duration_meeting: 21, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 7', Aug_duration_meeting: 12, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
    //     },
    //     {
    //         name: 'Room 8', Aug_duration_meeting: 7, Total_hours_booked: 15, Total_hours_accupied: 12, amt: 25,
    //     } 
    // ];
    // const summarydata2 = [
    //     {
    //         name: 'Room 1', Aug_duration_meeting: 18, Total_hours_booked: 10, Total_hours_accupied: 17, amt: 25,
    //     },
    //     {
    //         name: 'Room 2', Aug_duration_meeting: 19, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 3', Aug_duration_meeting: 7, Total_hours_booked: 11, Total_hours_accupied: 12, amt: 25,
    //     },
    //     {
    //         name: 'Room 4', Aug_duration_meeting: 20, Total_hours_booked: 15, Total_hours_accupied: 10, amt: 25,
    //     },
    //     {
    //         name: 'Room 5', Aug_duration_meeting: 16, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
    //     },
    //     {
    //         name: 'Room 6', Aug_duration_meeting: 21, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 7', Aug_duration_meeting: 12, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
    //     },
    //     {
    //         name: 'Room 8', Aug_duration_meeting: 10, Total_hours_booked: 15, Total_hours_accupied: 12, amt: 25,
    //     } 
    // ];
    // const summarydata3 = [
    //     {
    //         name: 'Room 1', Aug_duration_meeting: 15, Total_hours_booked: 16, Total_hours_accupied: 17, amt: 25,
    //     },
    //     {
    //         name: 'Room 2', Aug_duration_meeting: 20, Total_hours_booked: 20, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 3', Aug_duration_meeting: 8, Total_hours_booked: 11, Total_hours_accupied: 19, amt: 25,
    //     },
    //     {
    //         name: 'Room 4', Aug_duration_meeting: 10, Total_hours_booked: 5, Total_hours_accupied: 10, amt: 25,
    //     },
    //     {
    //         name: 'Room 5', Aug_duration_meeting: 24, Total_hours_booked: 22, Total_hours_accupied: 20, amt: 25,
    //     },
    //     {
    //         name: 'Room 6', Aug_duration_meeting: 18, Total_hours_booked: 16, Total_hours_accupied: 11, amt: 25,
    //     },
    //     {
    //         name: 'Room 7', Aug_duration_meeting: 10, Total_hours_booked: 21, Total_hours_accupied: 19, amt: 25,
    //     },
    //     {
    //         name: 'Room 8', Aug_duration_meeting: 17, Total_hours_booked: 15, Total_hours_accupied: 15, amt: 25,
    //     } 
    // ];
    const summarydata1 = [
        {
            name: '25 AUG', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 156, Total_hours_booked: 320, Total_hours_accupied: 11, amt: 654,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 235, Total_hours_booked: 124, Total_hours_accupied: 19, amt: 365,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 163, Total_hours_booked: 215, Total_hours_accupied: 236, amt: 654,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 169, Total_hours_booked: 322, Total_hours_accupied: 125, amt: 221,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 321, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 625,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 325,
        }
    ];
    const summarydata2 = [
        {
            name: '25 AUG', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 365, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 250, Total_hours_booked: 320, Total_hours_accupied: 256, amt: 654,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 125, Total_hours_booked: 252, Total_hours_accupied: 165, amt: 654,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 152, Total_hours_booked: 653, Total_hours_accupied: 156, amt: 654,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 124, Total_hours_booked: 322, Total_hours_accupied: 354, amt: 221,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 254, Total_hours_booked: 745, Total_hours_accupied: 120, amt: 365,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 754,
        }
    ];
    const summarydata3 = [
        {
            name: '25 AUG', Aug_duration_meeting: 325, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 257, Total_hours_booked: 320, Total_hours_accupied: 136, amt: 152,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 124, Total_hours_booked: 580, Total_hours_accupied: 139, amt: 625,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 632, Total_hours_booked: 362, Total_hours_accupied: 165, amt: 652,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 254, Total_hours_booked: 425, Total_hours_accupied: 125, amt: 165,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 125, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 320,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 852,
        }
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: summarydata1,
        week: summarydata2,
        day: summarydata3,
    };
    const selectedData = filterToDataMap[toggleFilterValue] || summarydata1;
    const [toggleFilterValueday, setToggleFilterValueday] = react_1.default.useState("1");
    const handleFilterChangeday = (value) => {
        setToggleFilterValueday(value);
    };
    return (
    //     <WidgetWrapper className="smart-city_box energy_consumption-box">  
    //         <TitleBar title="Maintenance Work Order Trend" icon='https://static.iviva.com/images/Udhayimages/recycling-symbol.png'></TitleBar> 
    //     <div className="smart-city-content">  
    //         <div className="technician_chart" style={{ height: 300 }}>   
    //        <div  className='chart-top'>
    //        <div className="sub_title_bar">Total kW</div>  
    //             <ToggleFilter 
    //                 options={[
    //                     { label: "7D", value: "day" },
    //                     { label: "1M", value: "week" }, 
    //                     { label: "1Y", value: "month" },
    //                 ]}
    //                 value={toggleFilterValue}
    //                 onChange={handleFilterChange}
    //             />
    //         </div>
    //              <ResponsiveContainer width="100%" height="100%">  
    //                 <BarChart
    //                     width={500}
    //                     height={200}
    //                     data={selectedData}
    //                     margin={{
    //                         top: 2, right: 0, left: 0, bottom: 2,
    //                     }}>
    //                     <CartesianGrid strokeDasharray="0 0" />
    //                     <XAxis dataKey="name" />
    //                     <YAxis orientation="left" />
    //                     <Tooltip />
    //                     <Bar barSize={20} dataKey="Aug_duration_meeting" fill="#025639" />
    //                     <Bar barSize={25} dataKey="Total_hours_booked" fill="#0c7652" />
    //                     <Bar barSize={25} dataKey="Total_hours_accupied" fill="#0c2e23" />
    //                 </BarChart> 
    //         </ResponsiveContainer> 
    //         </div>  
    //     </div>
    // </WidgetWrapper>
    react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box energy_consumption-box" },
        react_1.default.createElement("div", { className: 'top_tabs' },
            react_1.default.createElement(components_1.ToggleFilter, { options: [
                    { label: "2023", value: "1" },
                    { label: "1D", value: "2" }
                ], value: toggleFilterValueday, onChange: handleFilterChangeday })),
        react_1.default.createElement(components_1.TitleBar, { title: "Maintenance Work Order Trend", icon: 'https://static.iviva.com/images/Udhayimages/recycling-symbol.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 270 } },
                react_1.default.createElement("div", { className: 'chart-top' },
                    react_1.default.createElement("div", { className: "sub_title_bar" }, "Total Waste (Tons)"),
                    react_1.default.createElement(components_1.ToggleFilter, { options: [
                            { label: "7D", value: "day" },
                            { label: "1M", value: "week" },
                            { label: "1Y", value: "month" },
                        ], value: toggleFilterValue, onChange: handleFilterChange })),
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                    react_1.default.createElement(recharts_1.BarChart, { width: 500, height: 200, data: selectedData, margin: {
                            top: 2, right: 0, left: 0, bottom: 2,
                        } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "0 0" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                        react_1.default.createElement(recharts_1.YAxis, { orientation: "left" }),
                        react_1.default.createElement(recharts_1.Tooltip, null),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 20, dataKey: "Aug_duration_meeting", fill: "#025639" }),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 25, dataKey: "Total_hours_booked", fill: "#0c7652" }),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 25, dataKey: "Total_hours_accupied", fill: "#0c2e23" })))))));
};
exports["default"] = Maintenance_WorkOrder_Trend;


/***/ }),

/***/ "./src/components/maintenance-work-order.tsx":
/*!***************************************************!*\
  !*** ./src/components/maintenance-work-order.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const MaintenanceWorkOrderSummary = () => {
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Maintenance Work Order Summary" }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 10, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] }))));
};
exports["default"] = MaintenanceWorkOrderSummary;


/***/ }),

/***/ "./src/components/map-change-mode.tsx":
/*!********************************************!*\
  !*** ./src/components/map-change-mode.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const MapChangeMode = () => {
    const mapContainerRef = (0, react_1.useRef)(null);
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (react_1.default.createElement("div", { className: `map-container ${isDarkMode ? 'dark-mode' : 'light-mode'}` },
        react_1.default.createElement("div", { className: `slider ${isDarkMode ? 'active' : ''}` },
            react_1.default.createElement("span", { onClick: toggleDarkMode }))));
};
exports["default"] = MapChangeMode;


/***/ }),

/***/ "./src/components/segregation-metrics.tsx":
/*!************************************************!*\
  !*** ./src/components/segregation-metrics.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const Segregation_MetricsChart = () => {
    var data = [
        {
            "id": "plastic",
            "label": "Plastic",
            "value": 3273,
            "color": "rgb(106 186 53)"
        },
        {
            "id": "paper",
            "label": "Paper",
            "value": 2947,
            "color": "rgb(2 108 92)"
        },
        {
            "id": "metal",
            "label": "Metal",
            "value": 2838,
            "color": "rgb(50 161 152)"
        },
        {
            "id": "food_waste",
            "label": "Food Waste",
            "value": 3875,
            "color": "rgb(99 245 227)"
        },
        {
            "id": "glass",
            "label": "Glass",
            "value": 1945,
            "color": "rgb(179 238 142)"
        }
    ];
    const MyResponsivePie = ({}) => (
    // <ResponsivePie
    //     data={data}
    //     margin={{ top: 0, right: 40, bottom: 60, left: 40 }}
    //     innerRadius={0.4}
    //     padAngle={0.5}
    //     cornerRadius={0}
    //     activeOuterRadiusOffset={8}
    //     borderWidth={1}
    //     borderColor={{
    //         from: 'color',
    //         modifiers: [
    //             [
    //                 'darker',
    //                 0.2
    //             ]
    //         ]
    //     }}
    //     arcLinkLabelsSkipAngle={10}
    //     arcLinkLabelsTextColor="#ffffff"
    //     arcLinkLabelsThickness={2}
    //     arcLinkLabelsColor={{ from: 'color' }}
    //     arcLabelsSkipAngle={10}
    //     arcLabelsTextColor={{
    //         from: 'color',
    //         modifiers: [
    //             [
    //                 'darker',
    //                 1
    //             ]
    //         ]
    //     }}
    //     legends={[
    //         {
    //             anchor: 'bottom',
    //             direction: 'row',
    //             justify: false,
    //             translateX: 0,
    //             translateY: 56,
    //             itemsSpacing: 0,
    //             itemWidth: 100,
    //             itemHeight: 15,
    //             itemTextColor: '#fff',
    //             itemDirection: 'left-to-right',
    //             itemOpacity: 1,
    //             symbolSize: 18,
    //             symbolShape: 'circle',
    //             effects: [
    //                 {
    //                     on: 'hover',
    //                     style: {
    //                         itemTextColor: '#fff'
    //                     }
    //                 }
    //             ]
    //         }
    //     ]}
    // />
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start' } },
        react_1.default.createElement(recharts_1.ResponsiveContainer, { width: 300, height: 250 },
            react_1.default.createElement(recharts_1.PieChart, null,
                react_1.default.createElement(recharts_1.Pie, { data: data, dataKey: "value", nameKey: "label", innerRadius: "60%", outerRadius: "80%", paddingAngle: 0, startAngle: 90, endAngle: -270 }, data.map((entry, index) => (react_1.default.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: entry.color })))),
                react_1.default.createElement(recharts_1.Legend, { verticalAlign: "bottom", height: 36, content: (props) => {
                        const { payload } = props;
                        return (react_1.default.createElement("ul", null, data.map((entry, index) => (react_1.default.createElement("li", { key: `legend-${index}`, style: { color: entry.color } },
                            react_1.default.createElement("em", { style: { background: entry.color } }),
                            react_1.default.createElement("span", null, `${entry.label}:`),
                            react_1.default.createElement("span", { className: "data_values" }, ` ${entry.value} Tons`))))));
                    } })))));
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box segregation_metrics-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Waste Segregation Metrics", icon: 'https://static.iviva.com/images/Udhayimages/waste-seg-matrix.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 200 } },
                react_1.default.createElement(MyResponsivePie, null)))));
};
exports["default"] = Segregation_MetricsChart;


/***/ }),

/***/ "./src/components/street-light-status.tsx":
/*!************************************************!*\
  !*** ./src/components/street-light-status.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const lightStatusChart_1 = __importDefault(__webpack_require__(/*! ./lightStatusChart */ "./src/components/lightStatusChart.tsx"));
const Street_Light__Status_Widget = () => {
    const completionPercentage = 75;
    const streetLightData = [
        {
            id: '1',
            name: 'Attention',
            value: 135
        },
        {
            id: '2',
            name: 'Pending',
            value: 56
        },
        {
            id: '3',
            name: 'Resloved',
            value: 245
        }
    ];
    const maintenance_Permits_Data = [
        {
            id: '1',
            name: 'Issued',
            value: 135
        },
        {
            id: '2',
            name: 'Pending',
            value: 56
        }
    ];
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box waste-bin-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Street Light Status", icon: 'https://static.iviva.com/images/Udhayimages/traffic-light.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' }, streetLightData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                react_1.default.createElement("h3", null, item.value),
                react_1.default.createElement("p", null, item.name))))),
            react_1.default.createElement("div", { className: "technician_chart" },
                react_1.default.createElement("div", { className: 'sub_title_bar' }, "Maintenance Permits"),
                react_1.default.createElement("div", { className: "progress-bar-container" },
                    react_1.default.createElement("div", { className: "progress-bar", style: { width: `${completionPercentage}%` } })),
                react_1.default.createElement("div", { className: 'chart-sec' },
                    react_1.default.createElement("div", { className: 'chart-issue' },
                        react_1.default.createElement("h3", null, "234"),
                        react_1.default.createElement("p", null, "Issued")),
                    react_1.default.createElement("div", { className: 'chart-pending' },
                        react_1.default.createElement("h3", null, "13"),
                        react_1.default.createElement("p", null, "Pending")))),
            react_1.default.createElement("div", { className: "smart-city-content" },
                react_1.default.createElement(lightStatusChart_1.default, null)))));
};
exports["default"] = Street_Light__Status_Widget;


/***/ }),

/***/ "./src/components/streetlight-work-order.tsx":
/*!***************************************************!*\
  !*** ./src/components/streetlight-work-order.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const StreetLightWorkOrder = () => {
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [inputValue, setInputValue] = react_1.default.useState("Work Order");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        }
    ];
    const streetLightData = [
        {
            id: '1',
            name: 'Attention',
            value: 12
        },
        {
            id: '2',
            name: 'Pending',
            value: 2
        },
        {
            id: '3',
            name: 'Resloved',
            value: 12
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Street Light Work Order", icon: 'https://static.iviva.com/images/Udhayimages/traffic-light.png' }),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '350px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Alert Type", value: "op-1" },
                            { label: "Alert Type 1", value: "op-2" },
                            { label: "Alert Type 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 10, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] })),
        react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
            react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                react_1.default.createElement("div", { className: 'status-content' }, streetLightData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                    react_1.default.createElement("h3", null, item.value),
                    react_1.default.createElement("p", null, item.name)))))))));
};
exports["default"] = StreetLightWorkOrder;


/***/ }),

/***/ "./src/components/top-section.tsx":
/*!****************************************!*\
  !*** ./src/components/top-section.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
function TopNavTabs() {
    const [activeTab, setActiveTab] = (0, react_1.useState)('Waste');
    const handleTabClick = (label) => {
        setActiveTab(label);
        sendMessage(`You clicked on: ${label}`);
    };
    function sendMessage(message) {
        alert(message);
    }
    const tabs = [
        { label: 'Waste', className: 'nav-link waste', id: 'waste' },
        { label: 'Streetlight', className: 'nav-link streetlight', id: 'streetlight' },
        { label: 'Cctv', className: 'nav-link cctv', id: 'cctv' },
        { label: 'Water', className: 'nav-link water', id: 'water' },
        { label: 'Pollution', className: 'nav-link pollution', id: 'pollution' },
        { label: 'Fire', className: 'nav-link fire', id: 'fire' },
    ];
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box" },
        react_1.default.createElement("div", { className: "top-nav-tabs" },
            react_1.default.createElement("ul", null, tabs.map((tab) => (react_1.default.createElement("li", { key: tab.id, className: `${tab.className} ${activeTab === tab.label ? 'active' : ''}`, onClick: () => handleTabClick(tab.label) },
                react_1.default.createElement("a", { href: "#" },
                    react_1.default.createElement("span", null),
                    react_1.default.createElement("label", null, tab.label))))))),
        react_1.default.createElement("div", { id: "messageBox" })));
}
exports["default"] = TopNavTabs;


/***/ }),

/***/ "./src/components/traffic-control.tsx":
/*!********************************************!*\
  !*** ./src/components/traffic-control.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Traffic_Control = () => {
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [date, setDate] = react_1.default.useState(new Date());
    var taffic_Controldata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311101",
            'street': 'Anbu Ayyub Al-Ansari',
            "status": "Green"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311102",
            "street": "Anbu Ayyub Al-Ansari",
            "status": "Green"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311103",
            "street": "Anbu Ayyub Al-Ansari",
            "status": "Green"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311104",
            "street": "Anbu Ayyub Al-Ansari",
            "status": "Red"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311105",
            "street": "Anbu Ayyub Al-Ansari",
            "status": "Red"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311106",
            "street": "First Ring Rd-Kind Faisal",
            "status": "Green"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311107",
            "street": "First Ring Rd-Kind Faisal",
            "status": "Red"
        },
        {
            "id": "8",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311108",
            "street": "First Ring Rd-Kind Faisal",
            "status": "Green"
        },
        {
            "id": "9",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311109",
            "street": "First Ring Rd-Kind Faisal",
            "status": "Green"
        },
        {
            "id": "10",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311110",
            "street": "Kind Faisal Rd",
            "status": "Green"
        },
        {
            "id": "11",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311111",
            "street": "Kind Faisal Rd",
            "status": "Red"
        },
        {
            "id": "12",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311112",
            "street": "Kind Faisal Rd",
            "status": "Red"
        },
        {
            "id": "13",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311113",
            "street": "Kind Faisal Rd",
            "status": "Green"
        },
        {
            "id": "14",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311114",
            "street": "Abdul Muhsin ibn Abdul",
            "status": "Red"
        },
        {
            "id": "15",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311115",
            "street": "Abdul Muhsin ibn Abdul",
            "status": "Green"
        },
        {
            "id": "16",
            "work_Order": 'Wo-123456789',
            "location": "Al Masjid an Nabawi",
            "alert_Time": "42311116",
            "street": "Abdul Muhsin ibn Abdul",
            "status": "Green"
        }
    ];
    const alertworkordertData = [
        {
            id: '1',
            name: 'Attention',
            value: 8
        },
        {
            id: '2',
            name: 'Pending',
            value: 5
        },
        {
            id: '3',
            name: 'Resloved',
            value: 21
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = taffic_Controldata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    const [toggleFilterValueday, setToggleFilterValueday] = (0, react_1.useState)("1");
    const handleFilterChangeday = (value) => {
        setToggleFilterValueday(value);
    };
    const cctvData = [
        {
            id: 1,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg',
            selectOptions: ['Al Haram District, Cam 100', 'Al Haram District, Cam 101', 'Al Haram District, Cam 102'],
            selectedOption: 'Al Haram District, Cam 102',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 2,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg',
            selectOptions: ['Al Masjid An Nabawi, Cam 34', 'Al Masjid An Nabawi, Cam 35', 'Al Masjid An Nabawi, Cam 36'],
            selectedOption: 'Al Masjid An Nabawi, Cam 34',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 3,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg',
            selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
            selectedOption: 'Al Haram District, Cam 20',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Red"
        },
        {
            id: 4,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg',
            selectOptions: ['Al Haram District, Cam 15', 'Al Haram District, Cam 16', 'Al Haram District, Cam 17'],
            selectedOption: 'Al Haram District, Cam 15',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 5,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg',
            selectOptions: ['Al Haram District, Cam 46', 'Al Haram District, Cam 47', 'Al Haram District, Cam 48'],
            selectedOption: 'Al Haram District, Cam 46',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 6,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District1.jpeg',
            selectOptions: ['Al Masjid An Nabawi, Cam 26', 'Al Masjid An Nabawi, Cam 27', 'Al Masjid An Nabawi, Cam 27'],
            selectedOption: 'Al Masjid An Nabawi, Cam 26',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Red"
        },
        {
            id: 7,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District2.jpg',
            selectOptions: ['Al Haram District, Cam 20', 'Al Haram District, Cam 21', 'Al Haram District, Cam 22'],
            selectedOption: 'Al Haram District, Cam 20',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Red"
        },
        {
            id: 8,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District3.jpg',
            selectOptions: ['Al Haram District, Cam 57', 'Al Haram District, Cam 58', 'Al Haram District, Cam 59'],
            selectedOption: 'Al Haram District, Cam 57',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 9,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/Al-Haram-District4.jpg',
            selectOptions: ['Al Masjid An Nabawi, Cam 5', 'Al Masjid An Nabawi, Cam 6', 'Al Masjid An Nabawi, Cam 7'],
            selectedOption: 'Al Masjid An Nabawi, Cam 5',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        },
        {
            id: 10,
            cctv_pict: 'https://static.iviva.com/images/Udhayimages/al_haram-bg.jpg',
            selectOptions: ['Al Haram District, Cam 74', 'Al Haram District, Cam 75', 'Al Haram District, Cam 76'],
            selectedOption: 'Al Haram District, Cam 74',
            location: "Al Masjid an Nabawi",
            location_id: "42311112",
            location_status: "Green"
        }
    ];
    const [data, setData] = (0, react_1.useState)(cctvData);
    const handleSelectChange = (itemId, newValue) => {
        // Update the selected option for the item with the given ID
        setData((prevData) => prevData.map((item) => item.id === itemId ? Object.assign(Object.assign({}, item), { selectedOption: newValue }) : item));
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Traffic Control", icon: 'https://static.iviva.com/images/Udhayimages/traffic-light.png' },
            react_1.default.createElement("div", { className: 'top_tabs' },
                react_1.default.createElement(ToggleFilter, { options: [
                        { label: "LIST", value: "1" },
                        { label: "CCTV", value: "2" }
                    ], value: toggleFilterValueday, onChange: handleFilterChangeday }))),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '730px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement("div", { style: { width: "20%" } }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.DatePicker, { title: "Date", date: date, onChange: (date) => setDate(date) }))),
            react_1.default.createElement("div", { className: "tab-content", style: { height: '88%' } },
                toggleFilterValueday === "1" && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { style: { height: '80%' } },
                        react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 17, columns: [
                                {
                                    title: "Location",
                                    width: "33%",
                                    renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                                },
                                {
                                    title: "ID",
                                    width: "17%",
                                    renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                                },
                                {
                                    title: "Street",
                                    width: "35%",
                                    renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "street", className: "data-table-item" })
                                },
                                {
                                    title: "Mode",
                                    width: "15%",
                                    renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "status", className: `data-table-item ${item.status}` })
                                }
                            ] })),
                    react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
                        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                            react_1.default.createElement("div", { className: 'status-content' }, alertworkordertData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                                react_1.default.createElement("h3", null, item.value),
                                react_1.default.createElement("p", null, item.name))))))))),
                toggleFilterValueday === "2" && (react_1.default.createElement("div", { className: "smart-city_box cctv-overview-box", style: { height: "460px" } },
                    react_1.default.createElement("div", { className: "smart-city-content", style: { height: "auto", marginTop: '0' } },
                        react_1.default.createElement("div", { className: 'status-content' }, data.map((item) => (react_1.default.createElement("div", { className: 'cctv-list', key: item.id },
                            react_1.default.createElement("select", { value: item.selectedOption, onChange: (e) => handleSelectChange(item.id, e.target.value) }, item.selectOptions.map((option) => (react_1.default.createElement("option", { key: option, value: option }, option)))),
                            react_1.default.createElement("div", { className: 'cctv-pict' },
                                react_1.default.createElement("img", { src: item.cctv_pict, alt: 'CCTV Picture', style: { height: '100px' } })),
                            react_1.default.createElement("div", { className: 'loction' }, item.location),
                            react_1.default.createElement("div", { className: 'loction-number' }, item.location_id),
                            react_1.default.createElement("div", { className: `loction-status ${item.location_status}` }, item.location_status))))))))))));
};
function ToggleFilter({ options, value, onChange }) {
    return (react_1.default.createElement("div", { className: "toggle-filter" }, options.map(option => (react_1.default.createElement("button", { key: option.value, className: option.value === value ? "active" : "", onClick: () => onChange(option.value) }, option.label)))));
}
exports["default"] = Traffic_Control;


/***/ }),

/***/ "./src/components/vehicle-summary.tsx":
/*!********************************************!*\
  !*** ./src/components/vehicle-summary.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const recharts_2 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const VehicleSummaryWidget = () => {
    var vehicledata = [
        {
            vehicle: 'Car',
            value: 120,
            fullValue: 150,
        },
        {
            vehicle: 'Taxi',
            value: 98,
            fullValue: 150,
        },
        {
            vehicle: 'Bus',
            value: 86,
            fullValue: 150,
        },
        {
            vehicle: 'Truck',
            value: 99,
            fullValue: 150,
        },
        {
            vehicle: 'Motorcycle',
            value: 85,
            fullValue: 150,
        },
        {
            vehicle: 'Van',
            value: 65,
            fullValue: 150,
        },
    ];
    const MyResponsiveRadar = ({}) => (react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
        react_1.default.createElement(recharts_2.RadarChart, { cx: "50%", cy: "50%", outerRadius: "80%", data: vehicledata },
            react_1.default.createElement(recharts_2.PolarGrid, null),
            react_1.default.createElement(recharts_2.PolarAngleAxis, { dataKey: "vehicle" }),
            react_1.default.createElement(recharts_2.PolarRadiusAxis, null),
            react_1.default.createElement(recharts_2.Radar, { name: "Value", dataKey: "value", stroke: "#005936", fill: "#00a68a", fillOpacity: 0.6 },
                react_1.default.createElement(recharts_2.LabelList, { dataKey: "value", position: "top" })),
            react_1.default.createElement(recharts_1.Tooltip, null))));
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box vehicle_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "vehicle Summary", icon: 'https://static.iviva.com/images/Car_widget/Car.svg' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 300 } },
                react_1.default.createElement(MyResponsiveRadar, null)))));
};
exports["default"] = VehicleSummaryWidget;


/***/ }),

/***/ "./src/components/waste-bin-status.tsx":
/*!*********************************************!*\
  !*** ./src/components/waste-bin-status.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Waste_bin_StatusWidget = () => {
    const completionPercentage = 75;
    const wasteBinData = [
        {
            id: '1',
            name: 'Attention',
            value: 68
        },
        {
            id: '2',
            name: 'Pending',
            value: 36
        },
        {
            id: '3',
            name: 'Resloved',
            value: 79
        }
    ];
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box waste-bin-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Waste Bin Status", icon: 'https://static.iviva.com/images/Udhayimages/waste-bin.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' }, wasteBinData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                react_1.default.createElement("h3", null, item.value),
                react_1.default.createElement("p", null, item.name))))),
            react_1.default.createElement("div", { className: "technician_chart" },
                react_1.default.createElement("div", { className: "progress-bar-container" },
                    react_1.default.createElement("div", { className: "progress-bar", style: { width: `${completionPercentage}%` } })),
                react_1.default.createElement("div", { className: 'chart-sec' },
                    react_1.default.createElement("div", { className: 'chart-issue' },
                        react_1.default.createElement("h3", null, "147"),
                        react_1.default.createElement("p", null, "Issued")),
                    react_1.default.createElement("div", { className: 'chart-pending' },
                        react_1.default.createElement("h3", null, "36"),
                        react_1.default.createElement("p", null, "Pending")))))));
};
exports["default"] = Waste_bin_StatusWidget;


/***/ }),

/***/ "./src/components/waste-collection-vehicle.tsx":
/*!*****************************************************!*\
  !*** ./src/components/waste-collection-vehicle.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Waste_CollectionVehicle = () => {
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box waste-collection-vehicle" },
        react_1.default.createElement(components_1.TitleBar, { title: "Waste Collection vehicle", icon: 'https://static.iviva.com/images/cargo-truck.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' },
                react_1.default.createElement("div", { className: 'status attention-status' },
                    react_1.default.createElement("div", { className: 'vahicle-icon co2-icon' }),
                    react_1.default.createElement("p", null, "Carbon Footprint"),
                    react_1.default.createElement("h2", null, "1,236.0"),
                    react_1.default.createElement("span", null, "mgCO2")),
                react_1.default.createElement("div", { className: 'status fuel-consumption-status' },
                    react_1.default.createElement("div", { className: 'vahicle-icon fuel-consumption-icon' }),
                    react_1.default.createElement("p", null, "Fuel Consumption"),
                    react_1.default.createElement("h2", null, "1,500"),
                    react_1.default.createElement("span", null, "Gallons")),
                react_1.default.createElement("div", { className: 'status s-consumption-status' },
                    react_1.default.createElement("div", { className: 'vahicle-icon s-consumption-icon' }),
                    react_1.default.createElement("p", null, "S Consumption"),
                    react_1.default.createElement("h2", null, "80,730"),
                    react_1.default.createElement("span", null, "Riyal"))))));
};
exports["default"] = Waste_CollectionVehicle;


/***/ }),

/***/ "./src/components/waste-generated-trends.tsx":
/*!***************************************************!*\
  !*** ./src/components/waste-generated-trends.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// import Maintenance_Work_Order_Summary from './maintenance-work-order-summary';
const Waste_Generated_Trend = () => {
    const summarydata1 = [
        {
            name: '25 AUG', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 156, Total_hours_booked: 320, Total_hours_accupied: 11, amt: 654,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 235, Total_hours_booked: 124, Total_hours_accupied: 19, amt: 365,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 163, Total_hours_booked: 215, Total_hours_accupied: 236, amt: 654,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 169, Total_hours_booked: 322, Total_hours_accupied: 125, amt: 221,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 321, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 625,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 325,
        }
    ];
    const summarydata2 = [
        {
            name: '25 AUG', Aug_duration_meeting: 502, Total_hours_booked: 658, Total_hours_accupied: 365, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 250, Total_hours_booked: 320, Total_hours_accupied: 256, amt: 654,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 125, Total_hours_booked: 252, Total_hours_accupied: 165, amt: 654,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 152, Total_hours_booked: 653, Total_hours_accupied: 156, amt: 654,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 124, Total_hours_booked: 322, Total_hours_accupied: 354, amt: 221,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 254, Total_hours_booked: 745, Total_hours_accupied: 120, amt: 365,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 754,
        }
    ];
    const summarydata3 = [
        {
            name: '25 AUG', Aug_duration_meeting: 325, Total_hours_booked: 658, Total_hours_accupied: 362, amt: 365,
        },
        {
            name: '26 AUG', Aug_duration_meeting: 257, Total_hours_booked: 320, Total_hours_accupied: 136, amt: 152,
        },
        {
            name: '27 AUG', Aug_duration_meeting: 124, Total_hours_booked: 580, Total_hours_accupied: 139, amt: 625,
        },
        {
            name: '28 AUG', Aug_duration_meeting: 632, Total_hours_booked: 362, Total_hours_accupied: 165, amt: 652,
        },
        {
            name: '29 AUG', Aug_duration_meeting: 254, Total_hours_booked: 425, Total_hours_accupied: 125, amt: 165,
        },
        {
            name: '30 AUG', Aug_duration_meeting: 125, Total_hours_booked: 516, Total_hours_accupied: 302, amt: 320,
        },
        {
            name: '31 AUG', Aug_duration_meeting: 312, Total_hours_booked: 421, Total_hours_accupied: 124, amt: 852,
        }
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: summarydata1,
        week: summarydata2,
        day: summarydata3,
    };
    const selectedData = filterToDataMap[toggleFilterValue] || summarydata1;
    const [toggleFilterValueday, setToggleFilterValueday] = react_1.default.useState("1");
    const handleFilterChangeday = (value) => {
        setToggleFilterValueday(value);
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box energy_consumption-box" },
        react_1.default.createElement("div", { className: 'top_tabs' },
            react_1.default.createElement(components_1.ToggleFilter, { options: [
                    { label: "2023", value: "1" },
                    { label: "1D", value: "2" }
                ], value: toggleFilterValueday, onChange: handleFilterChangeday })),
        react_1.default.createElement(components_1.TitleBar, { title: "Waste Generated Trends", icon: 'https://static.iviva.com/images/Udhayimages/recycling-symbol.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 270 } },
                react_1.default.createElement("div", { className: 'chart-top' },
                    react_1.default.createElement("div", { className: "sub_title_bar" }, "Total Waste (Tons)"),
                    react_1.default.createElement(components_1.ToggleFilter, { options: [
                            { label: "7D", value: "day" },
                            { label: "1M", value: "week" },
                            { label: "1Y", value: "month" },
                        ], value: toggleFilterValue, onChange: handleFilterChange })),
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                    react_1.default.createElement(recharts_1.BarChart, { width: 500, height: 200, data: selectedData, margin: {
                            top: 2, right: 0, left: 0, bottom: 2,
                        } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "0 0" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
                        react_1.default.createElement(recharts_1.YAxis, { orientation: "left" }),
                        react_1.default.createElement(recharts_1.Tooltip, null),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 20, dataKey: "Aug_duration_meeting", fill: "#025639" }),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 25, dataKey: "Total_hours_booked", fill: "#0c7652" }),
                        react_1.default.createElement(recharts_1.Bar, { barSize: 25, dataKey: "Total_hours_accupied", fill: "#0c2e23" })))))));
};
exports["default"] = Waste_Generated_Trend;


/***/ }),

/***/ "./src/components/waste-segregation-metrics.tsx":
/*!******************************************************!*\
  !*** ./src/components/waste-segregation-metrics.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const Waste_Segregation_Metrics = (props) => {
    var AfterHours = [
        {
            "DepartmentName": "Abu Burayaqa Dist",
            "TotalTons": "218 Tons"
        },
        {
            "DepartmentName": "Al Hadiqua Dist",
            "TotalTons": "153 Tons"
        },
        {
            "DepartmentName": "Ar Rayah Dist",
            "TotalTons": "98 Tons "
        },
        {
            "DepartmentName": "Al Qiblatayan Dist",
            "TotalTons": "185 Tons"
        },
        {
            "DepartmentName": "Al Wabra Dist",
            "TotalTons": "164 Tons"
        },
        {
            "DepartmentName": "Bani Muawiyah Dist",
            "TotalTons": "104 Tons"
        },
        {
            "DepartmentName": "Mahzur Dist",
            "TotalTons": "158 Tons"
        },
        {
            "DepartmentName": "Al Jamawat Dist",
            "TotalTons": "21 Tons"
        },
        {
            "DepartmentName": "Ad Duwaimah Dist",
            "TotalTons": "60 Tons "
        },
        {
            "DepartmentName": "As Salam Dist",
            "TotalTons": "29 Tons"
        },
        {
            "DepartmentName": "Al Uyun Dist",
            "TotalTons": "85 Tons"
        },
        {
            "DepartmentName": "Al Manakhah Dist",
            "TotalTons": "18 Tons"
        },
        {
            "DepartmentName": "Bani Dhafar Dist",
            "TotalTons": "30 Tons"
        },
        {
            "DepartmentName": "Urwah Dist",
            "TotalTons": "131 Tons"
        },
        {
            "DepartmentName": "Al Iskan Dist",
            "TotalTons": "101 Tons"
        },
        {
            "DepartmentName": "Al Khatim Dist",
            "TotalTons": "65 Tons"
        },
        {
            "DepartmentName": "Al Rawabi Dist",
            "TotalTons": "27 Tons"
        },
        {
            "DepartmentName": "Al Aridh Dist",
            "TotalTons": "58 Tons"
        },
        {
            "DepartmentName": "Al Qalah Dist",
            "TotalTons": "75 Tons"
        },
        {
            "DepartmentName": "Bir Uthman Dist",
            "TotalTons": "135 Tons"
        },
        {
            "DepartmentName": "Dhu Al Hulayfah Dist",
            "TotalTons": "90 Tons"
        },
        {
            "DepartmentName": "Al Usayfirin Dist",
            "TotalTons": "104 Tons"
        },
        {
            "DepartmentName": "Al Khalideya Dist",
            "TotalTons": "158 Tons"
        },
        {
            "DepartmentName": "Al Zahra Dist",
            "TotalTons": "165 Tons"
        },
        {
            "DepartmentName": "Al Aziziyzh Dist",
            "TotalTons": "114 Tons"
        },
        {
            "DepartmentName": "Al Mabuth Dist",
            "TotalTons": "167 Tons"
        },
        {
            "DepartmentName": "Sayed As Shuhada Dist",
            "TotalTons": "36 Tons"
        },
        {
            "DepartmentName": "Abu Kabir Dist",
            "TotalTons": "117 Tons"
        },
        {
            "DepartmentName": "Al Hafya Dist",
            "TotalTons": "78 Tons"
        },
        {
            "DepartmentName": "Adh Dhahirah Dist",
            "TotalTons": "54 Tons"
        },
        {
            "DepartmentName": "Al Qaswa Dist",
            "TotalTons": "105 Tons"
        },
        {
            "DepartmentName": "Umm Khalid Dist",
            "TotalTons": "148 Tons"
        },
        {
            "DepartmentName": "Hathm Dist",
            "TotalTons": "90 Tons"
        },
        {
            "DepartmentName": "Mudhainib Dist",
            "TotalTons": "104 Tons"
        },
        {
            "DepartmentName": "Al Jabirah Dist",
            "TotalTons": "158 Tons"
        },
        {
            "DepartmentName": "As Suqya Dist",
            "TotalTons": "165 Tons"
        },
        {
            "DepartmentName": "Al Anabis Dist",
            "TotalTons": "114 Tons"
        },
        {
            "DepartmentName": "Al Mughaisilah Dist",
            "TotalTons": "167 Tons"
        },
        {
            "DepartmentName": "Al Jamiah Dist",
            "TotalTons": "36 Tons"
        },
        {
            "DepartmentName": "Ad Duwaikhihlah Dist",
            "TotalTons": "117 Tons"
        },
        ,
        {
            "DepartmentName": "Al Zahra Dist",
            "TotalTons": "165 Tons"
        },
        {
            "DepartmentName": "Al Aziziyzh Dist",
            "TotalTons": "114 Tons"
        },
        {
            "DepartmentName": "Al Mabuth Dist",
            "TotalTons": "167 Tons"
        },
        {
            "DepartmentName": "Sayed As Shuhada Dist",
            "TotalTons": "36 Tons"
        },
        {
            "DepartmentName": "Abu Kabir Dist",
            "TotalTons": "117 Tons"
        },
        {
            "DepartmentName": "Al Hafya Dist",
            "TotalTons": "78 Tons"
        },
        {
            "DepartmentName": "Adh Dhahirah Dist",
            "TotalTons": "54 Tons"
        },
        {
            "DepartmentName": "As Sikkah Al Hadid Dist",
            "TotalTons": "78 Tons"
        },
        ,
        {
            "DepartmentName": "Bani Muawiyah Dist",
            "TotalTons": "104 Tons"
        },
        {
            "DepartmentName": "Mahzur Dist",
            "TotalTons": "158 Tons"
        },
        {
            "DepartmentName": "Al Jamawat Dist",
            "TotalTons": "21 Tons"
        },
        {
            "DepartmentName": "Ad Duwaimah Dist",
            "TotalTons": "60 Tons "
        },
        {
            "DepartmentName": "As Salam Dist",
            "TotalTons": "29 Tons"
        },
        {
            "DepartmentName": "Al Uyun Dist",
            "TotalTons": "85 Tons"
        },
        {
            "DepartmentName": "Al Manakhah Dist",
            "TotalTons": "18 Tons"
        },
        {
            "DepartmentName": "Bani Dhafar Dist",
            "TotalTons": "30 Tons"
        },
        {
            "DepartmentName": "Urwah Dist",
            "TotalTons": "131 Tons"
        },
        {
            "DepartmentName": "Al Iskan Dist",
            "TotalTons": "101 Tons"
        },
        {
            "DepartmentName": "Al Khatim Dist",
            "TotalTons": "65 Tons"
        },
        {
            "DepartmentName": "Al Rawabi Dist",
            "TotalTons": "27 Tons"
        },
        {
            "DepartmentName": "Al Aridh Dist",
            "TotalTons": "58 Tons"
        },
        {
            "DepartmentName": "Al thn Dist",
            "TotalTons": "54 Tons"
        },
        {
            "DepartmentName": "King Fahd Dist",
            "TotalTons": "105 Tons"
        },
        {
            "DepartmentName": "Bani Khidrah Dist",
            "TotalTons": "167 Tons"
        },
        {
            "DepartmentName": "Taiba Dist",
            "TotalTons": "36 Tons"
        },
        {
            "DepartmentName": "Al Barakah Dist",
            "TotalTons": "167 Tons"
        },
    ];
    var data = [
        {
            "id": "plastic",
            "label": "Plastic",
            "value": 3273,
            "color": "rgb(106 186 53)"
        },
        {
            "id": "paper",
            "label": "Paper",
            "value": 2947,
            "color": "rgb(2 108 92)"
        },
        {
            "id": "metal",
            "label": "Metal",
            "value": 2838,
            "color": "rgb(50 161 152)"
        },
        {
            "id": "food_waste",
            "label": "Food Waste",
            "value": 3875,
            "color": "rgb(99 245 227)"
        },
        {
            "id": "glass",
            "label": "Glass",
            "value": 1945,
            "color": "rgb(179 238 142)"
        }
    ];
    const MyResponsivePie = ({}) => (
    //  <ResponsivePie
    //      data={data}
    //      margin={{ top: 0, right: 40, bottom: 60, left: 40 }}
    //      innerRadius={0.6}
    //      padAngle={0.4}
    //      cornerRadius={0}
    //      activeOuterRadiusOffset={8}
    //      borderWidth={1}
    //      borderColor={{
    //          from: 'color',
    //          modifiers: [
    //              [
    //                  'darker',
    //                  0.2
    //              ]
    //          ]
    //      }}
    //      arcLinkLabelsSkipAngle={10}
    //      arcLinkLabelsTextColor="#ffffff"
    //      arcLinkLabelsThickness={2}
    //      arcLinkLabelsColor={{ from: 'color' }}
    //      arcLabelsSkipAngle={10}
    //      arcLabelsTextColor={{
    //          from: 'color',
    //          modifiers: [
    //              [
    //                  'darker',
    //                  1
    //              ]
    //          ]
    //      }}
    //      legends={[
    //          {
    //              anchor: 'bottom',
    //              direction: 'row',
    //              justify: false,
    //              translateX: 0,
    //              translateY: 56,
    //              itemsSpacing: 0,
    //              itemWidth: 100,
    //              itemHeight: 15,
    //              itemTextColor: '#fff',
    //              itemDirection: 'left-to-right',
    //              itemOpacity: 1,
    //              symbolSize: 18,
    //              symbolShape: 'circle',
    //              effects: [
    //                  {
    //                      on: 'hover',
    //                      style: {
    //                          itemTextColor: '#fff'
    //                      }
    //                  }
    //              ]
    //          }
    //      ]}
    //  />
    react_1.default.createElement("div", { style: { display: 'flex', justifyContent: 'flex-start' } },
        react_1.default.createElement(recharts_1.ResponsiveContainer, { width: 300, height: 250 },
            react_1.default.createElement(recharts_1.PieChart, null,
                react_1.default.createElement(recharts_1.Pie, { data: data, dataKey: "value", nameKey: "label", innerRadius: "60%", outerRadius: "80%", paddingAngle: 0, startAngle: 90, endAngle: -270 }, data.map((entry, index) => (react_1.default.createElement(recharts_1.Cell, { key: `cell-${index}`, fill: entry.color })))),
                react_1.default.createElement(recharts_1.Legend, { verticalAlign: "bottom", height: 36, content: (props) => {
                        const { payload } = props;
                        return (react_1.default.createElement("ul", null, data.map((entry, index) => (react_1.default.createElement("li", { key: `legend-${index}`, style: { color: entry.color } },
                            react_1.default.createElement("em", { style: { background: entry.color } }),
                            react_1.default.createElement("span", null, `${entry.label}:`),
                            react_1.default.createElement("span", { className: "data_values" }, ` ${entry.value} Tons`))))));
                    } })))));
    let [sectionAfterHours, setsectionAfterHours] = react_1.default.useState([]);
    let [afterhoursData, setafterhoursData] = react_1.default.useState([]);
    let [afterhoursColorData, setafterhoursColorData] = react_1.default.useState([]);
    let MaxIndex, offset = 1;
    react_1.default.useEffect(() => {
        getAfterHours();
    }, []);
    function getAfterHours() {
        return __awaiter(this, void 0, void 0, function* () {
            setsectionAfterHours(AfterHours);
            const StartIndex = 0, EndIndex = 24;
            afterhoursFun(StartIndex, EndIndex, AfterHours);
        });
    }
    function afterhoursFun(StartIndex, EndIndex, ahdata) {
        let cdata = ahdata;
        MaxIndex = (cdata.length);
        let AfterTotal = 0;
        afterhoursData = `<div class="afterhours_tree"> `;
        afterhoursData = afterhoursData + ` <ul>`;
        for (var i = StartIndex; i < EndIndex; i++) {
            afterhoursData = afterhoursData +
                `<li>                                    
                         <p> ` + cdata[i].DepartmentName + ` 
                             <span class="` + cdata[i].DepartmentName + `">` + cdata[i].TotalTons + `</span>
                         </p>   
                 </li>`;
            AfterTotal = AfterTotal + parseInt(cdata[i].TotalTons);
        }
        afterhoursData = afterhoursData + `</ul>`;
        afterhoursData = afterhoursData + `</div>`;
        let afterhoursDataColor = `<div class="color_value">              
               <ul>`;
        for (var i = StartIndex; i < EndIndex; i++) {
            afterhoursColorData = Math.round((parseInt(cdata[i].TotalTons) / AfterTotal) * 100);
            afterhoursDataColor = afterhoursDataColor + `<li class="` + cdata[i].DepartmentName + `" style="width : ` + afterhoursColorData + `%"></li>`;
        }
        afterhoursDataColor = afterhoursDataColor + `</ul>                        
             </div>`;
        setafterhoursData(afterhoursData);
        setafterhoursColorData(afterhoursDataColor);
    }
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box segregation_metrics-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Waste Segregation Metrics", icon: 'https://static.iviva.com/images/Udhayimages/waste-seg-matrix.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: "technician_chart", style: { height: 200 } },
                react_1.default.createElement(MyResponsivePie, null)),
            react_1.default.createElement("div", { className: "body", style: { marginTop: '2em' } },
                react_1.default.createElement("div", { className: 'sub_title_bar' }, " District Waste (Tons)"),
                react_1.default.createElement("div", { className: 'afterhours_inner_widget' },
                    react_1.default.createElement("div", { className: "afterhours_data_color", dangerouslySetInnerHTML: { __html: afterhoursColorData } }),
                    react_1.default.createElement("div", { className: "afterhours_data", dangerouslySetInnerHTML: { __html: afterhoursData } }))))));
};
exports["default"] = Waste_Segregation_Metrics;


/***/ }),

/***/ "./src/components/water-consumption.tsx":
/*!**********************************************!*\
  !*** ./src/components/water-consumption.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Water_ConsumptionWidget = () => {
    const water_consumption_data1 = [
        {
            name: '1 Jan',
            consumption: 1950,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 6500,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 5800,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3908,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 1680,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 3800,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 2350,
            amt: 2100,
        },
    ];
    const water_consumption_data2 = [
        {
            name: '1 Jan',
            consumption: 8000,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 1398,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 1680,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3908,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 4800,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 1680,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 4900,
            amt: 2100,
        },
    ];
    const water_consumption_data3 = [
        {
            name: '1 Jan',
            consumption: 7540,
            amt: 2400,
        },
        {
            name: '2 Jan',
            consumption: 6300,
            amt: 2210,
        },
        {
            name: '3 Jan',
            consumption: 4596,
            amt: 2290,
        },
        {
            name: '4 Jan',
            consumption: 3580,
            amt: 2000,
        },
        {
            name: '5 Jan',
            consumption: 4800,
            amt: 2181,
        },
        {
            name: '6 Jan',
            consumption: 5020,
            amt: 2500,
        },
        {
            name: '7 Jan',
            consumption: 6500,
            amt: 2100,
        },
    ];
    const [toggleFilterValue, setToggleFilterValue] = react_1.default.useState("day");
    const handleFilterChange = (value) => {
        console.log("Selected Filter Value:", value);
        setToggleFilterValue(value);
    };
    const filterToDataMap = {
        month: water_consumption_data1,
        week: water_consumption_data2,
        day: water_consumption_data3,
    };
    const water_consumption_data = filterToDataMap[toggleFilterValue] || water_consumption_data1;
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box water_consumption-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Water Consumption", icon: 'https://static.iviva.com/images/Udhayimages/waterdrop.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'chart-top' },
                react_1.default.createElement("div", { className: "sub_title_bar" }, "Total kW"),
                react_1.default.createElement(components_1.ToggleFilter, { options: [
                        { label: "7D", value: "day" },
                        { label: "1M", value: "week" },
                        { label: "1Y", value: "month" },
                    ], value: toggleFilterValue, onChange: handleFilterChange })),
            react_1.default.createElement("div", { className: 'status-content' },
                react_1.default.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: 270 },
                    react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 350, data: water_consumption_data, margin: {
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        } },
                        react_1.default.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                        react_1.default.createElement(recharts_1.XAxis, { dataKey: "name", tick: { fill: '#ffffff' } }),
                        react_1.default.createElement(recharts_1.YAxis, { tick: { fill: '#ffffff' } }),
                        react_1.default.createElement(recharts_1.Tooltip, null),
                        react_1.default.createElement(recharts_1.Legend, null),
                        react_1.default.createElement(recharts_1.Line, { type: "monotone", dataKey: "consumption", stroke: "#ffffff", activeDot: { r: 8 } })))))));
};
exports["default"] = Water_ConsumptionWidget;


/***/ }),

/***/ "./src/components/water-leakage-work-order.tsx":
/*!*****************************************************!*\
  !*** ./src/components/water-leakage-work-order.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const WaterLeakageWorkOrder = () => {
    let [selected, setSelected] = react_1.default.useState("op-1");
    let [inputValue, setInputValue] = react_1.default.useState("Work Order");
    let [inputValue1, setInputValue1] = react_1.default.useState("Location");
    var order_Summarydata = [
        {
            "id": "1",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            'status': 'attention',
            "alert_Type": "Faulty"
        },
        {
            "id": "2",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "3",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "4",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "5",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "6",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "7",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "8",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "9",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "10",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        },
        {
            "id": "11",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "resloved"
        },
        {
            "id": "12",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Faulty"
        },
        {
            "id": "13",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "attention",
            "alert_Type": "Offline"
        },
        {
            "id": "14",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Offline"
        },
        {
            "id": "15",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "pending",
            "alert_Type": "Working"
        },
        {
            "id": "16",
            "work_Order": 'Wo-123456789',
            "location": "Al Haram Dist",
            "alert_Time": "2023-01-11 07:56:46",
            "status": "resloved",
            "alert_Type": "Working"
        }
    ];
    const waterleakagetData = [
        {
            id: '1',
            name: 'Attention',
            value: 9
        },
        {
            id: '2',
            name: 'Pending',
            value: 5
        },
        {
            id: '3',
            name: 'Resloved',
            value: 10
        }
    ];
    const getDataItems = (max, pageToken) => {
        let last = 0;
        if (pageToken !== null)
            last = parseInt(pageToken);
        let p = new Promise((resolve, reject) => {
            let data = order_Summarydata.filter((item, key) => (key > last && key <= last + max));
            let response = { items: data, pageToken: (last + data.length).toString() };
            resolve(response);
        });
        return p;
    };
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box order_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Water Leakage Work Order", icon: 'https://static.iviva.com/images/Udhayimages/water-leak.png' }),
        react_1.default.createElement("div", { className: "smart-city-content", style: { height: '800px' } },
            react_1.default.createElement("div", { className: "chart-top" },
                react_1.default.createElement(components_1.FormField, { inline: true, className: "showcase-input" },
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.SearchBox, { value: inputValue1, onChange: (newValue) => { setInputValue1(newValue); }, position: "left", placeholder: '' }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "All Alert", value: "op-1" },
                            { label: "All Alert 1", value: "op-2" },
                            { label: "All Alert 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }),
                    react_1.default.createElement(components_1.Select, { selected: selected, options: [
                            { label: "Alert Type", value: "op-1" },
                            { label: "Alert Type 1", value: "op-2" },
                            { label: "Alert Type 2", value: "op-3" },
                        ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
            react_1.default.createElement(components_1.DataTable, { data: (max, last) => getDataItems(max, last), pageSize: 17, columns: [
                    {
                        title: "Work Order",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "work_Order", className: "data-table-item" })
                    },
                    {
                        title: "Location",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "location", className: "data-table-item" })
                    },
                    {
                        title: "Alert Time",
                        width: "25%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Time", className: "data-table-item" })
                    },
                    {
                        title: "Alert Type",
                        width: "20%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "alert_Type", className: "data-table-item" })
                    },
                    {
                        title: " ",
                        width: "10%",
                        renderColumn: (item) => react_1.default.createElement(components_1.ItemCard, { item: item, subTitleField: "", className: `data-table-item ${item.status}` })
                    }
                ] })),
        react_1.default.createElement("div", { className: 'smart-city_box waste-bin-box ' },
            react_1.default.createElement("div", { className: "smart-city-content", style: { height: '100px' } },
                react_1.default.createElement("div", { className: 'status-content' }, waterleakagetData.map((item) => (react_1.default.createElement("div", { key: item.id, className: `status ${item.name}` },
                    react_1.default.createElement("h3", null, item.value),
                    react_1.default.createElement("p", null, item.name)))))))));
};
exports["default"] = WaterLeakageWorkOrder;


/***/ }),

/***/ "./src/components/water-summary.tsx":
/*!******************************************!*\
  !*** ./src/components/water-summary.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const Water_SummaryWidget = () => {
    const statusData = [
        {
            iconClass: 'co2-icon',
            title: 'Water Consumption',
            value: '29',
            change: '+40%',
            statusClass: 'red',
        },
        {
            iconClass: 'fuel-consumption-icon',
            title: 'Population',
            value: '9,492',
            change: '+25%',
            statusClass: 'red',
        },
        {
            iconClass: 's-consumption-icon',
            title: 'Water Troubles Monthly',
            value: '38',
            change: '-15%',
            statusClass: 'green',
        },
    ];
    const statusElements = statusData.map((item, index) => (react_1.default.createElement("div", { className: `status ${item.iconClass}-status`, key: index },
        react_1.default.createElement("div", { className: `vehicle-icon ${item.iconClass}` }),
        react_1.default.createElement("p", null, item.title),
        react_1.default.createElement("h2", null, item.value),
        react_1.default.createElement("span", { className: item.statusClass }, item.change))));
    return (react_1.default.createElement(components_1.WidgetWrapper, { className: "smart-city_box water_summary-box" },
        react_1.default.createElement(components_1.TitleBar, { title: "Water Summary", icon: 'https://static.iviva.com/images/Udhayimages/water-summary.png' }),
        react_1.default.createElement("div", { className: "smart-city-content" },
            react_1.default.createElement("div", { className: 'status-content' }, statusElements))));
};
exports["default"] = Water_SummaryWidget;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
// import StreetLightStatusChart from './lightStatusChart'; 
// import OrderSummary from './order-summary';
const streetlight_work_order_1 = __importDefault(__webpack_require__(/*! ./components/streetlight-work-order */ "./src/components/streetlight-work-order.tsx"));
const energy_consumption_1 = __importDefault(__webpack_require__(/*! ./components/energy_consumption */ "./src/components/energy_consumption.tsx"));
const street_light_status_1 = __importDefault(__webpack_require__(/*! ./components/street-light-status */ "./src/components/street-light-status.tsx"));
const vehicle_summary_1 = __importDefault(__webpack_require__(/*! ./components/vehicle-summary */ "./src/components/vehicle-summary.tsx"));
const waste_segregation_metrics_1 = __importDefault(__webpack_require__(/*! ./components/waste-segregation-metrics */ "./src/components/waste-segregation-metrics.tsx"));
const segregation_metrics_1 = __importDefault(__webpack_require__(/*! ./components/segregation-metrics */ "./src/components/segregation-metrics.tsx"));
const water_consumption_1 = __importDefault(__webpack_require__(/*! ./components/water-consumption */ "./src/components/water-consumption.tsx"));
const cctv_capture_1 = __importDefault(__webpack_require__(/*! ./components/cctv-capture */ "./src/components/cctv-capture.tsx"));
const maintenance_work_order_1 = __importDefault(__webpack_require__(/*! ./components/maintenance-work-order */ "./src/components/maintenance-work-order.tsx"));
const waste_collection_vehicle_1 = __importDefault(__webpack_require__(/*! ./components/waste-collection-vehicle */ "./src/components/waste-collection-vehicle.tsx"));
const waste_bin_status_1 = __importDefault(__webpack_require__(/*! ./components/waste-bin-status */ "./src/components/waste-bin-status.tsx"));
const maintenance_work_order_trend_1 = __importDefault(__webpack_require__(/*! ./components/maintenance-work-order-trend */ "./src/components/maintenance-work-order-trend.tsx"));
const water_summary_1 = __importDefault(__webpack_require__(/*! ./components/water-summary */ "./src/components/water-summary.tsx"));
const waste_generated_trends_1 = __importDefault(__webpack_require__(/*! ./components/waste-generated-trends */ "./src/components/waste-generated-trends.tsx"));
const maintenance_work_order_summary_1 = __importDefault(__webpack_require__(/*! ./components/maintenance-work-order-summary */ "./src/components/maintenance-work-order-summary.tsx"));
const water_leakage_work_order_1 = __importDefault(__webpack_require__(/*! ./components/water-leakage-work-order */ "./src/components/water-leakage-work-order.tsx"));
const alert_work_order_summary_1 = __importDefault(__webpack_require__(/*! ./components/alert-work-order-summary */ "./src/components/alert-work-order-summary.tsx"));
const counts_1 = __importDefault(__webpack_require__(/*! ./components/counts */ "./src/components/counts.tsx"));
const alert_trends_1 = __importDefault(__webpack_require__(/*! ./components/alert_trends */ "./src/components/alert_trends.tsx"));
const emergency_work_oder_summary_1 = __importDefault(__webpack_require__(/*! ./components/emergency-work-oder-summary */ "./src/components/emergency-work-oder-summary.tsx"));
const traffic_control_1 = __importDefault(__webpack_require__(/*! ./components/traffic-control */ "./src/components/traffic-control.tsx"));
const IAQ_summary_1 = __importDefault(__webpack_require__(/*! ./components/IAQ-summary */ "./src/components/IAQ-summary.tsx"));
const IAQ_1 = __importDefault(__webpack_require__(/*! ./components/IAQ */ "./src/components/IAQ.tsx"));
const compare_IAQ_1 = __importDefault(__webpack_require__(/*! ./components/compare_IAQ */ "./src/components/compare_IAQ.tsx"));
const CCTV_overview_1 = __importDefault(__webpack_require__(/*! ./components/CCTV-overview */ "./src/components/CCTV-overview.tsx"));
const top_section_1 = __importDefault(__webpack_require__(/*! ./components/top-section */ "./src/components/top-section.tsx"));
const WeatherIcons_1 = __importDefault(__webpack_require__(/*! ./components/WeatherIcons */ "./src/components/WeatherIcons.tsx"));
const map_change_mode_1 = __importDefault(__webpack_require__(/*! ./components/map-change-mode */ "./src/components/map-change-mode.tsx"));
// import 'react-tabs/style/react-tabs.css';
const TopNavBar = () => {
    return (react_1.default.createElement("div", null, "Hi Udhaya"));
};
//   <TopNavBar/>
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "waste-Generated-Trend",
    widget: waste_generated_trends_1.default,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 9,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "wasteBinStatus",
    widget: waste_bin_status_1.default,
    configs: {
        layout: {
            w: 10,
            h: 6,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "waste_Collection_Vehicle",
    widget: waste_collection_vehicle_1.default,
    configs: {
        layout: {
            w: 10,
            h: 6,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "waste_segregation_Metrics",
    widget: waste_segregation_metrics_1.default,
    configs: {
        layout: {
            w: 10,
            h: 17,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "maintenance_WorkOrder_Trend",
    widget: maintenance_work_order_trend_1.default,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 9,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "maintenance-Work-Order-Summary",
    widget: maintenance_work_order_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 12,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "segregation_Metrics_Chart",
    widget: segregation_metrics_1.default,
    configs: {
        layout: {
            w: 10,
            h: 8,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "cctvWidget",
    widget: cctv_capture_1.default,
    configs: {
        layout: {
            w: 10,
            h: 10,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "energyConsumption",
    widget: energy_consumption_1.default,
    configs: {
        layout: {
            w: 10,
            h: 9,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "Order_Summary",
    widget: maintenance_work_order_1.default,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "streetLightStatusWidget",
    widget: street_light_status_1.default,
    configs: {
        layout: {
            w: 10,
            h: 14,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "vehicleSummaryWidget",
    widget: vehicle_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 10,
            // minH: 12,
            // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "streetLightWorkOrder",
    widget: streetlight_work_order_1.default,
    configs: {
        layout: {
            w: 10,
            h: 14,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "waterSummary",
    widget: water_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 7,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "water_consumption",
    widget: water_consumption_1.default,
    configs: {
        layout: {
            w: 10,
            h: 11,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "water_Leakage_Work_Order",
    widget: water_leakage_work_order_1.default,
    configs: {
        layout: {
            w: 10,
            h: 19,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "alert-Work-Order-Summary",
    widget: alert_work_order_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "counts_Widget",
    widget: counts_1.default,
    configs: {
        layout: {
            w: 10,
            h: 13,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "alertTrends",
    widget: alert_trends_1.default,
    configs: {
        layout: {
            w: 10,
            h: 13,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "emergencyWorkOrderSummary",
    widget: emergency_work_oder_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "traffic_Control",
    widget: traffic_control_1.default,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "iaq_Summary",
    widget: IAQ_summary_1.default,
    configs: {
        layout: {
            w: 10,
            h: 11,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "iaq_Widget",
    widget: IAQ_1.default,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "comapre-IAQ",
    widget: compare_IAQ_1.default,
    configs: {
        layout: {
            w: 10,
            h: 20,
            // minH: 13,
            // minW: 14
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "cctvoverviewWidget",
    widget: CCTV_overview_1.default,
    configs: {
        layout: {
            w: 30,
            h: 16,
            minH: 16,
            minW: 30,
            maxH: 16,
            maxW: 30
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "topNavTabs",
    widget: top_section_1.default,
    configs: {
        layout: {
            w: 12,
            h: 3,
            minH: 3,
            minW: 12,
            maxH: 3,
            maxW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "weatherIcons",
    widget: WeatherIcons_1.default,
    configs: {
        layout: {
            w: 8,
            h: 3,
            // minH: 3,
            // minW: 8,
            //  maxH: 3,
            //  maxW: 8
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "mapChangeMode",
    widget: map_change_mode_1.default,
    configs: {
        layout: {
            w: 2,
            h: 9,
            minH: 9,
            minW: 2,
            maxH: 9,
            maxW: 2
        }
    }
});
function componentDidMount() {
    throw new Error('Function not implemented.');
}
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "smart_city",
    label: "Smart_city",
    // click: () => alert("Hello"),
    component: Smart_cityWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"smart_city",
   component: Smart_cityWidget
});
*/ 


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Recharts;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"id":"e6a7f72a-85de-4259-ed4e-7412d22635d9","author":"eutech","widgets":[{"id":"topNavTabs","name":"Top Nav Tabs","description":" ","icon":"","tags":[]},{"id":"weatherIcons","name":"Weather Icons","description":" ","icon":"","tags":[]},{"id":"mapChangeMode","name":"map Change Mode","description":" ","icon":"","tags":[]},{"id":"cesiumOSMMap","name":"Cesium OSM Map","description":"Order Trend widget","icon":"","tags":[]},{"id":"maintenance_WorkOrder_Trend","name":"Maintenance Work Order Trend","description":"Order Trend widget","icon":"","tags":[]},{"id":"Order_Summary","name":"Order Summary","description":"A sample widget","icon":"","tags":[]},{"id":"segregation_Metrics_Chart","name":"Segregation Metrics Chart","description":"A sample widget","icon":"","tags":[]},{"id":"cctvWidget","name":"CCTV Widget","description":"A sample widget","icon":"","tags":[]},{"id":"wasteBinStatus","name":"Waste Bin Status","description":"A sample widget","icon":"","tags":[]},{"id":"waste_Collection_Vehicle","name":"Waste Collection Vehicle","description":"A sample widget","icon":"","tags":[]},{"id":"waste_segregation_Metrics","name":"Waste Segregation Metrics","description":"A sample widget","icon":"","tags":[]},{"id":"vehicleSummaryWidget","name":"Vehicle Summary Widget","description":"A sample widget","icon":"","tags":[]},{"id":"energyConsumption","name":"Energy Consumption Widget","description":"A sample widget","icon":"","tags":[]},{"id":"streetLightStatusWidget","name":"Street Ligh Status Widget","description":"A sample widget","icon":"","tags":[]},{"id":"waterSummary","name":"Water Summary Widget","description":"A sample widget","icon":"","tags":[]},{"id":"water_consumption","name":"Water Consumption Widget","description":"A sample widget","icon":"","tags":[]},{"id":"mapComponent","name":"Map Component","description":"A sample widget","icon":"","tags":[]},{"id":"streetLightWorkOrder","name":"Street Light Work Order","description":"A sample widget","icon":"","tags":[]},{"id":"waste-Generated-Trend","name":"Waste Generated Trend","description":"A sample widget","icon":"","tags":[]},{"id":"maintenance-Work-Order-Summary","name":"Maintenance Work Order Summary","description":"A sample widget","icon":"","tags":[]},{"id":"water_Leakage_Work_Order","name":"Water Leakage Work Order","description":"A sample widget","icon":"","tags":[]},{"id":"alert-Work-Order-Summary","name":"Alert WOrk Order Summary","description":"A sample widget","icon":"","tags":[]},{"id":"counts_Widget","name":"Counts","description":"A sample widget","icon":"","tags":[]},{"id":"alertTrends","name":"Alert Trends","description":"A sample widget","icon":"","tags":[]},{"id":"emergencyWorkOrderSummary","name":"Emergency Work Order Summary","description":"A sample widget","icon":"","tags":[]},{"id":"traffic_Control","name":"Traffic Control","description":"A sample widget","icon":"","tags":[]},{"id":"iaq_Summary","name":"IAQ Summary","description":"A sample widget","icon":"","tags":[]},{"id":"iaq_Widget","name":"IAQ","description":"A sample widget","icon":"","tags":[]},{"id":"comapre-IAQ","name":"Comapre IAQ","description":"A sample widget","icon":"","tags":[]},{"id":"cctvoverviewWidget","name":"CCTV Overview Widget","description":"A sample widget","icon":"","tags":[]}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map