'use strict';

/** Convierte un texto en un slug apto para URLs. */
function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Acota un número al rango [min, max]. */
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

/** Devuelve un array sin elementos duplicados. */
function unique(arr) {
  return [...new Set(arr)];
}

/** Pone en mayúscula la primera letra de un texto. */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { slugify, clamp, unique, capitalize };
