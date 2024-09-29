import { useMutation, useQuery } from 'react-query';
import * as api from './Queries.js';

export const useTasks = () => {
    return useQuery('tasks', () => api.getItemFromStorage('tasks'));
};

export const useMutateData = () => {
    return useMutation((newArray) => api.saveItemIntoStorage('tasks', newArray));
};

export const useAddNewTask = () => {
    const { data } = useTasks();
    const { mutate } = useMutateData();

    const addNewTask = (value, onSuccess) => {
        let arrayToChange;
        if (data) {
            arrayToChange = [...data, {
                'value': value,
                'isDone': false,
                'key': data[data.length - 1].key + 1
            }];
        } else {
            arrayToChange = [{
                'value': value,
                'isDone': false,
                'key': 0
            }];
        }
        mutate(arrayToChange, { onSuccess });
    }

    return { addNewTask };
};

export const useCheckTask = () => {
    const { data } = useTasks();
    const { mutate } = useMutateData();

    const checkTask = ({ key, newValue }, onSuccess) => {
        const arrayToChange = data.map((item) => {
            if (item.key === key) {
                return { ...item, isDone: newValue };
            }
            return item;
        });
        mutate(arrayToChange, { onSuccess });
    }

    return { checkTask };
}