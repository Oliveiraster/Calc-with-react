import {Select, Fieldset} from "./style"

const Selected = ({valor,Change}) => {

  return (
    
      <Fieldset>
          <legend>1 2 3</legend>
            <Select onChange={Change} id="button" type="range" min="1" max="3" value={valor}/>
      </Fieldset>
    
  )
  
}
export default Selected