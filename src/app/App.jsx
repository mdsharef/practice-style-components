// import {Button, PrimaryButton} from "../components/ui/buttons/Button";

import InputGroup from "../components/shared/forms/InputGroup";

const App = () => {
  return (
    <div className="root">
      <h3>Simple Example of styled-components</h3>
      <InputGroup 
        label={'What is the title?'}
        name={'title'}
        placeholder={'type the title'}
        error={'There is an error!'}
      />
    </div>
  )
}

export default App;