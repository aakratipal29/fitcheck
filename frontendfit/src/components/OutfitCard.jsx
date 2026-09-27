export default function OutfitCard({outfit}){return <article className="product"><h3>{outfit.name}</h3><p>{outfit.description||'A saved FitCheck look'}</p></article>}
