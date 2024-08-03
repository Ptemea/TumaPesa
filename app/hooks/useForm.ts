// app/hooks/useForm.ts
import { useState } from 'react';

const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return { values, handleChange, resetForm };
};

export default useForm;