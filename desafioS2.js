const Forms  = document.querySelector('.CardForm');
const Campos = document.querySelectorAll('.inputs_required');
const Spans  = document.querySelectorAll('.span_required');

const NameInCard     = document.querySelector('.InCardHolder_Name');
const NumberInCard   = document.querySelector('.InCard_Number');
const ExpMonthInCard = document.querySelector('.InCard_Exp_Month');
const ExpYearInCard  = document.querySelector('.InCard_Exp_Year');
const CVCInCard      = document.querySelector('.InCard_CVC');

const CardName      = document.querySelector('.NameInput');
const CardNumber    = document.querySelector('.NumberInput');
const CardExpMonth  = document.querySelector('.MonthInput');
const CardExpYear   = document.querySelector('.YearInput');
const CardCVC       = document.querySelector('.CVCInput');

const ErrorMessage   = document.querySelector('.ErrorInForm');
const ConfirmButton  = document.querySelector('.ConfirmButton');
const ContinueButton = document.querySelector('.ContinueButton');
const SuccessForm    = document.querySelector('.SuccessForm');



function setError(index){
    Campos[index].style.border = '2px solid #e63636';
    Spans[index].style.display = 'block';
}

function removeError(index){
    Campos[index].style.border = '2px solid rgba(0, 0, 0, 0.5)';
    Spans[index].style.display = 'none';
}


function NameValidate(){
    const ValidName = /^[A-Za-z\s]+$/;
    if(CardName.value.length < 3 || !ValidName.test(CardName.value)){
        setError(0);
    }
    else{
        removeError(0);
    }
}

function NumberValidate(){
    const sanitizedValue = CardNumber.value.replace(/\D/g, '').slice(0, 16);
    CardNumber.value = sanitizedValue.replace(/(\d{4})/g, '$1 ').trim();
    if (sanitizedValue.length === 16) {
      removeError(1);
    } else {
      setError(1);
    }
}

function ExpMonthValidate(){
    const MonthValue = CardExpMonth.value;
    if(MonthValue >= 1 && MonthValue <= 12 && MonthValue.length === 2){
        removeError(2);
    }
    else{
        setError(2);
    }
}

function ExpYearValidate(){
    const YearValue = CardExpYear.value;
    if(YearValue >= 00 && YearValue.length === 2){
        removeError(3);
    }
    else{
        setError(3);
    }
}

function CVCValidate(){
    const CVCValue = CardCVC.value;
    if(CVCValue >= 0 && CVCValue.length === 3){
        removeError(4);
    }
    else{
        setError(4);
    }
}



CardName.addEventListener('input', (e) => {
    NameInCard.textContent = e.target.value;
    NameValidate();
});

CardNumber.addEventListener('input', (e) =>{
    NumberInCard.textContent = e.target.value;
    NumberValidate();
});

CardExpMonth.addEventListener('input', (e) =>{
    ExpMonthInCard.textContent = e.target.value;
    ExpMonthValidate();
})

CardExpYear.addEventListener('input', (e) =>{
    ExpYearInCard.textContent = e.target.value;
    ExpYearValidate();
})

CardCVC.addEventListener('input', (e) =>{
    CVCInCard.textContent = e.target.value;
    CVCValidate();
});



ConfirmButton.addEventListener('click', () =>{
    if(     
        CardName.value.length >=3 &&
        CardNumber.value.replace(/\D/g, '').length === 16 &&
        CardExpMonth.value >= 1 && CardExpMonth.value <= 12 &&
        CardExpYear.value.length === 2 &&
        CardCVC.value.length === 3 
    ){
        SuccessForm.style.display = 'block';
        Forms.style.display = 'none';
        ErrorMessage.style.display = 'none';
    }
    else{
        ErrorMessage.style.display = 'block';
    }
});

ContinueButton.addEventListener('click', () =>{
    CardName.value = '';
    CardNumber.value = '';
    CardExpMonth.value = '';
    CardExpYear.value = '';
    CardCVC.value = '';

    NameInCard.textContent = 'JANE APPLESEED';
    NumberInCard.textContent = '0000 0000 0000 0000';
    ExpMonthInCard.textContent = '00';
    ExpYearInCard.textContent = '00';
    CVCInCard.textContent = '000';

    SuccessForm.style.display = 'none';
    Forms.style.display = 'block';
});
