import React, { useState } from "react";

function SearchForm() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const updateMessage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    setError("");
    setResult("");
    console.log(error);
    if (message === "" || message.length !== 11) {
      setError("Please enter a valid phone number");
      return;
    }
    checkSim();
  };
  const checkSim = async () => {
    setError("");
    setResult("");
    setLoading(true);

    let number;

    // if (message.slice(0, 3) === "234") {
    //   number = `0${message.slice(3)}`.slice(0, 4);
    // } else if (message.slice(0, 4) === "+234") {
    //   number = `0${message.slice(4)}`.slice(0, 4);

    if (message.slice(0, 5) === "07025") {
      number = message.slice(0, 5);
    } else {
      number = message.slice(0, 4);
    }
    try {
      const response = await fetch(
        `https://sim-checker.vercel.app/phone_number/find/${number}/`
      );
      let data = await response.json();
      setResult(data);
      if (data) {
        setLoading(false);
        setResult(data);
        setMessage("");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };
  return (
    <div className="md:w-[70%] mx-auto grid gap-2 my-20 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
        Discover Your Sim
      </h1>
      <h5 className="text-light_blue">
        Find the Mobile Operators of your phone number easily
      </h5>
      <div className="md:flex gap-y-5 gap-5 mt-5 justify-center">
        <input
          className="px-4 py-2 mb-5 rounded-md outline-none md:w-[60%] w-full text-dark_purple"
          onChange={updateMessage}
          value={message}
          type="number"
          placeholder="Enter your number : 08012345678"
        />
        <div>
          <button
            className="bg-dark_purple px-5 py-2 rounded-md font-medium"
            onClick={handleClick}
          >
            Find Sim
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {result && (
        <p className="text-2xl sm:text-3xl">
          {result?.data ? result?.data[0].sim.name : result.message}
        </p>
      )}
      {error && (
        <p className="text-xl text-red-500">
          {error.message ? error.message : error}
        </p>
      )}
    </div>
  );
}

export default SearchForm;
