import * as React from "react";

interface CountryFlagValidatorProps {
    password: string
}

const countries = ["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"];

export const CountryFlagValidator = ({ password }: CountryFlagValidatorProps) => {

    const [selectedCountry] = React.useState(
        countries[Math.floor(Math.random() * countries.length)]
    );

    const isValid = password.toUpperCase().includes(selectedCountry);

    return (
        <div className="mt-6 w-full max-w-xs mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-5 flex flex-col items-center border border-gray-700">

                <div className="mb-4 p-4 rounded-xl bg-gray-800/70 shadow-inner border border-gray-700">
                    <img
                        src={`https://flagsapi.com/${selectedCountry}/flat/64.png`}
                        className="w-20 h-20 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                </div>


                <p
                    className={`text-center font-semibold text-sm transition-colors duration-300 ${
                        isValid ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {isValid
                        ? "✔ Heslo obsahuje správnou zkratku země"
                        : "✖ Heslo neobsahuje zkratku země"}
                </p>

                <p className="mt-2 text-xs text-gray-500 text-center">
                    Použij kód země podle vlajky
                </p>
            </div>
        </div>
    );
};