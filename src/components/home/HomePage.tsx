import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Why5calls } from './index';
import { Layout } from '../shared';
import { Issue } from '../../common/model';

<<<<<<< HEAD
interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly totalCount: number;
  onSelectIssue: (issueId: string) => Function;
=======
interface Props extends RouteComponentProps<{ id: string }> {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;
>>>>>>> master
}

const HomePage: React.StatelessComponent<Props> = (props: Props) => (
  <Layout
    issues={props.issues}
    completedIssueIds={props.completedIssueIds}
    onSelectIssue={props.onSelectIssue}
  >
    <Why5calls totalCount={props.totalCount}/>
  </Layout>
);

export default HomePage;
