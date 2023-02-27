import { BoardListsRender } from './boardListsRender';
import { BorderBasicElement } from './borderBasicElement';
import { ElementCreater } from './ElementCreater';

export enum ListCreatorParams {
  id = 'list',
  TARGET_CONTAINER = '.board-container__columns',
  ELEMS_CONTAINER = '.board-container__columns',
  PLUS_ELEM_PARENT = '.new-list__container',
  PLUS_BUTTON = '.target-add-list',
  ADD_TITLE_CONTAINER = '.new-list__create-list',
  ADD_LIST_BUTTON = '.add-list',
  CLOSE_CREATE_LIST_BUTTON = '.close-create-list',
  NEW_ELEM_CONTAINER = '.list-container',
  PLACEHOLDER = 'Ввести заголовок списка',
}

export enum CardCreatorParams {
  id = 'card',
  TARGET_CONTAINER = '.board-container__columns',
  ELEMS_CONTAINER = '.list-container__cards-container',
  PLUS_ELEM_PARENT = '.list-container__add-card-wrapper',
  PLUS_BUTTON = '.target-add-card',
  ADD_TITLE_CONTAINER = '.new-list__create-list',
  ADD_LIST_BUTTON = '.add-list',
  CLOSE_CREATE_LIST_BUTTON = '.close-create-list',
  NEW_ELEM_CONTAINER = '.card-container',
  PLACEHOLDER = 'Ввести заголовок карточки',
}

export class BoardHandler {

  borderBasicElement = new BorderBasicElement();

  listCreater = new ElementCreater(
    ListCreatorParams.id,
    ListCreatorParams.TARGET_CONTAINER,
    ListCreatorParams.ELEMS_CONTAINER,
    ListCreatorParams.PLUS_ELEM_PARENT,
    ListCreatorParams.PLUS_BUTTON,
    ListCreatorParams.ADD_TITLE_CONTAINER,
    ListCreatorParams.ADD_LIST_BUTTON,
    ListCreatorParams.CLOSE_CREATE_LIST_BUTTON,
    ListCreatorParams.NEW_ELEM_CONTAINER,
    ListCreatorParams.PLACEHOLDER,
  );

  CardCreater = new ElementCreater(
    CardCreatorParams.id,
    CardCreatorParams.TARGET_CONTAINER,
    CardCreatorParams.ELEMS_CONTAINER,
    CardCreatorParams.PLUS_ELEM_PARENT,
    CardCreatorParams.PLUS_BUTTON,
    CardCreatorParams.ADD_TITLE_CONTAINER,
    CardCreatorParams.ADD_LIST_BUTTON,
    CardCreatorParams.CLOSE_CREATE_LIST_BUTTON,
    CardCreatorParams.NEW_ELEM_CONTAINER,
    CardCreatorParams.PLACEHOLDER,
  );

  boardListsRender = new BoardListsRender();

  start() {
    this.borderBasicElement.start();
    this.boardListsRender.start();
    this.listCreater.start();
    this.CardCreater.start();
  }
}