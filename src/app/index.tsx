import { Text, View } from "react-native";
import Greet from "../components/NameComponent";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import XHandle from "../components/XHandle";
import SubjectComponent from "../components/SubjectComponent";

const Index = () => {
  return (
    <View>
      <NameComponent />
      <AgeComponent />
      <XHandle />
      <SubjectComponent />
    </View>
  );
};

export default Index;
