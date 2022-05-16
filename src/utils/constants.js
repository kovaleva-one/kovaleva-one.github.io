export const initialCards = [{
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const popupEdit = document.querySelector(".popup_profile");
export const photoModal = document.querySelector(".popup_photo");
export const buttonOpenedUser = document.querySelector(".profile__edit-button");
export const formEdit = document.querySelector(".popup__form_edit");
export const popupAvatar = document.querySelector(".popup_new-avatar");
export const buttonEditAvatar = document.querySelector(".profile__avatar-button");
export const formAvatar = document.querySelector(".popup__form-avatar");
export const nameInput = document.querySelector(".popup__input_type_name");
export const jobInput = document.querySelector(".popup__input_type_description");
export const buttonOpenAddPopup = document.querySelector(".profile__add-button");
export const popupAdd = document.querySelector(".popup_card");
export const formAdd = document.querySelector(".popup__form-card");
export const popupDeletePhoto = document.querySelector(".popup_delete-photo");
export const cardContainer = document.querySelector(".elements");

export const escape = 'Escape';
export const cardTemplate = "#card";
export const profileName = ".profile__name";
export const profileDescription = ".profile__description";
export const profileAvatar = ".profile__avatar";