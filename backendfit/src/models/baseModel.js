import { supabase } from '../config/supabase.js';
export const list = async (table, query = (q) => q) => { const { data, error } = await query(supabase.from(table).select('*')); if (error) throw error; return data; };
export const one = async (table, id) => { const { data, error } = await supabase.from(table).select('*').eq('id', id).single(); if (error) throw error; return data; };
export const insert = async (table, values) => { const { data, error } = await supabase.from(table).insert(values).select().single(); if (error) throw error; return data; };
export const update = async (table, id, values) => { const { data, error } = await supabase.from(table).update(values).eq('id', id).select().single(); if (error) throw error; return data; };
export const remove = async (table, id) => { const { error } = await supabase.from(table).delete().eq('id', id); if (error) throw error; };
