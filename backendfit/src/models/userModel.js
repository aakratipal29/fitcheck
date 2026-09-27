import { supabase } from '../config/supabase.js'; import { insert, one, update } from './baseModel.js';
export const createUser = (values) => insert('users', values); export const getUser = (id) => one('users', id); export const updateUser = (id, values) => update('users', id, values);
export const findUserByEmail = async (email) => { const { data, error } = await supabase.from('users').select('*').eq('email', email.toLowerCase()).maybeSingle(); if (error) throw error; return data; };
export const safeUser = ({ password_hash, ...user }) => user;
