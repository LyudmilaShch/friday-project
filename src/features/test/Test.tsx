import React, {useState} from 'react'
import SuperButton from "../../main/ui/components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../main/ui/components/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../main/ui/components/c4-SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../main/ui/components/c1-SuperInputText/SuperInputText";
import SuperSelect from "../../main/ui/components/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../main/ui/components/c6-SuperRadio/SuperRadio";
import s from './text.module.css'



export const Test = () => {
    const [valueForInput, setValueForInput] = useState<string>('')
    const [value, setValue] = useState<string>('')
    const [option, onChangeOption] = useState(1)
    const [error, setError] = useState<string>('')

    const arr = [
        { id: 1, value: 'Pre-junior' },
        { id: 2, value: 'Junior' },
        { id: 3, value: 'Junior +' },
    ]


    return (
        <div>
            <div className={s.container}>
            <SuperInputText
                id={'input'}
                value={valueForInput}
                onChangeText={setValueForInput}
                error={error}
                onEnter={() => {
                    setError(
                        valueForInput.trim()
                            ? ''
                            : 'Error'
                    )
                    setValueForInput('')
                }}
            />

            <SuperButton id={'button'}>
                Button
            </SuperButton>

            <SuperCheckbox id={'checkbox'}>
                some text
            </SuperCheckbox>

            <SuperEditableSpan
                id={'spanable-input'}
                value={value}
                onChangeText={setValue}
                spanProps={{
                    id: 'hw6-editable-span',
                    defaultText: 'enter text...',
                }}
            />

            <SuperSelect
                id={'select'}
                options={arr}
                value={option}
                onChangeOption={onChangeOption}
            />

            <SuperRadio
                id={'radio'}
                name={'radio'}
                options={arr}
                value={option}
                onChangeOption={onChangeOption}
            />
            </div>



        </div>
    )

}