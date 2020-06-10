import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';
import Login from '../components/Login';
//Disclaimer: The mapStateToProps is only for the sake of the example, 
//this is a LoginComponent that will feed the state with the user object, 
//and thus does not need the state passed down to its props

// mapStateToProps = state => ({
//   user: state.user,
// });

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(loginUser(user));
  },
});
const LoginContainer = connect(mapDispatchToProps)(Login);
export default LoginContainer;