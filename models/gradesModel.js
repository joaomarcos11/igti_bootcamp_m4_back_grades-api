export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    hp: {
      type: String,
      required: true,
      min: 0,
    },
    attack: {
      type: String,
      required: true,
      min: 0,
    },
    speed: {
      type: String,
      required: true,
      min: 0,
    },
    active: Boolean,
  });

  const Grade = moongose.model('grades', schema);

  return Grade;
};

// recebe o mongoose por parametro, e encapsula tudo numa função
// que vai ser exportada
// no fim, vai retornar a const criada da modelagem
// agora precisa importar isso no arquivo de configuracao de banco (index.js)
