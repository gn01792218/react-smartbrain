import { render } from '@headlessui/react/dist/utils/render'
import { useEffect, useState } from 'react'
import ReacDOM from 'react-dom'
interface Props{
    children?:JSX.Element | JSX.Element[]
}
function Modal(props: Props) {
    const modalRoot = document.getElementById('modal-root')
    const [el, setEl] = useState(document.createElement('div'))
    useEffect(() => {
        modalRoot?.appendChild(el)
        // returned function will be called on component unmount 
        return () => {
            modalRoot?.removeChild(el)
        }
    }, [])
    return ReacDOM.createPortal(props.children, el)
}
export default Modal