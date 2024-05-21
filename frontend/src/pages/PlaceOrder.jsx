import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Imię jest wymagane";
    if (!formData.lastName.trim()) newErrors.lastName = "Nazwisko jest wymagane";
    if (!formData.email.trim()) {
      newErrors.email = "Email jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email jest nieprawidłowy";
    }
    if (!formData.street.trim()) newErrors.street = "Ulica jest wymagana";
    if (!formData.city.trim()) newErrors.city = "Miasto jest wymagane";
    if (!formData.state.trim()) newErrors.state = "Województwo jest wymagane";
    if (!formData.postalCode.trim()) newErrors.postalCode = "Kod pocztowy jest wymagany";
    if (!formData.country.trim()) newErrors.country = "Kraj jest wymagany";
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon jest wymagany";
    } 
    else if (!/^\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Telefon jest nieprawidłowy";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formularz wysłany", formData);
    }
  };
  return (
    <div className='flex items-start justify-between gap-[50px] mt-[100px] phone:flex-col'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-semibold mb-[50px]'>Informacje o dostawie</p>
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Imię' />
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Nazwisko' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="email" placeholder='Email' />
        <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Ulica' />
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Miasto' />
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='State' />
        </div>
        <div className="flex gap-[10px]">
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Kod pocztowy' />
          <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Kraj' />
        </div>
        <input className='mb-[15px] w-full p-[10px] border border-solid border-[#9ACD32]' type="text" placeholder='Telefon' />
      </div>
      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-[1] flex-col gap-5">
          <h2 className='font-bold text-2xl'>Suma</h2>
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Podsumowanie</p>
              <p>{getTotalCartAmount()} zł</p>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='flex justify-between text-[#555]'>
              <p>Opłata za dostawę</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 6} zł</p>
            </div>
            <hr className='m-[10px_0px]' />
            <div className='flex justify-between text-[#555]'>
              <b>Razem</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+6} zł</b>
            </div>
          </div>
          <div className='flex justify-between phone:flex-col-reverse phone:items-center'>
            <button className='border-none text-white bg-[#9ACD32] w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer mt-[30px]'>PRZEJDŹ DO ZAPŁATY</button>
            <button onClick={() => navigate('/cart')} className='text-[#9ACD32] border border-solid border-[#9ACD32] bg-white w-[max(15vw,200px)] p-[12px_0px] rounded-[4px] cursor-pointer mt-[30px]'>WRÓĆ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
