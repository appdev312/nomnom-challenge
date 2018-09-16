import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { saveRecipe } from './actions';
import reducer from './reducer';
import saga from './saga';
import RecipeForm from '../../components/RecipeForm';

const mapDispatchToProps = (dispatch) => ({
  saveRecipe: (recipe) => dispatch(saveRecipe(recipe)),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'recipeForm', reducer });

const withSaga = injectSaga({ key: 'recipeForm', saga });

export default compose(withReducer, withSaga, withConnect, withRouter)(RecipeForm);
export { mapDispatchToProps };
