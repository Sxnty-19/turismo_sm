import { supabase } from '../config/dbConfig.js';

// Obtener todos los servicios
export const getAllServicios = async () => {
  return await supabase.from('servicio').select('*');
};

// Obtener un servicio por ID
export const getServicio = async (id) => {
  return await supabase.from('servicio').select('*').eq('id_servicio', id).single();
};

// Crear un nuevo servicio
export const addServicio = async (servicio) => {
  return await supabase.from('servicio').insert([servicio]).select().single();
};

// Actualizar un servicio
export const editServicio = async (id, servicio) => {
  return await supabase.from('servicio').update(servicio).eq('id_servicio', id);
};

// Eliminar un servicio
export const removeServicio = async (id) => {
  return await supabase.from('servicio').delete().eq('id_servicio', id);
};
