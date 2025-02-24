import Title from '../layouts/Title'
import Contactleft from './Contactleft'
import ContactRight from './ContactRight'



const Contact = () => {

  return (

    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black ">
      <div className="flex  justify-center items-center text-center">

        <Title title="contact" des="Contact With Me"/>
      </div>

      <div className="w-full ">
        <div className=" w-full h-auto flex flex-col lgl:gap-0 gap-10 lgl:flex-row justify-between ">
          
          <Contactleft/>

          <ContactRight/>

        </div>
      </div>

    </section>
  )
}

export default Contact