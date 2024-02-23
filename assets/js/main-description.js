const pokemonDescription =

    <li className="pokemon ${pokemon.type}">
        <span className="number">#${pokemon.number}</span>
        <span className="name">${pokemon.name}</span>
        <span className="abilities">${pokemon.abilities}</span>
        <span className="species"></span>
        <span className="evolutionChain"></span>

        <div className="detail">
            <ol className="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}"
                 alt="${pokemon.name}"/>
        </div>
    </li>