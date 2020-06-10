import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/registerUser";

class Register extends React.Component {

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
    const { userreg } = this.state;
    this.props.onLogin({ userreg }); 
}
}

export default connect(
    null,
    { registerUser }
  )(Register);
