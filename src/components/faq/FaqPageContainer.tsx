import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssueActionCreator } from '../../redux/callState';
import { ApplicationState } from '../../redux/root';
<<<<<<< HEAD
import FaqPage from './FaqPage';
=======
import { FaqPage } from './index';
>>>>>>> master
import { Issue } from '../../common/model';
import { RouteComponentProps } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<{id: string}> {}

interface StateProps {
  readonly issues: Issue[];
  readonly completedIssueIds: string[];
}

interface DispatchProps {
<<<<<<< HEAD
  onSelectIssue: (issueId: string) => void;
=======
  readonly onSelectIssue: (issueId: string) => void;
>>>>>>> master
}

function mapStateToProps(state: ApplicationState, ownProps: OwnProps): StateProps {
  return {
    issues: state.remoteDataState.issues,
    completedIssueIds: state.callState.completedIssueIds,
  };
}

const mapDispatchToProps = (dispatch: Dispatch<ApplicationState>): DispatchProps => {
  return bindActionCreators(
<<<<<<< HEAD
    { 
=======
    {
>>>>>>> master
      onSelectIssue: selectIssueActionCreator,
     },
    dispatch);
};
<<<<<<< HEAD
 
=======

>>>>>>> master
export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(FaqPage);
