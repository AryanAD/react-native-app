import { Text, View } from "react-native";
import AgeComponent from "../component/AgeComponent";
import FavSubjectComponent from "../component/FavSubjectComponent";
import NameComponent from "../component/NameComponent";
import XHandleComponent from "../component/XHandleComponent";

const Index = () => {
  return (
    <View>
      <AgeComponent />
      <FavSubjectComponent />
      <NameComponent />
      <XHandleComponent />
    </View>
  );
};

export default Index;
