import { Text, View } from "react-native";
import InlineStyle from "../component/InlineStyle";
import InternalStyle from "../component/InternalStyle";
import ExternalStyle from "../component/ExternalStyle";

const Index = () => {
  return (
    <View>
      <InlineStyle />
      <InternalStyle />
      <ExternalStyle />
    </View>
  );
};

export default Index;
