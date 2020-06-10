import { connect } from 'react-redux';
import { registerUser } from '../actions/registerUser';
import Register from '../components/Register';
//Disclaimer: The mapStateToProps is only for the sake of the example, 
//this is a LoginComponent that will feed the state with the user object, 
//and thus does not need the state passed down to its props

// mapStateToProps = state => ({
//   userreg: state.userreg,
// });

const mapDispatchToProps = dispatch => ({
  onLogin: (userreg) => {
    dispatch(registerUser(userreg));
  },
});
const LoginContainer = connect(mapDispatchToProps)(Register);
export default LoginContainer;


// const LoginContainer = connect(
//     mapStateToProps, 
//     mapDispatchToProps)
//     (Register);