import { STATUS, GENDERS, LOCATIONS } from '../constants';
import Input from './Input'
import Button from './Button'
import Select from './Select';

const CharacterForm = ({ value, dispatch, withImage, action, cancelAction }) => {


  const handleImageSelection = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        const base64String = e.target.result;
        dispatch({type: 'SET_IMAGE', payload: base64String });
      })
      reader.readAsDataURL(file); 
    }
  }

  return (
    <div className='flex items-center justify-center mt-4'>
      <form onSubmit={action} className='flex flex-col items-center dark:bg-sec bg-main-light rounded-md max-w-[300px] px-4 py-4 sm:py-8 border-[1px] border-txt-light/50 dark:border-none'>
        <img src={value.image} className='rounded-full h-[100px] w-[100px]' />
        <Input
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          label={'Name'} value={value.name} inputprops={{ required: true }}
        />
        <Input
          onChange={(e) => dispatch({ type: 'SET_SPECIES', payload: e.target.value })}
          label={'Species'} value={value.species} inputprops={{ required: true }}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_GENDER', payload: e.target.value })}
          label={'Gender'} value={value.gender} inputprops={{ required: true }}
          options={GENDERS} classes={'w-full'}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_STATUS', payload: e.target.value })}
          label={'Status'} value={value.status} inputprops={{ required: true }}
          options={STATUS} classes={'w-full'}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_ORIGIN', payload: e.target.value })}
          label={'Origin'} value={value.origin} inputprops={{ required: true }}
          options={LOCATIONS} classes={'w-full'}
        />
        {
          withImage ?
            <Input
              onChange={(e) => handleImageSelection(e)}
              label={'Image'} inputprops={{ type: 'file', accept: 'image/*', required: true }}
            /> : null
        }
        <div className='w-full flex items-center justify-center'>
          <Button buttonProps={{ type: 'submit' }} classes={'mt-4 hover:bg-sec-light'}>Confirm</Button>
          <Button action={cancelAction} classes={'!bg-red-500 mt-4 hover:bg-sec-light'}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload, local: true };
    case 'SET_ORIGIN':
      return { ...state, origin: action.payload, local: true };
    case 'SET_GENDER':
      return { ...state, gender: action.payload, local: true };
    case 'SET_SPECIES':
      return { ...state, species: action.payload, local: true };
    case 'SET_STATUS':
      return { ...state, status: action.payload, local: true };
    case 'SET_IMAGE':
      return { ...state, image: action.payload, local: true };
    default:
      return state;
  }
};

export default CharacterForm;