// ==================this  benner  use for the loggedhome file that file exucute by the App.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../variants";

const LoggedBenner = ({ banner, headding, subheading, btn1 }) => {

  const [liters, setLiters] = useState('');
  const [ammonia, setAmmonia] = useState('');
  const [tmtd, setTmtd] = useState('');
  const [ammoniaMl, setAmmoniaMl] = useState('');
  const [tmtdMl, setTmtdMl] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLiters(value);
    const calculatedAmmonia = (value * 3.5 / 100).toFixed(2);
    setAmmonia(calculatedAmmonia);
    const calculatedTmtd = ((value * 125 / 1000) / 100).toFixed(2);
    setTmtd(calculatedTmtd);
    
    const ammonia_ml = parseFloat(calculatedAmmonia) * 1000;
    const tmtd_ml = parseFloat(calculatedTmtd) * 1000;

    setAmmoniaMl(ammonia_ml.toFixed(2));
    setTmtdMl(tmtd_ml.toFixed(2));
  };

  


  return (

 

    <div className="gardientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* ===============================================================bennr image========================================= */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, ammount: 0.7 }}
        >
          <img src={banner} alt="" className="lg:h-[386px] lg:w-[429px]" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, ammount: 0.7 }}
          className="md:w-3/5"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-primary mb-6 leading-relaxed">
            {headding}
          </h2>
          <p className=" text-tartiary-700 text-2xl mb-8">{subheading}</p>

          {/* ///////////inpunt feld and butten//////// */}
          <div className="flex flex-col md:flex-row  items-center gap-3 ">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 ">
              <label
                htmlFor="liters"
                className="block text-white font-semibold md:text-xl "
              >
                <p className="">Enter Today Tapping Litter:</p>
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="liters"
                  value={liters}
                  onChange={handleInputChange}
                  className="py-3 px-8 bg-transparent border border-black text-white rounded focus:outline-none focus:ring-2 focus:ring-dark_green transition-all duration-300 appearance-none"
                  placeholder="Enter liters"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">L</span>
              </div>
              {/* When you implement adding today tapping details look at video 23.02(md ai mamun(title = React JS Project using Tailwind CSS for Beginners | React JS Tutorial 2023)) */}
            </div>
            {/* ////////////////////////////////// */}
            <div>
              <button className="py-3 px-8 bg-green font-semibold text-white rounded hover:bg-dark_grenn  transition-all duration-300">
                {btn1}
              </button>{" "}
              {/* When you implement adding today tappin details look at video 23.02(md ai mamun(titel = React JS Project using Tailwind CSS for Beginners | React JS Tutorial 2023)) */}
            </div>

          </div>
          {/* ////////////////display////////// */}
          <div>
           
          {liters && (
            
            <div className="mt-4 text-white text-xl ">
              <h3 className="text-primary  mb-5 font-semibold">Add Chemical's For Today Latex</h3>
              <div className="border border-white rounded p-4 w-1/2  ">
              <p className="mb-4">Ammonia: {ammonia}L ({ammoniaMl} mL)</p>
              <p>TMTD: {tmtd}L ({tmtdMl} mL)</p>
              </div>
             
            </div>
          )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoggedBenner;
