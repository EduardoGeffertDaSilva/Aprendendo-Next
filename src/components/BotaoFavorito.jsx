"use client"

import { use, useState } from "react"

export default function BotaoFavorito(){
    const [fovorio,setFavorito] = useState(false);

    //console.log("ola cliente")
    return(
        <button onClick={() => setFavorito(!fovorio)}
        className={`mt-2 px-4 py-2 rounded-md transition-colors ${fovorio?`bg-red-500 text-white`:`bg-gray-200 text-gray-700 hover:bg-gray-300`}`}
        >
            {fovorio? '❤️ Favoritado' : '🤍 Favoritar'}
        </button>
    )
}