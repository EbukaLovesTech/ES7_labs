'use client';
import { useRef, useState } from "react";

export default function BudgetSelect({ Styles }) {
    const [customSelectIsOpen, setIsCustomSelectIsOpen] = useState(false)
    const nativeSelectRef = useRef(null);
    const customSelectRef = useRef(null);
    const customSelectTriggerRef = useRef(null);
    const customSelectOptRef = useRef(null);
    const isOptionDisabled = true;
    const options = [
        {
            ref: null,
            className: 'selectCustom-option',
            text: '10k',
            value: '10k'
        },
        {
            ref: null,
            className: 'selectCustom-option',
            text: '20k',
            value: '20k'
        },
        {
            ref: null,
            className: 'selectCustom-option',
            text: '30k',
            value: '30k'
        }
    ];
    const optionRefs = [];

    for (const option of options) {
        optionRefs.push(option.ref);
    }
    const findIndex = (value) => {
        return optionRefs.findIndex((optionRef) => optionRef.current.getAttribute('data-value') === value);
    }
    let optionChecked = '';
    function addEventToDocument() {
        if (customSelectIsOpen) {
            document.addEventListener('click', watchClickOutside);
            document.addEventListener('keydown', supportKeyboardNavigation)
        }
    }
    function removeEventToDocument() {
        if (!customSelectIsOpen) {
            document.removeEventListener("click", watchClickOutside);
            document.removeEventListener("keydown", supportKeyboardNavigation);
        }
    }
    function toggleSelectCustom() {
        const isClosed = !customSelectRef.current.classList.contains('isActive');

        if (isClosed) {
            openSelectCustom();
            setIsCustomSelectIsOpen(true);
        } else {
            closeSelectCustom();
            setIsCustomSelectIsOpen(false)
        }
    }

    function openSelectCustom() {
        customSelectRef.current.classList.add('isActive');
        customSelectRef.setAttribute('aria-hidden', false);
        if (optionChecked) {
            updateCustomSelectHovered(findIndex.bind('this', optionChecked))
        }
        addEventToDocument();
    }

    function closeSelectCustom() {
        customSelectRef.current.classList.remove('isACtive');

        customSelectRef.setAttribute('aria-hidden', true);

        updateCustomSelectHovered(-1);
        removeEventToDocument();
    }
    return (
        <div className={`${Styles.input_section} budget_section`}>
            <label htmlFor='budget'>Budget</label>
            <div className={Styles.selectWrapper}>
                <select id='budget' className={`${Styles.on_focus} ${Styles.selectNative} js-selectNative`} ref={nativeSelectRef}>
                    <option value disabled={isOptionDisabled}>Select...</option>
                    <option value='10k'>10k</option>
                    <option value='20k'>20k</option>
                    <option value='30k'>30k</option>
                </select>
                <div className={`${Styles.selectCustom} js-selectCustom`} aria-hidden="true" ref={customSelectRef}>
                    <div className={Styles.selectCustom_trigger} ref={customSelectTriggerRef}>Select...</div>
                    <div className={Styles.selectCustom_options} ref={customSelectOptRef}>
                        {options.map((option, index) => {
                            return (
                                <div
                                    className={option.className}
                                    key={index}
                                    ref={optionRefs[index]}
                                >
                                    {option.text}
                                </div>);
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
