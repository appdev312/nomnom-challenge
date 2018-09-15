import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectList,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import { loadRecipeList } from './actions';
import reducer from './reducer';
import saga from './saga';
import RecipeList from './RecipeList';

const mapDispatchToProps = (dispatch) => ({
  loadRecipeList: () => dispatch(loadRecipeList()),
});

const mapStateToProps = createStructuredSelector({
  recipeList: makeSelectList(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'recipeList', reducer });
const withSaga = injectSaga({ key: 'recipeList', saga });

export default compose(withReducer, withSaga, withConnect)(RecipeList);
export { mapDispatchToProps };
