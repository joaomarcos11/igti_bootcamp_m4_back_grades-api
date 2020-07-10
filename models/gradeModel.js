export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error('Valor não pode ser negativo');
        }
      },
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const Grade = moongose.model('grades', schema);

  return Grade;
};

// recebe o mongoose por parametro, e encapsula tudo numa função
// que vai ser exportada
// no fim, vai retornar a const criada da modelagem
// agora precisa importar isso no arquivo de configuracao de banco (index.js)
