

const Buttons = ({text, onClick}) => {
  return (
    <button onClick={onClick} className=" py-[6px] px-[12px] rounded-sm font-semibold bg-[#FF4343] text-white ">{text}</button>
  )
}

export default Buttons