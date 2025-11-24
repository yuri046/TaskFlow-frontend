export function validateEmail(newErrors, newUser, translate, email){
    if(!email){
            newErrors.email = translate('blank_email');
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = translate('invalid_email');
        } else{
            newUser.email = email;
        } 
}

export function validateName(newErrors, newUser, translate, name){
    if(!name){
        newErrors.name = translate("blank_name")
    } else {
        newUser.name = name
    }
}

export function validatePassword(newErrors, newUser, translate, password){
    if(!password){
        newErrors.password = translate('blank_password');
    } else if(password.length < 6 || password.length > 12){
        newErrors.password = translate('password_length');
    } else {
        newUser.password = password;
    }
}

export function validateReTypedPassword(newErrors, newUser, translate, reTypedPassword){
    if(!reTypedPassword){
                newErrors.reTypedPassword = translate("blank_password")
            } else if(reTypedPassword != password){
                newErrors.reTypedPassword = translate("blank_password_check")
            } else {
                newUser.password = password
            }
}

export function validateAllFields(newErrors, translate, name, email, password){
    if(!name && !email && !password){
        newErrors.allFieldsBlank = translate("allFieldsBlank")
    }
}