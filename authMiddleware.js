// authMiddleware.js



export default function({ to, next }) {
  const isAuthenticated = localStorage.getItem('userToken'); /* Vérifiez ici si l'utilisateur est connecté */;
  
  if (isAuthenticated){
    // Si l'utilisateur est connecté, continuez la navigation
    next();
  } else {
    // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    next('/'); // Remplacez '/login' par l'URL de votre page de connexion
  }
}
