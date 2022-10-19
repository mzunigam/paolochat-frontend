import  { useEffect, useState } from 'react'
import { useForm } from '../../Hooks/useForm'

export const Form_Helper = () => {

    const { onInputChange, formState, validateEmail } = useForm({
        username: '',
        email: '',
        password: '',
    });

    const [Show, setShow] = useState(true);
    const [ShowLoading, setShowLoading] = useState(false);
    const [Alerts, setNotifications] = useState([]);


    const validateInput = e => {
        e.preventDefault()

        if (Show) {
            if (formState.emailValid) {
                setShow(false);
            } else {
                setNotifications([...Alerts,
                { head: "ERROR", tittle: "EMAIL ERROR", text: `${formState.email == '' ? 'NO EMAIL' : formState.email} is not a email.`, icon: 0 }
                ])
            }
        }

        if (!Show) {
            if (formState.password == '123') {
                setShowLoading(true);
            } else {
                setNotifications([...Alerts,
                { head: "ERROR", tittle: "WRONG PASSWORD", text: `Hey, that's a wrong one.`, icon: 0 }
                ])
            }
        }
    }

    return {
        Show,
        setShow,
        ShowLoading,
        setShowLoading,
        Alerts,
        setNotifications,
        validateInput,
        onInputChange,
        formState,
        validateEmail
    }


}
