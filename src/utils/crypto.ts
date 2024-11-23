import CryptoJS from 'crypto-js';

// Utiliser une clé secrète sécurisée (à stocker dans les variables d'environnement en production)
const SECRET_KEY = 'glowify-secret-key-2024';

export const encryptPassword = (password: string): string => {
  return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};

export const verifyPassword = (password: string, hash: string): boolean => {
  try {
    const decrypted = CryptoJS.AES.decrypt(hash, SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return password === decrypted;
  } catch (error) {
    console.error('Erreur lors de la vérification du mot de passe:', error);
    return false;
  }
};