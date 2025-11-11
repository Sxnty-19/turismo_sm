import { supabase } from '../config/dbConfig.js';

// Obtener todos los lugares
export const getAllLugares = async () => {
  return await supabase.from('lugar').select('*');
};

// Obtener un lugar por ID
export const getLugar = async (id) => {
  return await supabase.from('lugar').select('*').eq('id_lugar', id).single();
};

// Crear un nuevo lugar
export const addLugar = async (lugar) => {
  return await supabase.from('lugar').insert([lugar]).select().single();
};

// Actualizar un lugar
export const editLugar = async (id, lugar) => {
  return await supabase.from('lugar').update(lugar).eq('id_lugar', id);
};

// Eliminar un lugar
export const removeLugar = async (id) => {
  return await supabase.from('lugar').delete().eq('id_lugar', id);
};
