import * as React from 'react';
import { Issue } from '../../common/model';
import { Sidebar, Footer } from './index';
import { LocationContainer } from '../location';

interface Props {
  readonly children?: {};
  readonly issues: Issue[];
  readonly currentIssue?: Issue;
  readonly completedIssueIds: string[];
<<<<<<< HEAD
  onSelectIssue: (issueId: string) => Function;
=======
  readonly onSelectIssue: (issueId: string) => Function;
>>>>>>> master
}

const Layout: React.StatelessComponent<Props> = (props: Props) => (
  <div>
    <header className="logo__header" role="banner" />
    <div className="layout">
      <aside id="nav" role="contentinfo" className="layout__side">
        <div className="issues">
          <header className="issues__header" role="banner">
            <h1 className="issues__title">
              <a href="/"><img className="issues__logo" src="/img/5calls-logotype.png" alt="5 Calls" />5 Calls</a>
            </h1>
            <div className="issues__location">
              <LocationContainer />
            </div>
          </header>
<<<<<<< HEAD
          <Sidebar 
            issues={props.issues}
            currentIssue={props.currentIssue ? props.currentIssue : undefined}
            completedIssueIds={props.completedIssueIds}
            onSelectIssue={props.onSelectIssue}     
=======
          <Sidebar
            issues={props.issues}
            currentIssue={props.currentIssue ? props.currentIssue : undefined}
            completedIssueIds={props.completedIssueIds}
            onSelectIssue={props.onSelectIssue}
>>>>>>> master
          />
        </div>
      </aside>
      <main id="content" role="main" aria-live="polite" className="layout__main">
        {props.children}
      </main>
    </div>
    <Footer/>
  </div>

);

export default Layout;
