import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import {
  makeSelectRecipeList,
  makeSelectLoading,
  makeSelectError,
} from '../App/selectors';
import { loadRecipeList } from '../App/actions';
import saga from './saga';
import RecipeList from './RecipeList';

const mapDispatchToProps = (dispatch) => ({
  loadRecipeList: () => dispatch(loadRecipeList()),
});

const mapStateToProps = createStructuredSelector({
  recipeList: makeSelectRecipeList(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withSaga = injectSaga({ key: 'recipeList', saga });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withSaga, withConnect)(RecipeList);
export { mapDispatchToProps };
