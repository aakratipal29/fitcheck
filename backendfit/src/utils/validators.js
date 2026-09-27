export const emailValid = (email) => /^\S+@\S+\.\S+$/.test(email || '');
export const assert = (condition, message, status = 422) => { if (!condition) { const error = new Error(message); error.status = status; throw error; } };
export const productFieldsValid = (body) => { assert(body.name?.trim(), 'Product name is required'); assert(body.brand?.trim(), 'Brand is required'); assert(body.category_id, 'Category is required'); assert(Number(body.price) >= 0, 'A valid price is required'); };
