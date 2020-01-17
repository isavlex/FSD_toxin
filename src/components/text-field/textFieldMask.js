import maskInput from 'vanilla-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import emailMask from 'text-mask-addons/dist/emailMask'

//maskedElement - the element to which the mask is applied
//mode - "email" otherwise date

function setMask(maskedElement, mode) {
    let today = new Date();
    let year = today.getFullYear();

    const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy HH:MM', { maxYear: year, minYear: year - 100 });

    mode = (mode === "email") ? "" : autoCorrectedDatePipe;

    let dateMask = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];
    let myInput = document.querySelector('.' + maskedElement);
    let maskedInputController = maskInput({
        inputElement: myInput,
        mask: (mode === "") ? emailMask : dateMask,
        pipe: mode
    });
}

export { setMask };

