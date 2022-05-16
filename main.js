(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._settings=e,this._formElement=n}var n,r;return n=t,(r=[{key:"_checkInputValidity",value:function(e,t,n){e.validity.valid?this._hideError(e,n):this._showError(e,t,n)}},{key:"_findErrorElement",value:function(e){return this._formElement.querySelector("#".concat(e.id,"-error"))}},{key:"_hideError",value:function(e,t){this._findErrorElement(e).textContent="",e.classList.remove(t)}},{key:"_showError",value:function(e,t,n){var r=this._findErrorElement(e);r.textContent=e.validationMessage,r.classList.add(t),e.classList.add(n)}},{key:"_isAnyInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(e){this._submitBtn.classList.add(e),this._submitBtn.disabled=!0}},{key:"_toggleButtonState",value:function(e,t){this._isAnyInvalidInput(e)?this.disableButton(t):(this._submitBtn.classList.remove(t),this._submitBtn.disabled=!1)}},{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));this._submitBtn=this._formElement.querySelector(this._settings.submitButtonSelector),this._toggleButtonState(t,this._settings.inactiveButtonClass),t.forEach((function(n){n.addEventListener("input",(function(){e._toggleButtonState(t,e._settings.inactiveButtonClass),e._checkInputValidity(n,e._settings.errorClass,e._settings.inputErrorClass)}))}))}},{key:"cleanInputValidityErrors",value:function(){var e=this;Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)).forEach((function(t){e._hideError(t,e._settings.inputErrorClass)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o,i,a,c){var u=t.link,s=t.name,l=t._id,f=t.likes,p=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=u,this._name=s,this._cardId=l,this._likes=f,this._owner=p._id,this._userId=n,this._handleCardClick=r,this._deleteCallback=i,this._addLikeCallback=a,this._deleteLikeCallback=c,this._templateSelector=document.querySelector(o).content}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._templateSelector.cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;this._item=this._getTemplate();var t=this._item.querySelector(".element__image");return t.src=this._link,t.alt=this._name,this._item.querySelector(".element__text").textContent=this._name,this._item.querySelector(".element__heart").src=this._like,this._likeCounter=this._item.querySelector(".element__heart-box"),this._likeCounter.textContent=this._likes.length,this._item.querySelector(".element__delete-icon").src=this._trash,this._userId!==this._owner&&this._item.querySelector(".element__delete-icon").classList.add("element__delete-icon-invisible"),this._setEventListeners(),this._likes.find((function(t){return t._id===e._userId}))&&this.toggleLike(),this._item}},{key:"_setEventListeners",value:function(){var e=this;this._like=this._item.querySelector(".element__heart"),this._trash=this._item.querySelector(".element__delete-icon"),this._image=this._item.querySelector(".element__image"),this._like.addEventListener("click",(function(){e._getLikeState()?e._deleteLikeCallback(e._cardId):e._addLikeCallback(e._cardId)})),this._trash.addEventListener("click",(function(){return e._deleteCallback(e._cardId)})),this._image.addEventListener("click",(function(){return e._handleCardClick(e._link,e._name)}))}},{key:"toggleLike",value:function(){this._like.classList.toggle("element__heart_active")}},{key:"updateLikes",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length}},{key:"_getLikeState",value:function(){return this._like.classList.contains("element__heart_active")}},{key:"deleteImage",value:function(){this._trash.closest(".element").remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),a=document.querySelector(".popup_profile"),c=document.querySelector(".popup_photo"),u=document.querySelector(".profile__edit-button"),s=document.querySelector(".popup__form_edit"),l=document.querySelector(".popup_new-avatar"),f=document.querySelector(".profile__avatar-button"),p=document.querySelector(".popup__form-avatar"),h=document.querySelector(".popup__input_type_name"),d=document.querySelector(".popup__input_type_description"),_=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_card"),v=document.querySelector(".popup__form-card"),m=document.querySelector(".popup_delete-photo"),b=document.querySelector(".elements");function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose.bind(this)),this._popupSelector.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose.bind(this)),this._popupSelector.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){this._popupSelector.querySelector(".popup__exit-button").addEventListener("click",this.close.bind(this)),this._popupSelector.addEventListener("click",this._handleOverlayClose.bind(this))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popupSelector.querySelector(".popup__image"),t._title=t._popupSelector.querySelector(".popup__sign"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._image.src=t,this._title.alt=n,this._title.textContent=n,S(j(a.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function B(e,t){return B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},B(e,t)}function x(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFormCallback=t,n._submit=n._popupSelector.querySelector(".popup__save-button"),n._submitText=n._submit.textContent,n}return t=a,(n=[{key:"close",value:function(){T(D(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){this._inputList=Array.from(this._popupSelector.querySelectorAll(".popup__input"));var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"showLoading",value:function(e){this._submit.textContent=e?"Сохранение...":this._submitText}},{key:"setEventListeners",value:function(){var e=this;T(D(a.prototype),"setEventListeners",this).call(this),this._form=this._popupSelector.querySelector(".popup__form"),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormCallback(e._getInputValues())}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function J(e,t){return J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},J(e,t)}function G(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"setSubmitFunction",value:function(e){this._submitFunction=e}},{key:"setEventListeners",value:function(){var e=this;F(H(a.prototype),"setEventListeners",this).call(this),this._submit=this._popupSelector.querySelector(".popup__save-button"),this._submit.addEventListener("click",(function(){e._submitFunction()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(k);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_sendData",value:function(e,t){return fetch("".concat(this._url).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._sendData("users/me",{method:"GET",headers:this._headers})}},{key:"getCards",value:function(){return this._sendData("cards",{method:"GET",headers:this._headers})}},{key:"changeUserInfo",value:function(e,t){return this._sendData("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"addCard",value:function(e){return this._sendData("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"addLike",value:function(e){return this._sendData("cards/likes/".concat(e),{method:"PUT",headers:this._headers})}},{key:"deleteCard",value:function(e){return this._sendData("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._sendData("cards/likes/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"changeAvatar",value:function(e){return this._sendData("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t){var n=t.descriptionElement,r=t.nameElement,o=t.avatarElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._descriptionElement=document.querySelector(n),this._nameElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,about:this._descriptionElement.textContent}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._descriptionElement.textContent=e.about}},{key:"setAvatar",value:function(e){this._avatarElement.src=e}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),X={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error-visible"},Y=new K({url:"https://mesto.nomoreparties.co/v1/cohort-40/",headers:{authorization:"9e622263-d6c4-4a14-a28b-f1d11b952ab0","Content-Type":"application/json"}}),Z=new t(X,v);Z.enableValidation();var $=new t(X,s);$.enableValidation();var ee=new t(X,p);ee.enableValidation();var te=new z(m);function ne(e,t){var n=new r(e,t,(function(e,t){ae.open({link:e,name:t})}),"#card",(function(e){te.setSubmitFunction((function(){Y.deleteCard(e).then((function(){te.close(),n.deleteImage()})).catch((function(e){return console.log("Упс! ".concat(e))}))})),te.open()}),(function(e){Y.addLike(e).then((function(e){n.toggleLike(),n.updateLikes(e.likes)})).catch((function(e){return console.log("Упс! ".concat(e))}))}),(function(e){Y.deleteLike(e).then((function(e){n.toggleLike(),n.updateLikes(e.likes)})).catch((function(e){return console.log("Упс! ".concat(e))}))}));return n.generateCard()}te.setEventListeners();var re,oe,ie=new i((function(e){var t=ne(e,oe);ie.addItem(t)}),b);Promise.all([Y.getUserInfo(),Y.getCards()]).then((function(e){var t;!function(e){(re=new W({nameElement:".profile__name",descriptionElement:".profile__description",avatarElement:".profile__avatar"})).setAvatar(e.avatar),re.setUserInfo(e),oe=e._id}(e[0]),t=e[1],ie.renderItems(t)})).catch((function(e){return console.log("Упс! ".concat(e))}));var ae=new P(c);ae.setEventListeners();var ce=new A(l,(function(e){ce.showLoading(!0),Y.changeAvatar(e.avatar).then((function(){re.setAvatar(e.avatar),ce.close()})).catch((function(e){return console.log("Упс! ".concat(e))})).finally((function(){ce.showLoading(!1)}))}));ce.setEventListeners();var ue=new A(a,(function(e){ue.showLoading(!0),Y.changeUserInfo(e.name,e.description).then((function(){re.setUserInfo({name:e.name,about:e.description}),ue.close()})).catch((function(e){return console.log("Упс! ".concat(e))})).finally((function(){ue.showLoading(!1)}))}));ue.setEventListeners();var se=new A(y,(function(e){se.showLoading(!0),Y.addCard(e).then((function(e){var t=ne(e,oe);ie.addItem(t),se.close()})).catch((function(e){return console.log("Упс! ".concat(e))})).finally((function(){se.showLoading(!1)}))}));se.setEventListeners(),u.addEventListener("click",(function(){var e=re.getUserInfo();h.value=e.name,d.value=e.about,$.cleanInputValidityErrors(),ue.open()})),_.addEventListener("click",(function(){v.reset(),Z.cleanInputValidityErrors(),se.open(),Z.disableButton(X.inactiveButtonClass)})),f.addEventListener("click",(function(){p.reset(),ee.cleanInputValidityErrors(),ce.open(),ee.disableButton(X.inactiveButtonClass)}))})();