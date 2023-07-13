import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

const rocketIcon = <Icon name="rocket" size={30} color="#900" />;

const customTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontSize: 15 }}>Login with Facebook</Text>
  </Icon.Button>
);

export { rocketIcon, customTextButton };

/* backgroundColor
borderWidth
borderColor
borderRadius
padding
margin
color
fontSize */
