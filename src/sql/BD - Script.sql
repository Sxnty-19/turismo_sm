-- ========================================================
-- INNTECH_2 - BASE DE DATOS
-- Versión: Parcial - COM11_2025-3 (Corte N°2)
-- ========================================================

-- 1. Tabla: lugar
CREATE TABLE lugar (
    id_lugar SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    ubicacion VARCHAR(255),
    tipo VARCHAR(100)
);

-- 2. Tabla: evento
CREATE TABLE evento (
    id_evento SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    ubicacion VARCHAR(255),
    lugar_id INT,
    CONSTRAINT fk_evento_lugar FOREIGN KEY (lugar_id)
        REFERENCES lugar (id_lugar)
        ON DELETE SET NULL
);

-- 3. Tabla: servicio
CREATE TABLE servicio (
    id_servicio SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    categoria VARCHAR(100),
    descripcion TEXT,
    direccion VARCHAR(255),
    contacto VARCHAR(100),
    lugar_id INT,
    CONSTRAINT fk_servicio_lugar FOREIGN KEY (lugar_id)
        REFERENCES lugar (id_lugar)
        ON DELETE SET NULL
);