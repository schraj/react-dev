import * as React from 'react';
import { Issue } from '../../common/model';
import { ContactDetails } from './index';

interface Props {
<<<<<<< HEAD
  currentIssue: Issue;
=======
  readonly currentIssue: Issue;
>>>>>>> master
}

const CallDetail: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <ContactDetails currentIssue={props.currentIssue} contactIndex={0}/>
  </div>

);

export default CallDetail;
