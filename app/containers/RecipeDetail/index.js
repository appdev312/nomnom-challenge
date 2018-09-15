import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  makeSelectCurrentRecipe,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadRecipeDetail, deleteRecipe } from './actions';
import reducer from './reducer';
import saga from './saga';
import RecipeDetail from './RecipeDetail';

const mapDispatchToProps = (dispatch) => ({
  loadRecipeDetail: (id) => dispatch(loadRecipeDetail(id)),
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
});

const mapStateToProps = createStructuredSelector({
  currentRecipe: makeSelectCurrentRecipe(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'recipeDetail', reducer });

const withSaga = injectSaga({ key: 'recipeDetail', saga });

export default compose(withReducer, withSaga, withConnect)(RecipeDetail);
export { mapDispatchToProps };
