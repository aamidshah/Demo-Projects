import { FaCross, FaCrosshairs } from "react-icons/fa";
import { TbFlagCancel } from "react-icons/tb";

const Modal:React.FC<{children: React.ReactNode; onClose:()=> void}> = ({children, onClose}) => {


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        
        {children}
        <button onClick={onClose} className="absolute top-0 right-2 text-gray-900 font-extrabold text-[1.3rem]   ">
       x
        </button>
      </div>
    </div>
  )
}

export default Modal