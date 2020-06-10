import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/loginUser";


class Login extends React.Component {

  render(){
    return(
<View style={styles.container}>
        <Text h4>Log In</Text>
        <FormLabel>Enter your Name</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ userName: text })}
        />
        <FormLabel>Enter your Email</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ userName: text })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          onPress={this.handleSubmit}
          buttonStyle={[{ marginBottom: 5, marginTop: 5 }]}
          title="Login"
        />
</View>
    )
  }

handleSubmit() {
    const { user } = this.state;
    this.props.onLogin({ user }); 
}
}

export default connect(
    { loginUser },null
  )(Login);