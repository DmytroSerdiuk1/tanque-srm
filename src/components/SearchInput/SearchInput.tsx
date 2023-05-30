import React, {FC, useCallback, useState} from 'react';
import {TextFieldProps} from "@mui/material/TextField/TextField";
import CreatableSelect from 'react-select/creatable';

interface Option {
    readonly label: string;
    readonly value: string;
}

interface SearchInputProps extends Omit<TextFieldProps, 'variant'> {
    value: Option;
    setValue: (value: Option) => void;
    initOptions: Option[]
    onCreateOption?: (value: any) => void
}

const SearchInput: FC<SearchInputProps> = ({setValue, value, initOptions, onCreateOption, ...props}) => {
    const [options, setOptions] = useState<Option[]>(initOptions);

    const createOption = useCallback((label: string) => ({
        label,
        value: label.toLowerCase().replace(/\W/g, ''),
    }), [])

    const handleCreate = useCallback((inputValue: string) => {
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setOptions((prev) => [...prev, newOption]);
            setValue(newOption);
        }, 1000);
        if (onCreateOption) {
            onCreateOption(inputValue);
        }
    }, [createOption, setValue, onCreateOption]);
    return (
        <div>
            <CreatableSelect
                isClearable
                onChange={(newValue) => setValue(newValue as any)}
                onCreateOption={handleCreate}
                options={options}
                value={value}
                placeholder={'Пошук пацієнта'}
                styles={{
                    control: (styles) => ({
                        ...styles,
                        backgroundColor: 'white',
                        padding: '7px 5px',
                    }),
                    clearIndicator: (styles) => ({
                       ...styles,
                       cursor: 'pointer',
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        cursor: 'pointer',
                    }),
                    menuPortal: (styles) => ({
                        ...styles, backgroundColor: 'white',
                    }),
                    menu: (styles) => ({
                        ...styles, backgroundColor: 'white',
                        zIndex: 100
                    }),
                }}
            />
        </div>
    );
};

export default SearchInput;