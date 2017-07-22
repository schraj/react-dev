import { Action } from 'redux';
import { OutcomeData, CallStateAction } from './index';

export type CallStateActionType =
  'CURRENT_ISSUE_SELECTED' |
  'COMPLETE_ISSUE' |
  'NEXT_CONTACT' |
  'SET_CONTACT_IDS' |
  'SET_SHOW_FIELD_OFFICE_NUMBERS'
  ;

export interface CallStateAction extends Action {
  type: CallStateActionType;
  payload?: {};
}

/*
  REDUX DATA FLOW 2: Here we define the action that will be returned from the selectIssueActionCreator
  The type string 'CURRENT_ISSUE_SELECTED', must be in the CallStateActionType enum above.
  See /src/redux/callState/actionCreator.ts for next step(3) in Redux Data Flow
*/
export interface CurrentIssueAction extends CallStateAction {
  type: 'CURRENT_ISSUE_SELECTED';
  payload: string;
}

export interface SubmitOutcomeAction extends CallStateAction {
  type: 'COMPLETE_ISSUE';
  payload: OutcomeData;
}

export interface NextContact extends CallStateAction {
  type: 'NEXT_CONTACT';
}

export interface SetContactIdsAction extends CallStateAction {
  type: 'SET_CONTACT_IDS';
  payload: string[];
}

export interface SetShowFieldOfficeNumbers extends CallStateAction {
  type: 'SET_SHOW_FIELD_OFFICE_NUMBERS';
  payload: boolean;
}
