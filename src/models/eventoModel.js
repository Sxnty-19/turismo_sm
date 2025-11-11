import { supabase } from '../config/dbConfig.js';

// Obtener todos los eventos
export const getAllEventos = async () => {
  return await supabase.from('evento').select('*');
};

// Obtener un evento por ID
export const getEvento = async (id) => {
  return await supabase.from('evento').select('*').eq('id_evento', id).single();
};

// Crear un nuevo evento
export const addEvento = async (evento) => {
  return await supabase.from('evento').insert([evento]).select().single();
};

// Actualizar un evento
export const editEvento = async (id, evento) => {
  return await supabase.from('evento').update(evento).eq('id_evento', id);
};

// Eliminar un evento
export const removeEvento = async (id) => {
  return await supabase.from('evento').delete().eq('id_evento', id);
};
