import React from 'react'
import { assets } from '../assets/assets'

const Popups = ({showPopup, setShowPopup}) => {
  return (
    showPopup === 'policyPrivacy'
    ?
    <div className='absolute z-[1] w-full h-full bg-[#00000090] grid'>
      <form className='place-self-center w-[max(23vw,800px)] phone:w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-sm animate-fadeIn duration-500'>
          <div className="flex justify-between items-center text-black">
              <h2 className='font-medium text-2xl'>Polityka prywatności</h2>
              <img className='cursor-pointer' onClick={() => setShowPopup(false)} src={assets.cross_icon} alt="cross_icon" />
          </div>
          <div>
            <b>Wstęp</b>
              <br/><br/>
            GlovoApp, będąc usługą dostarczającą jedzenie, zwraca uwagę na znaczenie prywatności naszych klientów i użytkowników. W związku z tym, przystępujemy do wyjaśnienia naszej polityki prywatności i sposobu obchodzenia się z Twoimi danymi.
              <br/><br/>
            <b>** Dane osobowe**</b>
              <br/><br/>
            GlovoApp zebruje i przechowuje Twoje dane osobowe, w tym imię, nazwisko, adres e-mail, numer telefonu, datę urodzenia i inne informacje dostarczone przez Ciebie podczas rejestracji lub korzystania z naszych usług. Te dane są przetwarzane w celu realizacji umowy i świadczenia usług przez nas.
              <br/><br/>
            <b>Przetwarzanie danych</b>
              <br/><br/>
            GlovoApp może przetwarzać Twoje dane osobowe w następujących celach:
              <br/>
              &ensp;&ensp;realizacji umowy i świadczenia usług przez nas;<br/>
              &ensp;&ensp;ewentualnego wywiadu i postępowania w przypadku naruszenia warunków korzystania z naszych usług;<br/>
              &ensp;&ensp;prowadzenia statystyk i analiz dotyczących korzystania z naszych usług.<br/>
              <br/>
            <b>Przekazywanie danych</b>
              <br/><br/>
            GlovoApp może przekazać Twoje dane osobowe następującym podmiotom:<br/>
            &ensp;&ensp;partnerom współpracującym z nami w ramach świadczenia usług (np. restauracjom, dostawcom);<br/>
            &ensp;&ensp;organom administracji publicznej lub sądownictwa w przypadku obowiązku prawnego;<br/>
            &ensp;&ensp;firmom powiązanym z nami w ramach grupy kapitałowej.<br/><br/>
            <b>Ochrona danych</b><br/><br/>

            GlovoApp zapewnia ochronę Twoich danych osobowych przy pomocy odpowiednich środków technicznych i organizacyjnych. Wszystkie dane są przechowywane w bezpiecznym i kontrolowanym środowisku.
            <br/><br/>
            <b>Twoje prawa</b>
            <br/><br/>
            Masz prawo dostępu do Twoich danych osobowych, ich poprawiania, usuwania lub wniesienia sprzeciwu wobec przetwarzania. W celu skorzystania z tych praw, prosimy o kontakt z naszym biurem obsługi klienta.
            <br/><br/>
            <b>Zmiany polityki prywatności</b>
            <br/><br/>
            GlovoApp zastrzega sobie prawo do zmiany tej polityki prywatności w dowolnym czasie. W przypadku zmian, które mogą mieć wpływ na Twoje prawa i wolności, będziemy informować Cię o tym poprzez publikację nowej wersji polityki prywatności na naszej stronie internetowej.
            <br/><br/>
            <b>Kontakt</b>
            <br/><br/>
            Jeśli masz jakiekolwiek pytania lub sugestie dotyczące tej polityki prywatności, prosimy o kontakt z nami za pomocą formularza kontaktowego na naszej stronie internetowej.
          </div>
      </form>
    </div>
    :
    (showPopup === 'aboutUs'
     ? <div className='absolute z-[1] w-full h-full bg-[#00000090] grid'>
        <form className='place-self-center w-[max(23vw,800px)] phone:w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-lg text-sm animate-fadeIn duration-500'>
            <div className="flex justify-between items-center text-black">
                <h2 className='font-medium text-2xl'>O nas</h2>
                <img className='cursor-pointer' onClick={() => setShowPopup(false)} src={assets.cross_icon} alt="cross_icon" />
            </div>
            <div>
              GlovoApp to rewolucyjna platforma, która przynosi wyjątkową wygodę zamawiania jedzenia prosto pod drzwi. Z szerokim wyborem menu, dostarczamy świeże, smakowite dania do Twojego domu w tempie błyskawicznym. Nasza intuicyjna strona pozwala łatwo przeglądać i zamawiać swoje zamówienia, zapewniając niezrównane doświadczenie użytkownika. Dołącz do milionów zadowolonych klientów i odkryj, dlaczego GlovoApp to najlepsze rozwiązanie dla Twojego głodu! Nie czekaj dłużej - zamów już teraz i delektuj się ulubionymi smakami bez wychodzenia z domu!
            </div>
        </form>
      </div>
      : <></>
    )
  )
}

export default Popups
