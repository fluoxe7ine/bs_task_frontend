import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResizeProvider, Resolution } from './ResizeProvider';
import { IStore } from '../store';
import { IRecipe } from '../components/recipe/types';
import { recipeActions } from '../store/recipe/actions';

export const useShortDescription = (text: string, limit: number) => (text.length >= limit ? `${text.slice(0, limit)}...` : text);

export const useReadableDate = (date: Date) => {
  if (!date) {
    return '';
  }

  const options = { month: 'long' };

  return `${date.getDate()} ${new Intl.DateTimeFormat('en-US', options).format(date)}`;
};

export const useResolution = () => {
  const [resolution, setResolution] = useState<Resolution>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    ResizeProvider
      .getInstance()
      .addListener(setResolution);
  }, []);

  return resolution;
};

export function useCached<T>(value: T) {
  const [cached, setCached] = useState<T>(value);

  useEffect(() => {
    if (value) {
      setCached(value);
    }
  }, [value]);

  return cached;
}

export const useRecipe = (recipeId: string) => {
  const dispatch = useDispatch();

  const recipeData = useSelector<IStore, IRecipe | undefined>(({ recipe }) => {
    if (recipeId && recipe.recipes) {
      return recipe.recipes.find((r) => r._id === recipeId);
    }

    return undefined;
  });

  useEffect(() => {
    if (recipeId && !recipeData) {
      dispatch(recipeActions.getRecipeAsync.request(recipeId));
    }
  }, [dispatch, recipeId, recipeData]);

  return recipeData;
};
