import * as React from 'react';
import { Issue } from '../../common/model';
import { IssuesList } from '../issues';

interface Props {
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
<<<<<<< HEAD
  onSelectIssue: (issueId: string) => Function;
=======
  readonly onSelectIssue: (issueId: string) => Function;
>>>>>>> master
}

const Sidebar: React.StatelessComponent<Props> = (props: Props) => {
    return (
    <IssuesList
      issues={props.issues}
      currentIssue={props.currentIssue}
      completedIssueIds={props.completedIssueIds}
      onSelectIssue={props.onSelectIssue}
    />
    );
};

export default Sidebar;
