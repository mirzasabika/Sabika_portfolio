import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const ContactRight = () => {


  const form = useRef();

 

      // ============================== EMAIL WORKING END HERE ==============================

    const[username,setUsername]= useState("");
    const[phonenumber,setPhonenumber]= useState("");
    const[email,setEmail]= useState("");
    const[subject,setSubject]= useState("");
    const[message,setMessage]= useState("");
    const[errMsg,setErrmsg]= useState("");
    const[successmsg,setSuccessmsg]= useState("");
    
    // ============================== EMAIL VALIDATION STARTS HERE ==============================
    const emailValidates = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Simplified regex for basic email validation
      return emailRegex.test(String(email).toLowerCase());
    };

  // ============================== EMAIL VALIDATION STARTS END ==============================


    // ============================== PHONE NUM VALIDATION STARTS END ==============================

    const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

    // ============================== PHONE NUM VALIDATION STARTS END ==============================
    
    
      const handleChange=(e) =>{
        e.preventDefault();
        setErrmsg("");
     

        if (username === "") {
          setSuccessmsg("")
          setErrmsg("Username is required!");
          return;
        } else if (phonenumber === "") {
          setErrmsg("Phone Number is required!");
          return;
        } else if (!validatePhoneNumber(phonenumber)) {
          setErrmsg("Please give a Valid Phone Number!");
          return;
        } else if (email === "") {
          setErrmsg("Please give your Email!");
          return;
        } else if (!emailValidates(email)) {
          setErrmsg("Give a Valid Email!");
          return;
        } else if (subject === "") {
          setErrmsg("Please give your Subject!");
          return;
        } else if (message === "") {
          setErrmsg("Message is Required!");
          return;
        } else {
          setSuccessmsg(`Thank you dear ${username}, Your message has been sent Successfully!`);
      }

    // Reset form fields
    setUsername("");
    setPhonenumber("");
    setEmail("");
    setSubject("");
    setMessage("");

          // ============================== EMAIL WORKING STARTS HERE ==============================

    emailjs
    .sendForm('service_6z7lhcl', 'template_w7naoxx', form.current, 'sm0AJAXH3-rg3eEM2'
    )
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }
    


  return (
   
    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex fl-col gap-8 lgl:p-8 p-4  rounded-lg shadow-shadowOne ">
    <form ref={form} onSubmit={handleChange} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">


      {
          errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce   "> {errMsg} </p>
      }

      {
        successmsg && <p className="py-3 mt-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce  ">{successmsg}</p>
      }

      <div className="w-full flex flex-col lgl:flex-row gap-10">
       <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
         <p className="text-sm text-gray-400 tracking-wide capitalize">YOUR NAME</p>
         <input
         name='from_name'
          onChange={(e)=>setUsername(e.target.value)}
          value={username} 
          className={`${
            errMsg === "Username is required!" && "outline-designColor"
          } contactInput`}
          type="text" />
       </div>

       <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
         <p className="text-sm text-gray-400 tracking-wide">Your Number</p>
         <input 
         name='user_number'
         onChange={(e)=>setPhonenumber(e.target.value)} 
         value={phonenumber}
         className=
          {`${
           errMsg === "Phone Number is required!" && "outline-designColor"
           } contactInput`
          }
         type="text"
         />
       </div>

      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 tracking-wide">Email </p>
        <input
        name='user_email' 
        onChange={(e)=>setEmail(e.target.value)} 
        value={email}
        className=
        {`${
          errMsg === "Please give your Email!" && "outline-designColor"
          } contactInput`
         }
        type="email" />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 tracking-wide">Subject </p>
        <input onChange={(e)=>setSubject(e.target.value)}
        name='user_subject' 
         value={subject}
        className= 
        {`${
          errMsg === "Please give your Subject!" && "outline-designColor"
          } contactInput`
         }
        type="text" />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-400 tracking-wide">Message</p>
        <textarea 
        name='message'
        onChange={(e)=>setMessage(e.target.value)} 
        value={message}
        className=
        {`${
          errMsg === "Message is Required!" && "outline-designColor"
          } contactTextArea`
         }
        cols="30"
        rows="8"></textarea>
      </div>
       
      <div className="w-full">
        <button onClick={handleChange} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase
        hover:text-white  duration-300 hover:border-[1px] hover:border-designColor border-transparent">send message</button>
      </div>

      {
        errMsg && <p className="py-3 mt-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce   "> {errMsg} </p>
      }

      
     { 
        successmsg && <p className="py-3 mt-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce  ">{successmsg}</p>

      }

    </form>
  </div>
  )
}

export default ContactRight