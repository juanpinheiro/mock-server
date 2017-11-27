'use strict'

const repository = (container) => {
  const {database: db} = container.cradle

  const getAllMocks = () => {
    return new Promise((resolve, reject) => {
      const mocks = []
      const cursor = db.collection('mock').find({}, {'_id': 1, 'method': 1, 'route': 1})
      const addMock = (mock) => {
        mocks.push(mock)
      }
      const sendMocks = (err) => {
        if (err) {
          reject(new Error('An error occured fetching all mocks, err:' + err))
        }
        resolve(mocks.slice())
      }
      cursor.forEach(addMock, sendMocks)
    })
  }

  const getAllEndpoints = () => {
    return new Promise((resolve, reject) => {
      const mocks = []
      const cursor = db.collection('mock').find({})
      const addMock = (mock) => {
        mocks.push(mock)
      }
      const sendMocks = (err) => {
        if (err) {
          reject(new Error('An error occured fetching all mocks, err:' + err))
        }
        resolve(mocks.slice())
      }
      cursor.forEach(addMock, sendMocks)
    })
  }

  const getMockById = (orderId) => {
    return new Promise((resolve, reject) => {
      const ObjectID = container.resolve('ObjectID')
      const query = {_id: new ObjectID(orderId)}
      const response = (err, order) => {
        if (err) {
          reject(new Error('An error occuered retrieving a order, err: ' + err))
        }
        resolve(order)
      }
      db.collection('mock').findOne(query, {}, response)
    })
  }

  const deleteMockById = (orderId) => {
    return new Promise((resolve, reject) => {
      const ObjectID = container.resolve('ObjectID')
      const query = {_id: new ObjectID(orderId)}
      const response = (err, order) => {
        if (err) {
          reject(new Error('An error occuered retrieving a order, err: ' + err))
        }
        resolve(order)
      }
      db.collection('mock').remove(query, {}, response)
    })
  }

  const saveMock = (mock, restart) => {
    if (mock.hasOwnProperty('_id')) {
      const ObjectID = container.resolve('ObjectID')
      mock._id = new ObjectID(mock._id)
    }

    return new Promise((resolve, reject) => {
      db.collection('mock').save(mock, { w: 1 }, (err, mock) => {
        if (err) {
          reject(new Error(`An error occured trying to save a mock}`))
        }
        restart()
        resolve(mock)
      })
    })
  }
  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getAllMocks,
    getMockById,
    saveMock,
    getAllEndpoints,
    deleteMockById,
    disconnect
  })
}

const connect = (container) => {
  return new Promise((resolve, reject) => {
    if (!container.resolve('database')) {
      reject(new Error('connection db not supplied!'))
    }
    resolve(repository(container))
  })
}

module.exports = Object.assign({}, {connect})
