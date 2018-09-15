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
import { saveRecipe } from './actions';
import reducer from './reducer';
import saga from './saga';
import NewRecipeForm from './NewRecipeForm';

const mapDispatchToProps = (dispatch) => ({
  saveRecipe: (recipe) => dispatch(saveRecipe(recipe)),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newRecipe', reducer });
const withSaga = injectSaga({ key: 'newRecipe', saga });

export default compose(withReducer, withSaga, withConnect)(NewRecipeForm);
export { mapDispatchToProps };
