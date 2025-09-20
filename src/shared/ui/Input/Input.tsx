import {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            setCaretPosition(value?.length || 0);
            ref.current?.focus();
        }
    }, [autoFocus, value?.length]);

    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    }

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <div className={classNames(cls.Input, {}, [className])}>
                {placeholder && <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>}
                <div className={cls.caretWrapper}>
                    <input
                        ref={ref}
                        className={cls.input}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        {...otherProps}
                    />
                    {isFocused && <span
                        className={cls.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />}
                </div>
            </div>
        </div>
    )

});