import ModalAdd from "./ModalAdd";
import Button from "./ui/Button";
import Input from "./ui/Input";

const AddEditTask = ({ isShow, dataForm, handleOnChange, handleShow, submitEditData, submitData }) => {
 
  if (!isShow) {
    return <></>
  }

  return ( 
    <ModalAdd closeWindow={handleShow}>
      <Input name='title' propsClass={'modalInput'} value={dataForm.title} handleOnChange={handleOnChange}/>
      <Input name='description' propsClass={'modalInput'} value={dataForm.description} handleOnChange={handleOnChange}/>
      {
        dataForm.date 
          ?
            <Button isModal={true} handleDo={submitEditData}>Редактировать</Button>
          :
            <Button isModal={true} handleDo={submitData}>Добавить таск</Button>
      }
  </ModalAdd>
   );
}
 
export default AddEditTask;