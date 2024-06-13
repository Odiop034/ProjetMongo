const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dblp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.error('Connexion à MongoDB échouée :', err));
