
import React,{useState,useRef,useImperativeHandle } from "react";
                  //useImperativeHandle
            //МЕНЯЕТ ДВИЖЕНИЕ props  С НИЗУ В ВЕРХ

export const UseImperativeHandle = () => {
  const [card, setCard] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const cardEl = useRef(); // current = {focus() {}}
  const phoneEl = useRef();

  const validate = () => {
    if (card.length < 16) {
      setError("card");
      cardEl.current.focus(); // метод пришел снизу
      return;
    }

    if (phone.length < 11) {
      setError("phone");
      phoneEl.current.focus();
      return;
    }
    setError("");
  };

  return (
    <div>
      <h2>useImperativeHandle hook</h2>
      <div className="cont_butt" style={{ width: '105%' }}>

        <TextInput
          hasError={error === "card"}
          placeholder={"Card"}
          ref={cardEl}
          value={card}
          update={setCard}
        />
        <TextInput
          hasError={error === "phone"}
          placeholder={"Phone"}
          value={phone}
          update={setPhone}
          ref={phoneEl}
        />
        <button onClick={validate}>Validate</button>
      </div>
    </div>
  );
};


  //React.forwardRef(получает ref с наружи из"фун.UseImperativeHandle")
  const TextInput = React.forwardRef((props, ref) => {
 // props исе аргументы из  фун.UseImperativeHandle
 // ref() аргумент из  фун.UseImperativeHandle
  const { hasError, placeholder, value, update } = props;
  //console.log(update);
  const inputRef = useRef();


// useImperativeHandle добавляет фокус в input и возвращает в функ.  UseImperativeHandle 
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      }
    };
  });

  return (
    <div>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => update(e.target.value)}
        placeholder={placeholder}
        style={{ borderColor: hasError ? "red" : "black" }}
      />
  </div>

  );
});






