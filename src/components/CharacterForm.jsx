import { STATUS, GENDERS, LOCATIONS } from '../constants';
import Input from './Input'
import Button from './Button'
import Select from './Select';
import { useEffect } from 'react';

const CharacterForm = ({ value, dispatch, withImage, action, cancelAction }) => {

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={action} className='flex flex-col items-center bg-sec rounded-md max-w-[300px] px-4 py-8'>
        <img src={value.image} className='rounded-full h-[100px] w-[100px]' />
        <Input
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          label={'Name'} value={value.name}
        />
        <Input
          onChange={(e) => dispatch({ type: 'SET_SPECIES', payload: e.target.value })}
          label={'Species'} value={value.species}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_GENDER', payload: e.target.value })}
          label={'Gender'} value={value.gender}
          options={GENDERS} classes={'w-full'}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_STATUS', payload: e.target.value })}
          label={'Status'} value={value.status}
          options={STATUS} classes={'w-full'}
        />
        <Select
          onChange={(e) => dispatch({ type: 'SET_ORIGIN', payload: e.target.value })}
          label={'Origin'} value={value.origin}
          options={LOCATIONS} classes={'w-full'}
        />
        <div className='w-full flex items-center justify-between'>
          <Button buttonProps={{ type: 'submit' }}>Confirm</Button>
          <Button action={cancelAction} classes={'bg-red-500'}>Cancel</Button>
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