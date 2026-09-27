import api from'./api';export const uploadImage=(image)=>{const f=new FormData();f.append('image',image);return api.post('/upload/product',f)};
