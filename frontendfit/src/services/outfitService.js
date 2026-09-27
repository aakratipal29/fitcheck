import api from'./api';export const outfits=()=>api.get('/outfits');export const saveOutfit=(d)=>api.post('/outfits',d);export const outfitSuggestions=()=>api.get('/outfits/recommendations');
