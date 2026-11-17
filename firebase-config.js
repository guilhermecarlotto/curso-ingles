/* Configuração da sincronização na nuvem (Firebase).
   Enquanto estiver como "null", o curso funciona normalmente, só que sem sincronizar.
   Para ativar: siga o passo a passo do arquivo NUVEM.md (nesta pasta) e cole aqui o objeto
   "firebaseConfig" que o console do Firebase mostra. Ficará assim:

   window.FIREBASE_CONFIG = {
     apiKey: "AIza...",
     authDomain: "seu-projeto.firebaseapp.com",
     projectId: "seu-projeto",
     appId: "1:123456789:web:abc123"
   };

   Observação: essa "apiKey" não é uma senha. Quem protege os seus dados são o login e as regras do Firestore. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBJrR0BoCzTrx--hvWZX_M69wh0-kuEkW0",
  authDomain: "curso-de-ingles-36c37.firebaseapp.com",
  projectId: "curso-de-ingles-36c37",
  storageBucket: "curso-de-ingles-36c37.firebasestorage.app",
  messagingSenderId: "926188194132",
  appId: "1:926188194132:web:91355c93ae2fbfc8dae0c1"
};
