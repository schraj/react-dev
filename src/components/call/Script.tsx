import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { translate } from 'react-i18next';
import { Issue } from '../../common/model';

interface Props {
  readonly issue: Issue;
  readonly contactIndex: number;
  readonly t: TranslationFunction;
}

const Script: React.StatelessComponent<Props> = ({ issue, contactIndex = 0, t }: Props) => {
  if (issue && issue.contacts && issue.contacts.length !== 0) {
    return (
      <div className="call__script">
        <h3 className="call__script__header">{t('script.yourScript')}</h3>
        {issue.script}
        {/* TODO: Format script and add issues link */}
        {/* scriptFormat(state, prev, send) */}
        {/* issuesLink(state, prev, send) */}
      </div>
    );
  } else {
    return <span />;
  }
};

export default translate()(Script);
