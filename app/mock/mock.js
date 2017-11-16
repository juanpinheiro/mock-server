module.exports = [
  {
    'route': '/courses',
    'use': 200,
    'timeout': 500,
    200: {
      'data': {
        'id': 1,
        'status': 'comming-soon',
        'title': 'Fotografia Digital',
        'category': 'Arte e Entretenimento',
        'modules': [
          {
            'id': 1,
            'title': 'Entendendo a interface do Photoshop'
          },
          {
            'id': 2,
            'title': 'Entendendo a interface do Photoshop',
            'description': 'Um dos atores do mercado online é o Produtor. Nesta aula, Eugênio Pachelle explica o que faz um produtor digital.'
          }
        ]
      }
    },
    404: {
      'data': {
        'message': 'DEU RUIM CUZAO!'
      }
    }
  }
]
