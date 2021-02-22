import "./App.css";
import ControlledForm from "./form/ControlledForm";
import FormBasicValidation from "./form/FormBasicValidation";
import FormInput from "./form/FormInput";
import FormMultiple from "./form/FormMultiple";
import UncontrolledForm from "./form/UncontrolledForm";

function App() {
  return (
    <div className="App">
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <FormInput /> */}
      {/* <FormMultiple /> */}
      <FormBasicValidation />
    </div>
  );
}

export default App;
