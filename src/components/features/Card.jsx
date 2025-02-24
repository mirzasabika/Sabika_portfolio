import React, { useState } from 'react'
import { TiArrowRightThick } from "react-icons/ti";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth:"23rem",
    width:"90%",
    background: "rgba(33, 36, 40, 0.9)", // Use RGBA for transparency
    backdropFilter: "blur(10px)", // Adjust blur value
    borderRadius: "8px", // Optional for smooth edges
    padding: "1rem",
    border:"2px solid #212428",
  },
};
Modal.setAppElement('#root');

const Card = ({title,des,icon,li1,li2,li3,li4,li5}) => {

  const [modalIsOpen, setIsOpen] = useState(false);
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
   
    <div className="w-full px-5 h-80 py-8 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group ">

      {/* modal */}

      <Modal isOpen={modalIsOpen}  onRequestClose={closeModal}
        style={customStyles} >

        <div className="flex items-center gap-2 capitalize text-lg text-designColor ">
          <span className="h-10 items-center flex text-xl " >{icon}</span>
          <h6>{title}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7 text-lightText">
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>{li4}</li>
          <li>{li5}</li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-lightText">
            Close
          </button>
        </div>

      </Modal>

     <div className="h-72 overflow-hidden">

    <div className="flex flex-col gap-8 capitalize translate-y-14 group-hover:translate-y-0 transition-transform  duration-500">

    <div className="">

<span className="text-5xl text-designColor">{icon}</span> 
</div>

<div className=" flex flex-col gap-4">
<h2 className="mdl:text-2xl text-xl font-titleFont font-bold text-gray-300"> {title}
</h2>

<p className='base xs:text-[11px] xl:text-[11.60px] sm:text-[12px] sml:text-[13.6px] md:text-[12px] mdl:text[90px] lg:text-[13px] slg:text-[14px] mds:text-[11px] fd:text-[14.5px]'>{des}</p>

<span onClick={() =>
 {
  openModal();
  }}
    className="text-designColor text-2xl cursor-pointer">
<TiArrowRightThick />
</span>
</div>
    </div>

    </div>
    </div>
  )
}

export default Card