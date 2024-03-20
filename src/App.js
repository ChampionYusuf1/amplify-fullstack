import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
withAuthenticator,
Button,
Heading,
Image,
View,
Card,
} from "@aws-amplify/ui-react";

function App({signOut}) {
  return(
    <View className="App">
      <Card>
        <Image src={logo} alt="logo" className="App-logo" />
        <Heading level={1}>Welcome to Your Amplify App</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Card>
    </View>
  );
}
export default withAuthenticator(App);