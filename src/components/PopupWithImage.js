import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupSelector.querySelector('.popup__image');
        this._title = this._popupSelector.querySelector('.popup__sign');
    }

    open({
        link,
        name
    }) {
        this._image.src = link;
        this._title.alt = name;
        this._title.textContent = name;

        super.open();
    }
}