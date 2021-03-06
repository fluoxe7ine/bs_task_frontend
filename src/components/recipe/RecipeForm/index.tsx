import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { WideButton } from '../../ui/WideButton';
import { IRecipeFormData } from '../types';

interface IRecipeForm {
  onSubmit: (data: IRecipeFormData) => void;
  submitButtonTitle: string;
  initialTitle?: string;
  initialDescription?: string;
}

export const RecipeForm: React.FC<IRecipeForm> = ({
  onSubmit,
  submitButtonTitle,
  initialTitle = '',
  initialDescription = '',
}) => {
  const { register, handleSubmit } = useForm<IRecipeFormData>();

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form__cover field"
        type="file"
        name="cover"
        ref={register}
      />
      <input
        defaultValue={initialTitle}
        name="title"
        className="form__title field"
        placeholder="Title"
        type="text"
        ref={register({ required: true })}
      />
      <textarea
        defaultValue={initialDescription}
        className="form__description field"
        name="description"
        ref={register({ required: true })}
        cols={40}
        rows={10}
      />
      <WideButton type="submit" color="green">
        {submitButtonTitle}
      </WideButton>
    </form>
  );
};
