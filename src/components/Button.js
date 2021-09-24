import React, {useState, useEffect} from "react";



function Button (){
    const url = "http://api.countrylayer.com/v2/region/Asia?access_key=c8b2029b4d95438707b04873554e8d27 "

    const[countries,setCountries] = useState([])

    
   
    const fetchCountries = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    }

    const handleClick = () => {
        fetchCountries()
} 


    useEffect(() => {
        fetchCountries()
    }, [])
    return (
        <>
            <section className='countries'>
                {countries.map((country) => {

                    const { name, capital, flag, region, subregion, population, borders, languages } = country;

                    return (
                    <article key={name}>

                        <div>
                            <img src={flag} alt={name} />
                            <h3>{name}</h3>
                            <h4>{capital}</h4>
                            <h4>{population}</h4>
                            <h4>{region}</h4>
                            <h4>{subregion}</h4>
                            <h4>{borders}</h4>
                            <h4>{languages}</h4>


                        </div>
                    </article>);

                })}
            </section>

            <div>
                <button onClick={handleClick} className='btn' type='submit'> Refresh</button>
            </div>
        </>
    );
}

export default Button;