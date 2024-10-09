import { Text, View } from "react-native";
import TextComponent from "../components/TextComponent";
import ViewComponent from "../components/ViewComponent";
import ButtonComponent from "../components/ButtonComponent";
import PressableComponent from "../components/PressableComponent";
import ImageComponent from "../components/ImageComponent";

const Index = () => {
  return (
    <View>
      <TextComponent />
      <ViewComponent />
      <ButtonComponent />
      <PressableComponent />
      <ImageComponent />
    </View>
  );
};

export default Index;
