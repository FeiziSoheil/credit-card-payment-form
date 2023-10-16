let cardNumberElem = document.querySelector('.card_number')
let cardNumberInput = document.querySelector('.card-number-input')
let cardForm = document.querySelector('.card-input-box')
let holderNameElem = document.querySelector('.cardHolderUser')
let holderNameInput = document.querySelector('.card-holder-input')
let cardMonthInput = document.querySelector('.card-date-input')
let cardYearInput = document.querySelector('.card_date_year_input')
let cardMonthTitle = document.querySelector('.cardData-month')
let cardYearTitle = document.querySelector('.cardDate-year')
let frontCard = document.querySelector('.front-card')
let backCard = document.querySelector('.back-card')
let cvvElem = document.querySelector('.cvv')
let cvvInput = document.querySelector('.cvv-input')


// cardNumberInput.oninput = (e) => {
//     if (cardNumberInput.value === "") {
//         cardNumberElem.innerHTML = "#### #### #### ####";
//     }else if(cardNumberInput.value.length === 16){
//         cardForm.preventDefault()
//     } else{
//         cardNumberElem.innerHTML = cardNumberInput.value;
//     }

    
// }



cardNumberInput.addEventListener('input', (e) => {
    let inputValue = cardNumberInput.value.replace(/\D/g, ''); // حذف همه کاراکترهای غیر عددی از ورودی
    let formattedValue = formatCardNumber(inputValue);
    
    cardNumberElem.textContent = formattedValue;
    
    if (inputValue.length === 16) {
        e.preventDefault(); // توقف رویداد ورود اطلاعات بیشتر بعد از وارد کردن 16 رقم
    }
});

function formatCardNumber(inputValue) {
    let formattedValue = inputValue.replace(/(\d{4})/g, '$1 ').trim();
    console.log(formattedValue);
    if (formattedValue.length < 19) {
        console.log(formattedValue.length);
        formattedValue += '#### #### #### ####'.slice(formattedValue.length);
    }
    return formattedValue;
}

holderNameInput.oninput=()=>{
    holderNameElem.innerHTML = holderNameInput.value
}

cardMonthInput.oninput=()=>{
    cardMonthTitle.innerHTML= cardMonthInput.value 
}
cardYearInput.oninput=()=>{
    cardYearTitle.innerHTML=cardYearInput.value
}


// cvvInput.addEventListener('input' , (e)=>{
//     let cvvInputValue = cvvInput.value.replace(/\D/g,'')

//     if(cvvInputValue.length>=4){
//         // e.preventDefault()
//         cvvInputValue = cvvInputValue.slice(0,4)
//     }
//     cvvElem.textContent = cvvInputValue
// })

cvvInput.addEventListener('input', (e) => {
    let cvvInputValue = cvvInput.value.replace(/\D/g, '');

    if (cvvInputValue.length > 4) {
        cvvInputValue = cvvInputValue.slice(0, 4); // محدود کردن تعداد ارقام به 4
        cvvInput.value = cvvInputValue; // تنظیم مقدار ورودی با تعداد ارقام محدود شده
    }

    cvvElem.textContent = cvvInputValue;

    if (cvvInputValue.length === 4) {
        e.preventDefault(); // متوقف کردن تایپ کردن اگر تعداد ارقام به 4 رسید
    }
});

cvvInput.addEventListener('mouseenter' , ()=>{
    document.querySelector('.card-box').classList.add('flipcard')
})

cvvInput.addEventListener('mouseleave' , ()=>{
    document.querySelector('.card-box').classList.remove('flipcard')
})



