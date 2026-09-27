import { supabase } from '../config/supabase.js';
export const listWishlist=async(userId)=>{const {data,error}=await supabase.from('wishlists').select('*, products(*)').eq('user_id',userId);if(error)throw error;return data};
export const addWishlist=async(user_id,product_id)=>{const {data,error}=await supabase.from('wishlists').insert({user_id,product_id}).select().single();if(error)throw error;return data};
export const deleteWishlist=async(userId,productId)=>{const {error}=await supabase.from('wishlists').delete().eq('user_id',userId).eq('product_id',productId);if(error)throw error};
